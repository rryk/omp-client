(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('logger'), require('kiara'), require('md5'), require('omp'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['logger', 'kiara', 'md5'], function (logger, kiara, md5) {
            return (root.OMP = factory(logger, kiara, md5));
        });
    } else {
        // Browser globals
        root.OMP = factory(root.logger, root.KIARA, root.md5);
    }
} (this, function (logger, KIARA, md5) {
    var OMP = OMP || {};

    OMP.Client = function () {
        this._registerProtocols();
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
                        self.loginResponse = result;
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
        if (!self.loginResponse)
            throw new KIARA.Error(KIARA.API_ERROR, "Login response missing to connect. Please login first.");

        var connection = self.regionConnection = self.context.openConnection(
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara",
            function(err, conn) {
                if (err)
                  callback(false, err);

                self._configureInterfaces(function() {
                    self.server["omp.connect.useCircuitCode"](
                        self.loginResponse.circuit_code,
                        self.loginResponse.agent_id,
                        self.loginResponse.session_id
                    );
                });
                self.connectCallback = callback;
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
        logger.info("Received handshake request: " + handshakeRequest);
        return 42;
    }

    // Configures local and remote interfaces. On success |callback| is called.
    OMP.Client.prototype._configureInterfaces = function(callback) {
        var self = this;

        var localInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara",
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/connectClient.kiara"
        ];

        var localFunctions = {
            "omp.interface.implements": self._interfaceImplements,
            "omp.connect.regionHandshake": self._connectRegionHandshake
        }

        var remoteInterfaces = [
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/interface.kiara",
            "http://yellow.cg.uni-saarland.de/home/kiara/idl/connectServer.kiara"
        ];

        var remoteFunctions = [
            "omp.interface.implements",
            "omp.connect.useCircuitCode"
        ];

        // Configure local interfaces
        self.supportedInterfaces = [];
        for (var index in localInterfaces) {
            self.regionConnection.loadIDL(localInterfaces[index]);
            self.supportedInterfaces.push(localInterfaces[index]);
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
        self.server = {};

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
                    for (var index in remoteFunctions) {
                        var remoteFunction = remoteFunctions[index];
                        self.server[remoteFunction] = self.regionConnection.generateFuncWrapper(remoteFunction, "...");
                    }
                    // Execute... ehm, well... the callback. Is this comment even useful?
                    callback();
                }
            }
        }

        var implements = self.server["omp.interface.implements"] =
            self.regionConnection.generateFuncWrapper(
                "omp.interface.implements", "...",
                { onerror: errorCallback, onresult: resultCallback }
            );

        for (var index in remoteInterfaces)
            implements(remoteInterfaces[index]);
    }

    return OMP;
}));