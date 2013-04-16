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
        self.loginConnection = context.openConnection("http://" + location.host + "/home/kiara/idl/login.kiara",
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

    OMP.Client.prototype.connect = function() {
        var self = this;
        if (!self.loginResponse)
            throw new KIARA.Error(KIARA.API_ERROR, "Login response missing to connect. Please login first.");

        var connection = self.regionConnection = self.context.openConnection(
            "http://" + location.host + "/home/kiara/idl/interface.kiara",
            function(err, conn) {
                conn.registerFuncImplementation("omp.interface.implements", "...", function(interfaceURI) {
                    var supportedInterfaces = [
                        "http://localhost/home/kiara/idl/connect.idl"
                    ];
                    return supportedInterfaces.indexOf(interfaceURI) != -1;
                });
                conn.registerFuncImplementation("omp.connect.handshake", "...", function(arg) {
                    logger.info("Received handshake: " + arg);
                })
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

    return OMP;
}));