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
    var OMP = OMP || {};

    var isNode = (typeof process === 'object' && typeof require === 'function');
    var isWeb = typeof window === 'object';
    var isWorker = typeof importScripts === 'function';

    if (isNode) {
        var util = require('util');
    } else {
        var util = {};
        util.inherits = function(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype);
            ctor.prototype.constructor = ctor;
            ctor.superclass = superCtor.prototype;
        };
    }

    //  =============================== Client ===============================

    OMP.Client = function () {
        var self = this;

        self._registerProtocols();
    }

    OMP.Client.prototype.login = function (first, last, password, callback) {
        var self = this;

        var context = self.context = KIARA.createContext();
        self.loginConnection = context.openConnection("http://yellow.cg.uni-saarland.de/home/kiara/idl/login.kiara",
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
                    channel: "OpenSIM OMP JS Client",
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
                        self.circuitCode = result["circuit_code"];
                        self.sessionID = result["session_id"];
                        self.agentID = result["agent_id"];
                        callback();
                    }
                });
                loginCall.on('error', function (error) {
                    logger.error("Got error for login request: " + error);
                });
            }
        );
    }

    OMP.Client.prototype.connect = function(callback) {
        var self = this;
        if (!self.sessionID || !self.agentID || !self.circuitCode)
            throw new KIARA.Error(KIARA.API_ERROR, "Login response missing to connect. Please login first.");

        var connection = self.regionConnection = self.context.openConnection(
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara",
            function(err, conn) {
                if (err)
                  callback(false, err);

                self.server = {};
                self.supportedInterfaces = ["http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara"];
                self.regionConnection.loadIDL("http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara");
                self.server["omp.interface.implements"] =
                    self.regionConnection.generateFuncWrapper("omp.interface.implements", "...");

                self._configureConnectInterfaces(function() {
                    self._configureAppInterfaces(function() {
                        self.server["omp.connectInit.useCircuitCode"](
                            self.circuitCode,
                            self.agentID,
                            self.sessionID
                        );
                        self.clientCallback = callback;
                    });
                });
            }
        );
    }

    OMP.Client.prototype._registerProtocols = function () {
        // JSON WebSocket protocol (uses JSON-serialized calls)

        function JSONWebSocket(url) {
            KIARA.Protocol.call(this, 'websocket-json');
            this._url = url;

            this.MAX_RECONNECT_ATTEMPTS = 5;

            this._funcs = {};
            this._oneway = {};
            this._activeCalls = {};
            this._cachedCalls = [];
            this._nextCallID = 0;
            this._reconnectAttempts = 0;

            this.connect();
        }

        KIARA.inherits(JSONWebSocket, KIARA.Protocol);

        // Messages:
        //   [ 'call', callID, methodName, arg1, arg2, ... ]
        //   [ 'call-reply', callID, success, retValOrException ]

        JSONWebSocket.prototype.connect = function () {
            this._wb = new WebSocket(this._url);
            this._wb.onopen = this._handleConnect.bind(this);
            this._wb.onerror = this._wb.onclose = this._handleDisconnect.bind(this);
            this._wb.onmessage = this._handleMessage.bind(this);
        }

        JSONWebSocket.prototype.callMethod = function (callResponse, args) {
            if (this._wb.readyState == WebSocket.OPEN) {
                var callID = this._nextCallID++;
                var argsArray = Array.prototype.slice.call(args);
                var request = [ "call", callID, callResponse.getMethodName() ].concat(argsArray);
                this._wb.send(JSON.stringify(request));
                if (!callResponse.isOneWay())
                    this._activeCalls[callID] = callResponse;
            } else {
                this._cachedCalls.push([callResponse, args]);
            }
        }

        JSONWebSocket.prototype.registerFunc = function (methodDescriptor, nativeMethod) {
            this._funcs[methodDescriptor.methodName] = nativeMethod;
            this._oneway[methodDescriptor.methodName] = methodDescriptor.isOneWay;
        }

        JSONWebSocket.prototype._handleMessage = function (message) {
            var data = JSON.parse(message.data);
            var msgType = data[0];
            if (msgType == 'call-reply') {
                var callID = data[1];
                if (callID in this._activeCalls) {
                    var callResponse = this._activeCalls[callID];
                    var success = data[2];
                    var retValOrException = data[3];
                    callResponse.setResult(retValOrException, success ? 'result' : 'exception');
                    delete this._activeCalls[callID];
                } else {
                    throw new KIARA.Error(KIARA.CONNECTION_ERROR,
                        "Received a response for an unrecognized call id: " + callID);
                }
            } else if (msgType == 'call') {
                var callID = data[1];
                var methodName = data[2];
                if (methodName in this._funcs) {
                    var args = data.slice(3);
                    var response = [ 'call-reply', callID ];
                    try {
                        retVal = this._funcs[methodName].apply(null, args);
                        response.push(true);
                        response.push(retVal);
                    } catch (exception) {
                        response.push(false);
                        response.push(exception);
                    }
                    if (!this._oneway[methodName])
                        this._wb.send(JSON.stringify(response));
                } else {
                    throw new KIARA.Error(KIARA.CONNECTION_ERROR,
                        "Received a call for an unregistered method: " + methodName);
                }
            } else {
                throw new KIARA.Error(KIARA.CONNECTION_ERROR, "Unknown message type: " + msgType);
            }
        }

        JSONWebSocket.prototype._handleConnect = function () {
            for (var callIndex in this._cachedCalls) {
                var call = this._cachedCalls[callIndex];
                this.callMethod(call[0], call[1])
            }
            this._cachedCalls = [];
        }

        JSONWebSocket.prototype._handleDisconnect = function (event) {
            this._reconnectAttempts++;
            if (this._reconnectAttempts <= this.MAX_RECONNECT_ATTEMPTS) {
                this.connect();
            } else {
                for (var callID in this._activeCalls) {
                    var callResponse = this._activeCalls[callID];
                    callResponse.setResult(event, 'error');
                }
                this._activeCalls = {};

                for (var callIndex in this._cachedCalls) {
                    var cachedCall = this._cachedCalls[callIndex];
                    cachedCall[0].setResult(event, 'error');
                }
                this._cachedCalls = [];
            }
        }

        KIARA.registerProtocol('websocket-json', JSONWebSocket);
    }

    // Client functions
    OMP.Client.prototype._interfaceImplements = function(interfaceURI) {
        var self = this;
        return self.supportedInterfaces.indexOf(interfaceURI) != -1;
    };

    OMP.Client.prototype._connectRegionHandshake = function(handshakeRequest) {
        var self = this;
        self.server["omp.connectServer.handshakeReply"]({
            AgentData: {AgentID: self.agentID, SessionID: self.sessionID},
            RegionInfo: {Flags: 0}
        });

        self.clientCallback();
        delete self.clientCallback;
    }

    OMP.Client.prototype._configureInterfaces = function(localInterfaces, localFunctions, remoteInterfaces,
                                                         remoteFunctions, callback) {
        var self = this;

        // Configure local interfaces
        for (var index = 0; index < localInterfaces.length; index++) {
            if (!self._interfaceImplements(localInterfaces[index])) {
                self.regionConnection.loadIDL(localInterfaces[index]);
                self.supportedInterfaces.push(localInterfaces[index]);
            }
        }

        // Configure local functions
        for (var localFunctionName in localFunctions) {
            var localFunction = localFunctions[localFunctionName].bind(self);
            self.regionConnection.registerFuncImplementation(
                localFunctionName, "...", localFunction);
        }

        // Check remote interfaces
        var numInterfaces = remoteInterfaces.length;
        var loadedInterfaces = 0;
        var failedToLoad = false;

        if (numInterfaces == 0) {
            callback();
            return;
        }

        function errorCallback(reason) {
            failedToLoad = true;
            logger.error("Failed to acquire required server interfaces - " + reason);
        }

        function resultCallback(exception, result) {
            if (failedToLoad)
                return;

            if (exception) {
                errorCallback("exception returned by the client");
            } else if (!result) {
                errorCallback("not supported by the client");
            } else {
                loadedInterfaces += 1;
                if (loadedInterfaces == numInterfaces) {
                    // Configure remote functions.
                    for (var index = 0; index < remoteInterfaces.length; index++) {
                        var remoteFunction = remoteFunctions[index];
                        self.server[remoteFunction] = self.regionConnection.generateFuncWrapper(remoteFunction, "...");
                    }
                    // Execute... ehm, well... the callback. Is this comment even useful?
                    callback();
                }
            }
        }

        for (var index = 0; index < numInterfaces; index++) {
            self.server["omp.interface.implements"](remoteInterfaces[index])
                .on('result', resultCallback)
                .on('error', errorCallback)
            self.regionConnection.loadIDL(remoteInterfaces[index]);
        }
    }

    // Configures local and remote interfaces. On success |callback| is called.
    OMP.Client.prototype._configureConnectInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara",
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/connectClient.kiara"
        ];

        var localFunctions = {
            "omp.interface.implements": self._interfaceImplements,
            "omp.connectClient.handshake": self._connectRegionHandshake
        };

        var remoteInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/connectServer.kiara",
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/connectInit.kiara"
        ];

        var remoteFunctions = [
            "omp.connectServer.handshakeReply",
            "omp.connectInit.useCircuitCode"
        ];

        self._configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    // Configure interfaces after handshake is received
    OMP.Client.prototype._configureAppInterfaces = function(callback) {}

    //  =============================== ChatClient ===============================

    OMP.ChatClient = function(onMessage, onTypingStatus) {
        var self = this;

        OMP.Client.call(self);
        self.onMessage = onMessage;
        self.onTypingStatus = onTypingStatus;
    }
    util.inherits(OMP.ChatClient, OMP.Client);

    OMP.ChatClient.prototype._handleMessageFromServer = function(packet) {
        var self = this;

        var from = base64.decode(packet.ChatData.FromName);
        if (packet.ChatData.ChatType >= 0 && packet.ChatData.ChatType <= 3) {
            var msg = base64.decode(packet.ChatData.Message);
            self.onMessage(from, msg);
        } else if (packet.ChatData.ChatType == 4) {
            if (packet.ChatData.SourceID.Guid != self.agentID)
                self.onTypingStatus(from, true);
        } else if (packet.ChatData.ChatType == 5) {
            if (packet.ChatData.SourceID.Guid != self.agentID)
                self.onTypingStatus(from, false);
        } else {
            self.onMessage("Debug", JSON.stringify(packet))
        }
    }

    OMP.ChatClient.prototype._configureAppInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/chatClient.kiara"
        ];

        var localFunctions = {
            "omp.chatClient.messageFromServer": self._handleMessageFromServer
        }

        var remoteInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/chatServer.kiara"
        ];

        var remoteFunctions = [
            "omp.chatServer.messageFromClient"
        ];

        self._configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    OMP.ChatClient.prototype.sendMessage = function(message) {
        var self = this;
        self.server["omp.chatServer.messageFromClient"]({
            AgentData: {AgentID: self.agentID, SessionID: self.sessionID},
            ChatData: {Channel: 0, Message: base64.encode(message), Type: 2}
        });
    }

    OMP.ChatClient.prototype.setTypingStatus = function(isTyping) {
        var self = this;
        self.server["omp.chatServer.messageFromClient"]({
            AgentData: {AgentID: self.agentID, SessionID: self.sessionID},
            ChatData: {Channel: 0, Message: "", Type: (isTyping ? 4 : 5)}
        });
    }

    //  =============================== ViewerClient ===============================

    // User handlers may be passed to the constructor:
    //   onCreateObject(id, xml3dRepresentation, isAgentAvatar)
    //   onDeleteObject(id)
    //   onLocationUpdate(id, pos, rot, scale)
    OMP.ViewerClient = function(onCreateObject, onDeleteObject, onLocationUpdate) {
        var self = this;

        OMP.Client.call(self);
        self.onCreateObject = onCreateObject;
        self.onDeleteObject = onDeleteObject;
        self.onLocationUpdate = onLocationUpdate;
    }
    util.inherits(OMP.ViewerClient, OMP.Client);

    OMP.ViewerClient.prototype._handleCreateObject = function(uuid, localID, xml3dRepresentation) {
        var self = this;

        if (self.onCreateObject)
            self.onCreateObject(localID, xml3dRepresentation, uuid == self.agentID);
    }

    OMP.ViewerClient.prototype._handleDeleteObject = function(localIDs) {
        var self = this;

        if (self.onDeleteObject) {
            for (var index = 0; index < localIDs.length; index++)
                self.onDeleteObject(localIDs[index]);
        }
    }

    OMP.ViewerClient.prototype._handleLocationUpdate = function(localID, position, rotation, scale) {
        var self = this;

        if (self.onLocationUpdate) {
            self.onLocationUpdate(
                localID,
                {x: position.X, y: position.Y, z: position.Z},
                {x: rotation.X, y: rotation.Y, z: rotation.Z, w: rotation.W},
                {x: scale.X, y: scale.Y, z: scale.Z}
            );
        }
    }

    OMP.ViewerClient.prototype._configureAppInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/objectSync.kiara"
        ];

        var localFunctions = {
            "omp.objectSync.createObject": self._handleCreateObject,
            "omp.objectSync.deleteObject": self._handleDeleteObject,
            "omp.objectSync.locationUpdate": self._handleLocationUpdate,
        }

        var remoteInterfaces = [];
        var remoteFunctions = [];

        self._configureInterfaces(localInterfaces, localFunctions, remoteInterfaces, remoteFunctions, callback);
    }

    return OMP;
}));
