(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(
            require('logger'), require('kiara'), require('md5'), require('omp'), require('base64'), require('katajs'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['logger', 'kiara', 'md5', 'base64', 'katajs'], function (logger, kiara, md5, base64, Kata) {
            return (root.OMP = factory(logger, kiara, md5, base64, Kata));
        });
    } else {
        // Browser globals
        root.OMP = factory(root.logger, root.KIARA, root.md5, root.base64, root.Kata);
    }
} (this, function (logger, KIARA, md5, base64, Kata) {

    // Notation. Methods with "_" prefix are protected, methods with "__" prefix are private, other methods are public.

    var REMOTE_IDL_URL_PREFIX = "http://yellow.cg.uni-saarland.de/home/omp-client/idl/";
    //var REMOTE_IDL_URL_PREFIX = "http://localhost:8080/idl/";


    var OMP = OMP || {};

    var isNode = (typeof process === 'object' && typeof require === 'function');
    var isWeb = typeof window === 'object';
    var isWorker = typeof importScripts === 'function';

    if (isNode) {
        var util = require('util');
        OMP.inherits = util.inherits;
    } else {
        OMP.inherits = function(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype);
            ctor.prototype.constructor = ctor;
            ctor.superclass = superCtor.prototype;
        };
    }

    //  =============================== Client ===============================

    OMP.Client = function() {
        var self = this;

        self._registerProtocols();
        self._context = KIARA.createContext();
        self.__server = {};
    }

    // Abstract. Registers protocols necessary for a given server.
    OMP.Client.prototype._registerProtocols = function() {}

    // Register a wrapper.
    OMP.Client.prototype._addServerFunc = function(name, conn) {
        var self = this;

        var wrapper = conn.generateFuncWrapper(name, "...");
        if (typeof(wrapper) != "function")
            throw new KIARA.Error(KIARA.API_ERROR, "Passed function wrapper is not a function.");
        self.__server[name] = wrapper;
    }

    // Call a function |functionName| with |arguments|.
    OMP.Client.prototype._call = function(functionName /* ... arguments ... */) {
        var self = this;

        // Remove function name from the arguments.
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);

        // Call the function.
        return self.__server[functionName].apply(null, args);
    }

    //  =============================== OpenSIMClient ===============================

    OMP.OpenSIMClient = function () {
        var self = this;

        OMP.Client.call(self);
    }
    OMP.inherits(OMP.OpenSIMClient, OMP.Client);

    OMP.OpenSIMClient.prototype.login = function (first, last, password, callback) {
        var self = this;

        self.__loginConnection = self._context.openConnection(REMOTE_IDL_URL_PREFIX + "login.kiara",
            function (err, conn) {
                if (err) {
                    logger.error(err);
                    return;
                }
                var login = conn.generateFuncWrapper(
                    "omp.login.login",
                    "Request.request : Args[0]; Response : Result;");

                var loginRequest = {
                    name: {
                        first: first,
                        last: last
                    },
                    pwdHash: "$1$" + md5.hex_md5(password),
                    start: "last",
                    channel: "OpenSIM OMP JS OpenSIMClient",
                    version: "0.1",
                    platform: "Lin",
                    mac: "00:00:00:00:00:00",  // FIXME(rryk): We can't get MAC address from the JavaScript.
                    options: ["inventory-skeleton", "inventory-root"],
                    id0: "00000000-0000-0000-0000-000000000000",  // FIXME(rryk): Not sure how to compute hardware hash.
                    agree_to_tos: "true",
                    read_critical: "true",
                    viewer_digest: "00000000-0000-0000-0000-000000000000"
                };

                var loginCall = login(loginRequest);
                loginCall.on('result', function (exception, result) {
                    if (exception) {
                        logger.error("Got exception for login request: " + exception);
                    } else {
                        self._circuitCode = result["circuit_code"];
                        self._sessionID = result["session_id"];
                        self._agentID = result["agent_id"];
                        callback();
                    }
                });
                loginCall.on('error', function (error) {
                    logger.error("Got error for login request: " + error);
                });
            }
        );
    }

    OMP.OpenSIMClient.prototype.connect = function(callback) {
        var self = this;
        if (!self._sessionID || !self._agentID || !self._circuitCode)
            throw new KIARA.Error(KIARA.API_ERROR, "Login response missing to connect. Please login first.");

        var connection = self.__regionConnection = self._context.openConnection(
            REMOTE_IDL_URL_PREFIX + "interface.kiara",
            function(err, conn) {
                if (err)
                  callback(false, err);

                self.__supportedInterfaces = [REMOTE_IDL_URL_PREFIX + "interface.kiara"];
                self.__regionConnection.loadIDL(REMOTE_IDL_URL_PREFIX + "interface.kiara");
                self._addServerFunc("omp.interface.implements", self.__regionConnection);

                self.__configureConnectInterfaces(function() {
                    self._configureAppInterfaces(function() {
                        self._call(
                            "omp.connectInit.useCircuitCode",
                            self._circuitCode,
                            self._agentID,
                            self._sessionID
                        );
                        self.__clientCallback = callback;
                    });
                });
            }
        );
    }

    OMP.OpenSIMClient.prototype._registerProtocols = function () {
        // JSON WebSocket protocol (uses JSON-serialized calls)

        // Messages:
        //   [ 'call', callID, methodName, arg1, arg2, ... ]
        //   [ 'call-reply', callID, success, retValOrException ]

        function JSONWebSocket(url) {
            var self = this;

            KIARA.Protocol.call(self, 'websocket-json');
            self.__url = url;

            self.__maxReconnectAttempts = 5;

            self.__funcs = {};
            self.__oneway = {};
            self.__activeCalls = {};
            self.__cachedCalls = [];
            self.__nextCallID = 0;
            self.__reconnectAttempts = 0;

            self.__connect();
        }

        KIARA.inherits(JSONWebSocket, KIARA.Protocol);

        JSONWebSocket.prototype.callMethod = function (callResponse, args) {
            var self = this;

            if (self.__ws.readyState == WebSocket.OPEN) {
                var callID = self.__nextCallID++;
                var argsArray = Array.prototype.slice.call(args);
                var request = [ "call", callID, callResponse.getMethodName() ].concat(argsArray);
                self.__ws.send(JSON.stringify(request));
                if (!callResponse.isOneWay())
                    self.__activeCalls[callID] = callResponse;
            } else {
                self.__cachedCalls.push([callResponse, args]);
            }
        }

        JSONWebSocket.prototype.registerFunc = function (methodDescriptor, nativeMethod) {
            var self = this;

            self.__funcs[methodDescriptor.methodName] = nativeMethod;
            self.__oneway[methodDescriptor.methodName] = methodDescriptor.isOneWay;
        }

        JSONWebSocket.prototype.__connect = function() {
            var self = this;

            self.__ws = new WebSocket(self.__url);
            self.__ws.onopen = self.__handleConnect.bind(self);
            self.__ws.onerror = self.__ws.onclose = self.__handleDisconnect.bind(self);
            self.__ws.onmessage = self.__handleMessage.bind(self);
        }

        JSONWebSocket.prototype.__handleMessage = function (message) {
            var self = this;

            var data = JSON.parse(message.data);
            var msgType = data[0];
            if (msgType == 'call-reply') {
                var callID = data[1];
                if (callID in self.__activeCalls) {
                    var callResponse = self.__activeCalls[callID];
                    var success = data[2];
                    var retValOrException = data[3];
                    callResponse.setResult(retValOrException, success ? 'result' : 'exception');
                    delete self.__activeCalls[callID];
                } else {
                    throw new KIARA.Error(KIARA.CONNECTION_ERROR,
                        "Received a response for an unrecognized call id: " + callID);
                }
            } else if (msgType == 'call') {
                var callID = data[1];
                var methodName = data[2];
                if (methodName in self.__funcs) {
                    var args = data.slice(3);
                    var response = [ 'call-reply', callID ];
                    try {
                        retVal = self.__funcs[methodName].apply(null, args);
                        response.push(true);
                        response.push(retVal);
                    } catch (exception) {
                        response.push(false);
                        response.push(exception);
                    }
                    if (!self.__oneway[methodName])
                        self.__ws.send(JSON.stringify(response));
                } else {
                    throw new KIARA.Error(KIARA.CONNECTION_ERROR,
                        "Received a call for an unregistered method: " + methodName);
                }
            } else {
                throw new KIARA.Error(KIARA.CONNECTION_ERROR, "Unknown message type: " + msgType);
            }
        }

        JSONWebSocket.prototype.__handleConnect = function () {
            var self = this;

            for (var callIndex in self.__cachedCalls) {
                var call = self.__cachedCalls[callIndex];
                self.callMethod(call[0], call[1])
            }
            self.__cachedCalls = [];
        }

        JSONWebSocket.prototype.__handleDisconnect = function (event) {
            var self = this;

            self.__reconnectAttempts++;
            if (self.__reconnectAttempts <= self.__maxReconnectAttempts) {
                self.__connect();
            } else {
                for (var callID in self.__activeCalls) {
                    var callResponse = self.__activeCalls[callID];
                    callResponse.setResult(event, 'error');
                }
                self.__activeCalls = {};

                for (var callIndex in self.__cachedCalls) {
                    var cachedCall = self.__cachedCalls[callIndex];
                    cachedCall[0].setResult(event, 'error');
                }
                self.__cachedCalls = [];
            }
        }

        KIARA.registerProtocol('websocket-json', JSONWebSocket);
    }

    // OpenSIMClient functions
    OMP.OpenSIMClient.prototype.__interfaceImplements = function(interfaceURIs) {
        var self = this;

        var result = [];
        for (var i = 0; i < interfaceURIs.length; i++)
            result.push(self.__supportedInterfaces.indexOf(interfaceURIs[i]) != -1);
        return result;
    };

    OMP.OpenSIMClient.prototype.__connectRegionHandshake = function(handshakeRequest) {
        var self = this;
        self._call("omp.connectServer.handshakeReply", {
            AgentData: {AgentID: self._agentID, SessionID: self._sessionID},
            RegionInfo: {Flags: 0}
        });

        self.__clientCallback();
        delete self.__clientCallback;
    }

    OMP.OpenSIMClient.prototype.__configureInterfaces = function(localInterfaces, localFunctions, remoteInterfaces,
                                                                 remoteFunctions, callback) {
        var self = this;

        // Configure local interfaces
        for (var index = 0; index < localInterfaces.length; index++) {
            if (self.__supportedInterfaces.indexOf(localInterfaces[index]) == -1) {
                self.__regionConnection.loadIDL(localInterfaces[index]);
                self.__supportedInterfaces.push(localInterfaces[index]);
            }
        }

        // Configure local functions
        for (var localFunctionName in localFunctions) {
            var localFunction = localFunctions[localFunctionName].bind(self);
            self.__regionConnection.registerFuncImplementation(
                localFunctionName, "...", localFunction);
        }

        // Check remote interfaces
        var numInterfaces = remoteInterfaces.length;
        if (numInterfaces == 0) {
            callback();
            return;
        }

        function errorCallback(reason) {
            logger.error("Failed to acquire required server interfaces - " + reason);
        }

        function resultCallback(exception, result) {
            if (exception) {
                errorCallback("exception returned by the server");
            } else {
                for (var i = 0; i < numInterfaces; i++) {
                    if (!result[i]) {
                        errorCallback("interface " + remoteInterfaces[i] + " is not supported by the server");
                        return;
                    }
                }

                // Generate remote function wrappers.
                for (var index = 0; index < remoteFunctions.length; index++)
                    self._addServerFunc(remoteFunctions[index], self.__regionConnection);

                // Execute... ehm, well... the callback. Is this comment even useful?
                callback();
            }
        }

        for (var index = 0; index < numInterfaces; index++)
            self.__regionConnection.loadIDL(remoteInterfaces[index]);

        self._call("omp.interface.implements", remoteInterfaces)
            .on('result', resultCallback)
            .on('error', errorCallback)
    }

    // Configures local and remote interfaces. On success |callback| is called.
    OMP.OpenSIMClient.prototype.__configureConnectInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            REMOTE_IDL_URL_PREFIX + "interface.kiara",
            REMOTE_IDL_URL_PREFIX + "connectClient.kiara"
        ];

        var localFunctions = {
            "omp.interface.implements": self.__interfaceImplements,
            "omp.connectClient.handshake": self.__connectRegionHandshake
        };

        var remoteInterfaces = [
            REMOTE_IDL_URL_PREFIX + "connectServer.kiara",
            REMOTE_IDL_URL_PREFIX + "connectInit.kiara"
        ];

        var remoteFunctions = [
            "omp.connectServer.handshakeReply",
            "omp.connectInit.useCircuitCode"
        ];

        self.__configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    // Abstract. Configure interfaces after handshake is received.
    OMP.OpenSIMClient.prototype._configureAppInterfaces = function(callback) {}

    //  =============================== OpenSIMChatClient ===============================

    OMP.OpenSIMChatClient = function(onMessage, onTypingStatus) {
        var self = this;

        OMP.OpenSIMClient.call(self);

        self._onMessage = onMessage;
        self._onTypingStatus = onTypingStatus;
    }
    OMP.inherits(OMP.OpenSIMChatClient, OMP.OpenSIMClient);

    OMP.OpenSIMChatClient.prototype.__handleMessageFromServer = function(packet) {
        var self = this;

        var from = base64.decode(packet.ChatData.FromName);
        if (packet.ChatData.ChatType >= 0 && packet.ChatData.ChatType <= 3) {
            var msg = base64.decode(packet.ChatData.Message);
            self._onMessage(from, msg);
        } else if (packet.ChatData.ChatType == 4) {
            if (packet.ChatData.SourceID.Guid != self._agentID)
                self._onTypingStatus(from, true);
        } else if (packet.ChatData.ChatType == 5) {
            if (packet.ChatData.SourceID.Guid != self._agentID)
                self._onTypingStatus(from, false);
        } else {
            self._onMessage("Debug", JSON.stringify(packet))
        }
    }

    OMP.OpenSIMChatClient.prototype._configureAppInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            REMOTE_IDL_URL_PREFIX + "chatClient.kiara"
        ];

        var localFunctions = {
            "omp.chatClient.messageFromServer": self.__handleMessageFromServer
        }

        var remoteInterfaces = [
            REMOTE_IDL_URL_PREFIX + "chatServer.kiara"
        ];

        var remoteFunctions = [
            "omp.chatServer.messageFromClient"
        ];

        self.__configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    OMP.OpenSIMChatClient.prototype.sendMessage = function(message) {
        var self = this;
        self._call("omp.chatServer.messageFromClient", {
            AgentData: {AgentID: self._agentID, SessionID: self._sessionID},
            ChatData: {Channel: 0, Message: base64.encode(message), Type: 2}
        });
    }

    OMP.OpenSIMChatClient.prototype.setTypingStatus = function(isTyping) {
        var self = this;
        self._call("omp.chatServer.messageFromClient", {
            AgentData: {AgentID: self._agentID, SessionID: self._sessionID},
            ChatData: {Channel: 0, Message: "", Type: (isTyping ? 4 : 5)}
        });
    }

    //  =============================== OpenSIMViewerClient ===============================

    // User handlers may be passed to the constructor. The signatures for them are:
    //   onCreateObject(id, xml3dRepresentation, isAgentAvatar)
    //     id - unique ID for the object
    //     xml3dRepresentation - string with XML3D object representation
    //     isAgentAvatar - whether this object represents user's avatar
    //   onDeleteObject(id)
    //     id - unique ID for the object
    //   onLocationUpdate(id, pos, rot, scale)
    //     id - unique ID for the object
    //     pos - an object with x, y and z properties (vector)
    //     rot - an object with w, x, y and z properties (quaternion)
    //     scale - an object with x, y and z properties (vector)
    OMP.OpenSIMViewerClient = function(onCreateObject, onDeleteObject, onLocationUpdate) {
        var self = this;

        OMP.OpenSIMClient.call(self);
        self.__onCreateObject = onCreateObject;
        self.__onDeleteObject = onDeleteObject;
        self.__onLocationUpdate = onLocationUpdate;
    }
    OMP.inherits(OMP.OpenSIMViewerClient, OMP.OpenSIMClient);

    OMP.OpenSIMViewerClient.prototype.__handleCreateObject = function(uuid, localID, xml3dRepresentation) {
        var self = this;

        logger.info("create object " + localID + (uuid == self._agentID ? " (avatar)" : "") + " uuid="+uuid.Guid);

        if (self.__onCreateObject)
            self.__onCreateObject(localID, xml3dRepresentation, uuid == self._agentID);
    }

    OMP.OpenSIMViewerClient.prototype.__handleDeleteObject = function(localIDs) {
        var self = this;

        if (self.__onDeleteObject) {
            for (var index = 0; index < localIDs.length; index++)
                self.__onDeleteObject(localIDs[index]);
        }
    }

    OMP.OpenSIMViewerClient.prototype.__handleLocationUpdate = function(localID, position, rotation, scale) {
        var self = this;

        logger.info("location update for " + localID +
            "\n(position XYZ "+position.X+" "+position.Y+" "+position.Z+")"+
            "\n(rotation XYZW "+rotation.X+" "+rotation.Y+" "+rotation.Z+" "+rotation.W+") "+
            "\n(scale XYZ "+scale.X+" "+scale.Y+" "+scale.Z+")");

        if (self.__onLocationUpdate) {
            self.__onLocationUpdate(
                localID,
                {x: position.X, y: position.Y, z: position.Z},
                {x: rotation.X, y: rotation.Y, z: rotation.Z, w: rotation.W},
                {x: scale.X, y: scale.Y, z: scale.Z}
            );
        }
    }

    OMP.OpenSIMViewerClient.prototype._configureAppInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            REMOTE_IDL_URL_PREFIX + "objectSync.kiara"
        ];

        var localFunctions = {
            "omp.objectSync.createObject": self.__handleCreateObject,
            "omp.objectSync.deleteObject": self.__handleDeleteObject,
            "omp.objectSync.locationUpdate": self.__handleLocationUpdate,
        }

        var remoteInterfaces = [
            REMOTE_IDL_URL_PREFIX + "movement.kiara"
        ];

        var remoteFunctions = [
            "omp.movement.agentUpdate"
        ];

        self.__configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    // Notifies the server about the state of the user's viewer. Arguments describe this state:
    //   |position| - position of the avatar, any object with x, y and z properties
    //   |rotation| - rotation of the avatar, any object with x, y, z and w properties
    //   |cameraUp|, |cameraLeft|, |cameraAt| - vectors looking upwards, left and in the direction of
    //                                          the user's camera, any object with x, y and z properties
    //   |controls| - a number describing user controls, documentation: http://goo.gl/UplNa,
    //                used in OpenSim to run scripts triggered by user actions, may be omitted
    OMP.OpenSIMViewerClient.prototype.setViewerState = /*void*/ function(position, rotation, cameraUp,
                                                                  cameraLeft, cameraAt, controls) {
        var self = this;
        if (self.__tooFastStateUpdates)
          return;

        self.__tooFastStateUpdates = true;

        if (!controls)
          controls = 0;

        self._call("omp.movement.agentUpdate", {
            AgentData: {
                AgentID: self._agentID,
                BodyRotation: {X: rotation.x, Y: rotation.y, Z: rotation.z, W: rotation.w},
                CameraAtAxis: {X: cameraAt.x, Y: cameraAt.y, Z: cameraAt.z},
                CameraCenter: {X: position.x, Y: position.y, Z: position.z},
                CameraLeftAxis: {X: cameraLeft.x, Y: cameraLeft.y, Z: cameraLeft.z},
                CameraUpAxis: {X: cameraUp.x, Y: cameraUp.y, Z: cameraUp.z},
                ControlFlags: controls,
                Far: 1e9,
                Flags: 0,
                HeadRotation: {X: rotation.x, Y: rotation.y, Z: rotation.z, W: rotation.w},
                SessionID: self._sessionID,
                State: 0
            }
        });

        setTimeout(function() { self.__tooFastStateUpdates = false }, 100);
    }

    //  =============================== SirikataChatClient ===============================

    // Constructs Sirikata chat client. |onMessage| is invoked whenever a message arrives from another object: two
    // string arguments will be passed to it - name of the source object and message contents.
    OMP.SirikataChatClient = function(onMessage) {
        var self = this;

        OMP.Client.call(self);
        self.__onMessage = onMessage;
    }
    OMP.inherits(OMP.SirikataChatClient, OMP.Client);

    // Authenticate with |login| and |password| and connect to the virtual world. Callback |cb| will be executed with
    // one argument that will indicate whether connection was successful (true) or not (false).
    OMP.SirikataChatClient.prototype.connect = function(login, password, callback) {
        var self = this;

        var connection = self._context.openConnection(REMOTE_IDL_URL_PREFIX + "sirikata.kiara", function(err, conn) {
            if (err) {
                logger.error(err);
                return;
            }

            // FIXME: This is a hack. Context.openConnection executes the user callback as soon as protocol object is
            // constructed which leaves us no chance to wait for asynchronous communication to initialize the protocol.
            conn._protocol.setInitializedCallback(callback);
        });
    }

    // Sends a messages to all known avatars.
    OMP.SirikataChatClient.prototype.sendMessage = function(message) {
        var self = this;

    }

    OMP.SirikataChatClient.randomUUID = function() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var uuid = [];

        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }

        return uuid.join('');
    }

    // Registers Sirikata Protocol Buffers protocol
    OMP.SirikataChatClient.prototype._registerProtocols = function() {
        function PBCallDescriptor(methodName, args) {
            var self = this;

            // FIXME: eventually we should be able to parse this info from the .kiara file, but now we just hardcode it.
            self.method = methodName;
            switch (methodName) {
//                case "omp.sirikata.connect":
//                    self.request = "Sirikata.Protocol.Session.Container";
//                    self.mapping = "Request.connect : Args[0]";
//                    self.oneway = true;
//                    self.target = 'server';
//                    break;
//                case "omp.sirikata.connectResponse":
//                    self.request = "Sirikata.Protocol.Session.Container";
//                    self.response = "Sirikata.Protocol.Session.Container";
//                    self.mapping = "Request.connect_response : Args[0]; Response.conneck_ack : Result";
//                    self.target = 'client';
//                    break;
                default:
                    throw new KIARA.Error(KIARA.INVALID_OPERATION, "Method " + methodName + " is not hardcoded.");
            }

            self.args = args;
        }

//        var Ports = {
//            Session : 1,
//            Proximity : 2,
//            Location : 3,
//            TimeSync : 4,
//            Chat: 11,
//            Space : 253
//        };
//
//        var nil = '00000000-0000-0000-0000-000000000000';

        function SirikataProtobuf(url) {
            var self = this;

            KIARA.Protocol.call(self, "sirikata-protobuf");

//            // Initialize KataJS
//            Kata.scriptRoot = "scripts/";
//            self.__mt = new Kata.MainThread("MyScript.js", "MyScript", { space: url });
//            self.__mt.getChannel().registerListener(function(message) {
//                console.log("message from MainThread", message);
//            });

//            self.__connected = false;
//            self.__cachedCalls = []; // this is an array, since several oneway calls may be cached
            self.__handlers = {};
            self.__initialized = false;
//
//            // Open a connection
//            self.__socket = new TCPSST(url + OMP.SirikataChatClient.randomUUID());
//            self.__primarySubstream = self.__socket.clone();
//            self.__primarySubstream.registerListener(self.__handleMessage.bind(self));
//
//            // Initialize session.
//            self.__initializeSession(function() {
//                // Initialize SPACE and CHAT streams.
//                var SpacePort = 253;
//                var ChatPort = 11;
//                self.__initializeStream(Ports.Space, function() {
//                    self.__initializeStream(Ports.Chat, function() {
//                        self.__initialized = true;
//                        if (self.__initializedCallback) {
//                            self.__initializedCallback(true);
//                            delete self.__initializedCallback;
//                        }
//                    });
//                });
//            });
        }

        KIARA.inherits(SirikataProtobuf, KIARA.Protocol);

        // Interface for KataJS

        SirikataProtobuf.prototype.aliasIDs = function() {
            console.log("aliasID", arguments);
        }

        SirikataProtobuf.prototype.connectionResponse = function() {
            console.log("connectionResponse", arguments);
        }

        // Interface for KIARA

        SirikataProtobuf.prototype.setInitializedCallback = function(callback) {
            var self = this;

            if (self.__initialized)
                callback();
            else
                self.__initializedCallback = callback;
        }

        SirikataProtobuf.prototype.callMethod = function(callResponse, args) {
            var self = this;

            if (self.__activeCall)
                throw new KIARA.Error(KIARA.API_ERROR, "SirikataProtobuf doesn't support concurrent calls");

            var call = new PBCallDescriptor(callResponse.getMethodName(), args);
            call.setResult = function(resultType, result) { callResponse.setResult(result, resultType); }
            if (call.target == 'server') {
                self.__sendRequestMessageForCall(call);
            } else {
                throw new KIARA.Error(KIARA.API_ERROR, callResponse.getMethodName() + " is a client function. " +
                    "Cannot invoke it on the server.");
            }

            if (!call.oneway)
                self.__activeCall = call;
        }

        SirikataProtobuf.prototype.registerFunc = function(methodDescriptor, nativeMethod) {
            var self = this;

            var call = new PBCallDescriptor(methodDescriptor.methodName);
            if (call.target == 'client') {
                self.__handlers[call._requestContainer] = nativeMethod;
            } else {
                throw new KIARA.Error(KIARA.API_ERROR, methodDescriptor.methodName + " is a server function. " +
                    "Cannot register a local handler for it.");
            }
        }

//        SirikataProtobuf.prototype.__initializeSession = function(callback) {
//            var self = this;
//
//            // TODO: Reimplement connect, connectReply as KIARA method calls. Source object ID and the like should be set in the PBCallDescriptor.
//
//            // Prepare and send Session.Connect.
//            self.__objid = OMP.SirikataChatClient.randomUUID();
//            var connectMessage = self.__createMessage("Sirikata.Protocol.Session.Container", {
//                connect: {
//                    type: 1,
//                    object: self.__objid,
//                    auth: PROTO.encodeUTF8("123"),
//                    loc: undefined,
//                    orientation: undefined,
//                    bounds: [0, 0, 0, 1],
//                    query_angle: 1e-26,
//                    mesh: "",
//                    physics: []
//                }
//            });
//            self.__sendODPMessage(self.__objid, Ports.Session, nil, Ports.Session, connectMessage);
//
//            // Wait for Session.ConnectResponse
//            self.__connectReplyCallback = callback;
//        }
//
//        SirikataProtobuf.prototype.__initializeStream = function(port, callback) {
//            // TODO: Implement
//            callback();
//        }

        SirikataProtobuf.prototype.__createMessage = function(messageType, messageData) {
            var self = this;

            var message;
            if (typeof(messageType) == "string")
                message = Kata.PROTO.Message.Create(messageType);
            else
                message = new messageType;

            if (typeof(messageData) != "object")
                throw new KIARA.Error(KIARA.API_ERROR, "Non object was passed to __populateFields.");

            for (var propName in messageData) {
                if (messageData[propName] !== undefined && message.HasProperty(propName)) {
                    var propType = message.GetProperty(propName).type();
                    if (propType.composite)
                        message[propName] = self.__createMessage(propType, messageData[propName]);
                    else
                        message[propName] = propType.Convert(messageData[propName]);
                }
            }

            return message;
        }

        SirikataProtobuf.prototype.__sendRequestMessageForCall = function(call) {
            var self = this;

            // TODO: Construct request message.
            // TODO: Send request message.
        }

//        SirikataProtobuf.prototype.__sendODPMessage = function(src, src_port, dest, dest_port, msg) {
//            var self = this;
//
//            // Serialized nested message.
//            var payload = new PROTO.ByteArrayStream();
//            msg.SerializeToStream(payload);
//
//            // Wrap the message into ObjectMessage.
//            var odp_msg = new Sirikata.Protocol.Object.ObjectMessage();
//            odp_msg.source_object = src;
//            odp_msg.source_port = src_port;
//            odp_msg.dest_object = dest;
//            odp_msg.dest_port = dest_port;
//            odp_msg.unique = PROTO.I64.fromNumber(0);
//            odp_msg.payload = payload;
//
//            // Serialize ObjectMessage into byte array and send it.
//            var serialized = new PROTO.ArrayBufferStream();
//            odp_msg.SerializeToStream(serialized);
//            self.__primarySubstream.sendMessage(serialized.getUint8Array());
//        };
//
//        SirikataProtobuf.prototype.__handleMessage = function(substream, data) {
//            var self = this;
//
//            // When data is null, this means that the connection was either closed on there was an error.
//            if (data == null) {
//                // FIXME: This doesn't consider oneway calls before the active call. They may have failed too.
//                if (self.__activeCall)
//                    self.__activeCall.setResult('error', 'connection closed');
//                delete self.__activeCall;
//                return;
//            }
//
//            var odp_msg = new Sirikata.Protocol.Object.ObjectMessage();
//            odp_msg.ParseFromStream(new PROTO.Uint8ArrayStream(data));
//
//            // Handle Session.ConnectReply and execute self.__connectReplyCallback.
//            if (odp_msg.source_object == nil && odp_msg.dest_port == Ports.Session) {
//                var session_msg = new Sirikata.Protocol.Session.Container();
//                session_msg.ParseFromStream(PROTO.CreateArrayStream(odp_msg.payload));
//
//                if (session_msg.HasField("connect_response")) {
//                    self.__sendODPMessage(self.__objid, Ports.Session, nil, Ports.Session,
//                        self.__createMessage("Sirikata.Protocol.Session.Container", { connectAck: {}}));
//                    if (self.__objid != odp_msg.dest_object);
//                    self.__connectReplyCallback(session_msg.connect_response);
//                }
//            } else {
//                // TODO: Handle generic messages.
//            }
//
//            console.log(odp_msg.toString(1));
//        }

        KIARA.registerProtocol('sirikata-protobuf', SirikataProtobuf);
    }

    return OMP;
}));
