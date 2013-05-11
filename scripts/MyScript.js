Kata.require([
    'katajs/oh/GraphicsScript.js',
    'chat/Chat.js'
], function() {
  var SUPER = Kata.GraphicsScript.prototype;

  MyScript = function(channel, args) {
      SUPER.constructor.call(this, channel, args);

      this.connect(args, null, Kata.bind(this.connected, this));
      
      this.mChatBehavior =
          new Kata.Behavior.Chat(
              args.name, this,
              Kata.bind(this.chatEnterEvent, this),
              Kata.bind(this.chatExitEvent, this),
              Kata.bind(this.chatMessageEvent, this)
          );

      channel.sendMessage(new Kata.ScriptProtocol.FromScript.RegisterGUIMessage({}));
  }
  Kata.extend(MyScript, SUPER);

  MyScript.prototype.connected = function(presence) {
      var connectedEvent = this.createChatEvent("connectStatus");
      connectedEvent.event.status = (presence != null);

      this.mPresence = presence;
      this._sendHostedObjectMessage(connectedEvent);
  }
  
  MyScript.prototype.createChatEvent = function(action, name, msg) {
      var evt = { action : action };
      if (name)
          evt.name = name;
      if (msg)
          evt.msg = msg;
      return new Kata.ScriptProtocol.FromScript.GUIMessage("chat", evt);
  };
  MyScript.prototype.chatEnterEvent = function(remote, name) {
      this._sendHostedObjectMessage(this.createChatEvent('enter', name));
  };
  MyScript.prototype.chatExitEvent = function(remote, name, msg) {
      this._sendHostedObjectMessage(this.createChatEvent('exit', name, msg));
  };
  MyScript.prototype.chatMessageEvent = function(remote, name, msg) {
      this._sendHostedObjectMessage(this.createChatEvent('say', name, msg));
  };
  MyScript.prototype.handleChatGUIMessage = function(msg) {
      var revt = msg.event;
      this.mChatBehavior.chat(revt);
  };
  MyScript.prototype._handleGUIMessage = function (channel, msg) {
    SUPER._handleGUIMessage.call(this,channel,msg);
    if (msg.msg == 'chat')
        this.handleChatGUIMessage(msg);
  }
}, 'MyScript.js');