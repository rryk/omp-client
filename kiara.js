// KIARA namespace.
var KIARA = KIARA || {};

// Number of attempts a WebSocket connection will use to connect before failing.
KIARA.WebSocketReconnectAttempts = 5;

// Error codes thrown from the methods.
KIARA.ErrorCode = {
  INVALID_ARGUMENT: "Invalid argument",
  CANNOT_LOAD_IDL: "Cannot load IDL",
  INVALID_TYPE_MAPPING: "Invalid type mapping",
  UNKNOWN_TYPE: "Unknown type",
  UNSUPPORTED_PROTOCOL: "Unsupported protocol",
  WEBSOCKET_ERROR: "WebSocket error"
}

// Loads a script and fires callback, when it's loaded.
KIARA.LoadScript = function(url, callback) {
   // Find or create head element.
   var head = document.getElementsByTagName('head')[0];
   if (head == undefined) {
     head = document.createElement('head');
     document.body.parentElement.insertBefore(document.body, head);
   }
   
   // Create script element.
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   // Bind the event to the callback function (there are several events for cross browser compatibility).
   script.onreadystatechange = callback;
   script.onload = callback;

   // Fire the loading.
   head.appendChild(script);
}

// Check for jQuery.
if (typeof jQuery == "undefined")
  LoadScript("jquery-1.9.1.js");

// Add String.endsWith method.
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// Represents a data type.
KIARA.DataType = function(kind, typeDefinition) {
  this.kind = kind;
  
  if (this.kind == "base")
    this.baseTypeName = typeDefinition;
  
  if (this.kind == "struct")
    this.fields = typeDefinition;

  if (this.kind == "enum")
    this.values = typeDefinition;

  if (this.kind == "array")
    this.elementType = typeDefinition;
}

// Returns true if the type is a base type.
KIARA.DataType.IsBaseType = function(typeName) {
  return typeName == "boolean" || typeName == "i8" || typeName == "u8" || typeName == "i16" || typeName == "u16" || 
         typeName == "i32" || typeName == "u32" || typeName == "i64" || typeName == "u64" || typeName == "float" ||
         typeName == "double" || typeName == "string" || typeName == "void";
}

// Returns true if the type is an array.
KIARA.DataType.IsArrayType = function(typeName) {
  return typeName.endsWith("[]");
}

// Returns element type of an array.
KIARA.DataType.GetArrayElementType = function(typeName) {
  if (!KIARA.DataType.IsArrayType(typeName))
    throw KIARA.ErrorCode.INVALID_ARGUMENT;
  return typeName.substr(0, typeName.length - 2);
}

// Represents execution context. Operations in each context are completely indepedent from each other.
KIARA.Context = function() {
  this._dataTypes = {};
}

// Generates unique identifiers.
KIARA.Context.GenerateUID = function() {
  if (KIARA.Context._nextUID == undefined)
    KIARA.Context._nextUID = 0;
  return KIARA.Context._nextUID++;
}

// Returns a named type.
KIARA.Context.prototype.GetType = function(typeName) {
  if (KIARA.DataType.IsBaseType(typeName)) {
    return new KIARA.DataType("base", typeName);
  } else if (KIARA.DataType.IsArrayType(typeName)) {
    return new KIARA.DataType("array", this.GetType(KIARA.DataType.GetArrayElementType(typeName)));
  } else if (this._dataTypes[typeName] != undefined) {
    return this._dataTypes[typeName];
  }

  throw KIARA.ErrorCode.UNKNOWN_TYPE;
}

// Adds a struct type.
KIARA.Context.prototype.AddStructType = function(typeName, fields) {
  var structDefinition = {};
  for (var fieldName in fields)
    structDefinition[fieldName] = this.GetType(fields[fieldName]);
  this._dataTypes[typeName] = new KIARA.DataType("struct", structDefinition);
}

// Adds an enumeration type.
KIARA.Context.prototype.AddEnumType = function(typeName, values) {
  this._dataTypes[typeName] = new KIARA.DataType("enum", values);
}

// Represents a connection to the server.
KIARA.Connection = function(context, url) {
  // Check arguments.
  if (!(typeof context == "object" && context instanceof KIARA.Context &&
        typeof url == "string"))
    throw KIARA.ErrorCode.INVALID_ARGUMENT;

  // Initialize internal data structures.
  this._context = context;
  this._services = {};

  // Download and parse IDL.
  var that = this;
  $.ajax({
    url : url,
    async: false,
    success: function(data) {
      that._parseIDL(url, data);
    },
    error: function() {
      throw KIARA.ErrorCode.CANNOT_LOAD_URL;
    },
  });
}

// Constructs a client function that will automatically serialize the method call and send it to the server. The 
// function will return an empty object, which can be used to set up a callback when response is received:
//
//   var login = conn.GenerateClientFunc(...);
//   login(args).onreturn = function(returnValue) { /* process return value here */ };
//
// Callback will be called with one argument that corresponds to the return value of the function in IDL.
KIARA.Connection.prototype.GenerateClientFunc = function(qualifiedMethodName, typeMapping) {
  var parsedMapping = this._parseTypeMapping(qualifiedMethodName, typeMapping);
  var that = this;
  return function() { return that._callWrapper(qualifiedMethodName, parsedMapping, arguments); }
}

KIARA.Connection.prototype._callWrapper = function(qualifiedMethodName, parsedMapping, args) {
  // Get connection to the service.
  var localMethodName = qualifiedMethodName.substr(this._namespace.length + 1);
  var serviceName = localMethodName.substr(0, localMethodName.indexOf("."));
  var service = this._services[serviceName];
  if (service == undefined)
    return KIARA.ErrorCode.INVALID_ARGUMENT;
  var connection = KIARA.Connection._getConnection(service.protocol, service.url);
  
  // Serialize method call.
  var serializedArgs = parsedMapping.serializer(args);
  var uid = KIARA.Context.GenerateUID();
  var serializedMethodCall = KIARA.Connection._serializeMethodCall(uid, qualifiedMethodName, serializedArgs);
  
  // Prepare response handler.
  var callbackContainer = {};
  
  function handleData(socket, serializedResult) {
    if (callbackContainer.onreturn == undefined)
      return;
    var uidArray = new Uint32Array(serializedResult, 0, 1);
    if (uidArray[0] == uid) {
      var returnValue = parsedMapping.deserializer(serializedResult.slice(4));
      callbackContainer.onreturn(returnValue);
    }
    connection.dataHandlers.splice(connection.dataHandlers.indexOf(handleData), 1);
  }
  
  function handleError(socket, failedPacket) {
    var uidArray = new Uint32Array(failedPacket, 0, 1);
    if (uidArray[0] == uid) {
      if (callbackContainer.onerror == undefined)
        throw KIARA.ErrorCode.WEBSOCKET_ERROR;
      else
        callbackContainer.onerror();
    }
  }
  
  connection.dataHandlers.push(handleData);
  connection.errorHandlers.push(handleError);
  
  // Send data.
  connection.send(serializedMethodCall);
  
  return callbackContainer;
}

KIARA.Connection._serializeMethodCall = function(uid, methodName, serializedArgs) {
  // Allocate memory.
  var serializedMethodCall = new ArrayBuffer(
    4 +                          // Unique ID.
    methodName.length * 2 + 2 +  // Method name and trailing 0.
    serializedArgs.byteLength);  // Args.
  
  // Store unique ID.
  var uidArray = new Uint32Array(serializedMethodCall, 0, 1);
  uidArray[0] = uid;
  
  // Store method name.
  var methodNameArray = new Uint16Array(serializedMethodCall, 4, methodName.length + 1);
  for (var i = 0; i < methodName.length; i++)
    methodNameArray[i] = methodName.charCodeAt(i);
  methodNameArray[methodName.length] = 0;
  
  // Copy serialized args.
  var srcArray = new Uint8Array(serializedArgs);
  var dstArray = new Uint8Array(serializedMethodCall, 4 + methodName.length * 2 + 2, srcArray.length);
  dstArray.set(srcArray);
  
  return serializedMethodCall;
}

KIARA.Connection._getConnection = function(protocol, url, reconnectAttempt) {
  if (protocol == "WebSocket") {
    if (KIARA.Connection._webSocketCache == undefined)
      KIARA.Connection._webSocketCache = {};
         
    if (KIARA.Connection._webSocketCache[url] == undefined) {
      var socket = new WebSocket(url);
      socket.dataHandlers = [];
      socket.errorHandlers = [];
      socket.bufferedPackets = [];
      socket.binaryType = "arraybuffer";
      
      socket.onerror = socket.onclose = function() {
        // Delete connection from the cache.
        delete KIARA.Connection._webSocketCache[url];
        
        // If there are any buffered messages - try to reconnect.
        if (socket.bufferedPackets.length > 0) {
          // Initialize reconnect attempt if neccessary.
          if (reconnectAttempt == undefined)
            reconnectAttempt = 1;
            
          if (reconnectAttempt > KIARA.WebSocketReconnectAttempts) {
            // Execute error handlers if this is the last reconnect attempt.
            if (socket.bufferedPackets.length > 0) {
              for (var handlerIndex in socket.errorHandlers) {
                var handler = socket.errorHandlers[handlerIndex];
                for (var packetIndex in socket.bufferedPackets) {
                  var packet = socket.bufferedPackets[packetIndex];
                  handler(socket, packet);
                }
              }
            }
          } else {
            // Otherwise, retry connection.
            reconnectAttempt++;
        
            var connection = KIARA.Connection._getConnection(protocol, url, reconnectAttempt);
            connection.dataHandlers = socket.dataHandlers;
            connection.errorHandlers = socket.errorHandlers;
            connection.bufferedPackets = socket.bufferedPackets;
          }
        }
      };
      
      socket.onopen = function(event) {
        // Send buffered packets.
        var packet;
        while (packet = socket.bufferedPackets.shift())
          socket.oldSend(packet);
      }
      
      socket.onmessage = function(event) {
        // Execute data handlers.
        for (var handlerIndex in socket.dataHandlers) {
          var handler = socket.dataHandlers[handlerIndex];
          handler(socket, event.data);
        }
      }
      
      socket.oldSend = socket.send;
      socket.send = function(packet) {
        if (socket.readyState == socket.OPEN)
          socket.oldSend(packet);
        else
          socket.bufferedPackets.push(packet);
      }
      
      KIARA.Connection._webSocketCache[url] = socket;
    }
    
    return KIARA.Connection._webSocketCache[url];
  } else {
    throw KIARA.ErrorCode.UNSUPPORTED_PROTOCOL;
  }
}

// Returns an array of raw data entries (u8-32, i8-32) from args using serializeInfo. This can be directly written to 
// the wire protocol.
KIARA.Connection._getRawData = function(args, serializeInfo) {
  var rawData = [];
  for (var entryIndex in serializeInfo) {
    var entry = serializeInfo[entryIndex];

    // Get field value.
    var value = args;
    for (var index in entry.path) {
      if (value[entry.path[index]] != undefined)
        value = value[entry.path[index]];
      else
        throw KIARA.ErrorCode.INVALID_ARGUMENT;
    }

    switch (entry.type) {
      case "zc-string":
        for (var i = 0; i < value.length; i++)
          rawData.push(["u16", value.charCodeAt(i)]);
        rawData.push(["u16", 0]);
        break;
      case "array":
        rawData.push(["u32", value.length]);
        for (var i = 0; i < value.length; i++) {
          var nestedData = KIARA.Connection._getRawData(value[i], entry.nested);
          rawData = rawData.concat(nestedData);
        }
        break;
      case "u8":
      case "i8":
      case "u16":
      case "i16":
      case "u32":
      case "i32":
      case "float":
      case "double":
        rawData.push([entry.type, value]);
        break;
      case "enum":
        if (value in entry.enumDict)
          rawData.push(["u32", entry.enumDict[value]]);
        else
          rawData.push(["u32", entry.enumDefaultValue]);
        break;
      case "boolean":
        rawData.push(["u8", value ? 1 : 0]);
      default:
        throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
    }
  }
  return rawData;
}

// Private. Internal representation of the low-level wire types and their size on the wire.
KIARA.Connection._typeMetaData = {
  "u8": [Uint8Array, 1],
  "i8": [Int8Array, 1],
  "u16": [Uint16Array, 2],
  "i16": [Int16Array, 2],
  "u32": [Uint32Array, 4],
  "i32": [Int32Array, 4],
  "float": [Float32Array, 4],
  "double": [Float64Array, 8],
}

// Private. Universal serializer that constructs request from args using serializeInfo (see _parseTypeMapping for 
// details).
KIARA.Connection._universalSerializer = function(args, serializeInfo) {
  var rawData = KIARA.Connection._getRawData(args, serializeInfo);
  var numBytes = 0;
  for (var i = 0; i < rawData.length; i++) {
    var typeName = rawData[i][0];
    var typeSize = KIARA.Connection._typeMetaData[typeName][1];
    
    numBytes += typeSize;
  }
    
  var buffer = new ArrayBuffer(numBytes);
  var offset = 0;
  for (var i = 0; i < rawData.length; i++) {
    var typeName = rawData[i][0];
    var value = rawData[i][1];
    
    var typeByteSize = KIARA.Connection._typeMetaData[typeName][1];
    var typedArrayType = KIARA.Connection._typeMetaData[typeName][0];
    
    // Set value of the typedArrayType to the offset. This workaround is necessary because typed array constructors
    // require offset parameter to be multiple of the underlying type size. To resolve this, we create a new array
    // containing just one element of necessary type, then create byte-array view into it and copy the value 
    // byte-by-byte.
    var typedArray = new typedArrayType(1);
    typedArray[0] = value;    
    var byteSrcArray = new Uint8Array(typedArray);
    var byteDstArray = new Uint8Array(buffer, offset, typeByteSize);
    byteDstArray.set(byteSrcArray);
    
    offset += typeByteSize;
  }
  
  return buffer;
}

KIARA.SerializedDataReader = function(serializedData) {
  this.data = serializedData;
  this.offset = 0;
}

KIARA.SerializedDataReader.prototype.read = function(entry) {
  // Entry may be just a type name. Wrap this type name into an entry object.
  if (typeof entry == "string")
    entry = { type: entry };

  switch (entry.type) {
    case "zc-string":
      var buffer = "";
      var charCode = this.read("u16");
      while (charCode != 0) {
        buffer += String.fromCharCode(charCode);
        charCode = this.read("u16");
      }
      return buffer;
    case "u8":
    case "i8":
    case "u16":
    case "i16":
    case "u32":
    case "i32":
    case "float":
    case "double":
      var typedArrayType = KIARA.Connection._typeMetaData[entry.type][0];
      var typeByteSize = KIARA.Connection._typeMetaData[entry.type][1];
      var typedArray = new typedArrayType(this.data.slice(this.offset, typeByteSize + this.offset));
      this.offset += typeByteSize;
      return typedArray[0];
    case "enum":
      var intValue = this.read("u32");      
      for (var key in entry.enumDict)
        if (entry.enumDict[key] == intValue)
          return key;
      return entry.enumDefaultKey;
    case "boolean":
      return this.read("u8") == 1;
    case "array":
      var length = this.read("u32");
      var array = [];
      for (var index = 0; index < length; index++)
        array.push(KIARA.Connection._universalDeserializer(this, entry.nested));
      return array;
    default:
      throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
  }
}

// Private. Given index or field name returns a container of an appopriate type (array or object respectively). If 
// passed container is undefined, a new container is created, otherwise the existing container is checked to be of an
// appropriate type. If so, it is returned unchanged, otherwise an exception KIARA.ErrorCode.INVALID_TYPE_MAPPING is 
// thrown as it indicates inconsistency in the type mapping string.
KIARA.Connection._ensureContainer = function(indexOrField, container) {
  if (typeof indexOrField == "number") {
    if (container == undefined)
      return [];
    else if (Object.prototype.toString.call(container) == "[object Array]")
      return container;
    else
      throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
  } else if (typeof indexOrField == "string") {
    if (container == undefined)
      return {};
    else if (Object.prototype.toString.call(container) == "[object Object]")
      return container;
    else
      throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
  } else {
    throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
  }
}

// Private. Universal deserializer that constructs return value from the result using deserializeInfo (see 
// _parseTypeMapping for details).
KIARA.Connection._universalDeserializer = function(result, deserializeInfo) {
  var retVal;
  
  // We may receive an existing reader as input (used for reading arrays). Then we must not re-create it.
  var reader;
  if (result instanceof KIARA.SerializedDataReader)
    reader = result;
  else
    reader = new KIARA.SerializedDataReader(result);

  for (var entryIndex in deserializeInfo) {
    var entry = deserializeInfo[entryIndex];
    if (entry.path.length == 0) {
      if (retVal == undefined)
        retVal = reader.read(entry);
      else
        throw KIARA.ErrorCode.INVALID_TYPE_MAPPING;
      continue;
    }
    
    // Construct root container.
    retVal = KIARA.Connection._ensureContainer(entry.path[0], retVal);

    // Construct nested containers.
    var cell = retVal;
    for (var index = 0; index < entry.path.length - 1; index++) {
      var indexOrField = entry.path[index];
      cell[indexOrField] = KIARA.Connection._ensureContainer(entry.path[index + 1], cell[indexOrField]);
      cell = cell[indexOrField];
    }
    
    // Read and store value.
    cell[entry.path[entry.path.length - 1]] = reader.read(entry);
  }

  return retVal;
}

// Private. Parses type mapping string and return an object containing serializer for arguments and deserializer for
// result.
KIARA.Connection.prototype._parseTypeMapping = function(method, typeMapping) {
  // Serialize/Deserializer info is an array where each entry is of the form 
  //
  //   { 
  //     encoding: encodingType,
  //     path: [ index1, field2, index3 ... ],
  //     nested: [ ... ],
  //     enumDict: { name1: value1, name2: value2, ... ]
  //     enumDefault: value,
  //   }.
  //
  // The serializer will exract data using path and write onto wire using specified encoding and in the same order as
  // entries appear in the array. Note that serializer's path should always begin with an index to specify argument 
  // index. The deserilizer will do reverse process, reading fields from the wire in the same order entries appear in 
  // the array and writing them into respective path creating objects and arrays where necessary. Nested field is used
  // for arrays and describes how to encode each element in the array in the same way as top-level array. Enum 
  // dictionary and enum default are only used when encoding is "enum". The value is expected to be string and if found
  // in dictionary (enumDict) coded as integer value, otherwise as default integer value (enumDefault).
  //
  // Available encoding types: 
  //   zc-string     - zero-coded-string, UTF-16 characters are coded using Uint16Array.
  //   array         - size of the array is coded using Uint32Array which is followed by the elements.
  //   u8-32, i8-32  - integers are coded using [Uint|Int][8|16|32]Array, values outside of valid range will overflow.
  //   float, double - reals are coded using Float[32|64]Array, values outside of valid range will overflow.
  //   enum          - enums values are coded as integers using Uint32Array.
  //   boolean       - coded using Uint8Array.
  //
  // For example, the following arguments
  //
  //   arguments: [
  //     {
  //       name: {
  //         first: "str1", 
  //         last: "str2",
  //       },
  //       ratio: 3.14159265359
  //     }, 
  //     [
  //       [
  //         {n: "ab", v: 123}, 
  //         {n: "bc", v: 321}
  //       ],
  //       [
  //         {n: "cd", v: 231}
  //       ]
  //     ]
  //   ]
  //
  // using the following info
  //
  //   [
  //     { 
  //       type: "zc-string", 
  //       path: [0, "name", "first"] 
  //     },
  //     { 
  //       type: "zc-string", 
  //       path: [0, "name", "last"] 
  //     },
  //     { 
  //       type: "array", 
  //       path: [1, "field"], 
  //       nested: [
  //         { 
  //           type: "array", 
  //           path: [], 
  //           nested: [
  //             { 
  //               type: "zc-string", 
  //               path: ["n"] 
  //             },
  //             { 
  //               type: "u8", 
  //               path: ["v"] 
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     { 
  //       type: "double", 
  //       path: [0, "ratio"] 
  //     }
  //   ];
  // 
  // will be serialized as following
  //
  //    [
  //      's', 't', 'r', '1', 0,  // Uint16Array
  //      's', 't', 'r', '2', 0,  // Uint16Array
  //      2, 2,                   // Uint32Array
  //      'a', 'b', 0,            // Uint16Array
  //      123,                    // Uint8Array
  //      'b', 'c', 0,            // Uint16Array
  //      65,                     // Uint8Array, overflow (321 mod 256 = 65)
  //      1,                      // Uint32Array
  //      'c', 'd', 0,            // Uint16Array
  //      231,                    // Uint8Array
  //      3.14159265359           // Float64Array
  //    ]

  var argsSerializeInfo;
  var resultDeserializeInfo;

  // Currently it's just a hack that has pre-coded functions for each method.
  if (method == "opensim.login.login_to_simulator") {
    argsSerializeInfo = [
      {type: "zc-string", path: [0, "name", "first"]},
      {type: "zc-string", path: [0, "name", "last"]},
      {type: "zc-string", path: [0, "pwdHash"]},
      {type: "zc-string", path: [0, "start"]},
      {type: "zc-string", path: [0, "channel"]},
      {type: "zc-string", path: [0, "version"]},
      {type: "zc-string", path: [0, "platform"]},
      {type: "zc-string", path: [0, "mac"]},
      {type: "array", path: [0, "options"], nested: [
        {type: "zc-string", path: []},
      ]},
      {type: "zc-string", path: [0, "id0"]},
      {type: "zc-string", path: [0, "agree_to_tos"]},
      {type: "zc-string", path: [0, "read_critical"]},
      {type: "zc-string", path: [0, "viewer_digest"]},
    ];
    resultDeserializeInfo = [
      {type: "zc-string", path: ["name", "first"]},
      {type: "zc-string", path: ["name", "last"]},
      {type: "u32", path: ["sim_ip"]},
      {type: "zc-string", path: ["start_location"]},
      {type: "u32", path: ["seconds_since_epoch"]},
      {type: "zc-string", path: ["message"]},
      {type: "u32", path: ["circuit_code"]},
      {type: "u16", path: ["sim_port"]},
      {type: "zc-string", path: ["secure_session_id"]},
      {type: "zc-string", path: ["look_at"]},
      {type: "zc-string", path: ["agent_id"]},
      {type: "zc-string", path: ["inventory_host"]},
      {type: "i32", path: ["region_y"]},
      {type: "i32", path: ["region_x"]},
      {type: "zc-string", path: ["seed_capability"]},
      {type: "enum", path: ["agent_access"], 
       enumDict: {Mature: 0, Teen: 1}, enumDefaultValue: 0, enumDefaultKey: "Mature"},
      {type: "zc-string", path: ["session_id"]},
    ];
  } else if (method == "opensim.login.set_login_level") {
    argsSerializeInfo = [
      {type: "zc-string", path: [0, "first"]},
      {type: "zc-string", path: [0, "last"]},
      {type: "zc-string", path: [1]},
    ];
    resultDeserializeInfo = [
      {type: "boolean", path: []}
    ];
  }

  return {
    serializer: function(args) { return KIARA.Connection._universalSerializer(args, argsSerializeInfo); },
    deserializer: function(result) { return KIARA.Connection._universalDeserializer(result, resultDeserializeInfo); },
  };
}

// Private. Parses downloaded IDL and stores internal representation of it.
KIARA.Connection.prototype._parseIDL = function(url, idl) {
  // Currently it's just a hack that uses dictionary for a set of known IDLs.
  if (url == "http://" + location.host +  "/home/kiara/login.idl") {
    this._namespace = "opensim";
    this._addStructType("FullName", {
      first: "string", 
      last: "string"
    });
    this._addStructType("LoginRequest", {
      name: "FullName",
      pwdHash: "string",
      start: "string",
      channel: "string",
      version: "string",
      platform: "string",
      mac: "string",
      options: "string[]",
      id0: "string",
      agree_to_pos: "string",
      read_critical: "string",
      viewer_digest: "string"
    });
    this._addEnumType("AccessType", {Mature: 0, Teen: 1});
    this._addStructType("LoginResponse", {
      name: "FullName",
      sim_ip: "u32",
      start_location: "string",
      seconds_since_epoch: "u64",
      message: "string",
      circuit_code: "u32",
      sim_port: "u16",
      secure_session_id: "string",
      look_at: "string",
      agent_id: "string",
      inventory_host: "string",
      region_y: "i32",
      region_x: "i32",
      seed_capability: "string",
      agent_access: "AccessType",
      session_id: "string",
    });
    this._addService("login", "WebSocket", "ws://" + location.host + ":8002/kiara/login", {
      "login_to_simulator": [ "LoginResponse", { request: "LoginRequest" } ],
      "set_login_level": [ "boolean", { name: "FullName", password: "string", level: "i32" } ],
    });
  }
}

// Private. Prepends namespace to the type name if such type is defined. Otherwise returns type name unchanged. Does not 
// validate if the unchanged type exists.
KIARA.Connection.prototype._prependNamespaceIfNeeded = function(type) {
  // Unwrap (multidimensional) array and get the element type.
  var elementType = type;
  while (KIARA.DataType.IsArrayType(elementType)) {
    elementType = KIARA.DataType.GetArrayElementType(elementType);
  }

  // Base types are defined in the global namespace. Do not prepend our namespace.
  if (KIARA.DataType.IsBaseType(elementType))
    return type;

  // Check if the type is defined in our namespace and prepend it if so.
  var typeInNamespace = this._namespace + "." + type;
  try {
   this._context.GetType(typeInNamespace);
   return typeInNamespace;
  } catch (error) {
    if (error != KIARA.ErrorCode.UNKNOWN_TYPE)
      throw error;  // any other error should be propagated further
  }

  return type;
}


// Private. Adds a struct type. Prepends namespaces where necessary.
KIARA.Connection.prototype._addStructType = function(name, def) {
  for (var fieldName in def)
    def[fieldName] = this._prependNamespaceIfNeeded(def[fieldName]);
  
  this._context.AddStructType(this._namespace + "." + name, def);
}

// Private. Adds an enumeration type. Prepends namespaces where necessary.
KIARA.Connection.prototype._addEnumType = function(name, def) {
  this._context.AddEnumType(this._namespace + "." + name, def);
}

// Private. Adds a service. Prepends namespaces where necessary.
KIARA.Connection.prototype._addService = function(name, protocol, url, methods) {
  var newMethods = {};
  for (var methodName in methods) {
    var methodDef = methods[methodName];
    newMethods[methodName] = {};
    newMethods[methodName].response = this._prependNamespaceIfNeeded(methodDef[0]);
    newMethods[methodName].request = [];
    for (var argName in methodDef[1])
      newMethods[methodName].request[argName] = this._prependNamespaceIfNeeded(methodDef[1][argName]);
  }

  this._services[name] = {
    methods: newMethods,
    protocol: protocol,
    url: url
  };
}
