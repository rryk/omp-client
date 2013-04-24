requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "omp",
    //load it from the js/omp directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        omp: '../omp'
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
        }
    },
    waitSeconds: 60, // wait 1 minute for scripts (maybe slow on mobile network)
});

requirejs(['omp/omp', 'jquery'],
function(OMP, $, base64) {
    $("#loginBtn").click(function() {
        var typingUsers = [];
        var log = [];

        function renderLog() {
            var logHtml = "";
            for (var index = 0; index < log.length; index++)
                logHtml += "[" + log[index].from + "] " + log[index].msg + "<br/>";
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

        function handleChat(from, msg) {
            log.push({from: from, msg: msg});
            renderLog();
        }

        var client = new OMP.ChatClient(handleChat, handleTypingStatus);
        client.login($("#firstname").val(), $("#lastname").val(), $("#pass").val(), function() {
            client.connect(function() {
                $("#loginForm").hide();
                $("#chatInterface").show();
                $("#say").keypress(function(e) {
                    if (e.keyCode == 13) {
                        client.sendMessage($("#say").val());
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
                });
                $("#say").focus();
            });
        });
    });
    $("#loginBtn").removeAttr("disabled");
});
