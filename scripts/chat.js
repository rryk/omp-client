requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "omp",
    //load it from the js/omp directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        omp: '../omp',
    },
    shim: {
        'logger': {
            exports: "logger",
            init: function() {
                this.logger.activate(false);
            }
        },
        'md5': {
            init: function() {
                return {
                    "hex_md5": this.hex_md5
                }
            }
        },
        'base64': {
            init: function() {
                return {
                    "encode": this.encode64,
                    "decode": this.decode64
                }
            }
        },
        'katajs': {
            init: function() {
                var exports = this.Kata;
                //exports.Protocol = this.Sirikata.Protocol;
                exports.PROTO = this.PROTO;
                exports.Math = this.Math;
                return exports;
            }
        }
    },
    waitSeconds: 60, // wait 1 minute for scripts (maybe slow on mobile network)
});

requirejs(['omp/omp', 'jquery', 'base64'],
function(OMP, $, base64) {
    var numLogins = 0;
    var typingUsers = [];
    var log = [];
    var sayHandlers = {};

    function renderLog() {
        var logHtml = "";
        for (var index = 0; index < log.length; index++) {
            if (log[index].tag && numLogins > 1)
                logHtml += "{" + log[index].tag + "} ";
            logHtml += "[" + log[index].from + "] " + log[index].msg + "<br/>";
        }
        for (var index = 0; index < typingUsers.length; index++)
            logHtml += typingUsers[index] + " is typing... <br/>";
        $("#log").html(logHtml);
    }

    function handleTypingStatus(who, started) {
        var index = typingUsers.indexOf(who);
        if (started && index == -1) {
            typingUsers.push(who);
        } else if (!started && index != -1) {
            typingUsers.splice(index, 1);
        }
        renderLog();
    }

    function handleChat(from, msg, tag) {
        log.push({from: from, msg: msg, tag: tag});
        renderLog();
    }

    $("#say").keypress(function(event) {
        var key = event.keyCode;
        var val = $("#say").val();
        for (var index in sayHandlers) {
            var handler = sayHandlers[index];
            handler(key, val);
        }
    });

    function updateLoginInterface() {
        var connType = $("#connType").val();
        $(".LoginData").hide();
        $("#loginBtn").removeAttr("disabled");
        if (connType == "opensim")
            $(".OpenSIMLoginData").show();
        else if (connType == "sirikata")
            $(".SirikataLoginData").show();
        else
            $("#loginBtn").attr("disabled", "disabled");
    };
    updateLoginInterface();

    $("#loginBtn").click(function() {
        var connType = $("#connType").val();
        if (connType == "opensim") {
            function handleOpenSimChat(from, msg) {
                handleChat(from, msg, "OpenSIM");
            }

            var client = new OMP.OpenSIMChatClient(handleOpenSimChat, handleTypingStatus);
            client.login($("#firstname").val(), $("#lastname").val(), $("#pass").val(), function() {
                client.connect(function() {
                    $("#chatInterface").show();
                    sayHandlers["opensim"] = function(key, val) {
                        if (key == 13) {
                            client.sendMessage(val);
                            client.setTypingStatus(false);
                            if (self.typingStatusTimeout) {
                                delete self.typingStatusTimeout;
                                clearTimeout(self.typingStatusTimeout);
                            }
                            $("#say").val("");
                        } else {
                            if (self.typingStatusTimeout)
                                clearTimeout(self.typingStatusTimeout);
                            else
                                client.setTypingStatus(true);

                            self.typingStatusTimeout = setTimeout(function() {
                                client.setTypingStatus(false);
                                if (self.typingStatusTimeout)
                                    delete self.typingStatusTimeout;
                            }, 3000);
                        }
                    };
                    $("#say").focus();
                    numLogins++;
                });
            });

            $("#opensimOption").attr("disabled", "disabled");
            $("#opensimOption").removeAttr("selected");
            updateLoginInterface();
        } else if (connType == "sirikata") {
            function handleSirikataChat(from, msg) {
                handleChat(from, msg, "Sirikata");
            }

            var client = new OMP.SirikataChatClient(handleSirikataChat);
            client.connect($("#login").val(), $("#pass").val(), function(connected) {
                if (!connected)
                    log.error("Failed to connect to the Sirikata server.");
                else {
                    $("#chatInterface").show();
                    sayHandlers["sirikata"] = function(key, val) {
                        if (key == 13) {
                            client.sendMessage(val);
                            $("#say").val("");
                        }
                    };
                    $("#say").focus();
                    numLogins++;
                }
            });


            $("#sirikataOption").attr("disabled", "disabled");
            $("#sirikataOption").removeAttr("selected");
            updateLoginInterface();
        }
    });
    $("#loginBtn").removeAttr("disabled");

});
