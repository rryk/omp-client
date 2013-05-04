(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('logger'), require('kiara'), require('md5'), require('omp'), require('base64'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['logger', 'kiara', 'md5', 'base64'], function (logger, kiara, md5, base64) {
            return (root.OMP = factory(logger, kiara, md5, base64));
        });
    } else {
        // Browser globals
        root.OMP = factory(root.logger, root.KIARA, root.md5, root.base64);
    }
} (this, function (logger, KIARA, md5, base64) {

    // Notation. Methods with "_" prefix are protected, methods with "__" prefix are private, other methods are public.

    var REMOTE_IDL_URL_PREFIX = "http://yellow.cg.uni-saarland.de/home/kiara/idl/";
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
    }

    // Abstract. Registers protocols necessary for a given server.
    OMP.Client.prototype._registerProtocols = function() {}

    // Abstract. Call a function |functionName| with |arguments|.
    OMP.Client.prototype._call = function(functionName /* ... arguments ... */) {}

    //  =============================== OpenSIMClient ===============================

    OMP.OpenSIMClient = function () {
        var self = this;

        OMP.Client.call(self);
    }
    OMP.inherits(OMP.OpenSIMClient, OMP.Client);

    OMP.OpenSIMClient.prototype.login = function (first, last, password, callback) {
        var self = this;

        var context = self.__context = KIARA.createContext();
        self.__loginConnection = context.openConnection(REMOTE_IDL_URL_PREFIX + "login.kiara",
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

        var connection = self.__regionConnection = self.__context.openConnection(
            REMOTE_IDL_URL_PREFIX + "interface.kiara",
            function(err, conn) {
                if (err)
                  callback(false, err);

                self.__server = {};
                self.__supportedInterfaces = [REMOTE_IDL_URL_PREFIX + "interface.kiara"];
                self.__regionConnection.loadIDL(REMOTE_IDL_URL_PREFIX + "interface.kiara");
                self.__server["omp.interface.implements"] =
                    self.__regionConnection.generateFuncWrapper("omp.interface.implements", "...");

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

    OMP.OpenSIMClient.prototype._call = function(functionName /* ... arguments ... */) {
        var self = this;
        if (!self.__server) {
            throw new KIARA.Error(KIARA.API_ERROR,
                "Can't call function: " + functionName + ". Server API was not initialized yet.");
        }

        if (!self.__server[functionName] || typeof(self.__server[functionName]) != "function") {
            throw new KIARA.Error(KIARA.API_ERROR,
                "Can't call function: " + functionName + ". It is not defined or not a function.");
        }

        // Remove function name from the arguments.
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);

        // Call the function.
        return self.__server[functionName].apply(null, args);
    }

    OMP.OpenSIMClient.prototype._registerProtocols = function () {
        // JSON WebSocket protocol (uses JSON-serialized calls)

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

            self.connect();
        }

        KIARA.inherits(JSONWebSocket, KIARA.Protocol);

        // Messages:
        //   [ 'call', callID, methodName, arg1, arg2, ... ]
        //   [ 'call-reply', callID, success, retValOrException ]

        JSONWebSocket.prototype.connect = function () {
            var self = this;

            self.__wb = new WebSocket(self.__url);
            self.__wb.onopen = self.__handleConnect.bind(self);
            self.__wb.onerror = self.__wb.onclose = self.__handleDisconnect.bind(self);
            self.__wb.onmessage = self.__handleMessage.bind(self);
        }

        JSONWebSocket.prototype.callMethod = function (callResponse, args) {
            var self = this;

            if (self.__wb.readyState == WebSocket.OPEN) {
                var callID = self.__nextCallID++;
                var argsArray = Array.prototype.slice.call(args);
                var request = [ "call", callID, callResponse.getMethodName() ].concat(argsArray);
                self.__wb.send(JSON.stringify(request));
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
                        self.__wb.send(JSON.stringify(response));
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
                self.connect();
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
                errorCallback("exception returned by the client");
            } else {
                for (var i = 0; i < numInterfaces; i++) {
                    if (!result[i]) {
                        errorCallback("interface " + remoteInterfaces[i] + " is not supported by the client");
                        return;
                    }
                }

                // Generate remote function wrappers.
                for (var index = 0; index < remoteFunctions.length; index++) {
                    var remoteFunction = remoteFunctions[index];
                    self.__server[remoteFunction] = self.__regionConnection.generateFuncWrapper(remoteFunction, "...");
                }

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

    //  =============================== SirikataChatClient ===============================

    OMP.SirikataChatClient = function(onMessage, onTypingStatus) {
        var self = this;
    }
    OMP.inherits(OMP.SirikataChatClient, OMP.Client);

    OMP.SirikataChatClient.prototype.sendMessage = function(message) {
        var self = this;

    }

    OMP.SirikataChatClient.prototype.setTypingStatus = function(isTyping) {
        var self = this;

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

    return OMP;
}));
