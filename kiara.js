// KIARA namespace.
var KIARA = KIARA || {};

// Error codes thrown from the methods.
KIARA.ErrorCode = {
  INVALID_ARGUMENT: "Invalid argument",
  JQUERY_NOT_LOADED: "jQuery is not loaded",
  CANNOT_LOAD_IDL: "Cannot load IDL",
  UNKNOWN_TYPE: "Unknown type",
}

// Check for jQuery.
if (typeof jQuery == "undefined")
  throw KIARA.ErrorCode.JQUERY_NOT_LOADED;

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

// Represents execution context. Operations in each context are completely indepedent from each other.
KIARA.Context = function() {
  this._dataTypes = {};
}

// Returns true if the type is a base type.
KIARA.Context.IsBaseType = function(typeName) {
  return typeName == "boolean" || typeName == "i8" || typeName == "u8" || typeName == "i16" || typeName == "u16" || 
         typeName == "i32" || typeName == "u32" || typeName == "i64" || typeName == "i64" || typeName == "float" ||
         typeName == "double" || typeName == "string" || typename == "void";
}

// Returns true if the type is an array.
KIARA.Context.IsArray = function(typeName) {
  return typeName.endsWith("[]");
}

// Returns element type of an array.
KIARA.Context.GetArrayElementType = function(typeName) {
  if (!this.IsArrayType(typeName))
    throw KIARA.ErrorCode.INVALID_ARGUMENT;
  return typeName.substr(0, typeName.length - 2);
}

// Returns a named type.
KIARA.Context.prototype.GetType = function(typeName) {
  if (this.IsBaseType(typeName)) {
    return new KIARA.DataType("base", typeName);
  } else if (this.IsArrayType(typeName)) {
    return new KIARA.DataType("array", this.GetType(this.GetArrayElementType(typeName)));
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

// Constructs a client function that will automatically serialize all arguments and send them over network. When 
// response is received, it is deserialized and passed to a callback.
KIARA.Connection.prototype.GenerateClientFunc = function(method, typeMapping, callback) {
  var parsedMapping = this._parseTypeMapping(method, typeMapping);
  var connection = this._getConnection(this._services[method]);
  return function() {
    var rawData = parsedMapping.serializer(arguments);
    connection.send(rawData);
    connection.ondata = function(data) {
      callback(parsedMapping.deserializer(data));
      delete connection.ondata;
    }
  }
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

  }

  function getValue(argument, path) {
    var value = argument;
    for (var index in path)
      value = value[path[index]];
    return value;
  }

  function setValue(result, path, value) {
    var cell = result;

    // Construct necessary arrays/objects first.
    for (var index = 0; index < path.length - 1; index++) {
      var indexOrField = path[index];
      if (cell[indexOrField] == undefined) {
        if (typeof path[index+1] == "number")
          cell[indexOrField] = [];
        else if (typeof path[index+1] == "string")
          cell[indexOrField] = {};
        else
          throw KIARA.ErrorCode.INVALID_ARGUMENT;
      }
      cell = cell[indexOrField];
    }

    cell[path[path.length-1]] = value;
  }

  function getRawData(arguments, serializeInfo) {
    var rawData = [];
    for (var entryIndex in serializeInfo) {
       var entry = serializeInfo[entryIndex];
       switch (entry.type) {
         case "zc-string":
	   var str = getValue(arguments, entry.path);
           for (var i = 0; i < str.length; i++)
             rawData.push(["u16", str.charCodeAt(i)]);
           rawData.push(["u16", 0]);
           break;
         case "array":
           var array = getValue(entry.path);
           rawData.push(["u32", array.length]);
           for (var i = 0; i < array.length; i++) {
             var nestedData = getRawData(array[i], entry.nested);
             rawData = rawData.concat(nestedData);
           }
           break;
         case "u8":
         case "i8":
         case "u16":
         case "i16":
         case "u32":
         case "i32":
           var value = getValue(arguments, entry.path);
           rawData.push([entry.type, value]);
           break;
         case "float":
           var value = getValue(arguments, entry.path);
           rawData.push(["f32", value]);
           break;
         case "double":
           var value = getValue(arguments, entry.path);
           rawData.push(["f64", value]);
           break;
         case "enum":
           var value = getValue(arguments, entry.path);
           if (value in entry.enumDict)
             rawData.push(["u32", entry.enumDict[value]]);
           else
             rawData.push(["u32", entry.enumDefault]);
           break;
         default:
           throw KIARA.ErrorCode.INVALID_ARGUMENT;
       }
    }
    return rawData;
  }

  function universalSerializer(arguments) {
    var rawData = getRawData(arguments, argsSerializeInfo);
    
    var typeMetaData = {
      "u8": [Uint8Array, 1],
      "i8": [Int8Array, 1],
      "u16": [Uint16Array, 2],
      "i16": [Int16Array, 2],
      "u32": [Uint32Array, 4],
      "i32": [Int32Array, 4],
      "f32": [Float32Array, 4],
      "f64": [Float64Array, 8],
    }

    var numBytes = 0;
    for (var i = 0; i < rawData.length; i++) {
      var typeName = rawData[i][0];
      var typeSize = typeMetaData[typeName][1];
      
      numBytes += typeSize;
    }
      
    var buffer = new ArrayBuffer(numBytes);
    var offset = 0;
    for (var i = 0; i < rawData.length; i++) {
      var typeName = rawData[i][0];
      var value = rawData[i][1];
      
      var typeSize = typeMetaData[typeName][1];
      var typedArrayType = typeMetaData[typeName][0];
      var typedArray = new typedArrayType(buffer, offset, 1);
      
      typedArray[0] = value;
      
      offset += typeSize;
    }
    
    return buffer;
  }

  function universalDeserializer(result) {
    // TODO(rryk): Implement.
  }

  return {
    serializer:universalSerializer,
    deserializer: function(result) {
    },
  };
}

// Private. Parses downloaded IDL and stores internal representation of it.
KIARA.Connection.prototype._parseIDL = function(url, idl) {
  // Currently it's just a hack that uses dictionary for a set of known IDLs.
  if (url == "http://yellow.cs.uni-saarland.de/home/kiara/login.idl") {
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
      session_id: "session_id",
    });
    this._addService("login", {
      "login_to_simulator": [ "LoginResponse", [ "LoginRequest" ] ],
      "set_login_level": [ "boolean", [ "FullName", "string" ] ],
    }, "WebSocket", "http://yellow.cs.uni-saarland.de:8002/");
  }
}

// Private. Prepends namespace to the type name if such type is defined. Otherwise returns type name unchanged. Does not 
// validate if the unchanged type exists.
KIARA.Connection.prototype._prependNamespaceIfNeeded = function(type) {
  // Unwrap (multidimensional) array and get the element type.
  var elementType = type;
  while (this._context.IsArrayType(elementType)) {
    elementType = this._context.GetArrayElementType(elementType);
  }

  // Base types are defined in the global namespace. Do not prepend our namespace.
  if (this._context.IsBaseType(elementType))
    return;

  // Check if the type is defined in our namespace and prepend it if so.
  var typeInNamespace = this._namespace + "." + type;
  try {
   this._context.GetType(typeInNamespace);
   type = typeInNamespace;
  } catch (error) {
    if (error != KIARA.ErrorCode.UNKNOWN_TYPE)
      throw error;  // any other error should be propagated further
  }

  return type;
}


// Private. Adds a struct type. Prepends namespaces where necessary.
KIARA.Connection.prototype._addStructType = function(name, def) {
  for (var fieldName in def)
    def[fieldName] = prependNamespaceIfNeeded(def[fieldName]);
  
  this._context.AddStructType(this._namespace + "." + name, def); 
}

// Private. Adds an enumeration type. Prepends namespaces where necessary.
KIARA.Connection.prototype._addEnumType = function(name, def) {
  this._context.AddEnumType(this._namespace + "." + name, def);
}

// Private. Adds a service. Prepends namespaces where necessary.
KIARA.Connection.prototype._addService = function(name, methods, protocol, url) {
  var newMethods = {};
  for (var methodName in methods) {
    var methodDef = methods[methodName];
    newMethods[methodName].response = this._prependNamespaceIfNeeded(methodDef[0]);
    newMethods[methodName].request = [];
    for (var argIndex in methodDef[1])
      newMethods[methodName].request[argIndex] = this._prependNamespaceIfNeeded(methodDef[1][argIndex]);
  }

  this._services[this._namespace + "." + name] = {
    methods: newMethods,
    protocol: protocol,
    url: url
  };
}
