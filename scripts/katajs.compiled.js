// Construct fake 'window' object when run from the WebWorker
if (typeof window == "undefined") window = self;

if(typeof Kata == "undefined") {
  Kata = {}
}

// DEBUG
//Kata.WEB_WORKERS_ENABLED = false;

Kata.closureIncluded = {"katajs/core/Core.js":true, "katajs/core/Core.js":true, "externals/GLGE/src/core/glge.js":true, "externals/GLGE/src/core/glge_math.js":true, "externals/GLGE/src/core/glge_document.js":true, "externals/GLGE/src/core/glge_event.js":true, "externals/GLGE/src/core/glge_animatable.js":true, "externals/GLGE/src/core/glge_placeable.js":true, "externals/GLGE/src/core/glge_jsonloader.js":true, "externals/GLGE/src/core/glge_quicknote.js":true, "externals/GLGE/src/core/glge_messages.js":true, 
"externals/GLGE/src/core/glge_group.js":true, "externals/GLGE/src/renderable/glge_object.js":true, "externals/GLGE/src/physics/glge_physicsabstract.js":true, "externals/GLGE/src/scene/glge_scene.js":true, "externals/GLGE/src/scene/glge_light.js":true, "externals/GLGE/src/scene/glge_camera.js":true, "externals/GLGE/src/renders/glge_renderer.js":true, "externals/GLGE/src/renderable/glge_text.js":true, "externals/GLGE/src/renderable/glge_lod.js":true, "externals/GLGE/src/physics/glge_physicssphere.js":true, 
"externals/GLGE/src/physics/glge_physicsplane.js":true, "externals/GLGE/src/physics/glge_physicsmesh.js":true, "externals/GLGE/src/physics/glge_physicsext.js":true, "externals/GLGE/src/physics/glge_physicsconstraintpoint.js":true, "externals/GLGE/src/physics/glge_physicsbox.js":true, "externals/GLGE/src/material/glge_texturevideo.js":true, "externals/GLGE/src/material/glge_texture.js":true, "externals/GLGE/src/material/glge_texturecube.js":true, "externals/GLGE/src/material/glge_texturecanvas.js":true, 
"externals/GLGE/src/material/glge_texturecamera.js":true, "externals/GLGE/src/material/glge_multimaterial.js":true, "externals/GLGE/src/material/glge_materiallayer.js":true, "externals/GLGE/src/material/glge_material.js":true, "externals/GLGE/src/geometry/glge_mesh.js":true, "externals/GLGE/src/animation/glge_animationvector.js":true, "externals/GLGE/src/animation/glge_animationpoints.js":true, "externals/GLGE/src/animation/glge_animationcurve.js":true, "externals/GLGE/src/animation/glge_action.js":true, 
"externals/GLGE/src/animation/glge_actionchannel.js":true, "externals/GLGE/src/extra/glge_xmlparser.js":true, "externals/GLGE/src/extra/glge_wavefront.js":true, "externals/GLGE/src/extra/glge_particles.js":true, "externals/GLGE/src/extra/glge_input.js":true, "externals/GLGE/src/extra/glge_filter2d.js":true, "externals/GLGE/src/extra/glge_collada.js":true, "externals/GLGE/src/extra/filters/glge_filter_scanlines.js":true, "externals/GLGE/src/extra/filters/glge_filter_glow.js":true, "externals/GLGE/src/extra/filters/glge_filter_ao.js":true, 
"externals/protojs/protobuf.js":true, "externals/protojs/pbj.js":true, "katajs/gfx/WebGLCompat.js":true, "katajs/gfx/glgegfx.js":true, "katajs/gfx/TextGraphics.js":true, "katajs/gfx/layer0.js":true, "katajs/gfx/layer1.js":true, "katajs/gfx/layer2.js":true, "katajs/gfx/layer2_no_sunbeams.js":true, "katajs/core/Channel.js":true, "katajs/core/Deque.js":true, "katajs/core/FilterChannel.js":true, "katajs/core/Location.js":true, "katajs/core/Math.uuid.js":true, "katajs/core/MessageDispatcher.js":true, 
"katajs/core/ObjectID.js":true, "katajs/core/PresenceID.js":true, "katajs/core/Quaternion.js":true, "katajs/core/SimpleChannel.js":true, "katajs/core/SpaceID.js":true, "katajs/core/Time.js":true, "katajs/core/URL.js":true, "katajs/core/WebWorker.js":true, "katajs/network/TCPSST.js":true, "katajs/oh/behavior/NamedObject.js":true, "katajs/oh/GraphicsScript.js":true, "katajs/oh/GraphicsSimulation.js":true, "katajs/oh/GUISimulation.js":true, "katajs/oh/HostedObject.js":true, "katajs/oh/impl/BootstrapScript.js":true, 
"katajs/oh/impl/ScriptProtocol.js":true, "katajs/oh/MainThread.js":true, "katajs/oh/ObjectHost.js":true, "katajs/oh/ObjectHostWorker.js":true, "katajs/oh/odp/Endpoint.js":true, "katajs/oh/odp/PortID.js":true, "katajs/oh/odp/Port.js":true, "katajs/oh/odp/Service.js":true, "katajs/oh/plugins/loop/LoopbackSpaceConnection.js":true, "katajs/oh/plugins/sirikata/Frame.js":true, "katajs/oh/plugins/sirikata/impl/AggregateBoundingInfo.pbj.js":true, "katajs/oh/plugins/sirikata/impl/Empty.pbj.js":true, "katajs/oh/plugins/sirikata/impl/Frame.pbj.js":true, 
"katajs/oh/plugins/sirikata/impl/Loc.pbj.js":true, "katajs/oh/plugins/sirikata/impl/ObjectMessage.pbj.js":true, "katajs/oh/plugins/sirikata/impl/Prox.pbj.js":true, "katajs/oh/plugins/sirikata/impl/Session.pbj.js":true, "katajs/oh/plugins/sirikata/impl/SSTHeader.pbj.js":true, "katajs/oh/plugins/sirikata/impl/TimedMotionQuaternion.pbj.js":true, "katajs/oh/plugins/sirikata/impl/TimedMotionVector.pbj.js":true, "katajs/oh/plugins/sirikata/impl/TimeSync.pbj.js":true, "katajs/oh/plugins/sirikata/SirikataSpaceConnection.js":true, 
"katajs/oh/plugins/sirikata/Sync.js":true, "katajs/oh/Presence.js":true, "katajs/oh/RemotePresence.js":true, "katajs/oh/Script.js":true, "katajs/oh/SessionManager.js":true, "katajs/oh/Simulation.js":true, "katajs/oh/SpaceConnection.js":true, "katajs/oh/sst/SSTImpl.js":true, "katajs/space/loop/EveryoneProx.js":true, "katajs/space/loop/Loc.js":true, "katajs/space/loop/Space.js":true, "katajs/space/loop/Subscription.js":true};
var Kata;
var network_debug = false;
var debug_console;
if(network_debug) {
  Kata = function() {
  }
}
if(typeof Kata == "undefined") {
  Kata = {}
}
if(typeof console == "undefined") {
  self.console = {};
  debug_console = false
}else {
  debug_console = true
}
if(typeof JSON == "undefined") {
  JSON = {}
}
Kata.urlGetVars = new function(sSearch) {
  var rNull = /^\s*$/, rBool = /^(true|false)$/i;
  function buildValue(sValue) {
    if(rNull.test(sValue)) {
      return null
    }
    if(rBool.test(sValue)) {
      return sValue.toLowerCase() === "true"
    }
    if(isFinite(sValue)) {
      return parseFloat(sValue)
    }
    var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(sValue);
    if(a) {
      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]))
    }
    return sValue
  }
  if(sSearch.length > 1) {
    for(var aItKey, nKeyId = 0, aCouples = sSearch.substr(1).split("&");nKeyId < aCouples.length;nKeyId++) {
      aItKey = aCouples[nKeyId].split("=");
      this[unescape(aItKey[0])] = aItKey.length > 1 ? buildValue(unescape(aItKey[1])) : null
    }
  }
}(self.location.search);
if(self["Kata_scriptRoot"] !== undefined) {
  Kata.scriptRoot = self["Kata_scriptRoot"]
}else {
  if(!Kata.scriptRoot) {
    Kata.scriptRoot = ""
  }
}
if(!Kata.queryString) {
  if(Kata.urlGetVars["v"]) {
    Kata.queryString = "?" + Kata.urlGetVars["v"]
  }else {
    Kata.queryString = ""
  }
}
(function() {
  var includedscripts = Kata.closureIncluded || {"katajs/core/Core.js":true};
  var loadedDeps = {"katajs/core/Core.js":true};
  var deferred = {};
  var depsPending = {};
  Kata._currentScript = [];
  Kata.getCurrentScript = function() {
    return Kata._currentScript[Kata._currentScript.length - 1]
  };
  function runNewCurrentScript(scriptfile, body) {
    Kata._currentScript.push(scriptfile);
    try {
      if(body) {
        body()
      }
    }finally {
      if(Kata.getCurrentScript() != scriptfile) {
        Kata.log("Error11: " + scriptfile + " != " + Kata.getCurrentScript(), Kata._currentScript)
      }
      Kata._currentScript.pop();
      if(scriptfile) {
        Kata.setIncluded(scriptfile)
      }
    }
  }
  function orderedRequire(depList) {
    function runRequire(i) {
      return function() {
        delete depsPending[depList[i]];
        Kata.include(depList[i])
      }
    }
    for(var which = 0;which < depList.length;which++) {
      while(includedscripts[depList[which]]) {
        depList.splice(which, 1)
      }
    }
    for(var which = 0;which < depList.length - 1;which++) {
      deferred[depList[which]] = deferred[depList[which]] || [];
      deferred[depList[which]].push(runRequire(which + 1));
      depsPending[depList[which + 1]] = true
    }
    if(depList.length) {
      if(!depsPending[depList[0]]) {
        Kata.include(depList[0])
      }
    }
  }
  Kata.require = function(deps, body, provide) {
    if(provide && provide in loadedDeps) {
      Kata.warn("JS file " + provide + " included twice.");
      return
    }
    if(depsPending[provide]) {
      return
    }
    var i;
    var unfinishedDeps = {};
    var remainingDeps = 0;
    for(i = 0;i < deps.length;i++) {
      if(deps[i].push) {
        for(var j = 0;j < deps[i].length;j++) {
          if(!loadedDeps[deps[i][j]] && !(deps[i][j] in unfinishedDeps)) {
            unfinishedDeps[deps[i][j]] = true;
            remainingDeps++
          }
        }
      }else {
        if(!loadedDeps[deps[i]] && !(deps[i] in unfinishedDeps)) {
          unfinishedDeps[deps[i]] = true;
          remainingDeps++
        }
      }
    }
    function runDep(finished) {
      if(unfinishedDeps[finished]) {
        delete unfinishedDeps[finished];
        remainingDeps--;
        if(remainingDeps == 0) {
          if(provide) {
            delete depsPending[provide]
          }
          runNewCurrentScript(provide, body)
        }
      }
    }
    if(remainingDeps) {
      if(provide) {
        depsPending[provide] = true
      }
      for(i in unfinishedDeps) {
        deferred[i] = deferred[i] || [];
        deferred[i].push(runDep)
      }
      for(i = 0;i < deps.length;i++) {
        if(deps[i].push) {
          orderedRequire(deps[i])
        }else {
          if(!depsPending[deps[i]]) {
            Kata.include(deps[i])
          }
        }
      }
    }else {
      body();
      Kata.setIncluded(provide)
    }
  };
  Kata.defer = function(f) {
    if(f) {
      Kata.require([], f, null)
    }
  };
  Kata.setIncluded = function(provide) {
    if(!provide) {
      return
    }
    if(depsPending[provide]) {
      return
    }
    if(deferred[provide]) {
      var deferList = deferred[provide];
      delete deferred[provide];
      for(var i = 0;i < deferList.length;i++) {
        deferList[i](provide)
      }
    }
    loadedDeps[provide] = true
  };
  if(typeof importScripts != "undefined") {
    Kata.include = function(scriptfile) {
      if(includedscripts[scriptfile]) {
        return
      }
      includedscripts[scriptfile] = true;
      runNewCurrentScript(scriptfile, function() {
        try {
          importScripts(Kata.scriptRoot + scriptfile + Kata.queryString)
        }catch(e) {
          Kata.log("Error in importScripts(" + Kata.scriptRoot + scriptfile + ")");
          throw e;
        }
      })
    };
    Kata.evalInclude = Kata.include
  }else {
    if(typeof document != "undefined" && document.write) {
      var scripttags = document.getElementsByTagName("script");
      var headTag = document.getElementsByTagName("head")[0];
      for(var i = 0;i < scripttags.length;i++) {
        var src = scripttags[i].getAttribute("src");
        if(src) {
          var rootindex = src.indexOf("katajs/core/Core.js");
          if(rootindex != -1) {
            var sroot = src.substr(0, rootindex);
            if(sroot.length > 0 && sroot.slice(-1) != "/") {
              sroot = sroot + "/"
            }
            Kata.scriptRoot = sroot
          }
        }
      }
      window.pendingScripts = {};
      var pendingId = 1;
      Kata.include = function(scriptfile) {
        if(includedscripts[scriptfile]) {
          return
        }
        includedscripts[scriptfile] = true;
        var scriptTag, textNode;
        scriptTag = document.createElement("script");
        if(scriptfile.search("http") == 0) {
          scriptTag.src = scriptfile
        }else {
          scriptTag.src = Kata.scriptRoot + scriptfile + Kata.queryString
        }
        scriptTag.type = "text/javascript";
        var scriptContent = function() {
          if(Kata.getCurrentScript()) {
            Kata.log("Error: " + scriptfile + " != " + Kata.getCurrentScript(), Kata._currentScript)
          }
          Kata.setIncluded(scriptfile)
        };
        scriptTag.addEventListener("load", scriptContent, true);
        headTag.appendChild(scriptTag)
      };
      Kata.evalInclude = Kata.include
    }else {
    }
  }
  Kata.extend = function(childcons, parent) {
    for(var prop in parent) {
      childcons.prototype[prop] = parent[prop]
    }
    childcons.prototype.constructor = childcons;
    childcons.prototype.SUPER = parent
  };
  Kata.bind = function(func, object) {
    if(arguments.length == 2) {
      return function() {
        return func.apply(object, arguments)
      }
    }else {
      var args = new Array(arguments.length - 2);
      for(var i = 2;i < arguments.length;++i) {
        args[i - 2] = arguments[i]
      }
      return function() {
        var argLen = arguments.length;
        var newarglist = new Array(argLen);
        for(var i = 0;i < argLen;++i) {
          newarglist[i] = arguments[i]
        }
        return func.apply(object, args.concat(newarglist))
      }
    }
  };
  Kata.stringify = function(msg, level) {
    if(!level) {
      level = ""
    }
    var end = level + "}";
    level += "    ";
    var datastr;
    if(typeof msg != "object" || msg === null) {
      return"" + msg
    }
    datastr = "{\n";
    for(var k in msg) {
      datastr += level + k + ": " + Kata.stringify(msg[k], level) + ",\n"
    }
    datastr += end;
    return datastr
  };
  if(console.log && console.log.apply && debug_console) {
    Kata.log = function(var_args) {
      console.log.apply(console, arguments)
    }
  }else {
    if(typeof document == "undefined" || typeof window == "undefined") {
      Kata.log = console.log = function(var_args) {
        var args = [];
        for(var i = 0;i < arguments.length;i++) {
          args[i] = arguments[i];
          if(typeof args[i] == "object") {
            args[i] = Kata.stringify(args[i])
          }else {
            if(typeof args[i] != "string") {
              args[i] = "" + args[i]
            }
          }
        }
        self.postMessage({msg:__magic_debug_msg_string, debug:"log", contents:args})
      }
    }else {
      if(debug_console) {
        Kata.log = console.log = function(var_args) {
          window.status = "" + arguments[0];
          var p = document.createElement("p");
          p.style.border = "1px solid black";
          p.style.margin = "0";
          var marleft = "0";
          for(var i = 0;i < arguments.length;i++) {
            var msg = arguments[i];
            var div;
            if(typeof msg != "object" || msg.toString != Object.prototype.toString) {
              div = document.createElement("div");
              div.appendChild(document.createTextNode(msg))
            }else {
              var datastr;
              datastr = Kata.stringify(msg);
              div = document.createElement("pre");
              div.appendChild(document.createTextNode(datastr))
            }
            div.style.margin = "0";
            div.style.padding = "5px";
            div.style.overflow = "auto";
            div.style.whiteSpace = "pre";
            div.style.border = "1px solid #ccc";
            div.style.marginLeft = marleft;
            marleft = "30px";
            p.appendChild(div)
          }
          if(document.body) {
            document.body.appendChild(p)
          }
        }
      }else {
        Kata.log = console.log = function() {
        }
      }
    }
  }
  Kata.setStatus = function(msg) {
    if(typeof window == "undefined") {
      return
    }
    window.status = msg
  };
  var __magic_debug_msg_string = "__magic_debug_msg_string";
  Kata.error = function(error) {
    if(typeof window == "undefined") {
      self.postMessage({msg:__magic_debug_msg_string, debug:"error", contents:error});
      throw error;
    }
    console.log(error);
    if(typeof console.error != "undefined") {
      Kata.setStatus(error);
      console.error && console.error(error);
      console.trace && console.trace()
    }
  };
  Kata.warn = function(note, type) {
    if(typeof type == "undefined" || !type) {
      type = ""
    }
    if(typeof window == "undefined") {
      self.postMessage({msg:__magic_debug_msg_string, debug:"warn", type:type, contents:note});
      console.trace && console.trace();
      return
    }
    var msg = null;
    if(type && note) {
      msg = type + ": " + note
    }else {
      if(type) {
        msg = type
      }else {
        if(note) {
          msg = note
        }
      }
    }
    console.log(msg);
    Kata.setStatus(msg);
    console.trace && console.trace()
  };
  Kata.notImplemented = function(note) {
    Kata.log(note, "notImplemented")
  };
  var nextDebugId = 1001;
  Kata.debugMessage = function(channel, data) {
    if(data === undefined || data === null || data.msg != __magic_debug_msg_string) {
      return false
    }
    var debugId = 0;
    if(channel) {
      if(!channel.__debug_id) {
        channel.__debug_id = nextDebugId++
      }
      debugId = channel.__debug_id
    }
    debugId = "<" + debugId + ">";
    switch(data.debug) {
      case "error":
        Kata.log(debugId + " " + data.contents);
        break;
      case "warn":
        Kata.log(debugId + data.type + ": " + data.contents);
        break;
      case "log":
        data.contents.splice(0, 0, debugId);
        Kata.log.apply(self, data.contents);
        break;
      default:
        Kata.error(debugId + " " + "Unknown debug message type: " + data.debug);
        break
    }
    return true
  }
})();
if(typeof GLGE == "undefined") {
  GLGE = {}
}
(function(GLGE) {
  var parseFloat2 = function(val) {
    if(typeof val != "number") {
      return parseFloat(val)
    }else {
      return val
    }
  };
  GLGE.augment = function(obj1, obj2) {
    for(proto in obj1.prototype) {
      obj2.prototype[proto] = obj1.prototype[proto]
    }
  };
  GLGE.makeGlobal = function() {
    for(var key in GLGE) {
      window[key] = GLGE[key]
    }
  };
  GLGE.New = function(createclass) {
    if(GLGE[createclass].prototype.className != "") {
      return new GLGE[createclass]
    }else {
      return false
    }
  };
  GLGE.TRUE = 1;
  GLGE.FALSE = 0;
  GLGE.GLOBAL = 0;
  GLGE.LOCAL = 1;
  GLGE.DRAW_TRIS = 1;
  GLGE.DRAW_LINES = 2;
  GLGE.DRAW_LINELOOPS = 3;
  GLGE.DRAW_LINESTRIPS = 4;
  GLGE.DRAW_POINTS = 5;
  GLGE.RENDER_DEFAULT = 0;
  GLGE.RENDER_SHADOW = 1;
  GLGE.RENDER_PICK = 2;
  GLGE.RENDER_NORMAL = 3;
  GLGE.RENDER_EMIT = 4;
  GLGE.RENDER_DEPTH = 5;
  GLGE.RENDER_NULL = 6;
  GLGE.TEXT_BOXPICK = 1;
  GLGE.TEXT_TEXTPICK = 2;
  GLGE.P_EULER = 1;
  GLGE.P_QUAT = 2;
  GLGE.P_MATRIX = 3;
  GLGE.NONE = 0;
  GLGE.XAXIS = 1;
  GLGE.YAXIS = 2;
  GLGE.ZAXIS = 3;
  GLGE.POS_XAXIS = 1;
  GLGE.NEG_XAXIS = 2;
  GLGE.POS_YAXIS = 3;
  GLGE.NEG_YAXIS = 4;
  GLGE.POS_ZAXIS = 5;
  GLGE.NEG_ZAXIS = 6;
  GLGE.ZERO = "ZERO";
  GLGE.ONE = "ONE";
  GLGE.SRC_COLOR = "SRC_COLOR";
  GLGE.ONE_MINUS_SRC_COLOR = "ONE_MINUS_SRC_COLOR";
  GLGE.SRC_ALPHA = "SRC_ALPHA";
  GLGE.ONE_MINUS_SRC_ALPHA = "ONE_MINUS_SRC_ALPHA";
  GLGE.DST_ALPHA = "DST_ALPHA";
  GLGE.ONE_MINUS_DST_ALPHA = "ONE_MINUS_DST_ALPHA";
  GLGE.LINEAR_BLEND = function(value) {
    return value
  };
  GLGE.QUAD_BLEND = function(value) {
    return value * value
  };
  GLGE.SPECIAL_BLEND = function(value) {
    value = value * (2 - value);
    return value * value
  };
  GLGE.error = function(error) {
    if(console && console.log) {
      console.log("GLGE error: " + error)
    }
  };
  GLGE.XMLHttpRequest = window.XMLHttpRequest;
  GLGE.loadImage = function(image, src) {
    image.crossOrigin = "";
    image.src = src
  };
  GLGE.Assets = {};
  GLGE.Assets.assets = {};
  GLGE.REGISTER_ASSETS = false;
  GLGE.Assets.createUUID = function() {
    var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var data2 = ["8", "9", "A", "B"];
    uuid = "";
    for(var i = 0;i < 38;i++) {
      switch(i) {
        case 8:
          uuid = uuid + "-";
          break;
        case 13:
          uuid = uuid + "-";
          break;
        case 18:
          uuid = uuid + "-";
          break;
        case 14:
          uuid = uuid + "4";
          break;
        case 19:
          uuid = uuid + data2[Math.round(Math.random() * 3)];
          break;
        default:
          uuid = uuid + data[Math.round(Math.random() * 15)];
          break
      }
    }
    return uuid
  };
  GLGE.Assets.registerAsset = function(obj, uid) {
    if(GLGE.REGISTER_ASSETS) {
      if(!uid) {
        uid = GLGE.Assets.createUUID()
      }
      obj.uid = uid;
      GLGE.Assets.assets[uid] = obj
    }
  };
  GLGE.Assets.unregisterAsset = function(uid) {
    delete GLGE.Assets.assets[uid]
  };
  GLGE.Assets.get = function(uid) {
    var value = GLGE.Assets.assets[uid];
    if(value) {
      return value
    }else {
      return false
    }
  };
  GLGE.DJBHash = function(str) {
    var hash = 5381;
    for(var i = 0;i < str.length;i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i)
    }
    return hash
  };
  GLGE.getGLShader = function(gl, type, str) {
    var hash = GLGE.DJBHash(str);
    if(!gl.shaderCache) {
      gl.shaderCache = {}
    }
    if(!gl.shaderCache[hash]) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, str);
      gl.compileShader(shader);
      if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        try {
          GLGE.error(gl.getShaderInfoLog(shader));
          return
        }catch(e) {
        }
      }
      gl.shaderCache[hash] = shader
    }
    return gl.shaderCache[hash]
  };
  var progIdx = 0;
  GLGE.getGLProgram = function(gl, vShader, fShader) {
    if(!gl.programCache) {
      gl.programCache = []
    }
    var programCache = gl.programCache;
    for(var i = 0;i < programCache.length;i++) {
      if(programCache[i].fShader == fShader && programCache[i].vShader == vShader) {
        return programCache[i].program
      }
    }
    var program = gl.createProgram();
    program.progIdx = progIdx++;
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      GLGE.error("Couldn't link shader: " + gl.getProgramInfoLog(program))
    }
    programCache.push({vShader:vShader, fShader:fShader, program:program});
    if(!program.uniformDetails) {
      program.uniformDetails = {};
      var uniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for(var i = 0;i < uniforms;++i) {
        var info = gl.getActiveUniform(program, i);
        program.uniformDetails[info.name] = {loc:GLGE.getUniformLocation(gl, program, info.name), info:info}
      }
    }
    return program
  };
  GLGE.getUniformLocation = function(gl, program, uniform) {
    if(!program.uniformCache) {
      program.uniformCache = {}
    }
    if(!program.uniformChecked) {
      program.uniformChecked = {}
    }
    if(!program.uniformChecked[uniform]) {
      program.uniformCache[uniform] = gl.getUniformLocation(program, uniform);
      program.uniformChecked[uniform] = true
    }
    return program.uniformCache[uniform]
  };
  GLGE.setUniform = function(gl, type, location, value) {
    if(typeof value == "string") {
      value = +value
    }
    if(location != null) {
      gl["uniform" + type](location, value)
    }
  };
  GLGE.setUniform3 = function(gl, type, location, value1, value2, value3) {
    if(typeof value1 == "string") {
      value1 = +value1
    }
    if(typeof value2 == "string") {
      value2 = +value2
    }
    if(typeof value3 == "string") {
      value3 = +value3
    }
    if(location != null) {
      gl["uniform" + type](location, value1, value2, value3)
    }
  };
  GLGE.setUniform2 = function(gl, type, location, value1, value2) {
    if(typeof value1 == "string") {
      value1 = +value1
    }
    if(typeof value2 == "string") {
      value2 = +value2
    }
    if(location != null) {
      gl["uniform" + type](location, value1, value2)
    }
  };
  GLGE.setUniform4 = function(gl, type, location, value1, value2, value3, value4) {
    if(location != null) {
      gl["uniform" + type](location, value1, value2, value3, value4)
    }
  };
  GLGE.setUniformMatrix = function(gl, type, location, transpose, value) {
    if(location != null) {
      gl["uniform" + type](location, transpose, value)
    }
  };
  GLGE.getAttribLocation = function(gl, program, attrib) {
    if(!program.attribCache) {
      program.attribCache = {}
    }
    if(program.attribCache[attrib] == undefined) {
      program.attribCache[attrib] = gl.getAttribLocation(program, attrib)
    }
    return program.attribCache[attrib]
  };
  GLGE.colorParse = function(color) {
    var red, green, blue, alpha;
    var color_names = {aliceblue:"f0f8ff", antiquewhite:"faebd7", aqua:"00ffff", aquamarine:"7fffd4", azure:"f0ffff", beige:"f5f5dc", bisque:"ffe4c4", black:"000000", blanchedalmond:"ffebcd", blue:"0000ff", blueviolet:"8a2be2", brown:"a52a2a", burlywood:"deb887", cadetblue:"5f9ea0", chartreuse:"7fff00", chocolate:"d2691e", coral:"ff7f50", cornflowerblue:"6495ed", cornsilk:"fff8dc", crimson:"dc143c", cyan:"00ffff", darkblue:"00008b", darkcyan:"008b8b", darkgoldenrod:"b8860b", darkgray:"a9a9a9", darkgreen:"006400", 
    darkkhaki:"bdb76b", darkmagenta:"8b008b", darkolivegreen:"556b2f", darkorange:"ff8c00", darkorchid:"9932cc", darkred:"8b0000", darksalmon:"e9967a", darkseagreen:"8fbc8f", darkslateblue:"483d8b", darkslategray:"2f4f4f", darkturquoise:"00ced1", darkviolet:"9400d3", deeppink:"ff1493", deepskyblue:"00bfff", dimgray:"696969", dodgerblue:"1e90ff", feldspar:"d19275", firebrick:"b22222", floralwhite:"fffaf0", forestgreen:"228b22", fuchsia:"ff00ff", gainsboro:"dcdcdc", ghostwhite:"f8f8ff", gold:"ffd700", 
    goldenrod:"daa520", gray:"808080", green:"008000", greenyellow:"adff2f", honeydew:"f0fff0", hotpink:"ff69b4", indianred:"cd5c5c", indigo:"4b0082", ivory:"fffff0", khaki:"f0e68c", lavender:"e6e6fa", lavenderblush:"fff0f5", lawngreen:"7cfc00", lemonchiffon:"fffacd", lightblue:"add8e6", lightcoral:"f08080", lightcyan:"e0ffff", lightgoldenrodyellow:"fafad2", lightgrey:"d3d3d3", lightgreen:"90ee90", lightpink:"ffb6c1", lightsalmon:"ffa07a", lightseagreen:"20b2aa", lightskyblue:"87cefa", lightslateblue:"8470ff", 
    lightslategray:"778899", lightsteelblue:"b0c4de", lightyellow:"ffffe0", lime:"00ff00", limegreen:"32cd32", linen:"faf0e6", magenta:"ff00ff", maroon:"800000", mediumaquamarine:"66cdaa", mediumblue:"0000cd", mediumorchid:"ba55d3", mediumpurple:"9370d8", mediumseagreen:"3cb371", mediumslateblue:"7b68ee", mediumspringgreen:"00fa9a", mediumturquoise:"48d1cc", mediumvioletred:"c71585", midnightblue:"191970", mintcream:"f5fffa", mistyrose:"ffe4e1", moccasin:"ffe4b5", navajowhite:"ffdead", navy:"000080", 
    oldlace:"fdf5e6", olive:"808000", olivedrab:"6b8e23", orange:"ffa500", orangered:"ff4500", orchid:"da70d6", palegoldenrod:"eee8aa", palegreen:"98fb98", paleturquoise:"afeeee", palevioletred:"d87093", papayawhip:"ffefd5", peachpuff:"ffdab9", peru:"cd853f", pink:"ffc0cb", plum:"dda0dd", powderblue:"b0e0e6", purple:"800080", red:"ff0000", rosybrown:"bc8f8f", royalblue:"4169e1", saddlebrown:"8b4513", salmon:"fa8072", sandybrown:"f4a460", seagreen:"2e8b57", seashell:"fff5ee", sienna:"a0522d", silver:"c0c0c0", 
    skyblue:"87ceeb", slateblue:"6a5acd", slategray:"708090", snow:"fffafa", springgreen:"00ff7f", steelblue:"4682b4", tan:"d2b48c", teal:"008080", thistle:"d8bfd8", tomato:"ff6347", turquoise:"40e0d0", violet:"ee82ee", violetred:"d02090", wheat:"f5deb3", white:"ffffff", whitesmoke:"f5f5f5", yellow:"ffff00", yellowgreen:"9acd32"};
    if(color_names[color]) {
      color = "#" + color_names[color]
    }
    if(color.substr && color.substr(0, 1) == "#") {
      color = color.substr(1);
      if(color.length == 8) {
        red = parseInt("0x" + color.substr(0, 2)) / 255;
        green = parseInt("0x" + color.substr(2, 2)) / 255;
        blue = parseInt("0x" + color.substr(4, 2)) / 255;
        alpha = parseInt("0x" + color.substr(6, 2)) / 255
      }else {
        if(color.length == 4) {
          red = parseInt("0x" + color.substr(0, 1)) / 15;
          green = parseInt("0x" + color.substr(1, 1)) / 15;
          blue = parseInt("0x" + color.substr(2, 1)) / 15;
          alpha = parseInt("0x" + color.substr(3, 1)) / 15
        }else {
          if(color.length == 6) {
            red = parseInt("0x" + color.substr(0, 2)) / 255;
            green = parseInt("0x" + color.substr(2, 2)) / 255;
            blue = parseInt("0x" + color.substr(4, 2)) / 255;
            alpha = 1
          }else {
            if(color.length == 3) {
              red = parseInt("0x" + color.substr(0, 1)) / 15;
              green = parseInt("0x" + color.substr(1, 1)) / 15;
              blue = parseInt("0x" + color.substr(2, 1)) / 15;
              alpha = 1
            }
          }
        }
      }
    }else {
      if(color.substr && color.substr(0, 4) == "rgb(") {
        var colors = color.substr(4).split(",");
        red = parseInt(colors[0]) / 255;
        green = parseInt(colors[1]) / 255;
        blue = parseInt(colors[2]) / 255;
        alpha = 1
      }else {
        if(color.substr && color.substr(0, 5) == "rgba(") {
          var colors = color.substr(4).split(",");
          red = parseInt(colors[0]) / 255;
          green = parseInt(colors[1]) / 255;
          blue = parseInt(colors[2]) / 255;
          alpha = parseInt(colors[3]) / 255
        }else {
          red = 0;
          green = 0;
          blue = 0;
          alpha = 0
        }
      }
    }
    return{r:red, g:green, b:blue, a:alpha}
  }
})(GLGE);
if(typeof GLGE == "undefined") {
  GLGE = {}
}
(function(GLGE) {
  var matrixCache = [];
  GLGE.reuseMatrix4 = function(mat4) {
  };
  GLGE.matrix4 = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
    if(matrixCache.length == 0) {
      var mat = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16]
    }else {
      var mat = matrixCache.shift();
      mat[0] = a1;
      mat[1] = a2;
      mat[2] = a3;
      mat[3] = a4;
      mat[4] = a5;
      mat[5] = a6;
      mat[6] = a7;
      mat[7] = a8;
      mat[8] = a9;
      mat[9] = a10;
      mat[10] = a11;
      mat[11] = a12;
      mat[12] = a13;
      mat[13] = a14;
      mat[14] = a15;
      mat[15] = a16
    }
    return mat
  };
  GLGE.Vec = function(array) {
    return array.slice(0)
  };
  GLGE.Vec3 = function(x, y, z) {
    return[x, y, z]
  };
  GLGE.Vec4 = function(x, y, z, w) {
    return[x, y, z, w]
  };
  GLGE.get1basedVec4 = function(v, i) {
    return v[i - 1]
  };
  GLGE.get1basedVec3 = function(v, i) {
    return v[i - 1]
  };
  GLGE.getVec4 = function(v, i) {
    return v[i]
  };
  GLGE.getVec3 = function(v, i) {
    return v[i]
  };
  GLGE.addVec4 = function(a, b) {
    return[a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]
  };
  GLGE.addVec3 = function(a, b) {
    return[a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  };
  GLGE.subVec4 = function(a, b) {
    return[a[0] - b[0], a[1] - b[1], a[2] - b[2], a[3] - b[3]]
  };
  GLGE.subVec3 = function(a, b) {
    return[a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  };
  GLGE.dotVec3 = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  };
  GLGE.dotVec4 = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
  };
  GLGE.scaleVec4 = function(a, b) {
    return[a[0] * b, a[1] * b, a[2] * b, a[3] * b]
  };
  GLGE.scaleVec3 = function(a, b) {
    return[a[0] * b, a[1] * b, a[2] * b]
  };
  GLGE.crossVec3 = function(a, b) {
    return[a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
  };
  GLGE.toUnitVec3 = function(a) {
    var sq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    var f = 1;
    if(sq > 0) {
      f = Math.pow(sq, 0.5)
    }
    return[a[0] / f, a[1] / f, a[2] / f]
  };
  GLGE.toUnitVec4 = function(a) {
    var sq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
    var f = 1;
    if(sq > 0) {
      f = Math.pow(sq, 0.5)
    }
    return[a[0] / f, a[1] / f, a[2] / f, a[3] / f]
  };
  GLGE.lengthVec3 = function(a) {
    return Math.pow(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], 0.5)
  };
  GLGE.distanceVec3 = function(a, b) {
    return GLGE.lengthVec3(GLGE.subVec3(a, b))
  };
  GLGE.lengthVec4 = function(a, b) {
    return Math.pow(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3], 0.5)
  };
  GLGE.distanceVec4 = function(a, b) {
    return GLGE.lengthVec4(GLGE.subVec4(a, b))
  };
  GLGE.angleVec3 = function(a, b) {
    a = GLGE.toUnitVec3(a);
    b = GLGE.toUnitVec3(b);
    d = GLGE.dotVec3(a, b);
    if(d < -1) {
      d = -1
    }
    if(d > 1) {
      d = 1
    }
    return Math.acos(d)
  };
  GLGE.angleVec4 = function(a, b) {
    a = GLGE.toUnitVec4(a);
    b = GLGE.toUnitVec4(b);
    d = GLGE.dotVec4(a, b);
    if(d < -1) {
      d = -1
    }
    if(d > 1) {
      d = 1
    }
    return Math.acos(d)
  };
  GLGE_math_use_webgl_float = false;
  GLGE.Mat3 = GLGE_math_use_webgl_float ? function(array) {
    if(array.length == 9) {
      return new Float32Array(array)
    }else {
      if(array.length == 16) {
        return new Float32Array([array[0], array[1], array[2], array[4], array[5], array[6], array[8], array[9], array[10]])
      }else {
        throw"invalid matrix length";
      }
    }
  } : function(array) {
    var retval;
    if(array.length == 9) {
      retval = array.slice(0)
    }else {
      if(array.length == 16) {
        retval = [array[0], array[1], array[2], array[4], array[5], array[6], array[8], array[9], array[10]]
      }else {
        throw"invalid matrix length";
      }
    }
    retval.get = function(i) {
      return this[i]
    };
    return retval
  };
  GLGE.Mat = GLGE_math_use_webgl_float ? function(array) {
    return new Float32Array(array)
  } : function(array) {
    var retval = array.slice(0);
    retval.get = function(i) {
      return this[i]
    };
    return retval
  };
  GLGE.Mat4 = function(array) {
    var retval;
    if(array.length == 9) {
      retval = [array[0], array[1], array[2], 0, array[3], array[4], array[5], 0, array[6], array[7], array[8], 0, 0, 0, 0, 1]
    }else {
      if(array.length == 16) {
        if(array.slice) {
          retval = array.slice(0)
        }else {
          retval = array.subarray(0)
        }
      }else {
        throw"invalid matrix length";
      }
    }
    retval.get = function(i) {
      return this[i]
    };
    return retval
  };
  GLGE.determinantMat4 = function(m) {
    return m[12] * m[9] * m[6] * m[3] - m[8] * m[13] * m[6] * m[3] - m[12] * m[5] * m[10] * m[3] + m[4] * m[13] * m[10] * m[3] + m[8] * m[5] * m[14] * m[3] - m[4] * m[9] * m[14] * m[3] - m[12] * m[9] * m[2] * m[7] + m[8] * m[13] * m[2] * m[7] + m[12] * m[1] * m[10] * m[7] - m[0] * m[13] * m[10] * m[7] - m[8] * m[1] * m[14] * m[7] + m[0] * m[9] * m[14] * m[7] + m[12] * m[5] * m[2] * m[11] - m[4] * m[13] * m[2] * m[11] - m[12] * m[1] * m[6] * m[11] + m[0] * m[13] * m[6] * m[11] + m[4] * m[1] * m[14] * 
    m[11] - m[0] * m[5] * m[14] * m[11] - m[8] * m[5] * m[2] * m[15] + m[4] * m[9] * m[2] * m[15] + m[8] * m[1] * m[6] * m[15] - m[0] * m[9] * m[6] * m[15] - m[4] * m[1] * m[10] * m[15] + m[0] * m[5] * m[10] * m[15]
  };
  GLGE.inverseMat4 = function(mat) {
    var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
    var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
    var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
    var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
    var d = a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 + a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 + a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 + a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 + a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 + a20 * a01 * 
    a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33;
    return GLGE.matrix4((a21 * a32 * a13 - a31 * a22 * a13 + a31 * a12 * a23 - a11 * a32 * a23 - a21 * a12 * a33 + a11 * a22 * a33) / d, (a31 * a22 * a03 - a21 * a32 * a03 - a31 * a02 * a23 + a01 * a32 * a23 + a21 * a02 * a33 - a01 * a22 * a33) / d, (a11 * a32 * a03 - a31 * a12 * a03 + a31 * a02 * a13 - a01 * a32 * a13 - a11 * a02 * a33 + a01 * a12 * a33) / d, (a21 * a12 * a03 - a11 * a22 * a03 - a21 * a02 * a13 + a01 * a22 * a13 + a11 * a02 * a23 - a01 * a12 * a23) / d, (a30 * a22 * a13 - a20 * 
    a32 * a13 - a30 * a12 * a23 + a10 * a32 * a23 + a20 * a12 * a33 - a10 * a22 * a33) / d, (a20 * a32 * a03 - a30 * a22 * a03 + a30 * a02 * a23 - a00 * a32 * a23 - a20 * a02 * a33 + a00 * a22 * a33) / d, (a30 * a12 * a03 - a10 * a32 * a03 - a30 * a02 * a13 + a00 * a32 * a13 + a10 * a02 * a33 - a00 * a12 * a33) / d, (a10 * a22 * a03 - a20 * a12 * a03 + a20 * a02 * a13 - a00 * a22 * a13 - a10 * a02 * a23 + a00 * a12 * a23) / d, (a20 * a31 * a13 - a30 * a21 * a13 + a30 * a11 * a23 - a10 * a31 * a23 - 
    a20 * a11 * a33 + a10 * a21 * a33) / d, (a30 * a21 * a03 - a20 * a31 * a03 - a30 * a01 * a23 + a00 * a31 * a23 + a20 * a01 * a33 - a00 * a21 * a33) / d, (a10 * a31 * a03 - a30 * a11 * a03 + a30 * a01 * a13 - a00 * a31 * a13 - a10 * a01 * a33 + a00 * a11 * a33) / d, (a20 * a11 * a03 - a10 * a21 * a03 - a20 * a01 * a13 + a00 * a21 * a13 + a10 * a01 * a23 - a00 * a11 * a23) / d, (a30 * a21 * a12 - a20 * a31 * a12 - a30 * a11 * a22 + a10 * a31 * a22 + a20 * a11 * a32 - a10 * a21 * a32) / d, (a20 * 
    a31 * a02 - a30 * a21 * a02 + a30 * a01 * a22 - a00 * a31 * a22 - a20 * a01 * a32 + a00 * a21 * a32) / d, (a30 * a11 * a02 - a10 * a31 * a02 - a30 * a01 * a12 + a00 * a31 * a12 + a10 * a01 * a32 - a00 * a11 * a32) / d, (a10 * a21 * a02 - a20 * a11 * a02 + a20 * a01 * a12 - a00 * a21 * a12 - a10 * a01 * a22 + a00 * a11 * a22) / d)
  };
  GLGE.mulMat4Vec3 = function(mat1, vec2) {
    return GLGE.Vec3(mat1[0] * vec2[0] + mat1[1] * vec2[1] + mat1[2] * vec2[2] + mat1[3], mat1[4] * vec2[0] + mat1[5] * vec2[1] + mat1[6] * vec2[2] + mat1[7], mat1[8] * vec2[0] + mat1[9] * vec2[1] + mat1[10] * vec2[2] + mat1[11])
  };
  GLGE.mulMat4Vec4 = function(mat1, vec2) {
    return GLGE.Vec4(mat1[0] * vec2[0] + mat1[1] * vec2[1] + mat1[2] * vec2[2] + mat1[3] * vec2[3], mat1[4] * vec2[0] + mat1[5] * vec2[1] + mat1[6] * vec2[2] + mat1[7] * vec2[3], mat1[8] * vec2[0] + mat1[9] * vec2[1] + mat1[10] * vec2[2] + mat1[11] * vec2[3], mat1[12] * vec2[0] + mat1[13] * vec2[1] + mat1[14] * vec2[2] + mat1[15] * vec2[3])
  };
  GLGE.scaleMat4 = function(m, value) {
    return GLGE.matrix4([m[0] * value, m[1] * value, m[2] * value, m[3] * value, m[4] * value, m[5] * value, m[6] * value, m[7] * value, m[8] * value, m[9] * value, m[10] * value, m[11] * value, m[12] * value, m[13] * value, m[14] * value, m[15] * value])
  };
  GLGE.scaleInPlaceMat4 = function(m, value) {
    m.set(0, m[0] * value);
    m.set(1, m[1] * value);
    m.set(2, m[2] * value);
    m.set(3, m[3] * value);
    m.set(4, m[4] * value);
    m.set(5, m[5] * value);
    m.set(6, m[6] * value);
    m.set(7, m[7] * value);
    m.set(8, m[8] * value);
    m.set(9, m[9] * value);
    m.set(10, m[10] * value);
    m.set(11, m[11] * value);
    m.set(12, m[12] * value);
    m.set(13, m[13] * value);
    m.set(14, m[14] * value);
    m.set(15, m[15] * value);
    return m
  };
  GLGE.addInPlaceMat4 = function(m, value) {
    m.set(0, m[0] + value[0]);
    m.set(1, m[1] + value[1]);
    m.set(2, m[2] + value[2]);
    m.set(3, m[3] + value[3]);
    m.set(4, m[4] + value[4]);
    m.set(5, m[5] + value[5]);
    m.set(6, m[6] + value[6]);
    m.set(7, m[7] + value[7]);
    m.set(8, m[8] + value[8]);
    m.set(9, m[9] + value[9]);
    m.set(10, m[10] + value[10]);
    m.set(11, m[11] + value[11]);
    m.set(12, m[12] + value[12]);
    m.set(13, m[13] + value[13]);
    m.set(14, m[14] + value[14]);
    m.set(15, m[15] + value[15]);
    return m
  };
  GLGE.addMat4 = function(m, value) {
    return GLGE.Mat([m[0] + value[0], m[1] + value[1], m[2] + value[2], m[3] + value[3], m[4] + value[4], m[5] + value[5], m[6] + value[6], m[7] + value[7], m[8] + value[8], m[9] + value[9], m[10] + value[10], m[11] + value[11], m[12] + value[12], m[13] + value[13], m[14] + value[14], m[15] + value[15]]);
    return m
  };
  GLGE.subInPlaceMat4 = function(m, value) {
    m.set(0, m[0] - value[0]);
    m.set(1, m[1] - value[1]);
    m.set(2, m[2] - value[2]);
    m.set(3, m[3] - value[3]);
    m.set(4, m[4] - value[4]);
    m.set(5, m[5] - value[5]);
    m.set(6, m[6] - value[6]);
    m.set(7, m[7] - value[7]);
    m.set(8, m[8] - value[8]);
    m.set(9, m[9] - value[9]);
    m.set(10, m[10] - value[10]);
    m.set(11, m[11] - value[11]);
    m.set(12, m[12] - value[12]);
    m.set(13, m[13] - value[13]);
    m.set(14, m[14] - value[14]);
    m.set(15, m[15] - value[15]);
    return m
  };
  GLGE.subMat4 = function(m, value) {
    return GLGE.Mat([m[0] - value[0], m[1] - value[1], m[2] - value[2], m[3] - value[3], m[4] - value[4], m[5] - value[5], m[6] - value[6], m[7] - value[7], m[8] - value[8], m[9] - value[9], m[10] - value[10], m[11] - value[11], m[12] - value[12], m[13] - value[13], m[14] - value[14], m[15] - value[15]]);
    return m
  };
  GLGE.mulMat4 = function(mat2, mat1) {
    var a00 = mat1[0], a01 = mat1[1], a02 = mat1[2], a03 = mat1[3];
    var a10 = mat1[4], a11 = mat1[5], a12 = mat1[6], a13 = mat1[7];
    var a20 = mat1[8], a21 = mat1[9], a22 = mat1[10], a23 = mat1[11];
    var a30 = mat1[12], a31 = mat1[13], a32 = mat1[14], a33 = mat1[15];
    var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2], b03 = mat2[3];
    var b10 = mat2[4], b11 = mat2[5], b12 = mat2[6], b13 = mat2[7];
    var b20 = mat2[8], b21 = mat2[9], b22 = mat2[10], b23 = mat2[11];
    var b30 = mat2[12], b31 = mat2[13], b32 = mat2[14], b33 = mat2[15];
    return GLGE.matrix4(b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + 
    b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33)
  };
  GLGE.transposeInPlaceMat4 = function(m) {
    var v = m[1];
    m.set(1, m[4]);
    m.set(4, v);
    v = m[8];
    m.set(8, m[2]);
    m.set(2, v);
    v = m[3];
    m.set(3, m[12]);
    m.set(12, v);
    v = m[9];
    m.set(9, m[6]);
    m.set(6, v);
    v = m[13];
    m.set(13, m[7]);
    m.set(7, v);
    v = m[14];
    m.set(14, m[11]);
    m.set(11, v)
  };
  GLGE.transposeMat4 = function(m) {
    return GLGE.matrix4(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15])
  };
  GLGE.mat4gl = function(mat, glarray) {
    glarray[0] = mat[0];
    glarray[1] = mat[1];
    glarray[2] = mat[2];
    glarray[3] = mat[3];
    glarray[4] = mat[4];
    glarray[5] = mat[5];
    glarray[6] = mat[6];
    glarray[7] = mat[7];
    glarray[8] = mat[8];
    glarray[9] = mat[9];
    glarray[10] = mat[10];
    glarray[11] = mat[11];
    glarray[12] = mat[12];
    glarray[13] = mat[13];
    glarray[14] = mat[14];
    glarray[15] = mat[15]
  };
  GLGE.set1basedMat4 = function(m, i, j, value) {
    m[(i - 1) * 4 + (j - 1)] = value;
    if(m.glData !== undefined) {
      delete m.glData
    }
  };
  GLGE.setMat4 = function(m, i, j, value) {
    m[i * 4 + j] = value;
    if(m.glData !== undefined) {
      delete m.glData
    }
  };
  GLGE.get1basedMat4 = function(m, i, j) {
    return m.get((i - 1) * 4 + (j - 1))
  };
  GLGE.getMat4 = function(m, i, j) {
    return m[i * 4 + j]
  };
  GLGE.glDataMat4 = function(m) {
    m.glArray = new Float32Array(m);
    return m.glArray
  };
  GLGE.identMatrix = function() {
    return GLGE.matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  };
  GLGE.translateMatrix = function(value) {
    var x;
    var y;
    var z;
    if(arguments.length == 3) {
      x = arguments[0];
      y = arguments[1];
      z = arguments[2]
    }else {
      if(value.data) {
        x = value.data[0];
        y = value.data[1];
        z = value.data[2]
      }else {
        if(value instanceof Array) {
          x = value[0];
          y = value[1];
          z = value[2]
        }
      }
    }
    return GLGE.matrix4(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1)
  };
  GLGE.scaleMatrix = function(value) {
    var x;
    var y;
    var z;
    if(arguments.length == 3) {
      x = arguments[0];
      y = arguments[1];
      z = arguments[2]
    }else {
      if(value.data) {
        x = value.data[0];
        y = value.data[1];
        z = value.data[2]
      }else {
        if(value instanceof Array) {
          x = value[0];
          y = value[1];
          z = value[2]
        }
      }
    }
    return GLGE.matrix4(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1)
  };
  GLGE.ROT_XYZ = 1;
  GLGE.ROT_XZY = 2;
  GLGE.ROT_YXZ = 3;
  GLGE.ROT_YZX = 4;
  GLGE.ROT_ZXY = 5;
  GLGE.ROT_ZYX = 6;
  GLGE.rotateMatrix = function(value, type) {
    var x;
    var y;
    var z;
    if(arguments.length > 2) {
      x = arguments[0];
      y = arguments[1];
      z = arguments[2];
      type = arguments[3]
    }else {
      if(value.data) {
        x = value.data[0];
        y = value.data[1];
        z = value.data[2]
      }else {
        if(value instanceof Array) {
          x = value[0];
          y = value[1];
          z = value[2]
        }
      }
    }
    if(!type) {
      type = GLGE.ROT_XYZ
    }
    var cosx = Math.cos(x);
    var sinx = Math.sin(x);
    var cosy = Math.cos(y);
    var siny = Math.sin(y);
    var cosz = Math.cos(z);
    var sinz = Math.sin(z);
    var rotx = GLGE.matrix4(1, 0, 0, 0, 0, cosx, -sinx, 0, 0, sinx, cosx, 0, 0, 0, 0, 1);
    var roty = GLGE.matrix4(cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1);
    var rotz = GLGE.matrix4(cosz, -sinz, 0, 0, sinz, cosz, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    switch(type) {
      case GLGE.ROT_XYZ:
        return GLGE.mulMat4(rotx, GLGE.mulMat4(roty, rotz));
        break;
      case GLGE.ROT_XZY:
        return GLGE.mulMat4(rotx, GLGE.mulMat4(rotz, roty));
        break;
      case GLGE.ROT_YXZ:
        return GLGE.mulMat4(roty, GLGE.mulMat4(rotx, rotz));
        break;
      case GLGE.ROT_YZX:
        return GLGE.mulMat4(roty, GLGE.mulMat4(rotz, rotx));
        break;
      case GLGE.ROT_ZXY:
        return GLGE.mulMat4(rotz, GLGE.mulMat4(rotx, roty));
        break;
      case GLGE.ROT_ZYX:
        return GLGE.mulMat4(rotz, GLGE.mulMat4(roty, rotx));
        break
    }
  };
  GLGE.angleAxis = function(angle, axis) {
    var xmx, ymy, zmz, xmy, ymz, zmx, xms, yms, zms;
    axis = [axis[0], axis[1], axis[2], 0];
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var cos = Math.cos(angle);
    var cosi = 1 - cos;
    var sin = Math.sin(angle);
    xms = x * sin;
    yms = y * sin;
    zms = z * sin;
    xmx = x * x;
    ymy = y * y;
    zmz = z * z;
    xmy = x * y;
    ymz = y * z;
    zmx = z * x;
    var matrix = GLGE.matrix4(cosi * xmx + cos, cosi * xmy - zms, cosi * zmx + yms, 0, cosi * xmy + zms, cosi * ymy + cos, cosi * ymz - xms, 0, cosi * zmx - yms, cosi * ymz + xms, cosi * zmz + cos, 0, 0, 0, 0, 1);
    return GLGE.Mat(matrix)
  };
  GLGE.quatFromAxisAngle = function(axis, angle) {
    var quaternion = [];
    var halfAngle = angle * 0.5;
    var sinus = Math.sin(halfAngle);
    var cosinus = Math.cos(halfAngle);
    quaternion[0] = axis[0] * sinus;
    quaternion[1] = axis[1] * sinus;
    quaternion[2] = axis[2] * sinus;
    quaternion[3] = cosinus;
    return quaternion
  };
  GLGE.mulQuat = function(quaternion1, quaternion2) {
    var quaternion = [];
    var x = quaternion1[0];
    var y = quaternion1[1];
    var z = quaternion1[2];
    var w = quaternion1[3];
    var x2 = quaternion2[0];
    var y2 = quaternion2[1];
    var z2 = quaternion2[2];
    var w2 = quaternion2[3];
    var a = y * z2 - z * y2;
    var b = z * x2 - x * z2;
    var c = x * y2 - y * x2;
    var d = x * x2 + y * y2 + z * z2;
    quaternion[0] = x * w2 + x2 * w + a;
    quaternion[1] = y * w2 + y2 * w + b;
    quaternion[2] = z * w2 + z2 * w + c;
    quaternion[3] = w * w2 - d;
    return quaternion
  };
  GLGE.mat4FromQuat = function(quaternion) {
    var x2 = quaternion[0] * quaternion[0];
    var y2 = quaternion[1] * quaternion[1];
    var z2 = quaternion[2] * quaternion[2];
    var xy = quaternion[0] * quaternion[1];
    var zw = quaternion[2] * quaternion[3];
    var zx = quaternion[2] * quaternion[0];
    var yw = quaternion[1] * quaternion[3];
    var yz = quaternion[1] * quaternion[2];
    var xw = quaternion[0] * quaternion[3];
    var result = [];
    result[0] = 1 - 2 * (y2 + z2);
    result[1] = 2 * (xy + zw);
    result[2] = 2 * (zx - yw);
    result[3] = 0;
    result[4] = 2 * (xy - zw);
    result[5] = 1 - 2 * (z2 + x2);
    result[6] = 2 * (yz + xw);
    result[7] = 0;
    result[8] = 2 * (zx + yw);
    result[9] = 2 * (yz - xw);
    result[10] = 1 - 2 * (y2 + x2);
    result[11] = 0;
    result[12] = 0;
    result[13] = 0;
    result[14] = 0;
    result[15] = 1;
    return result
  };
  GLGE.quatRotation = function(qx, qy, qz, qw) {
    return GLGE.matrix4(1 - 2 * qy * qy - 2 * qz * qz, 2 * qx * qy - 2 * qz * qw, 2 * qx * qz + 2 * qy * qw, 0, 2 * qx * qy + 2 * qz * qw, 1 - 2 * qx * qx - 2 * qz * qz, 2 * qy * qz - 2 * qx * qw, 0, 2 * qx * qz - 2 * qy * qw, 2 * qy * qz + 2 * qx * qw, 1 - 2 * qx * qx - 2 * qy * qy, 0, 0, 0, 0, 1)
  };
  GLGE.makeOrtho = function(left, right, bottom, top, near, far) {
    var x = -(right + left) / (right - left);
    var y = -(top + bottom) / (top - bottom);
    var z = -(far + near) / (far - near);
    return GLGE.matrix4(2 / (right - left), 0, 0, x, 0, 2 / (top - bottom), 0, y, 0, 0, -2 / (far - near), z, 0, 0, 0, 1)
  };
  GLGE.makeFrustum = function(left, right, bottom, top, near, far) {
    var x = 2 * near / (right - left);
    var y = 2 * near / (top - bottom);
    var a = (right + left) / (right - left);
    var b = (top + bottom) / (top - bottom);
    var c = -(far + near) / (far - near);
    var d = -2 * far * near / (far - near);
    return GLGE.matrix4(x, 0, a, 0, 0, y, b, 0, 0, 0, c, d, 0, 0, -1, 0)
  };
  GLGE.makePerspective = function(fovy, aspect, near, far) {
    var ymax = near * Math.tan(fovy * 0.00872664625972);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;
    return GLGE.makeFrustum(xmin, xmax, ymin, ymax, near, far)
  };
  GLGE.matrix2Scale = function(m) {
    var m1 = m[0];
    var m2 = m[1];
    var m3 = m[2];
    var m4 = m[4];
    var m5 = m[5];
    var m6 = m[6];
    var m7 = m[8];
    var m8 = m[9];
    var m9 = m[10];
    var scaleX = Math.sqrt(m1 * m1 + m2 * m2 + m3 * m3);
    var scaleY = Math.sqrt(m4 * m4 + m5 * m5 + m6 * m6);
    var scaleZ = Math.sqrt(m7 * m7 + m8 * m8 + m9 * m9);
    return[scaleX, scaleY, scaleZ]
  };
  GLGE.rotationMatrix2Quat = function(m) {
    var tr = m[0] + m[5] + m[10] + 1;
    var S, x, y, z, w;
    if(tr > 0) {
      S = 0.5 / Math.sqrt(tr);
      w = 0.25 / S;
      x = (m[9] - m[6]) * S;
      y = (m[2] - m[8]) * S;
      z = (m[4] - m[1]) * S
    }else {
      if(m[0] > m[5] && m[0] > m[10]) {
        S = Math.sqrt(1 + m[0] - m[5] - m[10]) * 2;
        w = (m[9] - m[6]) / S;
        x = 0.25 / S;
        y = (m[1] + m[4]) / S;
        z = (m[2] + m[8]) / S
      }else {
        if(m[5] > m[10]) {
          S = Math.sqrt(1 + m[5] - m[0] - m[10]) * 2;
          w = (m[2] - m[8]) / S;
          x = (m[1] + m[4]) / S;
          y = 0.25 / S;
          z = (m[6] + m[9]) / S
        }else {
          S = Math.sqrt(1 + m[10] - m[0] - m[5]) * 2;
          w = (m[4] - m[1]) / S;
          x = (m[2] + m[8]) / S;
          y = (m[6] + m[9]) / S;
          z = 0.25 / S
        }
      }
    }
    var N = Math.sqrt(x * x + y * y + z * z + w * w);
    return[x / N, y / N, z / N, w / N]
  };
  GLGE.rayToPlane = function(origin, dir) {
    var dirnorm = GLGE.toUnitVec3(dir);
    return[dirnorm[0], dirnorm[1], dirnorm[2], GLGE.dotVec3(origin, dirnorm)]
  };
  GLGE.rayIntersectPlane = function(origin, dir, plane) {
    var planeN = [plane[0], plane[1], plane[2]];
    var planeD = plane[3];
    var vdir = GLGE.dotVec3(planeN, dir);
    if(vdir <= 0) {
      return false
    }
    var vo = -(GLGE.dotVec3(planeN, origin) + planeD);
    var t = vo / vdir;
    if(t <= 0) {
      return false
    }
    return GLGE.addVec3(origin, GLGE.scaleVec3(dir, t))
  };
  GLGE.screenToDirection = function(x, y, width, height, proj) {
    xcoord = -(2 * x / width - 1) / proj[0];
    ycoord = (2 * y / height - 1) / proj[5];
    zcoord = 1;
    return GLGE.toUnitVec3([xcoord, ycoord, zcoord])
  };
  GLGE.BoundingVolume = function(minX, maxX, minY, maxY, minZ, maxZ) {
    this.limits = [minX, maxX, minY, maxY, minZ, maxZ];
    this.calcProps()
  };
  GLGE.BoundingVolume.prototype.getCornerPoints = function() {
    return this.points
  };
  GLGE.BoundingVolume.prototype.getSphereRadius = function() {
    return this.radius
  };
  GLGE.BoundingVolume.prototype.getCenter = function() {
    return this.center
  };
  GLGE.BoundingVolume.prototype.isNull = function() {
    return this.limits[0] == 0 && this.limits[1] == 0 && this.limits[2] == 0 && this.limits[3] == 0 && this.limits[4] == 0 && this.limits[5] == 0
  };
  GLGE.BoundingVolume.prototype.addBoundingVolume = function(vol) {
    if(this.isNull()) {
      this.limits[0] = vol.limits[0];
      this.limits[1] = vol.limits[1];
      this.limits[2] = vol.limits[2];
      this.limits[3] = vol.limits[3];
      this.limits[4] = vol.limits[4];
      this.limits[5] = vol.limits[5]
    }else {
      if(!vol.isNull()) {
        this.limits[0] = Math.min(vol.limits[0], this.limits[0]);
        this.limits[2] = Math.min(vol.limits[2], this.limits[2]);
        this.limits[4] = Math.min(vol.limits[4], this.limits[4]);
        this.limits[1] = Math.max(vol.limits[1], this.limits[1]);
        this.limits[3] = Math.max(vol.limits[3], this.limits[3]);
        this.limits[5] = Math.max(vol.limits[5], this.limits[5])
      }
    }
    this.calcProps()
  };
  GLGE.BoundingVolume.prototype.applyMatrix = function(matrix) {
    var coord0 = GLGE.mulMat4Vec4(matrix, [this.limits[0], this.limits[2], this.limits[4], 1]);
    var coord1 = GLGE.mulMat4Vec4(matrix, [this.limits[1], this.limits[2], this.limits[4], 1]);
    var coord2 = GLGE.mulMat4Vec4(matrix, [this.limits[0], this.limits[3], this.limits[4], 1]);
    var coord3 = GLGE.mulMat4Vec4(matrix, [this.limits[1], this.limits[3], this.limits[4], 1]);
    var coord4 = GLGE.mulMat4Vec4(matrix, [this.limits[0], this.limits[2], this.limits[5], 1]);
    var coord5 = GLGE.mulMat4Vec4(matrix, [this.limits[1], this.limits[2], this.limits[5], 1]);
    var coord6 = GLGE.mulMat4Vec4(matrix, [this.limits[0], this.limits[3], this.limits[5], 1]);
    var coord7 = GLGE.mulMat4Vec4(matrix, [this.limits[1], this.limits[3], this.limits[5], 1]);
    this.limits[0] = Math.min(coord0[0], coord1[0], coord2[0], coord3[0], coord4[0], coord5[0], coord6[0], coord7[0]);
    this.limits[1] = Math.max(coord0[0], coord1[0], coord2[0], coord3[0], coord4[0], coord5[0], coord6[0], coord7[0]);
    this.limits[2] = Math.min(coord0[1], coord1[1], coord2[1], coord3[1], coord4[1], coord5[1], coord6[1], coord7[1]);
    this.limits[3] = Math.max(coord0[1], coord1[1], coord2[1], coord3[1], coord4[1], coord5[1], coord6[1], coord7[1]);
    this.limits[4] = Math.min(coord0[2], coord1[2], coord2[2], coord3[2], coord4[2], coord5[2], coord6[2], coord7[2]);
    this.limits[5] = Math.max(coord0[2], coord1[2], coord2[2], coord3[2], coord4[2], coord5[2], coord6[2], coord7[2]);
    this.calcProps()
  };
  GLGE.BoundingVolume.prototype.calcProps = function() {
    var minX = this.limits[0];
    var maxX = this.limits[1];
    var minY = this.limits[2];
    var maxY = this.limits[3];
    var minZ = this.limits[4];
    var maxZ = this.limits[5];
    this.points = [[minX, minY, minZ], [maxX, minY, minZ], [minX, maxY, minZ], [maxX, maxY, minZ], [minX, minY, maxZ], [maxX, minY, maxZ], [minX, maxY, maxZ], [maxX, maxY, maxZ]];
    this.center = [(this.limits[1] - this.limits[0]) / 2 + this.limits[0], (this.limits[3] - this.limits[2]) / 2 + this.limits[2], (this.limits[5] - this.limits[4]) / 2 + this.limits[4]];
    var dx = this.limits[0] - this.center[0];
    var dy = this.limits[2] - this.center[1];
    var dz = this.limits[4] - this.center[2];
    this.radius = Math.sqrt(dx * dx + dy * dy + dz * dz)
  };
  GLGE.BoundingVolume.prototype.clone = function() {
    return new GLGE.BoundingVolume(this.limits[0], this.limits[1], this.limits[2], this.limits[3], this.limits[4], this.limits[5])
  };
  GLGE.BoundingVolume.prototype.toString = function() {
    return this.limits.toString()
  };
  GLGE.cameraViewProjectionToPlanes = function(cvp) {
    var cvpinv = GLGE.inverseMat4(cvp);
    var mulMat4Vec4 = GLGE.mulMat4Vec4;
    var subVec3 = GLGE.subVec3;
    var crossVec3 = GLGE.crossVec3;
    var toUnitVec3 = GLGE.toUnitVec3;
    var dotVec3 = GLGE.dotVec3;
    var nbl = mulMat4Vec4(cvpinv, [-1, -1, -1, 1]);
    var nbr = mulMat4Vec4(cvpinv, [1, -1, -1, 1]);
    var fbl = mulMat4Vec4(cvpinv, [-1, -1, 1, 1]);
    var ntr = mulMat4Vec4(cvpinv, [1, 1, -1, 1]);
    var ftr = mulMat4Vec4(cvpinv, [1, 1, 1, 1]);
    var ftl = mulMat4Vec4(cvpinv, [-1, 1, 1, 1]);
    nbl = [nbl[0] / nbl[3], nbl[1] / nbl[3], nbl[2] / nbl[3]];
    nbr = [nbr[0] / nbr[3], nbr[1] / nbr[3], nbr[2] / nbr[3]];
    fbl = [fbl[0] / fbl[3], fbl[1] / fbl[3], fbl[2] / fbl[3]];
    ntr = [ntr[0] / ntr[3], ntr[1] / ntr[3], ntr[2] / ntr[3]];
    ftr = [ftr[0] / ftr[3], ftr[1] / ftr[3], ftr[2] / ftr[3]];
    ftl = [ftl[0] / ftl[3], ftl[1] / ftl[3], ftl[2] / ftl[3]];
    var nearnorm = toUnitVec3(crossVec3(subVec3(ntr, nbr), subVec3(nbl, nbr)));
    var farnorm = toUnitVec3(crossVec3(subVec3(ftl, fbl), subVec3(ftr, fbl)));
    var leftnorm = toUnitVec3(crossVec3(subVec3(nbl, fbl), subVec3(ftl, fbl)));
    var rightnorm = toUnitVec3(crossVec3(subVec3(ftr, ntr), subVec3(ntr, nbr)));
    var topnorm = toUnitVec3(crossVec3(subVec3(ftl, ntr), subVec3(ntr, ftr)));
    var bottomnorm = toUnitVec3(crossVec3(subVec3(nbl, nbr), subVec3(fbl, nbl)));
    nearnorm.push(dotVec3(nearnorm, nbl));
    farnorm.push(dotVec3(farnorm, fbl));
    leftnorm.push(dotVec3(leftnorm, nbl));
    rightnorm.push(dotVec3(rightnorm, nbr));
    topnorm.push(dotVec3(topnorm, ftr));
    bottomnorm.push(dotVec3(bottomnorm, nbl));
    return[nearnorm, farnorm, leftnorm, rightnorm, topnorm, bottomnorm]
  };
  GLGE.sphereInFrustumPlanes = function(sphere, planes) {
    var sphere0 = sphere[0];
    var sphere1 = sphere[1];
    var sphere2 = sphere[2];
    var sphere3 = sphere[3];
    var plane0 = planes[0];
    var plane1 = planes[1];
    var plane2 = planes[2];
    var plane3 = planes[3];
    var plane4 = planes[4];
    var plane5 = planes[5];
    if(sphere0 * plane0[0] + sphere1 * plane0[1] + sphere2 * plane0[2] - plane0[3] - sphere3 > 0 || sphere0 * plane1[0] + sphere1 * plane1[1] + sphere2 * plane1[2] - plane1[3] - sphere3 > 0 || sphere0 * plane2[0] + sphere1 * plane2[1] + sphere2 * plane2[2] - plane2[3] - sphere3 > 0 || sphere0 * plane3[0] + sphere1 * plane3[1] + sphere2 * plane3[2] - plane3[3] - sphere3 > 0 || sphere0 * plane4[0] + sphere1 * plane4[1] + sphere2 * plane4[2] - plane4[3] - sphere3 > 0 || sphere0 * plane5[0] + sphere1 * 
    plane5[1] + sphere2 * plane5[2] - plane5[3] - sphere3 > 0) {
      return false
    }else {
      return true
    }
  };
  GLGE.pointsInFrustumPlanes = function(points, planes) {
    var plane0 = planes[0];
    var plane1 = planes[1];
    var plane2 = planes[2];
    var plane3 = planes[3];
    var plane4 = planes[4];
    var plane5 = planes[5];
    var x, y, z;
    for(var i = 0;i < points.length;i++) {
      x = points[i][0];
      y = points[i][1];
      z = points[i][2];
      if(x * plane0[0] + y * plane0[1] + z * plane0[2] - plane0[3] > 0 && x * plane1[0] + y * plane1[1] + z * plane1[2] - plane1[3] > 0 && x * plane2[0] + y * plane2[1] + z * plane2[2] - plane3[3] > 0 && x * plane3[0] + y * plane3[1] + z * plane3[2] - plane4[3] > 0 && x * plane4[0] + y * plane4[1] + z * plane4[2] - plane4[3] > 0 && x * plane5[0] + y * plane5[1] + z * plane5[2] - plane5[3] > 0) {
        return false
      }
    }
    return true
  };
  GLGE.getDirLightProjection = function(cvp, light, projectedDistance, distance) {
    var pointTransform = GLGE.mulMat4(light, GLGE.inverseMat4(cvp));
    var min = [0, 0, 0];
    var max = [0, 0, 0];
    for(x = 0;x < 2;x++) {
      for(y = 0;y < 2;y++) {
        for(z = 0;z < 2;z++) {
          var vec = GLGE.mulMat4Vec4(pointTransform, [x * 2 - 1, y * 2 - 1, z * projectedDistance, 1]);
          vec[0] = vec[0] / vec[3];
          vec[1] = vec[1] / vec[3];
          vec[2] = vec[2] / vec[3];
          min[0] = min[0] > vec[0] ? vec[0] : min[0];
          min[1] = min[1] > vec[1] ? vec[1] : min[1];
          max[0] = max[0] < vec[0] ? vec[0] : max[0];
          max[1] = max[1] < vec[1] ? vec[1] : max[1];
          max[2] = max[2] < vec[2] ? vec[2] : max[2]
        }
      }
    }
    var mat = GLGE.makeOrtho(min[0], max[0], min[1], max[1], 0.01, +distance);
    return mat
  };
  function GLGE_mathUnitTest() {
    var a = GLGE.Vec([1, 2, 3, 4]);
    var b = GLGE.Vec4(GLGE.getVec4(a, 3), GLGE.get1basedVec4(a, 3), GLGE.getVec4(a, 1), GLGE.getVec4(a, 0));
    var c = GLGE.identMatrix();
    var d = GLGE.mulMat4Vec4(c, b);
    if(GLGE.getVec4(d, 0) != 4 || GLGE.getVec4(d, 1) != 3 || GLGE.getVec4(d, 2) != 2 || GLGE.getVec4(d, 3) != 1) {
      throw"Unit Test 1 failed MatVecMul " + d;
    }
    var m = GLGE.Mat4([3, 4, 5, 0, 0.5, 0.75, 0, 0, 0.75, 0.5, 0, 0, 0.25, 0.25, 1, 1]);
    var m1 = GLGE.Mat4([2, 1, 8, 2, 1, 4, 3, 2, 1, 0.5, 6.5, 2, 8, 3, 1, 0.25]);
    var mm1 = GLGE.mulMat4(m, m1);
    var am1 = GLGE.Mat4([15, 21.5, 68.5, 24, 1.75, 3.5, 6.25, 2.5, 2, 2.75, 7.5, 2.5, 9.75, 4.75, 10.25, 3.25]);
    for(var i = 0;i < 4;++i) {
      for(var j = 0;j < 4;++j) {
        var diff = GLGE.getMat4(mm1, i, j) - GLGE.getMat4(am1, i, j);
        if(diff < 1.0E-6 && diff > -1.0E-6) {
        }else {
          throw"Unit Test 1 failed Multiplication " + GLGE.getMat4(mm1, i, j) + " != " + GLGE.getMat4(am1, i, j);
        }
      }
    }
    var inv = GLGE.inverseMat4(m);
    var k = GLGE.mulMat4(m, inv);
    var l = GLGE.mulMat4(inv, m);
    for(var i = 0;i < 4;++i) {
      for(var j = 0;j < 4;++j) {
        var diff = GLGE.getMat4(k, i, j) - GLGE.getMat4(c, i, j);
        if(diff < 1.0E-4 && diff > -1.0E-4) {
        }else {
          throw"Unit Test 1 failed Inverse " + GLGE.getMat4(k, i, j) + " != " + GLGE.getMat4(c, i, j);
        }
      }
    }
  }
  GLGE_mathUnitTest()
})(GLGE);
(function(GLGE) {
  GLGE.Document = function() {
    this.listeners = [];
    this.documents = []
  };
  GLGE.Document.prototype.listeners = null;
  GLGE.Document.prototype.documents = null;
  GLGE.Document.prototype.rootURL = null;
  GLGE.Document.prototype.loadCount = 0;
  GLGE.Document.prototype.version = 0;
  GLGE.Document.prototype.getElementById = function(id) {
    var tags = this.getElementsByTagName("*");
    for(var i = 0;i < tags.length;i++) {
      if(tags[i].getAttribute("id") == id) {
        return tags[i];
        break
      }
    }
    return null
  };
  GLGE.Document.prototype.getAbsolutePath = function(path, relativeto) {
    if(path.substr(0, 7) == "http://" || path.substr(0, 7) == "file://" || path.substr(0, 8) == "https://") {
      return path
    }else {
      if(!relativeto) {
        relativeto = window.location.href
      }
      var bits = relativeto.split("/");
      var domain = bits[2];
      var proto = bits[0];
      var initpath = [];
      for(var i = 3;i < bits.length - 1;i++) {
        initpath.push(bits[i])
      }
      if(path.substr(0, 1) == "/") {
        initpath = []
      }
      var locpath = path.split("/");
      for(i = 0;i < locpath.length;i++) {
        if(locpath[i] == "..") {
          initpath.pop()
        }else {
          if(locpath[i] != "") {
            initpath.push(locpath[i])
          }
        }
      }
      return proto + "//" + domain + "/" + initpath.join("/")
    }
  };
  GLGE.Document.prototype.load = function(url) {
    this.documents = [];
    this.rootURL = url;
    this.loadDocument(url, null)
  };
  GLGE.Document.prototype.loadDocument = function(url, relativeto) {
    this.loadCount++;
    url = this.getAbsolutePath(url, relativeto);
    var req = new GLGE.XMLHttpRequest;
    if(req) {
      req.docurl = url;
      req.docObj = this;
      req.overrideMimeType("text/xml");
      req.onreadystatechange = function() {
        if(this.readyState == 4) {
          if(this.status == 200 || this.status == 0) {
            this.responseXML.getElementById = this.docObj.getElementById;
            this.docObj.loaded(this.docurl, this.responseXML)
          }else {
            GLGE.error("Error loading Document: " + this.docurl + " status " + this.status)
          }
        }
      };
      req.open("GET", url, true);
      req.send("")
    }
  };
  GLGE.Document.prototype.loaded = function(url, responceXML) {
    this.loadCount--;
    this.documents[url] = {xml:responceXML};
    var root = responceXML.getElementsByTagName("glge");
    if(root[0] && root[0].hasAttribute("version")) {
      this.version = parseFloat(root[0].getAttribute("version"))
    }
    var imports = responceXML.getElementsByTagName("import");
    for(var i = 0;i < imports.length;i++) {
      if(!this.documents[this.getAbsolutePath(imports[i].getAttribute("url"), url)]) {
        this.documents[this.getAbsolutePath(imports[i].getAttribute("url"), url)] = {};
        this.loadDocument(imports[i].getAttribute("url"), url)
      }
    }
    if(this.loadCount == 0) {
      this.finishedLoading()
    }
  };
  GLGE.Document.prototype.finishedLoading = function() {
    for(var i = 0;i < this.listeners.length;i++) {
      this.listeners[i](this.listeners.rootURL)
    }
    this["onLoad"]()
  };
  GLGE.Document.prototype["onLoad"] = function() {
  };
  GLGE.Document.prototype.classString = function(name) {
    if(!name) {
      return false
    }
    var names = name.split("_");
    var converted = "";
    for(var i = 0;i < names.length;i++) {
      converted = converted + names[i][0].toUpperCase() + names[i].substr(1)
    }
    return converted
  };
  GLGE.Document.prototype.setProperties = function(Obj) {
    var set_method;
    var attribute_name;
    var value;
    for(var i = 0;i < Obj.attributes.length;i++) {
      value = false;
      set_method = "set" + this.classString(Obj.attributes[i].nodeName);
      if(Obj.attributes[i].value[0] == "#") {
        value = this.getElement(Obj.attributes[i].value.substr(1), true)
      }
      if(!value) {
        if(typeof GLGE[Obj.attributes[i].value] != "undefined") {
          value = GLGE[Obj.attributes[i].value]
        }else {
          value = Obj.attributes[i].value
        }
      }
      if(Obj.object[set_method]) {
        Obj.object[set_method](value)
      }
      if(Obj.attributes[i].nodeName == "uid") {
        GLGE.Assets.unregisterAsset(Obj.object.uid);
        Obj.object.uid = Obj.attributes[i].value;
        GLGE.Assets.registerAsset(Obj.object, Obj.attributes[i].value)
      }
    }
  };
  GLGE.Document.prototype.addChildren = function(Obj) {
    var add_method;
    var child = Obj.firstChild;
    while(child) {
      add_method = "add" + this.classString(child.tagName);
      if(Obj.object[add_method]) {
        Obj.object[add_method](this.getElement(child))
      }
      child = child.nextSibling
    }
  };
  GLGE.Document.prototype.getElement = function(ele, noerrors) {
    var docele, doc;
    if(typeof ele == "string") {
      for(doc in this.documents) {
        if(this.documents[doc].xml) {
          docele = this.documents[doc].xml.getElementById(ele);
          if(docele) {
            ele = docele;
            break
          }
        }
      }
    }
    if(typeof ele == "string") {
      if(!noerrors) {
        GLGE.error("Element " + ele + " not found in document")
      }
      return false
    }else {
      if(this["get" + this.classString(ele.tagName)]) {
        return this["get" + this.classString(ele.tagName)](ele)
      }else {
        return this.getDefault(ele)
      }
    }
  };
  GLGE.Document.prototype.getData = function(ele) {
    if(!ele.object) {
      ele.object = this.parseArray(ele);
      if(ele.hasAttribute("type")) {
        var type = ele.getAttribute("type");
        switch(type) {
          case "matrix":
            for(var i = 0;i < ele.object.length;i++) {
              ele.object[i] = GLGE.Mat4(ele.object[i].split(" "))
            }
            break;
          case "links":
            for(var i = 0;i < ele.object.length;i++) {
              ele.object[i] = this.getElement(ele.object[i].substr(1))
            }
            break
        }
      }
    }
    return ele.object
  };
  GLGE.Document.prototype.getDefault = function(ele) {
    if(!ele.object) {
      if(GLGE[this.classString(ele.tagName)]) {
        ele.object = new (GLGE[this.classString(ele.tagName)]);
        this.setProperties(ele);
        this.addChildren(ele)
      }else {
        GLGE.error("XML Parse Error: GLGE Object not found")
      }
    }
    return ele.object
  };
  GLGE.Document.prototype.getTexture = function(ele) {
    if(!ele.object) {
      var rel = this.getAbsolutePath(this.rootURL, null);
      ele.object = new (GLGE[this.classString(ele.tagName)]);
      ele.object.setSrc(this.getAbsolutePath(ele.getAttribute("src"), rel));
      ele.removeAttribute("src");
      this.setProperties(ele)
    }
    return ele.object
  };
  GLGE.Document.prototype.getTextureVideo = GLGE.Document.prototype.getTexture;
  GLGE.Document.prototype.parseArray = function(node) {
    var child = node.firstChild;
    var prev = "";
    var output = [];
    var currentArray;
    var i;
    while(child) {
      currentArray = (prev + child.nodeValue).split(",");
      child = child.nextSibling;
      if(currentArray[0] == "") {
        currentArray.unshift()
      }
      if(child) {
        prev = currentArray.pop()
      }
      for(i = 0;i < currentArray.length;i++) {
        output.push(currentArray[i])
      }
    }
    return output
  };
  GLGE.Document.prototype.getMesh = function(ele) {
    if(this.version > 0) {
      return this.getDefault(ele)
    }
    if(!ele.object) {
      ele.object = new GLGE.Mesh;
      this.setProperties(ele);
      var child = ele.firstChild;
      while(child) {
        switch(child.tagName) {
          case "positions":
            ele.object.setPositions(this.parseArray(child));
            break;
          case "normals":
            ele.object.setNormals(this.parseArray(child));
            break;
          case "uv1":
            ele.object.setUV(this.parseArray(child));
            break;
          case "uv2":
            ele.object.setUV2(this.parseArray(child));
            break;
          case "faces":
            ele.object.setFaces(this.parseArray(child));
            break;
          case "joint_names":
            var names = this.parseArray(child);
            var jointObjects = [];
            for(var i = 0;i < names.length;i++) {
              if(names[i].substr(0, 1) == "#") {
                jointObjects.push(this.getElement(names[i].substr(1)))
              }else {
                jointObjects.push(names[i])
              }
            }
            ele.object.setJoints(jointObjects);
            break;
          case "bind_matrix":
            var mats = this.parseArray(child);
            var invBind = [];
            for(var i = 0;i < mats.length;i++) {
              invBind.push(GLGE.Mat4(mats[i].split(" ")))
            }
            ele.object.setInvBindMatrix(invBind);
            break;
          case "joints":
            ele.object.setVertexJoints(this.parseArray(child), child.getAttribute("count"));
            break;
          case "weights":
            ele.object.setVertexWeights(this.parseArray(child), child.getAttribute("count"));
            break
        }
        child = child.nextSibling
      }
    }
    return ele.object
  };
  GLGE.Document.prototype.addLoadListener = function(listener) {
    this.listeners.push(listener)
  };
  GLGE.Document.prototype.removeLoadListener = function(listener) {
    for(var i = 0;i < this.listeners.length;i++) {
      if(this.listeners[i] === listener) {
        this.listeners.splice(i, 1)
      }
    }
  };
  GLGE.Document.prototype.parseScript = function(id) {
    this.rootURL = window.location.toString();
    var xmlScript = document.getElementById(id);
    if(!xmlScript) {
      return null
    }
    var str = "";
    var k = xmlScript.firstChild;
    while(k) {
      if(k.nodeType == 3) {
        str += k.textContent
      }
      k = k.nextSibling
    }
    var parser = new DOMParser;
    var xmlDoc = parser.parseFromString(str, "text/xml");
    xmlDoc.getElementById = this.getElementById;
    this.documents["#" + id] = {xml:xmlDoc};
    var imports = xmlDoc.getElementsByTagName("import");
    for(var i = 0;i < imports.length;i++) {
      if(!this.documents[this.getAbsolutePath(imports[i].getAttribute("url"), url)]) {
        this.documents[this.getAbsolutePath(imports[i].getAttribute("url"), url)] = {};
        this.loadDocument(imports[i].getAttribute("url"))
      }
    }
    if(this.loadCount == 0) {
      this.finishedLoading()
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.Events = function() {
  };
  GLGE.Events.prototype.fireEvent = function(event, data) {
    if(this.events && this.events[event]) {
      var events = this.events[event];
      for(var i = 0;i < events.length;i++) {
        events[i].call(this, data)
      }
    }
  };
  GLGE.Events.prototype.addEventListener = function(event, fn) {
    if(!this.events) {
      this.events = {}
    }
    if(!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(fn)
  };
  GLGE.Events.prototype.removeEventListener = function(event, fn) {
    if(!this.events[event]) {
      return
    }
    var idx = this.events[event].indexOf(fn);
    if(idx != -1) {
      this.events[event].splice(idx, 1)
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.Animatable = function() {
  };
  GLGE.augment(GLGE.Events, GLGE.Animatable);
  GLGE.Animatable.prototype.animationStart = null;
  GLGE.Animatable.prototype.animation = null;
  GLGE.Animatable.prototype.blendStart = 0;
  GLGE.Animatable.prototype.blendTime = 0;
  GLGE.Animatable.prototype.lastFrame = null;
  GLGE.Animatable.prototype.frameRate = 30;
  GLGE.Animatable.prototype.loop = GLGE.TRUE;
  GLGE.Animatable.prototype.paused = GLGE.FALSE;
  GLGE.Animatable.prototype.pausedTime = null;
  GLGE.Animatable.prototype.blendFunction = GLGE.LINEAR_BLEND;
  GLGE.Animatable.prototype.blendTo = function(properties, duration, blendFunction) {
    if(!blendFunction) {
      blendFunction = GLGE.LINEAR_BLEND
    }
    var animation = new GLGE.AnimationVector;
    var curve;
    var point;
    for(prop in properties) {
      curve = new GLGE.AnimationCurve;
      curve.setChannel(prop);
      point = new GLGE.LinearPoint;
      point.setX(1);
      point.setY(properties[prop]);
      curve.addPoint(point);
      animation.addAnimationCurve(curve)
    }
    this.setBlendFunction(blendFunction);
    this.setAnimation(animation, duration);
    return this
  };
  GLGE.Animatable.prototype.setBlendFunction = function(value) {
    this.blendFunction = value;
    return this
  };
  GLGE.Animatable.prototype.getBlendFunction = function() {
    return this.blendFunction
  };
  GLGE.Animatable.prototype.setName = function(value) {
    this.name = value;
    return this
  };
  GLGE.Animatable.prototype.getName = function() {
    return this.name
  };
  GLGE.Animatable.prototype.getFrameNumber = function(now) {
    if(!this.startFrame) {
      this.startFrame = this.animation.startFrame
    }
    if(!this.animFrames) {
      this.animFrames = this.animation.frames
    }
    var frame;
    if(!now) {
      now = parseInt((new Date).getTime())
    }
    if(this.animFrames > 1) {
      if(this.loop) {
        frame = (parseFloat(now) - parseFloat(this.animationStart)) / 1E3 * this.frameRate % (this.animFrames - 1) + 1 + this.startFrame
      }else {
        frame = (parseFloat(now) - parseFloat(this.animationStart)) / 1E3 * this.frameRate + 1 + this.startFrame;
        if(frame >= this.animFrames + this.startFrame) {
          frame = this.animFrames
        }
      }
    }else {
      frame = 1
    }
    return Math.round(frame)
  };
  GLGE.Animatable.prototype.setStartFrame = function(startFrame, blendTime, loop) {
    this.loop = loop;
    var starttime = parseInt((new Date).getTime());
    if(!blendTime) {
      blendTime = 0
    }
    if(blendTime > 0) {
      if(this.animation) {
        this.blendInitValues = this.getInitialValues(this.animation, starttime);
        this.blendTime = blendTime
      }
    }
    this.animationStart = starttime;
    this.lastFrame = null;
    this.animFinished = false;
    this.startFrame = startFrame;
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        if(this.children[i].setStartFrame) {
          this.children[i].setStartFrame(startFrame, blendTime, loop)
        }
      }
    }
    return this
  };
  GLGE.Animatable.prototype.setFrames = function(frames) {
    this.animFrames = frames;
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        if(this.children[i].setFrames) {
          this.children[i].setFrames(frames)
        }
      }
    }
    return this;
    l
  };
  GLGE.Animatable.prototype.getInitialValues = function(animation, time) {
    var initValues = {};
    if(this.animation) {
      this.lastFrame = null;
      this.animate(time, true)
    }
    for(var property in animation.curves) {
      if(this["get" + property]) {
        initValues[property] = this["get" + property]()
      }
    }
    return initValues
  };
  GLGE.Animatable.prototype.animate = function(now, nocache) {
    if(!this.paused && this.animation) {
      if(!now) {
        now = parseInt((new Date).getTime())
      }
      var frame = this.getFrameNumber(now);
      if(!this.animation.animationCache) {
        this.animation.animationCache = {}
      }
      if(frame != this.lastFrame || this.blendTime != 0) {
        this.lastFrame = frame;
        if(this.blendTime == 0) {
          if(!this.animation.animationCache[frame] || nocache) {
            this.animation.animationCache[frame] = [];
            if(this.animation.curves["LocX"] && this.animation.curves["LocY"] && this.animation.curves["LocZ"] && this.animation.curves["ScaleX"] && this.animation.curves["ScaleY"] && this.animation.curves["ScaleZ"] && this.animation.curves["QuatX"] && this.animation.curves["QuatY"] && this.animation.curves["QuatZ"] && this.animation.curves["QuatW"]) {
              for(property in this.animation.curves) {
                if(this["set" + property]) {
                  var value = this.animation.curves[property].getValue(parseFloat(frame));
                  switch(property) {
                    case "QuatX":
                    ;
                    case "QuatY":
                    ;
                    case "QuatZ":
                    ;
                    case "QuatW":
                    ;
                    case "LocX":
                    ;
                    case "LocY":
                    ;
                    case "LocZ":
                    ;
                    case "ScaleX":
                    ;
                    case "ScaleY":
                    ;
                    case "ScaleZ":
                      break;
                    default:
                      this.animation.animationCache[frame].push({property:property, value:value});
                      break
                  }
                  this["set" + property](value)
                }
              }
              this.animation.animationCache[frame].push({property:"StaticMatrix", value:this.getLocalMatrix()})
            }else {
              for(property in this.animation.curves) {
                if(this["set" + property]) {
                  var value = this.animation.curves[property].getValue(parseFloat(frame));
                  switch(property) {
                    case "QuatX":
                    ;
                    case "QuatY":
                    ;
                    case "QuatZ":
                    ;
                    case "QuatW":
                    ;
                    case "RotX":
                    ;
                    case "RotY":
                    ;
                    case "RotZ":
                      var rot = true;
                      break;
                    default:
                      this.animation.animationCache[frame].push({property:property, value:value});
                      break
                  }
                  this["set" + property](value)
                }
              }
              if(rot) {
                value = this.getRotMatrix();
                this.animation.animationCache[frame].push({property:"RotMatrix", value:value})
              }
            }
          }else {
            var cache = this.animation.animationCache[frame];
            for(var i = 0;i < cache.length;i++) {
              if(this["set" + cache[i].property]) {
                this["set" + cache[i].property](cache[i].value)
              }
            }
          }
        }else {
          var time = now - this.animationStart;
          if(time < this.blendTime) {
            var blendfactor = time / this.blendTime;
            blendfactor = this.blendFunction(blendfactor);
            for(property in this.animation.curves) {
              if(this["set" + property]) {
                var value = this.animation.curves[property].getValue(parseFloat(frame));
                value = value * blendfactor + this.blendInitValues[property] * (1 - blendfactor);
                this["set" + property](value)
              }
            }
          }else {
            this.blendTime = 0
          }
        }
      }
    }
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        if(this.children[i].animate) {
          this.children[i].animate(now, nocache)
        }
      }
    }
    if(this.animation && !this.animFinished && this.blendTime == 0 && this.animation.frames == frame && !nocache) {
      this.animFinished = true;
      this.fireEvent("animFinished", {})
    }
  };
  GLGE.Animatable.prototype.setAnimation = function(animationVector, blendDuration, starttime) {
    if(starttime == null) {
      starttime = parseInt((new Date).getTime())
    }
    if(!blendDuration) {
      blendDuration = 0
    }
    if(blendDuration > 0) {
      this.blendInitValues = this.getInitialValues(animationVector, starttime);
      this.blendTime = blendDuration
    }
    this.animFrames = null;
    this.startFrame = null;
    this.animationStart = starttime;
    this.lastFrame = null;
    this.animation = animationVector;
    this.animFinished = false;
    return this
  };
  GLGE.Animatable.prototype.getAnimation = function() {
    return this.animation
  };
  GLGE.Animatable.prototype.setFrameRate = function(value) {
    this.frameRate = value;
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        if(this.children[i].setFrameRate) {
          this.children[i].setFrameRate(value)
        }
      }
    }
    return this
  };
  GLGE.Animatable.prototype.getFrameRate = function() {
    return this.frameRate
  };
  GLGE.Animatable.prototype.setLoop = function(value) {
    this.loop = value;
    return this
  };
  GLGE.Animatable.prototype.getLoop = function() {
    return this.loop
  };
  GLGE.Animatable.prototype.isLooping = GLGE.Animatable.prototype.getLoop;
  GLGE.Animatable.prototype.setPaused = function(value) {
    if(value) {
      this.pauseTime = parseInt((new Date).getTime())
    }else {
      this.animationStart = this.animationStart + (parseInt((new Date).getTime()) - this.pauseTime)
    }
    this.paused = value;
    return this
  };
  GLGE.Animatable.prototype.getPaused = function() {
    return this.paused
  };
  GLGE.Animatable.prototype.togglePaused = function() {
    this.setPaused(!this.getPaused());
    return this.paused
  }
})(GLGE);
(function(GLGE) {
  GLGE.ZUP = [0, 0, 1];
  GLGE.YUP = [0, 1, 0];
  GLGE.XUP = [1, 0, 0];
  GLGE.Placeable = function() {
  };
  GLGE.Placeable.prototype.locX = 0;
  GLGE.Placeable.prototype.locY = 0;
  GLGE.Placeable.prototype.locZ = 0;
  GLGE.Placeable.prototype.dLocX = 0;
  GLGE.Placeable.prototype.dLocY = 0;
  GLGE.Placeable.prototype.dLocZ = 0;
  GLGE.Placeable.prototype.quatX = 0;
  GLGE.Placeable.prototype.quatY = 0;
  GLGE.Placeable.prototype.quatZ = 0;
  GLGE.Placeable.prototype.quatW = 0;
  GLGE.Placeable.prototype.rotX = 0;
  GLGE.Placeable.prototype.rotY = 0;
  GLGE.Placeable.prototype.rotZ = 0;
  GLGE.Placeable.prototype.dRotX = 0;
  GLGE.Placeable.prototype.dRotY = 0;
  GLGE.Placeable.prototype.dRotZ = 0;
  GLGE.Placeable.prototype.scaleX = 1;
  GLGE.Placeable.prototype.scaleY = 1;
  GLGE.Placeable.prototype.scaleZ = 1;
  GLGE.Placeable.prototype.dScaleX = 0;
  GLGE.Placeable.prototype.dScaleY = 0;
  GLGE.Placeable.prototype.dScaleZ = 0;
  GLGE.Placeable.prototype.matrix = null;
  GLGE.Placeable.prototype.rotOrder = GLGE.ROT_XYZ;
  GLGE.Placeable.prototype.lookAt = null;
  GLGE.Placeable.prototype.mode = GLGE.P_EULER;
  GLGE.Placeable.prototype.upAxis = GLGE.ZUP;
  GLGE.Placeable.prototype.getRoot = function() {
    if(this.type == GLGE.G_ROOT) {
      return this
    }else {
      if(this.parent) {
        var value = this.parent.getRoot();
        if(!value) {
          return this
        }else {
          return value
        }
      }else {
        return this
      }
    }
  };
  GLGE.Placeable.prototype.getRef = function() {
    if(this.id) {
      return this.id
    }else {
      if(this.parent) {
        return this.parent.getRef()
      }else {
        return null
      }
    }
  };
  GLGE.Placeable.prototype.setId = function(id) {
    this.id = id;
    return this
  };
  GLGE.Placeable.prototype.getId = function() {
    return this.id
  };
  GLGE.Placeable.prototype.getLookat = function() {
    return this.lookAt
  };
  GLGE.Placeable.prototype.setLookat = function(value) {
    this.lookAt = value;
    return this
  };
  GLGE.Placeable.prototype.getUpAxis = function() {
    return this.upAxis
  };
  GLGE.Placeable.prototype.setUpAxis = function(value) {
    this.upAxis = value;
    return this
  };
  GLGE.Placeable.prototype.Lookat = function(value) {
    var objpos;
    var pos = this.getPosition();
    if(value.getPosition) {
      objpos = value.getPosition()
    }else {
      objpos = {x:value[0], y:value[1], z:value[2]}
    }
    var coord = [pos.x - objpos.x, pos.y - objpos.y, pos.z - objpos.z];
    var zvec = GLGE.toUnitVec3(coord);
    var xvec = GLGE.toUnitVec3(GLGE.crossVec3(this.upAxis, zvec));
    if(xvec[0] == 0 && xvec[1] == 0 && xvec[2] == 0) {
      xvec[1] = 1
    }
    var yvec = GLGE.toUnitVec3(GLGE.crossVec3(zvec, xvec));
    this.setRotMatrix(GLGE.Mat4([xvec[0], yvec[0], zvec[0], 0, xvec[1], yvec[1], zvec[1], 0, xvec[2], yvec[2], zvec[2], 0, 0, 0, 0, 1]))
  };
  GLGE.Placeable.prototype.getRotOrder = function() {
    return this.rotOrder
  };
  GLGE.Placeable.prototype.setRotOrder = function(value) {
    this.rotOrder = value;
    this.matrix = null;
    this.rotmatrix = null;
    return this
  };
  GLGE.Placeable.prototype.getRotMatrix = function() {
    if(!this.rotmatrix) {
      var rotation = this.getRotation();
      if(this.mode == GLGE.P_EULER) {
        this.rotmatrix = GLGE.rotateMatrix(rotation.x, rotation.y, rotation.z, this.rotOrder)
      }
      if(this.mode == GLGE.P_QUAT) {
        this.rotmatrix = GLGE.quatRotation(rotation.x, rotation.y, rotation.z, rotation.w)
      }
    }
    return this.rotmatrix
  };
  GLGE.Placeable.prototype.setRotMatrix = function(matrix) {
    this.mode = GLGE.P_MATRIX;
    this.rotmatrix = matrix;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setLocX = function(value) {
    this.locX = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setLocY = function(value) {
    this.locY = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setLocZ = function(value) {
    this.locZ = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setLoc = function(x, y, z) {
    this.locX = x;
    this.locY = y;
    this.locZ = z;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDLocX = function(value) {
    this.dLocX = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDLocY = function(value) {
    this.dLocY = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDLocZ = function(value) {
    this.dLocZ = value;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDLoc = function(x, y, z) {
    this.dLocX = x;
    this.dLocY = y;
    this.dLocZ = z;
    this.translateMatrix = null;
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setQuatX = function(value) {
    this.mode = GLGE.P_QUAT;
    this.quatX = parseFloat(value);
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setQuatY = function(value) {
    this.mode = GLGE.P_QUAT;
    this.quatY = parseFloat(value);
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setQuatZ = function(value) {
    this.mode = GLGE.P_QUAT;
    this.quatZ = parseFloat(value);
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setQuatW = function(value) {
    this.mode = GLGE.P_QUAT;
    this.quatW = parseFloat(value);
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setQuat = function(x, y, z, w) {
    this.mode = GLGE.P_QUAT;
    this.quatX = x;
    this.quatY = y;
    this.quatZ = z;
    this.quatW = w;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setRotX = function(value) {
    this.mode = GLGE.P_EULER;
    this.rotX = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setRotY = function(value) {
    this.mode = GLGE.P_EULER;
    this.rotY = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setRotZ = function(value) {
    this.mode = GLGE.P_EULER;
    this.rotZ = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setRot = function(x, y, z) {
    this.mode = GLGE.P_EULER;
    this.rotX = x;
    this.rotY = y;
    this.rotZ = z;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDRotX = function(value) {
    this.mode = GLGE.P_EULER;
    this.dRotX = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDRotY = function(value) {
    this.mode = GLGE.P_EULER;
    this.dRotY = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDRotZ = function(value) {
    this.mode = GLGE.P_EULER;
    this.dRotZ = value;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDRot = function(x, y, z) {
    this.mode = GLGE.P_EULER;
    this.dRotX = x;
    this.dRotY = y;
    this.dRotZ = z;
    this.staticMatrix = null;
    this.rotmatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setScaleX = function(value) {
    if(this.ScaleX == value) {
      return this
    }
    this.scaleX = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setScaleY = function(value) {
    if(this.ScaleY == value) {
      return this
    }
    this.scaleY = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setScaleZ = function(value) {
    if(this.ScaleZ == value) {
      return this
    }
    this.scaleZ = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setScale = function(x, y, z) {
    if(!y) {
      y = x;
      z = x
    }
    this.scaleX = x;
    this.scaleY = y;
    this.scaleZ = z;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDScaleX = function(value) {
    if(this.dScaleX == value) {
      return this
    }
    this.dScaleX = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDScaleY = function(value) {
    if(this.dScaleY == value) {
      return this
    }
    this.dScaleY = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDScaleZ = function(value) {
    if(this.dScaleZ == value) {
      return this
    }
    this.dScaleZ = value;
    this.staticMatrix = null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.setDScale = function(x, y, z) {
    this.dScaleX = x;
    this.dScaleY = y;
    this.dScaleZ = z;
    this.staticMatrix == null;
    this.scaleMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.getLocX = function() {
    return this.locX
  };
  GLGE.Placeable.prototype.getLocY = function() {
    return this.locY
  };
  GLGE.Placeable.prototype.getLocZ = function() {
    return this.locZ
  };
  GLGE.Placeable.prototype.getDLocX = function() {
    return this.dLocX
  };
  GLGE.Placeable.prototype.getDLocY = function() {
    return this.dLocY
  };
  GLGE.Placeable.prototype.getDLocZ = function() {
    return this.dLocZ
  };
  GLGE.Placeable.prototype.getQuatX = function() {
    return this.quatX
  };
  GLGE.Placeable.prototype.getQuatY = function() {
    return this.quatY
  };
  GLGE.Placeable.prototype.getQuatZ = function() {
    return this.quatZ
  };
  GLGE.Placeable.prototype.getQuatW = function() {
    return this.quatW
  };
  GLGE.Placeable.prototype.getRotX = function() {
    return this.rotX
  };
  GLGE.Placeable.prototype.getRotY = function() {
    return this.rotY
  };
  GLGE.Placeable.prototype.getRotZ = function() {
    return this.rotZ
  };
  GLGE.Placeable.prototype.getDRotX = function() {
    return this.dRotX
  };
  GLGE.Placeable.prototype.getDRotY = function() {
    return this.dRotY
  };
  GLGE.Placeable.prototype.getDRotZ = function() {
    return this.dRotZ
  };
  GLGE.Placeable.prototype.getScaleX = function() {
    return this.scaleX
  };
  GLGE.Placeable.prototype.getScaleY = function() {
    return this.scaleY
  };
  GLGE.Placeable.prototype.getScaleZ = function() {
    return this.scaleZ
  };
  GLGE.Placeable.prototype.getDScaleX = function() {
    return this.dScaleX
  };
  GLGE.Placeable.prototype.getDScaleY = function() {
    return this.dScaleY
  };
  GLGE.Placeable.prototype.getDScaleZ = function() {
    return this.dScaleZ
  };
  GLGE.Placeable.prototype.getPosition = function() {
    var position = {};
    position.x = parseFloat(this.locX) + parseFloat(this.dLocX);
    position.y = parseFloat(this.locY) + parseFloat(this.dLocY);
    position.z = parseFloat(this.locZ) + parseFloat(this.dLocZ);
    return position
  };
  GLGE.Placeable.prototype.getRotation = function() {
    var rotation = {};
    if(this.mode == GLGE.P_EULER) {
      rotation.x = parseFloat(this.rotX) + parseFloat(this.dRotX);
      rotation.y = parseFloat(this.rotY) + parseFloat(this.dRotY);
      rotation.z = parseFloat(this.rotZ) + parseFloat(this.dRotZ)
    }
    if(this.mode == GLGE.P_QUAT) {
      rotation.x = parseFloat(this.quatX);
      rotation.y = parseFloat(this.quatY);
      rotation.z = parseFloat(this.quatZ);
      rotation.w = parseFloat(this.quatW)
    }
    return rotation
  };
  GLGE.Placeable.prototype.getScale = function() {
    var scale = {};
    scale.x = parseFloat(this.scaleX) + parseFloat(this.dScaleX);
    scale.y = parseFloat(this.scaleY) + parseFloat(this.dScaleY);
    scale.z = parseFloat(this.scaleZ) + parseFloat(this.dScaleZ);
    return scale
  };
  GLGE.Placeable.prototype.getScaleMatrix = function() {
    if(!this.scaleMatrix) {
      this.scaleMatrix = GLGE.scaleMatrix(parseFloat(this.scaleX) + parseFloat(this.dScaleX), parseFloat(this.scaleY) + parseFloat(this.dScaleY), parseFloat(this.scaleZ) + parseFloat(this.dScaleZ))
    }
    return this.scaleMatrix
  };
  GLGE.Placeable.prototype.getTranslateMatrix = function() {
    if(!this.tmatrix) {
      this.tmatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    if(!this.translateMatrix) {
      this.tmatrix[3] = +this.locX + this.dLocX;
      this.tmatrix[7] = +this.locY + this.dLocY;
      this.tmatrix[11] = +this.locZ + this.dLocZ;
      this.translateMatrix = this.tmatrix
    }
    return this.translateMatrix
  };
  GLGE.Placeable.prototype.getLocalMatrix = function() {
    this.getModelMatrix();
    return this.localMatrix
  };
  GLGE.Placeable.prototype.setStaticMatrix = function(matrix) {
    this.staticMatrix = matrix;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.clearStaticMatrix = function() {
    this.staticMatrix = null;
    this.updateMatrix();
    return this
  };
  GLGE.Placeable.prototype.updateMatrix = function() {
    this.matrix = null;
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        this.children[i].updateMatrix()
      }
    }
    var o = obj = this;
    obj.fireEvent("matrixUpdate", {obj:o});
    if(obj = obj.parent) {
      obj.fireEvent("childMatrixUpdate", {obj:o})
    }
  };
  GLGE.Placeable.prototype.getModelMatrix = function() {
    if(!this.matrix) {
      GLGE.reuseMatrix4(this.invmatrix);
      GLGE.reuseMatrix4(this.transmatrix);
      GLGE.reuseMatrix4(this.transinvmatrix);
      this.invmatrix = null;
      this.transmatrix = null;
      this.transinvmatrix = null;
      if(this.staticMatrix) {
        var matrix = this.staticMatrix;
        this.localMatrix = this.staticMatrix;
        if(this.parent) {
          matrix = GLGE.mulMat4(this.parent.getModelMatrix(), matrix)
        }
        this.matrix = matrix
      }else {
        var translate = this.getTranslateMatrix();
        var scale = this.getScaleMatrix();
        var M1 = GLGE.mulMat4(this.getRotMatrix(), scale);
        var matrix = GLGE.mulMat4(translate, M1);
        this.localMatrix = matrix;
        if(this.parent) {
          matrix = GLGE.mulMat4(this.parent.getModelMatrix(), matrix)
        }
        this.matrix = matrix
      }
    }
    return this.matrix
  };
  GLGE.Placeable.prototype.getInverseModelMatrix = function() {
    if(!this.matrix) {
      this.getModelMatrix()
    }
    if(!this.invmatrix) {
      this.invmatrix = GLGE.transposeMat4(this.matrix)
    }
    return this.invmatrix
  };
  GLGE.Placeable.prototype.getTransposeModelMatrix = function() {
    if(!this.matrix) {
      this.getModelMatrix()
    }
    if(!this.transmatrix) {
      this.transmatrix = GLGE.transposeMat4(this.matrix)
    }
    return this.transmatrix
  };
  GLGE.Placeable.prototype.getTransposeInverseModelMatrix = function() {
    if(!this.matrix) {
      this.getModelMatrix()
    }
    if(!this.transinvmatrix) {
      this.invtransmatrix = GLGE.transposeMat4(this.getInverseModelMatrix())
    }
    return this.transinvmatrix
  };
  GLGE.Placeable.prototype.move = function(amount, reference) {
    if(!reference) {
      reference = GLGE.GLOBAL
    }
    switch(reference) {
      case GLGE.GLOBAL:
        this.setLocX(+this.locX + amount[0]);
        this.setLocY(+this.locY + amount[1]);
        this.setLocZ(+this.locZ + amount[2]);
        break;
      case GLGE.LOCAL:
        var matrix = this.getModelMatrix();
        var xAxis = GLGE.toUnitVec3([matrix[0], matrix[1], matrix[2]]);
        var yAxis = GLGE.toUnitVec3([matrix[4], matrix[5], matrix[6]]);
        var zAxis = GLGE.toUnitVec3([matrix[8], matrix[9], matrix[10]]);
        var x = xAxis[0] * amount[0] + xAxis[1] * amount[1] + xAxis[2] * amount[2];
        var y = yAxis[0] * amount[0] + yAxis[1] * amount[1] + yAxis[2] * amount[2];
        var z = zAxis[0] * amount[0] + zAxis[1] * amount[1] + zAxis[2] * amount[2];
        this.setLocX(+this.locX + x);
        this.setLocY(+this.locY + y);
        this.setLocZ(+this.locZ + z);
        break
    }
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.JSONLoader = function() {
  };
  GLGE.JSONLoader.prototype.downloadPriority = 0;
  GLGE.JSONLoader.prototype.setJSONSrc = function(url) {
    var GLGEObj = this;
    GLGE.Message.messageLoader(url, function(text) {
      GLGEObj.setJSONString(text)
    }, this.downloadPriority)
  };
  GLGE.JSONLoader.prototype.setJSONString = function(string) {
    var message = JSON.parse(string);
    if(message.type == this.className) {
      message.uid = this.uid;
      message.command = "update";
      GLGE.Message.parseMessage(message)
    }
  };
  GLGE.JSONLoader.prototype.setDownloadPriority = function(value) {
    this.downloadPriority = value
  };
  GLGE.JSONLoader.prototype.getDownloadPriority = function() {
    return this.downloadPriority
  }
})(GLGE);
(function(GLGE) {
  GLGE.QuickNotation = function() {
  };
  GLGE.QuickNotation.prototype._ = function() {
    var argument;
    for(var i = 0;i < arguments.length;i++) {
      argument = arguments[i];
      if(typeof argument == "object") {
        if(argument.className && this["add" + argument.className]) {
          this["add" + argument.className](argument)
        }else {
          for(var key in argument) {
            if(this["set" + key]) {
              this["set" + key](argument[key])
            }
          }
        }
      }
    }
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.Message = {};
  GLGE.Message.parseMessage = function(msg) {
    switch(msg.command) {
      case "create":
        var obj = new GLGE[msg.type](msg.uid);
        this.setAttributes(obj, msg.attributes);
        if(msg.children) {
          GLGE.Message.addChildren(obj, msg.children)
        }
        return obj;
        break;
      case "update":
        var obj = GLGE.Assets.get(msg.uid);
        this.setAttributes(obj, msg.attributes);
        if(msg.add) {
          GLGE.Message.addChildren(obj, msg.add)
        }
        if(msg.remove) {
          GLGE.Message.removeChildren(obj, msg.remove)
        }
        return obj;
        break
    }
    return null
  };
  GLGE.Message.setAttributes = function(obj, attribs) {
    if(attribs) {
      for(var attrib in attribs) {
        if(obj["set" + attrib]) {
          if(attribs[attrib].command) {
            attribs[attrib] = GLGE.Message.parseMessage(attribs[attrib])
          }
          obj["set" + attrib](attribs[attrib])
        }
      }
    }
    return this
  };
  GLGE.Message.addChildren = function(obj, children) {
    if(!(children instanceof Array)) {
      children = [children]
    }
    for(var i = 0;i < children.length;i++) {
      if(children[i].command) {
        var asset = GLGE.Message.parseMessage(children[i])
      }else {
        var asset = GLGE.Assets.get(children[i])
      }
      obj["add" + asset.className](asset)
    }
  };
  GLGE.Message.removeChildren = function(obj, children) {
    if(!(children instanceof Array)) {
      children = [children]
    }
    for(var i = 0;i < children.length;i++) {
      var asset = GLGE.Assets.get(children[i]);
      obj["add" + asset.className](asset)
    }
  };
  GLGE.Message.toLoad = [];
  GLGE.Message.messageLoader = function(url, callback, priority) {
    GLGE.Message.toLoad.push([url, callback, priority]);
    if(GLGE.Message.toLoad.length == 1) {
      GLGE.Message.loadMessages()
    }
  };
  GLGE.Message.loadMessages = function() {
    var nextDoc = GLGE.Message.toLoad.pop();
    var req = new GLGE.XMLHttpRequest;
    req.onreadystatechange = function() {
      if(this.readyState == 4) {
        if(this.status == 200 || this.status == 0) {
          nextDoc[1](this.responseText)
        }else {
          GLGE.error("Error loading Document: " + nextDoc[0] + " status " + this.status)
        }
      }
    };
    req.open("GET", nextDoc[0], true);
    req.send("");
    if(GLGE.Message.toLoad.length > 0) {
      GLGE.Message.loadMessages()
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.G_NODE = 1;
  GLGE.G_ROOT = 2;
  GLGE.Group = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.children = [];
    var that = this;
    this.downloadComplete = function() {
      if(that.isComplete()) {
        that.fireEvent("downloadComplete")
      }
    }
  };
  GLGE.augment(GLGE.Placeable, GLGE.Group);
  GLGE.augment(GLGE.Animatable, GLGE.Group);
  GLGE.augment(GLGE.QuickNotation, GLGE.Group);
  GLGE.augment(GLGE.JSONLoader, GLGE.Group);
  GLGE.Group.prototype.children = null;
  GLGE.Group.prototype.className = "Group";
  GLGE.Group.prototype.type = GLGE.G_NODE;
  GLGE.Group.prototype.isComplete = function() {
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].isComplete && !this.children[i].isComplete()) {
        return false
      }
    }
    return true
  };
  GLGE.Group.prototype.setAction = function(action, blendTime, loop) {
    action.start(blendTime, loop, this.getNames());
    return this
  };
  GLGE.Group.prototype.getNames = function(names) {
    if(!names) {
      names = {}
    }
    var thisname = this.getName();
    if(thisname != "") {
      names[thisname] = this
    }
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].getNames) {
        this.children[i].getNames(names)
      }
    }
    return names
  };
  GLGE.Group.prototype.getBoundingVolume = function(local) {
    this.boundingVolume = null;
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].getBoundingVolume) {
        if(!this.boundingVolume) {
          this.boundingVolume = this.children[i].getBoundingVolume(true).clone()
        }else {
          this.boundingVolume.addBoundingVolume(this.children[i].getBoundingVolume(true))
        }
      }
    }
    if(!this.boundingVolume) {
      this.boundingVolume = new GLGE.BoundingVolume(0, 0, 0, 0, 0, 0)
    }
    if(local) {
      this.boundingVolume.applyMatrix(this.getLocalMatrix())
    }else {
      this.boundingVolume.applyMatrix(this.getModelMatrix())
    }
    return this.boundingVolume
  };
  GLGE.Group.prototype.getObjects = function(objects) {
    if(this.lookAt) {
      this.Lookat(this.lookAt)
    }
    if(this.animation) {
      this.animate()
    }
    if(!objects) {
      objects = []
    }
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].className == "Object" || this.children[i].className == "Text" || this.children[i].toRender) {
        if(this.children[i].renderFirst) {
          objects.unshift(this.children[i])
        }else {
          objects.push(this.children[i])
        }
      }else {
        if(this.children[i].getObjects) {
          this.children[i].getObjects(objects)
        }
      }
    }
    return objects
  };
  GLGE.Group.prototype.getLights = function(lights) {
    if(!lights) {
      lights = []
    }
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].className == "Light") {
        lights.push(this.children[i])
      }else {
        if(this.children[i].getLights) {
          this.children[i].getLights(lights)
        }
      }
    }
    return lights
  };
  GLGE.Group.prototype.updateAllPrograms = function() {
    var objects = this.getObjects();
    for(var i = 0;i < objects.length;i++) {
      if(objects[i].updateProgram) {
        objects[i].updateProgram()
      }
    }
  };
  GLGE.Group.prototype.addChild = function(object) {
    if(object.parent) {
      object.parent.removeChild(object)
    }
    GLGE.reuseMatrix4(object.matrix);
    object.matrix = null;
    object.parent = this;
    this.children.push(object);
    if(object.getLights && object.getLights().length > 0 || object.className == "Light") {
      var root = object;
      while(root.parent) {
        root = root.parent
      }
      root.updateAllPrograms()
    }
    if(object.addEventListener) {
      object.addEventListener("shaderupdate", function() {
        var root = this;
        while(root.parent) {
          root = root.parent
        }
        root.updateAllPrograms()
      });
      object.addEventListener("downloadComplete", this.downloadComplete)
    }
    this.fireEvent("childAdded", {obj:object});
    if(object.fireEvent) {
      object.fireEvent("appened", {obj:this})
    }
    this.fireEvent("childAdded", {obj:object});
    var o = this;
    while(o = o.parent) {
      o.fireEvent("childAdded", {obj:object, target:this})
    }
    return this
  };
  GLGE.Group.prototype.addObject = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addObjectInstance = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addGroup = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addLight = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addText = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addSkeleton = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addCamera = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addWavefront = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.removeChild = function(object) {
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i] == object) {
        if(this.children[i].removeEventListener) {
          this.children[i].removeEventListener("downloadComplete", this.downloadComplete)
        }
        this.children.splice(i, 1);
        if(this.scene && this.scene["remove" + object.className]) {
          this.scene["remove" + object.className](object)
        }
        if(object.fireEvent) {
          object.fireEvent("removed", {obj:this})
        }
        this.fireEvent("childRemoved", {obj:object});
        var o = this;
        while(o = o.parent) {
          o.fireEvent("childRemoved", {obj:object, target:this})
        }
        break
      }
    }
  };
  GLGE.Group.prototype.getChildren = function() {
    return this.children
  };
  GLGE.Group.prototype.GLInit = function(gl) {
    this.gl = gl;
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].GLInit) {
        this.children[i].GLInit(gl)
      }
    }
  };
  GLGE.Group.prototype.getPickable = function() {
    return this.pickable
  };
  GLGE.Group.prototype.setPickable = function(pickable) {
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].setPickable) {
        this.children[i].setPickable(pickable)
      }
    }
    this.pickable = pickable;
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.Object = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.multimaterials = [];
    this.renderCaches = [];
    var that = this;
    this.downloadComplete = function() {
      if(that.isComplete()) {
        that.fireEvent("downloadComplete")
      }
    }
  };
  GLGE.augment(GLGE.Placeable, GLGE.Object);
  GLGE.augment(GLGE.Animatable, GLGE.Object);
  GLGE.augment(GLGE.QuickNotation, GLGE.Object);
  GLGE.augment(GLGE.JSONLoader, GLGE.Object);
  GLGE.Object.prototype.className = "Object";
  GLGE.Object.prototype.mesh = null;
  GLGE.Object.prototype.skeleton = null;
  GLGE.Object.prototype.scene = null;
  GLGE.Object.prototype.transformMatrix = GLGE.identMatrix();
  GLGE.Object.prototype.material = null;
  GLGE.Object.prototype.gl = null;
  GLGE.Object.prototype.multimaterials = null;
  GLGE.Object.prototype.zTrans = false;
  GLGE.Object.prototype.renderCaches = null;
  GLGE.Object.prototype.id = "";
  GLGE.Object.prototype.pickable = true;
  GLGE.Object.prototype.drawType = GLGE.DRAW_TRIS;
  GLGE.Object.prototype.pointSize = 1;
  GLGE.Object.prototype.lineWidth = 1;
  GLGE.Object.prototype.cull = true;
  GLGE.Object.prototype.culled = true;
  GLGE.Object.prototype.depthTest = true;
  var shfragStr = [];
  shfragStr.push("#ifdef GL_ES\nprecision highp float;\n#endif\n");
  shfragStr.push("uniform float distance;\n");
  shfragStr.push("uniform bool shadowtype;\n");
  shfragStr.push("varying vec3 eyevec;\n");
  shfragStr.push("void main(void)\n  ");
  shfragStr.push("{\n");
  shfragStr.push("float depth = gl_FragCoord.z / gl_FragCoord.w;\n");
  shfragStr.push("vec4 rgba=fract(depth/distance * vec4(16777216.0, 65536.0, 256.0, 1.0));\n");
  shfragStr.push("gl_FragColor=rgba-rgba.rrgb*vec4(0.0,0.00390625,0.00390625,0.00390625);\n");
  shfragStr.push("}\n");
  GLGE.Object.prototype.shfragStr = shfragStr.join("");
  var nfragStr = [];
  nfragStr.push("#ifdef GL_ES\nprecision highp float;\n#endif\n");
  nfragStr.push("varying vec3 n;\n");
  nfragStr.push("void main(void)\n");
  nfragStr.push("{\n");
  nfragStr.push("float depth = gl_FragCoord.z / gl_FragCoord.w;\n");
  nfragStr.push("gl_FragColor=vec4(normalize(n)/2.0+0.5,depth/1000.0);\n");
  nfragStr.push("}\n");
  GLGE.Object.prototype.nfragStr = nfragStr.join("");
  var pkfragStr = [];
  pkfragStr.push("#ifdef GL_ES\nprecision highp float;\n#endif\n");
  pkfragStr.push("uniform float far;\n");
  pkfragStr.push("uniform vec3 pickcolor;\n");
  pkfragStr.push("varying vec3 n;\n");
  pkfragStr.push("varying vec4 UVCoord;\n");
  pkfragStr.push("void main(void)\n");
  pkfragStr.push("{\n");
  pkfragStr.push("float Xcoord = gl_FragCoord.x+0.5;\n");
  pkfragStr.push("if(Xcoord>0.0) gl_FragColor = vec4(pickcolor,1.0);\n");
  pkfragStr.push("if(Xcoord>1.0) gl_FragColor = vec4(n,1.0);\n");
  pkfragStr.push("if(Xcoord>2.0){");
  pkfragStr.push("vec3 rgb=fract((gl_FragCoord.z/gl_FragCoord.w) * vec3(65536.0, 256.0, 1.0));\n");
  pkfragStr.push("gl_FragColor=vec4(rgb-rgb.rrg*vec3(0.0,0.00390625,0.00390625),1.0);\n");
  pkfragStr.push("}");
  pkfragStr.push("if(Xcoord>3.0){");
  pkfragStr.push("vec3 rgb=fract(UVCoord.x * vec3(65536.0, 256.0, 1.0));\n");
  pkfragStr.push("gl_FragColor=vec4(rgb-rgb.rrg*vec3(0.0,0.00390625,0.00390625),1.0);\n");
  pkfragStr.push("}");
  pkfragStr.push("if(Xcoord>4.0){");
  pkfragStr.push("vec3 rgb=fract(UVCoord.y * vec3(65536.0, 256.0, 1.0));\n");
  pkfragStr.push("gl_FragColor=vec4(rgb-rgb.rrg*vec3(0.0,0.00390625,0.00390625),1.0);\n");
  pkfragStr.push("}");
  pkfragStr.push("}\n");
  GLGE.Object.prototype.pkfragStr = pkfragStr.join("");
  GLGE.Object.prototype.getPickable = function() {
    return this.pickable
  };
  GLGE.Object.prototype.setPickable = function(pickable) {
    this.pickable = pickable;
    return this
  };
  GLGE.Object.prototype.getDepthTest = function() {
    return this.depthTest
  };
  GLGE.Object.prototype.setDepthTest = function(test) {
    this.depthTest = test;
    return this
  };
  GLGE.Object.prototype.getCull = function() {
    return this.cull
  };
  GLGE.Object.prototype.setCull = function(cull) {
    this.cull = cull;
    return this
  };
  GLGE.Object.prototype.getDrawType = function() {
    return this.drawType
  };
  GLGE.Object.prototype.setDrawType = function(value) {
    this.drawType = value;
    return this
  };
  GLGE.Object.prototype.getPointSize = function() {
    return this.pointSize
  };
  GLGE.Object.prototype.setPointSize = function(value) {
    this.pointSize = parseFloat(value);
    return this
  };
  GLGE.Object.prototype.getLineWidth = function() {
    return this.lineWidth
  };
  GLGE.Object.prototype.setLineWidth = function(value) {
    this.lineWidth = parseFloat(value);
    return this
  };
  GLGE.Object.prototype.setUniform = function(type, name, value) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    this.uniforms[name] = {type:type, value:value}
  };
  GLGE.Object.prototype.getUniform = function(name) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    return this.uniforms[name].value
  };
  GLGE.Object.prototype.getUniformType = function(name) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    return this.uniforms[name].type
  };
  GLGE.Object.prototype.setVertexShaderInjection = function(shader) {
    this.shaderVertexInjection = shader;
    this.updateProgram();
    return this
  };
  GLGE.Object.prototype.getVertexShaderInjection = function(shader) {
    return this.shaderVertexInjection
  };
  GLGE.Object.prototype.getSkeleton = function() {
    return this.skeleton
  };
  GLGE.Object.prototype.setSkeleton = function(value) {
    this.skeleton = value;
    this.bones = null;
    return this
  };
  GLGE.Object.prototype.getBoundingVolume = function(local) {
    if(!local) {
      local = 0
    }
    if(!this.boundingVolume) {
      this.boundingVolume = []
    }
    if(!this.boundmatrix) {
      this.boundmatrix = []
    }
    var matrix = this.getModelMatrix();
    if(matrix != this.boundmatrix[local] || !this.boundingVolume[local]) {
      var multimaterials = this.multimaterials;
      var boundingVolume;
      for(var i = 0;i < multimaterials.length;i++) {
        if(multimaterials[i].lods[0].mesh) {
          if(!boundingVolume) {
            boundingVolume = multimaterials[i].lods[0].mesh.getBoundingVolume().clone()
          }else {
            boundingVolume.addBoundingVolume(multimaterials[i].lods[0].mesh.getBoundingVolume())
          }
        }
      }
      if(!boundingVolume) {
        boundingVolume = new GLGE.BoundingVolume(0, 0, 0, 0, 0, 0)
      }
      if(local) {
        boundingVolume.applyMatrix(this.getLocalMatrix())
      }else {
        boundingVolume.applyMatrix(this.getModelMatrix())
      }
      this.boundingVolume[local] = boundingVolume
    }
    this.boundmatrix[local] = matrix;
    return this.boundingVolume[local]
  };
  GLGE.Object.prototype.setZtransparent = function(value) {
    this.zTrans = value;
    return this
  };
  GLGE.Object.prototype.isZtransparent = function() {
    return this.zTrans
  };
  GLGE.Object.prototype.isComplete = function() {
    for(var i = 0;i < this.multimaterials.length;i++) {
      if(!this.multimaterials[i].isComplete()) {
        return false
      }
    }
    return true
  };
  GLGE.Object.prototype.setMaterial = function(material, idx) {
    if(typeof material == "string") {
      material = GLGE.Assets.get(material)
    }
    if(!idx) {
      idx = 0
    }
    if(!this.multimaterials[idx]) {
      this.multimaterials[idx] = new GLGE.MultiMaterial;
      this.multimaterials[idx].addEventListener("downloadComplete", this.downloadComplete)
    }
    if(this.multimaterials[idx].getMaterial() != material) {
      this.multimaterials[idx].setMaterial(material);
      this.updateProgram()
    }
    return this
  };
  GLGE.Object.prototype.getMaterial = function(idx) {
    if(!idx) {
      idx = 0
    }
    if(this.multimaterials[idx]) {
      return this.multimaterials[idx].getMaterial()
    }else {
      return false
    }
  };
  GLGE.Object.prototype.setMesh = function(mesh, idx) {
    if(typeof mesh == "string") {
      mesh = GLGE.Assets.get(mesh)
    }
    if(!idx) {
      idx = 0
    }
    if(!this.multimaterials[idx]) {
      this.multimaterials[idx] = new GLGE.MultiMaterial;
      this.multimaterials[idx].addEventListener("downloadComplete", this.downloadComplete)
    }
    this.multimaterials[idx].setMesh(mesh);
    this.boundingVolume = null;
    return this
  };
  GLGE.Object.prototype.getMesh = function(idx) {
    if(!idx) {
      idx = 0
    }
    if(this.multimaterials[idx]) {
      return this.multimaterials[idx].getMesh()
    }else {
      return false
    }
  };
  GLGE.Object.prototype.GLInit = function(gl) {
    this.gl = gl
  };
  GLGE.Object.prototype.GLDestory = function(gl) {
  };
  GLGE.Object.prototype.updateProgram = function() {
    for(var i = 0;i < this.multimaterials.length;i++) {
      this.multimaterials[i].updateProgram()
    }
  };
  GLGE.Object.prototype.addMultiMaterial = function(multimaterial) {
    if(typeof multimaterial == "string") {
      multimaterial = GLGE.Assets.get(multimaterial)
    }
    this.multimaterials.push(multimaterial);
    multimaterial.addEventListener("downloadComplete", this.downloadComplete);
    this.boundingVolume = null;
    return this
  };
  GLGE.Object.prototype.getMultiMaterials = function() {
    return this.multimaterials
  };
  GLGE.Object.prototype.GLGenerateShader = function(gl) {
    var colors = UV = joints1 = joints2 = false;
    var lights = gl.lights;
    var vertexStr = [];
    var tangent = false;
    if(!this.mesh.normals) {
      this.mesh.calcNormals()
    }
    for(var i = 0;i < this.mesh.buffers.length;i++) {
      if(this.mesh.buffers[i].name == "tangent") {
        tangent = true
      }
      if(this.mesh.buffers[i].size > 1) {
        vertexStr.push("attribute vec" + this.mesh.buffers[i].size + " " + this.mesh.buffers[i].name + ";\n")
      }else {
        vertexStr.push("attribute float " + this.mesh.buffers[i].name + ";\n")
      }
      if(this.mesh.buffers[i].name == "UV") {
        UV = true
      }
      if(this.mesh.buffers[i].name == "color") {
        colors = true
      }
      if(this.mesh.buffers[i].name == "joints1") {
        joints1 = this.mesh.buffers[i]
      }
      if(this.mesh.buffers[i].name == "joints2") {
        joints2 = this.mesh.buffers[i]
      }
    }
    vertexStr.push("uniform mat4 worldView;\n");
    vertexStr.push("uniform mat4 projection;\n");
    vertexStr.push("uniform mat4 worldInverseTranspose;\n");
    vertexStr.push("uniform mat4 envMat;\n");
    vertexStr.push("uniform float cascadeLevel;\n");
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      vertexStr.push("uniform vec3 lightpos" + i + ";\n");
      vertexStr.push("uniform vec3 lightdir" + i + ";\n");
      if((lights[i].type == GLGE.L_SPOT || lights[i].type == GLGE.L_DIR) && lights[i].getCastShadows()) {
        vertexStr.push("uniform mat4 lightmat" + i + ";\n");
        vertexStr.push("varying vec4 spotcoord" + i + ";\n")
      }
    }
    vertexStr.push("varying vec3 eyevec;\n");
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      vertexStr.push("varying vec3 lightvec" + i + ";\n");
      vertexStr.push("varying float lightdist" + i + ";\n")
    }
    if(this.mesh.joints && this.mesh.joints.length > 0) {
      vertexStr.push("uniform vec4 jointMat[" + 3 * this.mesh.joints.length + "];\n")
    }
    if(this.material) {
      vertexStr.push(this.material.getVertexVarying(vertexStr))
    }
    vertexStr.push("varying vec3 n;\n");
    vertexStr.push("varying vec3 t;\n");
    if(colors) {
      vertexStr.push("varying vec4 vcolor;\n")
    }
    vertexStr.push("varying vec4 UVCoord;\n");
    vertexStr.push("varying vec3 OBJCoord;\n");
    if(this.shaderVertexInjection) {
      vertexStr.push(this.shaderVertexInjection)
    }
    vertexStr.push("void main(void)\n");
    vertexStr.push("{\n");
    if(colors) {
      vertexStr.push("vcolor=color;\n")
    }
    if(UV) {
      vertexStr.push("UVCoord=UV;\n")
    }else {
      vertexStr.push("UVCoord=vec4(0.0,0.0,0.0,0.0);\n")
    }
    vertexStr.push("OBJCoord = position;\n");
    vertexStr.push("vec3 tang;\n");
    vertexStr.push("vec4 pos = vec4(0.0, 0.0, 0.0, 1.0);\n");
    vertexStr.push("vec4 norm = vec4(0.0, 0.0, 0.0, 1.0);\n");
    if(tangent) {
      vertexStr.push("vec4 tang4 = vec4(0.0, 0.0, 0.0, 1.0);\n")
    }
    if(joints1) {
      if(joints1.size == 1) {
        vertexStr.push("pos += vec4(dot(jointMat[int(3.0*joints1)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints1+1.0)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints1+2.0)],vec4(position,1.0)),1.0)*weights1;\n");
        vertexStr.push("norm += vec4(dot(jointMat[int(3.0*joints1)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints1+1.0)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints1+2.0)].xyz,normal),1.0)*weights1;\n");
        if(tangent) {
          vertexStr.push("tang4 += vec4(dot(jointMat[int(3.0*joints1)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints1+1.0)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints1+2.0)].xyz,tangent),1.0)*weights1;\n")
        }
      }else {
        for(var i = 0;i < joints1.size;i++) {
          vertexStr.push("pos += vec4(dot(jointMat[int(3.0*joints1[" + i + "])],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints1[" + i + "]+1.0)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints1[" + i + "]+2.0)],vec4(position,1.0)),1.0)*weights1[" + i + "];\n");
          vertexStr.push("norm += vec4(dot(jointMat[int(3.0*joints1[" + i + "])].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints1[" + i + "]+1.0)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints1[" + i + "]+2.0)].xyz,normal),1.0)*weights1[" + i + "];\n");
          if(tangent) {
            vertexStr.push("tang4 += vec4(dot(jointMat[int(3.0*joints1[" + i + "])].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints1[" + i + "]+1.0)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints1[" + i + "]+2.0)].xyz,tangent),1.0)*weights1[" + i + "];\n")
          }
        }
      }
      if(joints2) {
        if(joints2.size == 1) {
          vertexStr.push("pos += vec4(dot(jointMat[int(3.0*joints2)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints2+1.0)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints2+2.0)],vec4(position,1.0)),1.0)*weights2;\n");
          vertexStr.push("norm += vec4(dot(jointMat[int(3.0*joints2)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints2+1.0)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints2+2.0)].xyz,normal),1.0)*weights2;\n");
          if(tangent) {
            vertexStr.push("tang4 += vec4(dot(jointMat[int(3.0*joints2)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints2+1.0)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints2+2.0)].xyz,tangent),1.0)*weights2;\n")
          }
        }else {
          for(var i = 0;i < joints2.size;i++) {
            vertexStr.push("pos += vec4(dot(jointMat[int(3.0*joints2[" + i + "])],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints2[" + i + "]+1.0)],vec4(position,1.0)),\n" + "              dot(jointMat[int(3.0*joints2[" + i + "]+2.0)],vec4(position,1.0)),1.0)*weights2[" + i + "];\n");
            vertexStr.push("norm += vec4(dot(jointMat[int(3.0*joints2[" + i + "])].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints2[" + i + "]+1.0)].xyz,normal),\n" + "               dot(jointMat[int(3.0*joints2[" + i + "]+2.0)].xyz,normal),1.0)*weights2[" + i + "];\n");
            if(tangent) {
              vertexStr.push("tang4 += vec4(dot(jointMat[int(3.0*joints2[" + i + "])].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints2[" + i + "]+1.0)].xyz,tangent),\n" + "               dot(jointMat[int(3.0*joints2[" + i + "]+2.0)].xyz,tangent),1.0)*weights2[" + i + "];\n")
            }
          }
        }
      }
      for(var i = 0;i < lights.length;i++) {
        if(lights[i].type == GLGE.L_OFF) {
          continue
        }
        if((lights[i].type == GLGE.L_SPOT || lights[i].type == GLGE.L_DIR) && lights[i].getCastShadows()) {
          vertexStr.push("spotcoord" + i + "=lightmat" + i + "*vec4(pos.xyz,1.0);\n")
        }
      }
      if(this.shaderVertexInjection) {
        vertexStr.push("pos=GLGE_Position(vec4(pos.xyz, 1.0));\n")
      }
      vertexStr.push("pos = worldView * vec4(pos.xyz, 1.0);\n");
      vertexStr.push("norm = worldInverseTranspose * vec4(norm.xyz, 1.0);\n");
      if(tangent) {
        vertexStr.push("tang = (worldInverseTranspose*vec4(tang4.xyz,1.0)).xyz;\n")
      }
    }else {
      vertexStr.push("vec4 pos4=vec4(position,1.0);\n");
      if(this.shaderVertexInjection && ~this.shaderVertexInjection.indexOf("GLGE_Position")) {
        vertexStr.push("pos4=GLGE_Position(pos4);\n")
      }
      for(var i = 0;i < lights.length;i++) {
        if(lights[i].type == GLGE.L_OFF) {
          continue
        }
        if((lights[i].type == GLGE.L_SPOT || lights[i].type == GLGE.L_DIR) && lights[i].getCastShadows()) {
          vertexStr.push("spotcoord" + i + "=lightmat" + i + "*pos4;\n")
        }
      }
      vertexStr.push("pos = worldView * pos4;\n");
      vertexStr.push("norm = worldInverseTranspose * vec4(normal, 1.0);\n");
      if(tangent) {
        vertexStr.push("tang = (worldInverseTranspose*vec4(tangent,1.0)).xyz;\n")
      }
    }
    vertexStr.push("gl_Position = projection * pos;\n");
    vertexStr.push("gl_PointSize=" + this.pointSize.toFixed(5) + ";\n");
    vertexStr.push("eyevec = -pos.xyz;\n");
    if(tangent) {
      vertexStr.push("t = normalize(tang);")
    }else {
      vertexStr.push("t = vec3(0.0,0.0,0.0);")
    }
    vertexStr.push("n = normalize(norm.rgb);");
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      if(lights[i].getType() == GLGE.L_DIR) {
        vertexStr.push("lightvec" + i + " = -lightdir" + i + ";\n")
      }else {
        vertexStr.push("lightvec" + i + " = pos.xyz-lightpos" + i + ";\n")
      }
      vertexStr.push("lightdist" + i + " = length(lightpos" + i + ".xyz-pos.xyz);\n")
    }
    if(this.material) {
      vertexStr.push(this.material.getLayerCoords(this.shaderVertexInjection))
    }
    vertexStr.push("}\n");
    vertexStr = vertexStr.join("");
    fragStr = this.material.getFragmentShader(lights, colors);
    this.GLFragmentShaderNormal = GLGE.getGLShader(gl, gl.FRAGMENT_SHADER, this.nfragStr);
    this.GLFragmentShaderShadow = GLGE.getGLShader(gl, gl.FRAGMENT_SHADER, this.shfragStr);
    this.GLFragmentShaderPick = GLGE.getGLShader(gl, gl.FRAGMENT_SHADER, this.pkfragStr);
    this.GLFragmentShader = GLGE.getGLShader(gl, gl.FRAGMENT_SHADER, fragStr);
    this.GLVertexShader = GLGE.getGLShader(gl, gl.VERTEX_SHADER, vertexStr + "//default");
    this.GLVertexShaderShadow = GLGE.getGLShader(gl, gl.VERTEX_SHADER, vertexStr + "//shadow");
    this.GLVertexShaderPick = GLGE.getGLShader(gl, gl.VERTEX_SHADER, vertexStr + "//pick");
    this.GLVertexShaderNormal = GLGE.getGLShader(gl, gl.VERTEX_SHADER, vertexStr + "//normal");
    this.GLShaderProgramPick = GLGE.getGLProgram(gl, this.GLVertexShaderPick, this.GLFragmentShaderPick);
    this.GLShaderProgramNormal = GLGE.getGLProgram(gl, this.GLVertexShaderNormal, this.GLFragmentShaderNormal);
    this.GLShaderProgramShadow = GLGE.getGLProgram(gl, this.GLVertexShaderShadow, this.GLFragmentShaderShadow);
    this.GLShaderProgram = GLGE.getGLProgram(gl, this.GLVertexShaderShadow, this.GLFragmentShader)
  };
  GLGE.Object.prototype.createShaders = function(multimaterial) {
    if(this.gl) {
      this.mesh = multimaterial.mesh;
      this.material = multimaterial.material;
      this.GLGenerateShader(this.gl);
      multimaterial.GLShaderProgramPick = this.GLShaderProgramPick;
      multimaterial.GLShaderProgramShadow = this.GLShaderProgramShadow;
      multimaterial.GLShaderProgram = this.GLShaderProgram
    }
  };
  GLGE.Object.prototype.GLUniforms = function(gl, renderType, pickindex) {
    var program;
    switch(renderType) {
      case GLGE.RENDER_DEFAULT:
        program = this.GLShaderProgram;
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "emitpass"), 0);
        break;
      case GLGE.RENDER_EMIT:
        program = this.GLShaderProgram;
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "emitpass"), 1);
        break;
      case GLGE.RENDER_SHADOW:
        program = this.GLShaderProgramShadow;
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "shadowtype"), 1);
        break;
      case GLGE.RENDER_DEPTH:
        program = this.GLShaderProgramShadow;
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, program, "cascadeLevel"), 2);
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "shadowtype"), 0);
        break;
      case GLGE.RENDER_NORMAL:
        program = this.GLShaderProgramNormal;
        break;
      case GLGE.RENDER_PICK:
        program = this.GLShaderProgramPick;
        var b = pickindex >> 16 & 255;
        var g = pickindex >> 8 & 255;
        var r = pickindex & 255;
        GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, program, "pickcolor"), r / 255, g / 255, b / 255);
        break
    }
    gl.lineWidth(this.lineWidth);
    for(key in this.uniforms) {
      var uniform = this.uniforms[key];
      if(uniform.type == "Matrix4fv") {
        GLGE.setUniformMatrix(gl, "Matrix4fv", GLGE.getUniformLocation(gl, program, key), false, uniform.value)
      }else {
        GLGE.setUniform(gl, uniform.type, GLGE.getUniformLocation(gl, program, key), uniform.value)
      }
    }
    if(!program.caches) {
      program.caches = {}
    }
    if(!program.glarrays) {
      program.glarrays = {}
    }
    var pc = program.caches;
    var pgl = program.glarrays;
    var scene = gl.scene;
    var camera = scene.camera;
    if(pc.far != camera.far) {
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "far"), camera.far);
      pc.far = camera.far
    }
    if(renderType == GLGE.RENDER_DEFAULT || renderType == GLGE.RENDER_EMIT) {
      if(pc.ambientColor != scene.ambientColor) {
        var ambientColor = scene.ambientColor;
        GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, program, "amb"), ambientColor.r, ambientColor.g, ambientColor.b);
        pc.ambientColor = ambientColor
      }
      if(pc.fogFar != scene.fogFar) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, program, "fogfar"), scene.fogFar);
        pc.fogFar = scene.fogFar
      }
      if(pc.fogNear != scene.fogNear) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, program, "fognear"), scene.fogNear);
        pc.fogNear = scene.fogNear
      }
      if(pc.fogType != scene.fogType) {
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, program, "fogtype"), scene.fogType);
        pc.fogType = scene.fogType
      }
      if(pc.fogType != scene.fogcolor) {
        GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, program, "fogcolor"), scene.fogColor.r, scene.fogColor.g, scene.fogColor.b);
        pc.fogcolor = scene.fogcolor
      }
    }
    var cameraMatrix = camera.getViewMatrix();
    var modelMatrix = this.getModelMatrix();
    if(!pc.mvMatrix) {
      pc.mvMatrix = {cameraMatrix:null, modelMatrix:null}
    }
    var mvCache = pc.mvMatrix;
    if(mvCache.cameraMatrix != cameraMatrix || mvCache.modelMatrix != modelMatrix) {
      if(!this.caches.mvMatrix) {
        this.caches.mvMatrix = GLGE.mulMat4(cameraMatrix, modelMatrix)
      }
      mvMatrix = this.caches.mvMatrix;
      if(this.mesh.joints) {
        mvMatrix = cameraMatrix
      }
      var mvUniform = GLGE.getUniformLocation(gl, program, "worldView");
      var M1 = GLGE.transposeMat4(mvMatrix);
      if(!pgl.mvMatrix) {
        pgl.mvMatrixT = new Float32Array(M1)
      }else {
        GLGE.mat4gl(M1, pgl.mvMatrixT)
      }
      pgl.mvMatrix = mvMatrix;
      GLGE.setUniformMatrix(gl, "Matrix4fv", mvUniform, false, program.glarrays.mvMatrixT);
      var icUniform = GLGE.getUniformLocation(gl, program, "envMat");
      if(icUniform) {
        if(!this.caches.envMat) {
          var envMat = GLGE.inverseMat4(mvMatrix);
          envMat[3] = 0;
          envMat[7] = 0;
          envMat[11] = 0;
          this.caches.envMat = envMat
        }
        envMat = this.caches.envMat;
        M1 = GLGE.transposeMat4(envMat);
        if(!program.glarrays.envMat) {
          pgl.envMatT = new Float32Array(M1)
        }else {
          GLGE.mat4gl(M1, pgl.envMatT)
        }
        pgl.envMat = envMat;
        GLGE.setUniformMatrix(gl, "Matrix4fv", icUniform, false, pgl.envMatT)
      }
      if(!this.caches.normalMatrix) {
        var normalMatrix = GLGE.inverseMat4(mvMatrix);
        this.caches.normalMatrix = normalMatrix
      }
      normalMatrix = this.caches.normalMatrix;
      var nUniform = GLGE.getUniformLocation(gl, program, "worldInverseTranspose");
      if(!pgl.normalMatrix) {
        pgl.normalMatrix = new Float32Array(normalMatrix)
      }else {
        GLGE.mat4gl(normalMatrix, pgl.normalMatrix)
      }
      GLGE.setUniformMatrix(gl, "Matrix4fv", nUniform, false, pgl.normalMatrix);
      var cUniform = GLGE.getUniformLocation(gl, program, "view");
      M1 = GLGE.transposeMat4(cameraMatrix);
      if(!pgl.cameraMatrix) {
        pgl.cameraMatrixT = new Float32Array(M1)
      }else {
        GLGE.mat4gl(M1, pgl.cameraMatrixT)
      }
      pgl.cameraMatrix = cameraMatrix;
      GLGE.setUniformMatrix(gl, "Matrix4fv", cUniform, false, pgl.cameraMatrixT);
      mvCache.cameraMatrix = cameraMatrix;
      mvCache.modelMatrix = modelMatrix
    }
    var pUniform = GLGE.getUniformLocation(gl, program, "projection");
    M1 = GLGE.transposeMat4(camera.getProjectionMatrix());
    if(!pgl.pMatrix) {
      pgl.pMatrixT = new Float32Array(M1)
    }else {
      GLGE.mat4gl(M1, pgl.pMatrixT)
    }
    pgl.pMatrix = camera.getProjectionMatrix();
    GLGE.setUniformMatrix(gl, "Matrix4fv", pUniform, false, pgl.pMatrixT);
    if(renderType == GLGE.RENDER_DEFAULT || renderType == GLGE.RENDER_SHADOW || renderType == GLGE.RENDER_DEPTH || renderType == GLGE.RENDER_EMIT) {
      var pos, lpos;
      var lights = gl.lights;
      if(!pc.lights) {
        pc.lights = []
      }
      if(!pgl.lights) {
        pgl.lights = []
      }
      if(!this.caches.lights) {
        this.caches.lights = []
      }
      var lightCache = pc.lights;
      for(var i = 0;i < lights.length;i++) {
        if(lights[i].type == GLGE.L_OFF) {
          continue
        }
        if(!lightCache[i]) {
          lightCache[i] = {modelMatrix:null, cameraMatrix:null}
        }
        if(lightCache[i].modelMatrix != modelMatrix || lightCache[i].cameraMatrix != cameraMatrix) {
          if(!this.caches.lights[i]) {
            this.caches.lights[i] = {}
          }
          if(!this.caches.lights[i].pos) {
            this.caches.lights[i].pos = GLGE.mulMat4Vec4(GLGE.mulMat4(cameraMatrix, lights[i].getModelMatrix()), [0, 0, 0, 1])
          }
          pos = this.caches.lights[i].pos;
          GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, program, "lightpos" + i), pos[0], pos[1], pos[2]);
          if(!this.caches.lights[i].lpos) {
            this.caches.lights[i].lpos = GLGE.mulMat4Vec4(GLGE.mulMat4(cameraMatrix, lights[i].getModelMatrix()), [0, 0, 1, 1])
          }
          lpos = this.caches.lights[i].lpos;
          GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, program, "lightdir" + i), lpos[0] - pos[0], lpos[1] - pos[1], lpos[2] - pos[2]);
          if(lights[i].s_cache) {
            var lightmat = GLGE.mulMat4(lights[i].s_cache.smatrix, modelMatrix);
            if(!pgl.lights[i]) {
              pgl.lights[i] = new Float32Array(lightmat)
            }else {
              GLGE.mat4gl(lightmat, pgl.lights[i])
            }
            GLGE.setUniformMatrix(gl, "Matrix4fv", GLGE.getUniformLocation(gl, program, "lightmat" + i), true, pgl.lights[i]);
            GLGE.setUniform2(gl, "2f", GLGE.getUniformLocation(gl, program, "shadowoffset" + i), lights[i].s_cache.pmatrix[3], lights[i].s_cache.pmatrix[7]);
            lightCache[i].modelMatrix = modelMatrix;
            lightCache[i].cameraMatrix = cameraMatrix
          }else {
            lightCache[i].modelMatrix = modelMatrix;
            lightCache[i].cameraMatrix = cameraMatrix
          }
        }
      }
    }
    if(this.mesh.joints) {
      if(!pc.joints) {
        pc.joints = []
      }
      if(!pgl.joints) {
        pgl.joints = []
      }
      if(!pgl.jointsT) {
        pgl.jointsT = []
      }
      if(!pgl.jointsinv) {
        pgl.jointsinv = []
      }
      if(!pgl.jointsCombined || pgl.jointsCombined.length != this.mesh.joints.length * 12) {
        pgl.jointsCombined = new Float32Array(this.mesh.joints.length * 12)
      }
      var jointCache = pc.joints;
      var ident = GLGE.identMatrix();
      for(i = 0;i < this.mesh.joints.length;i++) {
        if(!jointCache[i]) {
          jointCache[i] = {modelMatrix:null, invBind:null}
        }
        if(typeof this.mesh.joints[i] == "string") {
          if(!this.bones) {
            this.bones = this.skeleton.getNames()
          }
          if(this.bones) {
            var modelMatrix = this.bones[this.mesh.joints[i]].getModelMatrix()
          }
        }else {
          var modelMatrix = this.mesh.joints[i].getModelMatrix()
        }
        var invBind = this.mesh.invBind[i];
        if(jointCache[i].modelMatrix != modelMatrix || jointCache[i].invBind != invBind) {
          var jointmat = GLGE.mulMat4(modelMatrix, invBind);
          if(!pgl.joints[i]) {
            pgl.jointsT[i] = new Float32Array(GLGE.transposeMat4(jointmat))
          }else {
            GLGE.mat4gl(GLGE.transposeMat4(jointmat), pgl.jointsT[i])
          }
          pgl.joints[i] = jointmat;
          if(!pgl.jointsinv[i]) {
            pgl.jointsinv[i] = new Float32Array(GLGE.inverseMat4(jointmat))
          }else {
            GLGE.mat4gl(GLGE.inverseMat4(jointmat), pgl.jointsinv[i])
          }
          var mat = pgl.jointsT[i];
          var combinedMat = pgl.jointsCombined;
          combinedMat[i * 12] = mat[0];
          combinedMat[i * 12 + 1] = mat[4];
          combinedMat[i * 12 + 2] = mat[8];
          combinedMat[i * 12 + 3] = mat[12];
          combinedMat[i * 12 + 4] = mat[1];
          combinedMat[i * 12 + 5] = mat[5];
          combinedMat[i * 12 + 6] = mat[9];
          combinedMat[i * 12 + 7] = mat[13];
          combinedMat[i * 12 + 8] = mat[2];
          combinedMat[i * 12 + 9] = mat[6];
          combinedMat[i * 12 + 10] = mat[10];
          combinedMat[i * 12 + 11] = mat[14];
          jointCache[i].modelMatrix = modelMatrix;
          jointCache[i].invBind = invBind
        }
      }
      gl.uniform4fv(GLGE.getUniformLocation(gl, program, "jointMat"), pgl.jointsCombined)
    }
    if(this.material && (renderType == GLGE.RENDER_DEFAULT || renderType == GLGE.RENDER_EMIT) && gl.scene.lastMaterial != this.material) {
      this.material.textureUniforms(gl, program, lights, this);
      gl.scene.lastMaterial = this.material
    }
  };
  GLGE.Object.prototype.GLRender = function(gl, renderType, pickindex, multiMaterial, distance) {
    if(!gl) {
      return
    }
    if(!this.gl) {
      this.GLInit(gl)
    }
    if(this.lookAt) {
      this.Lookat(this.lookAt)
    }
    if(renderType == GLGE.RENDER_DEFAULT) {
      if(this.animation) {
        this.animate()
      }
    }
    if(!this.renderCaches[renderType]) {
      this.renderCaches[renderType] = {}
    }
    var cameraMatrix = gl.scene.camera.getViewMatrix();
    var modelMatrix = this.getModelMatrix();
    if(this.renderCaches[renderType].cameraMatrix != cameraMatrix || this.renderCaches[renderType].modelMatrix != modelMatrix) {
      this.renderCaches[renderType] = {};
      this.renderCaches[renderType].cameraMatrix = cameraMatrix;
      this.renderCaches[renderType].modelMatrix = modelMatrix
    }
    this.caches = this.renderCaches[renderType];
    var pixelsize;
    if(multiMaterial == undefined) {
      var start = 0;
      var end = this.multimaterials.length
    }else {
      var start = multiMaterial;
      var end = multiMaterial + 1
    }
    for(var i = start;i < end;i++) {
      if(this.multimaterials[i].lods.length > 1 && !pixelsize) {
        var camerapos = gl.scene.camera.getPosition();
        var modelpos = this.getPosition();
        var dist = GLGE.lengthVec3([camerapos.x - modelpos.x, camerapos.y - modelpos.y, camerapos.z - modelpos.z]);
        dist = GLGE.mulMat4Vec4(gl.scene.camera.getProjectionMatrix(), [this.getBoundingVolume().getSphereRadius(), 0, -dist, 1]);
        pixelsize = dist[0] / dist[3] * gl.scene.renderer.canvas.width
      }
      var lod = this.multimaterials[i].getLOD(pixelsize);
      if(lod.mesh && lod.mesh.loaded) {
        if(renderType == GLGE.RENDER_NULL) {
          if(lod.material) {
            lod.material.registerPasses(gl, this)
          }
          break
        }
        if(!lod.GLShaderProgram) {
          this.createShaders(lod)
        }else {
          this.GLShaderProgramPick = lod.GLShaderProgramPick;
          this.GLShaderProgramShadow = lod.GLShaderProgramShadow;
          this.GLShaderProgram = lod.GLShaderProgram
        }
        this.mesh = lod.mesh;
        this.material = lod.material;
        var drawType;
        switch(this.drawType) {
          case GLGE.DRAW_LINES:
            drawType = gl.LINES;
            break;
          case GLGE.DRAW_POINTS:
            drawType = gl.POINTS;
            break;
          case GLGE.DRAW_LINELOOPS:
            drawType = gl.LINE_LOOP;
            break;
          case GLGE.DRAW_LINESTRIPS:
            drawType = gl.LINE_STRIP;
            break;
          default:
            drawType = gl.TRIANGLES;
            break
        }
        switch(renderType) {
          case GLGE.RENDER_DEFAULT:
          ;
          case GLGE.RENDER_EMIT:
            if(gl.program != this.GLShaderProgram) {
              gl.useProgram(this.GLShaderProgram);
              gl.program = this.GLShaderProgram
            }
            this.mesh.GLAttributes(gl, this.GLShaderProgram);
            break;
          case GLGE.RENDER_SHADOW:
          ;
          case GLGE.RENDER_DEPTH:
            if(gl.program != this.GLShaderProgramShadow) {
              gl.useProgram(this.GLShaderProgramShadow);
              gl.program = this.GLShaderProgramShadow
            }
            if(!distance) {
              distance = gl.scene.camera.getFar()
            }
            GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, this.GLShaderProgramShadow, "distance"), distance);
            this.mesh.GLAttributes(gl, this.GLShaderProgramShadow);
            break;
          case GLGE.RENDER_NORMAL:
            if(gl.program != this.GLShaderProgramNormal) {
              gl.useProgram(this.GLShaderProgramNormal);
              gl.program = this.GLShaderProgramNormal
            }
            this.mesh.GLAttributes(gl, this.GLShaderProgramNormal);
            break;
          case GLGE.RENDER_PICK:
            if(gl.program != this.GLShaderProgramPick) {
              gl.useProgram(this.GLShaderProgramPick);
              gl.program = this.GLShaderProgramPick
            }
            this.mesh.GLAttributes(gl, this.GLShaderProgramPick);
            drawType = gl.TRIANGLES;
            break
        }
        this.GLUniforms(gl, renderType, pickindex);
        switch(this.mesh.windingOrder) {
          case GLGE.Mesh.WINDING_ORDER_UNKNOWN:
            gl.disable(gl.CULL_FACE);
            break;
          case GLGE.Mesh.WINDING_ORDER_COUNTER:
            gl.cullFace(gl.FRONT);
          default:
            break
        }
        if(this.mesh.GLfaces) {
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.GLfaces);
          gl.drawElements(drawType, this.mesh.GLfaces.numItems, gl.UNSIGNED_SHORT, 0)
        }else {
          gl.drawArrays(drawType, 0, this.mesh.positions.length / 3)
        }
        switch(this.mesh.windingOrder) {
          case GLGE.Mesh.WINDING_ORDER_UNKNOWN:
            if(gl.scene.renderer.cullFaces) {
              gl.enable(gl.CULL_FACE)
            }
            break;
          case GLGE.Mesh.WINDING_ORDER_COUNTER:
            gl.cullFace(gl.BACK);
          default:
            break
        }
        var matrix = this.matrix;
        var caches = this.caches;
        this.matrix = matrix;
        this.caches = caches
      }
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsAbstract = function(uid) {
    this.children = []
  };
  GLGE.augment(GLGE.Group, GLGE.PhysicsAbstract);
  GLGE.PHYSICS_ALL = 1;
  GLGE.PHYSICS_LOC = 2;
  GLGE.PhysicsAbstract.prototype.physicsType = GLGE.PHYSICS_ALL;
  GLGE.PhysicsAbstract.prototype.sync = true;
  GLGE.PhysicsAbstract.prototype.setType = function(value) {
    this.physicsType = value;
    return this
  };
  GLGE.PhysicsAbstract.prototype.getType = function(value) {
    return this.physicsType
  };
  GLGE.PhysicsAbstract.prototype.preProcess = function() {
    if(this.sync) {
      var matrix = this.getModelMatrix();
      this.jigLibObj.moveTo([matrix[3], matrix[7], matrix[11], 0]);
      if(this.physicsType == 1) {
        var sx = Math.sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1] + matrix[2] * matrix[2]);
        var sy = Math.sqrt(matrix[4] * matrix[4] + matrix[5] * matrix[5] + matrix[6] * matrix[6]);
        var sz = Math.sqrt(matrix[8] * matrix[8] + matrix[9] * matrix[9] + matrix[10] * matrix[10]);
        this.jigLibObj.setOrientation(new jigLib.Matrix3D([matrix[0] / sx, matrix[1] / sx, matrix[2] / sx, 0, matrix[4] / sy, matrix[5] / sy, matrix[6] / sy, 0, matrix[8] / sz, matrix[9] / sz, matrix[10] / sz, 0, 0, 0, 0, 1]))
      }
      this.sync = false
    }
  };
  GLGE.PhysicsAbstract.prototype.get_transform = function() {
    return new jigLib.Matrix3D(this.getModelMatrix())
  };
  GLGE.PhysicsAbstract.prototype.updateMatrix = function() {
    this.globalMatrix = null;
    this.sync = true;
    GLGE.Placeable.prototype.updateMatrix.call(this)
  };
  GLGE.PhysicsAbstract.prototype.getModelMatrix = function() {
    if(this.globalMatrix) {
      return this.globalMatrix
    }
    return GLGE.Placeable.prototype.getModelMatrix.call(this)
  };
  GLGE.PhysicsAbstract.prototype.set_transform = function(value) {
    value = value.glmatrix;
    var matrix = [value[0], value[1], value[2], value[3], value[4], value[5], value[6], value[7], value[8], value[9], value[10], value[11], value[12], value[13], value[14], value[15]];
    this.locX = value[3];
    this.locY = value[7];
    this.locZ = value[11];
    matrix = GLGE.mulMat4(matrix, this.getScaleMatrix());
    if(this.physicsType != 1) {
      var M = this.getModelMatrix();
      matrix[0] = M[0];
      matrix[1] = M[1];
      matrix[2] = M[2];
      matrix[4] = M[4];
      matrix[5] = M[5];
      matrix[6] = M[6];
      matrix[8] = M[8];
      matrix[9] = M[9];
      matrix[10] = M[10]
    }
    this.globalMatrix = matrix;
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        this.children[i].updateMatrix()
      }
    }
    return this
  };
  GLGE.PhysicsAbstract.prototype.setVelocity = function(value, local) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    this.jigLibObj.setVelocity(value, local);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setVelocityX = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getVelocity([0, 0, 0]);
    vel[0] = +value;
    this.jigLibObj.setVelocity(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setVelocityY = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getVelocity([0, 0, 0]);
    vel[1] = +value;
    this.jigLibObj.setVelocity(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setVelocityZ = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getVelocity([0, 0, 0]);
    vel[2] = +value;
    this.jigLibObj.setVelocity(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getVelocity = function() {
    return this.jigLibObj.getVelocity([0, 0, 0])
  };
  GLGE.PhysicsAbstract.prototype.getVelocityX = function() {
    return this.jigLibObj.getVelocity([0, 0, 0])[0]
  };
  GLGE.PhysicsAbstract.prototype.getVelocityY = function() {
    return this.jigLibObj.getVelocity([0, 0, 0])[1]
  };
  GLGE.PhysicsAbstract.prototype.getVelocityZ = function() {
    return this.jigLibObj.getVelocity([0, 0, 0])[2]
  };
  GLGE.PhysicsAbstract.prototype.setAngularVelocity = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    this.jigLibObj.setAngVel(value);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setAngularVelocityX = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getAngVel();
    vel[0] = +value;
    this.jigLibObj.setAngVel(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setAngularVelocityY = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getAngVel();
    vel[1] = +value;
    this.jigLibObj.setAngVel(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setAngularVelocityZ = function(value) {
    if(!this.getMovable()) {
      GLGE.error("Cannot set velocity on static object")
    }
    var vel = this.jigLibObj.getAngVel();
    vel[2] = +value;
    this.jigLibObj.setAngVel(vel);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getAngularVelocity = function() {
    return this.jigLibObj.getAngVel()
  };
  GLGE.PhysicsAbstract.prototype.getAngularVelocityX = function() {
    return this.jigLibObj.getAngVel()[0]
  };
  GLGE.PhysicsAbstract.prototype.getAngularVelocityY = function() {
    return this.jigLibObj.getAngVel()[1]
  };
  GLGE.PhysicsAbstract.prototype.getAngularVelocityZ = function() {
    return this.jigLibObj.getAngVel()[2]
  };
  GLGE.PhysicsAbstract.prototype.setMovable = function(value) {
    this.jigLibObj.set_movable(value);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getMovable = function() {
    return this.jigLibObj.get_movable()
  };
  GLGE.PhysicsAbstract.prototype.setFriction = function(value) {
    this.jigLibObj.set_friction(value);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getFriction = function() {
    return this.jigLibObj.get_friction()
  };
  GLGE.PhysicsAbstract.prototype.setRestitution = function(value) {
    this.jigLibObj.set_restitution(value);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getRestitution = function() {
    return this.jigLibObj.get_restitution()
  };
  GLGE.PhysicsAbstract.prototype.addBodyForce = function(f, p) {
    this.jigLibObj.addBodyForce(f, p);
    return this
  };
  GLGE.PhysicsAbstract.prototype.addWorldForce = function(f, p) {
    this.jigLibObj.addWorldForce(f, p);
    return this
  };
  GLGE.PhysicsAbstract.prototype.addWorldTorque = function(t) {
    this.jigLibObj.addWorldTorque(t);
    return this
  };
  GLGE.PhysicsAbstract.prototype.addBodyTorque = function(t) {
    this.jigLibObj.addBodyTorque(t);
    return this
  };
  GLGE.PhysicsAbstract.prototype.setLinearVelocityDamping = function(v) {
    this.jigLibObj.set_linVelocityDamping(v);
    return this
  };
  GLGE.PhysicsAbstract.prototype.getRotationalVelocityDamping = function(v) {
    return this.jigLibObj.get_rotVelocityDamping()
  };
  GLGE.PhysicsAbstract.prototype.getLinearVelocityDamping = function(v) {
    return this.jigLibObj.get_linVelocityDamping()
  };
  GLGE.PhysicsAbstract.prototype.setRotationalVelocityDamping = function(v) {
    this.jigLibObj.set_rotVelocityDamping(v);
    return this
  };
  GLGE.PhysicsAbstract.prototype.clearForces = function() {
    this.jigLibObj.clearForces();
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.FOG_NONE = 1;
  GLGE.FOG_LINEAR = 2;
  GLGE.FOG_QUADRATIC = 3;
  GLGE.FOG_SKYLINEAR = 4;
  GLGE.FOG_SKYQUADRATIC = 5;
  GLGE.Scene = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    GLGE.Group.call(this);
    this.children = [];
    this.camera = new GLGE.Camera;
    this.backgroundColor = {r:1, g:1, b:1, a:1};
    this.ambientColor = {r:0, g:0, b:0};
    this.fogColor = {r:0.5, g:0.5, b:0.5};
    this.passes = []
  };
  GLGE.augment(GLGE.Group, GLGE.Scene);
  GLGE.Scene.prototype.camera = null;
  GLGE.Scene.prototype.className = "Scene";
  GLGE.Scene.prototype.renderer = null;
  GLGE.Scene.prototype.backgroundColor = null;
  GLGE.Scene.prototype.filter = null;
  GLGE.Scene.prototype.fogColor = null;
  GLGE.Scene.prototype.ambientColor = null;
  GLGE.Scene.prototype.fogNear = 10;
  GLGE.Scene.prototype.fogFar = 80;
  GLGE.Scene.prototype.fogType = GLGE.FOG_NONE;
  GLGE.Scene.prototype.passes = null;
  GLGE.Scene.prototype.culling = true;
  GLGE.Scene.prototype.getFogType = function() {
    return this.fogType
  };
  GLGE.Scene.prototype.setFogType = function(type) {
    this.fogType = type;
    return this
  };
  GLGE.Scene.prototype.getFogFar = function() {
    return this.fogFar
  };
  GLGE.Scene.prototype.setFogFar = function(dist) {
    this.fogFar = dist;
    return this
  };
  GLGE.Scene.prototype.getFogNear = function() {
    return this.fogNear
  };
  GLGE.Scene.prototype.setFogNear = function(dist) {
    this.fogNear = dist;
    return this
  };
  GLGE.Scene.prototype.getFogColor = function() {
    return this.fogColor
  };
  GLGE.Scene.prototype.setFogColor = function(color) {
    color = GLGE.colorParse(color);
    this.fogColor = {r:color.r, g:color.g, b:color.b};
    return this
  };
  GLGE.Scene.prototype.getBackgroundColor = function() {
    return this.backgroundColor
  };
  GLGE.Scene.prototype.setBackgroundColor = function(color) {
    color = GLGE.colorParse(color);
    this.backgroundColor = {r:color.r, g:color.g, b:color.b, a:color.a};
    return this
  };
  GLGE.Scene.prototype.getAmbientColor = function() {
    return this.ambientColor
  };
  GLGE.Scene.prototype.setAmbientColor = function(color) {
    color = GLGE.colorParse(color);
    this.ambientColor = {r:color.r, g:color.g, b:color.b};
    if(this.renderer) {
      this.renderer.gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, 1)
    }
    return this
  };
  GLGE.Scene.prototype.setAmbientColorR = function(value) {
    this.ambientColor.r = value;
    return this
  };
  GLGE.Scene.prototype.setAmbientColorG = function(value) {
    this.ambientColor.g = value;
    return this
  };
  GLGE.Scene.prototype.setAmbientColorB = function(value) {
    this.ambientColor.b = value;
    return this
  };
  GLGE.Scene.prototype.setCamera = function(camera) {
    if(typeof camera == "string") {
      camera = GLGE.Assets.get(camera)
    }
    this.camera = camera;
    return this
  };
  GLGE.Scene.prototype.getCamera = function() {
    return this.camera
  };
  GLGE.Scene.prototype.setCull = function(cull) {
    this.culling = cull;
    return this
  };
  GLGE.Scene.prototype.getCull = function() {
    return this.culling
  };
  GLGE.Scene.prototype.GLInit = function(gl) {
    this.gl = gl;
    gl.lights = this.getLights();
    this.camera.setAspect(this.renderer.canvas.width / this.renderer.canvas.height);
    this.renderer.gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, 1);
    for(var i = 0;i < this.children;i++) {
      if(this.children[i].GLInit) {
        children[i].GLInit(gl)
      }
    }
  };
  GLGE.Scene.prototype.GLDestroy = function(gl) {
  };
  GLGE.Scene.sortFunc = function(a, b) {
    return a.zdepth - b.zdepth
  };
  GLGE.Scene.prototype.zSort = function(gl, objects) {
    var cameraMatrix = gl.scene.camera.getViewMatrix();
    var transMatrix;
    for(var i = 0;i < objects.length;i++) {
      if(objects[i].object.getBoundingVolume) {
        var center = objects[i].object.getBoundingVolume().getCenter()
      }else {
        var matrix = objects[i].object.getModelMatrix();
        var center = [matrix[3], matrix[7], matrix[11]]
      }
      objects[i].zdepth = center[0] * cameraMatrix[8] + center[1] * cameraMatrix[9] + center[2] * cameraMatrix[10] + cameraMatrix[11]
    }
    objects.sort(GLGE.Scene.sortFunc);
    return objects
  };
  GLGE.Scene.prototype.setFilter2d = function(value) {
    this.filter = value;
    return this
  };
  GLGE.Scene.prototype.getFilter2d = function(filter) {
    return this.filter
  };
  GLGE.Scene.prototype.setSkyFilter = function(value) {
    this.skyfilter = value;
    return this
  };
  GLGE.Scene.prototype.getSkyFilter = function(filter) {
    return this.skyfilter
  };
  GLGE.Scene.prototype.getFrameBuffer = function(gl) {
    if(this.filter) {
      return this.filter.getFrameBuffer(gl)
    }
    return null
  };
  GLGE.Scene.prototype.objectsInViewFrustum = function(renderObjects, cvp) {
    var obj;
    var returnObjects = [];
    var planes = GLGE.cameraViewProjectionToPlanes(cvp);
    for(var i = 0;i < renderObjects.length;i++) {
      obj = renderObjects[i];
      if(obj.getBoundingVolume && obj.cull) {
        var boundingVolume = obj.getBoundingVolume();
        var center = boundingVolume.getCenter();
        var radius = boundingVolume.getSphereRadius();
        if(GLGE.sphereInFrustumPlanes([center[0], center[1], center[2], radius], planes)) {
          var points = boundingVolume.getCornerPoints();
          if(GLGE.pointsInFrustumPlanes(points, planes)) {
            returnObjects.push(obj);
            if(obj.culled) {
              obj.fireEvent("willRender", {})
            }
            obj.culled = false
          }else {
            if(!obj.culled) {
              obj.fireEvent("willCull", {})
            }
            obj.culled = true
          }
        }else {
          if(!obj.culled) {
            obj.fireEvent("willCull", {})
          }
          obj.culled = true
        }
      }else {
        returnObjects.push(obj)
      }
    }
    return returnObjects
  };
  GLGE.Scene.prototype.unfoldRenderObject = function(renderObjects) {
    var returnObjects = [];
    for(var i = 0;i < renderObjects.length;i++) {
      var renderObject = renderObjects[i];
      if(renderObject.getMultiMaterials) {
        var multiMaterials = renderObject.getMultiMaterials();
        for(var j = 0;j < multiMaterials.length;j++) {
          var mat = multiMaterials[j].getMaterial();
          var mesh = multiMaterials[j].getMesh();
          if(!mat.meshIdx) {
            mat.matIdx = j
          }
          if(!mat.meshIdx) {
            mat.meshIdx = j
          }
          returnObjects.push({object:renderObject, multiMaterial:j})
        }
      }else {
        returnObjects.push({object:renderObject, multiMaterial:0})
      }
    }
    return returnObjects
  };
  GLGE.Scene.prototype.stateSort = function(a, b) {
    if(!a.object.GLShaderProgram) {
      return 1
    }
    if(!b.object.GLShaderProgram) {
      return-1
    }
    var aidx = a.object.GLShaderProgram.progIdx;
    var bidx = b.object.GLShaderProgram.progIdx;
    if(aidx > bidx) {
      return 1
    }else {
      if(aidx < bidx) {
        return-1
      }else {
        if(!a.object.multimaterials || !b.object.multimaterials) {
          return-1
        }
        var aidx = a.object.multimaterials[a.multiMaterial].getMaterial().matIdx;
        var bidx = b.object.multimaterials[b.multiMaterial].getMaterial().matIdx;
        if(aidx > bidx) {
          return 1
        }else {
          if(aidx < bidx) {
            return-1
          }else {
            var amesh = a.object.multimaterials[a.multiMaterial].getMesh();
            var bmesh = a.object.multimaterials[a.multiMaterial].getMesh();
            if(!amesh) {
              return-1
            }
            if(!bmesh) {
              return 1
            }
            var aidx = amesh.meshIdx;
            var bidx = bmesh.meshIdx;
            if(aidx > bidx) {
              return 1
            }else {
              if(aidx < bidx) {
                return-1
              }else {
                return 0
              }
            }
          }
        }
      }
    }
  };
  GLGE.Scene.prototype.createSkyBuffer = function(gl) {
    this.skyTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.skyTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, this.renderer.canvas.width, this.renderer.canvas.height, 0, gl.RGB, gl.UNSIGNED_BYTE, null)
  };
  GLGE.Scene.prototype.render = function(gl) {
    if(this.camera.lookAt) {
      this.camera.Lookat(this.camera.lookAt)
    }
    this.animate();
    gl.lights = this.getLights();
    var lights = gl.lights;
    gl.scene = this;
    this.lastMaterial = null;
    gl.disable(gl.BLEND);
    this.framebuffer = this.getFrameBuffer(gl);
    var renderObjects = this.getObjects();
    var cvp = this.camera.getViewProjection();
    if(this.culling) {
      var cvp = this.camera.getViewProjection();
      renderObjects = this.objectsInViewFrustum(renderObjects, cvp)
    }
    renderObjects = this.unfoldRenderObject(renderObjects);
    renderObjects = renderObjects.sort(this.stateSort);
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].castShadows) {
        if(!lights[i].gl) {
          lights[i].GLInit(gl)
        }
        var cameraMatrix = this.camera.matrix;
        var cameraPMatrix = this.camera.getProjectionMatrix();
        var projectedDistance = 0;
        if(lights[i].getType() == GLGE.L_DIR) {
          var mat = lights[i].getModelMatrix();
          var cmat = GLGE.inverseMat4(cameraMatrix);
          mat[3] = mat[2] * lights[i].distance / 2 + cmat[3];
          mat[7] = mat[6] * lights[i].distance / 2 + cmat[7];
          mat[11] = mat[10] * lights[i].distance / 2 + cmat[11];
          lights[i].matrix = mat;
          var tvec = GLGE.mulMat4Vec4(cameraPMatrix, [0, 0, lights[i].distance, 1]);
          projectedDistance = tvec[3] / tvec[2]
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, lights[i].frameBuffer);
        if(!lights[i].s_cache) {
          lights[i].s_cache = {}
        }
        lights[i].s_cache.imvmatrix = GLGE.inverseMat4(lights[i].getModelMatrix());
        lights[i].s_cache.mvmatrix = lights[i].getModelMatrix();
        lights[i].s_cache.pmatrix = lights[i].getPMatrix(cvp, lights[i].s_cache.imvmatrix, projectedDistance, this.camera.far / 2);
        lights[i].s_cache.smatrix = GLGE.mulMat4(lights[i].s_cache.pmatrix, lights[i].s_cache.imvmatrix);
        lights[i].shadowRendered = false;
        if(lights[i].getType() == GLGE.L_DIR) {
          var levels = lights[i].getCascadeLevels()
        }else {
          levels = 1
        }
        gl.viewport(0, 0, parseFloat(lights[i].bufferWidth), parseFloat(lights[i].bufferHeight));
        gl.clearDepth(1);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var height = parseFloat(lights[i].bufferHeight) / levels | 0;
        var width = parseFloat(lights[i].bufferWidth);
        for(var l = 0;l < levels;l++) {
          gl.viewport(0, l * height, width, height);
          this.camera.setProjectionMatrix(lights[i].s_cache.pmatrix);
          this.camera.matrix = lights[i].s_cache.imvmatrix;
          for(var n = 0;n < renderObjects.length;n++) {
            if(lights[i].getType() == GLGE.L_SPOT) {
              renderObjects[n].object.GLRender(gl, GLGE.RENDER_SHADOW, n, renderObjects[n].multiMaterial, lights[i].distance)
            }else {
              renderObjects[n].object.GLRender(gl, GLGE.RENDER_DEPTH, n, renderObjects[n].multiMaterial, lights[i].distance)
            }
          }
          lights[i].s_cache.pmatrix[0] *= 2;
          lights[i].s_cache.pmatrix[5] *= 2
        }
        lights[i].s_cache.pmatrix[0] /= 2;
        lights[i].s_cache.pmatrix[5] /= 2;
        lights[i].s_cache.smatrix = GLGE.mulMat4(lights[i].s_cache.pmatrix, lights[i].s_cache.imvmatrix);
        this.camera.matrix = cameraMatrix;
        this.camera.setProjectionMatrix(cameraPMatrix)
      }
    }
    if(this.culling) {
      var cvp = this.camera.getViewProjection();
      renderObjects = this.objectsInViewFrustum(renderObjects, cvp)
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
    if(this.camera.animation) {
      this.camera.animate()
    }
    this.getPasses(gl, renderObjects);
    var cameraMatrix = this.camera.matrix;
    var cameraPMatrix = this.camera.getProjectionMatrix();
    this.allowPasses = false;
    while(this.passes.length > 0) {
      var pass = this.passes.pop();
      gl.bindFramebuffer(gl.FRAMEBUFFER, pass.frameBuffer);
      this.camera.matrix = pass.cameraMatrix;
      this.camera.setProjectionMatrix(pass.projectionMatrix);
      this.renderPass(gl, renderObjects, 0, 0, pass.width, pass.height, GLGE.RENDER_DEFAULT, pass.self)
    }
    this.camera.matrix = cameraMatrix;
    this.camera.setProjectionMatrix(cameraPMatrix);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
    this.renderPass(gl, renderObjects, this.renderer.getViewportOffsetX(), this.renderer.getViewportOffsetY(), this.renderer.getViewportWidth(), this.renderer.getViewportHeight());
    this.applyFilter(gl, renderObjects, null);
    this.allowPasses = true
  };
  GLGE.Scene.prototype.getPasses = function(gl, renderObjects) {
    for(var i = 0;i < renderObjects.length;i++) {
      renderObjects[i].object.GLRender(gl, GLGE.RENDER_NULL, 0, renderObjects[i].multiMaterial)
    }
  };
  GLGE.Scene.prototype.renderPass = function(gl, renderObjects, offsetx, offsety, width, height, type, self) {
    gl.clearDepth(1);
    gl.depthFunc(gl.LEQUAL);
    gl.viewport(offsetx, offsety, width, height);
    gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
    if(!type) {
      gl.scissor(offsetx, offsety, width, height);
      gl.enable(gl.SCISSOR_TEST);
      this.renderer.GLClear();
      gl.disable(gl.SCISSOR_TEST)
    }else {
      gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT)
    }
    if(!type) {
      type = GLGE.RENDER_DEFAULT
    }
    if(this.skyfilter && type == GLGE.RENDER_DEFAULT) {
      this.skyfilter.GLRender(gl);
      gl.clear(gl.DEPTH_BUFFER_BIT);
      if(this.skyfilter && this.fogType == GLGE.FOG_SKYQUADRATIC || this.fogType == GLGE.FOG_SKYLINEAR) {
        if(!this.skyTexture) {
          this.createSkyBuffer(gl)
        }
        gl.bindTexture(gl.TEXTURE_2D, this.skyTexture);
        gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGB, 0, 0, width, height, 0)
      }
    }
    var transObjects = [];
    gl.disable(gl.BLEND);
    for(var i = 0;i < renderObjects.length;i++) {
      if(!renderObjects[i].object.zTrans && renderObjects[i].object != self) {
        renderObjects[i].object.GLRender(gl, type, 0, renderObjects[i].multiMaterial)
      }else {
        if(renderObjects[i].object != self) {
          transObjects.push(renderObjects[i])
        }
      }
    }
    gl.enable(gl.BLEND);
    transObjects = this.zSort(gl, transObjects);
    for(var i = 0;i < transObjects.length;i++) {
      if(transObjects[i].object.blending) {
        if(transObjects[i].object.blending.length = 4) {
          gl.blendFuncSeparate(gl[transObjects[i].object.blending[0]], gl[transObjects[i].object.blending[1]], gl[transObjects[i].object.blending[2]], gl[transObjects[i].object.blending[3]])
        }else {
          gl.blendFunc(gl[transObjects[i].object.blending[0]], gl[transObjects[i].object.blending[1]])
        }
      }
      if(transObjects[i].object.depthTest === false) {
        gl.disable(this.gl.DEPTH_TEST)
      }else {
        gl.enable(this.gl.DEPTH_TEST)
      }
      if(renderObjects[i] != self) {
        transObjects[i].object.GLRender(gl, type, 0, transObjects[i].multiMaterial)
      }
    }
  };
  GLGE.Scene.prototype.applyFilter = function(gl, renderObject, framebuffer) {
    if(this.filter && this.filter.renderDepth) {
      gl.clearDepth(1);
      gl.depthFunc(gl.LEQUAL);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.filter.getDepthBuffer(gl));
      this.renderPass(gl, renderObject, 0, 0, this.filter.getDepthBufferWidth(), this.filter.getDepthBufferHeight(), GLGE.RENDER_SHADOW)
    }
    if(this.filter && this.filter.renderEmit) {
      gl.clearDepth(1);
      gl.depthFunc(gl.LEQUAL);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.filter.getEmitBuffer(gl));
      this.renderPass(gl, renderObject, 0, 0, this.filter.getEmitBufferWidth(), this.filter.getEmitBufferHeight(), GLGE.RENDER_EMIT)
    }
    if(this.filter && this.filter.renderNormal) {
      gl.clearDepth(1);
      gl.depthFunc(gl.LEQUAL);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.filter.getNormalBuffer(gl));
      this.renderPass(gl, renderObject, 0, 0, this.filter.getNormalBufferWidth(), this.filter.getNormalBufferHeight(), GLGE.RENDER_NORMAL)
    }
    if(this.filter) {
      this.filter.GLRender(gl, framebuffer)
    }
  };
  GLGE.Scene.prototype.addRenderPass = function(frameBuffer, cameraMatrix, projectionMatrix, width, height, self) {
    if(this.allowPasses) {
      this.passes.push({frameBuffer:frameBuffer, cameraMatrix:cameraMatrix, projectionMatrix:projectionMatrix, height:height, width:width, self:self})
    }
    return this
  };
  GLGE.Scene.prototype.ray = function(origin, direction) {
    var gl = this.renderer.gl;
    var origmatrix = this.camera.matrix;
    var origpmatrix = this.camera.pMatrix;
    this.camera.matrix = GLGE.inverseMat4(GLGE.Mat4([direction[2], direction[1], direction[0], origin[0], direction[0], direction[2], direction[1], origin[1], direction[1], direction[0], direction[2], origin[2], 0, 0, 0, 1]));
    if(!this.pickPMatrix) {
      this.pickPMatrix = GLGE.makeOrtho(-1.0E-4, 1.0E-4, -1.0E-4, 1.0E-4, this.camera.near, this.camera.far)
    }
    this.camera.pMatrix = this.pickPMatrix;
    gl.viewport(0, 0, 8, 1);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.BLEND);
    gl.scene = this;
    var objects = this.getObjects();
    for(var i = 0;i < objects.length;i++) {
      if(objects[i].pickable) {
        objects[i].GLRender(gl, GLGE.RENDER_PICK, i + 1)
      }
    }
    var data = new Uint8Array(8 * 1 * 4);
    gl.readPixels(0, 0, 8, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    var norm = [data[4] / 255, data[5] / 255, data[6] / 255];
    var normalsize = Math.sqrt(norm[0] * norm[0] + norm[1] * norm[1] + norm[2] * norm[2]) * 0.5;
    norm = [norm[0] / normalsize - 1, norm[1] / normalsize - 1, norm[2] / normalsize - 1];
    var obj = objects[data[0] + data[1] * 256 + data[2] * 65536 - 1];
    var dist = (data[10] / 255 + 0.00390625 * data[9] / 255 + 1.52587890625E-5 * data[8] / 255) * this.camera.far;
    var tex = [];
    tex[0] = data[14] / 255 + 0.00390625 * data[13] / 255 + 1.52587890625E-5 * data[12] / 255;
    tex[1] = data[18] / 255 + 0.00390625 * data[17] / 255 + 1.52587890625E-5 * data[16] / 255;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.renderer.canvas.width, this.renderer.canvas.height);
    this.camera.matrix = origmatrix;
    this.camera.pMatrix = origpmatrix;
    if(obj) {
      return{object:obj, distance:dist, coord:[origin[0] - direction[0] * dist, origin[1] - direction[1] * dist, origin[2] - direction[2] * dist], normal:norm, texture:tex}
    }
    return null
  };
  GLGE.Scene.prototype.pick = function(x, y) {
    var ray = this.makeRay(x, y);
    if(!ray) {
      return null
    }
    return this.ray(ray.origin, ray.coord)
  };
  GLGE.Scene.prototype.makeRay = function(x, y) {
    if(!this.camera) {
      GLGE.error("No camera set for picking");
      return null
    }else {
      if(this.camera.matrix && this.camera.pMatrix) {
        var canvas = this.renderer.canvas;
        x = x / canvas.offsetWidth * canvas.width;
        y = y / canvas.offsetHeight * canvas.height;
        var height = this.renderer.getViewportHeight();
        var width = this.renderer.getViewportWidth();
        var offsetx = this.renderer.getViewportOffsetX();
        var offsety = this.renderer.getViewportHeight() - this.renderer.canvas.height + this.renderer.getViewportOffsetY();
        var xcoord = ((x - offsetx) / width - 0.5) * 2;
        var ycoord = -((y + offsety) / height - 0.5) * 2;
        var invViewProj = GLGE.mulMat4(GLGE.inverseMat4(this.camera.matrix), GLGE.inverseMat4(this.camera.pMatrix));
        var origin = GLGE.mulMat4Vec4(invViewProj, [xcoord, ycoord, -1, 1]);
        origin = [origin[0] / origin[3], origin[1] / origin[3], origin[2] / origin[3]];
        var coord = GLGE.mulMat4Vec4(invViewProj, [xcoord, ycoord, 1, 1]);
        coord = [-(coord[0] / coord[3] - origin[0]), -(coord[1] / coord[3] - origin[1]), -(coord[2] / coord[3] - origin[2])];
        coord = GLGE.toUnitVec3(coord);
        return{origin:origin, coord:coord}
      }else {
        return null
      }
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.Light = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.color = {r:1, g:1, b:1}
  };
  GLGE.augment(GLGE.Placeable, GLGE.Light);
  GLGE.augment(GLGE.Animatable, GLGE.Light);
  GLGE.augment(GLGE.QuickNotation, GLGE.Light);
  GLGE.augment(GLGE.JSONLoader, GLGE.Light);
  GLGE.Light.prototype.className = "Light";
  GLGE.L_POINT = 1;
  GLGE.L_DIR = 2;
  GLGE.L_SPOT = 3;
  GLGE.L_OFF = 4;
  GLGE.Light.prototype.constantAttenuation = 1;
  GLGE.Light.prototype.linearAttenuation = 0.002;
  GLGE.Light.prototype.quadraticAttenuation = 8.0E-4;
  GLGE.Light.prototype.spotCosCutOff = 0.95;
  GLGE.Light.prototype.spotPMatrix = null;
  GLGE.Light.prototype.spotExponent = 10;
  GLGE.Light.prototype.color = null;
  GLGE.Light.prototype.diffuse = true;
  GLGE.Light.prototype.specular = true;
  GLGE.Light.prototype.samples = 0;
  GLGE.Light.prototype.softness = 0.01;
  GLGE.Light.prototype.type = GLGE.L_POINT;
  GLGE.Light.prototype.frameBuffer = null;
  GLGE.Light.prototype.renderBuffer = null;
  GLGE.Light.prototype.texture = null;
  GLGE.Light.prototype.bufferHeight = 256;
  GLGE.Light.prototype.bufferWidth = 256;
  GLGE.Light.prototype.shadowBias = 0.002;
  GLGE.Light.prototype.castShadows = false;
  GLGE.Light.prototype.cascadeLevels = 3;
  GLGE.Light.prototype.distance = 500;
  GLGE.Light.prototype.getCascadeLevels = function() {
    return this.cascadeLevels
  };
  GLGE.Light.prototype.setCascadeLevels = function(cascadeLevels) {
    this.cascadeLevels = +cascadeLevels;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getPMatrix = function(cvp, invlight, projectedDistance, distance) {
    if(!this.spotPMatrix) {
      var far;
      if(this.scene && this.scene.camera) {
        far = this.scene.camera.far
      }else {
        far = 1E3
      }
      if(this.type == GLGE.L_SPOT) {
        this.spotPMatrix = GLGE.makePerspective(Math.acos(this.spotCosCutOff) / 3.14159 * 360, 1, 0.1, far)
      }
    }
    if(this.type == GLGE.L_DIR) {
      this.spotPMatrix = GLGE.getDirLightProjection(cvp, invlight, projectedDistance, distance)
    }
    return this.spotPMatrix
  };
  GLGE.Light.prototype.setDistance = function(value) {
    this.distance = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getDistance = function() {
    return this.distance
  };
  GLGE.Light.prototype.setNegativeShadow = function(value) {
    this.negativeShadow = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getNegative = function() {
    return this.negativeShadow
  };
  GLGE.Light.prototype.setCastShadows = function(value) {
    this.castShadows = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getCastShadows = function() {
    return this.castShadows;
    return this
  };
  GLGE.Light.prototype.setShadowBias = function(value) {
    this.shadowBias = value;
    return this
  };
  GLGE.Light.prototype.getShadowBias = function() {
    return this.shadowBias
  };
  GLGE.Light.prototype.setShadowSamples = function(value) {
    this.samples = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getShadowSamples = function() {
    return this.samples
  };
  GLGE.Light.prototype.setShadowSoftness = function(value) {
    this.softness = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.getShadowSamples = function() {
    return this.softness
  };
  GLGE.Light.prototype.setBufferWidth = function(value) {
    this.bufferWidth = value;
    return this
  };
  GLGE.Light.prototype.getBufferHeight = function() {
    return this.bufferHeight
  };
  GLGE.Light.prototype.setBufferHeight = function(value) {
    this.bufferHeight = value;
    return this
  };
  GLGE.Light.prototype.getBufferWidth = function() {
    return this.bufferWidth
  };
  GLGE.Light.prototype.setSpotCosCutOff = function(value) {
    this.spotPMatrix = null;
    this.spotCosCutOff = value;
    return this
  };
  GLGE.Light.prototype.getSpotCosCutOff = function() {
    return this.spotCosCutOff
  };
  GLGE.Light.prototype.setSpotExponent = function(value) {
    this.spotExponent = value;
    return this
  };
  GLGE.Light.prototype.getSpotExponent = function() {
    return this.spotExponent
  };
  GLGE.Light.prototype.getAttenuation = function(constant, linear, quadratic) {
    var attenuation = {};
    attenuation.constant = this.constantAttenuation;
    attenuation.linear = this.linearAttenuation;
    attenuation.quadratic = this.quadraticAttenuation;
    return attenuation
  };
  GLGE.Light.prototype.setAttenuation = function(constant, linear, quadratic) {
    this.constantAttenuation = constant;
    this.linearAttenuation = linear;
    this.quadraticAttenuation = quadratic;
    return this
  };
  GLGE.Light.prototype.setAttenuationConstant = function(value) {
    this.constantAttenuation = value;
    return this
  };
  GLGE.Light.prototype.setAttenuationLinear = function(value) {
    this.linearAttenuation = value;
    return this
  };
  GLGE.Light.prototype.setAttenuationQuadratic = function(value) {
    this.quadraticAttenuation = value;
    return this
  };
  GLGE.Light.prototype.setColor = function(color) {
    color = GLGE.colorParse(color);
    this.color = {r:color.r, g:color.g, b:color.b};
    return this
  };
  GLGE.Light.prototype.setColorR = function(value) {
    this.color.r = value;
    return this
  };
  GLGE.Light.prototype.setColorG = function(value) {
    this.color.g = value;
    return this
  };
  GLGE.Light.prototype.setColorB = function(value) {
    this.color.b = value;
    return this
  };
  GLGE.Light.prototype.getColor = function() {
    return this.color
  };
  GLGE.Light.prototype.getType = function() {
    return this.type
  };
  GLGE.Light.prototype.setType = function(type) {
    this.type = type;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Light.prototype.enableLight = function() {
    if(this.type == GLGE.L_OFF && this.old_type !== undefined) {
      this.setType(this.old_type);
      delete this.old_type
    }
  };
  GLGE.Light.prototype.disableLight = function() {
    if(this.type != GLGE.L_OFF) {
      this.old_type = this.type;
      this.setType(GLGE.L_OFF)
    }
  };
  GLGE.Light.prototype.GLInit = function(gl) {
    this.gl = gl;
    if((this.type == GLGE.L_SPOT || this.type == GLGE.L_DIR) && !this.texture) {
      this.createSpotBuffer(gl)
    }
  };
  GLGE.Light.prototype.createSpotBuffer = function(gl) {
    this.frameBuffer = gl.createFramebuffer();
    this.renderBuffer = gl.createRenderbuffer();
    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.bufferWidth, this.bufferHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
    }catch(e) {
      GLGE.error("incompatible texture creation method");
      var width = parseFloat(this.bufferWidth);
      var height = parseFloat(this.bufferHeight);
      var tex = new Uint8Array(width * height * 4);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, tex)
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.bufferWidth, this.bufferHeight);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null)
  }
})(GLGE);
(function(GLGE) {
  GLGE.C_PERSPECTIVE = 1;
  GLGE.C_ORTHO = 2;
  GLGE.Camera = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.Placeable, GLGE.Camera);
  GLGE.augment(GLGE.Animatable, GLGE.Camera);
  GLGE.augment(GLGE.QuickNotation, GLGE.Camera);
  GLGE.augment(GLGE.JSONLoader, GLGE.Camera);
  GLGE.Camera.prototype.className = "Camera";
  GLGE.Camera.prototype.fovy = 35;
  GLGE.Camera.prototype.aspect = 1;
  GLGE.Camera.prototype.near = 0.1;
  GLGE.Camera.prototype.far = 1E3;
  GLGE.Camera.prototype.orthoscale = 5;
  GLGE.Camera.prototype.type = GLGE.C_PERSPECTIVE;
  GLGE.Camera.prototype.pMatrix = null;
  GLGE.Camera.prototype.getOrthoScale = function() {
    if(this.type == GLGE.C_ORTHO) {
      return this.orthoscale
    }else {
      GLGE.error("You may only get a scale for a orthographic camera");
      return 1
    }
  };
  GLGE.Camera.prototype.setOrthoScale = function(scale) {
    if(this.type == GLGE.C_ORTHO) {
      this.orthoscale = scale;
      this.pMatrix = null
    }else {
      GLGE.error("You may only set a scale for a orthographic camera")
    }
    return this
  };
  GLGE.Camera.prototype.getFar = function() {
    return this.far
  };
  GLGE.Camera.prototype.setFar = function(distance) {
    this.pMatrix = null;
    this.far = +distance;
    return this
  };
  GLGE.Camera.prototype.getNear = function() {
    return this.near
  };
  GLGE.Camera.prototype.setNear = function(distance) {
    this.pMatrix = null;
    this.near = +distance;
    return this
  };
  GLGE.Camera.prototype.getType = function() {
    this.pMatrix = null;
    return this.type
  };
  GLGE.Camera.prototype.setType = function(type) {
    if(type == GLGE.C_PERSPECTIVE || type == GLGE.C_ORTHO) {
      this.type = type;
      this.pMatrix = null
    }else {
      GLGE.error("unsuported camera type")
    }
    return this
  };
  GLGE.Camera.prototype.getFovY = function() {
    if(this.type == GLGE.C_PERSPECTIVE) {
      return this.fovy
    }else {
      GLGE.error("You may only get a yfov for a perspective camera");
      return 1
    }
  };
  GLGE.Camera.prototype.setFovY = function(fovy) {
    if(this.type == GLGE.C_PERSPECTIVE) {
      this.fovy = +fovy;
      this.ymax = null;
      this.pMatrix = null
    }else {
      GLGE.error("You may only set a yfov for a perspective camera")
    }
    return this
  };
  GLGE.Camera.prototype.getAspect = function() {
    if(this.type == GLGE.C_PERSPECTIVE || this.type == GLGE.C_ORTHO) {
      return this.aspect
    }else {
      GLGE.error("You may only set a aspect for a perspective or orthographic camera");
      return 1
    }
  };
  GLGE.Camera.prototype.setAspect = function(aspect) {
    if(this.type == GLGE.C_PERSPECTIVE || this.type == GLGE.C_ORTHO) {
      this.aspect = +aspect;
      this.pMatrix = null
    }else {
      GLGE.error("You may only set a aspect for a perspective or orthographic camera")
    }
    return this
  };
  GLGE.Camera.prototype.getProjectionMatrix = function() {
    if(!this.pMatrix) {
      switch(this.type) {
        case GLGE.C_PERSPECTIVE:
          this.pMatrix = GLGE.makePerspective(this.fovy, this.aspect, this.near, this.far);
          break;
        case GLGE.C_ORTHO:
          this.pMatrix = GLGE.makeOrtho(-this.orthoscale * this.aspect, this.orthoscale * this.aspect, -this.orthoscale, this.orthoscale, this.near, this.far);
          break
      }
    }
    return this.pMatrix
  };
  GLGE.Camera.prototype.setProjectionMatrix = function(projection) {
    this.pMatrix = projection;
    return this
  };
  GLGE.Camera.prototype.updateMatrix = function() {
    var position = this.getPosition();
    var vMatrix = GLGE.translateMatrix(position.x, position.y, position.z);
    vMatrix = GLGE.mulMat4(vMatrix, this.getRotMatrix());
    if(this.parent) {
      vMatrix = GLGE.mulMat4(this.parent.getModelMatrix(), vMatrix)
    }
    this.location = [vMatrix[3], vMatrix[7], vMatrix[11]];
    this.matrix = GLGE.inverseMat4(vMatrix)
  };
  GLGE.Camera.prototype.getViewMatrix = function() {
    if(!this.matrix || !this.rotmatrix) {
      this.updateMatrix()
    }
    return this.matrix
  };
  GLGE.Camera.prototype.getViewProjection = function() {
    var projectionMatrix = this.getProjectionMatrix();
    var viewMatrix = this.getViewMatrix();
    if(projectionMatrix != this.vpProjectionMatrix || viewMatrix != this.vpViewMatrix) {
      this.cameraViewProjection = GLGE.mulMat4(projectionMatrix, viewMatrix);
      this.vpProjectionMatrix = projectionMatrix;
      this.vpViewMatrix = viewMatrix
    }
    return this.cameraViewProjection
  }
})(GLGE);
(function(GLGE) {
  GLGE.Renderer = function(canvas, error, props) {
    this.viewport = [];
    this.canvas = canvas;
    if(!props) {
      props = {alpha:true, depth:true, stencil:true, antialias:true, premultipliedAlpha:true}
    }
    try {
      this.gl = canvas.getContext("experimental-webgl", props)
    }catch(e) {
    }
    try {
      if(!this.gl) {
        this.gl = canvas.getContext("webgl", props)
      }
    }catch(e) {
    }
    if(!this.gl) {
      console.log("GLGE err:", typeof globalNoWebGLError == "undefined");
      if(!error && typeof globalNoWebGLError == "undefined") {
        var div = document.createElement("div");
        div.setAttribute("style", "position: absolute; top: 10px; left: 10px; font-family: sans-serif; font-size: 14px; padding: 10px;background-color: #fcffcb;color: #800; width: 200px; border:2px solid #f00");
        div.innerHTML = "WebGL compatible Browser Required(Firefox 4 or Chrome 9 and up) or you may need to update your graphics card driver.";
        document.getElementsByTagName("body")[0].appendChild(div);
        throw"cannot create webgl context";
      }else {
        error();
        throw"cannot create webgl context";
      }
    }
    try {
      this.gl.canvas = canvas
    }catch(e) {
    }
    if(!this.gl.getProgramParameter) {
      this.gl.getProgramParameter = this.gl.getProgrami
    }
    if(!this.gl.getShaderParameter) {
      this.gl.getShaderParameter = this.gl.getShaderi
    }
    this.gl.uniformMatrix4fvX = this.gl.uniformMatrix4fv;
    this.gl.uniformMatrix4fv = function(uniform, transpose, array) {
      if(!transpose) {
        this.uniformMatrix4fvX(uniform, false, array)
      }else {
        GLGE.mat4gl(GLGE.transposeMat4(array), array);
        this.uniformMatrix4fvX(uniform, false, array)
      }
    };
    var gl = this.gl;
    this.gl.clearDepth(1);
    this.gl.clearStencil(0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ZERO, this.gl.ONE)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.Renderer);
  GLGE.Renderer.prototype.gl = null;
  GLGE.Renderer.prototype.scene = null;
  GLGE.C_STENCIL = 1;
  GLGE.C_DEPTH = 2;
  GLGE.C_COLOR = 4;
  GLGE.C_ALL = 7;
  GLGE.Renderer.prototype.clearType = GLGE.C_ALL;
  GLGE.Renderer.prototype.setViewportWidth = function(width) {
    this.viewport[0] = width;
    return this
  };
  GLGE.Renderer.prototype.setViewportHeight = function(height) {
    this.viewport[1] = height;
    return this
  };
  GLGE.Renderer.prototype.setViewportOffsetX = function(left) {
    this.viewport[2] = left;
    return this
  };
  GLGE.Renderer.prototype.setViewportOffsetY = function(top) {
    this.viewport[3] = top;
    return this
  };
  GLGE.Renderer.prototype.clearViewport = function() {
    this.viewport = []
  };
  GLGE.Renderer.prototype.getViewportWidth = function() {
    if(this.viewport.length > 0) {
      return this.viewport[0]
    }else {
      return this.canvas.width
    }
  };
  GLGE.Renderer.prototype.getViewportHeight = function() {
    if(this.viewport.length > 0) {
      return this.viewport[1]
    }else {
      return this.canvas.height
    }
  };
  GLGE.Renderer.prototype.getViewportOffsetX = function() {
    if(this.viewport.length > 0) {
      return this.viewport[2]
    }else {
      return 0
    }
  };
  GLGE.Renderer.prototype.getViewportOffsetY = function() {
    if(this.viewport.length > 0) {
      return this.viewport[3]
    }else {
      return 0
    }
  };
  GLGE.Renderer.prototype.setClearType = function(type) {
    this.clearType = type;
    return this
  };
  GLGE.Renderer.prototype.getClearType = function() {
    return this.clearType
  };
  GLGE.Renderer.prototype.GLClear = function() {
    var gl = this.gl;
    var clearType = this.clearType;
    var clear = 0;
    if(clearType & GLGE.C_COLOR == GLGE.C_COLOR) {
      clear = clear | gl.COLOR_BUFFER_BIT
    }
    if(clearType & GLGE.C_DEPTH == GLGE.C_DEPTH) {
      clear = clear | gl.DEPTH_BUFFER_BIT
    }
    if(clearType & GLGE.C_STENCIL == GLGE.C_STENCIL) {
      clear = clear | gl.STENCIL_BUFFER_BIT
    }
    gl.clear(clear)
  };
  GLGE.Renderer.prototype.getScene = function() {
    return this.scene
  };
  GLGE.Renderer.prototype.setScene = function(scene) {
    scene.renderer = this;
    this.scene = scene;
    scene.GLInit(this.gl);
    this.render();
    scene.camera.matrix = null;
    return this
  };
  GLGE.Renderer.prototype.render = function() {
    if(this.cullFaces) {
      this.gl.enable(this.gl.CULL_FACE)
    }
    if(this.scene) {
      this.scene.render(this.gl)
    }
    if(!this.rendered && this.scene) {
      this.scene.render(this.gl);
      this.rendered = true
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.Text = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.canvas = document.createElement("canvas");
    this.color = {r:1, g:1, b:1}
  };
  GLGE.augment(GLGE.Placeable, GLGE.Text);
  GLGE.augment(GLGE.Animatable, GLGE.Text);
  GLGE.augment(GLGE.QuickNotation, GLGE.Text);
  GLGE.augment(GLGE.JSONLoader, GLGE.Text);
  GLGE.Text.prototype.className = "Text";
  GLGE.Text.prototype.zTrans = true;
  GLGE.Text.prototype.canvas = null;
  GLGE.Text.prototype.aspect = 1;
  GLGE.Text.prototype.color = null;
  GLGE.Text.prototype.text = "";
  GLGE.Text.prototype.font = "Times";
  GLGE.Text.prototype.size = 100;
  GLGE.Text.prototype.pickType = GLGE.TEXT_TEXTPICK;
  GLGE.Text.prototype.pickable = true;
  GLGE.Text.prototype.getPickType = function() {
    return this.pickType
  };
  GLGE.Text.prototype.setPickType = function(value) {
    this.pickType = value;
    return this
  };
  GLGE.Text.prototype.getFont = function() {
    return this.size
  };
  GLGE.Text.prototype.setFont = function(value) {
    this.font = value;
    if(this.gl) {
      this.updateCanvas(this.gl)
    }
    return this
  };
  GLGE.Text.prototype.getSize = function() {
    return this.size
  };
  GLGE.Text.prototype.setSize = function(value) {
    this.size = value;
    if(this.gl) {
      this.updateCanvas(this.gl)
    }
    return this
  };
  GLGE.Text.prototype.getText = function() {
    return this.text
  };
  GLGE.Text.prototype.setText = function(value) {
    this.text = value;
    if(this.gl) {
      this.updateCanvas(this.gl)
    }
    return this
  };
  GLGE.Text.prototype.setColor = function(color) {
    color = GLGE.colorParse(color);
    this.color = {r:color.r, g:color.g, b:color.b};
    return this
  };
  GLGE.Text.prototype.setColorR = function(value) {
    this.color.r = value;
    return this
  };
  GLGE.Text.prototype.setColorG = function(value) {
    this.color.g = value;
    return this
  };
  GLGE.Text.prototype.setColorB = function(value) {
    this.color.b = value;
    return this
  };
  GLGE.Text.prototype.getColor = function() {
    return this.color;
    return this
  };
  GLGE.Text.prototype.setZtransparent = function(value) {
    this.zTrans = value;
    return this
  };
  GLGE.Text.prototype.isZtransparent = function() {
    return this.zTrans
  };
  GLGE.Text.prototype.GLGenerateShader = function(gl) {
    if(this.GLShaderProgram) {
      gl.deleteProgram(this.GLShaderProgram)
    }
    var vertexStr = "";
    vertexStr += "attribute vec3 position;\n";
    vertexStr += "attribute vec2 uvcoord;\n";
    vertexStr += "varying vec2 texcoord;\n";
    vertexStr += "uniform mat4 Matrix;\n";
    vertexStr += "uniform mat4 PMatrix;\n";
    vertexStr += "varying vec4 pos;\n";
    vertexStr += "void main(void){\n";
    vertexStr += "texcoord=uvcoord;\n";
    vertexStr += "pos = Matrix * vec4(0,0,0,1.0);\n";
    vertexStr += "float scalepos = length((Matrix * vec4(position,1.0)-pos).xyz);\n";
    vertexStr += "pos.xyz+=position*scalepos/sqrt(2.0);\n";
    vertexStr += "gl_Position = PMatrix * pos;\n";
    vertexStr += "}\n";
    var fragStr = "#ifdef GL_ES\nprecision highp float;\n#endif\n";
    fragStr = fragStr + "uniform sampler2D TEXTURE;\n";
    fragStr = fragStr + "varying vec2 texcoord;\n";
    fragStr = fragStr + "varying vec4 pos;\n";
    fragStr = fragStr + "uniform float far;\n";
    fragStr = fragStr + "uniform int picktype;\n";
    fragStr = fragStr + "uniform vec3 pickcolor;\n";
    fragStr = fragStr + "uniform vec3 color;\n";
    fragStr = fragStr + "void main(void){\n";
    fragStr = fragStr + "float alpha=texture2D(TEXTURE,texcoord).a;\n";
    fragStr = fragStr + "if(picktype==" + GLGE.TEXT_BOXPICK + "){gl_FragColor = vec4(pickcolor,1.0);}";
    fragStr = fragStr + "else if(picktype==" + GLGE.TEXT_TEXTPICK + "){if(alpha<1.0) discard; gl_FragColor = vec4(pickcolor,alpha);}";
    fragStr = fragStr + "else{gl_FragColor = vec4(color.rgb*alpha,alpha);};\n";
    fragStr = fragStr + "}\n";
    this.GLFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    this.GLVertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(this.GLFragmentShader, fragStr);
    gl.compileShader(this.GLFragmentShader);
    if(!gl.getShaderParameter(this.GLFragmentShader, gl.COMPILE_STATUS)) {
      GLGE.error(gl.getShaderInfoLog(this.GLFragmentShader));
      return
    }
    gl.shaderSource(this.GLVertexShader, vertexStr);
    gl.compileShader(this.GLVertexShader);
    if(!gl.getShaderParameter(this.GLVertexShader, gl.COMPILE_STATUS)) {
      GLGE.error(gl.getShaderInfoLog(this.GLVertexShader));
      return
    }
    this.GLShaderProgram = gl.createProgram();
    gl.attachShader(this.GLShaderProgram, this.GLVertexShader);
    gl.attachShader(this.GLShaderProgram, this.GLFragmentShader);
    gl.linkProgram(this.GLShaderProgram)
  };
  GLGE.Text.prototype.GLInit = function(gl) {
    this.gl = gl;
    this.createPlane(gl);
    this.GLGenerateShader(gl);
    this.glTexture = gl.createTexture();
    this.updateCanvas(gl)
  };
  GLGE.Text.prototype.updateCanvas = function(gl) {
    var canvas = this.canvas;
    canvas.width = 1;
    canvas.height = this.size * 1.2;
    var ctx = canvas.getContext("2d");
    ctx.font = this.size + "px " + this.font;
    canvas.width = ctx.measureText(this.text).width;
    canvas.height = this.size * 1.2;
    ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = this.size + "px " + this.font;
    this.aspect = canvas.width / canvas.height;
    ctx.fillText(this.text, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
    }catch(e) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas, null)
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null)
  };
  GLGE.Text.prototype.GLRender = function(gl, renderType, pickindex) {
    if(!this.gl) {
      this.GLInit(gl)
    }
    if(renderType == GLGE.RENDER_DEFAULT || renderType == GLGE.RENDER_PICK) {
      if(this.lookAt) {
        this.Lookat(this.lookAt)
      }
      if(gl.program != this.GLShaderProgram) {
        gl.useProgram(this.GLShaderProgram);
        gl.program = this.GLShaderProgram
      }
      var attribslot;
      for(var i = 0;i < 8;i++) {
        gl.disableVertexAttribArray(i)
      }
      attribslot = GLGE.getAttribLocation(gl, this.GLShaderProgram, "position");
      gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuffer);
      gl.enableVertexAttribArray(attribslot);
      gl.vertexAttribPointer(attribslot, this.posBuffer.itemSize, gl.FLOAT, false, 0, 0);
      attribslot = GLGE.getAttribLocation(gl, this.GLShaderProgram, "uvcoord");
      gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
      gl.enableVertexAttribArray(attribslot);
      gl.vertexAttribPointer(attribslot, this.uvBuffer.itemSize, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl["TEXTURE0"]);
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.GLShaderProgram, "TEXTURE"), 0);
      if(!pickindex) {
        pickindex = 0
      }
      var b = pickindex >> 16 & 255;
      var g = pickindex >> 8 & 255;
      var r = pickindex & 255;
      GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, this.GLShaderProgram, "pickcolor"), r / 255, g / 255, b / 255);
      if(renderType == GLGE.RENDER_PICK) {
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.GLShaderProgram, "picktype"), this.pickType)
      }else {
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.GLShaderProgram, "picktype"), 0)
      }
      if(!this.GLShaderProgram.glarrays) {
        this.GLShaderProgram.glarrays = {}
      }
      var scalefactor = this.size / 100;
      var mMatrix = GLGE.mulMat4(gl.scene.camera.getViewMatrix(), GLGE.mulMat4(this.getModelMatrix(), GLGE.scaleMatrix(this.aspect * scalefactor, scalefactor, scalefactor)));
      var mUniform = GLGE.getUniformLocation(gl, this.GLShaderProgram, "Matrix");
      if(!this.GLShaderProgram.glarrays.mMatrix) {
        this.GLShaderProgram.glarrays.mMatrix = new Float32Array(mMatrix)
      }else {
        GLGE.mat4gl(mMatrix, this.GLShaderProgram.glarrays.mMatrix)
      }
      GLGE.setUniformMatrix(gl, "Matrix4fv", mUniform, true, this.GLShaderProgram.glarrays.mMatrix);
      var mUniform = GLGE.getUniformLocation(gl, this.GLShaderProgram, "PMatrix");
      if(!this.GLShaderProgram.glarrays.pMatrix) {
        this.GLShaderProgram.glarrays.pMatrix = new Float32Array(gl.scene.camera.getProjectionMatrix())
      }else {
        GLGE.mat4gl(gl.scene.camera.getProjectionMatrix(), this.GLShaderProgram.glarrays.pMatrix)
      }
      GLGE.setUniformMatrix(gl, "Matrix4fv", mUniform, true, this.GLShaderProgram.glarrays.pMatrix);
      var farUniform = GLGE.getUniformLocation(gl, this.GLShaderProgram, "far");
      GLGE.setUniform(gl, "1f", farUniform, gl.scene.camera.getFar());
      GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, this.GLShaderProgram, "color"), this.color.r, this.color.g, this.color.b);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.GLfaces);
      gl.drawElements(gl.TRIANGLES, this.GLfaces.numItems, gl.UNSIGNED_SHORT, 0);
      gl.scene.lastMaterial = null
    }
  };
  GLGE.Text.prototype.createPlane = function(gl) {
    if(!this.posBuffer) {
      this.posBuffer = gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, 0, 1, 1, 0, 1, -1, 0, -1, -1, 0]), gl.STATIC_DRAW);
    this.posBuffer.itemSize = 3;
    this.posBuffer.numItems = 4;
    if(!this.uvBuffer) {
      this.uvBuffer = gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);
    this.uvBuffer.itemSize = 2;
    this.uvBuffer.numItems = 4;
    if(!this.GLfaces) {
      this.GLfaces = gl.createBuffer()
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.GLfaces);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([2, 1, 0, 0, 3, 2]), gl.STATIC_DRAW);
    this.GLfaces.itemSize = 1;
    this.GLfaces.numItems = 6
  }
})(GLGE);
(function(GLGE) {
  GLGE.ObjectLod = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.setMaterial(GLGE.DEFAULT_MATERIAL)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.ObjectLod);
  GLGE.augment(GLGE.JSONLoader, GLGE.ObjectLod);
  GLGE.augment(GLGE.Events, GLGE.ObjectLod);
  GLGE.ObjectLod.prototype.mesh = null;
  GLGE.ObjectLod.prototype.className = "ObjectLod";
  GLGE.ObjectLod.prototype.material = null;
  GLGE.ObjectLod.prototype.program = null;
  GLGE.ObjectLod.prototype.GLShaderProgramPick = null;
  GLGE.ObjectLod.prototype.GLShaderProgramShadow = null;
  GLGE.ObjectLod.prototype.GLShaderProgram = null;
  GLGE.ObjectLod.prototype.pixelSize = 0;
  GLGE.ObjectLod.prototype.setMesh = function(mesh) {
    if(typeof mesh == "string") {
      mesh = GLGE.Assets.get(mesh)
    }
    if(this.mesh) {
      this.mesh.removeEventListener("shaderupdate", this.meshupdated)
    }
    var multiMaterial = this;
    this.meshupdated = function(event) {
      multiMaterial.GLShaderProgram = null
    };
    mesh.addEventListener("shaderupdate", this.meshupdated);
    this.GLShaderProgram = null;
    this.mesh = mesh;
    return this
  };
  GLGE.ObjectLod.prototype.isComplete = function() {
    return this.material.isComplete()
  };
  GLGE.ObjectLod.prototype.getMesh = function() {
    return this.mesh
  };
  GLGE.ObjectLod.prototype.setMaterial = function(material) {
    if(typeof material == "string") {
      material = GLGE.Assets.get(material)
    }
    if(this.material) {
      this.material.removeEventListener("shaderupdate", this.materialupdated);
      this.material.removeEventListener("downloadComplete", this.downloadComplete)
    }
    var ObjectLOD = this;
    this.materialupdated = function(event) {
      ObjectLOD.GLShaderProgram = null
    };
    material.addEventListener("shaderupdate", this.materialupdated);
    this.downloadComplete = function() {
      ObjectLOD.fireEvent("downloadComplete")
    };
    material.addEventListener("downloadComplete", this.downloadComplete);
    this.GLShaderProgram = null;
    this.material = material;
    return this
  };
  GLGE.ObjectLod.prototype.getMaterial = function() {
    return this.material
  };
  GLGE.ObjectLod.prototype.getPixelSize = function() {
    return this.pixelSize
  };
  GLGE.ObjectLod.prototype.setPixelSize = function(value) {
    this.pixelSize = parseFloat(value)
  }
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsSphere = function(uid) {
    this.jigLibObj = new jigLib.JSphere(this, this.radius);
    this.jigLibObj.GLGE = this;
    this.jigLibObj.addEventListener(jigLib.JCollisionEvent.COLLISION, function(event) {
      this.GLGE.fireEvent("collision", {obj:event.collisionBody.GLGE, impulse:event.collisionImpulse})
    });
    GLGE.PhysicsAbstract.call(this, uid)
  };
  GLGE.augment(GLGE.PhysicsAbstract, GLGE.PhysicsSphere);
  GLGE.PhysicsSphere.prototype.radius = 1;
  GLGE.PhysicsSphere.prototype.className = "PhysicsSphere";
  GLGE.PhysicsSphere.prototype.setRadius = function(value) {
    this.physicsRadius = +value;
    this.jigLibObj.set_radius(+value);
    return this
  };
  GLGE.PhysicsSphere.prototype.getRadius = function(value) {
    return this.jigLibObj.get_radius()
  }
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsPlane = function(uid) {
    this.jigLibObj = new jigLib.JPlane(this, this.normal, this.distance);
    this.jigLibObj.GLGE = this;
    this.jigLibObj.addEventListener(jigLib.JCollisionEvent.COLLISION, function(event) {
      this.GLGE.fireEvent("collision", {obj:event.collisionBody.GLGE, impulse:event.collisionImpulse})
    });
    GLGE.PhysicsAbstract.call(this, uid)
  };
  GLGE.augment(GLGE.PhysicsAbstract, GLGE.PhysicsPlane);
  GLGE.PhysicsPlane.prototype.normal = [0, 0, 1, 0];
  GLGE.PhysicsPlane.prototype.distance = 0;
  GLGE.PhysicsPlane.prototype.className = "PhysicsPlane";
  GLGE.PhysicsPlane.prototype.setNormal = function(value) {
    this.normal = value;
    this.jigLibObj.set_normal(value);
    return this
  };
  GLGE.PhysicsPlane.prototype.setDistance = function(value) {
    this.distance = value;
    this.jigLibObj.set_distance(value);
    return this
  };
  GLGE.PhysicsPlane.prototype.getNormal = function() {
    return this.jigLibObj.get_normal()
  };
  GLGE.PhysicsPlane.prototype.getDistance = function() {
    return this.jigLibObj.get_distance()
  }
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsMesh = function(uid) {
    this.jigLibObj = new jigLib.JTriangleMesh(null, 100, 0.05);
    this.jigLibObj.GLGE = this;
    this.jigLibObj.addEventListener(jigLib.JCollisionEvent.COLLISION, function(event) {
      this.GLGE.fireEvent("collision", {obj:event.collisionBody.GLGE, impulse:event.collisionImpulse})
    });
    this.dirty = true;
    this.addEventListener("matrixUpdate", this.makeDirty);
    this.addEventListener("childMatrixUpdate", this.makeDirty);
    this.addEventListener("childAdded", this.makeDirty);
    this.addEventListener("childRemoved", this.makeDirty);
    GLGE.PhysicsAbstract.call(this, uid)
  };
  GLGE.augment(GLGE.PhysicsAbstract, GLGE.PhysicsMesh);
  GLGE.PhysicsMesh.prototype.className = "PhysicsMesh";
  GLGE.PhysicsMesh.prototype.forceUpdate = function() {
    this.dirty = true;
    return this
  };
  GLGE.PhysicsMesh.prototype.makeDirty = function(e) {
    this.dirty = true
  };
  GLGE.PhysicsMesh.prototype.preProcess = function() {
    if(this.dirty) {
      var triangles = this.getTriangles();
      this.jigLibObj.createMesh(triangles.verts, triangles.faces);
      this.dirty = false
    }
  };
  GLGE.PhysicsMesh.prototype.getTriangles = function() {
    var objs = this.getObjects();
    var verts = [];
    var faces = [];
    for(var i = 0;i < objs.length;i++) {
      if(objs[i].multimaterials) {
        var matrix = objs[i].getModelMatrix();
        for(var j = 0;j < objs[i].multimaterials.length;j++) {
          var mesh = objs[i].multimaterials[j].getMesh();
          var vertcnt = verts.length;
          if(mesh) {
            for(var k = 0;k < mesh.positions.length;k = k + 3) {
              var vert = [mesh.positions[k], mesh.positions[k + 1], mesh.positions[k + 2], 1];
              var v = GLGE.mulMat4Vec4(matrix, vert);
              verts.push([v[0], v[1], v[2], 1])
            }
            var mfaces = mesh.faces.data;
            if(mfaces) {
              var len = mfaces.length;
              len = (len / 3 | 0) * 3;
              for(var k = 0;k < len;k = k + 3) {
                faces.push([+mfaces[k] + vertcnt, +mfaces[k + 1] + vertcnt, +mfaces[k + 2] + vertcnt])
              }
            }else {
              for(var k = 0;k < mesh.positions.length / 3;k = k + 3) {
                faces.push([k + vertcnt, k + 1 + vertcnt, k + 2 + vertcnt])
              }
            }
          }
        }
      }
    }
    return{verts:verts, faces:faces}
  }
})(GLGE);
(function(GLGE) {
  GLGE.Scene.prototype.physicsGravity = [0, 0, -9.8, 0];
  GLGE.Scene.prototype.getPhysicsNodes = function(ret) {
    if(!ret) {
      ret = []
    }
    if(this.jigLibObj) {
      ret.push(this)
    }
    if(this.children) {
      for(var i = 0;i < this.children.length;i++) {
        GLGE.Scene.prototype.getPhysicsNodes.call(this.children[i], ret)
      }
    }
    return ret
  };
  GLGE.Scene.prototype.physicsPick = function(x, y, self) {
    if(!this.physicsSystem) {
      this.physicsTick(0, true)
    }
    var ray = this.makeRay(x, y);
    if(!ray) {
      return
    }
    var cs = this.physicsSystem.getCollisionSystem();
    var seg = new jigLib.JSegment(ray.origin, GLGE.scaleVec3(ray.coord, -1E3));
    var out = {};
    if(cs.segmentIntersect(out, seg, self ? self.jigLibObj : null)) {
      return{object:out.rigidBody.GLGE, normal:out.normal, distance:out.frac, position:out.position}
    }else {
      return false
    }
  };
  GLGE.Scene.prototype.physicsPickObject = function(x, y, self) {
    if(!this.physicsSystem) {
      this.physicsTick(0, true)
    }
    var ray = this.makeRay(x, y);
    if(!ray) {
      return
    }
    var cs = self.jigLibObj;
    var seg = new jigLib.JSegment(ray.origin, GLGE.scaleVec3(ray.coord, -1E3));
    var out = {};
    if(cs.segmentIntersect(out, seg)) {
      return{normal:out.normal, distance:out.frac, position:out.position}
    }else {
      return false
    }
  };
  GLGE.Scene.prototype.physicsTick = function(dt, noIntegrate) {
    var objects = this.getPhysicsNodes();
    if(!this.physicsSystem) {
      this.physicsSystem = jigLib.PhysicsSystem.getInstance();
      this.physicsSystem.setGravity(this.physicsGravity);
      for(var i = 0;i < objects.length;i++) {
        if(objects[i].jigLibObj) {
          this.physicsSystem.addBody(objects[i].jigLibObj)
        }
      }
      var that = this;
      this.addEventListener("childAdded", function(data) {
        if(data.obj.jigLibObj) {
          that.physicsSystem.addBody(data.obj.jigLibObj)
        }
      });
      this.addEventListener("childRemoved", function(data) {
        if(data.obj.jigLibObj) {
          that.physicsSystem.removeBody(data.obj.jigLibObj)
        }
      })
    }
    for(var i = 0;i < objects.length;i++) {
      if(objects[i].jigLibObj) {
        objects[i].preProcess()
      }
    }
    if(!noIntegrate) {
      this.physicsSystem.integrate(dt)
    }
  };
  GLGE.Scene.prototype.setGravity = function(gravity) {
    this.physicsGravity = gravity;
    if(this.physicsSystem) {
      this.physicsSystem.setGravity(gravity)
    }
    return this
  };
  GLGE.Scene.prototype.setGravity = function(gravity) {
    return this.physicsSystem.getGravity(gravity)
  };
  GLGE.Group.prototype.addPhysicsPlane = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addPhysicsBox = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addPhysicsSphere = GLGE.Group.prototype.addChild;
  GLGE.Group.prototype.addPhysicsMesh = GLGE.Group.prototype.addChild;
  GLGE.Scene.prototype.addPhysicsPlane = GLGE.Group.prototype.addChild;
  GLGE.Scene.prototype.addPhysicsBox = GLGE.Group.prototype.addChild;
  GLGE.Scene.prototype.addPhysicsSphere = GLGE.Group.prototype.addChild;
  GLGE.Scene.prototype.addPhysicsMesh = GLGE.Group.prototype.addChild
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsConstraintPoint = function() {
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.PhysicsConstraintPoint);
  GLGE.augment(GLGE.JSONLoader, GLGE.PhysicsConstraintPoint);
  GLGE.PhysicsConstraintPoint.constraint = null;
  GLGE.PhysicsConstraintPoint.prototype.className = "PhysicsConstraintPoint";
  GLGE.PhysicsConstraintPoint.prototype.setBody1 = function(body1) {
    this.body1 = body1;
    this.updateConstraint();
    return this
  };
  GLGE.PhysicsConstraintPoint.prototype.setBody2 = function(body2) {
    this.body2 = body2;
    this.updateConstraint();
    return this
  };
  GLGE.PhysicsConstraintPoint.prototype.setBodyPos1 = function(bodypos1) {
    if(typeof bodypos1 == "string") {
      bodypos1 = bodypos1.split(",")
    }
    this.bodypos1 = [parseFloat(bodypos1[0]), parseFloat(bodypos1[1]), parseFloat(bodypos1[2])];
    this.updateConstraint();
    return this
  };
  GLGE.PhysicsConstraintPoint.prototype.setBodyPos2 = function(bodypos2) {
    if(typeof bodypos2 == "string") {
      bodypos2 = bodypos2.split(",")
    }
    this.bodypos2 = [parseFloat(bodypos2[0]), parseFloat(bodypos2[1]), parseFloat(bodypos2[2])];
    this.updateConstraint();
    return this
  };
  GLGE.PhysicsConstraintPoint.prototype.updateConstraint = function() {
    if(this.body1 && this.body2 && this.bodypos1 && this.bodypos2) {
      if(this.constraint) {
        if(this.parent && this.parent.physicsSystem) {
          this.parent.physicsSystem.removeConstraint(this.constraint)
        }
        this.body1.removeConstraint(this.constraint);
        this.body2.removeConstraint(this.constraint)
      }
      this.constraint = new jigLib.JConstraintPoint(this.body1.jigLibObj, this.bodypos1, this.body2.jigLibObj, this.bodypos2);
      if(this.parent && this.parent.physicsSystem) {
        this.parent.physicsSystem.addConstraint(this.constraint)
      }
    }
  };
  GLGE.Scene.prototype.addPhysicsConstraintPoint = function(constraint) {
    if(!this.constraints) {
      this.constraints = []
    }
    this.constraints.push(constraint);
    if(this.physicsSystem) {
      this.physicsSystem.addConstraint(constraint.constraint)
    }
    return this
  };
  GLGE.Scene.prototype.removePhysicsConstraintPoint = function(constraint) {
    if(!this.constraints) {
      this.constraints = []
    }
    if(this.constraints.indexOf(constraint) > -1) {
      this.constraints.push(constraint);
      if(this.physicsSystem) {
        this.physicsSystem.removeConstraint(constraint.constraint)
      }
    }
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.PhysicsBox = function(uid) {
    this.jigLibObj = new jigLib.JBox(this, this.width, this.height, this.depth);
    this.jigLibObj.GLGE = this;
    this.jigLibObj.addEventListener(jigLib.JCollisionEvent.COLLISION, function(event) {
      this.GLGE.fireEvent("collision", {obj:event.collisionBody.GLGE, impulse:event.collisionImpulse})
    });
    GLGE.PhysicsAbstract.call(this, uid)
  };
  GLGE.augment(GLGE.PhysicsAbstract, GLGE.PhysicsBox);
  GLGE.PhysicsBox.prototype.width = 1;
  GLGE.PhysicsBox.prototype.height = 1;
  GLGE.PhysicsBox.prototype.depth = 1;
  GLGE.PhysicsBox.prototype.className = "PhysicsBox";
  GLGE.PhysicsBox.prototype.setWidth = function(value) {
    this.width = value;
    var sides = this.jigLibObj.get_sideLengths();
    sides[0] = +value;
    this.jigLibObj.set_sideLengths(sides);
    return this
  };
  GLGE.PhysicsBox.prototype.setHeight = function(value) {
    this.height = value;
    var sides = this.jigLibObj.get_sideLengths();
    sides[1] = +value;
    this.jigLibObj.set_sideLengths(sides);
    return this
  };
  GLGE.PhysicsBox.prototype.setDepth = function(value) {
    this.depth = value;
    var sides = this.jigLibObj.get_sideLengths();
    sides[2] = +value;
    this.jigLibObj.set_sideLengths(sides);
    return this
  };
  GLGE.PhysicsBox.prototype.getWidth = function() {
    return this.jigLibObj.get_sideLengths()[0]
  };
  GLGE.PhysicsBox.prototype.getHeight = function() {
    return this.jigLibObj.get_sideLengths()[1]
  };
  GLGE.PhysicsBox.prototype.getDepth = function() {
    return this.jigLibObj.get_sideLengths()[2]
  }
})(GLGE);
(function(GLGE) {
  GLGE.TextureVideo = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.video = document.createElement("video");
    this.video.style.display = "none";
    this.video.setAttribute("loop", "loop");
    this.video.autoplay = true;
    this.video.addEventListener("ended", function() {
      this.play()
    }, true);
    document.getElementsByTagName("body")[0].appendChild(this.video);
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.TextureVideo);
  GLGE.augment(GLGE.JSONLoader, GLGE.TextureVideo);
  GLGE.augment(GLGE.Events, GLGE.TextureVideo);
  GLGE.TextureVideo.prototype.className = "TextureVideo";
  GLGE.TextureVideo.prototype.glTexture = null;
  GLGE.TextureVideo.prototype.getVideo = function() {
    return this.video
  };
  GLGE.TextureVideo.prototype.setVideo = function(video) {
    this.video = video;
    return this
  };
  GLGE.TextureVideo.prototype.setSrc = function(src) {
    this.video.src = src;
    return this
  };
  GLGE.TextureVideo.prototype.getSrc = function(src) {
    return this.video.src
  };
  GLGE.TextureVideo.prototype.doTexture = function(gl) {
    this.gl = gl;
    if(!this.glTexture) {
      this.glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      this.updateTexture(gl)
    }else {
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      this.updateTexture(gl)
    }
    return true
  };
  GLGE.TextureVideo.prototype.updateTexture = function(gl) {
    var video = this.video;
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    if(video.readyState > 0) {
      if(video.height <= 0) {
        video.style.display = "";
        video.height = video.offsetHeight;
        video.width = video.offsetWidth;
        video.style.display = "none"
      }
      this.canvas.height = video.height;
      this.canvas.width = video.width;
      this.ctx.drawImage(video, 0, 0);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas)
      }catch(e) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas, null)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.generateMipmap(gl.TEXTURE_2D)
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.Texture = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.Texture);
  GLGE.augment(GLGE.JSONLoader, GLGE.Texture);
  GLGE.augment(GLGE.Events, GLGE.Texture);
  GLGE.Texture.prototype.className = "Texture";
  GLGE.Texture.prototype.image = null;
  GLGE.Texture.prototype.glTexture = null;
  GLGE.Texture.prototype.url = null;
  GLGE.Texture.prototype.state = 0;
  GLGE.Texture.prototype.getSrc = function() {
    return this.url
  };
  GLGE.Texture.prototype.setSrc = function(url) {
    this.url = url;
    this.state = 0;
    this.image = new Image;
    var texture = this;
    this.image.onload = function() {
      texture.state = 1;
      texture.fireEvent("downloadComplete")
    };
    GLGE.loadImage(this.image, url);
    if(this.glTexture && this.gl) {
      this.gl.deleteTexture(this.glTexture);
      this.glTexture = null
    }
    return this
  };
  GLGE.Texture.prototype.doTexture = function(gl) {
    this.gl = gl;
    if(!this.image) {
      this.setSrc(this.url)
    }
    if(!this.glTexture) {
      this.glTexture = gl.createTexture()
    }
    if(this.state == 1) {
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      var w = Math.pow(2, Math.round(Math.log(this.image.width) / Math.log(2)));
      var h = Math.pow(2, Math.round(Math.log(this.image.height) / Math.log(2)));
      var imageOrCanvas;
      if(w == this.image.width && h == this.image.height) {
        imageOrCanvas = this.image
      }else {
        imageOrCanvas = document.createElement("canvas");
        imageOrCanvas.width = w;
        imageOrCanvas.height = h;
        var context = imageOrCanvas.getContext("2d");
        context.drawImage(this.image, 0, 0, w, h)
      }
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageOrCanvas);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this.state = 2
    }
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    if(this.state == 2) {
      return true
    }else {
      return false
    }
  };
  GLGE.Texture.prototype.isComplete = function() {
    return this.state > 0
  }
})(GLGE);
(function(GLGE) {
  GLGE.TextureCube = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.TextureCube);
  GLGE.augment(GLGE.JSONLoader, GLGE.TextureCube);
  GLGE.augment(GLGE.Events, GLGE.TextureCube);
  GLGE.TextureCube.prototype.className = "TextureCube";
  GLGE.TextureCube.prototype.posX = null;
  GLGE.TextureCube.prototype.negX = null;
  GLGE.TextureCube.prototype.posY = null;
  GLGE.TextureCube.prototype.negY = null;
  GLGE.TextureCube.prototype.posZ = null;
  GLGE.TextureCube.prototype.negZ = null;
  GLGE.TextureCube.prototype.texture = null;
  GLGE.TextureCube.prototype.glTexture = null;
  GLGE.TextureCube.prototype.loadState = 0;
  GLGE.TextureCube.prototype.setSrc = function(url, image, mask) {
    this.url = url;
    this.state = 0;
    this[image] = new Image;
    var texture = this;
    this[image].onload = function() {
      texture.loadState += mask
    };
    GLGE.loadImage(this[image], url);
    if(this.glTexture && this.gl) {
      this.gl.deleteTexture(this.glTexture);
      this.glTexture = null
    }
    return this
  };
  GLGE.TextureCube.prototype.setSrcPosX = function(url) {
    this.setSrc(url, "posX", 1);
    return this
  };
  GLGE.TextureCube.prototype.setSrcNegX = function(url) {
    this.setSrc(url, "negX", 2);
    return this
  };
  GLGE.TextureCube.prototype.setSrcPosY = function(url) {
    this.setSrc(url, "posY", 4);
    return this
  };
  GLGE.TextureCube.prototype.setSrcNegY = function(url) {
    if(typeof url != "string") {
      this.negY = url;
      this.loadState += 8
    }else {
      this.setSrc(url, "negY", 8)
    }
    return this
  };
  GLGE.TextureCube.prototype.setSrcPosZ = function(url) {
    this.setSrc(url, "posZ", 16);
    return this
  };
  GLGE.TextureCube.prototype.setSrcNegZ = function(url) {
    this.setSrc(url, "negZ", 32);
    return this
  };
  GLGE.TextureCube.prototype.doTexture = function(gl, object) {
    this.gl = gl;
    if(!this.glTexture) {
      this.glTexture = gl.createTexture()
    }
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.glTexture);
    if(this.loadState == 63 && this.state == 0) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.posX);
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.negX);
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.posY);
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.negY);
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.posZ);
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.negZ);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
      this.state = 1
    }
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.glTexture);
    if(this.state == 1) {
      return true
    }else {
      return false
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.TextureCanvas = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.canvas = document.createElement("canvas")
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.TextureCanvas);
  GLGE.augment(GLGE.JSONLoader, GLGE.TextureCanvas);
  GLGE.augment(GLGE.Events, GLGE.TextureCanvas);
  GLGE.TextureCanvas.prototype.className = "TextureCanvas";
  GLGE.TextureCanvas.prototype.glTexture = null;
  GLGE.TextureCanvas.prototype.autoUpdate = true;
  GLGE.TextureCanvas.prototype.getAutoUpdate = function() {
    return this.autoUpdate
  };
  GLGE.TextureCanvas.prototype.setAutoUpdate = function(value) {
    this.autoUpdate = value;
    return this
  };
  GLGE.TextureCanvas.prototype.getCanvas = function() {
    return this.canvas
  };
  GLGE.TextureCanvas.prototype.setCanvas = function(canvas) {
    this.canvas = canvas;
    return this
  };
  GLGE.TextureCanvas.prototype.setHeight = function(value) {
    this.canvas.height = value;
    return this
  };
  GLGE.TextureCanvas.prototype.setWidth = function(value) {
    this.canvas.width = value;
    return this
  };
  GLGE.TextureCanvas.prototype.getHeight = function() {
    return this.canvas.height
  };
  GLGE.TextureCanvas.prototype.getWidth = function() {
    return this.canvas.width
  };
  GLGE.TextureCanvas.prototype.doTexture = function(gl) {
    this.gl = gl;
    if(!this.glTexture) {
      this.glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      this.updateCanvas(gl)
    }else {
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      if(this.autoUpdate || this.doUpdate) {
        this.updateCanvas(gl)
      }
    }
    this.doUpdate = false;
    return true
  };
  GLGE.TextureCanvas.prototype.update = function() {
    this.doUpdate = true
  };
  GLGE.TextureCanvas.prototype.updateCanvas = function(gl) {
    var canvas = this.canvas;
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
    }catch(e) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas, null)
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D)
  }
})(GLGE);
(function(GLGE) {
  GLGE.TextureCamera = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.TextureCamera);
  GLGE.augment(GLGE.JSONLoader, GLGE.TextureCamera);
  GLGE.augment(GLGE.Events, GLGE.TextureCamera);
  GLGE.TextureCamera.prototype.className = "Texture";
  GLGE.TextureCamera.prototype.texture = null;
  GLGE.TextureCamera.prototype.glTexture = null;
  GLGE.TextureCamera.prototype.object = null;
  GLGE.TextureCamera.prototype.camera = null;
  GLGE.TextureCamera.prototype.bufferHeight = 0;
  GLGE.TextureCamera.prototype.bufferWidth = 0;
  GLGE.TextureCamera.prototype.mirrorAxis = GLGE.NONE;
  GLGE.TextureCamera.prototype.clipAxis = GLGE.NONE;
  GLGE.TextureCamera.prototype.setBufferWidth = function(width) {
    this.bufferWidth = width;
    this.update = true;
    return this
  };
  GLGE.TextureCamera.prototype.getBufferWidth = function() {
    return this.bufferWidth
  };
  GLGE.TextureCamera.prototype.setBufferHeight = function(height) {
    this.bufferHeight = height;
    this.update = true;
    return this
  };
  GLGE.TextureCamera.prototype.getBufferHeight = function() {
    return this.bufferHeight
  };
  GLGE.TextureCamera.prototype.setClipAxis = function(camera) {
    this.clipAxis = camera;
    return this
  };
  GLGE.TextureCamera.prototype.getClipAxis = function() {
    return this.clipAxis
  };
  GLGE.TextureCamera.prototype.setMirrorAxis = function(camera) {
    this.mirrorAxis = camera;
    return this
  };
  GLGE.TextureCamera.prototype.getMirrorAxis = function() {
    return this.mirrorAxis
  };
  GLGE.TextureCamera.prototype.setCamera = function(camera) {
    this.camera = camera;
    return this
  };
  GLGE.TextureCamera.prototype.getCamera = function() {
    return this.camera
  };
  GLGE.TextureCamera.prototype.doTexture = function(gl, object) {
    if(this.camera) {
      this.gl = gl;
      var modelmatrix = object.getModelMatrix();
      var pmatrix = gl.scene.camera.getProjectionMatrix();
      var cameramatrix = this.camera.getViewMatrix();
      var matrix;
      if(this.mirrorAxis) {
        switch(this.mirrorAxis) {
          case GLGE.XAXIS:
            matrix = GLGE.mulMat4(GLGE.mulMat4(GLGE.mulMat4(cameramatrix, modelmatrix), GLGE.scaleMatrix(-1, 1, 1)), GLGE.inverseMat4(modelmatrix));
            break;
          case GLGE.YAXIS:
            matrix = GLGE.mulMat4(GLGE.mulMat4(GLGE.mulMat4(cameramatrix, modelmatrix), GLGE.scaleMatrix(1, -1, 1)), GLGE.inverseMat4(modelmatrix));
            break;
          case GLGE.ZAXIS:
            matrix = GLGE.mulMat4(GLGE.mulMat4(GLGE.mulMat4(cameramatrix, modelmatrix), GLGE.scaleMatrix(1, 1, -1)), GLGE.inverseMat4(modelmatrix));
            break
        }
      }else {
        matrix = cameramatrix
      }
      if(this.clipAxis) {
        var clipplane;
        switch(this.clipAxis) {
          case GLGE.NEG_XAXIS:
            var dirnorm = GLGE.toUnitVec3([-modelmatrix[0], -modelmatrix[4], -modelmatrix[8]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break;
          case GLGE.POS_XAXIS:
            var dirnorm = GLGE.toUnitVec3([modelmatrix[0], modelmatrix[4], modelmatrix[8]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break;
          case GLGE.NEG_YAXIS:
            var dirnorm = GLGE.toUnitVec3([-modelmatrix[1], -modelmatrix[5], -modelmatrix[9]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break;
          case GLGE.POS_YAXIS:
            var dirnorm = GLGE.toUnitVec3([modelmatrix[1], modelmatrix[5], modelmatrix[9]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break;
          case GLGE.NEG_ZAXIS:
            var dirnorm = GLGE.toUnitVec3([-modelmatrix[2], -modelmatrix[6], -modelmatrix[10]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break;
          case GLGE.POS_ZAXIS:
            var dirnorm = GLGE.toUnitVec3([modelmatrix[2], modelmatrix[6], modelmatrix[10]]);
            clipplane = [dirnorm[0], dirnorm[1], dirnorm[2], -GLGE.dotVec3([modelmatrix[3], modelmatrix[7], modelmatrix[11]], dirnorm)];
            break
        }
        var itmvp = GLGE.transposeMat4(GLGE.inverseMat4(GLGE.mulMat4(pmatrix, matrix)));
        clipplane = GLGE.mulMat4Vec4(itmvp, clipplane);
        clipplane = GLGE.scaleVec4(clipplane, pmatrix[10]);
        clipplane[3] -= 1;
        if(clipplane[2] < 0) {
          GLGE.scaleVec4(clipplane, -1)
        }
        var suffix = [1, 0, 0, 0, 0, 1, 0, 0, clipplane[0], clipplane[1], clipplane[2], clipplane[3], 0, 0, 0, 1];
        pmatrix = GLGE.mulMat4(suffix, pmatrix)
      }
      var height = !this.bufferHeight ? gl.scene.renderer.canvas.height : this.bufferHeight;
      var width = !this.bufferWidth ? gl.scene.renderer.canvas.width : this.bufferWidth;
      if(!this.glTexture || this.update) {
        this.createFrameBuffer(gl);
        gl.scene.addRenderPass(this.frameBuffer, matrix, gl.scene.camera.getProjectionMatrix(), width, height, object);
        gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
        this.update = false;
        return false
      }else {
        gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.scene.addRenderPass(this.frameBuffer, matrix, pmatrix, width, height, object);
        return true
      }
    }else {
      return false
    }
  };
  GLGE.TextureCamera.prototype.registerPasses = GLGE.TextureCamera.prototype.doTexture;
  GLGE.TextureCamera.prototype.createFrameBuffer = function(gl) {
    var height = !this.bufferHeight ? gl.scene.renderer.canvas.height : this.bufferHeight;
    var width = !this.bufferWidth ? gl.scene.renderer.canvas.width : this.bufferWidth;
    if(!this.frameBuffer) {
      this.frameBuffer = gl.createFramebuffer()
    }
    if(!this.renderBuffer) {
      this.renderBuffer = gl.createRenderbuffer()
    }
    if(!this.glTexture) {
      this.glTexture = gl.createTexture()
    }
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    var tex = new Uint8Array(width * height * 4);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, tex);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.glTexture, 0);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null)
  }
})(GLGE);
(function(GLGE) {
  GLGE.MultiMaterial = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    var multiMaterial = this;
    this.downloadComplete = function() {
      if(multiMaterial.isComplete()) {
        multiMaterial.fireEvent("downloadComplete")
      }
    };
    this.lods = [new GLGE.ObjectLod];
    this.lods[0].addEventListener("downloadComplete", this.downloadComplete)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.MultiMaterial);
  GLGE.augment(GLGE.JSONLoader, GLGE.MultiMaterial);
  GLGE.augment(GLGE.Events, GLGE.MultiMaterial);
  GLGE.MultiMaterial.prototype.className = "MultiMaterial";
  GLGE.MultiMaterial.prototype.isComplete = function() {
    for(var i = 0;i < this.lods.length;i++) {
      if(!this.lods[i].isComplete()) {
        return false
      }
    }
    return true
  };
  GLGE.MultiMaterial.prototype.setMesh = function(mesh) {
    this.lods[0].setMesh(mesh);
    return this
  };
  GLGE.MultiMaterial.prototype.getMesh = function() {
    return this.lods[0].getMesh()
  };
  GLGE.MultiMaterial.prototype.setMaterial = function(material) {
    this.lods[0].setMaterial(material);
    return this
  };
  GLGE.MultiMaterial.prototype.getMaterial = function() {
    return this.lods[0].getMaterial()
  };
  GLGE.MultiMaterial.prototype.getLOD = function(pixelsize) {
    var currentSize = 0;
    var currentLOD = this.lods[0];
    if(this.lods.length > 1) {
      for(var i = 1;i < this.lods.length;i++) {
        var size = this.lods[i].pixelSize;
        if(size > currentSize && size < pixelsize && this.lods[i].mesh && this.lods[i].mesh.loaded) {
          currentSize = size;
          currentLOD = this.lods[i]
        }
      }
    }
    return currentLOD
  };
  GLGE.MultiMaterial.prototype.addObjectLod = function(lod) {
    this.lods.push(lod);
    lod.addEventListener("downloadComplete", this.downloadComplete);
    return this
  };
  GLGE.MultiMaterial.prototype.updateProgram = function() {
    for(var i = 0;i < this.lods.length;i++) {
      this.lods[i].GLShaderProgram = null
    }
    return this
  };
  GLGE.MultiMaterial.prototype.removeObjectLod = function(lod) {
    var idx = this.lods.indexOf(lod);
    lods[idx].removeEventListener("downloadComplete", this.downloadComplete);
    if(idx) {
      this.lods.splice(idx, 1)
    }
    return this
  }
})(GLGE);
(function(GLGE) {
  GLGE.MaterialLayer = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.blendMode = GLGE.BL_MIX
  };
  GLGE.augment(GLGE.Animatable, GLGE.MaterialLayer);
  GLGE.augment(GLGE.QuickNotation, GLGE.MaterialLayer);
  GLGE.augment(GLGE.JSONLoader, GLGE.MaterialLayer);
  GLGE.augment(GLGE.Events, GLGE.MaterialLayer);
  GLGE.MaterialLayer.prototype.className = "MaterialLayer";
  GLGE.MaterialLayer.prototype.texture = null;
  GLGE.MaterialLayer.prototype.blendMode = null;
  GLGE.MaterialLayer.prototype.mapto = GLGE.M_COLOR;
  GLGE.MaterialLayer.prototype.mapinput = GLGE.UV1;
  GLGE.MaterialLayer.prototype.scaleX = 1;
  GLGE.MaterialLayer.prototype.offsetX = 0;
  GLGE.MaterialLayer.prototype.rotX = 0;
  GLGE.MaterialLayer.prototype.scaleY = 1;
  GLGE.MaterialLayer.prototype.offsetY = 0;
  GLGE.MaterialLayer.prototype.rotY = 0;
  GLGE.MaterialLayer.prototype.scaleZ = 1;
  GLGE.MaterialLayer.prototype.offsetZ = 0;
  GLGE.MaterialLayer.prototype.rotZ = 0;
  GLGE.MaterialLayer.prototype.dScaleX = 0;
  GLGE.MaterialLayer.prototype.dOffsetX = 0;
  GLGE.MaterialLayer.prototype.dRotX = 0;
  GLGE.MaterialLayer.prototype.dScaleY = 0;
  GLGE.MaterialLayer.prototype.dOffsetY = 0;
  GLGE.MaterialLayer.prototype.dRotY = 0;
  GLGE.MaterialLayer.prototype.dScaleZ = 0;
  GLGE.MaterialLayer.prototype.dOffsetZ = 0;
  GLGE.MaterialLayer.prototype.dRotZ = 0;
  GLGE.MaterialLayer.prototype.alpha = 1;
  GLGE.MaterialLayer.prototype.height = 0.05;
  GLGE.MaterialLayer.prototype.matrix = null;
  GLGE.MaterialLayer.prototype.getMatrix = function() {
    if(!this.matrix) {
      var offset = this.getOffset();
      var scale = this.getScale();
      var rotation = this.getRotation();
      this.matrix = GLGE.mulMat4(GLGE.mulMat4(GLGE.translateMatrix(offset.x, offset.y, offset.z), GLGE.scaleMatrix(scale.x, scale.y, scale.z)), GLGE.rotateMatrix(rotation.x, rotation.y, rotation.z))
    }
    return this.matrix
  };
  GLGE.MaterialLayer.prototype.setHeight = function(value) {
    this.height = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getHeight = function() {
    return this.height
  };
  GLGE.MaterialLayer.prototype.setAlpha = function(value) {
    this.alpha = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getAlpha = function() {
    return this.alpha
  };
  GLGE.MaterialLayer.prototype.setTexture = function(value) {
    if(typeof value == "string") {
      value = GLGE.Assets.get(value)
    }
    this.texture = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.MaterialLayer.prototype.getTexture = function() {
    return this.texture
  };
  GLGE.MaterialLayer.prototype.setMapto = function(value) {
    this.mapto = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.MaterialLayer.prototype.getMapto = function() {
    return this.mapto
  };
  GLGE.MaterialLayer.prototype.setMapinput = function(value) {
    this.mapinput = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.MaterialLayer.prototype.getMapinput = function() {
    return this.mapinput
  };
  GLGE.MaterialLayer.prototype.getOffset = function() {
    var offset = {};
    offset.x = parseFloat(this.getOffsetX()) + parseFloat(this.getDOffsetX());
    offset.y = parseFloat(this.getOffsetY()) + parseFloat(this.getDOffsetY());
    offset.z = parseFloat(this.getOffsetZ()) + parseFloat(this.getDOffsetZ());
    return offset
  };
  GLGE.MaterialLayer.prototype.getRotation = function() {
    var rotation = {};
    rotation.x = parseFloat(this.getRotX()) + parseFloat(this.getDRotX());
    rotation.y = parseFloat(this.getRotY()) + parseFloat(this.getDRotY());
    rotation.z = parseFloat(this.getRotZ()) + parseFloat(this.getDRotZ());
    return rotation
  };
  GLGE.MaterialLayer.prototype.getScale = function() {
    var scale = {};
    scale.x = parseFloat(this.getScaleX()) + parseFloat(this.getDScaleX());
    scale.y = parseFloat(this.getScaleY()) + parseFloat(this.getDScaleY());
    scale.z = parseFloat(this.getScaleZ()) + parseFloat(this.getDScaleZ());
    return scale
  };
  GLGE.MaterialLayer.prototype.setOffsetX = function(value) {
    this.matrix = null;
    this.offsetX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getOffsetX = function() {
    return this.offsetX
  };
  GLGE.MaterialLayer.prototype.setOffsetY = function(value) {
    this.matrix = null;
    this.offsetY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getOffsetY = function() {
    return this.offsetY
  };
  GLGE.MaterialLayer.prototype.setOffsetZ = function(value) {
    this.matrix = null;
    this.offsetZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getOffsetZ = function() {
    return this.offsetZ
  };
  GLGE.MaterialLayer.prototype.setDOffsetX = function(value) {
    this.matrix = null;
    this.dOffsetX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDOffsetX = function() {
    return this.dOffsetX
  };
  GLGE.MaterialLayer.prototype.setDOffsetY = function(value) {
    this.matrix = null;
    this.dOffsetY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDOffsetY = function() {
    return this.dOffsetY
  };
  GLGE.MaterialLayer.prototype.setDOffsetZ = function(value) {
    this.matrix = null;
    this.dOffsetZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDOffsetZ = function() {
    return this.dOffsetZ
  };
  GLGE.MaterialLayer.prototype.setScaleX = function(value) {
    this.matrix = null;
    this.scaleX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getScaleX = function() {
    return this.scaleX
  };
  GLGE.MaterialLayer.prototype.setScaleY = function(value) {
    this.matrix = null;
    this.scaleY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getScaleY = function() {
    return this.scaleY
  };
  GLGE.MaterialLayer.prototype.setScaleZ = function(value) {
    this.matrix = null;
    this.scaleZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getScaleZ = function() {
    return this.scaleZ
  };
  GLGE.MaterialLayer.prototype.setDScaleX = function(value) {
    this.matrix = null;
    this.dScaleX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDScaleX = function() {
    return this.dScaleX
  };
  GLGE.MaterialLayer.prototype.setDScaleY = function(value) {
    this.matrix = null;
    this.dScaleY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDScaleY = function() {
    return this.dScaleY
  };
  GLGE.MaterialLayer.prototype.setDScaleZ = function(value) {
    this.matrix = null;
    this.dScaleZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDScaleZ = function() {
    return this.dScaleZ
  };
  GLGE.MaterialLayer.prototype.setRotX = function(value) {
    this.matrix = null;
    this.rotX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getRotX = function() {
    return this.rotX
  };
  GLGE.MaterialLayer.prototype.setRotY = function(value) {
    this.matrix = null;
    this.rotY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getRotY = function() {
    return this.rotY
  };
  GLGE.MaterialLayer.prototype.setRotZ = function(value) {
    this.matrix = null;
    this.rotZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getRotZ = function() {
    return this.rotZ
  };
  GLGE.MaterialLayer.prototype.setDRotX = function(value) {
    this.matrix = null;
    this.dRotX = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDRotX = function() {
    return this.dRotX
  };
  GLGE.MaterialLayer.prototype.setDRotY = function(value) {
    this.matrix = null;
    this.dRotY = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDRotY = function() {
    return this.dRotY
  };
  GLGE.MaterialLayer.prototype.setDRotZ = function(value) {
    this.matrix = null;
    this.dRotZ = value;
    return this
  };
  GLGE.MaterialLayer.prototype.getDRotZ = function() {
    return this.dRotZ
  };
  GLGE.MaterialLayer.prototype.setBlendMode = function(value) {
    this.blendMode = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.MaterialLayer.prototype.getBlendMode = function() {
    return this.blendMode
  }
})(GLGE);
(function(GLGE) {
  var materialIdx = 0;
  GLGE.Material = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.layers = [];
    this.layerlisteners = [];
    this.textures = [];
    this.lights = [];
    this.color = {r:1, g:1, b:1, a:1};
    this.specColor = {r:1, g:1, b:1};
    this.reflect = 0.8;
    this.shine = 10;
    this.specular = 1;
    this.emit = {r:0, g:0, b:0};
    this.alpha = 1;
    this.materialIdx = materialIdx++
  };
  GLGE.augment(GLGE.Animatable, GLGE.Material);
  GLGE.augment(GLGE.QuickNotation, GLGE.Material);
  GLGE.augment(GLGE.JSONLoader, GLGE.Material);
  GLGE.augment(GLGE.Events, GLGE.Material);
  GLGE.M_COLOR = 1;
  GLGE.M_NOR = 2;
  GLGE.M_ALPHA = 4;
  GLGE.M_SPECCOLOR = 8;
  GLGE.M_SPECULAR = 16;
  GLGE.M_SHINE = 32;
  GLGE.M_REFLECT = 64;
  GLGE.M_EMIT = 128;
  GLGE.M_ALPHA = 256;
  GLGE.M_MSKR = 512;
  GLGE.M_MSKG = 1024;
  GLGE.M_MSKB = 2048;
  GLGE.M_MSKA = 4096;
  GLGE.M_HEIGHT = 8192;
  GLGE.M_AMBIENT = 16384;
  GLGE.UV1 = 0;
  GLGE.UV2 = 1;
  GLGE.MAP_NORM = 3;
  GLGE.MAP_OBJ = 4;
  GLGE.MAP_REF = 5;
  GLGE.MAP_ENV = 6;
  GLGE.MAP_VIEW = 7;
  GLGE.MAP_POINT = 8;
  GLGE.BL_MIX = 0;
  GLGE.BL_MUL = 1;
  GLGE.Material.prototype.layers = null;
  GLGE.Material.prototype.className = "Material";
  GLGE.Material.prototype.textures = null;
  GLGE.Material.prototype.color = null;
  GLGE.Material.prototype.specColor = null;
  GLGE.Material.prototype.specular = null;
  GLGE.Material.prototype.emit = {r:0, g:0, b:0};
  GLGE.Material.prototype.shine = null;
  GLGE.Material.prototype.reflect = null;
  GLGE.Material.prototype.lights = null;
  GLGE.Material.prototype.alpha = null;
  GLGE.Material.prototype.ambient = null;
  GLGE.Material.prototype.shadow = true;
  GLGE.Material.prototype.shadeless = false;
  GLGE.Material.prototype.downloadComplete = false;
  GLGE.Material.prototype.setShadeless = function(value) {
    this.shadeless = value;
    return this
  };
  GLGE.Material.prototype.getShadeless = function(value) {
    return this.shadeless
  };
  GLGE.Material.prototype.setShadow = function(value) {
    this.shadow = value;
    return this
  };
  GLGE.Material.prototype.getShadow = function(value) {
    return this.shadow
  };
  GLGE.Material.prototype.setColor = function(color) {
    if(!color.r) {
      color = GLGE.colorParse(color)
    }
    this.color = {r:color.r, g:color.g, b:color.b};
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.setColorR = function(value) {
    this.color.r = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.setColorG = function(value) {
    this.color.g = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.setColorB = function(value) {
    this.color.b = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getColor = function() {
    return this.color
  };
  GLGE.Material.prototype.setSpecularColor = function(color) {
    if(!color.r) {
      color = GLGE.colorParse(color)
    }
    this.specColor = {r:parseFloat(color.r), g:parseFloat(color.g), b:parseFloat(color.b)};
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getAmbient = function() {
    return this.ambient
  };
  GLGE.Material.prototype.setAmbient = function(color) {
    if(!color.r) {
      color = GLGE.colorParse(color)
    }
    this.ambient = {r:parseFloat(color.r), g:parseFloat(color.g), b:parseFloat(color.b)};
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getSpecularColor = function() {
    return this.specColor
  };
  GLGE.Material.prototype.setAlpha = function(value) {
    this.alpha = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getAlpha = function() {
    return this.alpha
  };
  GLGE.Material.prototype.setSpecular = function(value) {
    this.specular = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getSpecular = function() {
    return this.specular
  };
  GLGE.Material.prototype.setShininess = function(value) {
    if(value <= 0) {
      value = 0.001
    }
    this.shine = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getShininess = function() {
    return this.shine
  };
  GLGE.Material.prototype.setEmit = function(color) {
    if(color > 0) {
      color = {r:color, g:color, b:color}
    }
    if(!color.r) {
      color = GLGE.colorParse(color)
    }
    this.emit = {r:parseFloat(color.r), g:parseFloat(color.g), b:parseFloat(color.b)};
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getEmit = function() {
    return this.emit
  };
  GLGE.Material.prototype.setReflectivity = function(value) {
    this.reflect = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getReflectivity = function() {
    return this.reflect
  };
  GLGE.Material.prototype.setBinaryAlpha = function(value) {
    this.binaryAlpha = value;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.getBinaryAlpha = function() {
    return this.binaryAlpha
  };
  GLGE.Material.prototype.addMaterialLayer = function(layer) {
    if(typeof layer == "string") {
      layer = GLGE.Assets.get(layer)
    }
    this.layers.push(layer);
    var material = this;
    var listener = function(event) {
      material.fireEvent("shaderupdate", {})
    };
    this.layerlisteners.push(listener);
    layer.addEventListener("shaderupdate", listener);
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.removeMaterialLayer = function(layer) {
    var idx = this.layers.indexOf(layer);
    if(idx >= 0) {
      this.layers.splice(idx, 1);
      layer.removeEventListener("shaderupdate", this.layerlisteners[idx]);
      this.layerlisteners.splice(idx, 1);
      this.fireEvent("shaderupdate", {})
    }
    return this
  };
  GLGE.Material.prototype.getLayers = function() {
    return this.layers
  };
  GLGE.Material.prototype.getLayerCoords = function(shaderInjection) {
    var shader = [];
    shader.push("vec4 texturePos;\n");
    for(i = 0;i < this.layers.length;i++) {
      shader.push("textureCoords" + i + "=vec3(0.0,0.0,0.0);\n");
      if(this.layers[i].mapinput == GLGE.UV1 || this.layers[i].mapinput == GLGE.UV2) {
        shader.push("texturePos=vec4(vec2(UVCoord[" + this.layers[i].mapinput * 2 + "],(1.0-UVCoord[" + (this.layers[i].mapinput * 2 + 1) + "])),1.0,1.0);\n")
      }
      if(this.layers[i].mapinput == GLGE.MAP_NORM) {
        shader.push("texturePos=vec4(normalize(n.xyz),1.0);\n")
      }
      if(this.layers[i].mapinput == GLGE.MAP_OBJ) {
        shader.push("texturePos=vec4(normalize(OBJCoord.xyz),1.0);\n")
      }
      if(this.layers[i].mapinput == GLGE.MAP_REF) {
        shader.push("texturePos=vec4(reflect(normalize(eyevec.xyz),normalize(n.xyz)),1.0);\n")
      }
      if(this.layers[i].mapinput == GLGE.MAP_ENV) {
        shader.push("texturePos=envMat * vec4(reflect(normalize(eyevec.xyz),normalize(n.xyz)),1.0);\n")
      }
      shader.push("textureCoords" + i + "=(layer" + i + "Matrix * texturePos).xyz;\n");
      if(shaderInjection && ~shaderInjection.indexOf("GLGE_Texcoord")) {
        shader.push("textureCoords" + i + "=GLGE_Texcoord(" + i + ",textureCoords" + i + ");\n")
      }
    }
    return shader.join("")
  };
  GLGE.Material.prototype.getVertexVarying = function() {
    var shader = [];
    for(i = 0;i < this.layers.length;i++) {
      shader.push("uniform mat4 layer" + i + "Matrix;\n");
      shader.push("varying vec3 textureCoords" + i + ";\n")
    }
    return shader.join("")
  };
  GLGE.Material.prototype.registerPasses = function(gl, object) {
    for(var i = 0;i < this.textures.length;i++) {
      if(this.textures[i].registerPasses) {
        this.textures[i].registerPasses(gl, object)
      }
    }
  };
  GLGE.Material.prototype.getFragmentShader = function(lights, colors) {
    var shader = "#ifdef GL_ES\nprecision highp float;\n#endif\n";
    var tangent = false;
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_POINT || lights[i].type == GLGE.L_SPOT || lights[i].type == GLGE.L_DIR) {
        shader = shader + "varying vec3 lightvec" + i + ";\n";
        shader = shader + "varying float lightdist" + i + ";\n"
      }
    }
    shader = shader + "varying vec3 n;\n";
    shader = shader + "varying vec3 t;\n";
    shader = shader + "varying vec4 UVCoord;\n";
    shader = shader + "varying vec3 eyevec;\n";
    shader = shader + "varying vec3 OBJCoord;\n";
    if(colors) {
      shader = shader + "varying vec4 vcolor;\n"
    }
    shader = shader + "uniform sampler2D sky;\n";
    for(var i = 0;i < this.textures.length;i++) {
      if(this.textures[i].className == "Texture") {
        shader = shader + "uniform sampler2D TEXTURE" + i + ";\n"
      }
      if(this.textures[i].className == "TextureCanvas") {
        shader = shader + "uniform sampler2D TEXTURE" + i + ";\n"
      }
      if(this.textures[i].className == "TextureVideo") {
        shader = shader + "uniform sampler2D TEXTURE" + i + ";\n"
      }
      if(this.textures[i].className == "TextureCube") {
        shader = shader + "uniform samplerCube TEXTURE" + i + ";\n"
      }
    }
    var cnt = 1;
    var shadowlights = [];
    var num;
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      shader = shader + "uniform vec3 lightcolor" + i + ";\n";
      shader = shader + "uniform vec3 lightAttenuation" + i + ";\n";
      shader = shader + "uniform float spotCosCutOff" + i + ";\n";
      shader = shader + "uniform float spotExp" + i + ";\n";
      shader = shader + "uniform vec3 lightdir" + i + ";\n";
      shader = shader + "uniform mat4 lightmat" + i + ";\n";
      shader = shader + "uniform float shadowbias" + i + ";\n";
      shader = shader + "uniform int shadowsamples" + i + ";\n";
      shader = shader + "uniform float shadowsoftness" + i + ";\n";
      shader = shader + "uniform bool castshadows" + i + ";\n";
      shader = shader + "uniform vec2 shadowoffset" + i + ";\n";
      if(lights[i].getCastShadows() && this.shadow) {
        shader = shader + "varying vec4 spotcoord" + i + ";\n";
        num = this.textures.length + cnt++;
        shader = shader + "uniform sampler2D TEXTURE" + num + ";\n";
        shadowlights[i] = num
      }
    }
    for(i = 0;i < this.layers.length;i++) {
      shader = shader + "varying vec3 textureCoords" + i + ";\n";
      shader = shader + "uniform float layeralpha" + i + ";\n";
      if((this.layers[i].mapto & GLGE.M_HEIGHT) == GLGE.M_HEIGHT) {
        shader = shader + "uniform float layerheight" + i + ";\n"
      }
    }
    shader = shader + "uniform vec4 baseColor;\n";
    shader = shader + "uniform vec3 specColor;\n";
    shader = shader + "uniform float shine;\n";
    shader = shader + "uniform float specular;\n";
    shader = shader + "uniform float reflective;\n";
    shader = shader + "uniform vec3 emit;\n";
    shader = shader + "uniform float alpha;\n";
    shader = shader + "uniform vec3 amb;\n";
    shader = shader + "uniform float fognear;\n";
    shader = shader + "uniform float fogfar;\n";
    shader = shader + "uniform int fogtype;\n";
    shader = shader + "uniform vec3 fogcolor;\n";
    shader = shader + "uniform float far;\n";
    shader = shader + "uniform mat4 worldInverseTranspose;\n";
    shader = shader + "uniform mat4 projection;\n";
    shader = shader + "uniform bool emitpass;\n";
    shader = shader + "uniform bool shadeless;\n";
    shader = shader + "void main(void)\n";
    shader = shader + "{\n";
    shader = shader + "float att;\n";
    shader = shader + "int texture;\n";
    shader = shader + "float mask=1.0;\n";
    shader = shader + "float spec=specular;\n";
    shader = shader + "vec3 specC=specColor;\n";
    shader = shader + "vec4 view;\n";
    shader = shader + "vec3 textureCoords=vec3(0.0,0.0,0.0);\n";
    shader = shader + "float ref=reflective;\n";
    shader = shader + "float sh=shine;\n";
    shader = shader + "vec3 em=emit;\n";
    shader = shader + "float al=alpha;\n";
    shader = shader + "vec3 amblight=amb;\n";
    shader = shader + "vec4 normalmap= vec4(n,0.0);\n";
    if(colors) {
      shader = shader + "vec4 color = vcolor;";
      shader = shader + "al = vcolor.a;"
    }else {
      shader = shader + "vec4 color = baseColor;"
    }
    shader = shader + "float pheight=0.0;\n";
    shader = shader + "vec3 textureHeight=vec3(0.0,0.0,0.0);\n";
    shader = shader + "vec3 normal = normalize(n);\n";
    shader = shader + "vec3 b = vec3(0.0,0.0,0.0);\n";
    var diffuseLayer = 0;
    var anyAlpha = false;
    for(i = 0;i < this.layers.length;i++) {
      shader = shader + "textureCoords=textureCoords" + i + "+textureHeight;\n";
      shader = shader + "mask=layeralpha" + i + "*mask;\n";
      if(this.layers[i].mapinput == GLGE.MAP_VIEW) {
        shader = shader + "view=projection * vec4(-eyevec,1.0);\n";
        shader = shader + "textureCoords=view.xyz/view.w*0.5+0.5;\n";
        shader = shader + "textureCoords=textureCoords+textureHeight;\n"
      }
      if(this.layers[i].mapinput == GLGE.MAP_POINT) {
        shader = shader + "textureCoords=vec3(gl_PointCoord,1.0);\n"
      }
      if(this.layers[i].getTexture().className == "Texture" || this.layers[i].getTexture().className == "TextureCanvas" || this.layers[i].getTexture().className == "TextureVideo") {
        var txcoord = "xy";
        var sampletype = "2D"
      }else {
        var txcoord = "xyz";
        var sampletype = "Cube"
      }
      if((this.layers[i].mapto & GLGE.M_COLOR) == GLGE.M_COLOR) {
        diffuseLayer = i;
        if(this.layers[i].blendMode == GLGE.BL_MUL) {
          shader = shader + "color = color*(1.0-mask) + color*texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ")*mask;\n"
        }else {
          shader = shader + "color = color*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ")*mask;\n"
        }
      }
      if((this.layers[i].mapto & GLGE.M_HEIGHT) == GLGE.M_HEIGHT) {
        shader = shader + "pheight = texture2D(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").x;\n";
        shader = shader + "textureHeight =vec3((layerheight" + i + "* (pheight-0.5)  * normalize(eyevec).xy*vec2(1.0,-1.0)),0.0);\n"
      }
      if((this.layers[i].mapto & GLGE.M_SPECCOLOR) == GLGE.M_SPECCOLOR) {
        shader = shader + "specC = specC*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").rgb*mask;\n"
      }
      if((this.layers[i].mapto & GLGE.M_MSKR) == GLGE.M_MSKR) {
        shader = shader + "mask = texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").r;\n"
      }
      if((this.layers[i].mapto & GLGE.M_MSKG) == GLGE.M_MSKG) {
        shader = shader + "mask = texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").g;\n"
      }
      if((this.layers[i].mapto & GLGE.M_MSKB) == GLGE.M_MSKB) {
        shader = shader + "mask = texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").b;\n"
      }
      if((this.layers[i].mapto & GLGE.M_MSKA) == GLGE.M_MSKA) {
        shader = shader + "mask = texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").a;\n"
      }
      if((this.layers[i].mapto & GLGE.M_SPECULAR) == GLGE.M_SPECULAR) {
        shader = shader + "spec = spec*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").r*mask;\n"
      }
      if((this.layers[i].mapto & GLGE.M_REFLECT) == GLGE.M_REFLECT) {
        shader = shader + "ref = ref*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").g*mask;\n"
      }
      if((this.layers[i].mapto & GLGE.M_SHINE) == GLGE.M_SHINE) {
        shader = shader + "sh = sh*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").b*mask*255.0;\n"
      }
      if((this.layers[i].mapto & GLGE.M_EMIT) == GLGE.M_EMIT) {
        shader = shader + "em = em*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").rgb*mask;\n"
      }
      if((this.layers[i].mapto & GLGE.M_NOR) == GLGE.M_NOR) {
        shader = shader + "normalmap = normalmap*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ")*mask;\n";
        shader = shader + "normal = normalmap.rgb;\n";
        shader = shader + "normal = 2.0*(vec3(normal.r, -normal.g, normal.b) - vec3(0.5, -0.5, 0.5));";
        shader = shader + "b=normalize(cross(t.xyz,n));\n";
        shader = shader + "normal = normal.x*t + normal.y*b + normal.z*n;";
        shader = shader + "normal = normalize(normal);"
      }
      if((this.layers[i].mapto & GLGE.M_ALPHA) == GLGE.M_ALPHA) {
        anyAlpha = true;
        shader = shader + "al = al*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").a*mask;\n"
      }
      if((this.layers[i].mapto & GLGE.M_AMBIENT) == GLGE.M_AMBIENT) {
        shader = shader + "amblight = amblight*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[i].texture.idx + ", textureCoords." + txcoord + ").rgb*mask;\n"
      }
    }
    if(!anyAlpha && this.layers.length) {
      if(this.layers[diffuseLayer].getTexture().className == "Texture" || this.layers[diffuseLayer].getTexture().className == "TextureCanvas" || this.layers[diffuseLayer].getTexture().className == "TextureVideo") {
        var txcoord = "xy";
        var sampletype = "2D"
      }else {
        var txcoord = "xyz";
        var sampletype = "Cube"
      }
      shader = shader + "al = al*(1.0-mask) + texture" + sampletype + "(TEXTURE" + this.layers[diffuseLayer].texture.idx + ", textureCoords." + txcoord + ").a*al*mask;\n"
    }
    if(this.binaryAlpha) {
      shader = shader + "if(al<0.5) discard;\n";
      shader = shader + "al=1.0;\n"
    }else {
      shader = shader + "if(al<0.0625) discard;\n"
    }
    shader = shader + "vec3 lightvalue=amblight;\n";
    shader = shader + "float dotN,spotEffect;";
    shader = shader + "vec3 lightvec=vec3(0.0,0.0,0.0);";
    shader = shader + "vec3 viewvec=vec3(0.0,0.0,0.0);";
    shader = shader + "vec3 specvalue=vec3(0.0,0.0,0.0);";
    shader = shader + "vec2 scoord=vec2(0.0,0.0);";
    shader = shader + "float sDepth=0.0;";
    shader = shader + "float spotmul=0.0;";
    shader = shader + "float rnd=0.0;";
    shader = shader + "float spotsampleX=0.0;";
    shader = shader + "float spotsampleY=0.0;";
    shader = shader + "float totalweight=0.0;";
    shader = shader + "int cnt=0;";
    shader = shader + "float specularSmoothStepValue=.125;\n";
    shader = shader + "vec2 spotoffset=vec2(0.0,0.0);";
    shader = shader + "float dp=0.0;";
    shader = shader + "vec4 dist;float depth;\n";
    shader = shader + "if (normal.z<0.0) {normal.z=0.0;}\n";
    shader = shader + "float fogfact=1.0;";
    shader = shader + "if(fogtype==" + GLGE.FOG_QUADRATIC + " || fogtype==" + GLGE.FOG_SKYQUADRATIC + ") fogfact=clamp(pow(max((fogfar - length(eyevec)) / (fogfar - fognear),0.0),2.0),0.0,1.0);\n";
    shader = shader + "if(fogtype==" + GLGE.FOG_LINEAR + " || fogtype==" + GLGE.FOG_SKYLINEAR + ") fogfact=clamp((fogfar - length(eyevec)) / (fogfar - fognear),0.0,1.0);\n";
    shader = shader + "if (emitpass) {gl_FragColor=vec4(em,1.0);} else if (shadeless) {\n";
    shader = shader + "gl_FragColor=vec4(color.rgb,1.0);\n";
    shader = shader + "} else {\n";
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      shader = shader + "lightvec=lightvec" + i + ";\n";
      shader = shader + "viewvec=eyevec;\n";
      if(lights[i].type == GLGE.L_POINT) {
        shader = shader + "dotN=max(dot(normal,normalize(-lightvec)),0.0);\n";
        shader = shader + "att = 1.0 / (lightAttenuation" + i + "[0] + lightAttenuation" + i + "[1] * lightdist" + i + " + lightAttenuation" + i + "[2] * lightdist" + i + " * lightdist" + i + ");\n";
        shader = shader + "if(dotN>0.0){\n";
        if(lights[i].diffuse) {
          shader = shader + "lightvalue += att * dotN * lightcolor" + i + ";\n"
        }
        shader = shader + "}\n";
        if(lights[i].specular) {
          shader = shader + "specvalue += smoothstep(-specularSmoothStepValue,specularSmoothStepValue,dotN)*att * specC * lightcolor" + i + " * spec  * pow(max(dot(reflect(normalize(lightvec), normal),normalize(viewvec)),0.0), 0.3*sh);\n"
        }
      }
      shader = shader + "spotEffect = 0.0;\n";
      if(lights[i].type == GLGE.L_SPOT) {
        shader = shader + "spotEffect = dot(normalize(lightdir" + i + "), normalize(-lightvec" + i + "));";
        shader = shader + "if (spotEffect > spotCosCutOff" + i + ") {\n";
        shader = shader + "spotEffect = pow(spotEffect, spotExp" + i + ");";
        if(lights[i].getCastShadows() && this.shadow) {
          shader = shader + "scoord=(((spotcoord" + i + ".xy)/spotcoord" + i + ".w)+1.0)/2.0;\n";
          shader = shader + "if(scoord.x>0.0 && scoord.x<1.0 && scoord.y>0.0 && scoord.y<1.0){\n";
          shader = shader + "dist=texture2D(TEXTURE" + shadowlights[i] + ", scoord);\n";
          shader = shader + "depth = dot(dist, vec4(0.000000059604644775390625,0.0000152587890625,0.00390625,1.0))*" + lights[i].distance + ".0;\n";
          shader = shader + "spotmul=0.0;\n";
          shader = shader + "totalweight=0.0;\n";
          shader = shader + "if((depth+shadowbias" + i + "-length(lightvec" + i + "))<0.0) {spotmul=1.0; totalweight=1.0;}\n";
          if(lights[i].samples > 0) {
            shader = shader + "for(int cnt=0; cnt<4; cnt++){;\n";
            shader = shader + "spotsampleX=-0.707106781;spotsampleY=-0.707106781;\n";
            shader = shader + "if(cnt==0 || cnt==3) spotsampleX=0.707106781;\n";
            shader = shader + "if(cnt==1 || cnt==3) spotsampleY=0.707106781;\n";
            shader = shader + "spotoffset=vec2(spotsampleX,spotsampleY)*0.5;\n";
            shader = shader + "dist=texture2D(TEXTURE" + shadowlights[i] + ", scoord+spotoffset*shadowsoftness" + i + ");\n";
            shader = shader + "depth = dot(dist, vec4(0.000000059604644775390625,0.0000152587890625,0.00390625,1.0))*" + lights[i].distance + ".0;\n";
            shader = shader + "if((depth+shadowbias" + i + "-length(lightvec" + i + "))<0.0){\n";
            shader = shader + "spotmul+=length(spotoffset);\n";
            shader = shader + "}\n";
            shader = shader + "totalweight+=length(spotoffset);\n";
            shader = shader + "};\n";
            shader = shader + "if(totalweight!=spotmul){\n";
            shader = shader + "spotmul=0.0;\n";
            shader = shader + "totalweight=0.0;\n";
            shader = shader + "for(int cnt=0; cnt<" + lights[i].samples + "; cnt++){;\n";
            shader = shader + "rnd=(fract(sin(dot(scoord,vec2(12.9898,78.233))) * 43758.5453)-0.5)*2.0;\n";
            shader = shader + "spotsampleX=cos(float(cnt)*" + (360 / lights[i].samples).toFixed(2) + "+rnd);\n";
            shader = shader + "spotsampleY=sin(float(cnt)*" + (360 / lights[i].samples).toFixed(2) + "+rnd);\n";
            shader = shader + "spotoffset=vec2(spotsampleX,spotsampleY)*0.5;\n";
            shader = shader + "dist=texture2D(TEXTURE" + shadowlights[i] + ", scoord+spotoffset*shadowsoftness" + i + ");\n";
            shader = shader + "depth = dot(dist, vec4(0.000000059604644775390625,0.0000152587890625,0.00390625,1.0))*" + lights[i].distance + ".0;\n";
            shader = shader + "if((depth+shadowbias" + i + "-length(lightvec" + i + "))<0.0){\n";
            shader = shader + "spotmul+=length(spotoffset);\n";
            shader = shader + "}\n";
            shader = shader + "totalweight+=length(spotoffset);\n";
            shader = shader + "};\n";
            shader = shader + "}\n"
          }
          shader = shader + "if(totalweight>0.0) spotEffect=spotEffect*pow(1.0-spotmul/totalweight,3.0);\n";
          shader = shader + "}\n"
        }
        shader = shader + "dotN=max(dot(normal,normalize(-lightvec)),0.0);\n";
        if(lights[i].negativeShadow) {
          shader = shader + "if(dotN>0.0){\n";
          if(lights[i].diffuse) {
            shader = shader + "lightvalue -= (1.0-spotEffect) / (lightAttenuation" + i + "[0] + lightAttenuation" + i + "[1] * lightdist" + i + " + lightAttenuation" + i + "[2] * lightdist" + i + " * lightdist" + i + ");\n"
          }
          shader = shader + "}\n"
        }else {
          shader = shader + "att = spotEffect / (lightAttenuation" + i + "[0] + lightdist" + i + "*(lightAttenuation" + i + "[1]  + lightAttenuation" + i + "[2] * lightdist" + i + "));\n";
          shader = shader + "if(dotN>0.0){\n";
          if(lights[i].diffuse) {
            shader = shader + "lightvalue += att * dotN * lightcolor" + i + ";\n"
          }
          shader = shader + "}\n";
          if(lights[i].specular) {
            shader = shader + "specvalue += smoothstep(-specularSmoothStepValue,specularSmoothStepValue,dotN) * att * specC * lightcolor" + i + " * spec  * pow(max(dot(reflect(normalize(lightvec), normal),normalize(viewvec)),0.0), 0.3 * sh);\n"
          }
        }
        shader = shader + "}\n"
      }
      if(lights[i].type == GLGE.L_DIR) {
        shader = shader + "dotN=max(dot(normal,-normalize(lightvec)),0.0);\n";
        if(lights[i].getCastShadows() && this.shadow) {
          shader = shader + "float shadowfact" + i + " = 0.0;\n";
          shader = shader + "float level" + i + " = 1.0;\n";
          shader = shader + "scoord=((spotcoord" + i + ".xy)+1.0)/2.0;\n";
          var levels = lights[i].getCascadeLevels();
          for(var l = 1;l < levels;l++) {
            shader = shader + "if(scoord.x<0.0 || scoord.x>1.0 || scoord.y<0.0 || scoord.y>1.0) {scoord=((spotcoord" + i + ".xy-shadowoffset" + i + ")*" + Math.pow(0.5, l).toFixed(5) + "+shadowoffset" + i + "+1.0)/2.0;level" + i + "=" + (l + 1).toFixed(2) + ";};\n"
          }
          shader = shader + "scoord.y=scoord.y/" + levels.toFixed(2) + "+1.0-" + 1 / levels + "*level" + i + ";\n";
          if(lights[i].samples == 0) {
            shader = shader + "dist=texture2D(TEXTURE" + shadowlights[i] + ", scoord);\n";
            shader = shader + "depth = dot(dist, vec4(0.000000059604644775390625,0.0000152587890625,0.00390625,1.0))*" + (+lights[i].distance).toFixed(2) + ";\n";
            shader = shader + "sDepth = ((spotcoord" + i + ".z)/spotcoord" + i + ".w+1.0)/2.0;\n";
            shader = shader + "if(scoord.x>0.0 && scoord.x<1.0 && scoord.y>0.0 && scoord.y<1.0 && sDepth-shadowbias" + i + "-depth>0.0) {\n";
            shader = shader + "shadowfact" + i + "=pow(clamp(2.0*length(eyevec)/" + (+lights[i].distance).toFixed(2) + ",0.0,1.0),2.0);\n";
            shader = shader + "}else{shadowfact" + i + "=1.0;}\n"
          }else {
            shader = shader + "rnd=(fract(sin(dot(scoord,vec2(12.9898,78.233))) * 43758.5453)-0.5)*2.0;\n";
            for(var x = -lights[i].samples;x <= lights[i].samples;x++) {
              for(var y = -lights[i].samples;y <= lights[i].samples;y++) {
                shader = shader + "dist=texture2D(TEXTURE" + shadowlights[i] + ", scoord+vec2(" + (x / lights[i].bufferWidth).toFixed(4) + "," + (y / lights[i].bufferHeight).toFixed(4) + ")*shadowsoftness" + i + "*100.0/level" + i + "+vec2(" + (1 / lights[i].bufferWidth).toFixed(4) + "," + (1 / lights[i].bufferHeight).toFixed(4) + ")*rnd);\n";
                shader = shader + "depth = dot(dist, vec4(0.000000059604644775390625,0.0000152587890625,0.00390625,1.0))*" + (+lights[i].distance).toFixed(2) + ";\n";
                shader = shader + "sDepth = ((spotcoord" + i + ".z)/spotcoord" + i + ".w+1.0)/2.0;\n";
                shader = shader + "if(scoord.x>0.0 && scoord.x<1.0 && scoord.y>0.0 && scoord.y<1.0 && sDepth-shadowbias" + i + "-depth>0.0) {\n";
                shader = shader + "shadowfact" + i + "+=pow(clamp(2.0*length(eyevec)/" + (+lights[i].distance).toFixed(2) + ",0.0,1.0),2.0);\n";
                shader = shader + "}else{shadowfact" + i + "+=1.0;}\n"
              }
            }
            shader = shader + "shadowfact" + i + "/=" + ((lights[i].samples * 2 + 1) * (lights[i].samples * 2 + 1)).toFixed(1) + ";\n"
          }
        }else {
          shader = shader + "float shadowfact" + i + " = 1.0;\n"
        }
        if(lights[i].diffuse) {
          shader = shader + "lightvalue += dotN * lightcolor" + i + " * shadowfact" + i + ";\n"
        }
        if(lights[i].specular) {
          shader = shader + "specvalue += smoothstep(-specularSmoothStepValue,specularSmoothStepValue,dotN) * specC * lightcolor" + i + " * spec  * pow(max(dot(reflect(normalize(lightvec), normal),normalize(viewvec)),0.0), 0.3 * sh);\n"
        }
      }
    }
    shader = shader + "lightvalue = (lightvalue)*ref;\n";
    shader = shader + "vec3 fc=fogcolor.rgb;\n";
    shader = shader + "if(fogtype==" + GLGE.FOG_SKYLINEAR + " || fogtype==" + GLGE.FOG_SKYQUADRATIC + "){";
    shader = shader + "vec4 view=projection * vec4(-eyevec,1.0);\n";
    shader = shader + "vec2 fogCoords=view.xy/view.w*0.5+0.5;\n";
    shader = shader + "fc=texture2D(sky,fogCoords.xy).rgb;\n";
    shader = shader + "}\n";
    shader = shader + "gl_FragColor =vec4(specvalue.rgb+color.rgb*lightvalue.rgb+em.rgb,al)*fogfact+vec4(fc,al)*(1.0-fogfact);\n";
    shader = shader + "}\n";
    shader = shader + "}\n";
    return shader
  };
  GLGE.Material.prototype.textureUniforms = function(gl, shaderProgram, lights, object) {
    if(this.animation) {
      this.animate()
    }
    var pc = shaderProgram.caches;
    if(pc.baseColor != this.color) {
      if(this.ccache != this.color) {
        this.ccache = this.color;
        this.glColor = new Float32Array([this.color.r, this.color.g, this.color.b, this.color.a])
      }
      gl.uniform4fv(GLGE.getUniformLocation(gl, shaderProgram, "baseColor"), this.glColor);
      pc.baseColor = this.color
    }
    if(pc.specColor != this.specColor) {
      if(this.sccache != this.specColor) {
        this.sccache = this.specColor;
        this.glspecColor = new Float32Array([this.specColor.r, this.specColor.g, this.specColor.b])
      }
      gl.uniform3fv(GLGE.getUniformLocation(gl, shaderProgram, "specColor"), this.glspecColor);
      pc.specColor = this.specColor
    }
    if(pc.emit != this.emit) {
      gl.uniform3f(GLGE.getUniformLocation(gl, shaderProgram, "emit"), this.emit.r, this.emit.g, this.emit.b);
      pc.emit = this.emit
    }
    if(pc.specular != this.specular) {
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "specular"), this.specular);
      pc.specular = this.specular
    }
    if(pc.shine != this.shine) {
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "shine"), this.shine);
      pc.shine = this.shine
    }
    if(pc.reflect != this.reflect) {
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "reflective"), this.reflect);
      pc.reflect = this.reflect
    }
    if(pc.alpha != this.alpha) {
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "alpha"), this.alpha);
      pc.alpha = this.alpha
    }
    if(pc.shadeless == undefined || pc.shadeless != this.shadeless) {
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, shaderProgram, "shadeless"), this.shadeless);
      pc.shadeless = this.shadeless
    }
    if(gl.scene.skyTexture) {
      gl.activeTexture(gl["TEXTURE0"]);
      gl.bindTexture(gl.TEXTURE_2D, gl.scene.skyTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, shaderProgram, "sky"), 0)
    }
    var cnt = 1;
    var num = 0;
    if(!pc["lightcolor"]) {
      pc["lightcolor"] = [];
      pc["lightAttenuation"] = [];
      pc["spotCosCutOff"] = [];
      pc["spotExponent"] = [];
      pc["shadowbias"] = [];
      pc["castshadows"] = [];
      pc["shadowsamples"] = [];
      pc["shadowsoftness"] = []
    }
    for(var i = 0;i < lights.length;i++) {
      if(lights[i].type == GLGE.L_OFF) {
        continue
      }
      if(pc["lightcolor"][i] != lights[i].color) {
        GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, shaderProgram, "lightcolor" + i), lights[i].color.r, lights[i].color.g, lights[i].color.b);
        pc["lightcolor"][i] = lights[i].color
      }
      if(pc["lightAttenuation"][i] != lights[i].constantAttenuation) {
        GLGE.setUniform3(gl, "3f", GLGE.getUniformLocation(gl, shaderProgram, "lightAttenuation" + i), lights[i].constantAttenuation, lights[i].linearAttenuation, lights[i].quadraticAttenuation);
        pc["lightAttenuation"][i] = lights[i].constantAttenuation
      }
      if(pc["spotCosCutOff"][i] != lights[i].spotCosCutOff) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "spotCosCutOff" + i), lights[i].spotCosCutOff);
        pc["spotCosCutOff"][i] = lights[i].spotCosCutOff
      }
      if(pc["spotExponent"][i] != lights[i].spotExponent) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "spotExp" + i), lights[i].spotExponent);
        pc["spotExponent"][i] = lights[i].spotExponent
      }
      if(pc["shadowbias"][i] != lights[i].shadowBias) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "shadowbias" + i), lights[i].shadowBias);
        pc["shadowbias"][i] = lights[i].shadowBias
      }
      if(pc["shadowsoftness"][i] != lights[i].softness) {
        GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "shadowsoftness" + i), lights[i].softness);
        pc["shadowsoftness"][i] = lights[i].softness
      }
      if(lights[i].getCastShadows() && this.shadow) {
        num = this.textures.length + cnt++;
        gl.activeTexture(gl["TEXTURE" + num]);
        gl.bindTexture(gl.TEXTURE_2D, lights[i].texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, shaderProgram, "TEXTURE" + num), num)
      }
    }
    if(!shaderProgram.glarrays.layermat) {
      shaderProgram.glarrays.layermat = []
    }
    var scale, offset;
    for(i = 0;i < this.layers.length;i++) {
      if(this.layers[i].animation) {
        this.layers[i].animate()
      }
      scale = this.layers[i].getScale();
      offset = this.layers[i].getOffset();
      if(!shaderProgram.glarrays.layermat[i]) {
        shaderProgram.glarrays.layermat[i] = new Float32Array(this.layers[i].getMatrix())
      }else {
        GLGE.mat4gl(this.layers[i].getMatrix(), shaderProgram.glarrays.layermat[i])
      }
      try {
        GLGE.setUniformMatrix(gl, "Matrix4fv", GLGE.getUniformLocation(gl, shaderProgram, "layer" + i + "Matrix"), true, shaderProgram.glarrays.layermat[i])
      }catch(e) {
      }
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "layeralpha" + i), this.layers[i].getAlpha());
      GLGE.setUniform(gl, "1f", GLGE.getUniformLocation(gl, shaderProgram, "layerheight" + i), this.layers[i].getHeight())
    }
    for(var i = 0;i < this.textures.length;i++) {
      gl.activeTexture(gl["TEXTURE" + (i + 1)]);
      if(this.textures[i].doTexture(gl, object)) {
      }
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, shaderProgram, "TEXTURE" + i), i + 1)
    }
  };
  GLGE.Material.prototype.isComplete = function() {
    for(var i = 0;i < this.textures.length;i++) {
      if(!this.textures[i].isComplete) {
        continue
      }
      if(!this.textures[i].isComplete()) {
        return false
      }
    }
    return true
  };
  GLGE.Material.prototype.addTexture = function(texture) {
    if(typeof texture == "string") {
      texture = GLGE.Assets.get(texture)
    }
    var material = this;
    texture.addEventListener("downloadComplete", function() {
      if(material.isComplete()) {
        material.fireEvent("downloadComplete")
      }
    });
    this.textures.push(texture);
    texture.idx = this.textures.length - 1;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Material.prototype.addTextureCube = GLGE.Material.prototype.addTexture;
  GLGE.Material.prototype.addTextureCamera = GLGE.Material.prototype.addTexture;
  GLGE.Material.prototype.addTextureCanvas = GLGE.Material.prototype.addTexture;
  GLGE.Material.prototype.addTextureVideo = GLGE.Material.prototype.addTexture;
  GLGE.DEFAULT_MATERIAL = new GLGE.Material
})(GLGE);
(function(GLGE) {
  GLGE.Mesh = function(uid, windingOrder) {
    GLGE.Assets.registerAsset(this, uid);
    this.GLbuffers = [];
    this.buffers = [];
    this.UV = [];
    this.boneWeights = [];
    this.setBuffers = [];
    this.faces = {};
    if(windingOrder !== undefined) {
      this.windingOrder = windingOrder
    }else {
      this.windingOrder = GLGE.Mesh.WINDING_ORDER_CLOCKWISE
    }
  };
  GLGE.Mesh.WINDING_ORDER_UNKNOWN = 2;
  GLGE.Mesh.WINDING_ORDER_CLOCKWISE = 1;
  GLGE.Mesh.WINDING_ORDER_COUNTER = 0;
  GLGE.augment(GLGE.QuickNotation, GLGE.Mesh);
  GLGE.augment(GLGE.JSONLoader, GLGE.Mesh);
  GLGE.augment(GLGE.Events, GLGE.Mesh);
  GLGE.Mesh.prototype.gl = null;
  GLGE.Mesh.prototype.className = "Mesh";
  GLGE.Mesh.prototype.GLbuffers = null;
  GLGE.Mesh.prototype.buffers = null;
  GLGE.Mesh.prototype.setBuffers = null;
  GLGE.Mesh.prototype.GLfaces = null;
  GLGE.Mesh.prototype.faces = null;
  GLGE.Mesh.prototype.UV = null;
  GLGE.Mesh.prototype.joints = null;
  GLGE.Mesh.prototype.invBind = null;
  GLGE.Mesh.prototype.loaded = false;
  GLGE.Mesh.prototype.getBoundingVolume = function() {
    if(!this.boundingVolume) {
      var minX, maxX, minY, maxY, minZ, maxZ;
      for(var i = 0;i < this.buffers.length;i++) {
        if(this.buffers[i].name == "position") {
          var positions = this.buffers[i].data
        }
      }
      for(var i = 0;i < positions.length;i = i + 3) {
        if(i == 0) {
          minX = maxX = positions[i];
          minY = maxY = positions[i + 1];
          minZ = maxZ = positions[i + 2]
        }else {
          minX = Math.min(minX, positions[i]);
          maxX = Math.max(maxX, positions[i]);
          minY = Math.min(minY, positions[i + 1]);
          maxY = Math.max(maxY, positions[i + 1]);
          minZ = Math.min(minZ, positions[i + 2]);
          maxZ = Math.max(maxZ, positions[i + 2])
        }
      }
      this.boundingVolume = new GLGE.BoundingVolume(minX, maxX, minY, maxY, minZ, maxZ)
    }
    return this.boundingVolume
  };
  GLGE.Mesh.prototype.setJoints = function(jsArray) {
    this.joints = jsArray;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Mesh.prototype.setInvBindMatrix = function(jsArray) {
    this.invBind = jsArray;
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Mesh.prototype.setVertexJoints = function(jsArray, num) {
    if(!num) {
      num = jsArray.length * 3 / this.positions.length
    }
    if(num < 5) {
      this.setBuffer("joints1", jsArray, num)
    }else {
      var jsArray1 = [];
      var jsArray2 = [];
      for(var i = 0;i < jsArray.length;i++) {
        if(i % num < 4) {
          jsArray1.push(jsArray[i])
        }else {
          jsArray2.push(jsArray[i])
        }
      }
      this.setBuffer("joints1", jsArray1, 4);
      this.setBuffer("joints2", jsArray2, num - 4)
    }
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Mesh.prototype.setVertexWeights = function(jsArray, num) {
    if(!num) {
      num = jsArray.length * 3 / this.positions.length
    }
    for(var i = 0;i < jsArray.length;i = i + parseInt(num)) {
      var total = 0;
      for(var n = 0;n < num;n++) {
        total += parseFloat(jsArray[i + n])
      }
      if(total == 0) {
        total = 1
      }
      for(var n = 0;n < num;n++) {
        jsArray[i + n] = jsArray[i + n] / total
      }
    }
    if(num < 4) {
      this.setBuffer("weights1", jsArray, num)
    }else {
      var jsArray1 = [];
      var jsArray2 = [];
      for(var i = 0;i < jsArray.length;i++) {
        if(i % num < 4) {
          jsArray1.push(jsArray[i])
        }else {
          jsArray2.push(jsArray[i])
        }
      }
      this.setBuffer("weights1", jsArray1, 4);
      this.setBuffer("weights2", jsArray2, num - 4)
    }
    this.fireEvent("shaderupdate", {});
    return this
  };
  GLGE.Mesh.prototype.clearBuffers = function() {
    this.GLFaces = null;
    delete this.GLFaces;
    for(i in this.buffers) {
      this.buffers[i] = null;
      delete this.buffers[i]
    }
    this.buffers = [];
    this.loaded = false
  };
  GLGE.Mesh.prototype.setUV = function(jsArray) {
    var idx = 0;
    for(var i = 0;i < jsArray.length;i = i + 2) {
      this.UV[idx] = jsArray[i];
      this.UV[idx + 1] = jsArray[i + 1];
      if(!this.UV[idx + 2]) {
        this.UV[idx + 2] = jsArray[i]
      }
      if(!this.UV[idx + 3]) {
        this.UV[idx + 3] = jsArray[i + 1]
      }
      idx = idx + 4
    }
    this.setBuffer("UV", this.UV, 4);
    return this
  };
  GLGE.Mesh.prototype.setUV2 = function(jsArray) {
    var idx = 0;
    for(var i = 0;i < jsArray.length;i = i + 2) {
      if(!this.UV[idx]) {
        this.UV[idx] = jsArray[i]
      }
      if(!this.UV[idx + 1]) {
        this.UV[idx + 1] = jsArray[i + 1]
      }
      this.UV[idx + 2] = jsArray[i];
      this.UV[idx + 3] = jsArray[i + 1];
      idx = idx + 4
    }
    this.setBuffer("UV", this.UV, 4);
    return this
  };
  GLGE.Mesh.prototype.setPositions = function(jsArray) {
    this.loaded = true;
    this.positions = jsArray;
    this.setBuffer("position", jsArray, 3);
    return this
  };
  GLGE.Mesh.prototype.setVertexColors = function(jsArray) {
    this.colors = jsArray;
    this.setBuffer("color", jsArray, 4);
    return this
  };
  GLGE.Mesh.prototype.setNormals = function(jsArray) {
    this.normals = jsArray;
    this.setBuffer("normal", jsArray, 3);
    return this
  };
  GLGE.Mesh.prototype.setBuffer = function(bufferName, jsArray, size) {
    for(var i = 0;i < jsArray.length;i++) {
      jsArray[i] = parseFloat(jsArray[i])
    }
    var buffer;
    for(var i = 0;i < this.buffers.length;i++) {
      if(this.buffers[i].name == bufferName) {
        buffer = i
      }
    }
    if(!buffer) {
      this.buffers.push({name:bufferName, data:jsArray, size:size, GL:false})
    }else {
      this.buffers[buffer] = {name:bufferName, data:jsArray, size:size, GL:false}
    }
    return this
  };
  GLGE.Mesh.prototype.tangentFromUV = function(p1, p2, p3, uv1, uv2, uv3, n) {
    var toUnitVec3 = GLGE.toUnitVec3;
    var subVec3 = GLGE.subVec3;
    var scaleVec3 = GLGE.scaleVec3;
    var dotVec3 = GLGE.dotVec3;
    var crossVec3 = GLGE.crossVec3;
    uv21 = [uv2[0] - uv1[0], uv2[1] - uv1[1]];
    uv31 = [uv3[0] - uv1[0], uv3[1] - uv1[1]];
    p21 = GLGE.subVec3(p2, p1);
    p31 = GLGE.subVec3(p3, p1);
    var s = uv21[0] * uv31[1] - uv31[0] * uv21[1];
    if(s != 0) {
      s = 1 / s;
      var t = subVec3(scaleVec3(p21, uv31[1] * s), scaleVec3(p31, uv21[1] * s));
      var b = subVec3(scaleVec3(p31, uv21[0] * s), scaleVec3(p21, uv31[0] * s))
    }else {
      t = [0, 0, 0];
      b = [0, 0, 0]
    }
    if(GLGE.dotVec3(GLGE.crossVec3(p21, p31), n) > 0) {
      t = scaleVec3(t, -1);
      b = scaleVec3(b, -1)
    }
    return[t, b]
  };
  GLGE.Mesh.prototype.setFaces = function(jsArray) {
    this.faces = {data:jsArray, GL:false};
    if(!this.normals) {
      this.calcNormals()
    }
    for(var i = 0;i < this.buffers.length;i++) {
      if(this.buffers[i].name == "position") {
        var position = this.buffers[i].data
      }
      if(this.buffers[i].name == "UV") {
        var uv = this.buffers[i].data
      }
      if(this.buffers[i].name == "normal") {
        var normal = this.buffers[i].data
      }
    }
    if(position && uv) {
      var tangentArray = [];
      var data = {};
      var ref;
      for(var i = 0;i < position.length;i++) {
        tangentArray[i] = 0
      }
      for(var i = 0;i < this.faces.data.length;i = i + 3) {
        var p1 = [position[parseInt(this.faces.data[i]) * 3], position[parseInt(this.faces.data[i]) * 3 + 1], position[parseInt(this.faces.data[i]) * 3 + 2]];
        var p2 = [position[parseInt(this.faces.data[i + 1]) * 3], position[parseInt(this.faces.data[i + 1]) * 3 + 1], position[parseInt(this.faces.data[i + 1]) * 3 + 2]];
        var p3 = [position[parseInt(this.faces.data[i + 2]) * 3], position[parseInt(this.faces.data[i + 2]) * 3 + 1], position[parseInt(this.faces.data[i + 2]) * 3 + 2]];
        var n1 = [normal[parseInt(this.faces.data[i]) * 3], normal[parseInt(this.faces.data[i]) * 3 + 1], normal[parseInt(this.faces.data[i]) * 3 + 2]];
        var n2 = [normal[parseInt(this.faces.data[i + 1]) * 3], normal[parseInt(this.faces.data[i + 1]) * 3 + 1], normal[parseInt(this.faces.data[i + 1]) * 3 + 2]];
        var n3 = [normal[parseInt(this.faces.data[i + 2]) * 3], normal[parseInt(this.faces.data[i + 2]) * 3 + 1], normal[parseInt(this.faces.data[i + 2]) * 3 + 2]];
        var uv1 = [uv[parseInt(this.faces.data[i]) * 4], uv[parseInt(this.faces.data[i]) * 4 + 1]];
        var uv2 = [uv[parseInt(this.faces.data[i + 1]) * 4], uv[parseInt(this.faces.data[i + 1]) * 4 + 1]];
        var uv3 = [uv[parseInt(this.faces.data[i + 2]) * 4], uv[parseInt(this.faces.data[i + 2]) * 4 + 1]];
        var tb = this.tangentFromUV(p2, p1, p3, uv2, uv1, uv3, n2);
        if(!data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")]) {
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")] = tb
        }else {
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][0][0] += tb[0][0];
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][0][1] += tb[0][1];
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][0][2] += tb[0][2];
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][1][0] += tb[1][0];
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][1][1] += tb[1][1];
          data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][1][2] += tb[1][2]
        }
        if(!data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")]) {
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")] = tb
        }else {
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][0][0] += tb[0][0];
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][0][1] += tb[0][1];
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][0][2] += tb[0][2];
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][1][0] += tb[1][0];
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][1][1] += tb[1][1];
          data[[p2[0], p2[1], p2[2], uv2[0], uv2[1], n2[0], n2[1], n2[2]].join(",")][1][2] += tb[1][2]
        }
        if(!data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")]) {
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")] = tb
        }else {
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][0][0] += tb[0][0];
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][0][1] += tb[0][1];
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][0][2] += tb[0][2];
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][1][0] += tb[1][0];
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][1][1] += tb[1][1];
          data[[p3[0], p3[1], p3[2], uv3[0], uv3[1], n3[0], n3[1], n3[2]].join(",")][1][2] += tb[1][2]
        }
      }
      for(var i = 0;i < position.length / 3;i++) {
        var p1 = [position[i * 3], position[i * 3 + 1], position[i * 3 + 2]];
        var n1 = [normal[i * 3], normal[i * 3 + 1], normal[i * 3 + 2]];
        var uv1 = [uv[i * 4], uv[i * 4 + 1]];
        var t = GLGE.toUnitVec3(data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][0]);
        var b = GLGE.toUnitVec3(data[[p1[0], p1[1], p1[2], uv1[0], uv1[1], n1[0], n1[1], n1[2]].join(",")][1]);
        if(t) {
          tangentArray[i * 3] = t[0];
          tangentArray[i * 3 + 1] = t[1];
          tangentArray[i * 3 + 2] = t[2]
        }
      }
      this.setBuffer("tangent", tangentArray, 3)
    }
    return this
  };
  GLGE.Mesh.prototype.GLSetFaceBuffer = function(gl) {
    if(!this.GLfaces) {
      this.GLfaces = gl.createBuffer()
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.GLfaces);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.faces.data), gl.STATIC_DRAW);
    this.GLfaces.itemSize = 1;
    this.GLfaces.numItems = this.faces.data.length
  };
  GLGE.Mesh.prototype.GLSetBuffer = function(gl, bufferName, jsArray, size) {
    if(!this.GLbuffers[bufferName]) {
      this.GLbuffers[bufferName] = gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.GLbuffers[bufferName]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(jsArray), gl.STATIC_DRAW);
    this.GLbuffers[bufferName].itemSize = size;
    this.GLbuffers[bufferName].numItems = jsArray.length / size
  };
  GLGE.Mesh.prototype.calcNormals = function() {
    var normals = [];
    var positions = this.positions;
    var faces = this.faces.data;
    if(!faces) {
      faces = [];
      for(var i = 0;i < positions.length / 3;i++) {
        faces[i] = i
      }
    }
    for(var i = 0;i < faces.length;i = i + 3) {
      var v1 = [positions[faces[i] * 3], positions[faces[i] * 3 + 1], positions[faces[i] * 3 + 2]];
      var v2 = [positions[faces[i + 1] * 3], positions[faces[i + 1] * 3 + 1], positions[faces[i + 1] * 3 + 2]];
      var v3 = [positions[faces[i + 2] * 3], positions[faces[i + 2] * 3 + 1], positions[faces[i + 2] * 3 + 2]];
      var vec1 = GLGE.subVec3(v2, v1);
      var vec2 = GLGE.subVec3(v3, v1);
      var norm = GLGE.toUnitVec3(GLGE.crossVec3(vec1, vec2));
      if(normals[faces[i]] == undefined) {
        normals[faces[i]] = []
      }
      normals[faces[i]].push(norm);
      if(normals[faces[i + 1]] == undefined) {
        normals[faces[i + 1]] = []
      }
      normals[faces[i + 1]].push(norm);
      if(normals[faces[i + 2]] == undefined) {
        normals[faces[i + 2]] = []
      }
      normals[faces[i + 2]].push(norm)
    }
    var norms = [];
    for(i = 0;i < normals.length;i++) {
      var x = 0, y = 0, z = 0;
      if(normals[i] != undefined) {
        for(var j = 0;j < normals[i].length;j++) {
          x += normals[i][j][0];
          y += normals[i][j][1];
          z += normals[i][j][2]
        }
        x /= normals[i].length;
        y /= normals[i].length;
        z /= normals[i].length;
        norms[i * 3] = x;
        norms[i * 3 + 1] = y;
        norms[i * 3 + 2] = z
      }
    }
    this.setNormals(norms)
  };
  GLGE.Mesh.prototype.GLAttributes = function(gl, shaderProgram) {
    this.gl = gl;
    if(!this.normals) {
      this.calcNormals()
    }
    for(var i = 0;i < 8;i++) {
      gl.disableVertexAttribArray(i)
    }
    if(!this.faces.GL && this.faces.data && this.faces.data.length > 0) {
      this.GLSetFaceBuffer(gl);
      this.faces.GL = true
    }
    for(i = 0;i < this.buffers.length;i++) {
      if(!this.buffers[i].GL) {
        this.GLSetBuffer(gl, this.buffers[i].name, this.buffers[i].data, this.buffers[i].size);
        this.buffers[i].GL = true
      }
      attribslot = GLGE.getAttribLocation(gl, shaderProgram, this.buffers[i].name);
      if(attribslot > -1) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.GLbuffers[this.buffers[i].name]);
        gl.enableVertexAttribArray(attribslot);
        gl.vertexAttribPointer(attribslot, this.GLbuffers[this.buffers[i].name].itemSize, gl.FLOAT, false, 0, 0)
      }
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.AnimationVector = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.curves = {}
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.AnimationVector);
  GLGE.augment(GLGE.JSONLoader, GLGE.AnimationVector);
  GLGE.AnimationVector.prototype.curves = {};
  GLGE.AnimationVector.prototype.frames = 250;
  GLGE.AnimationVector.prototype.startFrame = 0;
  GLGE.AnimationVector.prototype.addAnimationCurve = function(curve) {
    this.curves[curve.channel] = curve;
    return this
  };
  GLGE.AnimationVector.prototype.removeAnimationCurve = function(name) {
    delete this.curves[name]
  };
  GLGE.AnimationVector.prototype.setFrames = function(value) {
    this.frames = value;
    return this
  };
  GLGE.AnimationVector.prototype.getFrames = function() {
    return this.frames
  };
  GLGE.AnimationVector.prototype.setStartFrame = function(value) {
    this.startFrame = value;
    return this
  };
  GLGE.AnimationVector.prototype.getStartFrame = function() {
    return this.startFrame
  }
})(GLGE);
(function(GLGE) {
  GLGE.BezTriple = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.BezTriple);
  GLGE.augment(GLGE.JSONLoader, GLGE.BezTriple);
  GLGE.BezTriple.prototype.className = "BezTriple";
  GLGE.BezTriple.prototype.setX1 = function(x) {
    this.x1 = parseFloat(x);
    return this
  };
  GLGE.BezTriple.prototype.setY1 = function(y) {
    this.y1 = parseFloat(y);
    return this
  };
  GLGE.BezTriple.prototype.setX2 = function(x) {
    this.x = parseFloat(x);
    return this
  };
  GLGE.BezTriple.prototype.setY2 = function(y) {
    this.y = parseFloat(y);
    return this
  };
  GLGE.BezTriple.prototype.setX3 = function(x) {
    this.x3 = parseFloat(x);
    return this
  };
  GLGE.BezTriple.prototype.setY3 = function(y) {
    this.y3 = parseFloat(y);
    return this
  };
  GLGE.LinearPoint = function(uid) {
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.LinearPoint);
  GLGE.augment(GLGE.JSONLoader, GLGE.LinearPoint);
  GLGE.LinearPoint.prototype.className = "LinearPoint";
  GLGE.LinearPoint.prototype.x = 0;
  GLGE.LinearPoint.prototype.y = 0;
  GLGE.LinearPoint.prototype.setX = function(x) {
    this.x = parseFloat(x);
    return this
  };
  GLGE.LinearPoint.prototype.setY = function(y) {
    this.y = parseFloat(y);
    return this
  };
  GLGE.StepPoint = function(x, value) {
    this.x = parseFloat(x);
    this.y = value
  }
})(GLGE);
(function(GLGE) {
  GLGE.AnimationCurve = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.keyFrames = [];
    this.solutions = {};
    this.caches = {}
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.AnimationCurve);
  GLGE.augment(GLGE.JSONLoader, GLGE.AnimationCurve);
  GLGE.AnimationCurve.prototype.className = "AnimationCurve";
  GLGE.AnimationCurve.prototype.keyFrames = null;
  GLGE.AnimationCurve.prototype.addPoint = function(point) {
    this.keyFrames.push(point);
    return this.keyFrames.length - 1
  };
  GLGE.AnimationCurve.prototype.addStepPoint = GLGE.AnimationCurve.prototype.addPoint;
  GLGE.AnimationCurve.prototype.addLinearPoint = GLGE.AnimationCurve.prototype.addPoint;
  GLGE.AnimationCurve.prototype.addBezTriple = GLGE.AnimationCurve.prototype.addPoint;
  GLGE.AnimationCurve.prototype.coord = function(x, y) {
    return{x:x, y:y}
  };
  GLGE.AnimationCurve.prototype.setChannel = function(channel) {
    this.channel = channel
  };
  GLGE.AnimationCurve.prototype.getValue = function(frame, prevValue, rotation) {
    if(this.keyFrames.length == 0) {
      return 0
    }
    if(this.caches[frame]) {
      return this.caches[frame]
    }
    var startKey;
    var endKey;
    var preStartKey;
    var preEndKey;
    if(frame < this.keyFrames[0].x) {
      frame = 0
    }
    for(var i = 0;i < this.keyFrames.length;i++) {
      if(this.keyFrames[i].x <= frame && (startKey == undefined || this.keyFrames[i].x > this.keyFrames[startKey].x)) {
        preStartKey = startKey;
        startKey = i
      }else {
        if(this.keyFrames[i].x <= frame && (preStartKey == undefined || this.keyFrames[i].x > this.keyFrames[preStartKey].x)) {
          preStartKey = i
        }
      }
      if(this.keyFrames[i].x > frame && (endKey == undefined || this.keyFrames[i].x <= this.keyFrames[endKey].x)) {
        preEndKey = endKey;
        endKey = i
      }else {
        if(this.keyFrames[i].x > frame && (preEndKey == undefined || this.keyFrames[i].x <= this.keyFrames[preEndKey].x)) {
          preEndKey = i
        }
      }
    }
    if(preEndKey == undefined) {
      if(endKey == undefined) {
        endKey = startKey
      }
      preEndKey = endKey
    }
    if(startKey == undefined) {
      startKey = endKey;
      endKey = preEndKey
    }
    if(preStartKey == undefined) {
      preStartKey = startKey
    }
    if(endKey == undefined) {
      endKey = startKey;
      startKey = preStartKey
    }
    if(this.keyFrames[startKey] instanceof GLGE.BezTriple && this.keyFrames[endKey] instanceof GLGE.BezTriple) {
      var C1 = this.coord(this.keyFrames[startKey].x, this.keyFrames[startKey].y);
      var C2 = this.coord(this.keyFrames[startKey].x3, this.keyFrames[startKey].y3);
      var C3 = this.coord(this.keyFrames[endKey].x1, this.keyFrames[endKey].y1);
      var C4 = this.coord(this.keyFrames[endKey].x, this.keyFrames[endKey].y);
      return this.atX(frame, C1, C2, C3, C4).y
    }
    if(this.keyFrames[startKey] instanceof GLGE.LinearPoint && this.keyFrames[endKey] instanceof GLGE.BezTriple) {
      var C1 = this.coord(this.keyFrames[startKey].x, this.keyFrames[startKey].y);
      var C2 = this.coord(this.keyFrames[endKey].x1, this.keyFrames[endKey].y1);
      var C3 = this.coord(this.keyFrames[endKey].x1, this.keyFrames[endKey].y1);
      var C4 = this.coord(this.keyFrames[endKey].x, this.keyFrames[endKey].y);
      return this.atX(frame, C1, C2, C3, C4).y
    }
    if(this.keyFrames[startKey] instanceof GLGE.BezTriple && this.keyFrames[endKey] instanceof GLGE.LinearPoint) {
      var C1 = this.coord(this.keyFrames[startKey].x, this.keyFrames[startKey].y);
      var C2 = this.coord(this.keyFrames[startKey].x3, this.keyFrames[startKey].y3);
      var C3 = this.coord(this.keyFrames[startKey].x3, this.keyFrames[startKey].y3);
      var C4 = this.coord(this.keyFrames[endKey].x, this.keyFrames[endKey].y);
      return this.atX(frame, C1, C2, C3, C4).y
    }
    if(this.keyFrames[startKey] instanceof GLGE.LinearPoint && this.keyFrames[endKey] instanceof GLGE.LinearPoint) {
      var endY = this.keyFrames[endKey].y;
      var startY = this.keyFrames[startKey].y;
      if(rotation) {
        if(!prevValue) {
          prevValue = this.keyFrames[1 % this.keyFrames.length].y
        }
        function getCloser(a, b, del) {
          if(Math.abs(a + del - b) < Math.abs(a - b)) {
            return a + del
          }
          if(Math.abs(a - del - b) < Math.abs(a - b)) {
            return a - del
          }
          return a
        }
        endY = getCloser(endY, prevValue, 360);
        endY = getCloser(endY, prevValue, 180);
        startY = getCloser(startY, prevValue, 360);
        startY = getCloser(startY, prevValue, 180)
      }
      var delt = this.keyFrames[endKey].x - this.keyFrames[startKey].x;
      if(delt == 0) {
        delt = 1
      }
      var value = (frame - this.keyFrames[startKey].x) * (endY - startY) / delt + startY;
      return value
    }
    if(this.keyFrames[startKey] instanceof GLGE.StepPoint) {
      return this.keyFrames[startKey].y
    }
    if(!this.keyFrames.preStartKey) {
      this.keyFrames.preStartKey = this.keyFrames[0].y
    }
    this.caches[frame] = this.keyFrames.preStartKey;
    return this.caches[frame]
  };
  GLGE.AnimationCurve.prototype.B1 = function(t) {
    return t * t * t
  };
  GLGE.AnimationCurve.prototype.B2 = function(t) {
    return 3 * t * t * (1 - t)
  };
  GLGE.AnimationCurve.prototype.B3 = function(t) {
    return 3 * t * (1 - t) * (1 - t)
  };
  GLGE.AnimationCurve.prototype.B4 = function(t) {
    return(1 - t) * (1 - t) * (1 - t)
  };
  GLGE.AnimationCurve.prototype.getBezier = function(t, C1, C2, C3, C4) {
    var pos = {};
    pos.x = C1.x * this.B1(t) + C2.x * this.B2(t) + C3.x * this.B3(t) + C4.x * this.B4(t);
    pos.y = C1.y * this.B1(t) + C2.y * this.B2(t) + C3.y * this.B3(t) + C4.y * this.B4(t);
    return pos
  };
  GLGE.AnimationCurve.prototype.Quad3Solve = function(a, b, c, d) {
    ref = a + "-" + b + "-" + "-" + c + "-" + d;
    if(this.solutions[ref]) {
      return this.solutions[ref]
    }else {
      b /= a;
      c /= a;
      d /= a;
      var q, r, d1, s, t, t1, r13;
      q = (3 * c - b * b) / 9;
      r = -(27 * d) + b * (9 * c - 2 * b * b);
      r /= 54;
      t1 = b / 3;
      discrim = q * q * q + r * r;
      result = [];
      if(discrim > 0) {
        s = r + Math.sqrt(discrim);
        s = s < 0 ? -Math.pow(-s, 1 / 3) : Math.pow(s, 1 / 3);
        t = r - Math.sqrt(discrim);
        t = t < 0 ? -Math.pow(-t, 1 / 3) : Math.pow(t, 1 / 3);
        result[0] = -t1 + s + t;
        t1 = t1 + (s + t) / 2;
        result[1] = result[2] = -t1;
        t1 = Math.sqrt(3) * (-t + s) / 2
      }else {
        if(discrim == 0) {
          r13 = r < 0 ? -Math.pow(-r, 1 / 3) : Math.pow(r, 1 / 3);
          result[1] = -t1 + 2 * r13;
          result[1] = result[2] = -(r13 + t1)
        }else {
          q = -q;
          d1 = q * q * q;
          d1 = Math.acos(r / Math.sqrt(1));
          r13 = 2 * Math.sqrt(q);
          result[0] = -t1 + r13 * Math.cos(d1 / 3);
          result[1] = -t1 + r13 * Math.cos((d1 + 2 * Math.PI) / 3);
          result[2] = -t1 + r13 * Math.cos((d1 + 4 * Math.PI) / 3)
        }
      }
      var toreturn = false;
      if(result[0] >= 0 && result[0] <= 1) {
        toreturn = result[0]
      }
      if(!toreturn && result[1] >= 0 && result[1] <= 1) {
        toreturn = result[1]
      }
      if(!toreturn && result[2] >= 0 && result[2] <= 1) {
        toreturn = result[2]
      }
      this.solutions[ref] = toreturn;
      return toreturn
    }
  };
  GLGE.AnimationCurve.prototype.atX = function(x, C1, C2, C3, C4) {
    a = C1.x - C2.x * 3 + C3.x * 3 - C4.x;
    b = C2.x * 3 - C3.x * 6 + C4.x * 3;
    c = C3.x * 3 - C4.x * 3;
    d = C4.x - x;
    return this.getBezier(this.Quad3Solve(a, b, c, d), C1, C2, C3, C4)
  }
})(GLGE);
(function(GLGE) {
  GLGE.Action = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.channels = []
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.Action);
  GLGE.augment(GLGE.JSONLoader, GLGE.Action);
  GLGE.augment(GLGE.Events, GLGE.Action);
  GLGE.Action.prototype.start = function(blendTime, loop, names) {
    if(!loop) {
      loop = false
    }
    if(!blendTime) {
      blendTime = 0
    }
    var channels = this.channels;
    var start = (new Date).getTime();
    this.animFinished = false;
    for(var i = 0;i < channels.length;i++) {
      var animation = channels[i].getAnimation();
      var action = this;
      var channel = channels[i];
      var target = channel.getTarget();
      if(typeof target == "string") {
        if(names && names[target]) {
          target = names[target]
        }
      }
      var closure = {};
      closure.finishEvent = function(data) {
        target.removeEventListener("animFinished", closure.finishEvent);
        if(!action.animFinished && target.animation == animation) {
          action.fireEvent("animFinished", {});
          action.animFinished = true
        }
      };
      target.addEventListener("animFinished", closure.finishEvent);
      target.setAnimation(animation, blendTime, start);
      target.setLoop(loop)
    }
  };
  GLGE.Action.prototype.setStartFrame = function(startFrame) {
    for(var i = 0;i < this.channels.length;i++) {
      this.channels[i].getAnimation().setStartFrame(startFrame)
    }
    return this
  };
  GLGE.Action.prototype.setFrames = function(frames) {
    for(var i = 0;i < this.channels.length;i++) {
      this.channels[i].getAnimation().setFrames(frames)
    }
    return this
  };
  GLGE.Action.prototype.addActionChannel = function(channel) {
    this.channels.push(channel);
    return this
  };
  GLGE.Action.prototype.removeActionChannel = function(channel) {
    for(var i = 0;i < this.channels.length;i++) {
      if(this.channels[i] == channels) {
        this.channels.splice(i, 1);
        break
      }
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.ActionChannel = function(uid) {
    GLGE.Assets.registerAsset(this, uid)
  };
  GLGE.augment(GLGE.QuickNotation, GLGE.ActionChannel);
  GLGE.augment(GLGE.JSONLoader, GLGE.ActionChannel);
  GLGE.ActionChannel.prototype.setTarget = function(object) {
    this.target = object
  };
  GLGE.ActionChannel.prototype.setAnimation = function(animation) {
    this.animation = animation
  };
  GLGE.ActionChannel.prototype.getTarget = function() {
    return this.target
  };
  GLGE.ActionChannel.prototype.getAnimation = function() {
    return this.animation
  }
})(GLGE);
var XML = {};
(function(XML) {
  XML.TextNode = function(value) {
    this.nodeValue = value
  };
  XML.Element = function(name) {
    this.tagName = name;
    this.children = [];
    this.attributes = {}
  };
  XML.Element.prototype.children = null;
  XML.Element.prototype.attributes = null;
  XML.Element.prototype.addChild = function(node) {
    node.parentNode = this;
    if(this.children.length == 0) {
      this.hasChildren = true;
      this.firstChild = node
    }else {
      this.children[this.children.length - 1].nextSibling = node;
      node.previousSibling = this.children[this.children.length - 1]
    }
    this.children.push(node)
  };
  XML.Element.prototype.setAttributes = function(attributes) {
    this.attributes = attributes
  };
  XML.Element.prototype.getAttribute = function(name) {
    return this.attributes[name]
  };
  XML.Element.prototype.hasAttribute = function(name) {
    if(this.attributes[name]) {
      return true
    }else {
      return false
    }
  };
  XML.Element.prototype.getElementsByTagName = function(tagName) {
    var retArray = [];
    for(var i = 0;i < this.children.length;i++) {
      if(this.children[i].tagName == tagName || tagName == "*") {
        if(this.children[i].tagName) {
          retArray.push(this.children[i])
        }
      }
      if(this.children[i].hasChildren) {
        retArray = retArray.concat(this.children[i].getElementsByTagName(tagName))
      }
    }
    return retArray
  };
  XML.Document = function(xml) {
    this.currentElement = null;
    this.rootElement = null;
    this.eleStack = [];
    this.idCache = {};
    this.xml = xml;
    this.sPointer = 0;
    this.parseXML()
  };
  XML.Document.prototype.parseXML = function() {
    var xml = this.xml;
    var textValue = "";
    var cdata = false;
    do {
      if(xml[this.sPointer] == "<" && !cdata) {
        if(textValue != "" && this.currentElement) {
          this.currentElement.addChild(new XML.TextNode(textValue))
        }
        textValue = "";
        if(xml[this.sPointer + 1] == "!") {
          if(xml[this.sPointer + 2] == "[" && xml[this.sPointer + 3] == "C" && xml[this.sPointer + 4] == "D" && xml[this.sPointer + 5] == "A" && xml[this.sPointer + 6] == "T" && xml[this.sPointer + 7] == "A" && xml[this.sPointer + 8] == "[") {
            cdata = true;
            this.sPointer = this.sPointer + 8
          }else {
            this.closeElement();
            this.sPointer++
          }
        }else {
          if(xml[this.sPointer + 1] == "?") {
            this.closeElement();
            this.sPointer++
          }else {
            if(xml[this.sPointer + 1] != "/") {
              newElement = this.parseElement();
              if(xml[this.sPointer] == ">") {
                this.eleStack.push(this.currentElement);
                this.currentElement = newElement
              }else {
                this.currentElement.addChild(newElement);
                this.sPointer++
              }
            }else {
              parentElement = this.eleStack.pop();
              if(parentElement) {
                parentElement.addChild(this.currentElement);
                this.currentElement = parentElement
              }else {
                this.rootElement = this.currentElement
              }
              this.closeElement()
            }
          }
        }
      }else {
        if(cdata && xml[this.sPointer] == "]" && xml[this.sPointer + 1] == "]" && xml[this.sPointer + 2] == ">") {
          this.currentElement.addChild(new XML.TextNode(textValue));
          textValue = "";
          this.sPointer = this.sPointer + 2;
          cdata = false
        }else {
          textValue = textValue + xml[this.sPointer];
          if(textValue.length == 32768) {
            this.currentElement.addChild(new XML.TextNode(textValue));
            textValue = ""
          }
        }
      }
      this.sPointer++
    }while(this.sPointer < xml.length)
  };
  XML.Document.prototype.closeElement = function() {
    var xml = this.xml;
    do {
      this.sPointer++
    }while(xml[this.sPointer] != ">" && this.sPointer < xml.length)
  };
  XML.Document.prototype.parseElement = function() {
    var xml = this.xml;
    var name = "";
    this.sPointer++;
    do {
      if(xml[this.sPointer] == " ") {
        var attributes = this.parseAttributes()
      }else {
        name = name + xml[this.sPointer];
        this.sPointer++
      }
    }while(xml[this.sPointer] != "/" && xml[this.sPointer] != ">" && this.sPointer < xml.length);
    var element = new XML.Element(name);
    if(attributes) {
      element.setAttributes(attributes);
      if(attributes.id) {
        this.idCache[attributes.id] = element
      }
    }
    return element
  };
  XML.Document.prototype.parseAttributes = function() {
    var xml = this.xml;
    var attributes = {};
    do {
      var name = "";
      do {
        if(xml[this.sPointer] != " ") {
          name = name + xml[this.sPointer]
        }
        this.sPointer++
      }while(xml[this.sPointer] != "=" && this.sPointer < xml.length);
      var quote = xml[++this.sPointer];
      var value = "";
      this.sPointer++;
      do {
        value = value + xml[this.sPointer];
        this.sPointer++
      }while(xml[this.sPointer] != quote && this.sPointer < xml.length);
      if(name != "") {
        attributes[name] = value
      }
      this.sPointer++
    }while(xml[this.sPointer] != "/" && xml[this.sPointer] != ">" && this.sPointer < xml.length);
    return attributes
  };
  XML.Document.prototype.getElementsByTagName = function(tagName) {
    return this.rootElement.getElementsByTagName(tagName)
  };
  XML.Document.prototype.getElementById = function(id) {
    if(this.idCache[id]) {
      return this.idCache[id]
    }else {
      return false
    }
  }
})(XML);
(function(GLGE) {
  GLGE.Wavefront = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    this.multimaterials = [];
    this.materials = {};
    this.instances = [];
    this.queue = [];
    GLGE.Object.call(this, uid)
  };
  GLGE.augment(GLGE.Object, GLGE.Wavefront);
  GLGE.Wavefront.prototype.getAbsolutePath = function(path, relativeto) {
    if(path.substr(0, 7) == "http://" || path.substr(0, 7) == "file://" || path.substr(0, 7) == "https://") {
      return path
    }else {
      if(!relativeto) {
        relativeto = window.location.href
      }
      if(relativeto.indexOf("?") > 0) {
        relativeto = relativeto.substr(0, relativeto.indexOf("?"))
      }
      var bits = relativeto.split("/");
      var domain = bits[2];
      var proto = bits[0];
      var initpath = [];
      for(var i = 3;i < bits.length - 1;i++) {
        initpath.push(bits[i])
      }
      if(path.substr(0, 1) == "/") {
        initpath = []
      }
      var locpath = path.split("/");
      for(i = 0;i < locpath.length;i++) {
        if(locpath[i] == "..") {
          initpath.pop()
        }else {
          if(locpath[i] != "") {
            initpath.push(locpath[i])
          }
        }
      }
      return proto + "//" + domain + "/" + initpath.join("/")
    }
  };
  GLGE.Wavefront.prototype.loadMaterials = function(url) {
    if(!this.loading) {
      this.loadFile(url, null, function(url, text) {
        this.parseMaterials(text.split("\n"));
        if(this.queue.length > 0) {
          var matUrl = this.queue.pop();
          this.loadMaterials(matUrl, this.src)
        }else {
          this.parseMesh();
          this.fireEvent("loaded", {})
        }
      })
    }else {
      this.queue.push(url)
    }
  };
  GLGE.Wavefront.prototype.parseMaterials = function(file) {
    for(var i = 0;i < file.length;i++) {
      if(file[i].substr(0, 6) == "newmtl") {
        var data = file[i].replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").split(" ");
        var material = new GLGE.Material;
        this.materials[data[1].replace(/\s+$/, "").replace("\r", "").replace("\t", "")] = material;
        i++
      }
      var data = file[i].replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").split(" ");
      if(data.length > 1) {
        switch(data[0]) {
          case "Kd":
            material.setColorR(parseFloat(data[1]));
            material.setColorG(parseFloat(data[2]));
            material.setColorB(parseFloat(data[3]));
            break;
          case "Ks":
            material.setSpecularColor({r:parseFloat(data[1]), g:parseFloat(data[2]), b:parseFloat(data[3])});
            break;
          case "Ns":
            material.setShininess(parseFloat(data[1]));
            break;
          case "d":
            this.setZtransparent(true);
            material.setAlpha(parseFloat(data[1]));
            break;
          case "map_Kd":
            var ml = new GLGE.MaterialLayer;
            ml.setMapto(GLGE.M_COLOR);
            ml.setMapinput(GLGE.UV1);
            var tex = new GLGE.Texture;
            var k = 1;
            while(data[k][0] == "-") {
              k = k + 2
            }
            tex.setSrc(this.getAbsolutePath(data[k], this.relativeTo));
            material.addTexture(tex);
            ml.setTexture(tex);
            material.addMaterialLayer(ml);
          case "map_Ks":
          ;
          case "map_spec":
            var ml = new GLGE.MaterialLayer;
            ml.setMapto(GLGE.M_SPECULAR);
            ml.setMapinput(GLGE.UV1);
            var tex = new GLGE.Texture;
            var k = 1;
            while(data[k][0] == "-") {
              k = k + 2
            }
            tex.setSrc(this.getAbsolutePath(data[k], this.relativeTo));
            material.addTexture(tex);
            ml.setTexture(tex);
            material.addMaterialLayer(ml);
          case "bump":
          ;
          case "map_bump":
            var ml = new GLGE.MaterialLayer;
            ml.setMapto(GLGE.M_NOR);
            ml.setMapinput(GLGE.UV1);
            var tex = new GLGE.Texture;
            var k = 1;
            while(data[k][0] == "-") {
              k = k + 2
            }
            tex.setSrc(this.getAbsolutePath(data[k], this.relativeTo));
            material.addTexture(tex);
            ml.setTexture(tex);
            material.addMaterialLayer(ml)
        }
      }
    }
  };
  GLGE.Wavefront.prototype.loadFile = function(url, relativeTo, callback) {
    this.loading = true;
    if(!callback) {
      callback = this.loaded
    }
    if(!relativeTo && this.relativeTo) {
      relativeTo = this.relativeTo
    }
    url = this.getAbsolutePath(url, relativeTo);
    if(!this.relativeTo) {
      this.relativeTo = url
    }
    var req = new GLGE.XMLHttpRequest;
    var that = this;
    if(req) {
      req.overrideMimeType("text/plain");
      req.onreadystatechange = function() {
        if(this.readyState == 4) {
          if(this.status == 200 || this.status == 0) {
            that.loading = false;
            callback.call(that, url, this.responseText)
          }else {
            GLGE.error("Error loading Document: " + url + " status " + this.status)
          }
        }
      };
      req.open("GET", url, true);
      req.send("")
    }
  };
  GLGE.Wavefront.prototype.setSrc = function(url, relativeTo) {
    this.src = this.getAbsolutePath(url, relativeTo);
    this.loadFile(this.src, relativeTo)
  };
  GLGE.Wavefront.prototype.loaded = function(url, objfile) {
    this.file = objArray = objfile.split("\n");
    var hasMaterial = false;
    for(var i = 0;i < objArray.length;i++) {
      var data = objArray[i].split(" ");
      if(data.length > 1) {
        if(data[0] == "mtllib") {
          hasMaterial = true;
          this.loadMaterials(data[1])
        }
      }
    }
    if(!hasMaterial) {
      this.parseMesh();
      this.fireEvent("loaded", {})
    }
  };
  GLGE.Wavefront.prototype.createMultiMaterial = function(idxDataOrig, verts, norms, texCoords, faces, material, smooth) {
    var positions = [];
    var normals = [];
    var uv = [];
    var newfaces = [];
    var idxData = [];
    for(i = 0;i < faces.length;i++) {
      var data = idxDataOrig[faces[i]];
      if(idxData.indexOf(data) == -1 || !smooth) {
        idxData.push(data);
        newfaces.push(idxData.length - 1)
      }else {
        newfaces.push(idxData.indexOf(data))
      }
    }
    faces = newfaces;
    for(i = 0;i < idxData.length;i++) {
      if(idxData[i].indexOf("/") > 0) {
        var vertData = idxData[i].split("/")
      }else {
        var vertData = [idxData[i]]
      }
      if(!verts[vertData[0] - 1]) {
        GLGE.error(vertData[0])
      }
      positions.push(verts[vertData[0] - 1][1]);
      positions.push(verts[vertData[0] - 1][2]);
      positions.push(verts[vertData[0] - 1][3]);
      if(vertData[1]) {
        uv.push(texCoords[vertData[1] - 1][1]);
        uv.push(texCoords[vertData[1] - 1][2])
      }
      if(vertData[2]) {
        normals.push(norms[vertData[2] - 1][1]);
        normals.push(norms[vertData[2] - 1][2]);
        normals.push(norms[vertData[2] - 1][3])
      }
    }
    var multiMat = new GLGE.MultiMaterial;
    var mesh = new GLGE.Mesh;
    mesh.setPositions(positions);
    if(uv.length > 0) {
      mesh.setUV(uv)
    }
    if(normals.length > 0) {
      mesh.setNormals(normals)
    }
    mesh.setFaces(faces);
    multiMat.setMesh(mesh);
    multiMat.setMaterial(material);
    this.addMultiMaterial(multiMat)
  };
  GLGE.Wavefront.prototype.parseMesh = function() {
    objArray = this.file;
    var texCoords = [];
    var verts = [];
    var norms = [];
    var faces = [];
    var idxData = [];
    var vertoffset = 0;
    var smooth = true;
    var material = new GLGE.Material;
    for(var i = 0;i < objArray.length;i++) {
      if(objArray[i][0] != "#") {
        var data = objArray[i].replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").split(" ");
        if(data.length > 0) {
          switch(data[0]) {
            case "s":
              if(data[1] == "1") {
                smooth = true
              }else {
                smooth = false
              }
            ;
            case "o":
              if(faces.length > 0) {
                this.createMultiMaterial(idxData, verts, norms, texCoords, faces, material, smooth);
                faces = [];
                material = new GLGE.Material
              }
              break;
            case "usemtl":
              if(faces.length > 0) {
                this.createMultiMaterial(idxData, verts, norms, texCoords, faces, material, smooth);
                faces = []
              }
              material = this.materials[data[1]];
              break;
            case "v":
              verts.push(data);
              break;
            case "vt":
              texCoords.push(data);
              break;
            case "vn":
              norms.push(data);
              break;
            case "f":
              var tmpface = [];
              for(var j = 1;j < data.length;j++) {
                var idx = idxData.indexOf(data[j]);
                if(idx == -1 || !smooth) {
                  idxData.push(data[j]);
                  idx = idxData.length - 1
                }
                tmpface.push(idx)
              }
              for(j = 0;j < tmpface.length - 2;j++) {
                faces.push(tmpface[0] - vertoffset);
                faces.push(tmpface[1 + j] - vertoffset);
                faces.push(tmpface[2 + j] - vertoffset)
              }
              break
          }
        }
      }
    }
    this.createMultiMaterial(idxData, verts, norms, texCoords, faces, material, smooth)
  };
  GLGE.Document.prototype.getWavefront = function(ele) {
    if(!ele.object) {
      var rel = this.getAbsolutePath(this.rootURL, null);
      ele.object = new (GLGE[this.classString(ele.tagName)]);
      ele.object.setSrc(ele.getAttribute("src"), rel);
      ele.removeAttribute("src");
      this.setProperties(ele)
    }
    return ele.object
  }
})(GLGE);
(function(GLGE) {
  GLGE.ParticleSystem = function(uid) {
    this.startTime = (new Date).getTime();
    this.texture = {};
    this.startMaxVelocity = {x:0, y:0, z:0};
    this.startMinVelocity = {x:0, y:0, z:0};
    this.startMaxAcceleration = {x:0, y:0, z:0};
    this.endMaxAcceleration = {x:0, y:0, z:0};
    this.startMinAcceleration = {x:0, y:0, z:0};
    this.endMinAcceleration = {x:0, y:0, z:0};
    this.startColor = {r:0, g:0, b:0, a:1};
    this.endColor = {r:0, g:0, b:0, a:1}
  };
  GLGE.augment(GLGE.Placeable, GLGE.ParticleSystem);
  GLGE.augment(GLGE.Animatable, GLGE.ParticleSystem);
  GLGE.ParticleSystem.prototype.setMaxVelX = function(value) {
    this.startMaxVelocity.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxVelY = function(value) {
    this.startMaxVelocity.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxVelZ = function(value) {
    this.startMaxVelocity.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxVelocity = function(x, y, z) {
    this.startMaxVelocity = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinVelX = function(value) {
    this.startMinVelocity.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinVelY = function(value) {
    this.startMinVelocity.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinVelZ = function(value) {
    this.startMinVelocity.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinVelocity = function(x, y, z) {
    this.startMinVelocity = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setVelX = function(value) {
    this.startMaxVelocity.x = parseFloat(value);
    this.startMinVelocity.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setVelY = function(value) {
    this.startMaxVelocity.y = parseFloat(value);
    this.startMinVelocity.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setVelZ = function(value) {
    this.startMaxVelocity.z = parseFloat(value);
    this.startMinVelocity.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setVelocity = function(x, y, z) {
    this.startMaxVelocity = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.startMinVelocity = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxStartAccX = function(value) {
    this.startMaxAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxStartAccY = function(value) {
    this.startMaxAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxStartAccZ = function(value) {
    this.startMaxAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxStartAccelertaion = function(x, y, z) {
    this.startMaxAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinStartAccX = function(value) {
    this.startMinAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinStartAccY = function(value) {
    this.startMinAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinStartAccZ = function(value) {
    this.startMinAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinStartAccelertaion = function(x, y, z) {
    this.startMinAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartAccX = function(value) {
    this.startMaxAcceleration.x = parseFloat(value);
    this.startMinAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartAccY = function(value) {
    this.startMaxAcceleration.y = parseFloat(value);
    this.startMinAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartAccZ = function(value) {
    this.startMaxAcceleration.z = parseFloat(value);
    this.startMinAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartAccelertaion = function(x, y, z) {
    this.startMaxAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.startMinAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxEndAccX = function(value) {
    this.endMaxAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxEndAccY = function(value) {
    this.endMaxAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxEndAccZ = function(value) {
    this.endMaxAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxEndAccelertaion = function(x, y, z) {
    this.endMaxAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinEndAccX = function(value) {
    this.endMinAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinEndAccY = function(value) {
    this.endMinAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinEndAccZ = function(value) {
    this.endMinAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinEndAccelertaion = function(x, y, z) {
    this.endMinAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndAccX = function(value) {
    this.endMinAcceleration.x = parseFloat(value);
    this.endMaxAcceleration.x = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndAccY = function(value) {
    this.endMinAcceleration.y = parseFloat(value);
    this.endMaxAcceleration.y = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndAccZ = function(value) {
    this.endMinAcceleration.z = parseFloat(value);
    this.endMaxAcceleration.z = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndAccelertaion = function(x, y, z) {
    this.endMinAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.endMaxAcceleration = {x:parseFloat(x), y:parseFloat(y), z:parseFloat(z)};
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartColor = function(value) {
    var color = GLGE.colorParse(value);
    this.startColor = color;
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndColor = function(value) {
    var color = GLGE.colorParse(value);
    this.endColor = color;
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setStartSize = function(value) {
    this.startSize = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setEndSize = function(value) {
    this.endSize = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setLifeTime = function(value) {
    this.maxLifeTime = parseFloat(value);
    this.minLifeTime = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMaxLifeTime = function(value) {
    this.maxLifeTime = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setMinLifeTime = function(value) {
    this.minLifeTime = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.setNumParticles = function(value) {
    this.numParticles = parseFloat(value);
    this.attribute = null
  };
  GLGE.ParticleSystem.prototype.velocityFunction = function(i) {
    return[(this.startMaxVelocity.x - this.startMinVelocity.x) * Math.random() + this.startMinVelocity.x, (this.startMaxVelocity.y - this.startMinVelocity.y) * Math.random() + this.startMinVelocity.y, (this.startMaxVelocity.z - this.startMinVelocity.z) * Math.random() + this.startMinVelocity.z]
  };
  GLGE.ParticleSystem.prototype.accelerationFunction = function(i) {
    return[[(this.startMaxAcceleration.x - this.startMinAcceleration.x) * Math.random() + this.startMinAcceleration.x, (this.startMaxAcceleration.y - this.startMinAcceleration.y) * Math.random() + this.startMinAcceleration.y, (this.startMaxAcceleration.z - this.startMinAcceleration.z) * Math.random() + this.startMinAcceleration.z], [(this.endMaxAcceleration.x - this.endMinAcceleration.x) * Math.random() + this.endMinAcceleration.x, (this.endMaxAcceleration.y - this.endMinAcceleration.y) * Math.random() + 
    this.endMinAcceleration.y, (this.endMaxAcceleration.z - this.endMinAcceleration.z) * Math.random() + this.endMinAcceleration.z]]
  };
  GLGE.ParticleSystem.prototype.colorFunction = function(i) {
    return[[this.startColor.r, this.startColor.g, this.startColor.b, this.startColor.a], [this.endColor.r, this.endColor.g, this.endColor.b, this.endColor.a]]
  };
  GLGE.ParticleSystem.prototype.positionFunction = function(i) {
    return[0, 0, 0]
  };
  GLGE.ParticleSystem.prototype.sizeFunction = function(i) {
    return[this.startSize, this.endSize]
  };
  GLGE.ParticleSystem.prototype.lifeTimeFunction = function(i) {
    return(this.maxLifeTime - this.minLifeTime) * Math.random() + this.minLifeTime
  };
  GLGE.ParticleSystem.prototype.minLifeTime = 2E3;
  GLGE.ParticleSystem.prototype.maxLifeTime = 2E3;
  GLGE.ParticleSystem.prototype.numParticles = 200;
  GLGE.ParticleSystem.prototype.startTime = 0;
  GLGE.ParticleSystem.prototype.startSize = 0;
  GLGE.ParticleSystem.prototype.endSize = 1;
  GLGE.ParticleSystem.prototype.toRender = true;
  GLGE.ParticleSystem.prototype.renderFirst = true;
  GLGE.ParticleSystem.prototype.className = "ParticleSystem";
  GLGE.ParticleSystem.prototype.zTrans = true;
  GLGE.ParticleSystem.prototype.velocity = null;
  GLGE.ParticleSystem.prototype.loop = 1;
  GLGE.ParticleSystem.prototype.setVelocityFunction = function(func) {
    this.vecoityFunction = func;
    this.particles = null
  };
  GLGE.ParticleSystem.prototype.setAccelerationFunction = function(func) {
    this.accelerationFunction = func;
    this.particles = null
  };
  GLGE.ParticleSystem.prototype.setPositionFunction = function(func) {
    this.colorFunction = func;
    this.particles = null
  };
  GLGE.ParticleSystem.prototype.setColorFunction = function(func) {
    this.positionFunction = func;
    this.particles = null
  };
  GLGE.ParticleSystem.prototype.setSizeFunction = function(func) {
    this.sizeFunction = func;
    this.particles = null
  };
  GLGE.ParticleSystem.prototype.generateParticles = function(gl) {
    var num_particles = this.numParticles;
    this.attribute = {initPos:[], initAcc:[], endAcc:[], initVel:[], initColor:[], endColor:[], sizeAndOffset:[]};
    this.faces = [];
    for(var i = 0;i < num_particles;i++) {
      var position = this.positionFunction(i);
      var velocity = this.velocityFunction(i);
      var acceleration = this.accelerationFunction(i);
      var color = this.colorFunction(i);
      var size = this.sizeFunction(i);
      var lifetime = this.lifeTimeFunction(i);
      var offsetTime = Math.floor(Math.random() * lifetime);
      for(var y = -1;y <= 1;y = y + 2) {
        for(var x = -1;x <= 1;x = x + 2) {
          this.attribute.initPos.push(parseFloat(position[0]) + x, parseFloat(position[1]) + y, parseFloat(position[2]));
          this.attribute.initAcc.push(acceleration[0][0], acceleration[0][1], acceleration[0][2]);
          this.attribute.endAcc.push(acceleration[1][0], acceleration[1][1], acceleration[1][2]);
          this.attribute.initVel.push(velocity[0], velocity[1], velocity[2]);
          this.attribute.initColor.push(color[0][0], color[0][1], color[0][2], color[0][3]);
          this.attribute.endColor.push(color[1][0], color[1][1], color[1][2], color[1][3]);
          this.attribute.sizeAndOffset.push(size[0], size[1], offsetTime, lifetime)
        }
      }
    }
    for(var i = 0;i < num_particles;i = i + 4) {
      this.faces.push(0 + i, 1 + i, 2 + i);
      this.faces.push(1 + i, 2 + i, 3 + i)
    }
    this.facesGL = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.facesGL);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.faces), gl.STATIC_DRAW);
    this.facesGL.num = this.faces.length;
    this.attribute.initPosGL = this.createBuffer(gl, this.attribute.initPos);
    this.attribute.initAccGL = this.createBuffer(gl, this.attribute.initAcc);
    this.attribute.endAccGL = this.createBuffer(gl, this.attribute.endAcc);
    this.attribute.initVelGL = this.createBuffer(gl, this.attribute.initVel);
    this.attribute.initColorGL = this.createBuffer(gl, this.attribute.initColor);
    this.attribute.endColorGL = this.createBuffer(gl, this.attribute.endColor);
    this.attribute.sizeAndOffsetGL = this.createBuffer(gl, this.attribute.sizeAndOffset)
  };
  GLGE.ParticleSystem.prototype.setLoop = function(value) {
    this.loop = value
  };
  GLGE.ParticleSystem.prototype.reset = function() {
    this.startTime = (new Date).getTime()
  };
  GLGE.ParticleSystem.prototype.generateProgram = function(gl) {
    var vtxShader = ["attribute vec3 position;", "attribute vec3 initVel;", "attribute vec3 initAcc;", "attribute vec3 endAcc;", "attribute vec4 initColor;", "attribute vec4 endColor;", "attribute vec4 sizeTimeLife;", "uniform float time;", "uniform bool loop;", "uniform mat4 mvMatrix;", "uniform mat4 pMatrix;", "varying vec2 UV;", "varying vec4 color;", "void main(){", "UV = (position.xy+1.0)/2.0;", "if((time>sizeTimeLife[2] && (time-sizeTimeLife[2])<sizeTimeLife[3]) || loop){", "float localTime = mod((time - sizeTimeLife[2]), sizeTimeLife[3]);", 
    "color = (endColor-initColor)/sizeTimeLife[3]*localTime+initColor;", "float size = (sizeTimeLife[1]-sizeTimeLife[0])/sizeTimeLife[3]*localTime+sizeTimeLife[0];", "vec3 pos = (endAcc-initAcc)*(localTime*log(localTime)-localTime)+0.5*initAcc*localTime*localTime+initVel*localTime;", "pos = (mvMatrix*vec4(pos,1.0)).xyz;", "vec3 positions = pos+(position*size);", "gl_Position = pMatrix*vec4(positions,1.0);", "}else{", "gl_Position = vec4(0.0,0.0,0.0,1.0);", "}", "}"].join("");
    frgShader = ["#ifdef GL_ES\nprecision mediump float;\n#endif\n", "uniform sampler2D texture;", "varying vec2 UV;", "varying vec4 color;", "void main(){", "gl_FragColor=texture2D(texture,UV)*color;", "}"].join("");
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader, vtxShader);
    gl.compileShader(vertexShader);
    if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      GLGE.error(gl.getShaderInfoLog(vertexShader));
      return
    }
    gl.shaderSource(fragmentShader, frgShader);
    gl.compileShader(fragmentShader);
    if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      GLGE.error(gl.getShaderInfoLog(fragmentShader));
      return
    }
    if(this.program) {
      gl.deleteProgram(this.Program)
    }
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program)
  };
  GLGE.ParticleSystem.prototype.createBuffer = function(gl, array) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
    return buffer
  };
  GLGE.ParticleSystem.prototype.setUniforms = function(gl) {
    var program = this.program;
    if(!program.glarrays) {
      program.glarrays = {}
    }
    var cameraMatrix = gl.scene.camera.getViewMatrix();
    var pos = this.getPosition();
    var mvMatrix = GLGE.mulMat4(cameraMatrix, [1, 0, 0, pos.x, 0, 1, 0, pos.y, 0, 0, 1, pos.z, 0, 0, 0, 1]);
    var mvUniform = GLGE.getUniformLocation(gl, program, "mvMatrix");
    if(!program.glarrays.mvMatrix) {
      program.glarrays.mvMatrix = new Float32Array(mvMatrix)
    }else {
      GLGE.mat4gl(mvMatrix, program.glarrays.mvMatrix)
    }
    gl.uniformMatrix4fv(mvUniform, true, program.glarrays.mvMatrix);
    var pUniform = GLGE.getUniformLocation(gl, program, "pMatrix");
    if(!program.glarrays.pMatrix) {
      program.glarrays.pMatrix = new Float32Array(gl.scene.camera.getProjectionMatrix())
    }else {
      GLGE.mat4gl(gl.scene.camera.getProjectionMatrix(), program.glarrays.pMatrix)
    }
    gl.uniformMatrix4fv(pUniform, true, program.glarrays.pMatrix);
    gl.uniform1f(GLGE.getUniformLocation(gl, program, "time"), (new Date).getTime() - this.startTime);
    gl.uniform1i(GLGE.getUniformLocation(gl, program, "loop"), this.loop);
    gl.activeTexture(gl.TEXTURE0);
    if(!this.glTexture) {
      this.glTexture = gl.createTexture()
    }
    if(this.texture.state == 1) {
      gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture.image);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this.texture.state = 2;
      program.texture = true
    }
    gl.bindTexture(gl.TEXTURE_2D, this.glTexture);
    if(program.texture) {
      gl.uniform1i(GLGE.getUniformLocation(gl, program, "texture"), 0)
    }
  };
  GLGE.ParticleSystem.prototype.setImage = function(url) {
    var texture = this.texture;
    texture.image = new Image;
    texture.image.onload = function(e) {
      texture.state = 1
    };
    GLGE.loadImage(texture.image, url)
  };
  GLGE.ParticleSystem.prototype.setAttributes = function(gl) {
    for(var i = 0;i < 8;i++) {
      gl.disableVertexAttribArray(i)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "position");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.initPosGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "initAcc");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.initAccGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "endAcc");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.endAccGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "initColor");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.initColorGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 4, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "endColor");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.endColorGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 4, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "sizeTimeLife");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.sizeAndOffsetGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 4, gl.FLOAT, false, 0, 0)
    }
    var attrib = GLGE.getAttribLocation(gl, this.program, "initVel");
    if(attrib > -1) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.attribute.initVelGL);
      gl.enableVertexAttribArray(attrib);
      gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, 0, 0)
    }
  };
  GLGE.ParticleSystem.prototype.GLRender = function(gl) {
    if(!this.attribute) {
      this.generateParticles(gl)
    }
    if(!this.program) {
      this.generateProgram(gl)
    }
    gl.useProgram(this.program);
    this.setAttributes(gl);
    this.setUniforms(gl);
    gl.colorMask(0, 0, 0, 0);
    gl.disable(gl.BLEND);
    gl.enable(gl.STENCIL_TEST);
    gl.stencilFunc(gl.ALWAYS, 1, 1);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.facesGL);
    gl.drawElements(gl.TRIANGLES, this.facesGL.num, gl.UNSIGNED_SHORT, 0);
    gl.stencilFunc(gl.EQUAL, 1, 1);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    gl.colorMask(1, 1, 1, 1);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.facesGL);
    gl.drawElements(gl.TRIANGLES, this.facesGL.num, gl.UNSIGNED_SHORT, 0);
    gl.stencilOp(gl.REPLACE, gl.REPLACE, gl.REPLACE);
    gl.stencilFunc(gl.ALWAYS, 0, 0);
    gl.enable(gl.DEPTH_TEST);
    gl.scene.lastMaterial = null
  };
  GLGE.Scene.prototype.addParticleSystem = GLGE.Scene.prototype.addGroup;
  GLGE.Group.prototype.addParticleSystem = GLGE.Group.prototype.addGroup
})(GLGE);
if(!GLGE) {
  var GLGE = {}
}
(function(GLGE) {
  GLGE.HeightMap = function(imageURL, imageWidth, imageHeight, x1, x2, y1, y2, z1, z2) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = imageWidth;
    this.canvas.height = imageHeight;
    this.minX = x1;
    this.maxX = x2;
    this.minY = y1;
    this.maxY = y2;
    this.minZ = z1;
    this.maxZ = z2;
    var image = new Image;
    image.heightmap = this;
    image.onload = function(e) {
      this.heightmap.context.drawImage(this, 0, 0);
      this.heightmap.data = this.heightmap.context.getImageData(0, 0, this.heightmap.canvas.width, this.heightmap.canvas.height).data;
      this.heightmap.minImgValue = this.heightmap.data[0];
      this.heightmap.maxImgValue = this.heightmap.data[0];
      for(i = 0;i < this.heightmap.data.length;i += 4) {
        if(this.heightmap.data[i] < this.heightmap.minImgValue) {
          this.heightmap.minImgValue = this.heightmap.data[i]
        }
        if(this.heightmap.data[i] > this.heightmap.maxImgValue) {
          this.heightmap.maxImgValue = this.heightmap.data[i]
        }
      }
    };
    GLGE.loadImage(image, imageURL)
  };
  GLGE.HeightMap.prototype.canvas = null;
  GLGE.HeightMap.prototype.context = null;
  GLGE.HeightMap.prototype.minZ = null;
  GLGE.HeightMap.prototype.maxZ = null;
  GLGE.HeightMap.prototype.minY = null;
  GLGE.HeightMap.prototype.maxY = null;
  GLGE.HeightMap.prototype.minX = null;
  GLGE.HeightMap.prototype.maxX = null;
  GLGE.HeightMap.prototype.data = null;
  GLGE.HeightMap.prototype.getPixelAt = function(x, y) {
    if(this.data) {
      return(this.data[(this.canvas.width * y + x) * 4] - this.minImgValue) / (this.maxImgValue - this.minImgValue) * (this.maxZ - this.minZ) + this.minZ
    }else {
      return 0
    }
  };
  GLGE.HeightMap.prototype.getHeightAt = function(x, y) {
    var retValue;
    if(this.lastx != undefined && x == this.lastx && y == this.lasty) {
      retValue = this.lastValue
    }else {
      var imgX = Math.round((x - this.minX) / (this.maxX - this.minX) * this.canvas.width);
      var imgY = Math.round((y - this.minY) / (this.maxY - this.minY) * this.canvas.height);
      retValue = this.getPixelAt(imgX, imgY);
      this.lastValue = retValue
    }
    this.lastx = x;
    this.lasty = y;
    return retValue
  };
  GLGE.KeyInput = function() {
    if(!document.keyStates) {
      document.keyStates = []
    }
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false)
  };
  GLGE.KeyInput.prototype.isKeyPressed = function(key) {
    if(document.keyStates[key]) {
      return true
    }else {
      return false
    }
  };
  var skiptimmer = null;
  GLGE.KeyInput.prototype.onKeyDown = function(e) {
    document.keyStates[e.keyCode] = true
  };
  GLGE.KeyInput.prototype.onKeyUp = function(e) {
    document.keyStates[e.keyCode] = false
  };
  GLGE.MouseInput = function(element) {
    this.element = element;
    this.element.mouseX = 0;
    this.element.mouseY = 0;
    if(!this.element.buttonState) {
      this.element.buttonState = []
    }
    element.addEventListener("mousemove", this.onMouseMove, false);
    element.addEventListener("mousedown", this.onMouseDown, false);
    element.addEventListener("mouseup", this.onMouseUp, false)
  };
  GLGE.MouseInput.prototype.element = null;
  GLGE.MouseInput.prototype.onMouseMove = function(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY
  };
  GLGE.MouseInput.prototype.onMouseDown = function(e) {
    this.buttonState[e.button] = true
  };
  GLGE.MouseInput.prototype.onMouseUp = function(e) {
    this.buttonState[e.button] = false
  };
  GLGE.MouseInput.prototype.isButtonDown = function(button) {
    if(this.element.buttonState[button]) {
      return true
    }else {
      return false
    }
  };
  GLGE.MouseInput.prototype.getMousePosition = function() {
    return{x:this.element.mouseX, y:this.element.mouseY}
  };
  GLGE.MI_LEFT = 0;
  GLGE.MI_MIDDLE = 1;
  GLGE.MI_RIGHT = 2;
  GLGE.KI_BACKSPACE = 8;
  GLGE.KI_TAB = 9;
  GLGE.KI_ENTER = 13;
  GLGE.KI_SHIFT = 16;
  GLGE.KI_CTRL = 17;
  GLGE.KI_ALT = 18;
  GLGE.KI_PAUSE_BREAK = 19;
  GLGE.KI_CAPS_LOCK = 20;
  GLGE.KI_ESCAPE = 27;
  GLGE.KI_PAGE_UP = 33;
  GLGE.KI_PAGE_DOWN = 34;
  GLGE.KI_END = 35;
  GLGE.KI_HOME = 36;
  GLGE.KI_LEFT_ARROW = 37;
  GLGE.KI_UP_ARROW = 38;
  GLGE.KI_RIGHT_ARROW = 39;
  GLGE.KI_DOWN_ARROW = 40;
  GLGE.KI_INSERT = 45;
  GLGE.KI_DELETE = 46;
  GLGE.KI_0 = 48;
  GLGE.KI_1 = 49;
  GLGE.KI_2 = 50;
  GLGE.KI_3 = 51;
  GLGE.KI_4 = 52;
  GLGE.KI_5 = 53;
  GLGE.KI_6 = 54;
  GLGE.KI_7 = 55;
  GLGE.KI_8 = 56;
  GLGE.KI_9 = 57;
  GLGE.KI_A = 65;
  GLGE.KI_B = 66;
  GLGE.KI_C = 67;
  GLGE.KI_D = 68;
  GLGE.KI_E = 69;
  GLGE.KI_F = 70;
  GLGE.KI_G = 71;
  GLGE.KI_H = 72;
  GLGE.KI_I = 73;
  GLGE.KI_J = 74;
  GLGE.KI_K = 75;
  GLGE.KI_L = 76;
  GLGE.KI_M = 77;
  GLGE.KI_N = 78;
  GLGE.KI_O = 79;
  GLGE.KI_P = 80;
  GLGE.KI_Q = 81;
  GLGE.KI_R = 82;
  GLGE.KI_S = 83;
  GLGE.KI_T = 84;
  GLGE.KI_U = 85;
  GLGE.KI_V = 86;
  GLGE.KI_W = 87;
  GLGE.KI_X = 88;
  GLGE.KI_Y = 89;
  GLGE.KI_Z = 90;
  GLGE.KI_LEFT_WINDOW_KEY = 91;
  GLGE.KI_RIGHT_WINDOW_KEY = 92;
  GLGE.KI_SELECT_KEY = 93;
  GLGE.KI_NUMPAD_0 = 96;
  GLGE.KI_NUMPAD_1 = 97;
  GLGE.KI_NUMPAD_2 = 98;
  GLGE.KI_NUMPAD_3 = 99;
  GLGE.KI_NUMPAD_4 = 100;
  GLGE.KI_NUMPAD_5 = 101;
  GLGE.KI_NUMPAD_6 = 102;
  GLGE.KI_NUMPAD_7 = 103;
  GLGE.KI_NUMPAD_8 = 104;
  GLGE.KI_NUMPAD_9 = 105;
  GLGE.KI_MULTIPLY = 106;
  GLGE.KI_ADD = 107;
  GLGE.KI_SUBTRACT = 109;
  GLGE.KI_DECIMAL_POINT = 110;
  GLGE.KI_DIVIDE = 111;
  GLGE.KI_F1 = 112;
  GLGE.KI_F2 = 113;
  GLGE.KI_F3 = 114;
  GLGE.KI_F4 = 115;
  GLGE.KI_F5 = 116;
  GLGE.KI_F6 = 117;
  GLGE.KI_F7 = 118;
  GLGE.KI_F8 = 119;
  GLGE.KI_F9 = 120;
  GLGE.KI_F10 = 121;
  GLGE.KI_F11 = 122;
  GLGE.KI_F12 = 123;
  GLGE.KI_NUM_LOCK = 144;
  GLGE.KI_SCROLL_LOCK = 145;
  GLGE.KI_SEMI_COLON = 186;
  GLGE.KI_EQUAL_SIGN = 187;
  GLGE.KI_COMMA = 188;
  GLGE.KI_DASH = 189;
  GLGE.KI_PERIOD = 190;
  GLGE.KI_FORWARD_SLASH = 191;
  GLGE.KI_GRAVE_ACCENT = 192;
  GLGE.KI_OPEN_BRACKET = 219;
  GLGE.KI_BACK_SLASH = 220;
  GLGE.KI_CLOSE_BRAKET = 221;
  GLGE.KI_SINGLE_QUOTE = 222;
  GLGE.KI_SPACE = 32;
  if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = function() {
      return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        window.setTimeout(callback, 1E3 / 60)
      }
    }()
  }
})(GLGE);
if(!window["GLGE"]) {
  window["GLGE"] = {}
}
(function(GLGE) {
  GLGE.FILTER_POST = 0;
  GLGE.FILTER_SKY = 1;
  GLGE.Filter2d = function() {
  };
  GLGE.Filter2d.prototype.renderDepth = false;
  GLGE.Filter2d.prototype.renderNormal = false;
  GLGE.Filter2d.prototype.renderEmit = false;
  GLGE.Filter2d.prototype.passes = null;
  GLGE.Filter2d.prototype.textures = null;
  GLGE.Filter2d.prototype.uniforms = null;
  GLGE.Filter2d.prototype.buffers = null;
  GLGE.Filter2d.prototype.filterType = GLGE.FILTER_POST;
  GLGE.Filter2d.prototype.depthBufferWidth = null;
  GLGE.Filter2d.prototype.depthBufferHeight = null;
  GLGE.Filter2d.prototype.emitBufferWidth = null;
  GLGE.Filter2d.prototype.emitBufferHeight = null;
  GLGE.Filter2d.prototype.normalBufferWidth = null;
  GLGE.Filter2d.prototype.normalBufferHeight = null;
  GLGE.Filter2d.prototype.setFilterType = function(filterType) {
    this.filterType = filterType;
    return this
  };
  GLGE.Filter2d.prototype.getFilterType = function() {
    return this.filterType
  };
  GLGE.Filter2d.prototype.addTexture = function(texture) {
    if(!this.textures) {
      this.textures = []
    }
    this.textures.push(texture)
  };
  GLGE.Filter2d.prototype.removeTexture = function(texture) {
    var idx = this.textures.indexOf(texture);
    if(idx > -1) {
      this.textures.splice(idx, 1)
    }
  };
  GLGE.Filter2d.prototype.createBuffer = function(gl, width, height) {
    if(!width) {
      width = gl.canvas.width
    }
    if(!height) {
      height = gl.canvas.height
    }
    var frameBuffer = gl.createFramebuffer();
    var renderBuffer = gl.createRenderbuffer();
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    var tex = new Uint8Array(width * height * 4);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, tex);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return[frameBuffer, renderBuffer, texture]
  };
  GLGE.Filter2d.prototype.getFrameBuffer = function(gl) {
    if(!this.passes) {
      return null
    }
    if(!this.gl) {
      this.gl = gl
    }
    if(!this.buffers) {
      this.buffers = this.createBuffer(gl)
    }
    return this.buffers[0]
  };
  GLGE.Filter2d.prototype.getEmitBuffer = function(gl) {
    if(!this.passes) {
      return null
    }
    if(!this.gl) {
      this.gl = gl
    }
    if(!this.emitBuffers) {
      this.emitBuffers = this.createBuffer(gl, this.getEmitBufferWidth(), this.getEmitBufferHeight())
    }
    return this.emitBuffers[0]
  };
  GLGE.Filter2d.prototype.setEmitBufferWidth = function(value) {
    this.emitBufferWidth = value;
    this.emitBuffers = null
  };
  GLGE.Filter2d.prototype.getEmitBufferWidth = function() {
    return this.emitBufferWidth ? this.emitBufferWidth : this.gl.canvas.width
  };
  GLGE.Filter2d.prototype.setEmitBufferHeight = function(value) {
    this.emitBufferHeight = value;
    this.emitBuffers = null
  };
  GLGE.Filter2d.prototype.getEmitBufferHeight = function() {
    return this.emitBufferHeight ? this.emitBufferHeight : this.gl.canvas.height
  };
  GLGE.Filter2d.prototype.getDepthBuffer = function(gl) {
    if(!this.passes) {
      return null
    }
    if(!this.gl) {
      this.gl = gl
    }
    if(!this.depthBuffers) {
      this.depthBuffers = this.createBuffer(gl, this.getDepthBufferWidth(), this.getDepthBufferHeight())
    }
    return this.depthBuffers[0]
  };
  GLGE.Filter2d.prototype.setDepthBufferWidth = function(value) {
    this.depthBufferWidth = value;
    this.depthBuffers = null
  };
  GLGE.Filter2d.prototype.getDepthBufferWidth = function() {
    return this.depthBufferWidth ? this.depthBufferWidth : this.gl.canvas.width
  };
  GLGE.Filter2d.prototype.setDepthBufferHeight = function(value) {
    this.depthBufferHeight = value;
    this.depthBuffers = null
  };
  GLGE.Filter2d.prototype.getDepthBufferHeight = function() {
    return this.depthBufferHeight ? this.depthBufferHeight : this.gl.canvas.height
  };
  GLGE.Filter2d.prototype.setNormalBufferWidth = function(value) {
    this.normalBufferWidth = value;
    this.normalBuffers = null
  };
  GLGE.Filter2d.prototype.getNormalBufferWidth = function() {
    return this.normalBufferWidth ? this.normalBufferWidth : this.gl.canvas.width
  };
  GLGE.Filter2d.prototype.setNormalBufferHeight = function(value) {
    this.normalBufferHeight = value;
    this.normalBuffers = null
  };
  GLGE.Filter2d.prototype.getNormalBufferHeight = function() {
    return this.normalBufferHeight ? this.normalBufferHeight : this.gl.canvas.height
  };
  GLGE.Filter2d.prototype.getNormalBuffer = function(gl) {
    if(!this.gl) {
      this.gl = gl
    }
    if(!this.normalBuffers) {
      this.normalBuffers = this.createBuffer(gl, this.getNormalBufferWidth(), this.getNormalBufferHeight())
    }
    return this.normalBuffers[0]
  };
  GLGE.Filter2d.prototype.setUniform = function(type, name, value) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    this.uniforms[name] = {type:type, value:value}
  };
  GLGE.Filter2d.prototype.getUniform = function(name) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    return this.uniforms[name].value
  };
  GLGE.Filter2d.prototype.getUniformType = function(name) {
    if(!this.uniforms) {
      this.uniforms = {}
    }
    return this.uniforms[name].type
  };
  GLGE.Filter2d.prototype.addPassFile = function(url) {
    var req = new GLGE.XMLHttpRequest;
    var filter = this;
    if(req) {
      req.open("GET", url, false);
      req.send("");
      filter.addPass(req.responseText)
    }
  };
  GLGE.Filter2d.prototype.addPass = function(GLSL, width, height) {
    if(!this.passes) {
      this.passes = []
    }
    this.passes.push({GLSL:GLSL, height:height, width:width})
  };
  GLGE.Filter2d.prototype.GLRender = function(gl, buffer) {
    gl.disable(gl.BLEND);
    if(!buffer) {
      buffer = null
    }
    if(this.passes) {
      for(var i = 0;i < this.passes.length;i++) {
        if(this.passes.length - 1 == i) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, buffer)
        }else {
          if(!this.passes[i].buffer) {
            this.passes[i].buffer = this.createBuffer(gl, this.passes[i].width, this.passes[i].height)
          }
          gl.bindFramebuffer(gl.FRAMEBUFFER, this.passes[i].buffer[0])
        }
        var width = this.passes[i].width ? this.passes[i].width : gl.canvas.width;
        var height = this.passes[i].height ? this.passes[i].height : gl.canvas.height;
        gl.viewport(0, 0, width, height);
        gl.clearDepth(1);
        gl.depthFunc(gl.LEQUAL);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if(!this.passes[i].program) {
          this.passes[i].program = this.GLCreateShader(gl, this.passes[i].GLSL)
        }
        gl.useProgram(this.passes[i].program);
        gl.program = this.passes[i].program;
        for(var j = 0;j < 8;j++) {
          gl.disableVertexAttribArray(j)
        }
        attribslot = GLGE.getAttribLocation(gl, this.passes[i].program, "position");
        if(!this.posBuffer) {
          this.createPlane(gl)
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuffer);
        gl.enableVertexAttribArray(attribslot);
        gl.vertexAttribPointer(attribslot, this.posBuffer.itemSize, gl.FLOAT, false, 0, 0);
        this.GLSetUniforms(gl, i);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.GLfaces);
        gl.drawElements(gl.TRIANGLES, this.GLfaces.numItems, gl.UNSIGNED_SHORT, 0)
      }
    }
  };
  var glmat = new Float32Array(16);
  GLGE.Filter2d.prototype.GLSetUniforms = function(gl, pass) {
    if(this.filterType == GLGE.FILTER_SKY) {
      var invViewProj = GLGE.transposeMat4(GLGE.mulMat4(GLGE.inverseMat4(gl.scene.camera.matrix), GLGE.inverseMat4(gl.scene.camera.pMatrix)));
      GLGE.mat4gl(invViewProj, glmat);
      GLGE.setUniformMatrix(gl, "Matrix4fv", GLGE.getUniformLocation(gl, this.passes[pass].program, "invViewProj"), false, glmat)
    }
    for(key in this.uniforms) {
      var uniform = this.uniforms[key];
      if(uniform.type == "Matrix4fv") {
        GLGE.setUniformMatrix(gl, "Matrix4fv", GLGE.getUniformLocation(gl, this.passes[pass].program, key), false, uniform.value)
      }else {
        GLGE.setUniform(gl, uniform.type, GLGE.getUniformLocation(gl, this.passes[pass].program, key), uniform.value)
      }
    }
    var tidx = 0;
    if(this.buffers) {
      if(pass == 0) {
        gl.activeTexture(gl["TEXTURE" + tidx]);
        gl.bindTexture(gl.TEXTURE_2D, this.buffers[2]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      }
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "GLGE_RENDER"), tidx);
      tidx++;
      if(this.renderDepth) {
        if(pass == 0) {
          gl.activeTexture(gl["TEXTURE" + tidx]);
          gl.bindTexture(gl.TEXTURE_2D, this.depthBuffers[2]);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        }
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "GLGE_DEPTH"), tidx);
        tidx++
      }
      if(this.renderEmit) {
        if(pass == 0) {
          gl.activeTexture(gl["TEXTURE" + tidx]);
          gl.bindTexture(gl.TEXTURE_2D, this.emitBuffers[2]);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        }
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "GLGE_EMIT"), tidx);
        tidx++
      }
      if(this.renderNormal) {
        if(pass == 0) {
          gl.activeTexture(gl["TEXTURE" + tidx]);
          gl.bindTexture(gl.TEXTURE_2D, this.normalBuffers[2]);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        }
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "GLGE_NORMAL"), tidx);
        tidx++
      }
      for(var i = 0;i < this.passes.length;i++) {
        if(this.passes[i].buffer) {
          gl.activeTexture(gl["TEXTURE" + tidx]);
          gl.bindTexture(gl.TEXTURE_2D, this.passes[i].buffer[2]);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        }
        GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "GLGE_PASS" + i), tidx);
        tidx++
      }
    }
    if(!this.textures) {
      this.textures = []
    }
    for(var i = 0;i < this.textures.length;i++) {
      gl.activeTexture(gl["TEXTURE" + (i + tidx)]);
      this.textures[i].doTexture(gl, null);
      GLGE.setUniform(gl, "1i", GLGE.getUniformLocation(gl, this.passes[pass].program, "TEXTURE" + i), i + tidx)
    }
  };
  GLGE.Filter2d.prototype.createPlane = function(gl) {
    if(!this.posBuffer) {
      this.posBuffer = gl.createBuffer()
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, 0.5, -1, 1, 0.5, -1, -1, 0.5, 1, -1, 0.5]), gl.STATIC_DRAW);
    this.posBuffer.itemSize = 3;
    this.posBuffer.numItems = 4;
    if(!this.GLfaces) {
      this.GLfaces = gl.createBuffer()
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.GLfaces);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 2, 3, 0]), gl.STATIC_DRAW);
    this.GLfaces.itemSize = 1;
    this.GLfaces.numItems = 6
  };
  GLGE.Filter2d.prototype.GLCreateShader = function(gl, fragStr) {
    var vertexStr = [];
    vertexStr.push("uniform mat4 invViewProj;\n");
    vertexStr.push("attribute vec3 position;\n");
    vertexStr.push("varying vec2 texCoord;\n");
    vertexStr.push("varying vec3 rayCoord;\n");
    vertexStr.push("void main(void){\n");
    vertexStr.push("vec4 near=invViewProj * vec4(position.xy,-1.0,1.0);\n");
    vertexStr.push("near/=near.w;\n");
    vertexStr.push("vec4 far=invViewProj * vec4(position.xy,1.0,1.0);\n");
    vertexStr.push("far/=far.w;\n");
    vertexStr.push("rayCoord=normalize(far.xyz-near.xyz);\n");
    vertexStr.push("texCoord=(position.xy+vec2(1.0,1.0))/2.0;\n");
    vertexStr.push("gl_Position = vec4(position.xyz,1.0);\n");
    vertexStr.push("}\n");
    var GLVertexShader = GLGE.getGLShader(gl, gl.VERTEX_SHADER, vertexStr.join(""));
    var GLFragmentShader = GLGE.getGLShader(gl, gl.FRAGMENT_SHADER, fragStr);
    return GLGE.getGLProgram(gl, GLVertexShader, GLFragmentShader)
  }
})(GLGE);
if(typeof GLGE == "undefined") {
  GLGE = {}
}
(function(GLGE) {
  GLGE.ColladaDocuments = [];
  GLGE.Collada = function(uid) {
    GLGE.Assets.registerAsset(this, uid);
    GLGE.Group.call(this);
    this.children = [];
    this.actions = {};
    this.boneIdx = 0;
    this.actionsIdx = 0
  };
  GLGE.augment(GLGE.Group, GLGE.Collada);
  GLGE.Collada.prototype.type = GLGE.G_NODE;
  GLGE.Collada.prototype.useLights = false;
  GLGE.Collada.prototype.useCamera = false;
  GLGE.Collada.prototype.getAbsolutePath = function(path, relativeto) {
    if(path.substr(0, 7) == "http://" || path.substr(0, 7) == "file://" || path.substr(0, 7) == "https://") {
      return path
    }else {
      if(!relativeto) {
        relativeto = window.location.href
      }
      if(relativeto.indexOf("://") == -1) {
        return relativeto.slice(0, relativeto.lastIndexOf("/")) + "/" + path
      }
      var bits = relativeto.split("/");
      var domain = bits[2];
      var proto = bits[0];
      var initpath = [];
      for(var i = 3;i < bits.length - 1;i++) {
        initpath.push(bits[i])
      }
      if(path.substr(0, 1) == "/") {
        initpath = []
      }
      var locpath = path.split("/");
      for(i = 0;i < locpath.length;i++) {
        if(locpath[i] == "..") {
          initpath.pop()
        }else {
          if(locpath[i] != "") {
            initpath.push(locpath[i])
          }
        }
      }
      return proto + "//" + domain + "/" + initpath.join("/")
    }
  };
  GLGE.Collada.prototype.getElementById = function(id) {
    if(!this.idcache) {
      var tags = this.getElementsByTagName("*");
      var attribid;
      this.idcache = {};
      for(var i = 0;i < tags.length;i++) {
        attribid = tags[i].getAttribute("id");
        if(attribid != "") {
          this.idcache[attribid] = tags[i]
        }
      }
    }
    return this.idcache[id]
  };
  GLGE.Collada.prototype.parseArray = function(node) {
    var value;
    var child = node.firstChild;
    var prev = "";
    var output = [];
    var currentArray;
    var i;
    while(child) {
      currentArray = (prev + child.nodeValue).replace(/\s+/g, " ").replace(/^\s+/g, "").split(" ");
      child = child.nextSibling;
      if(currentArray[0] == "") {
        currentArray.unshift()
      }
      if(child) {
        prev = currentArray.pop()
      }
      for(i = 0;i < currentArray.length;i++) {
        if(currentArray[i] != "") {
          output.push(currentArray[i])
        }
      }
    }
    return output
  };
  GLGE.Collada.prototype.isSketchupFile = function() {
    var asset = this.xml.getElementsByTagName("asset");
    if(!asset || asset.length == 0) {
      return false
    }
    for(var i = 0;i < asset.length;++i) {
      var contributor = asset[i].getElementsByTagName("contributor");
      if(!contributor || contributor.length == 0) {
        return false
      }
      for(var j = 0;j < contributor.length;++j) {
        var authoring = contributor[j].getElementsByTagName("authoring_tool");
        if(!authoring || authoring.length == 0) {
          return false
        }
        for(var k = 0;k < authoring.length;++k) {
          var tool = authoring[k].firstChild.nodeValue;
          if(tool.indexOf("Google") == 0) {
            return true
          }
        }
      }
    }
    return false
  };
  GLGE.Collada.prototype.setUseCamera = function(usecamera) {
    this.useCamera = usecamera;
    return this
  };
  GLGE.Collada.prototype.getUseCamera = function() {
    return this.useCamera
  };
  GLGE.Collada.prototype.setUseLights = function(uselights) {
    this.useLights = uselights;
    return this
  };
  GLGE.Collada.prototype.getUseLights = function(uselights) {
    return this.useLights
  };
  GLGE.Collada.prototype.setDocument = function(url, relativeTo, cb) {
    this.url = url;
    this.loadedCallback = cb;
    if(url.indexOf("#") != -1) {
      this.rootId = url.substr(url.indexOf("#") + 1);
      url = url.substr(0, url.indexOf("#"))
    }
    if(relativeTo) {
      url = this.getAbsolutePath(url, relativeTo)
    }
    this.docURL = url;
    if(GLGE.ColladaDocuments[url]) {
      this.xml = GLGE.ColladaDocuments[url]
    }else {
      var req = new GLGE.XMLHttpRequest;
      if(req) {
        req.overrideMimeType("text/xml");
        var docurl = url;
        var docObj = this;
        req.onreadystatechange = function() {
          if(this.readyState == 4) {
            if(this.status == 200 || this.status == 0) {
              this.responseXML.getElementById = docObj.getElementById;
              docObj.loaded(docurl, this.responseXML)
            }else {
              GLGE.error("Error loading Document: " + docurl + " status " + this.status)
            }
          }
        };
        req.open("GET", url, true);
        req.send("")
      }
    }
  };
  GLGE.Collada.prototype.getSource = function(id) {
    var element = this.xml.getElementById(id);
    if(!element) {
      return[]
    }
    if(!element.jsArray || this.badAccessor) {
      var value;
      if(element.tagName == "vertices") {
        value = [];
        var inputs = element.getElementsByTagName("input");
        for(var i = 0;i < inputs.length;i++) {
          value[i] = this.getSource(inputs[i].getAttribute("source").substr(1));
          value[i].block = inputs[i].getAttribute("semantic")
        }
      }else {
        var accessor = element.getElementsByTagName("technique_common")[0].getElementsByTagName("accessor")[0];
        var sourceArray = this.xml.getElementById(accessor.getAttribute("source").substr(1));
        var type = sourceArray.tagName;
        value = this.parseArray(sourceArray);
        stride = parseInt(accessor.getAttribute("stride"));
        offset = parseInt(accessor.getAttribute("offset"));
        if(!offset) {
          offset = 0
        }
        if(!stride) {
          stride = 1
        }
        count = parseInt(accessor.getAttribute("count"));
        var params = accessor.getElementsByTagName("param");
        var pmask = [];
        for(var i = 0;i < params.length;i++) {
          if(params[i].hasAttribute("name") || this.exceptions.badAccessor || this.badAccessor) {
            pmask.push({type:params[i].getAttribute("type"), name:params[i].getAttribute("name")})
          }else {
            pmask.push(false)
          }
        }
        value = {array:value, stride:stride, offset:offset, count:count, pmask:pmask, type:type}
      }
      element.jsArray = value
    }
    return element.jsArray
  };
  var meshCache = {};
  GLGE.Collada.prototype.getMeshes = function(id, skeletonData) {
    if(!meshCache[this.url]) {
      meshCache[this.url] = []
    }
    if(meshCache[this.url][id]) {
      return meshCache[this.url][id]
    }
    var i, n;
    var mesh;
    var inputs;
    var inputArray;
    var vertexJoints;
    var vertexWeights;
    var faces;
    var outputData;
    var block;
    var set;
    var rootNode = this.xml.getElementById(id);
    if(!rootNode) {
      GLGE.error("Collada.getMeshes returning [], id: " + id);
      return[]
    }
    var temp = rootNode.getElementsByTagName("mesh");
    if(!temp) {
      GLGE.error("Collada.getMeshes returning [], id: " + id);
      return[]
    }
    meshNode = null;
    if(temp.length) {
      meshNode = temp[0]
    }else {
      GLGE.error("Collada.getMeshes returning [], id: " + id)
    }
    var meshes = [];
    if(!meshNode) {
      return meshes
    }
    var polylists = meshNode.getElementsByTagName("polylist");
    for(i = 0;i < polylists.length;i++) {
      faces = this.parseArray(polylists[i].getElementsByTagName("p")[0]);
      vcount = this.parseArray(polylists[i].getElementsByTagName("vcount")[0]);
      var inputcount = polylists[i].getElementsByTagName("input");
      var maxoffset = 0;
      for(n = 0;n < inputcount.length;n++) {
        maxoffset = Math.max(maxoffset, inputcount[n].getAttribute("offset"))
      }
      var tris = [];
      var cnt = 0;
      for(n = 0;n < vcount.length;n++) {
        for(j = 0;j < vcount[n] - 2;j++) {
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + k])
          }
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + (maxoffset + 1) * (j + 1) + k])
          }
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + (maxoffset + 1) * (j + 2) + k])
          }
        }
        cnt = cnt + (maxoffset + 1) * vcount[n]
      }
      polylists[i].getElementsByTagName("p")[0].data = tris
    }
    var polygons = meshNode.getElementsByTagName("polygons");
    for(i = 0;i < polygons.length;i++) {
      var polys = polygons[i].getElementsByTagName("p");
      var tris = [];
      for(var l = 0;l < polys.length;l++) {
        var faces = this.parseArray(polys[l]);
        var inputcount = polygons[i].getElementsByTagName("input");
        var maxoffset = 0;
        for(n = 0;n < inputcount.length;n++) {
          maxoffset = Math.max(maxoffset, inputcount[n].getAttribute("offset"))
        }
        var cnt = 0;
        for(j = 0;j < faces.length / (maxoffset + 1) - 2;j++) {
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + k])
          }
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + (maxoffset + 1) * (j + 1) + k])
          }
          for(k = 0;k <= maxoffset;k++) {
            tris.push(faces[cnt + (maxoffset + 1) * (j + 2) + k])
          }
        }
        cnt = cnt + (maxoffset + 1) * (faces.length / (maxoffset + 1))
      }
      if(polys.length > 0) {
        polygons[i].getElementsByTagName("p")[0].data = tris
      }
    }
    var triangles = [];
    var tris = meshNode.getElementsByTagName("triangles");
    for(i = 0;i < polylists.length;i++) {
      triangles.push(polylists[i])
    }
    for(i = 0;i < polygons.length;i++) {
      if(polygons[i].getElementsByTagName("p").length > 0) {
        triangles.push(polygons[i])
      }
    }
    for(i = 0;i < tris.length;i++) {
      triangles.push(tris[i])
    }
    for(i = 0;i < triangles.length;i++) {
      inputs = triangles[i].getElementsByTagName("input");
      vertexJoints = [];
      vertexWeights = [];
      inputArray = [];
      outputData = {};
      for(n = 0;n < inputs.length;n++) {
        inputs[n].data = this.getSource(inputs[n].getAttribute("source").substr(1));
        block = inputs[n].getAttribute("semantic");
        if(block == "TEXCOORD") {
          set = inputs[n].getAttribute("set");
          if(!set) {
            set = 0
          }
          block = block + set
        }
        if(block == "VERTEX") {
          for(var l = 0;l < inputs[n].data.length;l++) {
            outputData[inputs[n].data[l].block] = []
          }
        }
        inputs[n].block = block;
        inputs[n].offset = parseInt(inputs[n].getAttribute("offset"));
        outputData[block] = [];
        inputArray.push(inputs[n])
      }
      if(triangles[i].getElementsByTagName("p")[0].data) {
        faces = triangles[i].getElementsByTagName("p")[0].data
      }else {
        faces = this.parseArray(triangles[i].getElementsByTagName("p")[0])
      }
      for(var n = 0;n < inputArray.length;n++) {
        if(inputArray[n].block != "VERTEX") {
          inputArray[n].data = [inputArray[n].data];
          inputArray[n].data[0].block = inputArray[n].block
        }
      }
      var maxoffset = 0;
      for(n = 0;n < inputArray.length;n++) {
        maxoffset = Math.max(inputArray[n].offset + 1, maxoffset)
      }
      for(j = 0;j < faces.length;j = j + maxoffset) {
        for(n = 0;n < inputArray.length;n++) {
          for(var l = 0;l < inputArray[n].data.length;l++) {
            var block = inputArray[n].data[l].block;
            var pcnt = inputArray[n].data[l].stride;
            for(k = 0;k < inputArray[n].data[l].stride;k++) {
              if(inputArray[n].data[l].pmask[k]) {
                outputData[block].push(inputArray[n].data[l].array[faces[j + inputArray[n].offset] * inputArray[n].data[l].stride + k + inputArray[n].data[l].offset])
              }
            }
            if(skeletonData && block == "POSITION") {
              for(k = 0;k < skeletonData.count;k++) {
                vertexJoints.push(skeletonData.vertexJoints[faces[j + inputArray[n].offset] * skeletonData.count + k]);
                vertexWeights.push(skeletonData.vertexWeight[faces[j + inputArray[n].offset] * skeletonData.count + k])
              }
            }
            if(block == "POSITION" && pcnt == 1) {
              outputData[block].push(0);
              outputData[block].push(0)
            }
            if(block == "POSITION" && pcnt == 2) {
              outputData[block].push(0)
            }
            if(block == "TEXCOORD0" && pcnt == 3) {
              outputData[block].pop()
            }
            if(block == "TEXCOORD1" && pcnt == 3) {
              outputData[block].pop()
            }
          }
        }
      }
      faces = [];
      var windingOrder = GLGE.Mesh.WINDING_ORDER_CLOCKWISE;
      if(!outputData.NORMAL) {
        console.log("Autogenerating normals, do not know facings");
        outputData.NORMAL = [];
        if(!outputData.POSITION) {
          outputData.POSITION = outputData.VERTEX
        }
        for(n = 0;n < outputData.POSITION.length;n = n + 9) {
          var vec1 = GLGE.subVec3([outputData.POSITION[n], outputData.POSITION[n + 1], outputData.POSITION[n + 2]], [outputData.POSITION[n + 3], outputData.POSITION[n + 4], outputData.POSITION[n + 5]]);
          var vec2 = GLGE.subVec3([outputData.POSITION[n + 6], outputData.POSITION[n + 7], outputData.POSITION[n + 8]], [outputData.POSITION[n], outputData.POSITION[n + 1], outputData.POSITION[n + 2]]);
          var vec3 = GLGE.toUnitVec3(GLGE.crossVec3(GLGE.toUnitVec3(vec2), GLGE.toUnitVec3(vec1)));
          outputData.NORMAL.push(vec3[0]);
          outputData.NORMAL.push(vec3[1]);
          outputData.NORMAL.push(vec3[2]);
          outputData.NORMAL.push(vec3[0]);
          outputData.NORMAL.push(vec3[1]);
          outputData.NORMAL.push(vec3[2]);
          outputData.NORMAL.push(vec3[0]);
          outputData.NORMAL.push(vec3[1]);
          outputData.NORMAL.push(vec3[2])
        }
        var len = outputData.POSITION.length / 3;
        for(n = 0;n < len;n++) {
          faces.push(n)
        }
      }else {
        windingOrder = GLGE.Mesh.WINDING_ORDER_CLOCKWISE;
        if(!outputData.POSITION) {
          outputData.POSITION = outputData.VERTEX
        }
        for(n = 0;n < outputData.POSITION.length;n = n + 9) {
          var vec1 = GLGE.subVec3([outputData.POSITION[n], outputData.POSITION[n + 1], outputData.POSITION[n + 2]], [outputData.POSITION[n + 3], outputData.POSITION[n + 4], outputData.POSITION[n + 5]]);
          var vec2 = GLGE.subVec3([outputData.POSITION[n + 6], outputData.POSITION[n + 7], outputData.POSITION[n + 8]], [outputData.POSITION[n], outputData.POSITION[n + 1], outputData.POSITION[n + 2]]);
          var vec3 = GLGE.crossVec3(vec2, vec1);
          var clockwise_winding_order = 0;
          for(var dp = 0;dp < 9;dp += 3) {
            if(vec3[0] * outputData.NORMAL[n + dp] + vec3[1] * outputData.NORMAL[n + dp + 1] + vec3[2] * outputData.NORMAL[n + dp + 2] < 0) {
              clockwise_winding_order -= 1
            }else {
              clockwise_winding_order += 1
            }
          }
          if(clockwise_winding_order < 0) {
            var len = outputData.POSITION.length / 3;
            faces.push(n / 3);
            faces.push(n / 3 + 2);
            faces.push(n / 3 + 1)
          }else {
            faces.push(n / 3);
            faces.push(n / 3 + 1);
            faces.push(n / 3 + 2)
          }
        }
      }
      if(!this.isSketchupFile()) {
        windingOrder = GLGE.Mesh.WINDING_ORDER_UNKNOWN
      }
      function min(a, b) {
        return a > b ? b : a
      }
      var MAXVERTS = 21843;
      MAXVERTS *= 3;
      var nummesh = (faces.length - faces.length % MAXVERTS) / MAXVERTS + (faces.length % MAXVERTS ? 1 : 0);
      var trimesh = [];
      var vstride = 3;
      var nstride = 3;
      var tstride = 2;
      for(var index = 0;index < nummesh;++index) {
        trimesh.push(new GLGE.Mesh(undefined, windingOrder));
        trimesh[index].setPositions(outputData.POSITION.slice(MAXVERTS * index * vstride, min(MAXVERTS * vstride * (index + 1), outputData.POSITION.length)));
        trimesh[index].setNormals(outputData.NORMAL.slice(MAXVERTS * index * nstride, min(MAXVERTS * (index + 1) * nstride, outputData.POSITION.length)));
        if(outputData.TEXCOORD0) {
          trimesh[index].setUV(outputData.TEXCOORD0.slice(MAXVERTS * index * tstride, min(MAXVERTS * (index + 1) * tstride, outputData.TEXCOORD0.length)))
        }
        if(!outputData.TEXCOORD0 && outputData.TEXCOORD1) {
          trimesh[index].setUV(outputData.TEXCOORD1.slice(MAXVERTS * index * tstride, min(MAXVERTS * (index + 1) * tstride, outputData.TEXCOORD1.length)))
        }
        if(outputData.TEXCOORD1) {
          trimesh[index].setUV2(outputData.TEXCOORD1.slice(MAXVERTS * index * tstride, min(MAXVERTS * (index + 1) * tstride, outputData.TEXCOORD1.length)))
        }
      }
      if(skeletonData) {
        if(skeletonData.count > 8) {
          var newjoints = [];
          var newweights = [];
          for(var j = 0;j < vertexWeights.length;j = j + skeletonData.count) {
            var tmp = [];
            for(k = 0;k < skeletonData.count;k++) {
              tmp.push({weight:vertexWeights[j + k], joint:vertexJoints[j + k]})
            }
            tmp.sort(function(a, b) {
              return parseFloat(b.weight) - parseFloat(a.weight)
            });
            for(k = 0;k < 8;k++) {
              newjoints.push(tmp[k].joint);
              newweights.push(tmp[k].weight)
            }
          }
          vertexJoints = newjoints;
          vertexWeights = newweights;
          skeletonData.count = 8
        }
        for(var index = 0;index < nummesh;++index) {
          if(this.xml.getElementsByTagName("animation").length != 0) {
            trimesh[index].setJoints(skeletonData.joints);
            trimesh[index].setInvBindMatrix(skeletonData.inverseBindMatrix);
            var maxval = min(MAXVERTS * (index + 1) * skeletonData.count, vertexJoints.length);
            var minval = MAXVERTS * index * skeletonData.count;
            trimesh[index].setVertexJoints(vertexJoints.slice(minval, maxval), skeletonData.count);
            trimesh[index].setVertexWeights(vertexWeights.slice(minval, maxval), skeletonData.count)
          }
        }
      }
      for(var index = 0;index < nummesh;++index) {
        trimesh[index].setFaces(faces.slice(0, min(MAXVERTS * (index + 1), faces.length) - MAXVERTS * index));
        trimesh[index].matName = triangles[i].getAttribute("material");
        meshes.push(trimesh[index])
      }
    }
    meshCache[this.url][id] = meshes;
    return meshes
  };
  GLGE.Collada.prototype.getFloat4 = function(profile, sid) {
    var params = profile.getElementsByTagName("newparam");
    for(var i = 0;i < params.length;i++) {
      if(params[i].getAttribute("sid") == sid) {
        return params[i].getElementsByTagName("float4")[0].firstChild.nodeValue;
        break
      }
    }
    return null
  };
  GLGE.Collada.prototype.getFloat = function(profile, sid) {
    var params = profile.getElementsByTagName("newparam");
    for(var i = 0;i < params.length;i++) {
      if(params[i].getAttribute("sid") == sid) {
        return params[i].getElementsByTagName("float")[0].firstChild.nodeValue;
        break
      }
    }
    return null
  };
  GLGE.Collada.prototype.getSampler = function(profile, sid) {
    var params = profile.getElementsByTagName("newparam");
    for(var i = 0;i < params.length;i++) {
      if(params[i].getAttribute("sid") == sid) {
        return params[i].getElementsByTagName("sampler2D")[0].getElementsByTagName("source")[0].firstChild.nodeValue;
        break
      }
    }
    return null
  };
  GLGE.Collada.prototype.getSurface = function(profile, sid) {
    var params = profile.getElementsByTagName("newparam");
    for(var i = 0;i < params.length;i++) {
      if(params[i].getAttribute("sid") == sid) {
        return params[i].getElementsByTagName("surface")[0].getElementsByTagName("init_from")[0].firstChild.nodeValue;
        break
      }
    }
    return null
  };
  GLGE.Collada.prototype.getImage = function(id) {
    var image = this.xml.getElementById(id);
    if(!image) {
      return
    }
    return this.getAbsolutePath(image.getElementsByTagName("init_from")[0].firstChild.nodeValue, this.docURL)
  };
  GLGE.Collada.prototype.createMaterialLayer = function(node, material, common, mapto, bvi) {
    var textureImage;
    var imageid = this.getSurface(common, this.getSampler(common, node.getAttribute("texture")));
    if(!imageid) {
      imageid = node.getAttribute("texture")
    }
    textureImage = this.getImage(imageid);
    var texture = new GLGE.Texture;
    texture.setSrc(textureImage);
    material.addTexture(texture);
    var layer = new GLGE.MaterialLayer;
    layer.setTexture(texture);
    layer.setMapto(mapto);
    if(node.hasAttribute("texcoord") && bvi[node.getAttribute("texcoord")]) {
      if(bvi[node.getAttribute("texcoord")] == 1) {
        layer.setMapinput(GLGE.UV2)
      }else {
        if(bvi[node.getAttribute("texcoord")] == 0) {
          layer.setMapinput(GLGE.UV1)
        }else {
          GLGE.error("GLGE only supports 2 texture sets\n");
          layer.setMapinput(GLGE.UV1)
        }
      }
    }else {
      GLGE.error("Collada material does not specify texture coordinates, but it may have them: defaulting to set 0\n");
      layer.setMapinput(GLGE.UV1)
    }
    if(node.getElementsByTagName("blend_mode")[0]) {
      var blend = node.getElementsByTagName("blend_mode")[0].firstChild.nodeValue;
      if(blend == "MULTIPLY") {
        layer.setBlendMode(GLGE.BL_MUL)
      }
    }
    material.addMaterialLayer(layer)
  };
  function getChildElementById(dNode, id) {
    var dResult = null;
    if(dNode.getAttribute("id") == id) {
      return dNode
    }
    for(var i = 0;i < dNode.childNodes.length;i++) {
      if(dNode.childNodes[i].nodeType == 1) {
        dResult = getChildElementById(dNode.childNodes[i], id);
        if(dResult != null) {
          break
        }
      }
    }
    return dResult
  }
  var MaterialCache = {};
  GLGE.Collada.prototype.getMaterial = function(id, bvi) {
    if(!MaterialCache[this.url]) {
      MaterialCache[this.url] = {}
    }else {
      if(MaterialCache[this.url][id]) {
        return MaterialCache[this.url][id]
      }
    }
    var materialLib = this.xml.getElementsByTagName("library_materials")[0];
    var materialNode = getChildElementById(materialLib, id);
    if(!materialNode) {
      var returnMaterial = new GLGE.Material;
      MaterialCache[this.url][id] = returnMaterial;
      return returnMaterial
    }
    var effectid = materialNode.getElementsByTagName("instance_effect")[0].getAttribute("url").substr(1);
    var effect = this.xml.getElementById(effectid);
    var common = effect.getElementsByTagName("profile_COMMON")[0];
    var technique = common.getElementsByTagName("technique")[0];
    var returnMaterial = new GLGE.Material;
    returnMaterial.setSpecular(0);
    MaterialCache[this.url][id] = returnMaterial;
    var child;
    var color;
    var ambient = technique.getElementsByTagName("ambient");
    if(ambient.length > 0) {
      child = ambient[0].firstChild;
      do {
        switch(child.tagName) {
          case "color":
            color = child.firstChild.nodeValue.replace(/\s+/g, " ").split(" ");
            returnMaterial.setAmbient({r:color[0], g:color[1], b:color[2]});
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).replace(/\s+/g, " ").split(" ");
            returnMaterial.setAmbient({r:color[0], g:color[1], b:color[2]});
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_AMBIENT, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var diffuse = technique.getElementsByTagName("diffuse");
    if(diffuse.length > 0) {
      child = diffuse[0].firstChild;
      do {
        switch(child.tagName) {
          case "color":
            color = child.firstChild.nodeValue.replace(/\s+/g, " ").split(" ");
            returnMaterial.setColor({r:color[0], g:color[1], b:color[2]});
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).replace(/\s+/g, " ").split(" ");
            returnMaterial.setColor({r:color[0], g:color[1], b:color[2]});
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_COLOR, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var bump = technique.getElementsByTagName("bump");
    if(bump.length > 0) {
      child = bump[0].firstChild;
      do {
        switch(child.tagName) {
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_NOR, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var shininess = technique.getElementsByTagName("shininess");
    if(shininess.length > 0) {
      returnMaterial.setSpecular(1);
      child = technique.getElementsByTagName("shininess")[0].firstChild;
      do {
        switch(child.tagName) {
          case "float":
            if(parseFloat(child.firstChild.nodeValue) > 1) {
              returnMaterial.setShininess(parseFloat(child.firstChild.nodeValue))
            }else {
              returnMaterial.setShininess(parseFloat(child.firstChild.nodeValue) * 128)
            }
            break;
          case "param":
            var value = parseFloat(this.getFloat(common, child.getAttribute("ref")));
            if(value > 1) {
              returnMaterial.setShininess(value)
            }else {
              returnMaterial.setShininess(value * 128)
            }
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_SHINE, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var specular = technique.getElementsByTagName("specular");
    if(specular.length > 0) {
      returnMaterial.setSpecular(1);
      child = specular[0].firstChild;
      do {
        switch(child.tagName) {
          case "color":
            color = child.firstChild.nodeValue.replace(/\s+/g, " ").split(" ");
            returnMaterial.setSpecularColor({r:color[0], g:color[1], b:color[2]});
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).replace(/\s+/g, " ").split(" ");
            returnMaterial.setSpecularColor({r:color[0], g:color[1], b:color[2]});
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_SPECCOLOR, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var emission = technique.getElementsByTagName("emission");
    if(emission.length > 0) {
      child = emission[0].firstChild;
      do {
        switch(child.tagName) {
          case "color":
            color = child.firstChild.nodeValue.split(" ");
            returnMaterial.setEmit({r:color[0], g:color[1], b:color[2]});
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).split(" ");
            returnMaterial.setEmit(color[0]);
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_EMIT, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var reflective = technique.getElementsByTagName("reflective");
    if(reflective.length > 0) {
      child = reflective[0].firstChild;
      do {
        switch(child.tagName) {
          case "color":
            color = child.firstChild.nodeValue.replace(/\s+/g, " ").split(" ");
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).replace(/\s+/g, " ").split(" ");
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_REFLECT, bvi);
            break
        }
      }while(child = child.nextSibling)
    }
    var transparency = technique.getElementsByTagName("transparency");
    if(transparency.length > 0) {
      child = transparency[0].firstChild;
      do {
        switch(child.tagName) {
          case "float":
            break;
          case "param":
            break
        }
      }while(child = child.nextSibling)
    }
    var transparent = technique.getElementsByTagName("transparent");
    if(transparent.length > 0) {
      var opaque = transparent[0].getAttribute("opaque");
      if(!opaque) {
        opaque = "A_ONE"
      }
      child = transparent[0].firstChild;
      do {
        switch(child.tagName) {
          case "float":
            var alpha = parseFloat(child.firstChild.nodeValue);
            if(alpha < 1) {
              returnMaterial.setAlpha(parseFloat(child.firstChild.nodeValue));
              returnMaterial.trans = true
            }
            break;
          case "color":
            color = child.firstChild.nodeValue.replace(/\s+/g, " ").split(" ");
            var alpha = this.getMaterialAlpha(color, opaque, 1);
            if(alpha < 1) {
              returnMaterial.setAlpha(alpha);
              returnMaterial.trans = true
            }
            break;
          case "param":
            color = this.getFloat4(common, child.getAttribute("ref")).replace(/\s+/g, " ").split(" ");
            var alpha = this.getMaterialAlpha(color, opaque, 1);
            if(alpha < 1) {
              returnMaterial.setAlpha(alpha);
              returnMaterial.trans = true
            }
            break;
          case "texture":
            this.createMaterialLayer(child, returnMaterial, common, GLGE.M_ALPHA, bvi);
            returnMaterial.trans = true;
            break
        }
      }while(child = child.nextSibling)
    }
    return returnMaterial
  };
  GLGE.Collada.prototype.getMaterialAlpha = function(color, opaque, transparency) {
    var returnAlpha;
    switch(opaque) {
      case "A_ONE":
        returnAlpha = parseFloat(color[3]) * transparency;
        break;
      case "A_ZERO":
        returnAlpha = 1 - parseFloat(color[3]) * transparency;
        break;
      case "RGB_ONE":
        var luminance = parseFloat(color[0]) * 0.212671 + parseFloat(color[1]) * 0.71516 + parseFloat(color[2]) * 0.072169;
        returnAlpha = luminance * transparency;
        break;
      case "RGB_ZERO":
        var luminance = parseFloat(color[0]) * 0.212671 + parseFloat(color[1]) * 0.71516 + parseFloat(color[2]) * 0.072169;
        returnAlpha = 1 - luminance * transparency;
        break
    }
    return returnAlpha
  };
  GLGE.Collada.prototype.setMaterialOntoMesh = function(meshes, node) {
    var materials = node.getElementsByTagName("instance_material");
    var objMaterials = {};
    for(var i = 0;i < materials.length;i++) {
      var bvis = materials[i].getElementsByTagName("bind_vertex_input");
      var bvi = {};
      for(var j = 0;j < bvis.length;j++) {
        if(bvis[j].hasAttribute("input_set")) {
          bvi[bvis[j].getAttribute("semantic")] = bvis[j].getAttribute("input_set")
        }else {
          function getLastNumber(str) {
            var retval = "";
            for(var i = str.length - 1;i >= 0;--i) {
              if(str[i] >= "0" && str[i] <= "9") {
                retval = str[i] + retval
              }
            }
            if(retval.length == 0) {
              return"0"
            }
            return retval
          }
          bvi[bvis[j].getAttribute("semantic")] = getLastNumber(bvis[j].getAttribute("semantic"))
        }
      }
      mat = this.getMaterial(materials[i].getAttribute("target").substr(1), bvi);
      objMaterials[materials[i].getAttribute("symbol")] = mat
    }
    var obj = new GLGE.Object;
    for(i = 0;i < meshes.length;i++) {
      if(objMaterials[meshes[i].matName] && objMaterials[meshes[i].matName].trans) {
        obj.setZtransparent(true);
        obj.setPickable(false)
      }
      var multimat = new GLGE.MultiMaterial;
      multimat.setMesh(meshes[i]);
      if(!objMaterials[meshes[i].matName]) {
        objMaterials[meshes[i].matName] = new GLGE.Material;
        objMaterials[meshes[i].matName].setColor("lightgrey")
      }
      multimat.setMaterial(objMaterials[meshes[i].matName]);
      obj.addMultiMaterial(multimat)
    }
    obj.setSkeleton(this);
    node.GLGEObj = obj
  };
  GLGE.Collada.prototype.getInstanceGeometry = function(node) {
    if(node.GLGEObj && false) {
      var obj = new GLGE.ObjectInstance;
      obj.setObject(node.GLGEObj);
      return obj
    }else {
      var geometryId = node.getAttribute("url").substr(1);
      var meshes = this.getMeshes(geometryId);
      this.setMaterialOntoMesh(meshes, node);
      node.GLGEObj.id = geometryId;
      return node.GLGEObj
    }
  };
  GLGE.Collada.prototype.getAnimationSampler = function(id, rotation) {
    var frameRate = 30;
    var inputs = this.xml.getElementById(id).getElementsByTagName("input");
    var outputData = {};
    var inputsArray = [];
    var data, block;
    for(var i = 0;i < inputs.length;i++) {
      data = this.getSource(inputs[i].getAttribute("source").substr(1));
      block = inputs[i].getAttribute("semantic");
      inputsArray.push({block:block, data:data})
    }
    for(n = 0;n < inputsArray.length;n++) {
      block = inputsArray[n].block;
      outputData[block] = {};
      outputData[block].data = [];
      outputData[block].names = [];
      for(k = 0;k < inputsArray[n].data.array.length;k = k + inputsArray[n].data.stride) {
        var pcnt = 0;
        for(i = 0;i < inputsArray[n].data.pmask.length;i++) {
          if(inputsArray[n].data.pmask[i]) {
            outputData[block].names.push(inputsArray[n].data.pmask[i].name);
            if(inputsArray[n].data.pmask[i].type == "float4x4") {
              outputData[block].stride = 16;
              for(j = 0;j < 16;j++) {
                outputData[block].data.push(inputsArray[n].data.array[j + k + inputsArray[n].data.offset + i])
              }
            }else {
              pcnt++;
              outputData[block].stride = pcnt;
              outputData[block].data.push(inputsArray[n].data.array[k + inputsArray[n].data.offset + i])
            }
          }
        }
      }
    }
    var point;
    var anim = [];
    for(var i = 0;i < outputData["OUTPUT"].stride;i++) {
      anim.push(new GLGE.AnimationCurve)
    }
    for(var i = 0;i < outputData["INPUT"].data.length;i++) {
      for(var j = 0;j < outputData["OUTPUT"].stride;j++) {
        anim[j].name = outputData["OUTPUT"].names[j];
        if(outputData["INTERPOLATION"] && outputData["INTERPOLATION"].data[i] == "BEZIER" && !outputData["IN_TANGENT"]) {
          outputData["INTERPOLATION"].data[i] = "LINEAR"
        }
        if(!outputData["INTERPOLATION"] || outputData["INTERPOLATION"].data[i] == "LINEAR") {
          point = new GLGE.LinearPoint;
          point.setX(outputData["INPUT"].data[i] * frameRate);
          var val = parseFloat(outputData["OUTPUT"].data[i * outputData["OUTPUT"].stride + j]);
          if(val == -180) {
            val = -179.9
          }
          if(val == 180) {
            val = 179.9
          }
          if(this.exceptions["flipangle"] && rotation) {
            if(anim[j].lastval) {
              if(Math.abs(anim[j].lastval - (360 + val)) < Math.abs(anim[j].lastval - val)) {
                val = 360 + val
              }else {
                if(Math.abs(anim[j].lastval - (val - 360)) < Math.abs(anim[j].lastval - val)) {
                  val = val - 360
                }
              }
            }
          }
          point.setY(val);
          anim[j].lastval = val;
          anim[j].addPoint(point)
        }
        if(outputData["INTERPOLATION"] && outputData["INTERPOLATION"].data[i] == "BEZIER") {
          point = new GLGE.BezTriple;
          point.setX1(outputData["IN_TANGENT"].data[(i * outputData["OUTPUT"].stride + j) * 2] * frameRate);
          point.setY1(outputData["IN_TANGENT"].data[(i * outputData["OUTPUT"].stride + j) * 2 + 1]);
          point.setX2(Math.round(outputData["INPUT"].data[i] * frameRate));
          point.setY2(outputData["OUTPUT"].data[i * outputData["OUTPUT"].stride + j]);
          point.setX3(outputData["OUT_TANGENT"].data[(i * outputData["OUTPUT"].stride + j) * 2] * frameRate);
          point.setY3(outputData["OUT_TANGENT"].data[(i * outputData["OUTPUT"].stride + j) * 2 + 1]);
          anim[j].addPoint(point)
        }
      }
    }
    return anim
  };
  GLGE.Collada.prototype.getAnimationVector = function(channels) {
    var maxFrame = 0;
    var targetNode = this.xml.getElementById(channels[0].target[0]);
    var child = targetNode.firstChild;
    var transforms = [];
    var sids = {};
    do {
      switch(child.tagName) {
        case "matrix":
        ;
        case "translate":
        ;
        case "rotate":
        ;
        case "scale":
          def = {type:child.tagName, data:this.parseArray(child), animations:[]};
          if(child.hasAttribute("sid")) {
            sids[child.getAttribute("sid")] = def
          }
          transforms.push(def);
          break
      }
      child = child.nextSibling
    }while(child);
    var anim = {};
    for(var i = 0;i < channels.length;i++) {
      var target = channels[i].target;
      var animcurves = this.getAnimationSampler(channels[i].source, /ANGLE/i.test(target));
      for(j = 0;j < animcurves.length;j++) {
        maxFrame = Math.max(maxFrame, animcurves[j].keyFrames[animcurves[j].keyFrames.length - 1].x)
      }
      if(target[1].indexOf(".") != -1) {
        var splittarget = target[1].split(".");
        switch(splittarget[1]) {
          case "X":
            sids[splittarget[0]].animations[0] = animcurves[0];
            break;
          case "Y":
            sids[splittarget[0]].animations[1] = animcurves[0];
            break;
          case "Z":
            sids[splittarget[0]].animations[2] = animcurves[0];
            break;
          case "ANGLE":
            sids[splittarget[0]].animations[3] = animcurves[0];
            break
        }
      }else {
        if(target[1].indexOf("(") != -1) {
          var idx = target[1].split("(");
          sidtarget = idx.shift();
          if(idx.length > 1) {
            idx = parseInt(idx[0]) + 4 * parseInt(idx[1])
          }else {
            idx = parseInt(idx[0])
          }
          sids[sidtarget].animations[idx] = animcurves[0]
        }else {
          for(var j = 0;j < animcurves.length;j++) {
            switch(animcurves[j].name) {
              case "X":
                sids[target[1]].animations[0] = animcurves[j];
                break;
              case "Y":
                sids[target[1]].animations[1] = animcurves[j];
                break;
              case "Z":
                sids[target[1]].animations[2] = animcurves[j];
                break;
              case "ANGLE":
                sids[target[1]].animations[3] = animcurves[j];
                break;
              default:
                sids[target[1]].animations[j] = animcurves[j];
                break
            }
          }
        }
      }
    }
    var animVector = new GLGE.AnimationVector;
    if(maxFrame == 0) {
      maxFrame = 1
    }
    animVector.setFrames(maxFrame);
    var quatxcurve = new GLGE.AnimationCurve;
    quatxcurve.setChannel("QuatX");
    var quatycurve = new GLGE.AnimationCurve;
    quatycurve.setChannel("QuatY");
    var quatzcurve = new GLGE.AnimationCurve;
    quatzcurve.setChannel("QuatZ");
    var quatwcurve = new GLGE.AnimationCurve;
    quatwcurve.setChannel("QuatW");
    var locxcurve = new GLGE.AnimationCurve;
    locxcurve.setChannel("LocX");
    var locycurve = new GLGE.AnimationCurve;
    locycurve.setChannel("LocY");
    var loczcurve = new GLGE.AnimationCurve;
    loczcurve.setChannel("LocZ");
    var scalexcurve = new GLGE.AnimationCurve;
    scalexcurve.setChannel("ScaleX");
    var scaleycurve = new GLGE.AnimationCurve;
    scaleycurve.setChannel("ScaleY");
    var scalezcurve = new GLGE.AnimationCurve;
    scalezcurve.setChannel("ScaleZ");
    animVector.addAnimationCurve(quatxcurve);
    animVector.addAnimationCurve(quatycurve);
    animVector.addAnimationCurve(quatzcurve);
    animVector.addAnimationCurve(quatwcurve);
    animVector.addAnimationCurve(locxcurve);
    animVector.addAnimationCurve(locycurve);
    animVector.addAnimationCurve(loczcurve);
    animVector.addAnimationCurve(scalexcurve);
    animVector.addAnimationCurve(scaleycurve);
    animVector.addAnimationCurve(scalezcurve);
    var lastQuat = null;
    var transformsPrevValue = [];
    for(var frame = 0;frame < maxFrame;frame++) {
      var matrix = GLGE.identMatrix();
      for(var i = 0;i < transforms.length;i++) {
        switch(transforms[i].type) {
          case "matrix":
            var matrix_array = [transforms[i].animations[0] ? transforms[i].animations[0].getValue(frame) : transforms[i].data[0], transforms[i].animations[1] ? transforms[i].animations[1].getValue(frame) : transforms[i].data[1], transforms[i].animations[2] ? transforms[i].animations[2].getValue(frame) : transforms[i].data[2], transforms[i].animations[3] ? transforms[i].animations[3].getValue(frame) : transforms[i].data[3], transforms[i].animations[4] ? transforms[i].animations[4].getValue(frame) : 
            transforms[i].data[4], transforms[i].animations[5] ? transforms[i].animations[5].getValue(frame) : transforms[i].data[5], transforms[i].animations[6] ? transforms[i].animations[6].getValue(frame) : transforms[i].data[6], transforms[i].animations[7] ? transforms[i].animations[7].getValue(frame) : transforms[i].data[7], transforms[i].animations[8] ? transforms[i].animations[8].getValue(frame) : transforms[i].data[8], transforms[i].animations[9] ? transforms[i].animations[9].getValue(frame) : 
            transforms[i].data[9], transforms[i].animations[10] ? transforms[i].animations[10].getValue(frame) : transforms[i].data[10], transforms[i].animations[11] ? transforms[i].animations[11].getValue(frame) : transforms[i].data[11], transforms[i].animations[12] ? transforms[i].animations[12].getValue(frame) : transforms[i].data[12], transforms[i].animations[13] ? transforms[i].animations[13].getValue(frame) : transforms[i].data[13], transforms[i].animations[14] ? transforms[i].animations[14].getValue(frame) : 
            transforms[i].data[14], transforms[i].animations[15] ? transforms[i].animations[15].getValue(frame) : transforms[i].data[15]];
            matrix = GLGE.mulMat4(matrix, GLGE.Mat4(matrix_array));
            break;
          case "rotate":
            var rotate_array = [transforms[i].animations[0] ? transforms[i].animations[0].getValue(frame) : transforms[i].data[0], transforms[i].animations[1] ? transforms[i].animations[1].getValue(frame) : transforms[i].data[1], transforms[i].animations[2] ? transforms[i].animations[2].getValue(frame) : transforms[i].data[2], transforms[i].animations[3] ? transformsPrevValue[i] = transforms[i].animations[3].getValue(frame, transformsPrevValue[i], true) : transforms[i].data[3]];
            matrix = GLGE.mulMat4(matrix, GLGE.angleAxis(rotate_array[3] * 0.017453278, [rotate_array[0], rotate_array[1], rotate_array[2]]));
            break;
          case "translate":
            var translate_array = [transforms[i].animations[0] ? transforms[i].animations[0].getValue(frame) : transforms[i].data[0], transforms[i].animations[1] ? transforms[i].animations[1].getValue(frame) : transforms[i].data[1], transforms[i].animations[2] ? transforms[i].animations[2].getValue(frame) : transforms[i].data[2]];
            matrix = GLGE.mulMat4(matrix, GLGE.translateMatrix(translate_array[0], translate_array[1], translate_array[2]));
            break;
          case "scale":
            var scale_array = [transforms[i].animations[0] ? transforms[i].animations[0].getValue(frame) : transforms[i].data[0], transforms[i].animations[1] ? transforms[i].animations[1].getValue(frame) : transforms[i].data[1], transforms[i].animations[2] ? transforms[i].animations[2].getValue(frame) : transforms[i].data[2]];
            matrix = GLGE.mulMat4(matrix, GLGE.scaleMatrix(scale_array[0], scale_array[1], scale_array[2]));
            break
        }
      }
      scale = GLGE.matrix2Scale(matrix);
      matrix = GLGE.mulMat4(matrix, GLGE.scaleMatrix(1 / scale[0], 1 / scale[1], 1 / scale[2]));
      quat = GLGE.rotationMatrix2Quat(matrix);
      if(lastQuat) {
        if(lastQuat[0] * quat[0] + lastQuat[1] * quat[1] + lastQuat[2] * quat[2] + lastQuat[3] * quat[3] < 0) {
          quat[0] = quat[0] * -1;
          quat[1] = quat[1] * -1;
          quat[2] = quat[2] * -1;
          quat[3] = quat[3] * -1
        }
      }
      lastQuat = quat;
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(quat[0]);
      quatxcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(quat[1]);
      quatycurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(quat[2]);
      quatzcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(quat[3]);
      quatwcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(matrix[3]);
      locxcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(matrix[7]);
      locycurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(matrix[11]);
      loczcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(scale[0].toFixed(4));
      scalexcurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(scale[1].toFixed(4));
      scaleycurve.addPoint(point);
      point = new GLGE.LinearPoint;
      point.setX(frame);
      point.setY(scale[2].toFixed(4));
      scalezcurve.addPoint(point)
    }
    return animVector
  };
  var actionCache = {};
  GLGE.Collada.prototype.getAnimations = function() {
    if(actionCache[this.url]) {
      this.actions = actionCache[this.url]
    }else {
      var animationClips = this.xml.getElementsByTagName("animation_clip");
      var animations = this.xml.getElementsByTagName("animation");
      if(animationClips.length == 0) {
        animations.name = "default";
        var clips = [animations]
      }else {
        var clips = [];
        for(var i = 0;i < animationClips.length;i++) {
          var anim = [];
          var instances = animationClips[i].getElementsByTagName("instance_animation");
          for(var j = 0;j < instances.length;j++) {
            anim.push(this.xml.getElementById(instances[j].getAttribute("url").substr(1)))
          }
          anim.name = animationClips[i].getAttribute("id");
          clips.push(anim)
        }
      }
      for(var k = 0;k < clips.length;k++) {
        var animations = clips[k];
        var channels, target, source;
        var channelGroups = {};
        for(var i = 0;i < animations.length;i++) {
          channels = animations[i].getElementsByTagName("channel");
          for(var j = 0;j < channels.length;j++) {
            var target = channels[j].getAttribute("target").split("/");
            source = channels[j].getAttribute("source").substr(1);
            if(!channelGroups[target[0]]) {
              channelGroups[target[0]] = []
            }
            channelGroups[target[0]].push({source:source, target:target})
          }
        }
        var action = new GLGE.Action;
        for(target in channelGroups) {
          var animVector = this.getAnimationVector(channelGroups[target]);
          var targetNode = this.xml.getElementById(target);
          for(var i = 0;i < targetNode.GLGEObjects.length;i++) {
            var ac = new GLGE.ActionChannel;
            var name = targetNode.GLGEObjects[i].getName();
            ac.setTarget(name);
            ac.setAnimation(animVector);
            action.addActionChannel(ac)
          }
        }
        this.addColladaAction({name:animations.name, action:action})
      }
    }
    actionCache[this.url] = this.actions;
    for(n in this.actions) {
      this.setAction(this.actions[n], 0, true);
      break
    }
  };
  GLGE.Collada.prototype.addColladaAction = function(action) {
    this.actions[action.name] = action.action
  };
  GLGE.Collada.prototype.getColladaActions = function() {
    return this.actions
  };
  GLGE.Collada.prototype.getInstanceController = function(node) {
    var obj = new GLGE.Object;
    var controller = this.xml.getElementById(node.getAttribute("url").substr(1));
    var skeletons = node.getElementsByTagName("skeleton");
    var joints = controller.getElementsByTagName("joints")[0];
    var inputs = joints.getElementsByTagName("input");
    var bindShapeMatrix;
    if(controller.getElementsByTagName("bind_shape_matrix").length > 0) {
      bindShapeMatrix = this.parseArray(controller.getElementsByTagName("bind_shape_matrix")[0])
    }else {
      bindShapeMatrix = GLGE.identMatrix()
    }
    var inverseBindMatrix = [bindShapeMatrix];
    var base = new GLGE.Group;
    this.addGroup(base);
    var joints = [base];
    var mat;
    for(var i = 0;i < inputs.length;i++) {
      if(inputs[i].getAttribute("semantic") == "JOINT") {
        var jointdata = this.getSource(inputs[i].getAttribute("source").substr(1));
        if(jointdata.type == "IDREF_array") {
          var all_items_incorrect = jointdata.array.length != 0;
          for(var k = 0;k < jointdata.array.length;k = k + jointdata.stride) {
            var curNode = this.getNode(this.xml.getElementById(jointdata.array[k]), true);
            var name = curNode.getName();
            if(!this.xml.getElementById(jointdata.array[k])) {
              GLGE.error("Bone is not specified " + jointdata.array[k]);
              inverseBindMatrix = [bindShapeMatrix = GLGE.identMatrix()]
            }else {
              all_items_incorrect = false
            }
            joints.push(name)
          }
          if(all_items_incorrect) {
            inverseBindMatrix = [bindShapeMatrix = GLGE.identMatrix()]
          }
        }else {
          if(jointdata.type == "Name_array") {
            var sidArray = {};
            var sid, name;
            if(skeletons.length == 0) {
              var elements = this.xml.getElementsByTagName("node");
              for(k = 0;k < elements.length;k++) {
                sid = elements[k].getAttribute("sid");
                if(sid) {
                  sidArray[sid] = elements[k]
                }
                name = elements[k].getAttribute("name");
                if(name && !sidArray[name]) {
                  sidArray[name] = elements[k]
                }
              }
            }else {
              for(var n = 0;n < skeletons.length;n++) {
                var skeletonElement = this.xml.getElementById(skeletons[n].firstChild.nodeValue.substr(1));
                sid = skeletonElement.getAttribute("sid");
                if(sid) {
                  sidArray[sid] = skeletonElement
                }
                var elements = skeletonElement.getElementsByTagName("*");
                for(k = 0;k < elements.length;k++) {
                  sid = elements[k].getAttribute("sid");
                  if(sid) {
                    sidArray[sid] = elements[k]
                  }
                  name = elements[k].getAttribute("name");
                  if(name && !sidArray[name]) {
                    sidArray[name] = elements[k]
                  }
                }
              }
            }
            for(var k = 0;k < jointdata.array.length;k = k + jointdata.stride) {
              if(jointdata.array[k] != "") {
                var name = this.getNode(sidArray[jointdata.array[k]], true).getName();
                joints.push(name)
              }
            }
          }
        }
      }
    }
    for(var i = 0;i < inputs.length;i++) {
      if(inputs[i].getAttribute("semantic") == "INV_BIND_MATRIX") {
        var matrixdata = this.getSource(inputs[i].getAttribute("source").substr(1));
        for(var k = 0;k < matrixdata.array.length;k = k + matrixdata.stride) {
          mat = matrixdata.array.slice(k, k + 16);
          inverseBindMatrix.push(GLGE.mulMat4(GLGE.Mat4(mat), GLGE.Mat4(bindShapeMatrix.slice(0, 16))))
        }
      }
    }
    var vertexWeight = controller.getElementsByTagName("vertex_weights")[0];
    inputs = vertexWeight.getElementsByTagName("input");
    var inputArray = [];
    var outputData = {};
    for(n = 0;n < inputs.length;n++) {
      block = inputs[n].getAttribute("semantic");
      inputs[n].data = this.getSource(inputs[n].getAttribute("source").substr(1));
      inputs[n].block = block;
      outputData[block] = [];
      var offset = inputs[n].getAttribute("offset");
      if(!inputArray[offset]) {
        inputArray[offset] = []
      }
      inputArray[offset].push(inputs[n])
    }
    var vcounts = this.parseArray(vertexWeight.getElementsByTagName("vcount")[0]);
    var vs = this.parseArray(vertexWeight.getElementsByTagName("v")[0]);
    var maxJoints = 0;
    for(var i = 0;i < vcounts.length;i++) {
      if(vcounts[i]) {
        maxJoints = Math.max(maxJoints, parseInt(vcounts[i]))
      }
    }
    vPointer = 0;
    var block;
    for(var i = 0;i < vcounts.length;i++) {
      for(var j = 0;j < vcounts[i];j++) {
        for(var k = 0;k < inputArray.length;k++) {
          for(var ksub = 0;ksub < inputArray[k].length;++ksub) {
            block = inputArray[k][ksub].block;
            for(n = 0;n < inputArray[k][ksub].data.stride;n++) {
              if(inputArray[k][ksub].data.pmask[n]) {
                if(block != "JOINT") {
                  outputData[block].push(inputArray[k][ksub].data.array[parseInt(vs[vPointer]) + parseInt(inputArray[k][ksub].data.offset)])
                }else {
                  outputData[block].push(parseInt(vs[vPointer]))
                }
                vPointer++
              }
            }
          }
        }
      }
      for(j = j;j < maxJoints;j++) {
        for(var k = 0;k < inputArray.length;k++) {
          for(var ksub = 0;ksub < inputArray[k].length;++ksub) {
            block = inputArray[k][ksub].block;
            outputData[block].push(0)
          }
        }
      }
    }
    if(!this.badAccessor && outputData["JOINT"].length == 0) {
      this.badAccessor = true;
      return this.getInstanceController(node)
    }
    for(var i = 0;i < outputData["JOINT"].length;i++) {
      outputData["JOINT"][i]++
    }
    if(this.exceptions.negjoints) {
      for(var i = 0;i < outputData["JOINT"].length;i++) {
        if(outputData["JOINT"][i] == 0) {
          outputData["WEIGHT"][i] = 0
        }
      }
    }
    var skeletonData = {vertexJoints:outputData["JOINT"], vertexWeight:outputData["WEIGHT"], joints:joints, inverseBindMatrix:inverseBindMatrix, count:maxJoints};
    var meshes = this.getMeshes(controller.getElementsByTagName("skin")[0].getAttribute("source").substr(1), skeletonData);
    this.setMaterialOntoMesh(meshes, node);
    return node.GLGEObj
  };
  GLGE.Collada.prototype.getInstanceLight = function(node) {
    var type = node.getElementsByTagName("technique_common")[0].getElementsByTagName("*")[0];
    var light = new GLGE.Light;
    var color = type.getElementsByTagName("color");
    if(color.length > 0) {
      var colors = color[0].firstChild.nodeValue.split(" ");
      var c = "rgb(" + (colors[0] * 255 | 0) + "," + (colors[1] * 255 | 0) + "," + (colors[2] * 255 | 0) + ")";
      light.setColor(c)
    }
    switch(type.tagName) {
      case "point":
        light.setType(GLGE.L_POINT);
      case "spot":
        var ca = type.getElementsByTagName("constant_attenuation");
        if(ca.length > 0) {
          light.setAttenuationConstant(parseFloat(ca[0].firstChild.nodeValue))
        }
        var la = type.getElementsByTagName("linear_attenuation");
        if(la.length > 0) {
          light.setAttenuationLinear(parseFloat(la[0].firstChild.nodeValue))
        }
        var qa = type.getElementsByTagName("quadratic_attenuation");
        if(qa.length > 0) {
          light.setAttenuationQuadratic(parseFloat(qa[0].firstChild.nodeValue))
        }
        if(type.tagName == "spot") {
          light.setType(GLGE.L_SPOT)
        }else {
          break
        }
        var se = type.getElementsByTagName("falloff_exponent");
        if(se.length > 0) {
          var exp = parseFloat(se[0].firstChild.nodeValue);
          if(exp < 1.0001) {
            exp *= 128
          }
          light.setSpotExponent(exp)
        }
        var fa = type.getElementsByTagName("falloff_angle");
        if(fa.length > 0) {
          light.setSpotCosCutOff(Math.cos(parseFloat(fa[0].firstChild.nodeValue) / 180 * Math.PI))
        }
        break
    }
    return light
  };
  GLGE.Collada.prototype.addColladaCamera = function(object) {
    object.matrix = null;
    object.parent = this;
    this.children.push(object);
    this.hasCamera = true;
    return this
  };
  GLGE.Collada.prototype.getNode = function(node, ref) {
    if(!ref && node.GLGEObject) {
      newGroup = node.GLGEObject;
      delete this.GLGEObject;
      return newGroup
    }
    if(ref && node && node.GLGEObjects) {
      return node.GLGEObjects[0]
    }
    var newGroup = new GLGE.Group;
    var name = "bone" + ++this.boneIdx;
    newGroup.setName(name);
    if(!node) {
      return newGroup
    }
    if(!node.GLGEObjects) {
      node.GLGEObjects = []
    }
    node.GLGEObjects.push(newGroup);
    var child = node.firstChild;
    var matrix = GLGE.identMatrix();
    var data;
    if(child) {
      do {
        switch(child.tagName) {
          case "node":
            newGroup.addGroup(this.getNode(child));
            break;
          case "instance_node":
            newGroup.addGroup(this.getNode(this.xml.getElementById(child.getAttribute("url").substr(1))));
            break;
          case "instance_visual_scene":
            newGroup.addGroup(this.getNode(this.xml.getElementById(child.getAttribute("url").substr(1))));
            break;
          case "instance_light":
            if(this.useLights) {
              newGroup.addLight(this.getInstanceLight(this.xml.getElementById(child.getAttribute("url").substr(1))))
            }
            break;
          case "instance_geometry":
            newGroup.addObject(this.getInstanceGeometry(child));
            break;
          case "instance_controller":
            newGroup.addObject(this.getInstanceController(child));
            break;
          case "instance_camera":
            if(!this.useCamera) {
              break
            }
            newGroup.addColladaCamera(this.getNode(this.xml.getElementById(child.getAttribute("url").substr(1))));
            break;
          case "optics":
            if(!this.useCamera) {
              break
            }
            var opticChild = child.getElementsByTagName("technique_common");
            if(opticChild && opticChild.length > 0) {
              opticChild = opticChild[0].getElementsByTagName("perspective");
              if(opticChild && opticChild.length > 0) {
                var yFov = opticChild[0].getElementsByTagName("yfov");
                if(yFov && yFov.length > 0) {
                  newGroup.yFov = parseFloat(yFov[0].textContent)
                }
                var zNear = opticChild[0].getElementsByTagName("znear");
                if(zNear && zNear.length > 0) {
                  newGroup.zNear = parseFloat(zNear[0].textContent)
                }
                var zFar = opticChild[0].getElementsByTagName("zfar");
                if(zFar && zFar.length > 0) {
                  newGroup.zFar = parseFloat(zFar[0].textContent)
                }
              }
            }
            break;
          case "matrix":
            matrix = this.parseArray(child);
            break;
          case "translate":
            data = this.parseArray(child);
            matrix = GLGE.mulMat4(matrix, GLGE.translateMatrix(data[0], data[1], data[2]));
            break;
          case "rotate":
            data = this.parseArray(child);
            matrix = GLGE.mulMat4(matrix, GLGE.angleAxis(data[3] * 0.017453278, [data[0], data[1], data[2]]));
            break;
          case "scale":
            data = this.parseArray(child);
            matrix = GLGE.mulMat4(matrix, GLGE.scaleMatrix(data[0], data[1], data[2]));
            break
        }
      }while(child = child.nextSibling)
    }
    newGroup.setLoc(matrix[3], matrix[7], matrix[11]);
    var mat = GLGE.Mat4([matrix[0], matrix[1], matrix[2], 0, matrix[4], matrix[5], matrix[6], 0, matrix[8], matrix[9], matrix[10], 0, 0, 0, 0, 1]);
    newGroup.setRotMatrix(mat);
    if(ref) {
      node.GLGEObject = newGroup
    }
    return newGroup
  };
  GLGE.Collada.prototype.initVisualScene = function() {
    var metadata = this.xml.getElementsByTagName("asset");
    var up_axis = "Z_UP";
    if(metadata.length) {
      var up_axis_node = metadata[0].getElementsByTagName("up_axis");
      if(up_axis_node.length) {
        up_axis_node = up_axis_node[0];
        var cur_axis = up_axis_node.firstChild.nodeValue;
        if(cur_axis.length) {
          up_axis = cur_axis
        }
      }
    }
    var transformRoot = this;
    if(up_axis[0] != "Y" && up_axis[0] != "y") {
      transformRoot = new GLGE.Group;
      this.addChild(transformRoot);
      if(up_axis[0] != "Z" && up_axis[0] != "z") {
        this.setRotMatrix(GLGE.Mat4([0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]))
      }else {
        this.setRotMatrix(GLGE.Mat4([1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1]))
      }
    }
    if(!this.rootId) {
      var scene = this.xml.getElementsByTagName("scene");
      if(scene.length > 0) {
        transformRoot.addGroup(this.getNode(scene[0]))
      }else {
        GLGE.error("Please indicate the asset to render in Collada Document" + this.url)
      }
    }else {
      var root = this.xml.getElementById(this.rootId);
      if(root) {
        transformRoot.addGroup(this.getNode(root))
      }else {
        GLGE.error("Asset " + this.rootId + " not found in document" + this.url)
      }
    }
    if(this.useCamera) {
      var tempCamera;
      var findChild = function(root) {
        if(root.hasCamera) {
          tempCamera = root;
          return
        }
        if(!root.children) {
          return
        }
        for(var i = 0;i < root.children.length && !tempCamera;i++) {
          findChild(root.children[i])
        }
      };
      findChild(transformRoot);
      if(tempCamera) {
        pp = transformRoot.parent.parent;
        pp.camera.locX = tempCamera.locX;
        pp.camera.locY = tempCamera.locY;
        pp.camera.locZ = tempCamera.locZ;
        if(tempCamera.children && tempCamera.children.length > 0) {
          var child = tempCamera.children[0];
          if(child.yFov) {
            pp.camera.fovy = child.yFov;
            pp.camera.pMatrix = null
          }
          if(child.zNear) {
            pp.camera.near = child.zNear
          }
          if(child.zFar) {
            pp.camera.far = child.zFar
          }
        }
        pp.camera.matrix = null;
        pp.camera.rotmatrix = tempCamera.rotmatrix;
        pp.camera.lookAt = null
      }
    }
  };
  var exceptions = {"default":{}, "COLLADA Mixamo exporter":{badAccessor:true}, "FBX COLLADA exporter":{badAccessor:true}, "Blender2.5":{flipangle:true, negjoints:true}};
  GLGE.Collada.prototype.getExceptions = function() {
    if(this.xml.getElementsByTagName("authoring_tool").length > 0 && this.xml.getElementsByTagName("authoring_tool")[0].firstChild.nodeValue == "COLLADA Mixamo exporter") {
      return exceptions["COLLADA Mixamo exporter"]
    }
    if(this.xml.getElementsByTagName("authoring_tool").length > 0 && this.xml.getElementsByTagName("authoring_tool")[0].firstChild.nodeValue == "FBX COLLADA exporter") {
      return exceptions["FBX COLLADA exporter"]
    }
    if(this.xml.getElementsByTagName("authoring_tool").length > 0 && /Blender 2.5/.test(this.xml.getElementsByTagName("authoring_tool")[0].firstChild.nodeValue)) {
      return exceptions["Blender2.5"]
    }
  };
  GLGE.Collada.prototype.loaded = function(url, xml) {
    this.xml = xml;
    if(xml.getElementsByTagName("authoring_tool").length > 0) {
      this.exceptions = exceptions[xml.getElementsByTagName("authoring_tool")[0].firstChild.nodeValue]
    }
    this.exceptions = this.getExceptions();
    if(!this.exceptions) {
      this.exceptions = exceptions["default"]
    }
    this.initVisualScene();
    this.getAnimations();
    if(this.loadedCallback) {
      this.loadedCallback(this)
    }
    var collada = this;
    setTimeout(function() {
      collada.fireEvent("loaded", {url:this.url});
      if(collada.isComplete()) {
        collada.fireEvent("downloadComplete", {})
      }
    }, 1)
  };
  GLGE.Scene.prototype.addCollada = GLGE.Scene.prototype.addGroup;
  GLGE.Group.prototype.addCollada = GLGE.Group.prototype.addGroup;
  if(GLGE.Document) {
    GLGE.Document.prototype.getCollada = function(ele) {
      if(!ele.object) {
        ele.object = new (GLGE[this.classString(ele.tagName)]);
        ele.object.setDocument(ele.getAttribute("document"), this.getAbsolutePath(this.rootURL, null));
        ele.removeAttribute("document");
        this.setProperties(ele)
      }
      return ele.object
    }
  }
})(GLGE);
(function(GLGE) {
  GLGE.FilterScanlines = function() {
  };
  GLGE.augment(GLGE.Filter2d, GLGE.FilterScanlines);
  GLGE.FilterScanlines.prototype.intensity = 0.95;
  GLGE.FilterScanlines.prototype.setIntensity = function(intensity) {
    this.intensity = intensity;
    this.createPasses();
    return this
  };
  GLGE.FilterScanlines.prototype.GLRender = function(gl, buffer) {
    if(!this.gl) {
      this.gl = gl;
      this.createPasses()
    }
    return GLGE.Filter2d.prototype.GLRender.call(this, gl, buffer)
  };
  GLGE.FilterScanlines.prototype.createPasses = function() {
    if(!this.gl) {
      return
    }
    var canvasHeight = this.gl.canvas.height;
    var pass1 = [];
    pass1.push("precision highp float;");
    pass1.push("uniform sampler2D GLGE_RENDER;");
    pass1.push("varying vec2 texCoord;");
    pass1.push("void main(void){");
    pass1.push("vec4 color=texture2D(GLGE_RENDER, texCoord.xy);");
    pass1.push("if(mod(texCoord.y," + 2 / canvasHeight + ")>" + 1 / canvasHeight + ") color.rgb*=" + this.intensity + ";");
    pass1.push("color.rgb*=pow(1.0-length(texCoord.xy-0.5),1.3);");
    pass1.push("color.rgb*=vec3(0.93,1.0,0.93);");
    pass1.push("gl_FragColor = vec4(color.rgb,1.0);");
    pass1.push("}");
    this.passes = [];
    this.addPass(pass1.join(""))
  }
})(GLGE);
(function(GLGE) {
  GLGE.FilterGlow = function() {
    this.setEmitBufferWidth(256);
    this.setEmitBufferHeight(256)
  };
  GLGE.augment(GLGE.Filter2d, GLGE.FilterGlow);
  GLGE.FilterGlow.prototype.renderEmit = true;
  GLGE.FilterGlow.prototype.blur = 1.2;
  GLGE.FilterGlow.prototype.intensity = 3;
  GLGE.FilterGlow.prototype.setEmitBufferWidth = function(value) {
    GLGE.Filter2d.prototype.setEmitBufferWidth.call(this, value);
    this.createPasses();
    return this
  };
  GLGE.FilterGlow.prototype.setEmitBufferHeight = function(value) {
    GLGE.Filter2d.prototype.setEmitBufferHeight.call(this, value);
    this.createPasses();
    return this
  };
  GLGE.FilterGlow.prototype.setBlur = function(blur) {
    this.blur = blur;
    this.createPasses();
    return this
  };
  GLGE.FilterGlow.prototype.setIntensity = function(intensity) {
    this.intensity = intensity;
    this.createPasses();
    return this
  };
  GLGE.FilterGlow.prototype.createPasses = function() {
    var pass1 = [];
    pass1.push("precision highp float;");
    pass1.push("uniform sampler2D GLGE_EMIT;");
    pass1.push("varying vec2 texCoord;");
    pass1.push("float blurSize=" + (1 / this.emitBufferWidth * this.blur).toFixed(10) + ";");
    pass1.push("float rand(vec2 co){;");
    pass1.push("return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);");
    pass1.push("}");
    pass1.push("void main(void){");
    pass1.push("vec4 color=vec4(0.0,0.0,0.0,0.0);");
    pass1.push("float rnd=1.0-rand(texCoord.xy)*4.0*blurSize;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x - 4.0*blurSize, texCoord.y)) * 0.05 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x - 3.0*blurSize, texCoord.y)) * 0.09 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x - 2.0*blurSize, texCoord.y)) * 0.12 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x - blurSize, texCoord.y)) * 0.15 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x, texCoord.y)) * 0.18 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x + blurSize, texCoord.y)) * 0.15 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x + 2.0*blurSize, texCoord.y)) * 0.12 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x + 3.0*blurSize, texCoord.y)) * 0.09 * rnd;");
    pass1.push("color += texture2D(GLGE_EMIT, vec2(texCoord.x + 4.0*blurSize, texCoord.y)) * 0.05 * rnd;");
    pass1.push("gl_FragColor = vec4(color.rgb,1.0);");
    pass1.push("}");
    var pass2 = [];
    pass2.push("precision highp float;");
    pass2.push("uniform sampler2D GLGE_PASS0;");
    pass2.push("uniform sampler2D GLGE_RENDER;");
    pass2.push("uniform sampler2D GLGE_EMIT;");
    pass2.push("varying vec2 texCoord;");
    pass2.push("float blurSize=" + (1 / this.emitBufferHeight * this.blur).toFixed(10) + ";");
    pass2.push("float rand(vec2 co){;");
    pass2.push("return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);");
    pass2.push("}");
    pass2.push("void main(void){");
    pass2.push("vec4 color=vec4(0.0,0.0,0.0,0.0);");
    pass2.push("float rnd=1.0-rand(texCoord.xy)*4.0*blurSize;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y - 4.0*blurSize)) * 0.05 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y - 3.0*blurSize)) * 0.09 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y - 2.0*blurSize)) * 0.12 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y - blurSize)) * 0.15 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y)) * 0.18 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y + blurSize)) * 0.15 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y + 2.0*blurSize)) * 0.12 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y + 3.0*blurSize)) * 0.09 * rnd;");
    pass2.push("color += texture2D(GLGE_PASS0, vec2(texCoord.x, texCoord.y + 4.0*blurSize)) * 0.05 * rnd;");
    pass2.push("gl_FragColor = vec4(color.rgb*" + this.intensity.toFixed(5) + "+texture2D(GLGE_RENDER,texCoord).rgb,1.0);");
    pass2.push("}");
    this.passes = [];
    this.addPass(pass1.join(""));
    this.addPass(pass2.join(""))
  }
})(GLGE);
(function(GLGE) {
  GLGE.FilterAO = function() {
    this.setUniform("1f", "cavitygamma", 1 / 3);
    this.setUniform("1f", "whiteMul", 2);
    this.setUniform("1f", "aogamma", 1 / 3);
    this.setUniform("1f", "maxDist", 0.025);
    this.passes = []
  };
  GLGE.augment(GLGE.Filter2d, GLGE.FilterAO);
  GLGE.FilterAO.prototype.renderNormal = true;
  GLGE.FilterAO.prototype.quality = 1;
  GLGE.FilterAO.prototype.range = 80;
  GLGE.FilterAO.prototype.samples = 16;
  GLGE.FilterAO.prototype.useRender = true;
  GLGE.FilterAO.prototype.getNormalBufferHeight = function() {
    return this.normalBufferHeight ? this.normalBufferHeight : this.gl.canvas.height * this.quality | 0
  };
  GLGE.FilterAO.prototype.getNormalBufferWidth = function() {
    return this.normalBufferWidth ? this.normalBufferWidth : this.gl.canvas.width * this.quality | 0
  };
  GLGE.FilterAO.prototype.setUseRender = function(value) {
    this.useRender = value;
    this.normalBuffers = null;
    this.passes = [];
    return this
  };
  GLGE.FilterAO.prototype.setSamples = function(value) {
    this.samples = value;
    this.normalBuffers = null;
    this.passes = [];
    return this
  };
  GLGE.FilterAO.prototype.setQuality = function(value) {
    this.quality = value;
    this.normalBuffers = null;
    this.passes = [];
    return this
  };
  GLGE.FilterAO.prototype.setRange = function(value) {
    this.range = value;
    if(this.gl) {
      this.setUniform("1f", "blurX", this.range / this.getNormalBufferWidth() * this.quality / this.samples);
      this.setUniform("1f", "blurY", this.range / this.getNormalBufferHeight() / this.samples)
    }
    return this
  };
  GLGE.FilterAO.prototype.setCavityGamma = function(value) {
    this.setUniform("1f", "cavitygamma", 1 / value);
    return this
  };
  GLGE.FilterAO.prototype.setAmbientMultiplier = function(value) {
    this.setUniform("1f", "whiteMul", value);
    return this
  };
  GLGE.FilterAO.prototype.setAmbientGamma = function(value) {
    this.setUniform("1f", "aogamma", 1 / value);
    return this
  };
  GLGE.FilterAO.prototype.setMaximumDistance = function(value) {
    this.setUniform("1f", "maxDist", value);
    return this
  };
  GLGE.FilterAO.prototype.GLRender = function(gl, buffer) {
    this.gl = gl;
    if(this.passes.length == 0) {
      this.createPasses()
    }
    return GLGE.Filter2d.prototype.GLRender.call(this, gl, buffer)
  };
  GLGE.FilterAO.prototype.createPasses = function() {
    if(!this.gl) {
      return
    }
    var width = this.getNormalBufferWidth();
    var height = this.getNormalBufferHeight();
    var size = this.samples / 4 | 0;
    var weights = [];
    for(var i = -size, cnt = 0;i <= size;i++, cnt++) {
      var n = size - Math.abs(i) + 1;
      weights[cnt] = n / (size * size + size)
    }
    weights[size] = 0;
    this.setUniform("1f", "blurX", this.range / width * this.quality / this.samples);
    this.setUniform("1f", "blurY", this.range / height / this.samples);
    var pass1 = [];
    pass1.push("precision highp float;");
    pass1.push("uniform sampler2D GLGE_NORMAL;");
    pass1.push("uniform float maxDist;");
    pass1.push("varying vec2 texCoord;");
    pass1.push("uniform float blurX;");
    pass1.push("float rand(vec2 co){");
    pass1.push("return (fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453)-0.5)*2.0;");
    pass1.push("}");
    pass1.push("void main(void){");
    pass1.push("vec4 n=texture2D(GLGE_NORMAL,texCoord.xy).rgba;");
    pass1.push("vec4 color=vec4(0.0,0.0,0.0,n.a);");
    pass1.push("float blurSize=blurX/(n.a*n.a+1.0);");
    pass1.push("float offset=rand(texCoord.xy)*blurSize+texCoord.x;");
    pass1.push("vec3 samp;");
    pass1.push("float delta;");
    for(var i = -size, cnt = 0;i <= size;i++, cnt++) {
      if(i == 0) {
        continue
      }
      pass1.push("samp = texture2D(GLGE_NORMAL, vec2(" + i + ".0*blurSize+offset, texCoord.y)).rga;");
      pass1.push("delta=abs(n.a-samp.b);");
      pass1.push("if(delta<maxDist){");
      pass1.push("delta/=maxDist;");
      pass1.push("color.b -= (samp.r-0.5) * " + weights[cnt] + " * " + (2 * i / Math.abs(i) | 0) + ".0;");
      pass1.push("color.rg += samp.rg * " + weights[cnt] + " * (1.0-delta);");
      pass1.push("color.rg += n.rg  * " + weights[cnt] + " * delta;");
      pass1.push("}else{");
      pass1.push("color.rg +=n.rg * " + weights[cnt] + ";");
      pass1.push("}")
    }
    pass1.push("color.b = (color.b+1.0)*0.5;");
    pass1.push("gl_FragColor = color;");
    pass1.push("}");
    var pass2 = [];
    pass2.push("precision highp float;");
    pass2.push("uniform sampler2D GLGE_PASS0;");
    pass2.push("uniform sampler2D GLGE_RENDER;");
    pass2.push("uniform sampler2D GLGE_NORMAL;");
    pass2.push("varying vec2 texCoord;");
    pass2.push("uniform float blurY;");
    pass2.push("uniform float cavitygamma;");
    pass2.push("uniform float whiteMul;");
    pass2.push("uniform float aogamma;");
    pass2.push("uniform float maxDist;");
    pass2.push("float rand(vec2 co){");
    pass2.push("return (fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453)-0.5)*2.0;");
    pass2.push("}");
    pass2.push("void main(void){");
    pass2.push("vec4 color=vec4(0.0,0.0,0.0,1.0);");
    pass2.push("vec4 samp=vec4(0.0);");
    pass2.push("float random=rand(texCoord.xy);");
    if(this.quality < 1) {
      pass2.push("vec2 displace=vec2(" + 0.5 / width + "," + 0.5 / height + ")*random;");
      pass2.push("vec4 n=texture2D(GLGE_PASS0, texCoord.xy+displace);")
    }else {
      pass2.push("vec4 n=texture2D(GLGE_PASS0, texCoord.xy);")
    }
    pass2.push("float delta;");
    pass2.push("float blurSize=blurY/(n.a*n.a+1.0);");
    pass2.push("float offset=random*blurSize+texCoord.y;");
    for(var i = -size, cnt = 0;i <= size;i++, cnt++) {
      if(i == 0) {
        continue
      }
      if(this.quality < 1) {
        pass2.push("samp = texture2D(GLGE_PASS0, vec2(texCoord.x, " + i + ".0*blurSize + offset)+displace);")
      }else {
        pass2.push("samp = texture2D(GLGE_PASS0, vec2(texCoord.x, " + i + ".0*blurSize + offset));")
      }
      pass2.push("delta=abs(n.a-samp.a);");
      pass2.push("if(delta<maxDist){");
      pass2.push("delta/=maxDist;");
      pass2.push("color.a -= (samp.g-0.5) * " + weights[cnt] + " * " + (i * 2 / Math.abs(i) | 0) + ".0;");
      pass2.push("color.rg += samp.rg  * " + weights[cnt] + " * (1.0-delta);");
      pass2.push("color.rg += n.rg * " + weights[cnt] + " * delta;");
      pass2.push("}else{");
      pass2.push("color.rg += n.rg * " + weights[cnt] + ";");
      pass2.push("}")
    }
    pass2.push("color.a = (color.a+1.0)*n.b;");
    pass2.push("color.a = pow(color.a,cavitygamma);");
    if(this.quality < 1) {
      pass2.push("float dif =  length(color.rg-texture2D(GLGE_NORMAL, texCoord.xy+displace).rg);");
      pass2.push("samp =  texture2D(GLGE_NORMAL, texCoord.xy+displace+" + 1 / this.gl.canvas.height + ").rgba;");
      pass2.push("if(abs(n.a-samp.a)<maxDist) dif =  max(length(color.rg-samp.rg),dif);");
      pass2.push("samp =  texture2D(GLGE_NORMAL, texCoord.xy+displace-" + 1 / this.gl.canvas.height + ").rgba;");
      pass2.push("if(abs(n.a-samp.a)<maxDist) dif =  max(length(color.rg-samp.rg),dif);")
    }else {
      pass2.push("float dif =  length(color.rg-texture2D(GLGE_NORMAL, texCoord.xy).rg);")
    }
    pass2.push("float result = 1.0-((dif*(color.a-0.5)*2.0)+1.0)*0.5;");
    pass2.push("result = pow(min(result*whiteMul,1.0),aogamma);");
    pass2.push("gl_FragColor = vec4(vec3(result),1.0);");
    if(this.useRender) {
      pass2.push("gl_FragColor = vec4(texture2D(GLGE_RENDER, texCoord.xy).rgb*gl_FragColor.r,1.0);")
    }
    pass2.push("}");
    this.passes = [];
    this.addPass(pass1.join(""), width, height);
    this.addPass(pass2.join(""))
  }
})(GLGE);
var PROTO = {};
PROTO.IsArray = function() {
  if(typeof Uint8Array != "undefined") {
    return function(arr) {
      return arr instanceof Array || arr instanceof Uint8Array
    }
  }else {
    return function(arr) {
      return arr instanceof Array
    }
  }
}();
PROTO.DefineProperty = function() {
  var DefineProperty;
  if(typeof Object.defineProperty != "undefined") {
    DefineProperty = function(prototype, property, getter, setter) {
      Object.defineProperty(prototype, property, {"get":getter, "set":setter, "enumerable":true, "configurable":false})
    }
  }else {
    if(Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) {
      DefineProperty = function(prototype, property, getter, setter) {
        if(typeof getter !== "undefined") {
          prototype.__defineGetter__(property, getter)
        }
        if(typeof setter !== "undefined") {
          prototype.__defineSetter__(property, setter)
        }
      }
    }
  }
  if(DefineProperty) {
    try {
      var TestClass = function() {
      };
      DefineProperty(TestClass.prototype, "x", function() {
        return this.xval * 2
      }, function(newx) {
        this.xval = newx
      });
      var testinst = new TestClass;
      testinst.x = 5;
      if(testinst.x != 10) {
        PROTO.warn("DefineProperty test gave the wrong result " + testinst.x);
        DefineProperty = undefined
      }
    }catch(e) {
      PROTO.warn("DefineProperty should be supported, but threw " + e);
      DefineProperty = undefined
    }
  }
  return DefineProperty
}();
PROTO.cloneType = function(f) {
  var ret = {};
  for(var x in f) {
    ret[x] = f[x]
  }
  return ret
};
PROTO.wiretypes = {varint:0, fixed64:1, lengthdelim:2, fixed32:5};
PROTO.optional = "optional";
PROTO.repeated = "repeated";
PROTO.required = "required";
PROTO.warn = function(s) {
  if(typeof self.console != "undefined" && self.console.log) {
    self.console.log(s)
  }
};
PROTO.I64 = function(msw, lsw, sign) {
  this.msw = msw;
  this.lsw = lsw;
  if(typeof lsw === undefined) {
    PROTO.warn("Too few arguments passed to I64 constructor: perhaps you meant PROTO.I64.fromNumber()");
    throw"Too few arguments passed to I64 constructor: perhaps you meant PROTO.I64.fromNumber()";
  }
  if(sign === true) {
    sign = -1
  }
  if(!sign) {
    sign = 1
  }
  this.sign = sign
};
PROTO.I64.prototype = {toNumber:function() {
  return(this.msw * 4294967296 + this.lsw) * this.sign
}, toString:function() {
  function zeros(len) {
    var retval = "";
    for(var i = 0;i < len;++i) {
      retval += "0"
    }
    return retval
  }
  var firstHalf = this.msw.toString(16);
  var secondHalf = this.lsw.toString(16);
  var sign = this.sign == -1 ? "-" : "";
  return sign + "0x" + zeros(8 - firstHalf.length) + firstHalf + zeros(8 - secondHalf.length) + secondHalf
}, equals:function(other) {
  return this.sign == other.sign && this.msw == other.msw && this.lsw == other.lsw
}, hash:function() {
  return this.sign * this.msw + "_" + this.lsw
}, convertToUnsigned:function() {
  var local_lsw;
  local_lsw = this.lsw;
  var local_msw;
  if(this.sign < 0) {
    local_msw = 2147483647 - this.msw;
    local_msw += 2147483647;
    local_msw += 1;
    local_lsw = 2147483647 - this.lsw;
    local_lsw += 2147483647;
    local_lsw += 2;
    if(local_lsw == 4294967296) {
      local_lsw = 0;
      local_msw += 1
    }
  }else {
    local_msw = this.msw
  }
  return new PROTO.I64(local_msw, local_lsw, 1)
}, convertFromUnsigned:function() {
  if(this.msw >= 2147483648) {
    var local_msw = 4294967295 - this.msw;
    var local_lsw = 4294967295 - this.lsw + 1;
    if(local_lsw > 4294967295) {
      local_lsw -= 4294967296;
      local_msw += 1
    }
    return new PROTO.I64(local_msw, local_lsw, -1)
  }
  return new PROTO.I64(this.msw, this.lsw, this.sign)
}, convertToZigzag:function() {
  var local_lsw;
  if(this.sign < 0) {
    local_lsw = this.lsw * 2 - 1
  }else {
    local_lsw = this.lsw * 2
  }
  var local_msw = this.msw * 2;
  if(local_lsw > 4294967295) {
    local_msw += 1;
    local_lsw -= 4294967296
  }
  if(local_lsw < 0) {
    local_msw -= 1;
    local_lsw += 4294967296
  }
  return new PROTO.I64(local_msw, local_lsw, 1)
}, convertFromZigzag:function() {
  var retval;
  if(this.msw & 1) {
    retval = new PROTO.I64(this.msw >>> 1, 2147483648 + (this.lsw >>> 1), this.lsw & 1 ? -1 : 1)
  }else {
    retval = new PROTO.I64(this.msw >>> 1, this.lsw >>> 1, this.lsw & 1 ? -1 : 1)
  }
  if(retval.sign == -1) {
    retval.lsw += 1;
    if(retval.lsw > 4294967295) {
      retval.msw += 1;
      retval.lsw -= 4294967296
    }
  }
  return retval
}, serializeToLEBase256:function() {
  var arr = new Array(8);
  var temp = this.lsw;
  for(var i = 0;i < 4;i++) {
    arr[i] = temp & 255;
    temp = temp >> 8
  }
  temp = this.msw;
  for(var i = 4;i < 8;i++) {
    arr[i] = temp & 255;
    temp = temp >> 8
  }
  return arr
}, serializeToLEVar128:function() {
  var arr = new Array(1);
  var temp = this.lsw;
  for(var i = 0;i < 4;i++) {
    arr[i] = temp & 127;
    temp = temp >>> 7;
    if(temp == 0 && this.msw == 0) {
      return arr
    }
    arr[i] += 128
  }
  arr[4] = temp & 15 | (this.msw & 7) << 4;
  temp = this.msw >>> 3;
  if(temp == 0) {
    return arr
  }
  arr[4] += 128;
  for(var i = 5;i < 10;i++) {
    arr[i] = temp & 127;
    temp = temp >>> 7;
    if(temp == 0) {
      return arr
    }
    arr[i] += 128
  }
  return arr
}, unsigned_add:function(other) {
  var temp = this.lsw + other.lsw;
  var local_msw = this.msw + other.msw;
  var local_lsw = temp % 4294967296;
  temp -= local_lsw;
  local_msw += Math.floor(temp / 4294967296);
  return new PROTO.I64(local_msw, local_lsw, this.sign)
}, sub:function(other) {
  if(other.sign != this.sign) {
    return this.unsigned_add(other)
  }
  if(other.msw > this.msw || other.msw == this.msw && other.lsw > this.lsw) {
    var retval = other.sub(this);
    retval.sign = -this.sign;
    return retval
  }
  var local_lsw = this.lsw - other.lsw;
  var local_msw = this.msw - other.msw;
  if(local_lsw < 0) {
    local_lsw += 4294967296;
    local_msw -= 1
  }
  return new PROTO.I64(local_msw, local_lsw, this.sign)
}, less:function(other) {
  if(other.sign != this.sign) {
    return this.sign < 0
  }
  var a = this;
  var b = other;
  if(this.sign < 0) {
    b = this;
    a = other
  }
  if(a.msw == b.msw) {
    return a.lsw < b.lsw
  }
  if(a.msw < b.msw) {
    return true
  }
  return false
}, unsigned_less:function(other) {
  var a = this, b = other;
  if(a.msw == b.msw) {
    return a.lsw < b.lsw
  }
  if(a.msw < b.msw) {
    return true
  }
  return false
}, add:function(other) {
  if(other.sign < 0 && this.sign >= 0) {
    return this.sub(new PROTO.I64(other.msw, other.lsw, -other.sign))
  }
  if(other.sign >= 0 && this.sign < 0) {
    return other.sub(new PROTO.I64(this.msw, this.lsw, -this.sign))
  }
  return this.unsigned_add(other)
}};
PROTO.I64.fromNumber = function(mynum) {
  var sign = mynum < 0 ? -1 : 1;
  mynum *= sign;
  var lsw = mynum % 4294967296;
  var msw = Math.floor((mynum - lsw) / 4294967296);
  return new PROTO.I64(msw, lsw, sign)
};
PROTO.I64.from32pair = function(msw, lsw, sign) {
  return new PROTO.I64(msw, lsw, sign)
};
PROTO.I64.parseLEVar128 = function(stream, float64toassignto) {
  var retval = float64toassignto || new PROTO.I64(0, 0, 1);
  var n = 0;
  var endloop = false;
  var offset = 1;
  for(var i = 0;!endloop && i < 5;i++) {
    var byt = stream.readByte();
    if(byt >= 128) {
      byt -= 128
    }else {
      endloop = true
    }
    n += offset * byt;
    offset *= 128
  }
  var lsw = n % 4294967296;
  var msw = Math.floor((n - lsw) / 4294967296);
  offset = 8;
  for(var i = 0;!endloop && i < 5;i++) {
    var byt = stream.readByte();
    if(byt >= 128) {
      byt -= 128
    }else {
      endloop = true
    }
    msw += offset * byt;
    offset *= 128
  }
  retval.msw = msw % 4294967296;
  retval.lsw = lsw;
  retval.sign = 1;
  return retval
};
PROTO.I64.parseLEBase256 = function(stream, float64toassignto) {
  var retval = float64toassignto || new PROTO.I64(0, 0, 1);
  var n = 0;
  var endloop = false;
  var offset = 1;
  for(var i = 0;i < 4;i++) {
    var byt = stream.readByte();
    n += offset * byt;
    offset *= 256
  }
  var lsw = n;
  var msw = 0;
  offset = 1;
  for(var i = 0;i < 4;i++) {
    var byt = stream.readByte();
    msw += offset * byt;
    offset *= 256
  }
  retval.msw = msw;
  retval.lsw = lsw;
  retval.sign = 1;
  return retval
};
PROTO.I64.ONE = new PROTO.I64.fromNumber(1);
PROTO.I64.ZERO = new PROTO.I64.fromNumber(0);
PROTO.BinaryParser = function(bigEndian, allowExceptions) {
  this.bigEndian = bigEndian, this.allowExceptions = allowExceptions
};
PROTO.BinaryParser.prototype.encodeFloat = function(number, precisionBits, exponentBits) {
  var n;
  var bias = Math.pow(2, exponentBits - 1) - 1, minExp = -bias + 1, maxExp = bias, minUnnormExp = minExp - precisionBits, status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0, exp = 0, len = 2 * bias + 1 + precisionBits + 3, bin = new Array(len), signal = (n = status !== 0 ? 0 : n) < 0;
  n = Math.abs(n);
  var intPart = Math.floor(n), floatPart = n - intPart, i, lastBit, rounded, j, result, r;
  for(i = len;i;bin[--i] = 0) {
  }
  for(i = bias + 2;intPart && i;bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2)) {
  }
  for(i = bias + 1;floatPart > 0 && i;(bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart) {
  }
  for(i = -1;++i < len && !bin[i];) {
  }
  if(bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]) {
    if(!(rounded = bin[lastBit])) {
      for(j = lastBit + 2;!rounded && j < len;rounded = bin[j++]) {
      }
    }
    for(j = lastBit + 1;rounded && --j >= 0;(bin[j] = !bin[j] - 0) && (rounded = 0)) {
    }
  }
  for(i = i - 2 < 0 ? -1 : i - 3;++i < len && !bin[i];) {
  }
  (exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp && (exp != bias + 1 - len && exp < minUnnormExp && this.warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1));
  (intPart || status !== 0) && (this.warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status), exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1));
  for(n = Math.abs(exp + bias), j = exponentBits + 1, result = "";--j;result = n % 2 + result, n = n >>= 1) {
  }
  for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];i;n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = n, n = 0), j = (j + 1) % 8) {
  }
  return this.bigEndian ? r.reverse() : r
};
PROTO.BinaryParser.prototype.encodeInt = function(number, bits, signed) {
  var max = Math.pow(2, bits), r = [];
  (number >= max || number < -(max >> 1)) && this.warn("encodeInt::overflow") && (number = 0);
  number < 0 && (number += max);
  for(;number;r[r.length] = number % 256, number = Math.floor(number / 256)) {
  }
  for(bits = -(-bits >> 3) - r.length;bits--;) {
  }
  return this.bigEndian ? r.reverse() : r
};
(function() {
  var buffer8byte = new ArrayBuffer(8);
  var buffer4byte = new ArrayBuffer(4);
  var f64buffer = new DataView(buffer8byte, 0, 8);
  var f32buffer = new DataView(buffer4byte, 0, 4);
  var u8buffer64 = new Uint8Array(buffer8byte);
  var u8buffer32 = new Uint8Array(buffer4byte);
  PROTO.BinaryParser.prototype.encodeFloat32 = function(data) {
    f32buffer.setFloat32(0, data, true);
    return u8buffer32
  };
  PROTO.BinaryParser.prototype.encodeFloat64 = function(data) {
    f64buffer.setFloat64(0, data, true);
    return u8buffer64
  };
  PROTO.BinaryParser.prototype.decodeFloat32 = function(data) {
    var len = data.length;
    if(len > 4) {
      len = 4
    }
    for(var i = 0;i < len;++i) {
      u8buffer32[i] = data[i]
    }
    return f32buffer.getFloat32(0, true)
  };
  PROTO.BinaryParser.prototype.decodeFloat64 = function(data) {
    var len = data.length;
    if(len > 8) {
      len = 8
    }
    for(var i = 0;i < len;++i) {
      u8buffer64[i] = data[i]
    }
    return f64buffer.getFloat64(0, true)
  }
})();
PROTO.BinaryParser.prototype.decodeFloat = function(data, precisionBits, exponentBits) {
  var b = new this.Buffer(this.bigEndian, data);
  PROTO.BinaryParser.prototype.checkBuffer.call(b, precisionBits + exponentBits + 1);
  var bias = Math.pow(2, exponentBits - 1) - 1, signal = PROTO.BinaryParser.prototype.readBits.call(b, precisionBits + exponentBits, 1);
  var exponent = PROTO.BinaryParser.prototype.readBits.call(b, precisionBits, exponentBits), significand = 0;
  var divisor = 2;
  var curByte = b.buffer.length + (-precisionBits >> 3) - 1;
  var byteValue, startBit, mask;
  do {
    for(byteValue = b.buffer[++curByte], startBit = precisionBits % 8 || 8, mask = 1 << startBit;mask >>= 1;byteValue & mask && (significand += 1 / divisor), divisor *= 2) {
    }
  }while(precisionBits -= startBit);
  return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity : (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand : Math.pow(2, exponent - bias) * (1 + significand) : 0)
};
PROTO.BinaryParser.prototype.decodeInt = function(data, bits, signed) {
  var b = new this.Buffer(this.bigEndian, data), x = b.readBits(0, bits), max = Math.pow(2, bits);
  return signed && x >= max / 2 ? x - max : x
};
PROTO.BinaryParser.prototype.Buffer = function(bigEndian, buffer) {
  this.bigEndian = bigEndian || 0;
  this.buffer = [];
  PROTO.BinaryParser.prototype.setBuffer.call(this, buffer)
};
PROTO.BinaryParser.prototype.readBits = function(start, length) {
  function shl(a, b) {
    for(++b;--b;a = ((a %= 2147483647 + 1) & 1073741824) == 1073741824 ? a * 2 : (a - 1073741824) * 2 + 2147483647 + 1) {
    }
    return a
  }
  if(start < 0 || length <= 0) {
    return 0
  }
  PROTO.BinaryParser.prototype.checkBuffer.call(this, start + length);
  for(var offsetLeft, offsetRight = start % 8, curByte = this.buffer.length - (start >> 3) - 1, lastByte = this.buffer.length + (-(start + length) >> 3), diff = curByte - lastByte, sum = (this.buffer[curByte] >> offsetRight & (1 << (diff ? 8 - offsetRight : length)) - 1) + (diff && (offsetLeft = (start + length) % 8) ? (this.buffer[lastByte++] & (1 << offsetLeft) - 1) << (diff-- << 3) - offsetRight : 0);diff;sum += shl(this.buffer[lastByte++], (diff-- << 3) - offsetRight)) {
  }
  return sum
};
PROTO.BinaryParser.prototype.setBuffer = function(data) {
  if(data) {
    for(var l, i = l = data.length, b = this.buffer = new Array(l);i;b[l - i] = data[--i]) {
    }
    this.bigEndian && b.reverse()
  }
};
PROTO.BinaryParser.prototype.hasNeededBits = function(neededBits) {
  return this.buffer.length >= -(-neededBits >> 3)
};
PROTO.BinaryParser.prototype.checkBuffer = function(neededBits) {
  if(!PROTO.BinaryParser.prototype.hasNeededBits.call(this, neededBits)) {
    throw new Error("checkBuffer::missing bytes");
  }
};
PROTO.BinaryParser.prototype.warn = function(msg) {
  if(this.allowExceptions) {
    throw new Error(msg);
  }
  return 1
};
PROTO.BinaryParser.prototype.toSmall = function(data) {
  return this.decodeInt(data, 8, true)
};
PROTO.BinaryParser.prototype.fromSmall = function(number) {
  return this.encodeInt(number, 8, true)
};
PROTO.BinaryParser.prototype.toByte = function(data) {
  return this.decodeInt(data, 8, false)
};
PROTO.BinaryParser.prototype.fromByte = function(number) {
  return this.encodeInt(number, 8, false)
};
PROTO.BinaryParser.prototype.toShort = function(data) {
  return this.decodeInt(data, 16, true)
};
PROTO.BinaryParser.prototype.fromShort = function(number) {
  return this.encodeInt(number, 16, true)
};
PROTO.BinaryParser.prototype.toWord = function(data) {
  return this.decodeInt(data, 16, false)
};
PROTO.BinaryParser.prototype.fromWord = function(number) {
  return this.encodeInt(number, 16, false)
};
PROTO.BinaryParser.prototype.toInt = function(data) {
  return this.decodeInt(data, 32, true)
};
PROTO.BinaryParser.prototype.fromInt = function(number) {
  return this.encodeInt(number, 32, true)
};
PROTO.BinaryParser.prototype.toDWord = function(data) {
  return this.decodeInt(data, 32, false)
};
PROTO.BinaryParser.prototype.fromDWord = function(number) {
  return this.encodeInt(number, 32, false)
};
PROTO.BinaryParser.prototype.toFloat = typeof Float32Array != "undefined" ? PROTO.BinaryParser.prototype.decodeFloat32 : function(data) {
  return this.decodeFloat(data, 23, 8)
};
PROTO.BinaryParser.prototype.fromFloat = typeof Float32Array != "undefined" ? PROTO.BinaryParser.prototype.encodeFloat32 : function(number) {
  return this.encodeFloat(number, 23, 8)
};
PROTO.BinaryParser.prototype.toDouble = typeof Float64Array != "undefined" ? PROTO.BinaryParser.prototype.decodeFloat64 : function(data) {
  return this.decodeFloat(data, 52, 11)
};
PROTO.BinaryParser.prototype.fromDouble = typeof Float64Array != "undefined" ? PROTO.BinaryParser.prototype.encodeFloat64 : function(number) {
  return this.encodeFloat(number, 52, 11)
};
PROTO.binaryParser = new PROTO.BinaryParser(false, false);
PROTO.encodeUTF8 = function(str) {
  var strlen = str.length;
  var u8 = [];
  var c, nextc;
  var x, y, z;
  for(var i = 0;i < strlen;i++) {
    c = str.charCodeAt(i);
    if((c & 65408) == 0) {
      u8.push(c)
    }else {
      if((c & 64512) == 55296) {
        nextc = str.charCodeAt(i + 1);
        if((nextc & 64512) == 56320) {
          c = ((c & 1023) << 10 | nextc & 1023) + 65536;
          i++
        }else {
          PROTO.warn("Error decoding surrogate pair: " + c + "; " + nextc)
        }
      }
      x = c & 255;
      y = c & 65280;
      z = c & 16711680;
      if(c <= 2047) {
        u8.push(192 | y >> 6 | x >> 6);
        u8.push(128 | x & 63)
      }else {
        if(c <= 65535) {
          u8.push(224 | y >> 12);
          u8.push(128 | y >> 6 & 63 | x >> 6);
          u8.push(128 | x & 63)
        }else {
          if(c <= 1114111) {
            u8.push(240 | z >> 18);
            u8.push(128 | z >> 12 & 63 | y >> 12);
            u8.push(128 | y >> 6 & 63 | x >> 6);
            u8.push(128 | x & 63)
          }else {
            PROTO.warn("Error encoding to utf8: " + c + " is greater than U+10ffff");
            u8.push("?".charCodeAt(0))
          }
        }
      }
    }
  }
  return u8
};
PROTO.decodeUTF8 = function(u8) {
  var u8len = u8.length;
  var str = "";
  var c, b2, b3, b4;
  for(var i = 0;i < u8len;i++) {
    c = u8[i];
    if((c & 128) == 0) {
    }else {
      if((c & 248) == 240) {
        b2 = u8[i + 1];
        b3 = u8[i + 2];
        b4 = u8[i + 3];
        if((b2 & 192) == 128 && (b3 & 192) == 128 && (b4 & 192) == 128) {
          c = (c & 7) << 18 | (b2 & 63) << 12 | (b3 & 63) << 6 | b4 & 63;
          i += 3
        }else {
          PROTO.warn("Error decoding from utf8: " + c + "," + b2 + "," + b3 + "," + b4);
          continue
        }
      }else {
        if((c & 240) == 224) {
          b2 = u8[i + 1];
          b3 = u8[i + 2];
          if((b2 & 192) == 128 && (b3 & 192) == 128) {
            c = (c & 15) << 12 | (b2 & 63) << 6 | b3 & 63;
            i += 2
          }else {
            PROTO.warn("Error decoding from utf8: " + c + "," + b2 + "," + b3);
            continue
          }
        }else {
          if((c & 224) == 192) {
            b2 = u8[i + 1];
            if((b2 & 192) == 128) {
              c = (c & 31) << 6 | b2 & 63;
              i += 1
            }else {
              PROTO.warn("Error decoding from utf8: " + c + "," + b2);
              continue
            }
          }else {
            PROTO.warn("Error decoding from utf8: " + c + " encountered not in multi-byte sequence");
            continue
          }
        }
      }
    }
    if(c <= 65535) {
      str += String.fromCharCode(c)
    }else {
      if(c > 65535 && c <= 1114111) {
        c -= 65536;
        str += String.fromCharCode(55296 | c >> 10) + String.fromCharCode(56320 | c & 1023)
      }else {
        PROTO.warn("Error encoding surrogate pair: " + c + " is greater than U+10ffff")
      }
    }
  }
  return str
};
PROTO.Stream = function() {
  this.write_pos_ = 0;
  this.read_pos_ = 0
};
PROTO.Stream.prototype = {read:function(amt) {
  var result = [];
  for(var i = 0;i < amt;++i) {
    var byt = this.readByte();
    if(byt === null) {
      break
    }
    result.push(byt)
  }
  return result
}, write:function(array) {
  for(var i = 0;i < array.length;i++) {
    this.writeByte(array[i])
  }
}, readByte:function() {
  return null
}, writeByte:function(byt) {
  this.write_pos_ += 1
}, readPosition:function() {
  return this.read_pos_
}, setReadPosition:function(pos) {
  this.read_pos_ = pos
}, writePosition:function() {
  return this.write_pos_
}, valid:function() {
  return false
}};
PROTO.ByteArrayStream = function(arr) {
  this.array_ = arr || new Array;
  this.read_pos_ = 0;
  this.write_pos_ = this.array_.length
};
PROTO.ByteArrayStream.prototype = new PROTO.Stream;
PROTO.ByteArrayStream.prototype.read = function(amt) {
  if(this.read_pos_ + amt > this.array_.length) {
    return null
  }
  var ret = this.array_.slice(this.read_pos_, this.read_pos_ + amt);
  this.read_pos_ += amt;
  return ret
};
PROTO.ByteArrayStream.prototype.write = function(arr) {
  Array.prototype.push.apply(this.array_, arr);
  this.write_pos_ = this.array_.length
};
PROTO.ByteArrayStream.prototype.readByte = function() {
  return this.array_[this.read_pos_++]
};
PROTO.ByteArrayStream.prototype.writeByte = function(byt) {
  this.array_.push(byt);
  this.write_pos_ = this.array_.length
};
PROTO.ByteArrayStream.prototype.valid = function() {
  return this.read_pos_ < this.array_.length
};
PROTO.ByteArrayStream.prototype.getArray = function() {
  return this.array_
};
PROTO.Uint8ArrayStream = function(arr) {
  this.array_ = arr || new Uint8Array(4096);
  this.read_pos_ = 0;
  this.write_pos_ = 0
};
PROTO.Uint8ArrayStream.prototype._realloc = function(new_size) {
  this.array_ = new Uint8Array(Math.max(new_size, this.array_.length) + this.array_.length)
};
PROTO.Uint8ArrayStream.prototype.read = function(amt) {
  if(this.read_pos_ + amt > this.array_.length) {
    return null
  }
  var ret = this.array_.subarray(this.read_pos_, this.read_pos_ + amt);
  this.read_pos_ += amt;
  return ret
};
PROTO.Uint8ArrayStream.prototype.write = function(arr) {
  if(this.write_pos_ + arr.length > this.array_.length) {
    this._realloc(this.write_pos_ + arr.length)
  }
  this.array_.set(arr, this.write_pos_);
  this.write_pos_ += arr.length
};
PROTO.Uint8ArrayStream.prototype.readByte = function() {
  return this.array_[this.read_pos_++]
};
PROTO.Uint8ArrayStream.prototype.writeByte = function(byt) {
  if(this.write_pos_ >= this.array_.length) {
    this._realloc(this.write_pos_ + 1)
  }
  this.array_[this.write_pos_++] = byt
};
PROTO.Uint8ArrayStream.prototype.valid = function() {
  return this.read_pos_ < this.array_.length
};
PROTO.Uint8ArrayStream.prototype.getArray = function() {
  return this.array_.subarray(0, this.write_pos_)
};
PROTO.CreateArrayStream = function(arr) {
  if(arr instanceof Array) {
    return new PROTO.ByteArrayStream(arr)
  }else {
    return new PROTO.Uint8ArrayStream(arr)
  }
};
(function() {
  var FromB64AlphaMinus43 = [62, -1, 62, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
  var ToB64Alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
  var ToB64Alpha_URLSafe = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"];
  PROTO.Base64Stream = function(b64string) {
    this.alphabet = ToB64Alpha;
    this.string_ = b64string || "";
    this.read_pos_ = 0;
    this.read_incomplete_value_ = 0;
    this.read_needed_bits_ = 8;
    this.write_extra_bits_ = 0;
    this.write_incomplete_value_ = 0;
    this.fixString()
  };
  PROTO.Base64Stream.prototype = new PROTO.Stream;
  PROTO.Base64Stream.prototype.setURLSafe = function() {
    this.alphabet = ToB64Alpha_URLSafe
  };
  PROTO.Base64Stream.prototype.fixString = function() {
    var len = this.string_.length;
    if(this.string_[len - 1] == "=") {
      var n = 4;
      var cutoff = 2;
      if(this.string_[len - cutoff] == "=") {
        n = 2;
        cutoff = 3
      }
      this.write_extra_bits_ = n;
      this.write_incomplete_value_ = FromB64AlphaMinus43[this.string_.charCodeAt(len - cutoff) - 43];
      this.write_incomplete_value_ >>= 6 - n;
      this.string_ = this.string_.substring(0, len - cutoff)
    }
  };
  PROTO.Base64Stream.prototype.readByte = function() {
    var next6bits;
    var n = this.read_needed_bits_;
    while(next6bits === undefined || next6bits == -1) {
      if(this.read_pos_ >= this.string_.length) {
        if(this.valid()) {
          next6bits = this.write_incomplete_value_ << 6 - n;
          this.read_pos_++;
          break
        }else {
          return null
        }
      }
      next6bits = FromB64AlphaMinus43[this.string_.charCodeAt(this.read_pos_++) - 43]
    }
    if(n == 8) {
      this.read_incomplete_value_ = next6bits;
      this.read_needed_bits_ = 2;
      return this.readByte()
    }
    var ret = this.read_incomplete_value_ << n;
    ret |= next6bits >> 6 - n;
    this.read_incomplete_value_ = next6bits & (1 << 6 - n) - 1;
    this.read_needed_bits_ += 2;
    return ret
  };
  PROTO.Base64Stream.prototype.writeByte = function(byt) {
    this.write_extra_bits_ += 2;
    var n = this.write_extra_bits_;
    this.string_ += this.alphabet[byt >> n | this.write_incomplete_value_ << 8 - n];
    this.write_incomplete_value_ = byt & (1 << n) - 1;
    if(n == 6) {
      this.string_ += this.alphabet[this.write_incomplete_value_];
      this.write_extra_bits_ = 0;
      this.write_incomplete_value_ = 0
    }
    if(this.string_.length % 77 == 76) {
      this.string_ += "\n"
    }
  };
  PROTO.Base64Stream.prototype.getString = function() {
    var len = this.string_.length;
    var retstr = this.string_;
    var n = this.write_extra_bits_;
    if(n > 0) {
      retstr += this.alphabet[this.write_incomplete_value_ << 6 - n];
      if(n == 2) {
        retstr += "=="
      }else {
        if(n == 4) {
          retstr += "="
        }
      }
    }
    return retstr
  };
  PROTO.Base64Stream.prototype.valid = function() {
    return this.read_pos_ < this.string_.length || this.read_pos_ == this.string_.length && this.write_extra_bits_
  }
})();
if(typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined") {
  PROTO.ArrayBufferStream = function(arr, length) {
    this.array_buffer_ = arr || new ArrayBuffer(1024);
    this.length_ = length || 0;
    this.array_ = new Uint8Array(this.array_buffer_);
    this.read_pos = 0
  };
  PROTO.ArrayBufferStream.prototype = new PROTO.Stream;
  PROTO.ArrayBufferStream.prototype._realloc = function(min_length) {
    var old_array = this.array_;
    var length = this.length_;
    var new_buf_length = old_array.length + min_length;
    this.array_buffer_ = new ArrayBuffer(new_buf_length);
    var new_array = new Uint8Array(this.array_buffer_);
    for(var i = 0;i < length;i++) {
      new_array[i] = old_array[i]
    }
    this.array_ = new_array
  };
  PROTO.ArrayBufferStream.prototype.read = function(amt) {
    if(this.read_pos_ + amt > this.length_) {
      return null
    }
    var ret = this.array_.subarray(this.read_pos_, this.read_pos_ + amt);
    this.read_pos_ += amt;
    var ret_as_array = new Array(amt);
    for(var i = 0;i < amt;i++) {
      ret_as_array[i] = ret[i]
    }
    return ret_as_array
  };
  PROTO.ArrayBufferStream.prototype.write = function(arr) {
    var si = 0;
    var di = this.length_;
    if(this.length_ + arr.length > this.array_.length) {
      this._realloc(this.length_ + arr.length)
    }
    this.length_ += arr.length;
    var dest = this.array_;
    var len = arr.length;
    for(;si < len;si++, di++) {
      dest[di] = arr[si]
    }
  };
  PROTO.ArrayBufferStream.prototype.readByte = function() {
    return this.array_[this.read_pos_++]
  };
  PROTO.ArrayBufferStream.prototype.writeByte = function(byt) {
    if(this.length_ == this.array_.length) {
      this._realloc(this.length_ + 1)
    }
    this.array_[this.length_++] = byt
  };
  PROTO.ArrayBufferStream.prototype.valid = function() {
    return this.read_pos_ < this.length_
  };
  PROTO.ArrayBufferStream.prototype.getArrayBuffer = function() {
    return this.array_buffer_
  };
  PROTO.ArrayBufferStream.prototype.length = function() {
    return this.length_
  };
  (function() {
    var useBlobCons = false;
    var BlobBuilder = null;
    var slice = "slice";
    var testBlob;
    try {
      testBlob = new self.Blob([new DataView(new ArrayBuffer(1))]);
      useBlobCons = true
    }catch(e) {
      BlobBuilder = self.BlobBuilder || self["WebKitBlobBuilder"] || self["MozBlobBuilder"] || self["MSBlobBuilder"];
      try {
        testBlob = (new BlobBuilder).getBlob()
      }catch(f) {
      }
    }
    if(testBlob && (useBlobCons || BlobBuilder)) {
      if(testBlob.webkitSlice && !testBlob.slice) {
        slice = "webkitSlice"
      }else {
        if(testBlob.mozSlice && !testBlob.slice) {
          slice = "mozSlice"
        }
      }
      PROTO.ArrayBufferStream.prototype.getBlob = function() {
        var fullBlob;
        if(useBlobCons) {
          fullBlob = new self.Blob([new DataView(this.array_buffer_)])
        }else {
          var blobBuilder = new BlobBuilder;
          blobBuilder.append(this.array_buffer_);
          fullBlob = blobBuilder.getBlob()
        }
        return fullBlob[slice](0, this.length_)
      }
    }
  })();
  PROTO.ArrayBufferStream.prototype.getUint8Array = function() {
    return new Uint8Array(this.array_buffer_, 0, this.length_)
  }
}
PROTO.array = function() {
  function ProtoArray(datatype, input) {
    this.datatype_ = datatype.type();
    this.length = 0;
    if(PROTO.IsArray(input)) {
      for(var i = 0;i < input.length;++i) {
        this.push(input[i])
      }
    }
  }
  ProtoArray.IsInitialized = function IsInitialized(val) {
    return val.length > 0
  };
  ProtoArray.prototype = {};
  ProtoArray.prototype.push = function(var_args) {
    if(arguments.length === 0) {
      if(this.datatype_.composite) {
        var newval = new this.datatype_;
        this[this.length++] = newval;
        return newval
      }else {
        throw"Called add(undefined) for a non-composite";
      }
    }else {
      for(var i = 0;i < arguments.length;i++) {
        var newval = this.datatype_.Convert(arguments[i]);
        if(this.datatype_.FromProto) {
          newval = this.datatype_.FromProto(newval)
        }
        this[this.length++] = newval
      }
    }
    return arguments[0]
  };
  ProtoArray.prototype.set = function(index, newval) {
    newval = this.datatype_.Convert(newval);
    if(this.datatype_.FromProto) {
      newval = this.datatype_.FromProto(newval)
    }
    if(index < this.length && index >= 0) {
      this[index] = newval
    }else {
      if(index == this.length) {
        this[this.length++] = newval
      }else {
        throw"Called ProtoArray.set with index " + index + " higher than length " + this.length;
      }
    }
    return newval
  };
  ProtoArray.prototype.clear = function(index, newval) {
    this.length = 0
  };
  return ProtoArray
}();
PROTO.string = {Convert:function(str) {
  return"" + str
}, wiretype:PROTO.wiretypes.lengthdelim, SerializeToStream:function(str, stream) {
  var arr = PROTO.encodeUTF8(str);
  return PROTO.bytes.SerializeToStream(arr, stream)
}, ParseFromStream:function(stream) {
  var arr = PROTO.bytes.ParseFromStream(stream);
  return PROTO.decodeUTF8(arr)
}, toString:function(str) {
  return str
}};
PROTO.bytes = {Convert:function(arr) {
  if(PROTO.IsArray(arr)) {
    return arr
  }else {
    if(arr instanceof PROTO.ByteArrayStream) {
      return arr.getArray()
    }else {
      if(arr.SerializeToStream) {
        var tempStream = new PROTO.ByteArrayStream;
        arr.SerializeToStream(tempStream);
        return tempStream.getArray()
      }else {
        throw"Not a Byte Array: " + arr;
      }
    }
  }
}, wiretype:PROTO.wiretypes.lengthdelim, SerializeToStream:function(arr, stream) {
  PROTO.int32.SerializeToStream(arr.length, stream);
  stream.write(arr)
}, ParseFromStream:function(stream) {
  var len = PROTO.int32.ParseFromStream(stream);
  return stream.read(len)
}, toString:function(bytes) {
  return"[" + bytes + "]"
}};
(function() {
  function makeclass(converter, serializer, parser) {
    var myclass = {Convert:converter, wiretype:0, SerializeToStream:serializer, ParseFromStream:parser, toString:function(val) {
      return"" + val
    }};
    return myclass
  }
  function convertU32(n) {
    if(n == NaN) {
      throw"not a number: " + n;
    }
    n = Math.round(n);
    if(n < 0) {
      throw"uint32/fixed32 does not allow negative: " + n;
    }
    if(n > 4294967295) {
      throw"uint32/fixed32 out of bounds: " + n;
    }
    return n
  }
  function convertS32(n) {
    if(n == NaN) {
      throw"not a number: " + n;
    }
    n = Math.round(n);
    if(n > 2147483647 || n < -2147483648) {
      throw"sfixed32/[s]int32 out of bounds: " + n;
    }
    return n
  }
  function serializeFixed32(n, stream) {
    if(n < 0) {
      n += 4294967296
    }
    var arr = new Array(4);
    for(var i = 0;i < 4;i++) {
      arr[i] = n % 256;
      n >>>= 8
    }
    stream.write(arr)
  }
  function parseFixed32(stream) {
    var n = 0;
    var offset = 1;
    for(var i = 0;i < 4;i++) {
      n += offset * stream.readByte();
      offset *= 256
    }
    return n
  }
  function parseSFixed32(stream) {
    var n = parseFixed32(stream);
    if(n > 2147483647) {
      n -= 4294967296
    }
    return n
  }
  function serializeInt32(n, stream) {
    if(n < 0) {
      serializeInt64(PROTO.I64.fromNumber(n), stream);
      return
    }
    for(var i = 0;i == 0 || n && i < 5;i++) {
      var byt = n % 128;
      n >>>= 7;
      if(n) {
        byt += 128
      }
      stream.writeByte(byt)
    }
  }
  function serializeSInt32(n, stream) {
    if(n < 0) {
      n = -n * 2 - 1
    }else {
      n = n * 2
    }
    serializeInt32(n, stream)
  }
  function parseUInt32(stream) {
    var n = 0;
    var endloop = false;
    var offset = 1;
    for(var i = 0;!endloop && i < 5;i++) {
      var byt = stream.readByte();
      if(byt === undefined) {
        PROTO.warn("read undefined byte from stream: n is " + n);
        break
      }
      if(byt < 128) {
        endloop = true
      }
      n += offset * (byt & (i == 4 ? 15 : 127));
      offset *= 128
    }
    return n
  }
  var temp64num = new PROTO.I64(0, 0, 1);
  function parseInt32(stream) {
    var n = PROTO.I64.parseLEVar128(stream, temp64num);
    var lsw = n.lsw;
    if(lsw > 2147483647) {
      lsw -= 2147483647;
      lsw -= 2147483647;
      lsw -= 2
    }
    return lsw
  }
  function parseSInt32(stream) {
    var n = parseUInt32(stream);
    if(n & 1) {
      return(n + 1) / -2
    }
    return n / 2
  }
  PROTO.sfixed32 = makeclass(convertS32, serializeFixed32, parseSFixed32);
  PROTO.fixed32 = makeclass(convertU32, serializeFixed32, parseFixed32);
  PROTO.sfixed32.wiretype = PROTO.wiretypes.fixed32;
  PROTO.fixed32.wiretype = PROTO.wiretypes.fixed32;
  PROTO.int32 = makeclass(convertS32, serializeInt32, parseInt32);
  PROTO.sint32 = makeclass(convertS32, serializeSInt32, parseSInt32);
  PROTO.uint32 = makeclass(convertU32, serializeInt32, parseUInt32);
  function convert64(n) {
    if(n instanceof PROTO.I64) {
      return n
    }
    throw"64-bit integers must be PROTO.I64 objects!";
  }
  function serializeInt64(n, stream) {
    stream.write(n.convertToUnsigned().serializeToLEVar128())
  }
  function serializeSInt64(n, stream) {
    stream.write(n.convertFromUnsigned().convertToZigzag().serializeToLEVar128())
  }
  function serializeUInt64(n, stream) {
    stream.write(n.convertToUnsigned().serializeToLEVar128())
  }
  function serializeSFixed64(n, stream) {
    stream.write(n.convertToUnsigned().serializeToLEBase256())
  }
  function serializeFixed64(n, stream) {
    stream.write(n.serializeToLEBase256())
  }
  function parseSFixed64(stream) {
    return PROTO.I64.parseLEBase256(stream, temp64num).convertFromUnsigned()
  }
  function parseFixed64(stream) {
    return PROTO.I64.parseLEBase256(stream)
  }
  function parseSInt64(stream) {
    return PROTO.I64.parseLEVar128(stream, temp64num).convertFromZigzag()
  }
  function parseInt64(stream) {
    return PROTO.I64.parseLEVar128(stream, temp64num).convertFromUnsigned()
  }
  function parseUInt64(stream) {
    return PROTO.I64.parseLEVar128(stream)
  }
  PROTO.sfixed64 = makeclass(convert64, serializeSFixed64, parseSFixed64);
  PROTO.fixed64 = makeclass(convert64, serializeFixed64, parseFixed64);
  PROTO.sfixed64.wiretype = PROTO.wiretypes.fixed64;
  PROTO.fixed64.wiretype = PROTO.wiretypes.fixed64;
  PROTO.int64 = makeclass(convert64, serializeInt64, parseInt64);
  PROTO.sint64 = makeclass(convert64, serializeSInt64, parseSInt64);
  PROTO.uint64 = makeclass(convert64, serializeUInt64, parseUInt64);
  PROTO.bool = makeclass(function(bool) {
    return bool ? true : false
  }, serializeInt32, parseUInt32);
  function convertFloatingPoint(f) {
    var n = parseFloat(f);
    if(n == NaN) {
      throw"not a number: " + f;
    }
    return n
  }
  function writeFloat(flt, stream) {
    stream.write(PROTO.binaryParser.fromFloat(flt))
  }
  function readFloat(stream) {
    var arr = stream.read(4);
    return PROTO.binaryParser.toFloat(arr)
  }
  function writeDouble(flt, stream) {
    stream.write(PROTO.binaryParser.fromDouble(flt))
  }
  function readDouble(stream) {
    var arr = stream.read(8);
    return PROTO.binaryParser.toDouble(arr)
  }
  PROTO.Float = makeclass(convertFloatingPoint, writeFloat, readFloat);
  PROTO.Double = makeclass(convertFloatingPoint, writeDouble, readDouble);
  PROTO.Float.wiretype = PROTO.wiretypes.fixed32;
  PROTO.Double.wiretype = PROTO.wiretypes.fixed64
})();
PROTO.mergeProperties = function(properties, stream, values) {
  var fidToProp = {};
  for(var key in properties) {
    fidToProp[properties[key].id] = key
  }
  var nextfid, nexttype, nextprop, nextproptype, nextval, nextpropname;
  var incompleteTuples = {};
  while(stream.valid()) {
    nextfid = PROTO.int32.ParseFromStream(stream);
    nexttype = nextfid % 8;
    nextfid >>>= 3;
    nextpropname = fidToProp[nextfid];
    nextprop = nextpropname && properties[nextpropname];
    nextproptype = nextprop && nextprop.type();
    nextval = undefined;
    switch(nexttype) {
      case PROTO.wiretypes.varint:
        if(nextprop && nextproptype.wiretype == PROTO.wiretypes.varint) {
          nextval = nextproptype.ParseFromStream(stream)
        }else {
          PROTO.int64.ParseFromStream(stream)
        }
        break;
      case PROTO.wiretypes.fixed64:
        if(nextprop && nextproptype.wiretype == PROTO.wiretypes.fixed64) {
          nextval = nextproptype.ParseFromStream(stream)
        }else {
          PROTO.fixed64.ParseFromStream(stream)
        }
        break;
      case PROTO.wiretypes.lengthdelim:
        if(nextprop) {
          if(nextproptype.wiretype != PROTO.wiretypes.lengthdelim) {
            var tup;
            if(nextproptype.cardinality > 1) {
              if(incompleteTuples[nextpropname] === undefined) {
                incompleteTuples[nextpropname] = new Array
              }
              tup = incompleteTuples[nextpropname]
            }
            var bytearr = PROTO.bytes.ParseFromStream(stream);
            var bas = PROTO.CreateArrayStream(bytearr);
            for(var j = 0;j < bytearr.length && bas.valid();j++) {
              var toappend = nextproptype.ParseFromStream(bas);
              if(nextproptype.cardinality > 1) {
                tup.push(toappend);
                if(tup.length == nextproptype.cardinality) {
                  if(nextprop.multiplicity == PROTO.repeated) {
                    values[nextpropname].push(tup)
                  }else {
                    values[nextpropname] = nextproptype.Convert(tup)
                  }
                  incompleteTuples[nextpropname] = new Array;
                  tup = incompleteTuples[nextpropname]
                }
              }else {
                values[nextpropname].push(toappend)
              }
            }
          }else {
            nextval = nextproptype.ParseFromStream(stream);
            if(nextval == null) {
              return false
            }
          }
        }else {
          PROTO.bytes.ParseFromStream(stream)
        }
        break;
      case PROTO.wiretypes.fixed32:
        if(nextprop && nextproptype.wiretype == PROTO.wiretypes.fixed32) {
          nextval = nextproptype.ParseFromStream(stream)
        }else {
          PROTO.fixed32.ParseFromStream(stream)
        }
        break;
      default:
        PROTO.warn("ERROR: Unknown type " + nexttype + " for " + nextfid);
        break
    }
    if(nextval !== undefined) {
      if(values[nextpropname] === undefined && nextproptype.cardinality > 1) {
        values[nextpropname] = {}
      }
      if(nextproptype.cardinality > 1) {
        var tup;
        if(incompleteTuples[nextpropname] === undefined) {
          incompleteTuples[nextpropname] = new Array;
          tup = incompleteTuples[nextpropname]
        }
        tup.push(nextval);
        if(tup.length == nextproptype.cardinality) {
          if(nextprop.multiplicity == PROTO.repeated) {
            values[nextpropname].push(tup)
          }else {
            tup = nextproptype.Convert(tup);
            if(!PROTO.DefineProperty && nextproptype.FromProto) {
              tup = nextproptype.FromProto(tup)
            }
            values[nextpropname] = tup
          }
          incompleteTuples[nextpropname] = undefined
        }
      }else {
        if(nextprop.multiplicity === PROTO.repeated) {
          values[nextpropname].push(nextval)
        }else {
          nextval = nextproptype.Convert(nextval);
          if(!PROTO.DefineProperty && nextproptype.FromProto) {
            nextval = nextproptype.FromProto(nextval)
          }
          values[nextpropname] = nextval
        }
      }
    }
  }
  return true
};
PROTO.serializeTupleProperty = function(property, stream, value) {
  var fid = property.id;
  var wiretype = property.type().wiretype;
  var wireId = fid * 8 + wiretype;
  if(wiretype != PROTO.wiretypes.lengthdelim && property.options.packed) {
    var bytearr = new Array;
    var bas = new PROTO.ByteArrayStream(bytearr);
    if(property.multiplicity == PROTO.repeated) {
      for(var i = 0;i < value.length;i++) {
        var val = property.type().Convert(value[i]);
        for(var j = 0;j < property.type().cardinality;++j) {
          property.type().SerializeToStream(val[j], bas)
        }
      }
    }else {
      var val = property.type().Convert(value);
      for(var j = 0;j < property.type().cardinality;++j) {
        property.type().SerializeToStream(val[j], bas)
      }
    }
    wireId = fid * 8 + PROTO.wiretypes.lengthdelim;
    PROTO.int32.SerializeToStream(wireId, stream);
    PROTO.bytes.SerializeToStream(bytearr, stream)
  }else {
    if(property.multiplicity == PROTO.repeated) {
      for(var i = 0;i < value.length;i++) {
        var val = property.type().Convert(value[i]);
        for(var j = 0;j < property.type().cardinality;++j) {
          PROTO.int32.SerializeToStream(wireId, stream);
          property.type().SerializeToStream(val[j], stream)
        }
      }
    }else {
      var val = property.type().Convert(value);
      for(var j = 0;j < property.type().cardinality;++j) {
        PROTO.int32.SerializeToStream(wireId, stream);
        property.type().SerializeToStream(val[j], stream)
      }
    }
  }
};
PROTO.serializeProperty = function(property, stream, value) {
  var fid = property.id;
  if(!property.type()) {
    return
  }
  if(property.type().cardinality > 1) {
    PROTO.serializeTupleProperty(property, stream, value);
    return
  }
  var wiretype = property.type().wiretype;
  var wireId = fid * 8 + wiretype;
  if(property.multiplicity == PROTO.repeated) {
    if(wiretype != PROTO.wiretypes.lengthdelim && property.options.packed) {
      var bytearr = new Array;
      var bas = new PROTO.ByteArrayStream(bytearr);
      for(var i = 0;i < value.length;i++) {
        var val = property.type().Convert(value[i]);
        property.type().SerializeToStream(val, bas)
      }
      wireId = fid * 8 + PROTO.wiretypes.lengthdelim;
      PROTO.int32.SerializeToStream(wireId, stream);
      PROTO.bytes.SerializeToStream(bytearr, stream)
    }else {
      for(var i = 0;i < value.length;i++) {
        PROTO.int32.SerializeToStream(wireId, stream);
        var val = property.type().Convert(value[i]);
        property.type().SerializeToStream(val, stream)
      }
    }
  }else {
    PROTO.int32.SerializeToStream(wireId, stream);
    var val = property.type().Convert(value);
    property.type().SerializeToStream(val, stream)
  }
};
PROTO.Message = function(name, properties) {
  var Composite = function() {
    this.properties_ = Composite.properties_;
    if(!PROTO.DefineProperty) {
      this.values_ = this
    }else {
      this.values_ = {}
    }
    this.Clear();
    this.message_type_ = name
  };
  Composite.properties_ = {};
  for(var key in properties) {
    if(properties[key].isType) {
      Composite[key] = properties[key]
    }else {
      Composite.properties_[key] = properties[key]
    }
  }
  Composite.isType = true;
  Composite.composite = true;
  Composite.wiretype = PROTO.wiretypes.lengthdelim;
  Composite.IsInitialized = function(value) {
    return value && value.IsInitialized()
  };
  Composite.Convert = function Convert(val) {
    if(!(val instanceof Composite)) {
      var errmsg = "Unknown Error: Value not instanceof Composite: " + typeof val + " : " + val + " instanceof " + (val instanceof Composite);
      PROTO.warn(errmsg)
    }
    return val
  };
  Composite.SerializeToStream = function(value, stream) {
    var bytearr = new Array;
    var bas = new PROTO.ByteArrayStream(bytearr);
    value.SerializeToStream(bas);
    return PROTO.bytes.SerializeToStream(bytearr, stream)
  };
  Composite.ParseFromStream = function(stream) {
    var bytearr = PROTO.bytes.ParseFromStream(stream);
    var bas = PROTO.CreateArrayStream(bytearr);
    var ret = new Composite;
    ret.ParseFromStream(bas);
    return ret
  };
  Composite.prototype = {computeHasFields:function computeHasFields() {
    var has_fields = {};
    for(var key in this.properties_) {
      if(this.HasField(key)) {
        has_fields[key] = true
      }
    }
    return has_fields
  }, Clear:function Clear() {
    for(var prop in this.properties_) {
      this.ClearField(prop)
    }
  }, IsInitialized:function IsInitialized() {
    var checked_any = false;
    for(var key in this.properties_) {
      checked_any = true;
      if(this.values_[key] !== undefined) {
        var descriptor = this.properties_[key];
        if(!descriptor.type()) {
          continue
        }
        if(descriptor.multiplicity == PROTO.repeated) {
          if(PROTO.array.IsInitialized(this.values_[key])) {
            return true
          }
        }else {
          if(!descriptor.type().IsInitialized || descriptor.type().IsInitialized(this.values_[key])) {
            return true
          }
        }
      }
    }
    if(!checked_any) {
      return true
    }
    return false
  }, ParseFromStream:function Parse(stream) {
    this.Clear();
    return this.MergeFromStream(stream)
  }, MergeFromStream:function Merge(stream) {
    return PROTO.mergeProperties(this.properties_, stream, this.values_)
  }, SerializeToStream:function Serialize(outstream) {
    var hasfields = this.computeHasFields();
    for(var key in hasfields) {
      var val = this.values_[key];
      PROTO.serializeProperty(this.properties_[key], outstream, val)
    }
  }, SerializeToArray:function(opt_array) {
    var stream = new PROTO.ByteArrayStream(opt_array);
    this.SerializeToStream(stream);
    return stream.getArray()
  }, MergeFromArray:function(array) {
    return this.MergeFromStream(PROTO.CreateArrayStream(array))
  }, ParseFromArray:function(array) {
    this.Clear();
    return this.MergeFromArray(array)
  }, ClearField:function ClearField(propname) {
    var descriptor = this.properties_[propname];
    if(descriptor.multiplicity == PROTO.repeated) {
      this.values_[propname] = new PROTO.array(descriptor)
    }else {
      var type = descriptor.type();
      if(type && type.composite) {
        delete this.values_[propname]
      }else {
        delete this.values_[propname]
      }
    }
  }, ListFields:function ListFields() {
    var ret = [];
    var hasfields = this.computeHasFields();
    for(var f in hasfields) {
      ret.push(f)
    }
    return ret
  }, GetField:function GetField(propname) {
    var ret = this.values_[propname];
    var type = this.properties_[propname].type();
    if(ret && type.FromProto) {
      return type.FromProto(ret)
    }
    return ret
  }, SetField:function SetField(propname, value) {
    if(value === undefined || value === null) {
      this.ClearField(propname)
    }else {
      var prop = this.properties_[propname];
      if(prop.multiplicity == PROTO.repeated) {
        this.ClearField(propname);
        for(var i = 0;i < value.length;i++) {
          this.values_[propname].push(prop.type().Convert(value[i]))
        }
      }else {
        this.values_[propname] = prop.type().Convert(value)
      }
    }
  }, HasField:function HasField(propname) {
    if(this.values_[propname] !== undefined) {
      var descriptor = this.properties_[propname];
      if(!descriptor.type()) {
        return false
      }
      if(descriptor.multiplicity == PROTO.repeated) {
        return PROTO.array.IsInitialized(this.values_[propname])
      }else {
        if(!descriptor.type().IsInitialized || descriptor.type().IsInitialized(this.values_[propname])) {
          return true
        }
      }
    }
    return false
  }, HasProperty:function HasProperty(propname) {
    return this.properties_[propname] !== undefined
  }, GetProperty:function GetProperty(propname) {
    return this.properties_[propname]
  }, formatValue:function(level, spaces, propname, val) {
    var str = spaces + propname;
    var type = this.properties_[propname].type();
    if(type.composite) {
      str += " " + val.toString(level + 1)
    }else {
      if(typeof val == "string") {
        var myval = val;
        myval = myval.replace('"', '\\"').replace("\n", "\\n").replace("\r", "\\r");
        str += ': "' + myval + '"\n'
      }else {
        if(type.FromProto) {
          val = type.FromProto(val)
        }
        if(type.toString) {
          var myval = type.toString(val);
          str += ": " + myval + "\n"
        }else {
          str += ": " + val + "\n"
        }
      }
    }
    return str
  }, toString:function toString(level) {
    var spaces = "";
    var str = "";
    if(level) {
      str = "{\n";
      for(var i = 0;i < level * 2;i++) {
        spaces += " "
      }
    }else {
      level = 0
    }
    for(var propname in this.properties_) {
      if(!this.properties_[propname].type()) {
        continue
      }
      if(!this.HasField(propname)) {
        continue
      }
      if(this.properties_[propname].multiplicity == PROTO.repeated) {
        var arr = this.values_[propname];
        for(var i = 0;i < arr.length;i++) {
          str += this.formatValue(level, spaces, propname, arr[i])
        }
      }else {
        str += this.formatValue(level, spaces, propname, this.values_[propname])
      }
    }
    if(level) {
      str += "}\n"
    }
    return str
  }};
  if(PROTO.DefineProperty !== undefined) {
    for(var prop in Composite.properties_) {
      (function(prop) {
        PROTO.DefineProperty(Composite.prototype, prop, function GetProp() {
          return this.GetField(prop)
        }, function SetProp(newval) {
          this.SetField(prop, newval)
        })
      })(prop)
    }
  }
  PROTO.Message._registeredMessages[name] = Composite;
  return Composite
};
PROTO.Message.Create = function(name) {
  if(PROTO.Message._registeredMessages[name]) {
    return new PROTO.Message._registeredMessages[name]
  }else {
    return undefined
  }
};
PROTO.Message._registeredMessages = {};
PROTO.Enum = function(name, values, bits) {
  if(!bits) {
    bits = 32
  }
  var reverseValues = {};
  var enumobj = {};
  enumobj.isType = true;
  for(var key in values) {
    reverseValues[values[key]] = key;
    enumobj[key] = values[key];
    enumobj[values[key]] = key
  }
  enumobj.values = values;
  enumobj.reverseValues = reverseValues;
  enumobj.Convert = function Convert(s) {
    if(typeof s == "number") {
      return s
    }
    if(values[s] !== undefined) {
      return values[s]
    }
    throw"Not a valid " + name + " enumeration value: " + s;
  };
  enumobj.toString = function toString(num) {
    if(reverseValues[num]) {
      return reverseValues[num]
    }
    return"" + num
  };
  enumobj.ParseFromStream = function(a, b) {
    var e = PROTO.int32.ParseFromStream(a, b);
    return e
  };
  enumobj.SerializeToStream = function(a, b) {
    return PROTO.int32.SerializeToStream(a, b)
  };
  enumobj.wiretype = PROTO.wiretypes.varint;
  return enumobj
};
PROTO.Flags = function(bits, name, values) {
  return PROTO.Enum(name, values, bits)
};
PROTO.Extend = function(parent, newproperties) {
  for(var key in newproperties) {
    parent.properties_[key] = newproperties[key]
  }
  return parent
};
if(typeof self.console == "undefined") {
  self.console = {}
}
if(typeof self.console.log == "undefined") {
  self.console.log = function(message) {
    if(document && document.body) {
      document.body.appendChild(document.createTextNode(message + "..."))
    }
  }
}
;var PBJ = {};
function vectorGenerator(num, datatype, magsquared) {
  if(!magsquared) {
    magsquared = false
  }
  var ret = {Convert:function Convert(vec) {
    if(vec && vec.length == num) {
      var retv = [];
      for(var i = 0;i < num;++i) {
        retv.push(vec[i])
      }
      return retv
    }else {
      if(vec && magsquared && vec.length == num + 1) {
        var retv = [];
        for(var i = 0;i < num;++i) {
          retv.push(vec[i])
        }
        if(vec[num] < 0) {
          retv[0] += 3
        }
        return retv
      }else {
        if(typeof self.console != "undefined" && self.console.error) {
          self.console.error("Vector_in_invalid_format: " + vec + "; expect " + num + " elements.")
        }
        return new Array(num)
      }
    }
  }, toString:function toString(vec) {
    var ret = "<" + vec[0];
    for(var i = 1;i < num + (magsquared ? 1 : 0);i++) {
      ret += ", " + vec[i]
    }
    ret += ">";
    return ret
  }, wiretype:datatype.wiretype, SerializeToStream:datatype.SerializeToStream, ParseFromStream:datatype.ParseFromStream, cardinality:num};
  if(magsquared) {
    if(num == 2) {
      ret.FromProto = function(vec) {
        var x = vec[0], y = vec[1];
        var neg = x > 1.5 || y > 1.5 ? -1 : 1;
        if(x > 1.5) {
          x -= 3
        }
        if(y > 1.5) {
          y -= 3
        }
        return[x, y, neg * Math.sqrt(1 - x * x - y * y)]
      }
    }else {
      if(num == 3) {
        ret.FromProto = function(vec) {
          var x = vec[0], y = vec[1], z = vec[2];
          var neg = x > 1.5 || y > 1.5 || z > 1.5 ? -1 : 1;
          if(x > 1.5) {
            x -= 3
          }
          if(y > 1.5) {
            y -= 3
          }
          if(z > 1.5) {
            z -= 3
          }
          return[x, y, z, neg * Math.sqrt(1 - x * x - y * y - z * z)]
        }
      }
    }
  }
  return ret
}
PBJ.uint8 = PROTO.uint32;
PBJ.uint16 = PROTO.uint32;
PBJ.int8 = PROTO.int32;
PBJ.int16 = PROTO.int32;
PBJ.sint8 = PROTO.sint32;
PBJ.sint16 = PROTO.sint32;
PBJ.vector2d = vectorGenerator(2, PROTO.Double);
PBJ.vector2f = vectorGenerator(2, PROTO.Float);
PBJ.vector3d = vectorGenerator(3, PROTO.Double);
PBJ.vector3f = vectorGenerator(3, PROTO.Float);
PBJ.vector4d = vectorGenerator(4, PROTO.Double);
PBJ.vector4f = vectorGenerator(4, PROTO.Float);
PBJ.normal = vectorGenerator(2, PROTO.Float, true);
PBJ.unitquaternion = vectorGenerator(3, PROTO.Float, true);
PBJ.quaternion = vectorGenerator(4, PROTO.Float);
PBJ.duration = PROTO.cloneType(PROTO.sfixed64);
PBJ.duration.Convert = function(ms) {
  if(ms instanceof PROTO.I64) {
    return ms
  }else {
    return PROTO.I64.fromNumber(ms * 1E3)
  }
};
PBJ.duration.FromProto = function(ms) {
  return ms.toNumber() / 1E3
};
PBJ.time = PROTO.cloneType(PROTO.fixed64);
PBJ.time.Convert = function(date) {
  if(date instanceof Date) {
    date = date.getTime() * 1E3
  }else {
    if(date instanceof PROTO.I64) {
      return date
    }
  }
  return PROTO.I64.fromNumber(date)
};
PBJ.time.toString = function(arg) {
  var ms1970, us;
  if(arg instanceof PROTO.I64) {
    var us1970 = arg.toNumber();
    ms1970 = Math.floor(us1970 / 1E3);
    var sec1970 = Math.floor(us1970 / 1E6);
    us = arg.sub(PROTO.I64.fromNumber(sec1970 * 1E6)).toNumber()
  }else {
    ms1970 = arg;
    var us1970 = arg * 1E3;
    var sec1970 = Math.floor(ms1970 / 1E3);
    us = us1970 - sec1970 * 1E6
  }
  if(us < 0) {
    us += 1E6
  }
  return"[" + (new Date(ms1970)).toUTCString() + "]." + (1E6 + us).toString().substr(1)
};
PBJ.time.FromProto = function(i64) {
  return i64.toNumber() / 1E3
};
(function() {
  var zero = "0".charCodeAt(0);
  var a = "a".charCodeAt(0);
  var A = "A".charCodeAt(0);
  var dash = "-".charCodeAt(0);
  function hexCharToNumber(c) {
    if(c >= zero && c < zero + 10) {
      return c - zero
    }else {
      if(c >= a && c < a + 6) {
        return 10 + (c - a)
      }else {
        if(c >= A && c < A + 6) {
          return 10 + (c - A)
        }
      }
    }
    return 0
  }
  function hexToArray(str, arrlen) {
    var ret = new Array(arrlen);
    var strlen = str.length;
    for(var i = 0, j = 0;i < strlen || j < arrlen;i += 2, j++) {
      var charcode2, charcode = str.charCodeAt(i);
      if(charcode == dash) {
        i++;
        charcode = str.charCodeAt(i)
      }
      charcode2 = str.charCodeAt(i + 1);
      ret[j] = hexCharToNumber(charcode) * 16 + hexCharToNumber(charcode2)
    }
    return ret
  }
  PBJ.sha256 = PROTO.cloneType(PROTO.bytes);
  PBJ.sha256.Convert = function(arg) {
    if(PROTO.IsArray(arg)) {
      return PROTO.bytes.Convert(arg)
    }
    return hexToArray(arg, 32)
  };
  PBJ.sha256.toString = function(arg) {
    if(typeof arg == "string") {
      return arg
    }
    var str = "";
    for(var i = 0;i < arg.length && i < 32;i++) {
      str += (256 + arg[i]).toString(16).substr(1)
    }
    while(str.length < 64) {
      str += "0"
    }
    return str
  };
  PBJ.sha256.FromProto = PBJ.sha256.toString;
  PBJ.uuid = PROTO.cloneType(PROTO.bytes);
  PBJ.uuid.Convert = function(arg) {
    if(PROTO.IsArray(arg)) {
      return PROTO.bytes.Convert(arg)
    }
    return hexToArray(arg, 16)
  };
  PBJ.uuid.toString = function(arg) {
    if(typeof arg == "string") {
      return arg
    }
    var str = "";
    for(var i = 0;i < 16;i++) {
      if(i == 4 || i == 6 || i == 8 || i == 10) {
        str += "-"
      }
      if(i >= arg.length) {
        str += "00"
      }else {
        str += (256 + arg[i]).toString(16).substr(1)
      }
    }
    return str
  };
  PBJ.uuid.FromProto = PBJ.uuid.toString
})();
PBJ.angle = PROTO.Float;
PBJ.boundingsphere3f = vectorGenerator(4, PROTO.Float);
PBJ.boundingsphere3d = vectorGenerator(4, PROTO.Double);
PBJ.boundingbox3f3f = vectorGenerator(6, PROTO.Float);
PBJ.boundingbox3d3f = vectorGenerator(6, PROTO.Double);
if(typeof WebGLUnsignedByteArray === "undefined" && typeof Uint8Array !== "undefined") {
  window["WebGLUnsignedByteArray"] = Uint8Array
}
if(typeof WebGLByteArray === "undefined" && typeof Int8Array !== "undefined") {
  window["WebGLByteArray"] = Int8Array
}
if(typeof WebGLUnsignedShortArray === "undefined" && typeof Uint16Array !== "undefined") {
  window["WebGLUnsignedShortArray"] = Uint16Array
}
if(typeof WebGLShortArray === "undefined" && typeof Int16Array !== "undefined") {
  window["WebGLShortArray"] = Int16Array
}
if(typeof WebGLUnsignedIntArray === "undefined" && typeof Uint32Array !== "undefined") {
  window["WebGLUnsignedIntArray"] = Uint32Array
}
if(typeof WebGLIntArray === "undefined" && typeof Int32Array !== "undefined") {
  window["WebGLIntArray"] = Int32Array
}
if(typeof WebGLFloatArray === "undefined" && typeof Float32Array !== "undefined") {
  window["WebGLFloatArray"] = Float32Array
}
if(!"WebGLDoubleArray" in window && typeof Float64Array !== "undefined") {
  window["WebGLDoubleArray"] = Float64Array
}
;var GLGEGraphics = function(callbackFunction, parentElement) {
  this.mCurTime = new Date;
  this.callback = callbackFunction;
  this.doubleBuffer = 3;
  this.mAnimatingObjects = {};
  this.windowVisible = true;
  this.canvasVisible = true;
  this.mDoCaptureCanvas = 0;
  var thus = this;
  var canvas, gl;
  canvas = document.createElement("canvas");
  if(!GLGEGraphics.GLOBAL_KEYBOARD_GRAB) {
    canvas.setAttribute("tabindex", "0")
  }
  if(canvas) {
    try {
      gl = canvas.getContext("experimental-webgl", {preserveDrawingBuffer:true})
    }catch(e) {
      if(typeof globalNoWebGLError != "undefined") {
        globalNoWebGLError()
      }
    }
  }
  if(!canvas || !gl) {
    if(typeof globalNoWebGLError != "undefined") {
      globalNoWebGLError()
    }
  }
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  parentElement.appendChild(canvas);
  if(!canvas) {
    this.webGlCanvasError(parentElement, "HTMLCanvas")
  }else {
    canvas.focus();
    var resizeHandler = function() {
      var width = Math.max(1, canvas.clientWidth);
      var height = Math.max(1, canvas.clientHeight);
      canvas.width = width;
      canvas.height = height;
      GLGEGraphics.canvasAspect = width / height;
      if(thus.mCamera) {
        thus.mCamera.setAspect(GLGEGraphics.canvasAspect)
      }
      canvas.sizeInitialized_ = true;
      thus.displayInfo = {width:canvas.width, height:canvas.height};
      thus.newEvent();
      for(var spaceRoot in thus.mSpaceRoots) {
        var msg = {};
        msg.spaceid = spaceRoot;
        thus.reloadBackground(thus.mSpaceRoots[spaceRoot])
      }
    };
    this.renderer = new GLGE.Renderer(canvas);
    this.renderer.cullFaces = true;
    window.addEventListener("resize", resizeHandler, false);
    setTimeout(resizeHandler, 0)
  }
  this.mClientElement = canvas;
  this.mCurTime = new Date;
  this.mObjectUpdates = {};
  this.mSpaceRoots = {};
  this.mRenderTargets = {};
  this.mUnsetParents = {};
  this.mObjects = {};
  this._keyDownMap = {};
  this._enabledEvents = {};
  this._lastMouseDown = null;
  this._mouseMoveSinceLastRender = false;
  function render() {
    thus.render()
  }
  function initialTextureLoadHack() {
    var anyAnim = false;
    for(var animObject in thus.mAnimatingObjects) {
      anyAnim = true;
      break
    }
    if(!anyAnim) {
      this.newEvent()
    }
  }
  setInterval(render, 16);
  if(GLGEGraphics.GLOBAL_KEYBOARD_GRAB) {
    document.addEventListener("keydown", function(e) {
      thus._keyDown(e)
    }, true)
  }
  document.addEventListener("keyup", function(e) {
    thus._keyUp(e)
  }, true);
  canvas.addEventListener("keydown", function(e) {
    thus._keyDown(e)
  }, true);
  window.addEventListener("focus", function(e) {
    thus.windowVisible = true
  }, false);
  window.addEventListener("blur", function(e) {
    thus.windowVisible = false
  }, false);
  canvas.addEventListener("focus", function(e) {
    thus.canvasVisible = true
  }, false);
  canvas.addEventListener("blur", function(e) {
    thus.canvasVisible = false
  }, false);
  canvas.addEventListener("mousedown", function(e) {
    thus._mouseDown(e)
  }, true);
  canvas.addEventListener("mouseup", function(e) {
    thus._mouseUp(e)
  }, true);
  canvas.addEventListener("mousemove", function(e) {
    thus._mouseMove(e)
  }, true);
  canvas.addEventListener("mousewheel", function(e) {
    thus._scrollWheel(e)
  }, true);
  canvas.addEventListener("DOMMouseScroll", function(e) {
    thus._scrollWheel(e)
  }, true);
  canvas.addEventListener("click", function(e) {
    thus.mClientElement.focus()
  }, true);
  canvas.addEventListener("contextmenu", function(e) {
    if(e.preventDefault) {
      e.preventDefault()
    }else {
      e.returnValue = false
    }
    return false
  }, true)
};
Kata.require(["katajs/oh/GraphicsSimulation.js", ["katajs/gfx/WebGLCompat.js", "katajs/gfx/layer0.js", "katajs/gfx/layer1.js", "katajs/gfx/layer2.js", "katajs/gfx/layer2_no_sunbeams.js", "externals/GLGE/src/core/glge.js", "externals/GLGE/src/core/glge_event.js", "externals/GLGE/src/core/glge_animatable.js", "externals/GLGE/src/core/glge_document.js", "externals/GLGE/src/core/glge_math.js", "externals/GLGE/src/core/glge_messages.js", "externals/GLGE/src/core/glge_placeable.js", "externals/GLGE/src/core/glge_quicknote.js", 
"externals/GLGE/src/core/glge_jsonloader.js", "externals/GLGE/src/core/glge_group.js", "externals/GLGE/src/scene/glge_scene.js", "externals/GLGE/src/scene/glge_light.js", "externals/GLGE/src/scene/glge_camera.js", "externals/GLGE/src/renderable/glge_object.js", "externals/GLGE/src/renders/glge_renderer.js", "externals/GLGE/src/extra/glge_input.js", "externals/GLGE/src/extra/glge_particles.js", "externals/GLGE/src/extra/glge_filter2d.js", "externals/GLGE/src/extra/glge_xmlparser.js", "externals/GLGE/src/extra/glge_wavefront.js", 
"externals/GLGE/src/extra/glge_collada.js", "externals/GLGE/src/geometry/glge_mesh.js", "externals/GLGE/src/material/glge_texturecube.js", "externals/GLGE/src/material/glge_texture.js", "externals/GLGE/src/material/glge_texturevideo.js", "externals/GLGE/src/material/glge_texturecanvas.js", "externals/GLGE/src/material/glge_material.js", "externals/GLGE/src/material/glge_texturecamera.js", "externals/GLGE/src/material/glge_multimaterial.js", "externals/GLGE/src/material/glge_materiallayer.js", "externals/GLGE/src/renderable/glge_text.js", 
"externals/GLGE/src/renderable/glge_lod.js", "externals/GLGE/src/animation/glge_actionchannel.js", "externals/GLGE/src/animation/glge_animationvector.js", "externals/GLGE/src/animation/glge_animationcurve.js", "externals/GLGE/src/animation/glge_animationpoints.js", "externals/GLGE/src/animation/glge_action.js"]], function() {
  var g_GLGE_doc;
  var CDN_SERVICES = {"meerkat":"http://open3dhub.com"};
  function getUrlProtocol(url) {
    var colon = url.indexOf(":");
    if(colon != -1) {
      return url.substr(0, colon)
    }
    return""
  }
  function getUrlPath(url) {
    var hostslash = url.indexOf("//");
    if(hostslash == -1) {
      return url
    }
    var pathslash = url.indexOf("/", hostslash + 2);
    if(pathslash == -1) {
      return"/"
    }
    return url.substr(pathslash)
  }
  function getFinalUrl(url, callback) {
    var meta_xhr = new XMLHttpRequest;
    var proto = getUrlProtocol(url);
    var host = CDN_SERVICES[proto];
    var path = getUrlPath(url);
    meta_xhr.open("GET", host + "/dns" + path, true);
    meta_xhr.onreadystatechange = function() {
      if(meta_xhr.readyState == 4) {
        if(meta_xhr.status == 200) {
          var response = JSON.parse(meta_xhr.response);
          var hash = response["Hash"];
          var final_url = host + "/download/" + hash;
          Kata.log("CDN: " + url + " => " + final_url);
          callback(final_url, null)
        }else {
          callback(null, meta_xhr.status)
        }
      }
    };
    meta_xhr.send(null)
  }
  GLGE.XMLHttpRequest = function() {
    var xhr = new XMLHttpRequest;
    xhr.Kata_open = xhr.open;
    xhr.Kata_send = xhr.send;
    xhr.open = function(method, url, async) {
      this.Kata_openurl = null;
      if(getUrlProtocol(url) != "meerkat") {
        return xhr.Kata_open(method, url, async)
      }
      if(async !== true || method != "GET") {
        throw"Kata XHR must be asynchronous GET!";
      }
      this.Kata_openurl = url
    };
    xhr.send = function(post) {
      if(!this.Kata_openurl) {
        this.Kata_send(post)
      }else {
        getFinalUrl(this.Kata_openurl, function(final_url, errorcode) {
          if(final_url) {
            xhr.Kata_open("GET", final_url, true);
            xhr.Kata_send(null)
          }else {
            xhr.status = errorcode;
            xhr.readyState = 4;
            xhr.onreadystatechange()
          }
        })
      }
    };
    return xhr
  };
  GLGE.loadImage = function(image, url) {
    image.crossOrigin = "anonymous";
    if(getUrlProtocol(url) != "meerkat") {
      image.src = url
    }else {
      getFinalUrl(url, function(final_url, errorcode) {
        if(final_url) {
          image.src = final_url
        }else {
          var evt = document.createEvent("UIEvents");
          evt.initEvent("error", false, true, image, url);
          image.dispatchEvent(evt)
        }
      })
    }
  };
  GLGEGraphics.prototype.newEvent = function() {
    this.doubleBuffer = 3
  };
  GLGEGraphics.prototype.render = function() {
    var thus = this;
    thus._mouseMoveSinceLastRender = false;
    thus.mCurTime = new Date;
    var now = parseInt(thus.mCurTime.getTime());
    var anyUpdates = false;
    for(var id in thus.mObjectUpdates) {
      thus.mObjectUpdates[id].update(thus);
      thus.newEvent();
      anyUpdates = true
    }
    var didRender = false;
    if(!thus.doubleBuffer) {
      for(var animObject in thus.mAnimatingObjects) {
        if(thus.windowVisible) {
          thus.newEvent()
        }
        break
      }
    }
    if(thus.doubleBuffer > 0) {
      thus.doubleBuffer -= 1;
      thus.renderer.render();
      didRender = true
    }
    if(didRender) {
      var scene = this.renderer.getScene();
      if(scene) {
        var filter = scene.getFilter2d();
        if(filter) {
          var lights = scene.getLights();
          var pos = [0, 0, 0, 1];
          for(var i = 0;i < lights.length;++i) {
            if(i == 0 || lights[i].getCastShadows()) {
              pos = GLGE.mulMat4Vec4(lights[i].getModelMatrix(), GLGE.Vec4(0, 0, 0, 1))
            }
          }
          var lightloc = GLGE.mulMat4Vec4(scene.camera.getProjectionMatrix(), GLGE.mulMat4Vec4(scene.camera.getViewMatrix(), pos));
          lightloc = [(lightloc[0] / lightloc[3] + 1) / 2, (lightloc[1] / lightloc[3] + 1) / 2, (lightloc[2] / lightloc[3] + 1) / 2];
          filter.setUniform("3fv", "lightpos", new Float32Array(lightloc));
          var invProjView = GLGE.mulMat4(GLGE.inverseMat4(scene.camera.getViewMatrix()), GLGE.inverseMat4(scene.camera.getProjectionMatrix()));
          filter.setUniform("Matrix4fv", "invProjView", new Float32Array(GLGE.transposeMat4(invProjView)))
        }
      }
    }
    if(Kata.userRenderCallback) {
      Kata.userRenderCallback(thus.mCurTime)
    }
    if(this.mDoCaptureCanvas && !anyUpdates) {
      this.methodTable["CaptureCanvas"].call(this, {});
      this.mDoCaptureCanvas -= 1
    }
  };
  GLGEGraphics.initialize = function(scenefile, cb) {
    g_GLGE_doc = new GLGE.Document;
    g_GLGE_doc.onLoad = cb;
    g_GLGE_doc.load(scenefile)
  };
  function RenderTarget(graphicsSystem, canvas, textureCanvas) {
    this.mGraphicsSystem = graphicsSystem;
    this.mCanvas = canvas;
    this.mTextureCanvas = textureCanvas;
    this.mTextureCamera = null;
    this.mCamera = null;
    this.mSpaceRoot = null;
    this.mOriginalMaterials = null
  }
  RenderTarget.prototype.attachScene = function(spaceRoot, camera) {
    this.mSpaceRoot = spaceRoot;
    if(this.mTextureCamera == null) {
      this.mGraphicsSystem.renderer.setScene(spaceRoot.mScene);
      spaceRoot.mScene.setCamera(camera)
    }else {
      console.log("Do not know how to deal with texture camera")
    }
  };
  RenderTarget.prototype.detachScene = function(spaceRoot) {
    if(this.mTextureCamera == null) {
      this.mSpaceRoot.mScene.setCamera(null);
      this.mGraphicsSystem.setScene(null)
    }else {
      console.log("Do not know how to deal with texture camera")
    }
    this.mSpaceRoot = null
  };
  function getGroupBoundingVolume(thus, currentMatrix) {
    var localMatrix = thus.getLocalMatrix();
    if(currentMatrix) {
      localMatrix = GLGE.mulMat4(currentMatrix, localMatrix)
    }
    var boundingVolume = null;
    for(var i = 0;i < thus.children.length;i++) {
      if(!boundingVolume) {
        boundingVolume = computeBoundingVolume(thus.children[i], localMatrix)
      }else {
        boundingVolume.addBoundingVolume(computeBoundingVolume(thus.children[i], localMatrix))
      }
    }
    if(!boundingVolume) {
      boundingVolume = new GLGE.BoundingVolume(0, 0, 0, 0, 0, 0)
    }
    return boundingVolume
  }
  function getObjectBoundingVolume(thus, currentMatrix) {
    var localMatrix = thus.getLocalMatrix();
    if(currentMatrix) {
      localMatrix = GLGE.mulMat4(currentMatrix, localMatrix)
    }
    var matrix = thus.getModelMatrix();
    var multimaterials = thus.multimaterials;
    var boundingVolume = null;
    for(var i = 0;i < multimaterials.length;i++) {
      if(multimaterials[i].lods[0].mesh) {
        if(!boundingVolume) {
          boundingVolume = getMeshBoundingVolume(multimaterials[i].lods[0].mesh, localMatrix)
        }else {
          boundingVolume.addBoundingVolume(getMeshBoundingVolume(multimaterials[i].lods[0].mesh, localMatrix))
        }
      }
    }
    if(!boundingVolume) {
      boundingVolume = new GLGE.BoundingVolume(0, 0, 0, 0, 0, 0)
    }
    return boundingVolume
  }
  function getMeshBoundingVolume(thus, currentMatrix) {
    function mulMat4Vec3(mat1, vec2) {
      return GLGE.Vec3(mat1[0] * vec2[0] + mat1[1] * vec2[1] + mat1[2] * vec2[2] + mat1[3], mat1[4] * vec2[0] + mat1[5] * vec2[1] + mat1[6] * vec2[2] + mat1[7], mat1[8] * vec2[0] + mat1[9] * vec2[1] + mat1[10] * vec2[2] + mat1[11])
    }
    var minX, maxX, minY, maxY, minZ, maxZ;
    for(var i = 0;i < thus.buffers.length;i++) {
      if(thus.buffers[i].name == "position") {
        var positions = thus.buffers[i].data;
        if(currentMatrix) {
          if(positions.length >= 3) {
            var loc = mulMat4Vec3(currentMatrix, positions.slice(0, 3));
            minX = maxX = loc[0];
            minY = maxY = loc[1];
            minZ = maxZ = loc[2]
          }else {
            minX = minY = minZ = maxX = maxY = maxZ = 0
          }
          for(var j = 3;j + 2 < positions.length;j = j + 3) {
            var loc = mulMat4Vec3(currentMatrix, positions.slice(j, j + 3));
            minX = Math.min(minX, loc[0]);
            maxX = Math.max(maxX, loc[0]);
            minY = Math.min(minY, loc[1]);
            maxY = Math.max(maxY, loc[1]);
            minZ = Math.min(minZ, loc[2]);
            maxZ = Math.max(maxZ, loc[2])
          }
        }else {
          if(positions.length >= 3) {
            minX = maxX = positions[0];
            minY = maxY = positions[1];
            minZ = maxZ = positions[2]
          }else {
            minX = minY = minZ = maxX = maxY = maxZ = 0
          }
          for(var j = 3;j + 3 < positions.length;i = j + 3) {
            minX = Math.min(minX, positions[i]);
            maxX = Math.max(maxX, positions[i]);
            minY = Math.min(minY, positions[i + 1]);
            maxY = Math.max(maxY, positions[i + 1]);
            minZ = Math.min(minZ, positions[i + 2]);
            maxZ = Math.max(maxZ, positions[i + 2])
          }
        }
      }
    }
    return new GLGE.BoundingVolume(minX, maxX, minY, maxY, minZ, maxZ)
  }
  function computeBoundingVolume(glge_object, currentMatrix) {
    switch(glge_object.getBoundingVolume) {
      case GLGE.Group.prototype.getBoundingVolume:
        return getGroupBoundingVolume(glge_object, currentMatrix);
      case GLGE.Mesh.prototype.getBoundingVolume:
        return getMeshBoundingVolume(glge_object, currentMatrix);
      case GLGE.Object.prototype.getBoundingVolume:
      ;
      default:
        return getObjectBoundingVolume(glge_object, currentMatrix)
    }
  }
  function VWObject(id, time, spaceid, spaceroot) {
    this.mID = id;
    this.mSpaceID = spaceid;
    this.mNode = new GLGE.Group(id);
    this.mMesh = null;
    this.mBounds = [0, 0, 0, 1];
    this.mLabel = null;
    this.mCurLocation = Kata.LocationIdentity(new Date(0));
    this.mPrevLocation = Kata.LocationIdentity(new Date(0));
    this.mNode.mKataObject = this;
    this.update = this.updateTransformation;
    this.mParent = null;
    spaceroot.mScene.addChild(this.mNode);
    this.mLoaded = false
  }
  VWObject.prototype.getMeshAspectRatio = function() {
    if(!this.bv) {
      return[0, 0, 0]
    }
    var retval = [this.bv.limits[1] - this.bv.limits[0], this.bv.limits[3] - this.bv.limits[2], this.bv.limits[5] - this.bv.limits[4]];
    retval[0] /= this.bv.radius * 2;
    retval[1] /= this.bv.radius * 2;
    retval[2] /= this.bv.radius * 2;
    return retval
  };
  VWObject.prototype.queryMeshAspectRatio = function(gfx) {
    gfx._inputCb({msg:"MeshAspectRatio", id:this.mID, aspect:this.getMeshAspectRatio()})
  };
  VWObject.prototype.destroyMesh = function() {
    this.mNode.removeChild(this.mMesh);
    this.mMesh = null
  };
  VWObject.prototype.createMesh = function(gfx, path, animation, bounds) {
    this.destroyMesh();
    if(path == null) {
      throw"loadScene with null path";
    }
    if(path.lastIndexOf(".dae") == -1) {
      path += ".dae"
    }
    this.mMeshURI = path;
    var thus = this;
    var clda = new GLGE.Collada;
    this.mLoading = true;
    if(this.mID in gfx.mAnimatingObjects) {
      delete gfx.mAnimatingObjects[thus.mID]
    }
    var loadedCallback;
    loadedCallback = function() {
      clda.setScaleX(1);
      clda.setScaleY(1);
      clda.setScaleZ(1);
      var bv = computeBoundingVolume(clda);
      var maxv = bv.radius;
      var colladaUnitRescale = 1 / maxv;
      clda.setScaleX(maxv ? thus.mBounds[3] * colladaUnitRescale : 1);
      clda.setScaleY(maxv ? thus.mBounds[3] * colladaUnitRescale : 1);
      clda.setScaleZ(maxv ? thus.mBounds[3] * colladaUnitRescale : 1);
      clda.setLocX(thus.mBounds[0] - bv.center[0] * colladaUnitRescale * thus.mBounds[3]);
      clda.setLocY(thus.mBounds[1] - bv.center[1] * colladaUnitRescale * thus.mBounds[3]);
      clda.setLocZ(thus.mBounds[2] - bv.center[2] * colladaUnitRescale * thus.mBounds[3]);
      gfx._inputCb({msg:"loaded", id:thus.mID});
      clda.removeEventListener("loaded", loadedCallback);
      thus.mLoaded = true;
      gfx.newEvent();
      if(thus.mCurAnimation) {
        var anim = thus.mCurAnimation;
        thus.mCurAnimation = "";
        thus.animate(anim)
      }
      function hasAnimations(node) {
        if(node.getAnimation()) {
          return true
        }
        var child;
        var i;
        if(node.children) {
          for(i = 0;i < node.children.length;++i) {
            child = node.children[i];
            if(hasAnimations(child)) {
              return true
            }
          }
        }
        return false
      }
      if(thus.mMesh == clda) {
        thus.bv = bv;
        delete thus.mLoading;
        thus.updateTransformation(gfx);
        if(hasAnimations(clda)) {
          gfx.mAnimatingObjects[thus.mID] = thus.mNode;
          setTimeout(function() {
            gfx.newEvent()
          }, 8E3);
          setTimeout(function() {
            gfx.newEvent()
          }, 4E3)
        }
        if(thus.mQueryAspectCount) {
          for(var i = 0;i < thus.mQueryAspectCount;++i) {
            thus.queryMeshAspectRatio(gfx)
          }
          delete thus.mQueryAspectCount
        }
      }else {
        if(thus.mQueryAspectCount && thus.mQueryAspectCount > 1) {
          thus.queryMeshAspectRatio(gfx);
          thus.mQueryAspectCount--
        }
      }
    };
    var downloadedCallback = function() {
      gfx.newEvent();
      gfx._inputCb({msg:"downloadComplete", id:thus.mID});
      clda.removeEventListener("downloadComplete", downloadedCallback)
    };
    clda.addEventListener("loaded", loadedCallback);
    clda.addEventListener("downloadComplete", downloadedCallback);
    clda.setDocument(this.mMeshURI);
    clda.setScaleX(bounds[3]);
    clda.setScaleY(bounds[3]);
    clda.setScaleZ(bounds[3]);
    clda.setLocX(bounds[0]);
    clda.setLocY(bounds[1]);
    clda.setLocZ(bounds[2]);
    this.mBounds = bounds;
    this.mNode.addCollada(clda);
    this.mMesh = clda;
    this.updateTransformation(gfx);
    return clda
  };
  VWObject.prototype.createCamera = function(fov, near, far) {
    this.mFOV = fov;
    this.mCamera = new GLGE.Camera(this.mID + "C");
    this.mCamera.setFovY(fov * GLGEGraphics.canvasAspect);
    this.mCamera.setNear(near);
    this.mCamera.setFar(far);
    if(GLGEGraphics.canvasAspect) {
      this.mCamera.setAspect(GLGEGraphics.canvasAspect)
    }
    this.mNode.addChild(this.mCamera);
    this.update = this.updateCamera
  };
  VWObject.prototype.destroyCamera = function() {
    this.detachRenderTarget();
    delete this.mFOV;
    this.mNode.removeChild(this.mCamera);
    delete this.mCamera;
    this.update = this.updateTransformation
  };
  VWObject.prototype.attachRenderTarget = function(renderTarg, spaceRoot) {
    if(renderTarg.mCamera) {
      renderTarg.mCamera.detachRenderTarget()
    }
    this.detachRenderTarget();
    this.mRenderTarg = renderTarg;
    renderTarg.mCamera = this;
    renderTarg.attachScene(spaceRoot, this.mCamera);
    this.update(renderTarg.mGraphicsSystem)
  };
  VWObject.prototype.detachRenderTarget = function(curTime) {
    if(this.mRenderTarg) {
      var graphics = this.mRenderTarg.mO3DGraphics;
      this.mRenderTarg.detatchScene();
      this.mRenderTarg.mCamera = null;
      this.mRenderTarg.mSpaceRoot = null;
      delete this.mRenderTarg;
      this.update(graphics)
    }
  };
  VWObject.prototype.stationary = function(curTime) {
    var v = this.mCurLocation.vel;
    var a = this.mCurLocation.rotvel;
    var t = curTime;
    return v[0] == 0 && v[1] == 0 && v[2] == 0 && a == 0 && t - this.mCurLocation.scaleTime >= 0 && t - this.mCurLocation.posTime >= 0 && t - this.mCurLocation.orientTime >= 0
  };
  VWObject.prototype.updateTransformation = function(graphics) {
    var l = Kata.LocationExtrapolate(this.mCurLocation, graphics.mCurTime);
    this.mNode.setLoc(l.pos[0], l.pos[1], l.pos[2]);
    var colladaUnitRescale = this.bv ? 1 / this.bv.radius : 1;
    if(this.mMesh) {
      if(this.bv) {
        this.mMesh.setScale(l.scale[3] * colladaUnitRescale, l.scale[3] * colladaUnitRescale, l.scale[3] * colladaUnitRescale);
        var locx = l.scale[0] - this.bv.center[0] * colladaUnitRescale * l.scale[3];
        var locy = l.scale[1] - this.bv.center[1] * colladaUnitRescale * l.scale[3];
        var locz = l.scale[2] - this.bv.center[2] * colladaUnitRescale * l.scale[3];
        this.mMesh.setLocX(locx);
        this.mMesh.setLocY(locy);
        this.mMesh.setLocZ(locz)
      }else {
        this.mMesh.setScale(l.scale[3], l.scale[3], l.scale[3]);
        this.mMesh.setLocX(l.scale[0]);
        this.mMesh.setLocY(l.scale[1]);
        this.mMesh.setLocZ(l.scale[2])
      }
    }
    this.mBounds = l.scale;
    this.mNode.setQuat(l.orient[0], l.orient[1], l.orient[2], l.orient[3]);
    if(this.stationary(graphics.mCurTime)) {
      graphics.removeObjectUpdate(this)
    }
    return l
  };
  VWObject.prototype.updateCamera = function(graphics) {
    var location = this.updateTransformation(graphics, true)
  };
  VWObject.prototype.animate = function(anim_name) {
    var mesh = this.mMesh;
    if(!mesh) {
      Kata.warn("Couldn't handle animate request.");
      return
    }
    if(anim_name == this.mCurAnimation) {
      return
    }
    var actions = {};
    if(mesh) {
      actions = mesh.getColladaActions()
    }
    var new_anim = actions[anim_name];
    if(!new_anim) {
      if(!this.mLoaded) {
        this.mCurAnimation = anim_name
      }
      return
    }
    this.mCurAnimation = anim_name;
    mesh.setAction(new_anim, 400, true)
  };
  VWObject.prototype.label = function(label, offset, color) {
    var label_node = this.mLabel;
    if(label_node === null) {
      label_node = new GLGE.Text;
      this.mLabel = label_node;
      label_node.multimaterials = [new GLGE.MultiMaterial];
      var material = new GLGE.Material;
      label_node.multimaterials[0].setMaterial(material);
      this.mNode.addChild(label_node)
    }
    if(offset === undefined) {
      offset = [0, 0, 0]
    }
    label_node.setScaleX(0.1);
    label_node.setScaleY(0.1);
    label_node.setScaleZ(0.1);
    label_node.setQuatX(0);
    label_node.setQuatY(0);
    label_node.setQuatZ(0);
    label_node.setQuatW(1);
    label_node.setLocX(offset[0]);
    label_node.setLocY(offset[1]);
    label_node.setLocZ(offset[2]);
    if(color === undefined) {
      label_node.setColor("black")
    }else {
      label_node.setColorR(color[0]);
      label_node.setColorG(color[1]);
      label_node.setColorB(color[2])
    }
    label_node.setSize(200);
    label_node.setText(label)
  };
  VWObject.prototype.setHighlight = function(enable) {
    function visitAllMaterials(obj, func) {
      var multimat = obj.multimaterials;
      if(multimat) {
        for(var i = 0;i < multimat.length;i++) {
          func(multimat[i])
        }
      }
      var children = obj.children;
      if(children) {
        for(var i = 0;i < children.length;i++) {
          visitAllMaterials(children[i], func)
        }
      }
    }
    if(enable) {
      var copyMaterial = false;
      if(!this.mOriginalMaterials) {
        copyMaterial = true;
        this.mOriginalMaterials = true
      }
      visitAllMaterials(this.mMesh, function(obj) {
        var newMaterial;
        if(copyMaterial) {
          var materialHighlight = function() {
          };
          materialHighlight.prototype = obj.getMaterial();
          newMaterial = new materialHighlight;
          newMaterial.mOriginalMaterial = obj.getMaterial()
        }else {
          newMaterial = obj.getMaterial()
        }
        newMaterial.setEmit(0.5);
        obj.setMaterial(newMaterial)
      })
    }else {
      if(this.mOriginalMaterials) {
        this.mOriginalMaterials = false;
        visitAllMaterials(this.mMesh, function(obj) {
          var oldMaterial = obj.getMaterial().mOriginalMaterial;
          if(oldMaterial) {
            obj.setMaterial(oldMaterial)
          }
        })
      }
    }
  };
  var mainSpace;
  function SpaceRoot(glgegfx, element, spaceID) {
    this.mElement = element;
    if(!mainSpace) {
      mainSpace = spaceID
    }
    if(mainSpace == spaceID) {
      this.mScene = g_GLGE_doc.getElement("mainscene")
    }else {
      this.mScene = new GLGE.Scene(spaceID)
    }
    this.mScene.mSpaceID = spaceID;
    this.mDefaultRenderView = new RenderTarget(glgegfx, element, null)
  }
  GLGEGraphics.prototype.methodTable = {};
  GLGEGraphics.prototype.addObjectUpdate = function(vwObj) {
    this.mObjectUpdates[vwObj.mID] = vwObj
  };
  GLGEGraphics.prototype.removeObjectUpdate = function(vwObj) {
    delete this.mObjectUpdates[vwObj.mID]
  };
  GLGEGraphics.prototype.send = function(obj) {
    if(obj.msg != "Custom" && obj.__type == Kata.ScriptProtocol.FromScript.Types.GraphicsMessage) {
      this.methodTable[obj.msg].call(this, obj);
      this.newEvent()
    }
  };
  GLGEGraphics.prototype.setInputCallback = function(cb) {
    this._inputCb = cb
  };
  function cloneEvent(e) {
    var ret = {};
    for(var key in e) {
      if(key != "charCode" && key.toUpperCase() != key) {
        if(typeof e[key] == "number" || typeof e[key] == "string") {
          ret[key] = e[key]
        }
      }
    }
    return ret
  }
  GLGEGraphics.prototype.methodTable["ProjectPoint"] = function(msg) {
    var scene = this.renderer && this.renderer.getScene();
    var pos = msg.pos;
    var poslen = msg.pos.length;
    if(!poslen) {
      pos = [pos];
      poslen = 1
    }
    var projection_matrix = GLGE.mulMat4(scene.camera.pMatrix, scene.camera.matrix);
    msg.projected = [];
    for(var i = 0;i < poslen;i++) {
      var projected = GLGE.mulMat4Vec4(projection_matrix, [pos[i][0], pos[i][1], pos[i][2], 1]);
      msg.projected[i] = [projected[0] / projected[3], projected[1] / projected[3], projected[2] / projected[3]]
    }
    msg.msg = "Projected";
    this._inputCb(msg)
  };
  GLGEGraphics.prototype._extractMouseEventInfo = function(e, msgname) {
    var ev = {msg:msgname || e.type, event:cloneEvent(e), shiftKey:e.shiftKey, altKey:e.altKey, ctrlKey:e.ctrlKey, button:e.button, x:e.clientX, y:e.clientY, camerapos:null, cameradir:null, dir:null, spaceid:null, clientX:e.clientX, clientY:e.clientY, width:0, height:0};
    var el = this.mClientElement;
    ev.width = el.width;
    ev.height = el.height;
    while(el != null) {
      ev.x += el.scrollLeft || 0;
      ev.y += el.scrollTop || 0;
      ev.x -= el.offsetLeft || 0;
      ev.y -= el.offsetTop || 0;
      if(el == document.body && !el.offsetParent) {
        el = document.documentElement
      }else {
        el = el.offsetParent
      }
    }
    var scene = this.renderer && this.renderer.getScene();
    if(scene) {
      var ray = scene.makeRay(ev.x, ev.y);
      if(ray) {
        ev.camerapos = ray.origin;
        ev.dir = ray.coord
      }
      if(scene.camera && scene.camera.matrix && scene.camera.pMatrix) {
        var invViewProj = GLGE.mulMat4(GLGE.inverseMat4(scene.camera.matrix), GLGE.inverseMat4(scene.camera.pMatrix));
        var origin = GLGE.mulMat4Vec4(invViewProj, [0, 0, -1, 1]);
        origin = [origin[0] / origin[3], origin[1] / origin[3], origin[2] / origin[3]];
        var coord = GLGE.mulMat4Vec4(invViewProj, [0, 0, 1, 1]);
        coord = [-(coord[0] / coord[3] - origin[0]), -(coord[1] / coord[3] - origin[1]), -(coord[2] / coord[3] - origin[2])];
        coord = GLGE.toUnitVec3(coord);
        ev.cameradir = coord
      }
      ev.spaceid = scene.mSpaceID
    }
    return ev
  };
  GLGEGraphics.prototype._rayTrace = function(pos, dir, result) {
    var scene = this.renderer.getScene();
    var pickresult = scene.ray(pos, dir);
    var obj = pickresult && pickresult.object;
    while(obj && !obj.mKataObject) {
      obj = obj.parent
    }
    var objid = obj && obj.mKataObject && obj.mKataObject.mID;
    if(!objid) {
      objid = null
    }
    result.spaceid = scene.mSpaceID;
    result.id = objid;
    result.pos = pickresult && pickresult.coord;
    result.normal = pickresult && pickresult.normal;
    return result.id && true || false
  };
  GLGEGraphics.prototype._mouseDown = function(e) {
    var ev = this._extractMouseEventInfo(e);
    this._buttonState |= 1 << ev.button;
    this._lastMouseDown = ev;
    if(ev.button == 2) {
      document.body.style.cursor = "crosshair"
    }
    this._inputCb(ev);
    var thus = this;
    var mousemove = function(e) {
      thus._mouseMove(e)
    };
    var mouseup = function(e) {
      thus._mouseUp(e);
      document.removeEventListener("mouseup", mouseup, true);
      document.removeEventListener("mousemove", mousemove, true)
    };
    document.addEventListener("mouseup", mouseup, true);
    document.addEventListener("mousemove", mousemove, true);
    window.focus();
    e.target.focus();
    e.preventDefault && e.preventDefault();
    if(this._enabledEvents["pick"]) {
      ev = this._extractMouseEventInfo(e, "pick");
      this._rayTrace(ev.camerapos, ev.dir, ev);
      this._inputCb(ev);
      this.doubleBuffer = 2
    }
  };
  var DRAG_THRESHOLD = Kata.GraphicsSimulation.DRAG_THRESHOLD;
  GLGEGraphics.prototype._mouseUp = function(e) {
    var ev = this._extractMouseEventInfo(e);
    this._buttonState &= ~(1 << ev.button);
    if(ev.button == 2) {
      document.body.style.cursor = "default"
    }
    this._inputCb(ev);
    var downev = this._lastMouseDown;
    if(downev) {
      var deltax = ev.x - downev.x;
      var deltay = ev.y - downev.y;
      if(downev.dragging || deltax < -DRAG_THRESHOLD || deltax > DRAG_THRESHOLD || deltay < -DRAG_THRESHOLD || deltay > DRAG_THRESHOLD) {
        ev = this._extractMouseEventInfo(e, "drop");
        ev.dx = deltax;
        ev.dy = deltay;
        this._inputCb(ev)
      }else {
        ev = this._extractMouseEventInfo(e, "click");
        this._inputCb(ev)
      }
    }
  };
  GLGEGraphics.prototype._mouseMove = function(e) {
    var ev = this._extractMouseEventInfo(e);
    if(this._mouseMoveSinceLastRender) {
      return
    }
    this._mouseMoveSinceLastRender = true;
    if(this._enabledEvents["mousemove"]) {
      this._inputCb(ev)
    }
    if(this._buttonState) {
      var downev = this._lastMouseDown;
      if(downev) {
        var deltax = ev.x - downev.x;
        var deltay = ev.y - downev.y;
        if(downev.dragging || deltax < -DRAG_THRESHOLD || deltax > DRAG_THRESHOLD || deltay < -DRAG_THRESHOLD || deltay > DRAG_THRESHOLD) {
          downev.dragging = true;
          if(this._enabledEvents["drag"]) {
            ev = this._extractMouseEventInfo(e, "drag");
            ev.dx = deltax;
            ev.dy = deltay;
            ev.button = downev.button;
            this._inputCb(ev)
          }
        }
      }
    }
  };
  GLGEGraphics.prototype._keyDown = function(e) {
    if(Kata.suppressCanvasKeyInput) {
      return
    }
    var msg = {msg:"keydown", event:cloneEvent(e), repeat:!!this._keyDownMap[e.keyCode], keyCode:e.keyCode, shiftKey:e.shiftKey, altKey:e.altKey, ctrlKey:e.ctrlKey};
    this._keyDownMap[e.keyCode] = -1;
    this._inputCb(msg);
    if(e.keyCode != 9 && !GLGEGraphics.GLOBAL_KEYBOARD_GRAB) {
      e.preventDefault && e.preventDefault()
    }
  };
  GLGEGraphics.prototype._keyUp = function(e) {
    if(!this._keyDownMap[e.keyCode]) {
      return
    }
    var msg = {msg:"keyup", event:cloneEvent(e), keyCode:e.keyCode, shiftKey:e.shiftKey, altKey:e.altKey, ctrlKey:e.ctrlKey};
    var me = this;
    this._keyDownMap[e.keyCode] = 1;
    setTimeout(function() {
      if(me._keyDownMap[e.keyCode] == 1) {
        me._keyDownMap[e.keyCode] = 0;
        me._inputCb(msg)
      }
    }, 50)
  };
  GLGEGraphics.prototype._scrollWheel = function(e) {
    if(this.canvasVisible) {
      var msg = {msg:"wheel", event:cloneEvent(e), shiftKey:e.shiftKey, altKey:e.altKey, ctrlKey:e.ctrlKey, dy:0, dx:0};
      if(e.wheelDeltaX || e.wheelDeltaY) {
        msg.dy = e.wheelDeltaY || 0;
        msg.dx = -e.wheelDeltaX || 0
      }else {
        if(e.wheelDelta) {
          msg.dy = e.wheelDelta
        }else {
          if(e.detail) {
            if(e.axis == 1) {
              msg.dx = e.detail * 40
            }else {
              msg.dy = e.detail * -40
            }
          }
        }
      }
      this._inputCb(msg);
      e.preventDefault()
    }
  };
  GLGEGraphics.prototype.createOrReturnSpaceRoot = function(s) {
    if(!s) {
      s = ""
    }
    if(!(s in this.mSpaceRoots)) {
      var dl = new SpaceRoot(this, this.mClientElement, s);
      this.mSpaceRoots[s] = dl;
      var rootsEmpty = true;
      for(var i in this.mSpaceRoots) {
        rootsEmpty = false;
        break
      }
    }
    return this.mSpaceRoots[s]
  };
  GLGEGraphics.prototype.methodTable["Create"] = function(msg) {
    var spaceRoot = this.createOrReturnSpaceRoot(msg.spaceid);
    var newObject;
    if(!(msg.id in this.mObjects)) {
      this.mObjects[msg.id] = newObject = new VWObject(msg.id, msg.time, msg.spaceid, spaceRoot)
    }else {
      newObject = this.mObjects[msg.id]
    }
    this.moveTo(newObject, msg);
    newObject.updateTransformation(this);
    if(msg.id in this.mUnsetParents) {
      var unset = this.mUnsetParents[msg.id];
      var i;
      for(i in unset) {
        newObject.mNode.addChild(unset[i].mNode);
        delete unset[i].mUnsetParent
      }
      delete this.mUnsetParents[msg.id]
    }
  };
  function LocationFromGLGETransformation(transformation, time) {
    return Kata.LocationSet({time:time, pos:[transformation.locX, transformation.locY, transformation.locZ], orient:[transformation.quatX, transformation.quatY, transformation.quatZ, transformation.quatW]})
  }
  function glgeTransformationToLocationList(gfx, vwObject) {
    var retval = [];
    while(vwObject != null) {
      var loc = [vwObject.mPrevLocation, vwObject.mPrevLocation];
      retval.push(loc);
      vwObject = vwObject.mParent
    }
    return retval
  }
  GLGEGraphics.prototype.moveTo = function(vwObject, msg) {
    if(!msg.time) {
      msg.time = (new Date).getTime()
    }
    var prevParent = vwObject.mParent;
    var prevParentNode = null;
    var curParent = null;
    var curParentNode = null;
    if(prevParent == null) {
      prevParentNode = this.mSpaceRoots[vwObject.mSpaceID].mScene
    }else {
      prevParentNode = prevParent.mNode
    }
    if(msg.parent !== undefined) {
      if(vwObject.mUnsetParent) {
        delete this.mUnsetParents[vwObject.mUnsetParent][msg.id];
        delete vwObject.mUnsetParent
      }
      if(msg.parent) {
        if(msg.parent in this.mObjects) {
          var parent = this.mObjects[msg.parent];
          var parentNode = parent.mNode;
          if(parent != vwObject.mParent) {
            prevParentNode.removeChild(vwObject.mNode);
            vwObject.mParent = parent;
            parentNode.addChild(vwObject.mNode);
            curParent = parent;
            curParentNode = parentNode
          }
        }else {
          if(!(msg.parent in this.mUnsetParents)) {
            this.mUnsetParents[msg.parent] = {}
          }
          this.mUnsetParents[msg.parent][msg.id] = vwObject;
          vwObject.mUnsetParent = msg.parent;
          var spaceRoot = this.mSpaceRoots[vwObject.mSpaceID];
          if(vwObject.mParent) {
            vwObject.mParent.mNode.removeChild(vwObject.mNode);
            spaceRoot.mScene.addChild(vwObject.mNode);
            vwObject.mParent = null
          }
          curParent = null;
          curParentNode = this.mSpaceRoots[vwObject.mSpaceID].mScene
        }
      }else {
        if(vwObject.mParent) {
          prevParentNode.removeChild(vwObject.mNode);
          curParent = null;
          curParentNode = this.mSpaceRoots[vwObject.mSpaceID].mScene;
          curParentNode.addChild(vwObject.mNode);
          vwObject.mParent = null
        }
      }
      var prevParentTransformation = glgeTransformationToLocationList(this, prevParent);
      var curParentTransformation = glgeTransformationToLocationList(this, curParent);
      vwObject.mPrevLocation = Kata.LocationReparent(vwObject.mPrevLocation, prevParentNode, curParentNode);
      vwObject.mCurLocation = Kata.LocationReparent(vwObject.mCurLocation, prevParentNode, curParentNode)
    }
    var newLoc = Kata.LocationUpdate(msg, vwObject.mCurLocation, vwObject.mPrevLocation, msg.time || this.mCurTime);
    vwObject.mPrevLocation = vwObject.mCurLocation;
    vwObject.mCurLocation = newLoc;
    if(!vwObject.stationary(this.mCurTime)) {
      this.addObjectUpdate(vwObject)
    }
  };
  GLGEGraphics.prototype.methodTable["Move"] = function(msg) {
    var vwObject = this.mObjects[msg.id];
    if(vwObject) {
      this.moveTo(vwObject, msg);
      vwObject.update(this)
    }else {
      this.methodTable["Create"].call(this, msg)
    }
  };
  GLGEGraphics.prototype.methodTable["Animate"] = function(msg) {
    var vwObject = this.mObjects[msg.id];
    vwObject.animate(msg.animation)
  };
  GLGEGraphics.prototype.methodTable["Label"] = function(msg) {
    var vwObject = this.mObjects[msg.id];
    if(vwObject) {
      vwObject.label(msg.label, msg.offset, msg.color)
    }
  };
  GLGEGraphics.prototype.methodTable["Destroy"] = function(msg) {
    if(msg.id in this.mAnimatingObjects) {
      delete this.mAnimatingObjects[msg.id]
    }
    if(msg.id in this.mObjects) {
      var vwObject = this.mObjects[msg.id];
      var children = vwObject.mNode.getChildren();
      for(var i = 0;i < children.length;++i) {
        if(!(msg.id in this.mUnsetParents)) {
          this.mUnsetParents[msg.id] = {}
        }
        var kataObject = children[i].mKataObject;
        if(kataObject) {
          this.mUnsetParents[msg.id][kataObject.mID] = kataObject;
          kataObject.mUnsetParent = msg.id;
          kataObject.mParent = null;
          var spaceRoot = this.mSpaceRoots[children[i].mKataObject.mSpaceId];
          var prevParentNode = glgeTransformationToLocationList(this, vwObject);
          var curParentNode = glgeTransformationToLocationList(this, null);
          kataObject.mPrevLocation = Kata.LocationReparent(kataObject.mPrevLocation, prevParentNode, curParentNode);
          kataObject.mCurLocation = Kata.LocationReparent(kataObject.mCurLocation, prevParentNode, curParentNode);
          vwObject.mNode.removeChild(children[i]);
          spaceRoot.mScene.addChild(children[i])
        }
      }
      vwObject.mNode.parent.removeChild(vwObject.mNode);
      delete this.mObjects[msg.id]
    }
  };
  GLGEGraphics.prototype.methodTable["MeshShaderUniform"] = function(msg) {
  };
  GLGEGraphics.prototype.methodTable["Mesh"] = function(msg) {
    if(msg.mesh && msg.id in this.mObjects) {
      var vwObject = this.mObjects[msg.id];
      vwObject.createMesh(this, msg.mesh, msg.anim, msg.scale);
      vwObject.update(this)
    }
  };
  GLGEGraphics.prototype.methodTable["QueryMeshAspectRatio"] = function(msg) {
    var vwObject = this.mObjects[msg.id];
    if(vwObject.mLoading) {
      if(vwObject.mQueryAspectCount) {
        vwObject.mQueryAspectCount++
      }else {
        vwObject.mQueryAspectCount = 1
      }
    }else {
      vwObject.queryMeshAspectRatio(this)
    }
  };
  GLGEGraphics.prototype.methodTable["DestroyMesh"] = function(msg) {
    if(msg.id in this.mObjects) {
      var vwObject = this.mObjects[msg.id];
      vwObject.destroyMesh()
    }
  };
  GLGEGraphics.prototype.methodTable["Light"] = function(msg) {
  };
  GLGEGraphics.prototype.methodTable["DestroyLight"] = function(msg) {
  };
  GLGEGraphics.prototype.methodTable["Camera"] = function(msg) {
    if(msg.id in this.mObjects) {
      var vwObject = this.mObjects[msg.id];
      vwObject.createCamera(Kata.GraphicsSimulation.YFOV_DEGREES, Kata.GraphicsSimulation.CAMERA_NEAR, Kata.GraphicsSimulation.CAMERA_FAR);
      this.mCamera = vwObject.mCamera
    }
  };
  GLGEGraphics.prototype.methodTable["AttachCamera"] = function(msg) {
    var renderTarg;
    if(msg.id in this.mObjects && msg.target !== undefined) {
      var cam = this.mObjects[msg.id];
      var spaceView;
      if(cam.mSpaceID in this.mSpaceRoots) {
        spaceView = this.mSpaceRoots[cam.mSpaceID]
      }else {
        spaceView = new SpaceRoot(this, this.mClientElement);
        this.mSpaceRoots[cam.mSpaceID] = spaceView
      }
      renderTarg = this.mRenderTargets[msg.target];
      if(!renderTarg) {
        renderTarg = new RenderTarget(this, this.mClientElement, null);
        this.mRenderTargets[msg.target] = renderTarg
      }
      if(cam.mCamera) {
        cam.attachRenderTarget(renderTarg, spaceView)
      }
    }
  };
  GLGEGraphics.prototype.reloadBackground = function(spaceRoot) {
    var filter = spaceRoot.mFilter;
    var filterTextures = spaceRoot.mFilterTextures;
    var filterTextureNames = spaceRoot.mFilterTextureNames;
    filterTextures = spaceRoot.mFilterTextures;
    filterTextureNames = spaceRoot.mFilterTextureNames;
    filter = new GLGE.Filter2d;
    spaceRoot.mScene.setFilter2d(filter);
    if(spaceRoot.mSunBeams) {
      filter.addPass(layer0_glsl, 1024, 1024);
      filter.addPass(layer1_glsl, 1024, 1024);
      filter.addPass(layer2_glsl)
    }else {
      filter.addPass(layer0_glsl, 1024, 1024);
      filter.addPass(layer2_no_sunbeams_glsl)
    }
    var i;
    var memoizedTextures = {};
    for(i = 0;i < filterTextureNames.length;++i) {
      filter.addTexture(filterTextures[i])
    }
    if(!spaceRoot.mFilter) {
      spaceRoot.mFilter = null;
      spaceRoot.mScene.setFilter2d(null);
      spaceRoot.mScene.setBackgroundColor("#222")
    }else {
      spaceRoot.mFilter = filter;
      spaceRoot.mScene.setBackgroundColor("#f0f")
    }
  };
  GLGEGraphics.prototype.methodTable["Background"] = function(msg) {
    var spaceRoot = this.createOrReturnSpaceRoot(msg.spaceid);
    var filter = spaceRoot.mFilter;
    var filterTextures = spaceRoot.mFilterTextures;
    var filterTextureNames = spaceRoot.mFilterTextureNames;
    if(!filter || spaceRoot.mSunBeams != msg.sunbeams) {
      spaceRoot.mSunBeams = msg.sunbeams;
      filterTextures = spaceRoot.mFilterTextures = [];
      filterTextureNames = spaceRoot.mFilterTextureNames = [];
      filter = new GLGE.Filter2d;
      spaceRoot.mScene.setFilter2d(filter);
      if(msg.sunbeams) {
        filter.addPass(layer0_glsl, 1024, 1024);
        filter.addPass(layer1_glsl, 1024, 1024);
        filter.addPass(layer2_glsl)
      }else {
        filter.addPass(layer0_glsl, 1024, 1024);
        filter.addPass(layer2_no_sunbeams_glsl)
      }
    }
    var allSame = filterTextureNames.length == msg.curtextures.length * 2;
    filterTextureNames.length = msg.curtextures.length * 2;
    for(var i = 0;i < msg.curtextures.length * 2;++i) {
      var texName = msg.curtextures[i >> 1];
      if(msg.prevtextures && i % 2 != 0) {
        texName = msg.prevTextures[i >> 1]
      }
      if(filterTextureNames[i] != texName) {
        allSame = false;
        filterTextureNames[i] = texName
      }
    }
    if(!allSame) {
      var i;
      for(i = 0;i < filterTextures.length;++i) {
        filter.removeTexture(filterTextures[i])
      }
      filterTextures.length = 0;
      var memoizedTextures = {};
      for(i = 0;i < filterTextureNames.length;++i) {
        if(filterTextureNames[i] in memoizedTextures) {
          filterTextures[i] = memoizedTextures[filterTextureNames[i]]
        }else {
          filterTextures[i] = new GLGE.Texture;
          filterTextures[i].setSrc(filterTextureNames[i]);
          memoizedTextures[filterTextureNames[i]] = filterTextures[i];
          filter.addTexture(filterTextures[i])
        }
      }
    }
    if((!msg.curtextures || msg.curtextures && msg.curtextures.length == 0) && (!msg.prevtextures || msg.prevtextures.length == 0)) {
      spaceRoot.mFilter = null;
      spaceRoot.mScene.setFilter2d(null);
      spaceRoot.mScene.setBackgroundColor("#222")
    }else {
      spaceRoot.mScene.setBackgroundColor("#f0f");
      spaceRoot.mFilter = filter
    }
  };
  GLGEGraphics.prototype.methodTable["DetachCamera"] = function(msg) {
    if(msg.id in this.mObjects) {
      var cam = this.mObjects[msg.id];
      cam.detachRenderTarget(this.mCurTime)
    }
  };
  GLGEGraphics.prototype.methodTable["DestroyCamera"] = function(msg) {
    if(msg.id in this.mObjects) {
      var vwObject = this.mObjects[msg.id];
      vwObject.destroyCamera()
    }
  };
  GLGEGraphics.prototype.methodTable["Enable"] = function(msg) {
    if(msg.type) {
      this._enabledEvents[msg.type] = true
    }
  };
  GLGEGraphics.prototype.methodTable["Disable"] = function(msg) {
    if(this._enabledEvents[msg.type]) {
      delete this._enabledEvents[msg.type]
    }
  };
  GLGEGraphics.prototype.methodTable["Highlight"] = function(msg) {
    var obj = this.mObjects[msg.id];
    if(obj) {
      if(msg.enable) {
        obj.setHighlight(true)
      }else {
        obj.setHighlight(false)
      }
    }
  };
  GLGEGraphics.prototype.methodTable["Shadows"] = function(msg) {
    var obj = this.mObjects[msg.id];
    if(obj) {
      var spaceRoot = this.createOrReturnSpaceRoot(msg.spaceid);
      var lights = spaceRoot.mScene.getLights();
      var index = 0;
      if(msg.index !== undefined) {
        index = msg.index;
        if(msg.index < 0) {
          index += lights.length
        }
      }
      if(lights.length) {
        if(msg.enable) {
          for(var i = 0;i < lights.length;++i) {
            var ligh = lights[(i + index) % lights.length];
            if(ligh.id.indexOf("shadowlight") != -1) {
              ligh.enableLight()
            }
            if(ligh.id.indexOf("mainlight") != -1) {
              ligh.disableLight()
            }else {
              if(ligh.getType() == GLGE.L_SPOT) {
                ligh.setCastShadows(true);
                break
              }
            }
          }
        }else {
          for(var j = 0;j < lights.length;++j) {
            var ligh = lights[j];
            if(ligh.id.indexOf("shadowlight") != -1) {
              ligh.disableLight()
            }
            if(ligh.id.indexOf("mainlight") != -1) {
              ligh.enableLight()
            }
          }
          if(msg.index !== undefined) {
            lights[index % lights.length].setCastShadows(false)
          }else {
            for(var j = 0;j < lights.length;++j) {
              lights[j].setCastShadows(false)
            }
          }
        }
      }
    }
  };
  GLGEGraphics.prototype.methodTable["IFrame"] = function(msg) {
  };
  GLGEGraphics.prototype.methodTable["DestroyIFrame"] = function(msg) {
  };
  GLGEGraphics.prototype.methodTable["CaptureCanvas"] = function(msg) {
    if(msg.still) {
      this.mDoCaptureCanvas += 1
    }else {
      try {
        var msg = {msg:"canvasCapture", img:this.mClientElement.toDataURL()}
      }catch(e) {
        var msg = {msg:"canvasCapture", img:""}
      }
      this._inputCb(msg)
    }
  };
  Kata.GraphicsSimulation.registerDriver("GLGE", GLGEGraphics)
}, "katajs/gfx/glgegfx.js");
var TextGraphics = function(callbackFunction, parentElement) {
  var thus = this;
  this.callback = callbackFunction;
  this.parent = parentElement;
  this.methodTable = {};
  var returnObjById = function(id) {
    if(document.getElementById) {
      var returnVar = document.getElementById(id)
    }else {
      if(document.all) {
        var returnVar = document.all[id]
      }else {
        if(document.layers) {
          var returnVar = document.layers[id]
        }
      }
    }
    return returnVar
  };
  this.methodTable["Create"] = function(msg) {
    var div = document.createElement("div");
    div.style.padding = "0.0em";
    div.style.position = "absolute";
    div.style.border = "solid 10px #10107c";
    div.style.backgroundColor = "#000008";
    div.style.width = "300px";
    div.style.height = "300px";
    div.style.color = "#ffffff";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.zIndex = "1";
    div.id = msg.id;
    if(msg.parent) {
      var element = returnObjById(msg.parent);
      if(element) {
        element.appendChild(div)
      }else {
        parentElement.appendChild(div)
      }
    }else {
      parentElement.appendChild(div)
    }
    div.innerHTML = '<p class="alignleft">Object Properties</p>';
    thus.methodTable["Move"](msg)
  };
  this.methodTable["Move"] = function(msg) {
    var element = returnObjById(msg.id);
    if(msg.pos && msg.pos.length == 3) {
      element.style.left = msg.pos[0] * 10 + "px";
      element.style.top = msg.pos[1] * 10 + "px";
      element.style.zIndex = msg.pos[2];
      element.style.borderColor = "rgb(" + msg.pos[2] * 10 + "," + msg.pos[2] * 10 + ",124)"
    }
    if(msg.scale) {
      var xscale = Math.sqrt(msg.scale[0] * msg.scale[0] + msg.scale[1] * msg.scale[1]);
      var yscale = Math.sqrt(msg.scale[0] * msg.scale[0] + msg.scale[2] * msg.scale[2]);
      element.style.width = 300 * xscale + "px";
      element.style.height = 300 * yscale + "px"
    }
  };
  this.methodTable["Destroy"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      div.parentNode.removeChild(div)
    }
  };
  var getOrCreateP = function(elementName) {
    var q = returnObjById(elementName);
    if(q) {
    }else {
      q = document.createElement("p");
      q.id = elementName
    }
    return q
  };
  this.methodTable["MeshShaderUniform"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = getOrCreateP("Uniform" + msg.name + msg.id);
      q.innerHTML = "Uniform " + msg.name + "=" + msg.value;
      div.appendChild(q)
    }
  };
  this.methodTable["Mesh"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = getOrCreateP("Mesh" + msg.id);
      q.innerHTML = "Mesh " + msg.mesh;
      div.appendChild(q)
    }
  };
  var destroyX = function(msg, X) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = returnObjById(X + msg.id);
      if(q) {
        div.removeChild(q)
      }
    }
  };
  this.methodTable["DestroyMesh"] = function(msg) {
    destroyX(msg, "Mesh")
  };
  this.methodTable["Light"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = getOrCreateP("Light" + msg.id);
      q.innerHTML = "Light " + msg.type;
      div.appendChild(q)
    }
  };
  this.methodTable["DestroyLight"] = function(msg) {
    destroyX(msg, "Light")
  };
  this.methodTable["Camera"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = getOrCreateP("Camera" + msg.id);
      q.innerHTML = "Camera " + msg.primary;
      div.appendChild(q)
    }
  };
  this.methodTable["AttachCamera"] = function(msg) {
    if(msg.id) {
      var div = returnObjById(msg.id);
      if(div) {
        var q = getOrCreateP(msg.texname + "CameraAttachment" + msg.id);
        q.innerHTML = "Camera " + msg.camid + " attached to texture " + msg.texname;
        div.appendChild(q)
      }
    }else {
      destroyX(msg, msg.texname + "CameraAttachment")
    }
  };
  this.methodTable["DestroyCamera"] = function(msg) {
    destroyX(msg, "Camera")
  };
  this.methodTable["IFrame"] = function(msg) {
    var div = returnObjById(msg.id);
    if(div) {
      var q = returnObjById("IFrame" + msg.id);
      if(q) {
      }else {
        q = document.createElement("iframe");
        q.id = "IFrame" + msg.id
      }
      q.setAttribute("src", msg.uri);
      div.appendChild(q)
    }
  };
  this.methodTable["DestroyIFrame"] = function(msg) {
    destroyX(msg, "IFrame")
  };
  this._testInputCounter = 0;
  this.send = function(obj) {
    if(obj.msg == "Create" || obj.msg == "Camera" || obj.msg == "AttachCamera") {
      console.log("ENVJSTEST:", obj.msg, obj.id)
    }
    if(obj.msg == "Move") {
      console.log("ENVJSTEST:", obj.msg, obj.id, obj.pos, obj.orient, obj.vel, obj.scale)
    }
    if(obj.msg == "Mesh") {
      console.log("ENVJSTEST:", obj.msg, obj.id, obj.mesh)
    }
    console.log("TextGraphics.send:", obj.msg, obj.id, obj, "--------------------");
    console.show && console.show(obj, "TextGraphics.send:");
    var msg;
    if(this._testInputCounter++ == 4) {
      msg = {msg:"keydown", event:{keyCode:65, shiftKey:false}};
      if(this._inputCb) {
        this._inputCb(msg)
      }
    }
    if(this._testInputCounter == 8) {
      msg = {msg:"mousemove", event:{x:180, y:100}};
      if(this._inputCb) {
        this._inputCb(msg)
      }
    }
    if(this._testInputCounter == 10) {
      msg = {msg:"mousedown", event:{which:0}};
      if(this._inputCb) {
        this._inputCb(msg)
      }
    }
    return this.methodTable[obj.msg](obj)
  };
  this.setInputCallback = function(cb) {
    this._inputCb = cb
  };
  this.destroy = function() {
  }
};
Kata.require(["katajs/oh/GraphicsSimulation.js"], function() {
  Kata.GraphicsSimulation.registerDriver("text", TextGraphics)
}, "katajs/gfx/TextGraphics.js");
var layer0_glsl = "#version 100\n" + "\n" + "precision highp float;\n" + "\n" + "uniform sampler2D GLGE_RENDER;\n" + "varying vec2 texCoord;\n" + "\n" + "void main(void){\n" + "\tvec4 color = texture2D(GLGE_RENDER, texCoord);\n" + "\n" + "\tfloat intensity = 0.0;\n" + "\tif(color.r==1.0 && color.g==0.0 && color.b==1.0) intensity=1.0;\n" + "\tgl_FragColor = vec4(vec3(intensity),1.0);\n" + "}\n";
var layer1_glsl = "#version 100\n" + "\n" + "precision highp float;\n" + "\n" + "uniform sampler2D GLGE_RENDER;\n" + "uniform sampler2D GLGE_PASS0;\n" + "uniform vec3 lightpos;\n" + "varying vec2 texCoord;\n" + "\n" + "void main(void){\n" + "\tfloat intensity=0.0;\n" + "\tvec2 lightvec=texCoord-lightpos.xy;\n" + "\tlightvec=lightvec*(1.0-clamp(length(lightvec),0.0,1.0));\n" + "\tif((lightpos.z)>0.0){\n" + "\t\tfor(int i=1;i<30;i++){\n" + "\t\t\tintensity+=texture2D(GLGE_PASS0, texCoord-lightvec*0.045*float(i)).r*pow(length(lightvec),2.5);\n" + 
"\t\t}\n" + "\t}\n" + "\tintensity+=texture2D(GLGE_PASS0, texCoord).r;\n" + "\tgl_FragColor = vec4(vec3(intensity),1.0);\n" + "}\n";
var layer2_glsl = "#version 100\n" + "\n" + "precision highp float;\n" + "\n" + "uniform sampler2D GLGE_RENDER;\n" + "uniform sampler2D GLGE_PASS1;\n" + "uniform sampler2D TEXTURE0;\n" + "uniform vec3 lightpos;\n" + "uniform mat4 invProjView;\n" + "\n" + "varying vec2 texCoord;\n" + "\n" + "vec3 result=vec3(0.0,0.0,0.0);\n" + "vec3 suncolor=vec3(0.9,0.9,0.8);\n" + "\n" + "void main(void){\n" + "\tvec2 lightvec=texCoord-lightpos.xy;\n" + "\tfloat lightdist=length(lightvec*vec2(1.0,0.444));\n" + "\tvec3 suncolor=(1.0-pow(lightdist,0.1))*suncolor;\n" + 
"\tif(lightdist<0.005) suncolor=suncolor*pow((0.005-lightdist)/0.005+1.0,2.0);\n" + "\tif(lightpos.z<0.0) suncolor=vec3(0.0);\n" + "\tfloat intensity=texture2D(GLGE_PASS1,texCoord).r;\n" + "\tvec3 col=texture2D(GLGE_RENDER,texCoord).rgb+vec3(0.1,0.1,0.1);\n" + "\tif(col.r==1.1 && col.b==1.1 && col.g==0.1) intensity=1.0;\n" + "\tvec4 skycoord=invProjView*vec4(vec3((texCoord-0.5)*2.0,0.0),1.0);\n" + "\tskycoord=invProjView*vec4(vec3((texCoord-0.5)*2.0,1.0),1.0);\n" + "\tskycoord.xyz=normalize(skycoord.xyz/skycoord.w);\n" + 
"    skycoord.xyz=skycoord.xzy;\n" + "    skycoord.y=-skycoord.y;\n" + "\t//result=max(suncolor,0.0)/0.4;\n" + "\tresult=max(suncolor,0.0)/0.4+texture2D(TEXTURE0,(skycoord.xy/(1.4+skycoord.z)+1.0)/2.0).rgb*intensity+texture2D(GLGE_RENDER,texCoord).rgb*(1.0-intensity);\n" + "\tif(intensity<1.0) result=suncolor*intensity*5.5+vec3(pow(col.r,2.0),pow(col.g,2.0),pow(col.b,2.0));\t\n" + "\tgl_FragColor = vec4(result,1.0);\t\n" + "}\t\n";
var layer2_no_sunbeams_glsl = "#version 100\n" + "\n" + "precision highp float;\n" + "\n" + "uniform sampler2D GLGE_RENDER;\n" + "uniform sampler2D GLGE_PASS0;\n" + "uniform sampler2D TEXTURE0;\n" + "uniform vec3 lightpos;\n" + "uniform mat4 invProjView;\n" + "\n" + "varying vec2 texCoord;\n" + "\n" + "vec3 result=vec3(0.0,0.0,0.0);\n" + "vec3 suncolor=vec3(0.9,0.9,0.8);\n" + "\n" + "void main(void){\n" + "\tvec2 lightvec=texCoord-lightpos.xy;\n" + "\tfloat lightdist=length(lightvec*vec2(1.0,0.444));\n" + 
"\tvec3 suncolor=(1.0-pow(lightdist,0.1))*suncolor;\n" + "\tif(lightdist<0.005) suncolor=suncolor*pow((0.005-lightdist)/0.005+1.0,2.0);\n" + "\tif(lightpos.z<0.0) suncolor=vec3(0.0);\n" + "\tfloat intensity=texture2D(GLGE_PASS0,texCoord).r;\n" + "\tvec3 col=texture2D(GLGE_RENDER,texCoord).rgb+vec3(0.1,0.1,0.1);\n" + "\tif(col.r==1.1 && col.b==1.1 && col.g==0.1) intensity=1.0;\n" + "\tvec4 skycoord=invProjView*vec4(vec3((texCoord-0.5)*2.0,0.0),1.0);\n" + "\tskycoord=invProjView*vec4(vec3((texCoord-0.5)*2.0,1.0),1.0);\n" + 
"\tskycoord.xyz=normalize(skycoord.xyz/skycoord.w);\n" + "    skycoord.xyz=skycoord.xzy;\n" + "    skycoord.y=-skycoord.y;\n" + "\t//result=max(suncolor,0.0)/0.4;\n" + "\tresult=max(suncolor,0.0)/0.4+texture2D(TEXTURE0,(skycoord.xy/(1.4+skycoord.z)+1.0)/2.0).rgb*intensity+texture2D(GLGE_RENDER,texCoord).rgb*(1.0-intensity);\n" + "\tif(intensity<1.0) result=suncolor*intensity*5.5+vec3(pow(col.r,2.0),pow(col.g,2.0),pow(col.b,2.0));\t\n" + "\tgl_FragColor = vec4(result,1.0);\t\n" + "}\t\n";
Kata.require([], function() {
  Kata.Channel = function() {
  };
  Kata.Channel.prototype.registerListener = function(listener) {
    if(!listener.call) {
      if(network_debug) {
        Kata.log("Listener call type is " + typeof listener)
      }
      if(network_debug) {
        Kata.log("Listener constructor type is " + listener.constructor)
      }
      throw"Error in registerListener: not a function";
    }
    if(!this.mListener) {
      this.mListener = listener
    }else {
      if(this.mListener instanceof Array) {
        this.mListener.push(listener)
      }else {
        this.mListener = [this.mListener, listener]
      }
    }
  };
  Kata.Channel.prototype.unregisterListener = function(listener) {
    if(listener == this.mListener) {
      delete this.mListener;
      return true
    }
    if(this.mListener instanceof Array) {
      for(var i = 0;i < this.mListener.length;++i) {
        if(this.mListener[i] == listener) {
          for(var j = i;j + 1 < this.mListener.length;++j) {
            this.mListener[j] = this.mListener[j + 1]
          }
          this.mListener.pop();
          return true
        }
      }
    }
    return false
  };
  Kata.Channel.prototype.callListeners = function(data) {
    if(Kata.debugMessage(this, data)) {
      return
    }
    if(!this.mListener) {
      Kata.error("Kata.Channel mListener not set");
      return
    }
    if(this.mListener.call) {
      this.mListener(this, data)
    }else {
      for(var i = 0;i < this.mListener.length;i++) {
        this.mListener[i](this, data)
      }
    }
  };
  Kata.Channel.prototype.sendMessage = null
}, "katajs/core/Channel.js");
(function() {
  Kata.Deque = function() {
    this.mSize = 0;
    this.mHead = 0;
    this.mArray = new Array(8)
  };
  Kata.Deque.prototype.expand = function() {
    var oldLength = this.mArray.length;
    this.mArray.length = Math.round(oldLength * 1.5);
    var numWrapped = this.mSize + this.mHead - oldLength;
    for(var i = 0;i < numWrapped;i++) {
      this.mArray[(i + oldLength) % this.mArray.length] = this.mArray[i]
    }
  };
  Kata.Deque.prototype.push_back = function(e) {
    if(this.mSize >= this.mArray.length) {
      this.expand()
    }
    var destIndex = this.mHead + this.mSize;
    if(destIndex >= this.mArray.length) {
      destIndex -= this.mArray.length
    }
    this.mSize++;
    this.mArray[destIndex] = e
  };
  Kata.Deque.prototype.push_front = function(e) {
    if(this.mSize >= this.mArray.length) {
      this.expand()
    }
    var destIndex = this.mHead;
    if(destIndex == 0) {
      destIndex = this.mArray.length
    }
    destIndex--;
    this.mHead = destIndex;
    this.mSize++;
    this.mArray[destIndex] = e
  };
  Kata.Deque.prototype.index = function(y) {
    var destIndex = this.mHead + y;
    if(destIndex >= this.mArray.length) {
      destIndex -= this.mArray.length
    }
    return this.mArray[destIndex]
  };
  Kata.Deque.prototype.back = function() {
    var destIndex = this.mHead + this.mSize - 1;
    if(destIndex >= this.mArray.length) {
      destIndex -= this.mArray.length
    }
    return this.mArray[destIndex]
  };
  Kata.Deque.prototype.pop_back = function() {
    if(this.mSize == 0) {
      return undefined
    }
    var destIndex = this.mHead + this.mSize - 1;
    if(destIndex >= this.mArray.length) {
      destIndex -= this.mArray.length
    }
    var retval = this.mArray[destIndex];
    this.mArray[destIndex] = null;
    this.mSize--;
    return retval
  };
  Kata.Deque.prototype.pop_front = function(e) {
    if(this.mSize == 0) {
      return undefined
    }
    var retval = this.mArray[this.mHead];
    this.mArray[this.mHead] = null;
    this.mHead++;
    this.mSize -= 1;
    if(this.mHead >= this.mArray.length) {
      this.mHead -= this.mArray.length
    }
    return retval
  };
  Kata.Deque.prototype.front = function() {
    var destIndex = this.mHead;
    return this.mArray[destIndex]
  };
  Kata.Deque.prototype.empty = function() {
    return this.mSize == 0
  };
  Kata.Deque.prototype.size = function() {
    return this.mSize
  };
  Kata.Deque.prototype.clear = function() {
    Kata.Deque.call(this)
  };
  Kata.Deque.prototype.erase = function(index) {
    for(var i = this.mHead + index;i + 1 < this.mSize;++i) {
      this.mArray[i] = this.mArray[i + 1]
    }
    this.pop_back()
  }
})();
Kata.require(["katajs/core/Channel.js"], function() {
  Kata.FilterChannel = function(channel, filter) {
    this._channel = channel;
    this._filter = filter;
    this._channel.registerListener(Kata.bind(this._filterMessage, this))
  };
  var SUPER = Kata.Channel.prototype;
  Kata.extend(Kata.FilterChannel, SUPER);
  Kata.FilterChannel.prototype.callListeners = function(data) {
    if(!this._filter(this, data)) {
      SUPER.callListeners.apply(this, [data])
    }
  };
  Kata.FilterChannel.prototype.sendMessage = function(data) {
    this._channel.sendMessage(data)
  };
  Kata.FilterChannel.prototype._filterMessage = function(channel, msg) {
    this.callListeners(msg)
  }
}, "katajs/core/FilterChannel.js");
var Kata_Vector;
var Kata_Location;
var Kata_LocationMsg;
var Kata_Date;
Kata.require([], function() {
  Kata.LocationIdentityNow = function() {
    return Kata.LocationIdentity(Date.now())
  };
  Kata.LocationIdentity = function(time) {
    return{scale:[0, 0, 0, 1], scaleTime:time, pos:[0, 0, 0], posTime:time, orient:[0, 0, 0, 1], orientTime:time, vel:[0, 0, 0], rotaxis:[0, 0, 1], rotvel:0}
  };
  Kata.deltaTime = function(newTime, oldTime) {
    return(newTime - oldTime) * 0.001
  };
  Kata._helperLocationExtrapolate3vec = function(a, adel, deltaTime) {
    return[a[0] + adel[0] * deltaTime, a[1] + adel[1] * deltaTime, a[2] + adel[2] * deltaTime]
  };
  Kata._helperQuatFromAxisAngle = function(aaxis, aangle) {
    var sinHalf = Math.sin(aangle / 2);
    var cosHalf = Math.cos(aangle / 2);
    return[sinHalf * aaxis[0], sinHalf * aaxis[1], sinHalf * aaxis[2], cosHalf]
  };
  Kata.extrapolateQuaternion = function(a, avel, aaxis, deltaTime) {
    var aangle = avel * deltaTime;
    var b = Kata._helperQuatFromAxisAngle(aaxis, aangle);
    var aX = a[0];
    var aY = a[1];
    var aZ = a[2];
    var aW = a[3];
    var bX = b[0];
    var bY = b[1];
    var bZ = b[2];
    var bW = b[3];
    return[aW * bX + aX * bW + aY * bZ - aZ * bY, aW * bY + aY * bW + aZ * bX - aX * bZ, aW * bZ + aZ * bW + aX * bY - aY * bX, aW * bW - aX * bX - aY * bY - aZ * bZ]
  };
  Kata._helperLocationInterpolate3vec = function(a, adel, atime, b, bdel, btime, curtime) {
    var secondsPassed = Kata.deltaTime(curtime, atime);
    if(secondsPassed > 0) {
      return Kata._helperLocationExtrapolate3vec(a, adel, secondsPassed)
    }
    var sampleDelta = Kata.deltaTime(atime, btime);
    if(sampleDelta == 0) {
      return Kata._helperLocationExtrapolate3vec(a, adel, secondsPassed)
    }
    secondsPassed += sampleDelta;
    if(secondsPassed < 0) {
      return b
    }
    b = Kata._helperLocationExtrapolate3vec(b, bdel, secondsPassed);
    var interp = secondsPassed / sampleDelta;
    var ointerp = 1 - interp;
    return[interp * a[0] + ointerp * b[0], interp * a[1] + ointerp * b[1], interp * a[2] + ointerp * b[2]]
  };
  Kata._helperLocationInterpolateNoVel4vec = function(a, atime, b, btime, curtime) {
    var secondsPassed = Kata.deltaTime(curtime, atime);
    if(secondsPassed > 0) {
      return a
    }
    var sampleDelta = Kata.deltaTime(atime, btime);
    if(sampleDelta == 0) {
      return a
    }
    secondsPassed += sampleDelta;
    if(secondsPassed < 0) {
      return b
    }
    var interp = secondsPassed / sampleDelta;
    var ointerp = 1 - interp;
    return[interp * a[0] + ointerp * b[0], interp * a[1] + ointerp * b[1], interp * a[2] + ointerp * b[2], interp * a[3] + ointerp * b[3]]
  };
  Kata._helperLocationInterpolateQuaternion = function(a, avel, aaxis, atime, b, bvel, baxis, btime, curtime) {
    var secondsPassed = Kata.deltaTime(curtime, atime);
    if(secondsPassed > 0) {
      return Kata.extrapolateQuaternion(a, avel, aaxis, secondsPassed)
    }
    var sampleDelta = Kata.deltaTime(atime, btime);
    if(sampleDelta == 0) {
      return Kata.extrapolateQuaternion(a, avel, aaxis, secondsPassed)
    }
    secondsPassed += sampleDelta;
    if(secondsPassed < 0) {
      return b
    }
    b = Kata.extrapolateQuaternion(b, bvel, baxis, secondsPassed);
    var interp = secondsPassed / sampleDelta;
    var ointerp = 1 - interp;
    var x = interp * a[0] + ointerp * b[0];
    var y = interp * a[1] + ointerp * b[1];
    var z = interp * a[2] + ointerp * b[2];
    var w = interp * a[3] + ointerp * b[3];
    var len = Math.sqrt(w * w + x * x + y * y + z * z);
    if(len < 1.0E-20) {
      return[x, y, z, w]
    }
    return[x / len, y / len, z / len, w / len]
  };
  Kata.LocationInterpolate = function(location, prevLocation, time) {
    return{scale:Kata._helperLocationInterpolateNoVel4vec(location.scale, location.scaleTime, prevLocation.scale, prevLocation.scaleTime, time), scaleTime:time, pos:Kata._helperLocationInterpolate3vec(location.pos, location.vel, location.posTime, prevLocation.pos, prevLocation.vel, prevLocation.posTime, time), posTime:time, orient:Kata._helperLocationInterpolateQuaternion(location.orient, location.rotvel, location.rotaxis, location.orientTime, prevLocation.orient, prevLocation.rotvel, prevLocation.rotaxis, 
    prevLocation.orientTime, time), orientTime:time, rotvel:location.rotvel, rotaxis:location.rotaxis, vel:location.vel}
  };
  Kata.LocationTriTimeInterpolate = function(location, prevLocation, posTime, orientTime, scaleTime) {
    return{scale:Kata._helperLocationInterpolateNoVel4vec(location.scale, location.scaleTime, prevLocation.scale, prevLocation.scaleTime, scaleTime), scaleTime:scaleTime, pos:Kata._helperLocationInterpolate3vec(location.pos, location.vel, location.posTime, prevLocation.pos, prevLocation.vel, prevLocation.posTime, posTime), posTime:posTime, orient:Kata._helperLocationInterpolateQuaternion(location.orient, location.rotvel, location.rotaxis, location.orientTime, prevLocation.orient, prevLocation.rotvel, 
    prevLocation.rotaxis, prevLocation.orientTime, orientTime), orientTime:orientTime, rotvel:location.rotvel, rotaxis:location.rotaxis, vel:location.vel}
  };
  Kata.LocationExtrapolate = function(location, time) {
    return{scale:location.scale, scaleTime:time, pos:Kata._helperLocationExtrapolate3vec(location.pos, location.vel, Kata.deltaTime(time, location.posTime)), posTime:time, orient:Kata.extrapolateQuaternion(location.orient, location.rotvel, location.rotaxis, Kata.deltaTime(time, location.orientTime)), orientTime:time, rotvel:location.rotvel, rotaxis:location.rotaxis, vel:location.vel}
  };
  Kata.LocationCopyUnifyTime = function(msg, destination) {
    if(msg.time !== undefined) {
      destination.time = msg.time;
      if(msg.scale !== undefined) {
        destination.scale = Kata.Vec4Dup(msg.scale)
      }
      if(msg.pos !== undefined) {
        destination.pos = Kata.Vec3Dup(msg.pos)
      }
      if(msg.orient !== undefined) {
        destination.orient = new Kata.Quaternion(msg.orient)
      }
      if(msg.rotvel !== undefined && msg.rotaxis !== undefined) {
        destination.rotvel = msg.rotvel;
        destination.rotaxis = Kata.Vec3Dup(msg.rotaxis)
      }
      if(msg.vel !== undefined) {
        destination.vel = Kata.Vec3Dup(msg.vel)
      }
    }else {
      var t = msg.scaleTime;
      if(t === undefined || msg.posTime >= t) {
        t = msg.posTime
      }
      if(t === undefined || msg.orientTime >= t) {
        t = msg.orientTime
      }
      if(msg.scale !== undefined) {
        destination.scale = Kata.Vec4Dup(msg.scale)
      }
      if(msg.pos !== undefined) {
        if(msg.vel && msg.posTime) {
          destination.pos = Kata._helperLocationExtrapolate3vec(msg.pos, msg.vel, Kata.deltaTime(t, msg.posTime))
        }else {
          destination.pos = Kata.Vec3Dup(msg.pos)
        }
      }
      if(msg.orient !== undefined) {
        if(msg.rotvel !== undefined && msg.rotaxis !== undefined && msg.orientTime !== undefined) {
          destination.orient = Kata.extrapolateQuaternion(msg.orient, msg.rotvel, msg.rotaxis, Kata.deltaTime(t, msg.orientTime))
        }else {
          destination.orient = new Kata.Quaternion(msg.orient)
        }
      }
      if(msg.rotvel !== undefined && msg.rotaxis !== undefined) {
        destination.rotvel = msg.rotvel;
        destination.rotaxis = Kata.Vec3Dup(msg.rotaxis)
      }
      if(msg.vel !== undefined) {
        destination.vel = Kata.Vec3Dup(msg.vel)
      }
      destination.time = t
    }
  };
  Kata.LocationSet = function(msg) {
    if(msg.time == undefined) {
      msg.time = Date.now()
    }
    if(msg.scale == undefined) {
      msg.scale = [0, 0, 0, 1]
    }
    if(msg.vel == undefined) {
      msg.vel = [0, 0, 0]
    }
    if(msg.rotaxis == undefined) {
      msg.rotaxis = [0, 0, 1]
    }
    if(msg.rotvel == undefined) {
      msg.rotvel = 0
    }
    if(msg.orient == undefined) {
      msg.orient = [0, 0, 0, 1]
    }
    return{scale:msg.scale, scaleTime:msg.time, pos:msg.pos, posTime:msg.time, orient:msg.orient, orientTime:msg.time, vel:msg.vel, rotaxis:msg.rotaxis, rotvel:msg.rotvel}
  };
  Kata.LocationUpdate = function(msg, curLocation, prevLocation, curDate) {
    if(!prevLocation) {
      prevLocation = curLocation
    }
    var retval = {scale:curLocation.scale, scaleTime:curLocation.scaleTime, pos:curLocation.pos, posTime:curLocation.posTime, orient:curLocation.orient, orientTime:curLocation.orientTime, vel:curLocation.vel, rotaxis:curLocation.rotaxis, rotvel:curLocation.rotvel};
    if(msg.pos && msg.time && msg.time >= curLocation.posTime) {
      retval.pos = msg.pos;
      retval.posTime = msg.time
    }else {
      if(msg.vel && msg.time && msg.time >= curLocation.posTime) {
        retval.pos = Kata._helperLocationExtrapolate3vec(curLocation.pos, curLocation.vel, Kata.deltaTime(msg.time, curLocation.posTime));
        retval.posTime = msg.time
      }
    }
    if(msg.vel && msg.time && msg.time >= curLocation.posTime) {
      retval.vel = msg.vel
    }else {
      curLocation.vel = prevLocation.vel
    }
    if(msg.orient && msg.time && msg.time >= curLocation.orientTime) {
      retval.orient = msg.orient;
      retval.orientTime = msg.time
    }else {
      if(msg.rotvel !== undefined && msg.rotaxis !== undefined) {
        retval.orient = Kata.extrapolateQuaternion(curLocation.orient, curLocation.rotvel, curLocation.rotaxis, Kata.deltaTime(msg.time, curLocation.orientTime));
        retval.orientTime = msg.time
      }
    }
    if(msg.rotvel !== undefined && msg.rotaxis !== undefined && msg.time !== undefined && msg.time >= curLocation.orientTime) {
      retval.rotaxis = msg.rotaxis;
      retval.rotvel = msg.rotvel
    }else {
      retval.rotaxis = curLocation.rotaxis;
      retval.rotvel = curLocation.rotvel
    }
    if(msg.scale && msg.time && msg.time >= curLocation.scaleTime) {
      retval.scale = msg.scale;
      retval.scaleTime = msg.time
    }else {
      retval.scale = curLocation.scale;
      retval.scaleTime = curLocation.scaleTime
    }
    return retval
  };
  Kata.LocationReset = function(msg, curLocation) {
    if(msg.scale !== undefined) {
      curLocation.scale = msg.scale;
      curLocation.scaleTime = msg.time
    }
    if(msg.pos !== undefined) {
      curLocation.pos = msg.pos;
      curLocation.posTime = msg.time
    }
    if(msg.vel !== undefined) {
      curLocation.vel = msg.vel
    }
    if(msg.rotvel !== undefined && msg.rotaxis !== undefined) {
      curLocation.rotaxis = msg.rotaxis
    }
    if(msg.orient !== undefined) {
      curLocation.orient = msg.orient;
      curLocation.orientTime = msg.time
    }
  };
  Kata.QuaternionMulQuaternion = function(a, b) {
    var aX = a[0];
    var aY = a[1];
    var aZ = a[2];
    var aW = a[3];
    var bX = b[0];
    var bY = b[1];
    var bZ = b[2];
    var bW = b[3];
    return[aW * bX + aX * bW + aY * bZ - aZ * bY, aW * bY + aY * bW + aZ * bX - aX * bZ, aW * bZ + aZ * bW + aX * bY - aY * bX, aW * bW - aX * bX - aY * bY - aZ * bZ]
  };
  Kata.QuaternionToRotation = function(q) {
    var qX = q[0];
    var qY = q[1];
    var qZ = q[2];
    var qW = q[3];
    var qWqW = qW * qW;
    var qWqX = qW * qX;
    var qWqY = qW * qY;
    var qWqZ = qW * qZ;
    var qXqW = qX * qW;
    var qXqX = qX * qX;
    var qXqY = qX * qY;
    var qXqZ = qX * qZ;
    var qYqW = qY * qW;
    var qYqX = qY * qX;
    var qYqY = qY * qY;
    var qYqZ = qY * qZ;
    var qZqW = qZ * qW;
    var qZqX = qZ * qX;
    var qZqY = qZ * qY;
    var qZqZ = qZ * qZ;
    var d = qWqW + qXqX + qYqY + qZqZ;
    return[[(qWqW + qXqX - qYqY - qZqZ) / d, 2 * (qWqZ + qXqY) / d, 2 * (qXqZ - qWqY) / d, 0], [2 * (qXqY - qWqZ) / d, (qWqW - qXqX + qYqY - qZqZ) / d, 2 * (qWqX + qYqZ) / d, 0], [2 * (qWqY + qXqZ) / d, 2 * (qYqZ - qWqX) / d, (qWqW - qXqX - qYqY + qZqZ) / d, 0], [0, 0, 0, 1]]
  };
  Kata.Vec3Dup = function(a) {
    return[a[0], a[1], a[2]]
  };
  Kata.Vec4Dup = function(a) {
    return[a[0], a[1], a[2], a[3]]
  };
  Kata.Vec3Cross = function(a, b) {
    return[a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
  };
  Kata.Vec3Add = function(a, b) {
    return[a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  };
  Kata.Vec3Sub = function(a, b) {
    return[a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  };
  Kata.Vec3Scale = function(a, b) {
    return[a[0] * b, a[1] * b, a[2] * b]
  };
  Kata.Vec4Scale = function(a, b) {
    return[a[0] * b, a[1] * b, a[2] * b, a[3] * b]
  };
  Kata.Vec3Rotate = function(a, v0, v1, v2) {
    return[a[0] * v0[0] + a[1] * v1[0] + a[2] * v2[0], a[0] * v0[1] + a[1] * v1[1] + a[2] * v2[1], a[0] * v0[2] + a[1] * v1[2] + a[2] * v2[2]]
  };
  Kata.LocationCompose = function(loc, prevParentLoc, curParentLoc) {
    var parentLoc = Kata.LocationTriTimeInterpolate(curParentLoc, prevParentLoc, loc.posTime, loc.orientTime, loc.scaleTime);
    var rotation = Kata.QuaternionToRotation(parentLoc.orient);
    var topLevelVelocity = Kata.Vec3Add(Kata.Vec3Add(Kata.Vec3Scale(Kata.Vec3Cross(parentLoc.rotaxis, Kata.Vec3Add(Kata.Vec3Scale(loc.pos, parentLoc.scale[3]), parentLoc.scale)), parentLoc.rotvel), parentLoc.vel), Kata.Vec3Rotate(loc.vel, rotation[0], rotation[1], rotation[2]));
    var topLevelAxis = Kata.Vec3Rotate(loc.rotaxis, rotation[0], rotation[1], rotation[2]);
    var topLevelPos = Kata.Vec3Add(Kata.Vec3Rotate(loc.pos, rotation[0], rotation[1], rotation[2]), parentLoc.pos);
    var topLevelOrient = Kata.QuaternionMulQuaternion(parentLoc.orient, loc.orient);
    var topLevelScale = [loc.scale[0], loc.scale[1], loc.scale[2], loc.scale[3] * parentLoc.scale[3]];
    return{pos:topLevelPos, orient:topLevelOrient, scale:topLevelScale, rotaxis:topLevelAxis, rotvel:loc.rotvel, vel:topLevelVelocity, posTime:loc.posTime, orientTime:loc.orientTime, scaleTime:loc.scaleTime}
  };
  Kata.QuaternionInverse = function(q) {
    var q0 = q[0];
    var q1 = q[1];
    var q2 = q[2];
    var q3 = q[3];
    var d = 1 / (q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3);
    return[-q0 * d, -q1 * d, -q2 * d, q3 * d]
  };
  Kata.LocationInverseCompose = function(loc, prevParentLoc, curParentLoc) {
    var parentLoc = Kata.LocationTriTimeInterpolate(curParentLoc, prevParentLoc, loc.posTime, loc.orientTime, loc.scaleTime);
    var inverseRotation = Kata.QuaternionInverse(parentLoc.orient);
    var rotation = Kata.QuaternionToRotation(inverseRotation);
    var innerVelocity = Kata.Vec3Rotate(Kata.Vec3Add(Kata.Vec3Sub(Kata.Vec3Scale(Kata.Vec3Cross(parentLoc.rotaxis, loc.pos), -parentLoc.rotvel), parentLoc.vel), loc.vel), rotation[0], rotation[1], rotation[2]);
    var innerAxis = Kata.Vec3Rotate(loc.rotaxis, rotation[0], rotation[1], rotation[2]);
    var innerPos = Kata.Vec3Rotate(Kata.Vec3Sub(loc.pos, parentLoc.pos), rotation[0], rotation[1], rotation[2]);
    innerVelocity = Kata.Vec3Scale(innerVelocity, parentLoc.scale[3]);
    innerPos = Kata.Vec3Scale(Kata.Vec3Sub(innerPos, parentLoc.scale), 1 / parentLoc.scale[3]);
    var innerOrient = Kata.QuaternionMulQuaternion(loc.orient, inverseRotation);
    var innerScale = Kata.Vec4Scale(loc.scale, 1 / parentLoc.scale[3]);
    return{pos:innerPos, orient:innerOrient, scale:innerScale, rotaxis:innerAxis, rotvel:loc.rotvel, vel:innerVelocity, posTime:loc.posTime, orientTime:loc.orientTime, scaleTime:loc.scaleTime}
  };
  Kata.LocationReparent = function(loc, oldNode, newNode) {
    var i;
    var oldNodeLength = oldNode.length;
    for(i = 0;i < oldNodeLength;i++) {
      loc = Kata.LocationCompose(loc, oldNode[i][0], oldNode[i][1])
    }
    for(i = newNode.length - 1;i >= 0;i--) {
      loc = Kata.LocationInverseCompose(loc, newNode[i][0], newNode[i][1])
    }
    return loc
  }
}, "katajs/core/Location.js");
Math.uuid = function() {
  var CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return function(len, radix) {
    var chars = CHARS, uuid = [];
    radix = radix || chars.length;
    if(len) {
      for(var i = 0;i < len;i++) {
        uuid[i] = chars[0 | Math.random() * radix]
      }
    }else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for(var i = 0;i < 36;i++) {
        if(!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r]
        }
      }
    }
    return uuid.join("")
  }
}();
Math.uuidV4Bytes = function() {
  var bytearray = new Array(16);
  for(var i = 0;i < 16;i++) {
    var el = 0 | Math.random() * 256;
    if(i == 7) {
      el = el & 15 | 64
    }else {
      if(i == 9) {
        el = el & 243 | 8
      }
    }
    bytearray[i] = el
  }
  return bytearray
};
Math.uuid2 = function() {
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16)
  }).toUpperCase()
};
Kata.require([], function() {
  Kata.MessageDispatcher = function(handlers) {
    this._handlers = handlers
  };
  Kata.MessageDispatcher.prototype.add = function(type, handler) {
    this._handlers[type] = handler
  };
  Kata.MessageDispatcher.prototype.dispatch = function(channel, msg) {
    var mtype = msg.__type;
    if(!this._handlers[mtype]) {
      return false
    }
    this._handlers[mtype](channel, msg);
    return true
  }
}, "katajs/core/MessageDispatcher.js");
Kata.require(["katajs/core/Math.uuid.js"], function() {
  Kata.ObjectID = {};
  Kata.ObjectID.nil = function() {
    return"00000000-0000-0000-0000-000000000000"
  };
  Kata.ObjectID.random = function() {
    return Math.uuid()
  };
  Kata.ObjectID.any = function() {
    return"ffffffff-ffff-ffff-ffff-ffffffffffff"
  }
}, "katajs/core/ObjectID.js");
Kata.require(["katajs/core/SpaceID.js", "katajs/core/ObjectID.js"], function() {
  Kata.PresenceID = function() {
    if(arguments.length == 1) {
      if(arguments[0].mSpace && arguments[0].mObject) {
        this.mSpace = arguments[0].mSpace;
        this.mObject = arguments[0].mObject
      }else {
        throw"Invalid PresenceID constructor arguments.";
      }
    }else {
      if(arguments.length == 2 && arguments[0] && arguments[1]) {
        this.mSpace = arguments[0];
        this.mObject = arguments[1]
      }else {
        throw"Invalid PresenceID constructor arguments.";
      }
    }
  };
  Kata.PresenceID.prototype.space = function() {
    return this.mSpace
  };
  Kata.PresenceID.prototype.object = function() {
    return this.mObject
  };
  Kata.PresenceID.prototype.toString = function() {
    return"PresenceID(" + this.mSpace.toString() + ":" + this.mObject.toString() + ")"
  };
  Kata.PresenceID.nil = function() {
    return new Kata.PresenceID(Kata.SpaceID.nil(), Kata.ObjectID.nil())
  };
  Kata.PresenceID.any = function() {
    return new Kata.PresenceID(Kata.SpaceID.any(), Kata.ObjectID.any())
  }
}, "katajs/core/PresenceID.js");
Kata.require([], function() {
  Kata.Quaternion = function() {
    this.length = 4;
    if(arguments.length == 0) {
      this[0] = 0;
      this[1] = 0;
      this[2] = 0;
      this[3] = 1
    }else {
      if(arguments.length == 1) {
        this[0] = arguments[0][0];
        this[1] = arguments[0][1];
        this[2] = arguments[0][2];
        this[3] = arguments[0][3]
      }else {
        if(arguments.length == 4) {
          this[0] = arguments[0];
          this[1] = arguments[1];
          this[2] = arguments[2];
          this[3] = arguments[3]
        }else {
          throw"Invalid Quaternion constructor arguments.";
        }
      }
    }
  };
  var SUPER = Array.prototype;
  Kata.extend(Kata.Quaternion, SUPER);
  Kata.Quaternion.fromAxisAngle = function(axis, angle) {
    var sinHalfAngle = Math.sin(angle * 0.5);
    return new Kata.Quaternion(sinHalfAngle * axis[0], sinHalfAngle * axis[1], sinHalfAngle * axis[2], Math.cos(angle * 0.5))
  };
  Kata.Quaternion.fromLocationAngularVelocity = function(loc) {
    return Kata.Quaternion.fromAxisAngle(loc.rotaxis, loc.rotvel)
  };
  Kata.Quaternion.identity = function() {
    return new Kata.Quaternion
  };
  Kata.Quaternion.zero = function() {
    return new Kata.Quaternion(0, 0, 0, 0)
  };
  Kata.Quaternion.prototype.array = function() {
    return[this[0], this[1], this[2], this[3]]
  };
  Kata.Quaternion.prototype.toAngleAxis = function() {
    var fSqrLength = this[0] * this[0] + this[1] * this[1] + this[2] * this[2];
    var tmpw = this[3];
    var eps = 1.0E-6;
    if(tmpw > 1 && tmpw < 1 + eps) {
      tmpw = 1
    }
    if(tmpw < -1 && tmpw > -1 - eps) {
      tmpw = -1
    }
    if(fSqrLength > 1.0E-8 && tmpw <= 1 && tmpw >= -1) {
      var returnAngleRadians = 2 * Math.acos(tmpw);
      var len = Math.sqrt(fSqrLength);
      var returnAxis = [this[0] / len, this[1] / len, this[2] / len];
      return{angle:returnAngleRadians, axis:returnAxis}
    }else {
      var returnAngleRadians = 0;
      var returnAxis = [1, 0, 0];
      return{angle:returnAngleRadians, axis:returnAxis}
    }
  };
  Kata.Quaternion.prototype.dot = function(other) {
    return this[0] * other[0] + this[1] * other[1] + this[2] * other[2] + this[3] * other[3]
  };
  Kata.Quaternion.prototype.sizeSquared = function() {
    return this.dot(this)
  };
  Kata.Quaternion.prototype.size = function() {
    return Math.sqrt(this.sizeSquared)
  };
  Kata.Quaternion.prototype.normal = function() {
    var len = this.size();
    if(len > 1.0E-8) {
      return this.scale(1 / len)
    }
    return new Kata.Quaternion(this)
  };
  Kata.Quaternion.prototype.scale = function(s) {
    if(typeof s == "number") {
      return new Kata.Quaternion(this[0] * s, this[1] * s, this[2] * s, this[3] * s)
    }else {
      throw"Don't know how to multiply Quaternion by given object.";
    }
  };
  Kata.Quaternion.prototype.add = function(s) {
    if(typeof s == "number") {
      return new Kata.Quaternion(this[0] + s, this[1] + s, this[2] + s, this[3] + s)
    }else {
      if(s && typeof s.length !== "undefined" && s.length == 4) {
        return new Kata.Quaternion(this[0] + s[0], this[1] + s[1], this[2] + s[2], this[3] + s[3])
      }else {
        throw"Don't know how to multiply Quaternion by given object.";
      }
    }
  };
  Kata.Quaternion.prototype.negate = function() {
    return new Kata.Quaternion(-this[0], -this[1], -this[2], -this[3])
  };
  Kata.Quaternion._vec3_cross = function(a, b) {
    return[a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
  };
  Kata.Quaternion.prototype.multiply = function(other) {
    if(other.prototype === Kata.Quaternion) {
      return new Kata.Quaternion(this[3] * other[0] + this[0] * other[3] + this[1] * other[2] - this[2] * other[1], this[3] * other[1] + this[1] * other[3] + this[2] * other[0] - this[0] * other[2], this[3] * other[2] + this[2] * other[3] + this[0] * other[1] - this[1] * other[0], this[3] * other[3] - this[0] * other[0] - this[1] * other[1] - this[2] * other[2])
    }else {
      if(typeof other.length !== "undefined" && other.length === 3) {
        var quat_axis = [this[0], this[1], this[2]];
        var uv = Kata.Quaternion._vec3_cross(quat_axis, other);
        var uuv = Kata.Quaternion._vec3_cross(quat_axis, uv);
        uv = [uv[0] * 2 * this[3], uv[1] * 2 * this[3], uv[2] * 2 * this[3]];
        uuv = [uuv[0] * 2, uuv[1] * 2, uuv[2] * 2];
        return[other[0] + uv[0] + uuv[0], other[1] + uv[1] + uuv[1], other[2] + uv[2] + uuv[2]]
      }else {
        throw"Don't know how to multiply given type by quaternion.";
      }
    }
  };
  Kata.Quaternion.prototype.inverse = function() {
    var q0 = this[0], q1 = this[1], q2 = this[2], q3 = this[3], dot = q0 * q0 + q1 * q1 + q2 * q2 + q3 * q3, invDot = dot ? 1 / dot : 0;
    return new Kata.Quaternion(q0 * invDot, -q1 * invDot, -q2 * invDot, q3 * invDot)
  };
  Kata.Quaternion.prototype.exp = function(s) {
    var angle_axis = this.toAngleAxis();
    return Kata.Quaternion.fromAxisAngle(angle_axis.axis, angle_axis.angle * s)
  }
}, "katajs/core/Quaternion.js");
Kata.require(["katajs/core/Channel.js"], function() {
  var SUPER = Kata.Channel.prototype;
  Kata.SimpleChannel = function(partner) {
    SUPER.constructor.call(this);
    if(partner) {
      this.pair(partner)
    }
  };
  Kata.extend(Kata.SimpleChannel, SUPER);
  Kata.SimpleChannel.prototype.pair = function(otherChannel) {
    if(!(otherChannel instanceof Kata.SimpleChannel)) {
      console.error("otherChannel " + otherChannel + " is not instance of SimpleChannel");
      throw"Error in SimpleChannel.pair";
    }
    otherChannel.mPartner = this;
    this.mPartner = otherChannel
  };
  Kata.SimpleChannel.prototype.sendMessage = function(data) {
    if(Kata.FAKE_WEB_WORKERS_DEBUG) {
      data = JSON.parse(JSON.stringify(data), function(key, value) {
        var a;
        if(typeof value === "object") {
          if(value && value.length !== undefined) {
            if(value.byteLength !== undefined && value.byteOffset !== undefined) {
              if(value.buffer && value.buffer.byteLength !== undefined) {
                var retval = [];
                var len = value.length;
                for(var i = 0;i < len;++i) {
                  retval.push(value[i])
                }
                return retval
              }
            }
          }
        }
        if(typeof value === "string") {
          a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
          if(a) {
            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]))
          }
        }
        return value
      })
    }
    this.mPartner.callListeners(data)
  }
}, "katajs/core/SimpleChannel.js");
Kata.require([], function() {
  Kata.SpaceID = {};
  Kata.SpaceID.nil = function() {
    return""
  };
  Kata.SpaceID.any = function() {
    return"*"
  }
}, "katajs/core/SpaceID.js");
if(typeof Kata == "undefined") {
  Kata = {}
}
if(typeof console == "undefined") {
  console = {};
  debug_console = false
}else {
  debug_console = true
}
Kata.require([], function() {
  var currentTime = Date.now();
  var scheduled = false;
  Kata.scheduleNowUpdates = function(time) {
    function replay() {
      setTimeout(replay, time);
      Kata.updateNow()
    }
    replay();
    scheduled = true
  };
  Kata.now = function(space) {
    return scheduled ? currentTime : Kata.updateNow()
  };
  Kata.updateNow = function(newTime) {
    if(newTime === undefined) {
      currentTime = Date.now()
    }else {
      currentTime = newTime
    }
    return currentTime
  }
}, "katajs/core/Time.js");
Kata.require([], function() {
  Kata.URL = function(s) {
    return s
  };
  Kata.URL.protocol = function(url) {
    var colon = url.indexOf("://");
    if(colon == -1) {
      Kata.error("Invalid URL: " + url)
    }
    return url.substr(0, colon)
  };
  Kata.URL._hostAndPort = function(url) {
    var colon = url.indexOf("://");
    if(colon == -1) {
      Kata.error("Invalid URL: " + url);
      colon = 0
    }else {
      colon += 3
    }
    var slash = url.indexOf("/", colon);
    if(slash != -1) {
      return url.substr(colon, slash - colon)
    }else {
      return url.substr(colon)
    }
  };
  Kata.URL.host = function(url) {
    url = Kata.URL._hostAndPort(url);
    var colon = url.indexOf(":");
    if(colon == -1) {
      return url
    }
    return url.substr(0, colon)
  };
  Kata.URL.port = function(url) {
    url = Kata.URL._hostAndPort(url);
    var colon = url.indexOf(":");
    if(colon == -1) {
      return undefined
    }
    var port_str = url.substr(colon + 1);
    return parseInt(port_str)
  };
  Kata.URL.resource = function(url) {
    var colon = url.indexOf("://");
    if(colon == -1) {
      Kata.error("Invalid URL: " + url)
    }
    var slash = url.indexOf("/", colon + 3);
    if(slash == -1) {
      return""
    }
    return url.substr(slash)
  };
  Kata.URL.equals = function(a, b) {
    return a == b
  }
}, "katajs/core/URL.js");
Kata.require(["katajs/core/SimpleChannel.js"], function() {
  if(self["Kata_WEB_WORKERS_ENABLED"] === undefined) {
    if(Kata.WEB_WORKERS_ENABLED === undefined) {
      Kata.WEB_WORKERS_ENABLED = true
    }
  }else {
    Kata.WEB_WORKERS_ENABLED = self["Kata_WEB_WORKERS_ENABLED"]
  }
  if(self["Kata_FAKE_WEB_WORKERS_DEBUG"] === undefined) {
    if(Kata.FAKE_WEB_WORKERS_DEBUG === undefined) {
      Kata.FAKE_WEB_WORKERS_DEBUG = Kata.WEB_WORKERS_ENABLED
    }
  }else {
    Kata.FAKE_WEB_WORKERS_DEBUG = self["Kata_FAKE_WEB_WORKERS_DEBUG"]
  }
  if(self["Kata_WEB_WORKERS_BOOTSTRAP_SCRIPT"] === undefined) {
    if(Kata.WEB_WORKERS_BOOTSTRAP_SCRIPT === undefined) {
      Kata.WEB_WORKERS_BOOTSTRAP_SCRIPT = false
    }
  }else {
    Kata.WEB_WORKERS_BOOTSTRAP_SCRIPT = self["Kata_WEB_WORKERS_BOOTSTRAP_SCRIPT"]
  }
  if(self["Kata_bootstrapWorker"] !== undefined) {
    Kata.bootstrapWorker = self["Kata_bootstrapWorker"]
  }
  Kata.FakeWebWorker = function(jsFile, clsName, args) {
    this.mChannel = new Kata.SimpleChannel;
    this.mArgs = args;
    this.mClassName = clsName;
    this.mJSFile = jsFile;
    if(network_debug) {
      console.log("new webworker")
    }
  };
  Kata.FakeWebWorker.prototype.go = function() {
    var opposingChannel = new Kata.SimpleChannel(this.mChannel);
    if(!this.mClassName || !this.mArgs) {
      Kata.error("WebWorker.go() called twice");
      return
    }
    var args = this.mArgs;
    var clsName = this.mClassName;
    var clsTree = clsName.split(".");
    delete this.mClassName;
    delete this.mArgs;
    Kata.require([this.mJSFile], function() {
      var cls = self;
      for(var i = 0;cls && i < clsTree.length;i++) {
        cls = cls[clsTree[i]]
      }
      if(!cls) {
        Kata.error(clsName + " is undefined:" + this.mJSFile)
      }
      if(network_debug) {
        console.log("going!")
      }
      new cls(opposingChannel, args)
    })
  };
  Kata.FakeWebWorker.prototype.getChannel = function() {
    return this.mChannel
  };
  Kata.FakeWebWorker.prototype.gotError = function(data, file, line) {
    Kata.error("ERROR at " + file + ":" + line + ": " + data)
  };
  function getCallback(thus) {
    return function(ev) {
      thus.callListeners(ev.data)
    }
  }
  var SUPER = Kata.Channel.prototype;
  Kata.FakeWebWorker.Channel = function(port) {
    SUPER.constructor.call(this);
    this.mMessagePort = port;
    this.mMessagePort.onmessage = getCallback(this)
  };
  Kata.extend(Kata.FakeWebWorker.Channel, SUPER);
  Kata.FakeWebWorker.Channel.prototype.sendMessage = function(data) {
    this.mMessagePort.postMessage(data)
  };
  function getErrorCallback(thus) {
    return function(ev) {
      thus.gotError(ev.message, ev.filename, ev.lineno)
    }
  }
  if(Kata.WEB_WORKERS_ENABLED && typeof Worker != "undefined") {
    Kata.WebWorker = function(jsFile, clsName, args) {
      if(Kata.bootstrapWorker === undefined) {
        this.mWorker = new Worker(Kata.scriptRoot + "katajs/core/GenericWorker.js" + Kata.queryString)
      }else {
        this.mWorker = new Worker(Kata.bootstrapWorker)
      }
      this.mWorker.onerror = getErrorCallback(this);
      this.mInitialMessage = [Kata.scriptRoot, Kata.bootstrapWorker === undefined ? undefined : Kata.bootstrapWorker, jsFile, clsName, args, Kata.queryString];
      this.mChannel = new Kata.WebWorker.Channel(this.mWorker)
    };
    Kata.WebWorker.prototype.go = function() {
      var initMsg = this.mInitialMessage;
      delete this.mInitialMessage;
      if(!(Kata.bootstrapWorker === undefined)) {
        this.mWorker.postMessage(Kata.scriptRoot + "katajs/core/GenericWorker.js" + Kata.queryString)
      }
      this.mWorker.postMessage(initMsg)
    };
    Kata.WebWorker.prototype.getChannel = Kata.FakeWebWorker.prototype.getChannel;
    Kata.WebWorker.prototype.gotError = Kata.FakeWebWorker.prototype.gotError;
    Kata.WebWorker.Channel = Kata.FakeWebWorker.Channel
  }else {
    Kata.WebWorker = Kata.FakeWebWorker
  }
}, "katajs/core/WebWorker.js");
Kata.require(["katajs/core/Channel.js", "katajs/core/Math.uuid.js"], function() {
  function getMessageCallback(thus, which) {
    return function(ev) {
      thus._onMessage(which, ev.data)
    }
  }
  function getOpenCallback(thus, which) {
    return function(ev) {
      thus._onOpen(which)
    }
  }
  function getCloseCallback(thus, which) {
    return function(ev) {
      thus._onClose(which)
    }
  }
  function getErrorCallback(thus, which) {
    return function(ev) {
      thus._onError(which)
    }
  }
  function serializeVarInt(val, uint8array, offset) {
    var tmp;
    var first = 0;
    var len = 0;
    do {
      tmp = val & 127;
      val >>>= 7;
      if(val != 0) {
        tmp += 128
      }
      uint8array[len++] = tmp
    }while(val != 0);
    return len
  }
  function parseVarInt(uint8array, offset, len) {
    var i = 0;
    var val = 0;
    var tmp;
    for(var i = 0;i < len;i++) {
      tmp = uint8array[i];
      val |= (tmp & 127) << 7 * i;
      if(!(tmp & 128)) {
        return[i + 1, val]
      }
    }
  }
  if(typeof WebSocket != "undefined") {
    Kata.TCPSST = function(host, port, numStreams) {
      if(!numStreams) {
        numStreams = 1
      }
      this.mUUID = Math.uuid();
      this.mURI = "ws://" + host + ":" + port + "/" + this.mUUID;
      this.mSockets = new Array(numStreams);
      this.mConnected = new Array;
      this.mMessageQueue = new Array;
      for(var i = 0;i < numStreams;i++) {
        this._connectSocket(i)
      }
      this.mNextSubstream = 1;
      this.mSubstreams = new Object
    };
    Kata.TCPSST.prototype._connectSocket = function(which) {
      if(this.mSockets[which] && this.mSockets[which].readyState == WebSocket.CONNECTED) {
        this.mConnected--
      }
      var sock = new WebSocket(this.mURI);
      sock.binaryType = "arraybuffer";
      sock.onopen = getOpenCallback(this, which);
      sock.onclose = getCloseCallback(this, which);
      sock.onmessage = getMessageCallback(this, which);
      sock.onerror = getErrorCallback(this, which);
      sock._timeout = setTimeout(Kata.bind(this._onError, this, which), 1E4);
      this.mSockets[which] = sock
    };
    Kata.TCPSST.prototype._onClose = function(which) {
      if(network_debug) {
        console.log("Closed socket " + which)
      }
      var index = this.mConnected.indexOf(which);
      if(index != -1) {
        this.mConnected.splice(index, 1)
      }
      for(var i in this.mSubstreams) {
        this.mSubstreams[i].callListeners(null)
      }
    };
    Kata.TCPSST.prototype._onOpen = function(which) {
      if(network_debug) {
        console.log("Opened socket " + which)
      }
      clearTimeout(this.mSockets[which]._timeout);
      delete this.mSockets[which]._timeout;
      this.mConnected.push(which);
      for(var i = 0;i < this.mMessageQueue.length;i++) {
        this.mSockets[which].send(this.mMessageQueue[i])
      }
      this.mMessageQueue = new Array
    };
    Kata.TCPSST.prototype._onError = function(which) {
      delete this.mSockets[which];
      for(var i in this.mSubstreams) {
        this.mSubstreams[i].callListeners(null)
      }
    };
    Kata.TCPSST.prototype._onMessage = function(which, buffer) {
      var u8arr = new Uint8Array(buffer, 0, buffer.length < 5 ? buffer.length : 5);
      var parsed = parseVarInt(u8arr, 0, u8arr.length);
      if(!parsed) {
        Kata.log("Error: Failed to parse stream ID!");
        return
      }
      var offset = parsed[0];
      var streamnumber = parsed[1];
      if(!this.mSubstreams[streamnumber]) {
        var substream = new Kata.TCPSST.Substream(this, streamnumber);
        this.mSubstreams[streamnumber] = substream
      }
      this.mSubstreams[streamnumber].callListeners(new Uint8Array(buffer, offset))
    };
    var sidArray = new Uint8Array(5);
    Kata.TCPSST.prototype.send = function(streamid, array) {
      var sidLen = serializeVarInt(streamid, sidArray, 0);
      var arrayBuf = new ArrayBuffer(sidLen + array.length);
      var u8arrayBuf = new Uint8Array(arrayBuf);
      for(var i = 0;i < sidLen;i++) {
        u8arrayBuf[i] = sidArray[i]
      }
      u8arrayBuf.set(array, sidLen);
      if(this.mConnected.length == 0) {
        this.mMessageQueue.push(arrayBuf);
        return
      }
      var randsock = this.mSockets[this.mConnected[Math.floor(Math.random() * this.mConnected.length)]];
      randsock.send(arrayBuf)
    };
    Kata.TCPSST.prototype._getNewSubstreamID = function() {
      var ret = this.mNextSubstream;
      this.mNextSubstream += 2;
      return ret
    };
    Kata.TCPSST.prototype.clone = function() {
      var id = this._getNewSubstreamID();
      var substr = new Kata.TCPSST.Substream(this, id);
      this.mSubstreams[id] = substr;
      return substr
    };
    Kata.TCPSST.prototype.close = function() {
      var len = this.mSockets.length;
      for(var i = 0;i < len;++i) {
        this.mSockets[i].close()
      }
    };
    Kata.TCPSST.Substream = function(tcpsst, which) {
      this.mOwner = tcpsst;
      this.mWhich = which;
      Kata.Channel.call(this)
    };
    Kata.extend(Kata.TCPSST.Substream, Kata.Channel.prototype);
    Kata.TCPSST.Substream.prototype.sendMessage = function(data) {
      this.mOwner.send(this.mWhich, data)
    };
    Kata.TCPSST.Substream.prototype.getTopLevelStream = function() {
      return this.mOwner
    };
    Kata.TCPSST.Substream.prototype.close = function() {
    }
  }else {
    Kata.warn("WebSockets not available.")
  }
}, "katajs/network/TCPSST.js");
Kata.require(["externals/protojs/protobuf.js"], function() {
  if(typeof Kata.Behavior == "undefined") {
    Kata.Behavior = {}
  }
  Kata.Behavior.NamedObject = function(name, parent) {
    this.mName = name;
    this.mParent = parent;
    this.mParent.addBehavior(this);
    this.mPorts = {}
  };
  Kata.Behavior.NamedObject.prototype.ProtocolPort = 10;
  Kata.Behavior.NamedObject.prototype._getPort = function(pres) {
    var id = pres;
    if(pres.presenceID) {
      id = pres.presenceID()
    }
    var odp_port = this.mPorts[id];
    if(!odp_port && pres.bindODPPort) {
      odp_port = pres.bindODPPort(this.ProtocolPort);
      odp_port.receive(Kata.bind(this.handleResponse, this));
      this.mPorts[id] = odp_port
    }
    return odp_port
  };
  Kata.Behavior.NamedObject.prototype.newPresence = function(pres) {
    var odp_port = this._getPort(pres);
    odp_port.receive(Kata.bind(this._handleMessage, this))
  };
  Kata.Behavior.NamedObject.prototype.presenceInvalidated = function(pres) {
    var odp_port = this._getPort(pres);
    if(odp_port) {
      odp_port.close();
      delete this.mPorts[pres.presenceID()]
    }
  };
  Kata.Behavior.NamedObject.prototype._handleMessage = function(src, dest, payload) {
    var odp_port = this._getPort(dest.presenceID());
    odp_port.send(src, PROTO.encodeUTF8(this.mName))
  };
  Kata.Behavior.NamedObjectObserver = function(name, parent, cb) {
    this.SUPER.constructor.call(this, name, parent);
    this.mCB = cb;
    this.mQueriedObjects = {}
  };
  Kata.extend(Kata.Behavior.NamedObjectObserver, Kata.Behavior.NamedObject.prototype);
  Kata.Behavior.NamedObjectObserver.prototype.remotePresence = function(presence, remote, added) {
    if(!added) {
      if(this.mCB) {
        this.mCB(remote, added)
      }
      return
    }
    var odp_port = this._getPort(presence);
    odp_port.send(remote.endpoint(this.ProtocolPort), "");
    var self = this;
    var reqinfo = {remote:remote};
    var timer = setTimeout(function() {
      self._requestTimeout(reqinfo)
    }, 1E3);
    reqinfo.timer = timer;
    this.mQueriedObjects[remote.presenceID()] = reqinfo
  };
  Kata.Behavior.NamedObjectObserver.prototype._handleReply = function(reqinfo, name) {
    if(name === null) {
      reqinfo.remote.name = null
    }else {
      reqinfo.remote.name = PROTO.decodeUTF8(name)
    }
    if(this.mCB) {
      this.mCB(reqinfo.remote, true)
    }
    clearTimeout(reqinfo.timer);
    delete this.mQueriedObjects[reqinfo.remote.presenceID()]
  };
  Kata.Behavior.NamedObjectObserver.prototype._handleMessage = function(src, dest, payload) {
    var queried_reqinfo = this.mQueriedObjects[src.presenceID()];
    if(queried_reqinfo && payload && payload.length > 0) {
      this._handleReply(queried_reqinfo, payload)
    }else {
      this.SUPER._handleMessage.call(this, src, dest, payload)
    }
  };
  Kata.Behavior.NamedObjectObserver.prototype._requestTimeout = function(reqinfo) {
    this._handleReply(reqinfo, null)
  }
}, "katajs/oh/behavior/NamedObject.js");
Kata.require(["katajs/oh/Script.js", "katajs/oh/impl/ScriptProtocol.js"], function() {
  var SUPER = Kata.Script.prototype;
  Kata.GraphicsScript = function(channel, args, update_hook) {
    SUPER.constructor.call(this, channel, args);
    this.mRenderableRemotePresences = [];
    this.mRenderableRemotePresenceIndex = 0;
    this.mGraphicsTimer = null;
    this.mNumGraphicsSystems = 0;
    this._camPos = [0, 0, 0];
    this._camPosTarget = [0, 0, 0];
    this._camOrient = [0, 0, 0, 1];
    this._camOrientTarget = [0, 0, 0, 1];
    this._camLag = 0.9;
    var msgTypes = Kata.ScriptProtocol.ToScript.Types;
    this.mMessageDispatcher.add(msgTypes.GUIMessage, Kata.bind(this._handleGUIMessage, this));
    this.mUpdateHook = update_hook
  };
  Kata.extend(Kata.GraphicsScript, SUPER);
  Kata.GraphicsScript.prototype._handleGUIMessage = function(channel, data) {
    if(data.msg == "loaded") {
      this.cameraPeriodicUpdate(true)
    }
  };
  Kata.GraphicsScript.prototype.queryMeshAspectRatio = function(presence, remotePresence) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXQueryMeshAspectRatio(presence.space(), presence.id(), remotePresence);
    this._sendHostedObjectMessage(msg)
  };
  Kata.GraphicsScript.prototype.queryMeshAspectRatio = function(presence, remotePresence) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXQueryMeshAspectRatio(presence.space(), presence.id(), remotePresence);
    this._sendHostedObjectMessage(msg)
  };
  Kata.GraphicsScript.prototype.projectPoint = function(presence, point, data) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXProjectPoint(presence.space(), presence.id(), point, data);
    this._sendHostedObjectMessage(msg)
  };
  Kata.GraphicsScript.prototype.connect = function(args, auth, cb) {
    SUPER.connect.call(this, args, auth, cb, true)
  };
  Kata.GraphicsScript.prototype.enableGraphicsViewport = function(presence, canvasId, attachCamera) {
    this._enableGraphics(presence, canvasId, undefined, undefined, undefined, attachCamera)
  };
  Kata.GraphicsScript.prototype.enableGraphicsTexture = function(presence, textureObjectUUID, textureName, textureObjectSpace) {
    if(textureObjectSpace === undefined) {
      textureObjectSpace = presence.space()
    }
    this._enableGraphics(presence, undefined, textureObjectSpace, textureObjectUUID, textureName)
  };
  Kata.GraphicsScript.prototype.renderRemotePresence = function(presence, remotePresence, noMesh) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXCreateNode(presence.space(), presence.id(), remotePresence);
    Kata.LocationCopyUnifyTime(msg, remotePresence.mLocation);
    this._sendHostedObjectMessage(msg);
    if(noMesh) {
      remotePresence.noMesh = true
    }
    remotePresence.inGFXSceneGraph = true;
    this.updateGFX(remotePresence)
  };
  Kata.GraphicsScript.prototype.unrenderRemotePresence = function(presence, remotePresence) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXDestroyNode(presence.space(), presence.id(), remotePresence);
    this._sendHostedObjectMessage(msg);
    delete remotePresence.inGFXSceneGraph
  };
  Kata.GraphicsScript.prototype._enableGraphics = function(presence, canvasId, textureObjectSpace, textureObjectUUID, textureName, attachCamera) {
    var space = presence.space();
    var key = Kata.Script.remotePresenceKey(presence.space(), presence.id());
    this.mRemotePresences[key] = presence;
    for(var remotePresenceId in this.mRemotePresences) {
      var remotePresence = this.mRemotePresences[remotePresenceId];
      if(remotePresence.space() == space) {
        this.mRenderableRemotePresences[this.mRenderableRemotePresences.length] = remotePresenceId;
        if(this.shouldRender(presence, remotePresence) && !remotePresence.inGFXSceneGraph) {
          this.renderRemotePresence(presence, remotePresence)
        }
      }
    }
    var msg = new Kata.ScriptProtocol.FromScript.RegisterGUIMessage(presence.space(), presence.id(), presence.id());
    this._sendHostedObjectMessage(msg);
    msg = new Kata.ScriptProtocol.FromScript.GFXEnableEvent(presence.space(), "drag");
    this._sendHostedObjectMessage(msg);
    msg = new Kata.ScriptProtocol.FromScript.GFXEnableEvent(presence.space(), "pick");
    this._sendHostedObjectMessage(msg);
    if(attachCamera) {
      msg = new Kata.ScriptProtocol.FromScript.GFXAttachCamera(presence.space(), presence.id(), presence.id(), canvasId, textureObjectSpace, textureObjectUUID, textureName);
      msg.msg = "Camera";
      this._sendHostedObjectMessage(msg);
      msg = new Kata.ScriptProtocol.FromScript.GFXAttachCamera(presence.space(), presence.id(), presence.id(), canvasId, textureObjectSpace, textureObjectUUID, textureName);
      this._sendHostedObjectMessage(msg)
    }else {
      Kata.BlessedCameraID = Kata.ObjectID.random();
      var msg = new Kata.ScriptProtocol.FromScript.GFXCreateNode(presence.space(), presence.id(), presence);
      msg.id = Kata.BlessedCameraID;
      Kata.BlessedCameraSpace = msg.space;
      Kata.BlessedCameraSpaceid = msg.spaceid;
      this._sendHostedObjectMessage(msg);
      msg = new Kata.ScriptProtocol.FromScript.GFXAttachCamera(presence.space(), presence.id(), presence.id(), canvasId, textureObjectSpace, textureObjectUUID, textureName);
      msg.id = Kata.BlessedCameraID;
      msg.msg = "Camera";
      this._sendHostedObjectMessage(msg);
      msg = new Kata.ScriptProtocol.FromScript.GFXAttachCamera(presence.space(), presence.id(), presence.id(), canvasId, textureObjectSpace, textureObjectUUID, textureName);
      msg.id = Kata.BlessedCameraID;
      this._sendHostedObjectMessage(msg);
      setInterval(Kata.bind(this.cameraPeriodicUpdate, this), 20)
    }
    if(this.mNumGraphicsSystems++ == 0) {
      var duration = new Date(0);
      duration.setSeconds(2);
      this.mGraphicsTimer = this.timer(duration, Kata.bind(this.processRenderables, this), true)
    }
  };
  Kata.GraphicsScript.prototype.setCameraPosOrient = function(pos, orient, lag) {
    if(lag == null) {
      lag = 0.9
    }
    this._camLag = lag;
    if(pos) {
      if(lag == 0) {
        this._camPos = pos
      }
      this._camPosTarget = pos
    }
    if(orient) {
      if(lag == 0) {
        this._camOrient = orient
      }
      this._camOrientTarget = orient
    }
  };
  Kata.GraphicsScript.prototype.cameraPeriodicUpdate = function(forceUpdate) {
    var i;
    var originalCamPos = [];
    for(i = 0;i < 3;++i) {
      originalCamPos[i] = this._camPos[i];
      this._camPos[i] = this._camPos[i] * this._camLag + this._camPosTarget[i] * (1 - this._camLag)
    }
    var originalCamOrient = [];
    for(i = 0;i < 4;++i) {
      originalCamOrient[i] = this._camOrient[i];
      this._camOrient[i] = this._camOrient[i] * this._camLag + this._camOrientTarget[i] * (1 - this._camLag)
    }
    function similarPos(a, b) {
      for(var i = 0;i < 3;++i) {
        if(!(Math.abs(a[i] - b[i]) < 0.001)) {
          return false
        }
      }
      return true
    }
    function similarOrient(a, b) {
      for(var i = 0;i < 4;++i) {
        if(!(Math.abs(a[i] - b[i]) < 1.0E-4)) {
          return false
        }
      }
      return true
    }
    if(forceUpdate || !similarPos(originalCamPos, this._camPosTarget) || !similarOrient(originalCamOrient, this._camOrientTarget)) {
      var msg = {};
      msg.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
      msg.msg = "Move";
      msg.space = Kata.BlessedCameraSpace;
      msg.id = Kata.BlessedCameraID;
      msg.spaceid = Kata.BlessedCameraSpaceid;
      msg.pos = this._camPos;
      msg.orient = new Kata.Quaternion(this._camOrient);
      msg.orient = msg.orient.normal();
      this._sendHostedObjectMessage(msg)
    }
  };
  Kata.GraphicsScript.prototype.processRenderables = function() {
    var len = this.mRenderableRemotePresences.length;
    if(len) {
      this.mRenderableRemotePresenceIndex %= len;
      var remotePresenceName = this.mRenderableRemotePresences[this.mRenderableRemotePresenceIndex];
      var remotePresence = this.mRemotePresences[remotePresenceName];
      if(remotePresence) {
        var presence = this.mPresences[remotePresence.space()];
        var shouldRender = this.shouldRender(presence, remotePresence);
        if(shouldRender) {
          if(!remotePresence.inGFXSceneGraph) {
            this.renderRemotePresence(presence, remotePresence)
          }
        }else {
          if(remotePresence.inGFXSceneGraph) {
            this.unrenderRemotePresence(presence, remotePresence)
          }
        }
        this.mRenderableRemotePresenceIndex++
      }else {
        this.mRemotePresences[this.mRenderableRemotePresenceIndex] = this.mRemotePresences[len];
        --this.mRemotePresences.length
      }
    }
  };
  Kata.GraphicsScript.prototype.disableGraphics = function(presence) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXDetachCamera(presence.space(), presence.id(), presence.id());
    this._sendHostedObjectMessage(msg);
    var space = presence.space();
    var len = this.mRenderableRemotePresences.length;
    var msg = this.unrenderRemotePresence(presence, presence);
    this._sendHostedObjectMessage(msg);
    var key = Kata.Script.remotePresenceKey(presence.space(), presence.id());
    delete this.mRemotePresences[key];
    for(var i = 0;i < len;) {
      var remotePresence = this.mRemotePresences[this.mRenderableRemotePresences[i]];
      if(remotePresence && remotePresence.space() == space) {
        if(remotePresence.inGFXSceneGraph) {
          this.unrenderRemotePresence(presence, remotePresence)
        }
        this.mRenderableRemotePresences[i] = this.mRenderableRemotePresences[len];
        len = --this.mRenderableRemotePresences.length
      }else {
        ++i
      }
    }
    if(--this.mNumGraphicsSystems == 0) {
      this.mGraphicsTimer.disable();
      this.mGraphicsTimer = null
    }
    msg = new Kata.ScriptProtocol.FromScript.UnregisterGUIMessage(presence.space(), presence.id(), presence.id());
    this._sendHostedObjectMessage(msg)
  };
  Kata.GraphicsScript.prototype._handleQueryEventDelegate = function(remotePresence, data) {
    if(remotePresence) {
      var presence = this.mPresences[data.space];
      if(presence.inGFXSceneGraph) {
        if(data.entered) {
          this.mRenderableRemotePresences.push(remotePresence);
          if(this.shouldRender(presence, remotePresence)) {
            this.renderRemotePresence(presence, remotePresence)
          }
        }else {
          if(remotePresence.inGFXSceneGraph) {
            this.unrenderRemotePresence(presence, remotePresence)
          }
        }
      }
    }
    this.processRenderables();
    return remotePresence
  };
  Kata.GraphicsScript.prototype.updateGFX = function(remotePresence) {
    var presence = this.mPresences[remotePresence.space()];
    if(!presence || !presence.inGFXSceneGraph) {
      return
    }
    var msg = new Kata.ScriptProtocol.FromScript.GFXMoveNode(presence.space(), presence.id(), remotePresence, {loc:remotePresence.predictedLocation()});
    this._sendHostedObjectMessage(msg);
    if(remotePresence.lastGFXVisual != remotePresence.visual()) {
      if(!remotePresence.noMesh) {
        var messages = Kata.ScriptProtocol.FromScript.generateGFXUpdateVisualMessages(presence.space(), presence.id(), remotePresence, remotePresence.lastGFXVisual);
        var len = messages.length;
        for(var i = 0;i < len;++i) {
          this._sendHostedObjectMessage(messages[i])
        }
      }
      remotePresence.lastGFXVisual = remotePresence.visual()
    }
    if(this.mUpdateHook) {
      this.mUpdateHook(presence, remotePresence)
    }
  };
  Kata.GraphicsScript.prototype._handlePresenceLocUpdate = function(channel, data) {
    var remotePresence = SUPER._handlePresenceLocUpdate.call(this, channel, data);
    if(remotePresence) {
      this.updateGFX(remotePresence)
    }
    return remotePresence
  };
  Kata.GraphicsScript.prototype.shouldRender = function(presence, remotePresence) {
    return true
  };
  Kata.GraphicsScript.prototype.animate = function(presence, remotePresence, animation) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXAnimate(presence.space(), presence.id(), remotePresence, animation);
    this._sendHostedObjectMessage(msg)
  };
  Kata.GraphicsScript.prototype.setLabel = function(presence, remoteID, label, offset, color) {
    var msg = new Kata.ScriptProtocol.FromScript.GFXLabel(presence.space(), presence.id(), remoteID.object(), label, offset, color);
    this._sendHostedObjectMessage(msg)
  }
}, "katajs/oh/GraphicsScript.js");
Kata.require(["katajs/oh/Simulation.js"], function() {
  var SUPER = Kata.Simulation.prototype;
  Kata.GraphicsSimulation = function(driver, channel, domElement) {
    SUPER.constructor.call(this, channel);
    this.mElement = domElement;
    var cons = this.constructor;
    if(cons._drivers == undefined) {
      Kata.error("No graphics drivers available.")
    }
    var drv = cons._drivers[driver];
    if(drv == undefined) {
      Kata.error('No graphics driver called "' + driver + '" available.')
    }
    this.mGFX = new drv(function(obj) {
    }, domElement);
    this.mGFX.setInputCallback(Kata.bind(this._handleInputMessage, this))
  };
  Kata.GraphicsSimulation.YFOV_DEGREES = 23.3;
  Kata.GraphicsSimulation.CAMERA_NEAR = 0.1;
  Kata.GraphicsSimulation.CAMERA_FAR = 2E3;
  Kata.GraphicsSimulation.DRAG_THRESHOLD = 5;
  Kata.extend(Kata.GraphicsSimulation, SUPER);
  Kata.GraphicsSimulation.requestAnimFrame = Kata.bind(function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
      window.setTimeout(callback, 1E3 / 60)
    }
  }(), window);
  Kata.GraphicsSimulation.prototype.receivedMessage = function(channel, data) {
    if(data.__gui) {
      return
    }
    data = Kata.ScriptProtocol.FromScript.reconstitute(data);
    SUPER.receivedMessage.apply(this, arguments);
    this.mGFX.send(data)
  };
  Kata.GraphicsSimulation.registerDriver = function(type, klass) {
    if(this._drivers == undefined) {
      this._drivers = {}
    }
    this._drivers[type] = klass
  };
  Kata.GraphicsSimulation.initializeDriver = function(type) {
    if(!this._drivers || !this._drivers[type]) {
      Kata.error("Couldn't find graphics driver: " + type);
      return
    }
    var klass = this._drivers[type];
    var new_args = new Array(arguments.length - 1);
    for(var i = 1;i < arguments.length;i++) {
      new_args[i - 1] = arguments[i]
    }
    klass.initialize.apply(undefined, new_args)
  };
  Kata.GraphicsSimulation.prototype._handleInputMessage = function(msg) {
    this.mChannel.sendMessage(new Kata.ScriptProtocol.ToScript.GUIMessage(msg))
  }
}, "katajs/oh/GraphicsSimulation.js");
Kata.require(["katajs/oh/Simulation.js"], function() {
  var SUPER = Kata.Simulation.prototype;
  Kata.GUISimulation = function(channel) {
    SUPER.constructor.call(this, channel)
  };
  Kata.extend(Kata.GUISimulation, SUPER);
  Kata.GUISimulation.prototype.receivedMessage = function(channel, data) {
    if(data.__gui) {
      this.handleGUIMessage(data.__gui)
    }
  };
  Kata.GUISimulation.prototype.handleGUIMessage = function(channel, data) {
  }
}, "katajs/oh/GUISimulation.js");
Kata.require(["katajs/oh/impl/ScriptProtocol.js", "katajs/core/MessageDispatcher.js"], function() {
  Kata.HostedObject = function(objectHost, id) {
    this.mObjectHost = objectHost;
    this.mID = id;
    this.mScriptChannel = null;
    var scriptHandlers = {};
    var scriptTypes = Kata.ScriptProtocol.FromScript.Types;
    scriptHandlers[scriptTypes.Connect] = Kata.bind(this._handleConnect, this);
    scriptHandlers[scriptTypes.Disconnect] = Kata.bind(this._handleDisconnect, this);
    scriptHandlers[scriptTypes.SendODPMessage] = Kata.bind(this._handleSendODPMessage, this);
    scriptHandlers[scriptTypes.Query] = Kata.bind(this._handleQuery, this);
    scriptHandlers[scriptTypes.Location] = Kata.bind(this._handleLocUpdateRequest, this);
    scriptHandlers[scriptTypes.QueryUpdate] = Kata.bind(this._handleQueryUpdate, this);
    scriptHandlers[scriptTypes.QueryRemoval] = Kata.bind(this._handleQueryRemoval, this);
    scriptHandlers[scriptTypes.Subscription] = Kata.bind(this._handleSubscriptionRequest, this);
    scriptHandlers[scriptTypes.Physics] = Kata.bind(this._handlePhysicsRequest, this);
    scriptHandlers[scriptTypes.CreateObject] = Kata.bind(this._handleCreateObject, this);
    scriptHandlers[scriptTypes.GraphicsMessage] = Kata.bind(this._handleGraphicsMessage, this);
    scriptHandlers[scriptTypes.DisableGUIMessage] = Kata.bind(objectHost.unregisterSimulationCallback, objectHost, "graphics", this);
    scriptHandlers[scriptTypes.EnableGUIMessage] = Kata.bind(objectHost.registerSimulationCallback, objectHost, "graphics", this);
    scriptHandlers[scriptTypes.GUIMessage] = Kata.bind(this._handleGUIMessage, this);
    this.mScriptMessageDispatcher = new Kata.MessageDispatcher(scriptHandlers)
  };
  Kata.HostedObject.prototype.getObjectHost = function() {
    return this.mObjectHost
  };
  Kata.HostedObject.prototype.getID = function() {
    return this.mID
  };
  Kata.HostedObject.prototype.sendScriptMessage = function(msg) {
    if(!this.mScriptChannel) {
      Kata.warn("Couldn't send script message: no script.");
      return
    }
    this.mScriptChannel.sendMessage(msg)
  };
  Kata.HostedObject.prototype.messageFromScript = function(channel, data) {
    data = Kata.ScriptProtocol.FromScript.reconstitute(data);
    this.mScriptMessageDispatcher.dispatch(channel, data)
  };
  Kata.HostedObject.prototype._handleConnect = function(channel, request) {
    this.mObjectHost.connect(this, request, request.auth)
  };
  Kata.HostedObject.prototype.connectionResponse = function(success, presence_id, data) {
    var msg = null;
    if(success) {
      var bounds = undefined;
      msg = new Kata.ScriptProtocol.ToScript.Connected(presence_id.space, presence_id.object, data.loc, bounds, data.vis)
    }else {
      msg = new Kata.ScriptProtocol.ToScript.ConnectionFailed(presence_id.space, presence_id.object, data.msg)
    }
    this.sendScriptMessage(msg)
  };
  Kata.HostedObject.prototype.disconnected = function(space) {
    var msg = new Kata.ScriptProtocol.ToScript.Disconnected(space);
    this.sendScriptMessage(msg)
  };
  Kata.HostedObject.prototype._handleDisconnect = function(channel, request) {
    this.mObjectHost.disconnect(this, request)
  };
  Kata.HostedObject.prototype._handleSendODPMessage = function(channel, request) {
    this.mObjectHost.sendODPMessage(request.space, request.source_object, request.source_port, request.dest_object, request.dest_port, request.payload)
  };
  Kata.HostedObject.prototype.receiveODPMessage = function(space, src_obj, src_port, dst_obj, dst_port, payload) {
    var msg = new Kata.ScriptProtocol.ToScript.ReceiveODPMessage(space, src_obj, src_port, dst_obj, dst_port, payload);
    this.sendScriptMessage(msg)
  };
  Kata.HostedObject.prototype._handleQuery = function(channel, request) {
    this.mObjectHost.registerProxQuery(request.space, request.id, request.sa)
  };
  Kata.HostedObject.prototype._handleQueryUpdate = function(channel, request) {
    this.mObjectHost.requestQueryUpdate(request.space, request.id, request.sa)
  };
  Kata.HostedObject.prototype._handleQueryRemoval = function(channel, request) {
    this.mObjectHost.requestQueryRemoval(request.space, request.id)
  };
  Kata.HostedObject.prototype._handlePhysicsRequest = function(channel, request) {
    this.mObjectHost.setPhysics(request.space, request.id, request.data)
  };
  Kata.HostedObject.prototype.proxEvent = function(space, observed, entered, properties) {
    var msg;
    if(typeof properties !== "undefined") {
      msg = new Kata.ScriptProtocol.ToScript.QueryEvent(space, observed, entered, properties.loc, properties.visual)
    }else {
      msg = new Kata.ScriptProtocol.ToScript.QueryEvent(space, observed, entered)
    }
    this.sendScriptMessage(msg)
  };
  Kata.HostedObject.prototype._handleCreateObject = function(channel, request) {
    this.mObjectHost.createObject(request.script, request.constructor, request.args)
  };
  Kata.HostedObject.prototype._handleLocUpdateRequest = function(channel, request) {
    var loc = {};
    Kata.LocationCopyUnifyTime(request, loc);
    this.mObjectHost.locUpdateRequest(request.space, request.id, loc, request.visual)
  };
  Kata.HostedObject.prototype.presenceLocUpdate = function(space, from, loc, visual, physics) {
    var msg = new Kata.ScriptProtocol.ToScript.PresenceLocUpdate(space, from, loc, visual, physics);
    this.sendScriptMessage(msg)
  };
  Kata.HostedObject.prototype.handleMessageFromSimulation = function(simName, channel, data) {
    this.sendScriptMessage(data)
  };
  Kata.HostedObject.prototype._handleGraphicsMessage = function(channel, request) {
    this.mObjectHost.sendToSimulation(request)
  };
  Kata.HostedObject.prototype._handleGUIMessage = function(channel, request) {
    this.mObjectHost.sendToSimulation({__gui:request})
  };
  Kata.HostedObject.prototype._handleSubscriptionRequest = function(channel, request) {
    if(request.enable) {
      this.mObjectHost.subscribe(request.space, request.id, request.observed)
    }else {
      this.mObjectHost.unsubscribe(request.space, request.id, request.observed)
    }
  };
  Kata.HostedObject.prototype.messageFromSimulation = function(channel, data) {
  };
  Kata.HostedObject.prototype.createScript = function(script, method, args) {
    var script_worker = new Kata.WebWorker("katajs/oh/impl/BootstrapScript.js", "Kata.BootstrapScript", {realScript:script, realClass:method, realArgs:args});
    this.mScriptChannel = script_worker.getChannel();
    this.mScriptChannel.registerListener(Kata.bind(this.messageFromScript, this));
    script_worker.go()
  };
  Kata.HostedObject.prototype.createMainThreadScript = function(script, method, args, mainThreadChannel) {
    this.mScriptChannel = mainThreadChannel;
    this.mScriptChannel.registerListener(Kata.bind(this.messageFromScript, this));
    this.mScriptChannel.sendMessage(new Kata.ScriptProtocol.FromScript.InstantiateObjectScript("katajs/oh/impl/BootstrapScript.js", "Kata.BootstrapScript", {realScript:script, realClass:method, realArgs:args}))
  }
}, "katajs/oh/HostedObject.js");
Kata.require(["katajs/core/FilterChannel.js", "katajs/core/MessageDispatcher.js", "katajs/core/URL.js", "katajs/oh/impl/ScriptProtocol.js"], function() {
  self["Kata"] = Kata;
  Kata.BootstrapScript = Kata["BootstrapScript"] = function(channel, args) {
    this.mChannel = channel;
    var msgTypes = Kata.ScriptProtocol.ToScript.Types;
    this.mLoadingListener = Kata.bind(this.receiveMessage, this);
    channel.registerListener(this.mLoadingListener);
    this.mPendingScriptLoad = [];
    this.mScriptLoading = true;
    var thus = this;
    Kata.require([args.realScript], function() {
      thus._onFinishedLoading(channel, args)
    })
  };
  Kata.BootstrapScript.prototype._onFinishedLoading = function(filtered_channel, args) {
    this.mScriptLoading = false;
    var clsTree = args.realClass.split(".");
    var cls = self;
    for(var i = 0;cls && i < clsTree.length;i++) {
      cls = cls[clsTree[i]]
    }
    if(!cls) {
      Kata.error("Class " + args.realClass + " from file " + args.realScript + " could not be found!");
      return
    }
    this.mScript = new cls(filtered_channel, args.realArgs);
    for(var i = 0;i < this.mPendingScriptLoad.length;i++) {
      this.mScript._handleHostedObjectMessage(this.mPendingScriptLoad[i][0], this.mPendingScriptLoad[i][1])
    }
    var ret = this.mChannel.unregisterListener(this.mLoadingListener);
    if(!ret) {
      console.log("failed to unload listener: " + this.mLoadingListener)
    }
    delete this.mLoadingListener
  };
  Kata.BootstrapScript.prototype.receiveMessage = function(channel, msg) {
    if(this.mScriptLoading) {
      this.mPendingScriptLoad.push([channel, msg])
    }else {
    }
  }
}, "katajs/oh/impl/BootstrapScript.js");
Kata.require(["katajs/core/URL.js", "katajs/core/Location.js", "katajs/core/Time.js"], function() {
  Kata.ScriptProtocol = {commonReconstitute:function(data) {
    if(typeof data.space != "undefined") {
      data.space = Kata.URL(data.space)
    }
    if(typeof data.spaceid != "undefined") {
      data.spaceid = Kata.URL(data.spaceid)
    }
    return data
  }, FromScript:{Types:{Connect:"fcon", Disconnect:"fdis", SendODPMessage:"fodp", Location:"floc", Visual:"fvis", Query:"fque", QueryUpdate:"fqup", QueryRemoval:"fqrm", Physics:"fphys", Subscription:"fsub", CreateObject:"fcre", InstantiateObjectScript:"fscr", GraphicsMessage:"fgfm", EnableGUIMessage:"feui", DisableGUIMessage:"fdui", GUIMessage:"fgui"}, BackgroundTypes:{Dome:"skydome", Box:"skybox"}, reconstitute:function(data) {
    data = Kata.ScriptProtocol.commonReconstitute(data);
    return data
  }, Connect:function(space, auth, loc, vis, query) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Connect;
    this.space = space;
    this.auth = auth;
    if(loc) {
      Kata.LocationCopyUnifyTime(loc, this)
    }
    if(vis) {
      this.visual = vis
    }
    if(query) {
      this.query = query
    }
  }, RegisterGUIMessage:function(event) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.EnableGUIMessage;
    this.event = event
  }, InstantiateObjectScript:function(script, method, args) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.InstantiateObjectScript;
    this.script = script;
    this.method = method;
    this.args = args
  }, UnregisterGUIMessage:function(event) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.DisableGUIMessage;
    this.event = event
  }, GUIMessage:function(msg, event) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GUIMessage;
    this.msg = msg;
    this.event = event
  }, QueryUpdate:function(space, id, solidAngle) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.QueryUpdate;
    this.space = space;
    this.id = id;
    this.solidAngle = solidAngle
  }, QueryRemoval:function(space, id) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.QueryRemoval;
    this.space = space;
    this.id = id
  }, Disconnect:function(space, id) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Disconnect;
    this.space = space;
    this.id = id
  }, SendODPMessage:function(space, source_object, source_port, dest_object, dest_port, payload) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.SendODPMessage;
    this.space = space;
    this.source_object = source_object;
    this.source_port = source_port;
    this.dest_object = dest_object;
    this.dest_port = dest_port;
    this.payload = payload
  }, Location:function(space, id, loc, vis) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Location;
    this.space = space;
    this.id = id;
    if(loc) {
      Kata.LocationCopyUnifyTime(loc, this)
    }
    if(vis) {
      this.vis = vis
    }
  }, Visual:function(space, id, vis) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Visual;
    this.space = space;
    this.id = id;
    this.vis = vis
  }, Query:function(space, id, sa) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Query;
    this.space = space;
    this.id = id;
    this.sa = sa
  }, Subscription:function(space, id, observed, enable) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Subscription;
    this.space = space;
    this.id = id;
    this.observed = observed;
    this.enable = enable
  }, Physics:function(space, id, data) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.Physics;
    this.space = space;
    this.id = id;
    if(!(data instanceof Array)) {
      throw"ScriptProtocol.Physics: data must be serialized array of bytes";
    }
    this.data = data
  }, CreateObject:function(script, cons, args) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.CreateObject;
    this.script = script;
    this.constructor = cons;
    this.args = args
  }, GFXCreateNode:function(space, observer, remotePresence) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "Create";
    this.space = space + observer;
    this.id = remotePresence.id();
    this.spaceid = this.space;
    Kata.LocationCopyUnifyTime(remotePresence.mLocation, this)
  }, GFXQueryMeshAspectRatio:function(space, observer, remotePresence) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "QueryMeshAspectRatio";
    this.space = space + observer;
    this.spaceid = this.space;
    this.id = remotePresence.id()
  }, GFXProjectPoint:function(space, observer, pos, data) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "ProjectPoint";
    this.space = space + observer;
    this.spaceid = this.space;
    this.id = observer;
    this.pos = pos;
    this.data = data
  }, GFXCustom:function(space, observer, data) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "Custom";
    this.data = data;
    this.space = space + observer;
    this.spaceid = this.space
  }, GFXMoveNode:function(space, observer, remotePresence, data) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "Move";
    this.space = space + observer;
    this.id = remotePresence.id();
    this.spaceid = this.space;
    if(data) {
      Kata.LocationCopyUnifyTime(data.loc, this)
    }
  }, GFXAnimate:function(space, observer, remotePresence, animation) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "Animate";
    this.space = space + observer;
    this.id = remotePresence.id();
    this.spaceid = this.space;
    this.animation = animation
  }, GFXLabel:function(space, observer, remoteID, label, offset, color) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.msg = "Label";
    this.space = space + observer;
    this.id = remoteID;
    this.spaceid = this.space;
    this.label = label;
    this.offset = offset;
    this.color = color
  }, GFXDestroyNode:function(space, observer, remotePresence) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space + observer;
    this.msg = "Destroy";
    this.id = remotePresence.id()
  }, generateGFXUpdateVisualMessages:function(space, observer, remotePresence, prevMesh) {
    var messageList = [];
    if(remotePresence.rMesh) {
      messageList.push(new Kata.ScriptProtocol.FromScript.GFXUpdateVisualMesh(space, observer, remotePresence.id(), remotePresence.rMesh, remotePresence.rAnim, remotePresence.rUpAxis, remotePresence.scale()))
    }else {
      if(prevMesh) {
        messageList.push(new Kata.ScriptProtocol.FromScript.GFXUpdateVisualMesh(space, observer, remotePresence.id(), null))
      }else {
      }
    }
    return messageList
  }, GraphicsMessage:function(space, observer, id) {
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space + observer;
    this.spaceid = this.space;
    this.id = id
  }, GFXUpdateVisualMesh:function(space, observer, id, mesh, anim, up, scale) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    if(mesh == null) {
      this.msg = "DestroyMesh"
    }else {
      this.msg = "Mesh";
      this.mesh = mesh;
      this.anim = anim;
      this.up_axis = up;
      this.scale = scale
    }
  }, GFXAttachCamera:function(space, observer, id, canvasId) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    this.msg = "AttachCamera";
    this.target = canvasId
  }, GFXShadows:function(space, observer, id, enable, index) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    this.msg = "Shadows";
    this.enable = enable;
    this.index = index
  }, GFXBackground:function(space, observer, id, backgroundType, sunbeams, curTextures, prevTextures, curWeight) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    this.msg = "Background";
    this.type = backgroundType;
    this.sunbeams = sunbeams;
    if(curWeight === undefined) {
      curWeight = 1
    }
    this.curweight = curWeight;
    if(prevTextures) {
      this.prevtextures = prevTextures
    }
    this.curtextures = curTextures
  }, GFXAttachCameraTexture:function(space, observer, id, textureObjectSpace, textureObjectID, texture) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    this.msg = "AttachCameraTexture";
    this.space = space + observer;
    this.id = id;
    this.texobjid = textureObjectID;
    this.texobjspace = textureObjectSpace;
    this.texname = texture
  }, GFXDetachCamera:function(space, observer, id) {
    Kata.ScriptProtocol.FromScript.GraphicsMessage.call(this, space, observer, id);
    this.msg = "DetachCamera";
    this.space = space + observer;
    this.id = id
  }, GFXEnableEvent:function(space, type) {
    this.msg = "Enable";
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space;
    this.type = type
  }, GFXDisableEvent:function(space, type) {
    this.msg = "Disable";
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space;
    this.type = type
  }, GFXRaytrace:function(space, requestid, pos, dir, multiple, infinite) {
    this.msg = "Raytrace";
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space;
    this.requestid = requestid;
    this.pos = pos;
    this.dir = dir;
    this.multiple = multiple;
    this.infinite = infinite
  }, GFXHighlight:function(space, objid, enable) {
    this.msg = "Highlight";
    this.__type = Kata.ScriptProtocol.FromScript.Types.GraphicsMessage;
    this.space = space;
    this.id = objid;
    this.enable = enable
  }}, ToScript:{Types:{Connected:"tcon", ConnectionFailed:"tfyl", Disconnected:"tdis", ReceiveODPMessage:"todp", QueryEvent:"tque", PresenceLocUpdate:"tloc", GUIMessage:"tgui"}, reconstitute:function(data) {
    data = Kata.ScriptProtocol.commonReconstitute(data);
    return data
  }, Connected:function(space, id, loc, bounds, visual) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.Connected;
    this.space = space;
    this.id = id;
    this.loc = loc;
    this.bounds = bounds;
    this.visual = visual
  }, ConnectionFailed:function(space, object, reason) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.ConnectionFailed;
    this.space = space;
    this.object = object;
    this.reason = reason
  }, Disconnected:function(space) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.Disconnected;
    this.space = space
  }, GUIMessage:function(msg) {
    for(var field in msg) {
      this[field] = msg[field]
    }
    this.__type = Kata.ScriptProtocol.ToScript.Types.GUIMessage
  }, ReceiveODPMessage:function(space, source_object, source_port, dest_object, dest_port, payload) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.ReceiveODPMessage;
    this.space = space;
    this.source_object = source_object;
    this.source_port = source_port;
    this.dest_object = dest_object;
    this.dest_port = dest_port;
    this.payload = payload
  }, QueryEvent:function(space, observed, entered, loc, visual) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.QueryEvent;
    this.space = space;
    this.observed = observed;
    this.entered = entered;
    this.loc = loc;
    this.visual = visual
  }, PresenceLocUpdate:function(space, observed, loc, visual, physics) {
    this.__type = Kata.ScriptProtocol.ToScript.Types.PresenceLocUpdate;
    this.space = space;
    this.observed = observed;
    this.loc = loc;
    this.visual = visual;
    this.physics = physics
  }}}
}, "katajs/oh/impl/ScriptProtocol.js");
Kata.require(["katajs/core/Channel.js", "katajs/core/WebWorker.js"], function() {
  Kata.MainThread = function(blessed_script, blessed_class, blessed_args) {
    this.mObjectHostWorker = new Kata.WebWorker("katajs/oh/ObjectHostWorker.js", "Kata.ObjectHostWorker", {script:blessed_script, method:blessed_class, args:blessed_args});
    this.mObjectHostChannel = this.mObjectHostWorker.getChannel();
    this.mObjectHostChannel.registerListener(Kata.bind(this.receivedMessage, this));
    this.mObjectHostWorker.go()
  };
  Kata.MainThread.prototype.getChannel = function() {
    return this.mObjectHostChannel
  };
  Kata.MainThread.prototype.receivedMessage = function(channel, data) {
    if(data.__type == Kata.ScriptProtocol.FromScript.Types.InstantiateObjectScript) {
      var args = data.args;
      var clsName = data.method;
      var clsTree = clsName.split(".");
      Kata.require([data.script], function() {
        var cls = self;
        for(var i = 0;cls && i < clsTree.length;i++) {
          cls = cls[clsTree[i]]
        }
        if(!cls) {
          Kata.error(clsName + " is undefined:" + this.mJSFile)
        }
        if(network_debug) {
          console.log("going!")
        }
        var child = new cls(channel, args)
      })
    }
  }
}, "katajs/oh/MainThread.js");
Kata.require(["katajs/oh/HostedObject.js", "katajs/oh/SessionManager.js", "katajs/core/URL.js"], function() {
  Kata.ObjectHost = function(blessed_script, blessed_class, blessed_args, main_thread_script) {
    this.mSimulations = [];
    this.mSimulationsByName = {};
    this.mSimulationCallbacksByName = {};
    this.mObjects = {};
    this.mSessionManager = new Kata.SessionManager;
    if(main_thread_script) {
      this.createMainThreadObject(blessed_script, blessed_class, blessed_args, main_thread_script)
    }else {
      this.createObject(blessed_script, blessed_class, blessed_args)
    }
    if(network_debug) {
      console.log("ObjectHosted!")
    }
  };
  Kata.ObjectHost.prototype.registerSimulation = function(channel, name) {
    this.mSimulations.push(channel);
    this.mSimulationsByName[name] = channel;
    channel.registerListener(Kata.bind(this.receivedSimulationMessage, this, name))
  };
  Kata.ObjectHost.prototype.sendToSimulation = function(data, name) {
    if(!name) {
      for(name in this.mSimulationsByName) {
        this.mSimulationsByName[name].sendMessage(data)
      }
    }else {
      this.mSimulationsByName[name].sendMessage(data)
    }
  };
  Kata.ObjectHost.prototype.registerSimulationCallback = function(simName, object) {
    if(simName in this.mSimulationCallbacksByName) {
      this.mSimulationCallbacksByName[simName].push(object)
    }else {
      this.mSimulationCallbacksByName[simName] = [object]
    }
  };
  Kata.ObjectHost.prototype.unregisterSimulationCallback = function(simName, object) {
    var callbacks = this.mSimulationCallbacksByName[simName];
    if(callbacks.length == 1) {
      delete this.mSimulationCallbacksByName[simName]
    }else {
      for(var i = 0;i < callbacks.length;++i) {
        if(callbacks[i] == object) {
          callbacks[i] = callbacks[callbacks.length - 1];
          callbacks.pop();
          break
        }
      }
    }
  };
  Kata.ObjectHost.prototype.receivedSimulationMessage = function(simName, channel, data) {
    var cbArray = this.mSimulationCallbacksByName[simName];
    if(cbArray) {
      for(var i = 0;i < cbArray.length;++i) {
        cbArray[i].handleMessageFromSimulation(simName, channel, data)
      }
    }
  };
  Kata.ObjectHost.prototype.privateIdGenerator = function() {
    var retval = 0;
    return function() {
      retval += 1;
      return"" + retval
    }
  }();
  Kata.ObjectHost.prototype.createObject = function(script, cons, args) {
    var privid = this.privateIdGenerator();
    var createdObject = this.generateObject(privid);
    if(script && cons && args) {
      createdObject.createScript(script, cons, args)
    }
  };
  Kata.ObjectHost.prototype.createMainThreadObject = function(script, cons, args, mainThreadChannel) {
    var privid = this.privateIdGenerator();
    var createdObject = this.generateObject(privid);
    if(script && cons && args) {
      createdObject.createMainThreadScript(script, cons, args, mainThreadChannel)
    }
  };
  Kata.ObjectHost.prototype.generateObject = function(id) {
    if(network_debug) {
      console.log("Creating Object " + id)
    }
    this.mObjects[id] = new Kata.HostedObject(this, id);
    return this.mObjects[id]
  };
  Kata.ObjectHost.prototype.connect = function(ho, req, auth) {
    if(req.scale.length == 3) {
      Kata.warn("outdated bounds: " + req.scale);
      req.scale = [0, 0, 0, req.scale[0]]
    }
    this.mSessionManager.connect(ho, req, auth)
  };
  Kata.ObjectHost.prototype.disconnect = function(ho, req) {
    this.mSessionManager.disconnect(ho, req)
  };
  Kata.ObjectHost.prototype.sendODPMessage = function(space, src_obj, src_port, dst_obj, dst_port, payload) {
    this.mSessionManager.sendODPMessage(space, src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.ObjectHost.prototype.registerProxQuery = function(space, id, sa) {
    this.mSessionManager.registerProxQuery(space, id, sa)
  };
  Kata.ObjectHost.prototype.locUpdateRequest = function(space, id, loc, visual) {
    this.mSessionManager.locUpdateRequest(space, id, loc, visual)
  };
  Kata.ObjectHost.prototype.requestQueryRemoval = function(space, id) {
    this.mSessionManager.requestQueryRemoval(space, id)
  };
  Kata.ObjectHost.prototype.requestQueryUpdate = function(space, id, newSolidAngle) {
    this.mSessionManager.requestQueryRemoval(space, id, newSolidAngle)
  };
  Kata.ObjectHost.prototype.setPhysics = function(space, id, data) {
    this.mSessionManager.setPhysics(space, id, data)
  };
  Kata.ObjectHost.prototype.subscribe = function(space, id, observe) {
    this.mSessionManager.subscribe(space, id, observe)
  };
  Kata.ObjectHost.prototype.unsubscribe = function(space, id, observe) {
    this.mSessionManager.unsubscribe(space, id, observe)
  }
}, "katajs/oh/ObjectHost.js");
Kata.require(["katajs/space/loop/Space.js", "katajs/oh/ObjectHost.js", "katajs/oh/plugins/sirikata/SirikataSpaceConnection.js", "katajs/oh/plugins/loop/LoopbackSpaceConnection.js"], function() {
  self["Kata"] = Kata;
  Kata.ObjectHostWorker = Kata["ObjectHostWorker"] = function(graphicsChannel, blessed_args) {
    this.mObjectHost = new Kata.ObjectHost(blessed_args.script, blessed_args.method, blessed_args.args, blessed_args.args.main_thread ? graphicsChannel : false);
    if(!blessed_args.args.disable_simulation) {
      this.mObjectHost.registerSimulation(graphicsChannel, "graphics")
    }
  }
}, "katajs/oh/ObjectHostWorker.js");
Kata.require(["katajs/core/SpaceID.js", "katajs/core/ObjectID.js", "katajs/core/PresenceID.js", "katajs/oh/odp/PortID.js"], function() {
  if(typeof Kata.ODP == "undefined") {
    Kata.ODP = {}
  }
  Kata.ODP.Endpoint = function() {
    if(arguments.length == 2) {
      this.mSpace = arguments[0].space();
      this.mObject = arguments[0].object();
      this.mPort = arguments[1]
    }else {
      if(arguments.length == 3) {
        this.mSpace = arguments[0];
        this.mObject = arguments[1];
        this.mPort = arguments[2]
      }else {
        throw"Invalid endpoint constructor argument list";
      }
    }
  };
  Kata.ODP.Endpoint.prototype.space = function() {
    return this.mSpace
  };
  Kata.ODP.Endpoint.prototype.object = function() {
    return this.mObject
  };
  Kata.ODP.Endpoint.prototype.port = function() {
    return this.mPort
  };
  Kata.ODP.Endpoint.prototype.presenceID = function() {
    return new Kata.PresenceID(this.mSpace, this.mObject)
  };
  Kata.ODP.Endpoint.any = function() {
    return new Kata.ODP.Endpoint(Kata.SpaceID.any(), Kata.ObjectID.any(), Kata.ODP.PortID.any())
  };
  Kata.ODP.Endpoint.prototype.toConciseString = function() {
    return this.mSpace.toString() + ":" + this.mObject.toString() + ":" + this.mPort.toString()
  };
  Kata.ODP.Endpoint.prototype.toString = function() {
    return"ODP.Endpoint(" + this.toConciseString() + ")"
  }
}, "katajs/oh/odp/Endpoint.js");
Kata.require([], function() {
  if(typeof Kata.ODP == "undefined") {
    Kata.ODP = {}
  }
  Kata.ODP.PortID = {};
  Kata.ODP.PortID.nil = function() {
    return 0
  };
  Kata.ODP.PortID.any = function() {
    return 16777215
  }
}, "katajs/oh/odp/PortID.js");
Kata.require(["katajs/oh/odp/Endpoint.js"], function() {
  if(typeof Kata.ODP == "undefined") {
    Kata.ODP = {}
  }
  Kata.ODP.Port = function(endpoint, send_func, release_func) {
    this.mEndpoint = endpoint;
    this.mSendFunc = send_func;
    this.mReleaseFunc = release_func;
    this.mReceiveHandlers = []
  };
  Kata.ODP.Port.prototype.send = function(dest, payload) {
    this.mSendFunc(this.mEndpoint, dest, payload)
  };
  Kata.ODP.Port.prototype.receive = function(handler) {
    this.receiveFrom(Kata.ODP.Endpoint.any(), handler)
  };
  Kata.ODP.Port.prototype.receiveFrom = function(src, handler) {
    this.mReceiveHandlers[src] = handler
  };
  Kata.ODP.Port.prototype.deliver = function(src, payload) {
    if(this._tryDeliver(src, src, payload)) {
      return true
    }
    if(this._tryDeliver(new Kata.ODP.Endpoint(src.space(), Kata.ObjectID.any(), src.port()), src, payload)) {
      return true
    }
    if(this._tryDeliver(new Kata.ODP.Endpoint(Kata.SpaceID.any(), Kata.ObjectID.any(), src.port()), src, payload)) {
      return true
    }
    if(this._tryDeliver(new Kata.ODP.Endpoint(src.space(), src.object(), Kata.ODP.PortID.any()), src, payload)) {
      return true
    }
    if(this._tryDeliver(new Kata.ODP.Endpoint(src.space(), Kata.ObjectID.any(), Kata.ODP.PortID.any()), src, payload)) {
      return true
    }
    if(this._tryDeliver(new Kata.ODP.Endpoint(Kata.SpaceID.any(), Kata.ObjectID.any(), Kata.ODP.PortID.any()), src, payload)) {
      return true
    }
    return false
  };
  Kata.ODP.Port.prototype._tryDeliver = function(match, src, payload) {
    if(match in this.mReceiveHandlers) {
      var handler = this.mReceiveHandlers[match];
      handler(src, this.mEndpoint, payload);
      return true
    }
    return false
  };
  Kata.ODP.Port.prototype.toString = function() {
    return"ODP.Port(" + this.mEndpoint.toConciseString() + ")"
  };
  Kata.ODP.Port.prototype.close = function() {
    var rfunc = this.mReleaseFunc;
    var endpoint = this.mEndpoint;
    delete this.mEndpoint;
    delete this.mSendFunc;
    delete this.mReleaseFunc;
    rfunc(endpoint)
  }
}, "katajs/oh/odp/Port.js");
Kata.require(["katajs/oh/odp/Port.js"], function() {
  if(typeof Kata.ODP == "undefined") {
    Kata.ODP = {}
  }
  Kata.ODP.Service = function(send_func) {
    this.mODPServiceSendFunc = send_func;
    this.mODPServiceBoundPorts = {}
  };
  Kata.ODP.Service.prototype.bindODPPort = function(space, object, port) {
    var odp_ep = new Kata.ODP.Endpoint(space, object, port);
    var odp_port = this.mODPServiceBoundPorts[odp_ep];
    if(typeof odp_port != "undefined") {
      throw"Tried to bind previously bound port.";
    }
    odp_port = new Kata.ODP.Port(odp_ep, this.mODPServiceSendFunc, Kata.bind(this._handleODPServiceReleasePort, this));
    this.mODPServiceBoundPorts[odp_ep] = odp_port;
    return odp_port
  };
  Kata.ODP.Service.prototype._handleODPServiceReleasePort = function(endpoint) {
    if(typeof this.mODPServiceBoundPorts[endpoint] == "undefined") {
      Kata.error("Got ODP port release for unallocated port.")
    }
    delete this.mODPServiceBoundPorts[endpoint]
  };
  Kata.ODP.Service.prototype._deliverODPMessage = function(src_ep, dest_ep, payload) {
    var odp_port = this.mODPServiceBoundPorts[dest_ep];
    if(typeof odp_port == "undefined") {
      return
    }
    odp_port.deliver(src_ep, payload)
  }
}, "katajs/oh/odp/Service.js");
Kata.require(["katajs/oh/SpaceConnection.js", "katajs/oh/SessionManager.js", "katajs/space/loop/Space.js"], function() {
  var SUPER = Kata.SpaceConnection.prototype;
  Kata.LoopbackSpaceConnection = function(parent, spaceurl) {
    SUPER.constructor.call(this, parent);
    this.mSpace = Kata.LoopbackSpace.spaces[Kata.URL.host(spaceurl)];
    this.mSpaceURL = spaceurl;
    if(!this.mSpace) {
      Kata.error("Couldn't find loopback space: " + spaceurl.toString())
    }
    this.mObjectID = {};
    this.mLocalID = {}
  };
  Kata.extend(Kata.LoopbackSpaceConnection, Kata.SpaceConnection.prototype);
  Kata.LoopbackSpaceConnection.prototype.connectObject = function(id, auth, loc, vis) {
    var location = Kata.LocationIdentity(new Date);
    for(var key in loc) {
      location[key] = loc[key]
    }
    this.mSpace.connectObject(id, {connected:Kata.bind(this.connectResponse, this), message:Kata.bind(this.receiveODPMessage, this), prox:Kata.bind(this.proxEvent, this), presenceLocUpdate:Kata.bind(this.presenceLocUpdate, this), scale:loc.scale, visual:vis}, location)
  };
  Kata.LoopbackSpaceConnection.prototype.connectResponse = function(id, object, loc, visual) {
    this.mObjectID[id] = object;
    this.mLocalID[object] = id;
    if(object) {
      this.mParent.connectionResponse(id, true, {space:this.mSpaceURL, object:object}, {loc:loc, visual:visual})
    }else {
      this.mParent.connectionResponse(id, false)
    }
  };
  Kata.LoopbackSpaceConnection.prototype.disconnectObject = function(id) {
    this.mSpace.disconnectObject(id)
  };
  Kata.LoopbackSpaceConnection.prototype.sendODPMessage = function(src_obj, src_port, dst_obj, dst_port, payload) {
    this.mSpace.sendODPMessage(src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.LoopbackSpaceConnection.prototype.receiveODPMessage = function(src_obj, src_port, dst_obj, dst_port, payload) {
    this.mParent.receiveODPMessage(this.mSpaceURL, src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.LoopbackSpaceConnection.prototype.registerProxQuery = function(id, sa) {
    this.mSpace.registerProxQuery(id, sa)
  };
  Kata.LoopbackSpaceConnection.prototype.proxEvent = function(id, observed, entered, properties) {
    this.mParent.proxEvent(this.mSpaceURL, id, observed, entered, properties)
  };
  Kata.LoopbackSpaceConnection.prototype.locUpdateRequest = function(id, loc, visual) {
    this.mSpace.locUpdateRequest(id, loc, visual)
  };
  Kata.LoopbackSpaceConnection.prototype.requestQueryRemoval = function(id) {
    this.mSpace.requestQueryRemoval(id)
  };
  Kata.LoopbackSpaceConnection.prototype.requestQueryUpdate = function(id, newAngle) {
    this.mSpace.requestQueryUpdate(id, newAngle)
  };
  Kata.LoopbackSpaceConnection.prototype.subscribe = function(id, observed) {
    this.mSpace.subscriptionRequest(id, observed, true)
  };
  Kata.LoopbackSpaceConnection.prototype.unsubscribe = function(id, observed) {
    this.mSpace.subscriptionRequest(id, observed, false)
  };
  Kata.LoopbackSpaceConnection.prototype.presenceLocUpdate = function(from, to, loc, visual) {
    this.mParent.presenceLocUpdate(this.mSpaceURL, from, to, loc, visual)
  };
  Kata.SessionManager.registerProtocolHandler("loop", Kata.LoopbackSpaceConnection);
  var loopspace = new Kata.LoopbackSpace(Kata.URL("loop://localhost"))
}, "katajs/oh/plugins/loop/LoopbackSpaceConnection.js");
(function() {
  Kata.Frame = {};
  Kata.Frame.parse = function(data) {
    if(data.length < 4) {
      return null
    }
    var len = data[0] * 16777216 + data[1] * 65536 + data[2] * 256 + data[3];
    if(data.length < 4 + len) {
      return null
    }
    data.splice(0, 4);
    return data.splice(0, len)
  }
})();
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.AggregateBoundingInfo = PROTO.Message("Sirikata.Protocol.AggregateBoundingInfo", {center_offset:{options:{packed:true}, multiplicity:PROTO.optional, type:function() {
  return PBJ.vector3f
}, id:1}, center_bounds_radius:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.Float
}, id:2}, max_object_size:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.Float
}, id:3}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Empty = PROTO.Message("Sirikata.Protocol.Empty", {});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Frame = PROTO.Message("Sirikata.Protocol.Frame", {payload:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.bytes
}, id:1}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
if(typeof Sirikata.Protocol.Loc == "undefined") {
  Sirikata.Protocol.Loc = {}
}
Sirikata.Protocol.Loc._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Loc.LocationUpdate = PROTO.Message("Sirikata.Protocol.Loc.LocationUpdate", {object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:1}, seqno:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:6}, epoch:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:8}, location:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionVector
}, id:2}, orientation:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionQuaternion
}, id:3}, aggregate_bounds:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.AggregateBoundingInfo
}, id:10}, mesh:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:5}, physics:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:7}, parent:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.uuid
}, id:9}, index_id:{options:{packed:true}, multiplicity:PROTO.repeated, type:function() {
  return PROTO.uint32
}, id:11}});
Sirikata.Protocol.Loc.BulkLocationUpdate = PROTO.Message("Sirikata.Protocol.Loc.BulkLocationUpdate", {update:{options:{}, multiplicity:PROTO.repeated, type:function() {
  return Sirikata.Protocol.Loc.LocationUpdate
}, id:1}});
Sirikata.Protocol.Loc.LocationUpdateRequest = PROTO.Message("Sirikata.Protocol.Loc.LocationUpdateRequest", {location:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionVector
}, id:1}, orientation:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionQuaternion
}, id:2}, bounds:{options:{packed:true}, multiplicity:PROTO.optional, type:function() {
  return PBJ.boundingsphere3f
}, id:3}, mesh:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:4}, physics:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:5}, epoch:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:6}});
Sirikata.Protocol.Loc.Container = PROTO.Message("Sirikata.Protocol.Loc.Container", {update_request:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Loc.LocationUpdateRequest
}, id:1}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
if(typeof Sirikata.Protocol.Object == "undefined") {
  Sirikata.Protocol.Object = {}
}
Sirikata.Protocol.Object._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Object.ObjectMessage = PROTO.Message("Sirikata.Protocol.Object.ObjectMessage", {source_object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:1}, source_port:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint32
}, id:2}, dest_object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:3}, dest_port:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint32
}, id:4}, unique:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:5}, payload:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:6}});
Sirikata.Protocol.Object.Noise = PROTO.Message("Sirikata.Protocol.Object.Noise", {payload:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.bytes
}, id:1}});
Sirikata.Protocol.Object.Ping = PROTO.Message("Sirikata.Protocol.Object.Ping", {ping:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.time
}, id:7}, distance:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.Double
}, id:8}, id:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:9}, payload:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:10}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
if(typeof Sirikata.Protocol.Prox == "undefined") {
  Sirikata.Protocol.Prox = {}
}
Sirikata.Protocol.Prox._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Prox.QueryRequest = PROTO.Message("Sirikata.Protocol.Prox.QueryRequest", {query_angle:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.Float
}, id:1}, query_max_count:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:2}, query_parameters:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:3}});
Sirikata.Protocol.Prox.IndexProperties = PROTO.Message("Sirikata.Protocol.Prox.IndexProperties", {id:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint32
}, id:1}, index_id:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:2}, DynamicClassification:PROTO.Enum("Sirikata.Protocol.Prox.IndexProperties.DynamicClassification", {Static:1, Dynamic:2}), dynamic_classification:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Prox.IndexProperties.DynamicClassification
}, id:3}});
Sirikata.Protocol.Prox.ObjectAddition = PROTO.Message("Sirikata.Protocol.Prox.ObjectAddition", {object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:1}, location:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.TimedMotionVector
}, id:2}, orientation:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.TimedMotionQuaternion
}, id:3}, aggregate_bounds:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.AggregateBoundingInfo
}, id:10}, seqno:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:5}, mesh:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:6}, physics:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:7}, parent:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.uuid
}, id:8}, ObjectType:PROTO.Enum("Sirikata.Protocol.Prox.ObjectAddition.ObjectType", {Object:1, Aggregate:2}), type:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Prox.ObjectAddition.ObjectType
}, id:9}});
Sirikata.Protocol.Prox.ObjectRemoval = PROTO.Message("Sirikata.Protocol.Prox.ObjectRemoval", {RemovalType:PROTO.Enum("Sirikata.Protocol.Prox.ObjectRemoval.RemovalType", {Transient:1, Permanent:2}), object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:1}, seqno:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:2}, type:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Prox.ObjectRemoval.RemovalType
}, id:3}});
Sirikata.Protocol.Prox.ProximityUpdate = PROTO.Message("Sirikata.Protocol.Prox.ProximityUpdate", {addition:{options:{}, multiplicity:PROTO.repeated, type:function() {
  return Sirikata.Protocol.Prox.ObjectAddition
}, id:1}, removal:{options:{}, multiplicity:PROTO.repeated, type:function() {
  return Sirikata.Protocol.Prox.ObjectRemoval
}, id:2}, index_properties:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Prox.IndexProperties
}, id:3}});
Sirikata.Protocol.Prox.ProximityResults = PROTO.Message("Sirikata.Protocol.Prox.ProximityResults", {t:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.time
}, id:1}, update:{options:{}, multiplicity:PROTO.repeated, type:function() {
  return Sirikata.Protocol.Prox.ProximityUpdate
}, id:2}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
if(typeof Sirikata.Protocol.Session == "undefined") {
  Sirikata.Protocol.Session = {}
}
Sirikata.Protocol.Session._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.Session.VersionInfo = PROTO.Message("Sirikata.Protocol.Session.VersionInfo", {name:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:1}, version:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:2}, major:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:3}, minor:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:4}, revision:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:5}, vcs_version:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:6}});
Sirikata.Protocol.Session.Connect = PROTO.Message("Sirikata.Protocol.Session.Connect", {ConnectionType:PROTO.Enum("Sirikata.Protocol.Session.Connect.ConnectionType", {Fresh:1, Migration:2}), version:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.VersionInfo
}, id:11}, type:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.Session.Connect.ConnectionType
}, id:1}, object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:2}, auth:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:8}, loc:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionVector
}, id:3}, orientation:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionQuaternion
}, id:4}, bounds:{options:{packed:true}, multiplicity:PROTO.optional, type:function() {
  return PBJ.boundingsphere3f
}, id:5}, query_angle:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.Float
}, id:6}, query_max_count:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:10}, query_parameters:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:12}, mesh:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:7}, physics:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:9}, oh_name:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:13}, zernike:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:14}});
Sirikata.Protocol.Session.ConnectResponse = PROTO.Message("Sirikata.Protocol.Session.ConnectResponse", {Response:PROTO.Enum("Sirikata.Protocol.Session.ConnectResponse.Response", {Success:1, Redirect:2, Error:3}), version:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.VersionInfo
}, id:8}, response:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.Session.ConnectResponse.Response
}, id:1}, redirect:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:2}, loc:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionVector
}, id:3}, orientation:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.TimedMotionQuaternion
}, id:4}, bounds:{options:{packed:true}, multiplicity:PROTO.optional, type:function() {
  return PBJ.boundingsphere3f
}, id:5}, mesh:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:6}, physics:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:7}});
Sirikata.Protocol.Session.ConnectAck = PROTO.Message("Sirikata.Protocol.Session.ConnectAck", {});
Sirikata.Protocol.Session.InitiateMigration = PROTO.Message("Sirikata.Protocol.Session.InitiateMigration", {new_server:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:1}});
Sirikata.Protocol.Session.Disconnect = PROTO.Message("Sirikata.Protocol.Session.Disconnect", {object:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:1}, reason:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:2}});
Sirikata.Protocol.Session.Coordinate = PROTO.Message("Sirikata.Protocol.Session.Coordinate", {CoordinationType:PROTO.Enum("Sirikata.Protocol.Session.Coordinate.CoordinationType", {Add:1, Remove:2, MigrateTo:3, MigrateFrom:4, MigrateReq:5, Ready:6, Ack:7}), type:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.Session.Coordinate.CoordinationType
}, id:1}, object:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.uuid
}, id:2}, entity:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.uuid
}, id:3}, oh_name:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:4}, migrate_capacity:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:5}, migrate_threshold:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.int32
}, id:6}});
Sirikata.Protocol.Session.OHMigration = PROTO.Message("Sirikata.Protocol.Session.OHMigration", {MigrationType:PROTO.Enum("Sirikata.Protocol.Session.OHMigration.MigrationType", {Object:1, Entity:2, Ack:3}), type:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.Session.OHMigration.MigrationType
}, id:1}, id:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uuid
}, id:2}, oh_name:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:3}, password:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:4}, reason:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.string
}, id:5}, objects:{options:{}, multiplicity:PROTO.repeated, type:function() {
  return PBJ.uuid
}, id:6}});
Sirikata.Protocol.Session.Container = PROTO.Message("Sirikata.Protocol.Session.Container", {seqno:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:8}, connect:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.Connect
}, id:1}, connect_response:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.ConnectResponse
}, id:2}, connect_ack:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.ConnectAck
}, id:3}, init_migration:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.InitiateMigration
}, id:4}, disconnect:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.Disconnect
}, id:5}, coordinate:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.Coordinate
}, id:6}, oh_migration:{options:{}, multiplicity:PROTO.optional, type:function() {
  return Sirikata.Protocol.Session.OHMigration
}, id:7}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
if(typeof Sirikata.Protocol.SST == "undefined") {
  Sirikata.Protocol.SST = {}
}
Sirikata.Protocol.SST._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.SST.SSTChannelHeader = PROTO.Message("Sirikata.Protocol.SST.SSTChannelHeader", {channel_id:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uint8
}, id:1}, transmit_sequence_number:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:2}, ack_count:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uint8
}, id:3}, ack_sequence_number:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint64
}, id:4}, payload:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:5}});
Sirikata.Protocol.SST.SSTStreamHeader = PROTO.Message("Sirikata.Protocol.SST.SSTStreamHeader", {StreamPacketType:PROTO.Enum("Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType", {INIT:1, REPLY:2, DATA:3, ACK:4, DATAGRAM:5}), Flags:PROTO.Flags(123456, "Sirikata.Protocol.SST.SSTStreamHeader.Flags", {CONTINUES:1}), lsid:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint32
}, id:1}, type:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uint8
}, id:2}, flags:{options:{}, multiplicity:PROTO.required, type:function() {
  return Sirikata.Protocol.SST.SSTStreamHeader.Flags
}, id:3}, window:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.uint8
}, id:4}, src_port:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint32
}, id:5}, dest_port:{options:{}, multiplicity:PROTO.required, type:function() {
  return PROTO.uint32
}, id:6}, psid:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint32
}, id:7}, rsid:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint32
}, id:8}, bsn:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.uint64
}, id:9}, payload:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PROTO.bytes
}, id:10}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.TimedMotionQuaternion = PROTO.Message("Sirikata.Protocol.TimedMotionQuaternion", {t:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.time
}, id:1}, position:{options:{packed:true}, multiplicity:PROTO.required, type:function() {
  return PBJ.quaternion
}, id:2}, velocity:{options:{packed:true}, multiplicity:PROTO.required, type:function() {
  return PBJ.quaternion
}, id:3}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.TimedMotionVector = PROTO.Message("Sirikata.Protocol.TimedMotionVector", {t:{options:{}, multiplicity:PROTO.required, type:function() {
  return PBJ.time
}, id:1}, position:{options:{packed:true}, multiplicity:PROTO.required, type:function() {
  return PBJ.vector3f
}, id:2}, velocity:{options:{packed:true}, multiplicity:PROTO.required, type:function() {
  return PBJ.vector3f
}, id:3}});
var Sirikata;
if(typeof Sirikata == "undefined") {
  Sirikata = {}
}
if(typeof Sirikata.Protocol == "undefined") {
  Sirikata.Protocol = {}
}
Sirikata.Protocol._PBJ_Internal = "pbj-0.0.3";
Sirikata.Protocol.TimeSync = PROTO.Message("Sirikata.Protocol.TimeSync", {seqno:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.uint8
}, id:1}, t:{options:{}, multiplicity:PROTO.optional, type:function() {
  return PBJ.time
}, id:2}});
Kata.require(["katajs/oh/SpaceConnection.js", "katajs/oh/SessionManager.js", "katajs/network/TCPSST.js", "katajs/core/Quaternion.js", ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/AggregateBoundingInfo.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/TimedMotionVector.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/TimedMotionQuaternion.pbj.js"], 
["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/Session.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/ObjectMessage.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/Prox.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/Loc.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", 
"katajs/oh/plugins/sirikata/impl/Frame.pbj.js"], "katajs/oh/sst/SSTImpl.js", "katajs/oh/plugins/sirikata/Frame.js", "katajs/oh/plugins/sirikata/Sync.js", "katajs/core/FilterChannel.js", "katajs/core/MessageDispatcher.js", "katajs/oh/Presence.js", "katajs/core/URL.js", "katajs/oh/impl/ScriptProtocol.js"], function() {
  function discardChildStream(success, sptr) {
    if(success != Kata.SST.SUCCESS) {
      Kata.warn("location packet lost due to unsuccessful packet send")
    }
    if(sptr != null) {
      sptr.close(false)
    }else {
      Kata.warn("Failed to connect child stream to loc")
    }
  }
  var SUPER = Kata.SpaceConnection.prototype;
  Kata.SirikataSpaceConnection = function(parent, spaceurl) {
    SUPER.constructor.call(this, parent);
    this.mSpaceURL = spaceurl;
    this.mObjectUUIDs = {};
    this.mLocalIDs = {};
    this.mOutstandingConnectRequests = {};
    this.mConnectedObjects = {};
    var port = 7777;
    if(Kata.URL.port(spaceurl)) {
      port = Kata.URL.port(spaceurl)
    }
    this.mSocket = new Kata.TCPSST(Kata.URL.host(spaceurl), port);
    this.mPrimarySubstream = this.mSocket.clone();
    this.mPrimarySubstream.registerListener(Kata.bind(this._receivedData, this));
    this.mODPHandlers = {};
    this.mIncompleteLocationData = {};
    this.mSync = new Kata.Sirikata.SyncClient(this, new Kata.ODP.Endpoint(this.mSpaceURL, Kata.ObjectID.nil(), this.Ports.TimeSync), new Kata.ODP.Endpoint(this.mSpaceURL, Kata.ObjectID.nil(), this.Ports.TimeSync))
  };
  Kata.extend(Kata.SirikataSpaceConnection, Kata.SpaceConnection.prototype);
  Kata.SirikataSpaceConnection.prototype.Ports = {Session:1, Proximity:2, Location:3, TimeSync:4, Space:253};
  Kata.SirikataSpaceConnection.prototype.ObjectMessageRouter = function(parent_spaceconn) {
    this.mParentSpaceConn = parent_spaceconn
  };
  Kata.SirikataSpaceConnection.prototype.ObjectMessageRouter.prototype.route = function(msg) {
    this.mParentSpaceConn._sendPreparedODPMessage(msg)
  };
  Kata.SirikataSpaceConnection.prototype._getObjectID = function(id) {
    if(!this.mObjectUUIDs[id]) {
      this.mObjectUUIDs[id] = Math.uuid();
      this.mLocalIDs[this.mObjectUUIDs[id]] = id
    }
    return this.mObjectUUIDs[id]
  };
  Kata.SirikataSpaceConnection.prototype._getLocalID = function(objid) {
    return this.mLocalIDs[objid]
  };
  Kata.SirikataSpaceConnection.prototype._toLocalTime = function(t) {
    if(t instanceof Date) {
      return new Date(t.getTime() - this.mSync.offset())
    }else {
      return new Date(t - this.mSync.offset())
    }
  };
  Kata.SirikataSpaceConnection.prototype._toSpaceTime = function(t) {
    if(t instanceof Date) {
      return new Date(t.getTime() + this.mSync.offset())
    }else {
      return new Date(t + this.mSync.offset())
    }
  };
  Kata.SirikataSpaceConnection.prototype._serializeMessage = function(msg) {
    var serialized = new PROTO.ByteArrayStream;
    msg.SerializeToStream(serialized);
    return serialized
  };
  Kata.SirikataSpaceConnection.prototype._generateLocUpdateParts = function(loc, with_defaults) {
    var result = with_defaults ? {loc:undefined, orient:undefined, bounds:[0, 0, 0, 1], visual:""} : {loc:undefined, orient:undefined, bounds:undefined, visual:undefined};
    if(loc.pos || loc.vel) {
      var pos = new Sirikata.Protocol.TimedMotionVector;
      pos.t = this._toSpaceTime(loc.time);
      if(loc.pos) {
        pos.position = loc.pos
      }
      if(loc.vel) {
        pos.velocity = loc.vel
      }
      result.loc = pos
    }
    if(loc.orient || loc.rotvel != undefined && loc.rotaxis != undefined) {
      var orient = new Sirikata.Protocol.TimedMotionQuaternion;
      orient.t = this._toSpaceTime(loc.time);
      if(loc.orient) {
        orient.position = loc.orient
      }
      if(loc.rotvel != undefined && loc.rotaxis != undefined) {
        orient.velocity = Kata.Quaternion.fromAxisAngle(loc.rotaxis, loc.rotvel).array()
      }
      result.orient = orient
    }
    if(loc.scale) {
      if(loc.scale.length === undefined) {
        result.bounds = [0, 0, 0, loc.scale];
        console.log("IMPROPER BOUNDS: number")
      }else {
        if(loc.scale.length == 3) {
          result.bounds = [0, 0, 0, loc.scale[0]];
          Kata.warn("IMPROPER BOUNDS LENGTH")
        }else {
          if(loc.scale.length == 4) {
            result.bounds = loc.scale
          }
        }
      }
    }
    if(loc.visual) {
      result.visual = loc.visual
    }
    return result
  };
  Kata.SirikataSpaceConnection.prototype.connectObject = function(id, auth, loc, vis, query) {
    var objid = this._getObjectID(id);
    var resetTime = false;
    if(loc.posTime === undefined && loc.time === undefined) {
      loc.time = Date.now();
      resetTime = true
    }
    var reqloc = Kata.LocationIdentity(loc.posTime === undefined ? loc.time : loc.posTime);
    Kata.LocationCopyUnifyTime(loc, reqloc);
    reqloc.visual = loc.visual;
    this.mOutstandingConnectRequests[objid] = {loc_bounds:reqloc, visual:vis, reset_time:resetTime, deferred_odp:[]};
    var connect_msg = new Sirikata.Protocol.Session.Connect;
    connect_msg.type = Sirikata.Protocol.Session.Connect.ConnectionType.Fresh;
    connect_msg.object = objid;
    if(auth) {
      if(typeof auth == "string") {
        connect_msg.auth = PROTO.encodeUTF8(auth)
      }else {
        connect_msg.auth = auth
      }
    }
    var loc_parts = this._generateLocUpdateParts(reqloc, true);
    if(loc_parts.loc) {
      connect_msg.loc = loc_parts.loc
    }
    if(loc_parts.orient) {
      connect_msg.orientation = loc_parts.orient
    }
    if(loc_parts.bounds) {
      connect_msg.bounds = loc_parts.bounds
    }
    if(loc_parts.visual) {
      connect_msg.mesh = loc_parts.visual
    }
    if(query > 0 && query != true && query) {
      connect_msg.query_angle = query
    }else {
      if(query) {
        connect_msg.query_angle = 1.0E-26
      }
    }
    var session_msg = new Sirikata.Protocol.Session.Container;
    session_msg.connect = connect_msg;
    this._sendODPMessage(objid, this.Ports.Session, Kata.ObjectID.nil(), this.Ports.Session, this._serializeMessage(session_msg))
  };
  Kata.SirikataSpaceConnection.prototype.disconnectObject = function(id) {
    var disconnect_msg = new Sirikata.Protocol.Session.Disconnect;
    disconnect_msg.object = id;
    disconnect_msg.reason = "Quit";
    var session_msg = new Sirikata.Protocol.Session.Container;
    session_msg.disconnect = disconnect_msg;
    this._sendODPMessage(id, this.Ports.Session, Kata.ObjectID.nil(), this.Ports.Session, this._serializeMessage(session_msg))
  };
  Kata.SirikataSpaceConnection.prototype.sendODPMessage = function(src, src_port, dest, dest_port, payload) {
    this._sendODPMessage(src, src_port, dest, dest_port, payload)
  };
  Kata.SirikataSpaceConnection.prototype._sendODPMessage = function(src, src_port, dest, dest_port, payload) {
    var odp_msg = new Sirikata.Protocol.Object.ObjectMessage;
    odp_msg.source_object = src;
    odp_msg.source_port = src_port;
    odp_msg.dest_object = dest;
    odp_msg.dest_port = dest_port;
    odp_msg.unique = PROTO.I64.fromNumber(0);
    if(typeof payload !== "undefined") {
      if(typeof payload.length === "undefined" || payload.length > 0) {
        if(typeof payload == "string") {
          odp_msg.payload = PROTO.encodeUTF8(payload)
        }else {
          odp_msg.payload = payload
        }
      }
    }
    this._sendPreparedODPMessage(odp_msg)
  };
  Kata.SirikataSpaceConnection.prototype._sendPreparedODPMessage = function(odp_msg) {
    var serialized = new PROTO.ArrayBufferStream;
    odp_msg.SerializeToStream(serialized);
    this.mPrimarySubstream.sendMessage(serialized.getUint8Array())
  };
  Kata.SirikataSpaceConnection.prototype._handleDisconnected = function(substream) {
    if(substream !== this.mPrimarySubstream) {
      return
    }
    for(var objid in this.mConnectedObjects) {
      this.mParent.disconnected(objid, this.mSpaceURL)
    }
    for(var objid in this.mOutstandingConnectRequests) {
      var id = this._getLocalID(objid);
      this.mParent.connectionResponse(id, false, {space:this.mSpaceURL, object:objid}, {msg:"Couldn't connect to space server."})
    }
    this.mParent.spaceConnectionDisconnected(this)
  };
  Kata.SirikataSpaceConnection.prototype._receivedData = function(substream, data) {
    if(data === undefined || data === null) {
      this._handleDisconnected(substream);
      return
    }
    var odp_msg = new Sirikata.Protocol.Object.ObjectMessage;
    odp_msg.ParseFromStream(new PROTO.Uint8ArrayStream(data));
    if(odp_msg.source_object == Kata.ObjectID.nil() && odp_msg.dest_port == this.Ports.Session) {
      this._handleSessionMessage(odp_msg);
      return
    }
    var shortcut_handler = this.mODPHandlers[odp_msg.dest_object + odp_msg.dest_port];
    if(shortcut_handler) {
      shortcut_handler(this.mSpaceURL, odp_msg.source_object, odp_msg.source_port, odp_msg.dest_object, odp_msg.dest_port, odp_msg.payload);
      return
    }
    var dest_obj_data = this.mConnectedObjects[odp_msg.dest_object];
    if(dest_obj_data) {
      var sst_handled = dest_obj_data.odpDispatcher.dispatchMessage(odp_msg);
      if(!sst_handled) {
        this._tryDeliverODP(odp_msg)
      }
    }
  };
  Kata.SirikataSpaceConnection.prototype._receiveODPMessage = function(dest, dest_port, cb) {
    this.mODPHandlers[dest + dest_port] = cb
  };
  Kata.SirikataSpaceConnection.prototype._tryDeliverODP = function(odp_msg) {
    var connect_info = this.mOutstandingConnectRequests[odp_msg.dest_object];
    if(connect_info) {
      connect_info.deferred_odp.push(odp_msg);
      return
    }
    this._deliverODP(odp_msg)
  };
  Kata.SirikataSpaceConnection.prototype._deliverODP = function(odp_msg) {
    this.mParent.receiveODPMessage(this.mSpaceURL, odp_msg.source_object, odp_msg.source_port, odp_msg.dest_object, odp_msg.dest_port, odp_msg.payload)
  };
  Kata.SirikataSpaceConnection.prototype._handleSessionMessage = function(odp_msg) {
    var session_msg = new Sirikata.Protocol.Session.Container;
    session_msg.ParseFromStream(PROTO.CreateArrayStream(odp_msg.payload));
    var objid = odp_msg.dest_object;
    if(session_msg.HasField("connect_response")) {
      var conn_response = session_msg.connect_response;
      if(conn_response.response == Sirikata.Protocol.Session.ConnectResponse.Response.Success) {
        var id = this._getLocalID(objid);
        Kata.log("Successfully connected " + id);
        var connect_ack_msg = new Sirikata.Protocol.Session.ConnectAck;
        var ack_msg = new Sirikata.Protocol.Session.Container;
        ack_msg.connect_ack = connect_ack_msg;
        this._sendODPMessage(objid, this.Ports.Session, Kata.ObjectID.nil(), this.Ports.Session, this._serializeMessage(ack_msg));
        this.mConnectedObjects[objid] = {};
        var odpRouter = new this.ObjectMessageRouter(this);
        var odpDispatcher = new Kata.SST.ObjectMessageDispatcher;
        this.mConnectedObjects[objid].odpDispatcher = odpDispatcher;
        this.mConnectedObjects[objid].odpBaseDatagramLayer = Kata.SST.createBaseDatagramLayer(new Kata.SST.EndPoint(objid, 0), odpRouter, odpDispatcher);
        this.mConnectedObjects[objid].proxdata = [];
        var tried_sst = Kata.SST.connectStream(new Kata.SST.EndPoint(objid, this.Ports.Space), new Kata.SST.EndPoint(Kata.SpaceID.nil(), this.Ports.Space), Kata.bind(this._spaceSSTConnectCallback, this, objid));
        this.mParent.aliasIDs(id, {space:this.mSpaceURL, object:objid})
      }else {
        if(conn_response.response == Sirikata.Protocol.Session.ConnectResponse.Response.Redirect) {
          Kata.notImplemented("Server redirects for Sirikata are not implemented.")
        }else {
          if(conn_response.response == Sirikata.Protocol.Session.ConnectResponse.Response.Error) {
            Kata.warn("Connection Error.");
            var id = this._getLocalID(objid);
            this.mParent.connectionResponse(id, false, {space:this.mSpaceURL, object:objid}, {msg:"Authentication failure."})
          }else {
            Kata.warn("Got unknown connection response.")
          }
        }
      }
    }
    if(session_msg.HasField("init_migration")) {
      Kata.notImplemented("Migrations not implemented.")
    }
  };
  Kata.SirikataSpaceConnection.prototype._spaceSSTConnectCallback = function(objid, error, stream) {
    if(error == Kata.SST.FAILURE) {
      Kata.warn("Failed to get SST connection to space for " + objid + ".");
      return
    }
    Kata.log("Successful SST space connection for " + objid + ". Setting up loc and prox listeners.");
    this.mConnectedObjects[objid].spaceStream = stream;
    stream.listenSubstream(this.Ports.Location, Kata.bind(this._handleLocationSubstream, this, objid));
    stream.listenSubstream(this.Ports.Proximity, Kata.bind(this._handleProximitySubstream, this, objid));
    var connect_info = this.mOutstandingConnectRequests[objid];
    if(connect_info.reset_time) {
      connect_info.loc_bounds.time = Kata.now(this.mSpaceURL)
    }
    delete this.mOutstandingConnectRequests[objid];
    var id = this._getLocalID(objid);
    this.mParent.connectionResponse(id, true, {space:this.mSpaceURL, object:objid}, {loc:connect_info.loc_bounds, vis:connect_info.visual});
    for(var di = 0;di < connect_info.deferred_odp.length;di++) {
      this._deliverODP(connect_info.deferred_odp[di])
    }
  };
  Kata.SirikataSpaceConnection.prototype.locUpdateRequest = function(objid, loc, visual) {
    var update_request = new Sirikata.Protocol.Loc.LocationUpdateRequest;
    var loc_parts = this._generateLocUpdateParts(loc, false);
    if(loc_parts.loc) {
      update_request.location = loc_parts.loc
    }
    if(loc_parts.orient) {
      update_request.orientation = loc_parts.orient
    }
    if(loc_parts.bounds) {
      update_request.bounds = loc_parts.bounds
    }
    if(typeof visual == "string") {
      update_request.mesh = visual
    }
    var container = new Sirikata.Protocol.Loc.Container;
    container.update_request = update_request;
    var spacestream = this.mConnectedObjects[objid].spaceStream;
    if(!spacestream) {
      Kata.warn("Tried to send loc update before stream to server was ready.");
      return
    }
    spacestream.createChildStream(discardChildStream, this._serializeMessage(container).getArray(), this.Ports.Location, this.Ports.Location)
  };
  Kata.SirikataSpaceConnection.prototype.requestQueryRemoval = function(objid) {
    this.requestQueryUpdate(objid, 4 * Math.PI)
  };
  Kata.SirikataSpaceConnection.prototype.requestQueryUpdate = function(objid, newAngle) {
    var update_request = new Sirikata.Protocol.Prox.QueryRequest;
    update_request.query_angle = newAngle;
    var spacestream = this.mConnectedObjects[objid].spaceStream;
    if(!spacestream) {
      Kata.warn("Tried to send prox update before stream to server was ready.");
      return
    }
    spacestream.datagram(this._serializeMessage(update_request).getArray(), this.Ports.Proximity, this.Ports.Proximity)
  };
  Kata.SirikataSpaceConnection.prototype.setPhysics = function(objid, data) {
    var update_request = new Sirikata.Protocol.Loc.LocationUpdateRequest;
    update_request.physics = data;
    var container = new Sirikata.Protocol.Loc.Container;
    container.update_request = update_request;
    var spacestream = this.mConnectedObjects[objid].spaceStream;
    if(!spacestream) {
      Kata.warn("Tried to send loc update before stream to server was ready.");
      return
    }
    spacestream.createChildStream(discardChildStream, this._serializeMessage(container).getArray(), this.Ports.Location, this.Ports.Location)
  };
  Kata.SirikataSpaceConnection.prototype._handleLocationSubstream = function(objid, error, stream) {
    if(error != 0) {
      Kata.warn("Location substream (error " + error + ")")
    }
    stream.registerReadCallback(Kata.bind(this._handleLocationSubstreamRead, this, objid, stream))
  };
  Kata.SirikataSpaceConnection.prototype._handleProximitySubstream = function(objid, error, stream) {
    if(error != 0) {
      Kata.warn("Proximity substream (error " + error + ")")
    }
    stream.registerReadCallback(Kata.bind(this._handleProximitySubstreamRead, this, objid, stream))
  };
  Kata.SirikataSpaceConnection.prototype._handleLocationSubstreamRead = function(objid, stream, data) {
    if(this.mIncompleteLocationData[stream.mUSID]) {
      data = this.mIncompleteLocationData[stream.mUSID].concat(data)
    }
    var framed_msg = new Sirikata.Protocol.Frame;
    var str = PROTO.CreateArrayStream(data);
    if(!framed_msg.ParseFromStream(str)) {
      this.mIncompleteLocationData[stream.mUSID] = data;
      return
    }
    if(this.mIncompleteLocationData[stream.mUSID]) {
      delete this.mIncompleteLocationData[stream.mUSID]
    }
    var loc_update_msg = new Sirikata.Protocol.Loc.BulkLocationUpdate;
    loc_update_msg.ParseFromStream(PROTO.CreateArrayStream(framed_msg.payload));
    for(var idx = 0;idx < loc_update_msg.update.length;idx++) {
      var update = loc_update_msg.update[idx];
      var from = update.object;
      var visual = update.HasField("mesh") ? update.mesh : undefined;
      var physics = update.HasField("physics") ? update.physics : undefined;
      if(update.location) {
        var loc = {};
        loc.seqno = update.seqno;
        loc.time = this._toLocalTime(update.location.t).getTime();
        loc.pos = update.location.position;
        loc.vel = update.location.velocity;
        this.mParent.presenceLocUpdate(this.mSpaceURL, from, objid, loc, visual, physics)
      }
      if(update.orientation) {
        var loc = {};
        loc.seqno = update.seqno;
        loc.time = this._toLocalTime(update.orientation.t).getTime();
        loc.orient = update.orientation.position;
        var orientvel = new Kata.Quaternion(update.orientation.velocity);
        var ovel_aa = orientvel.toAngleAxis();
        loc.rotaxis = ovel_aa.axis;
        loc.rotvel = ovel_aa.angle;
        this.mParent.presenceLocUpdate(this.mSpaceURL, from, objid, loc, visual, physics)
      }
      if(update.aggregate_bounds) {
        var loc = {};
        loc.seqno = update.seqno;
        var size = update.aggregate_bounds.max_object_size;
        loc.scale = [0, 0, 0, size ? size : 0];
        if(update.aggregate_bounds.center_offset) {
          var cp = update.aggregate_bounds.center_offset;
          loc.scale[0] = cp[0];
          loc.scale[1] = cp[1];
          loc.scale[2] = cp[2]
        }
        if(!loc.time) {
          loc.time = Kata.now(this.mSpaceURL)
        }
        this.mParent.presenceLocUpdate(this.mSpaceURL, from, objid, loc, visual, physics)
      }
    }
    stream.close(false)
  };
  Kata.SirikataSpaceConnection.prototype._handleProximitySubstreamRead = function(objid, stream, data) {
    var objinfo = this.mConnectedObjects[objid];
    objinfo.proxdata = objinfo.proxdata.concat(data);
    while(true) {
      var next_prox_msg = Kata.Frame.parse(objinfo.proxdata);
      if(next_prox_msg === null) {
        break
      }
      var prox_msg = new Sirikata.Protocol.Prox.ProximityResults;
      prox_msg.ParseFromStream(PROTO.CreateArrayStream(next_prox_msg));
      for(var i = 0;i < prox_msg.update.length;i++) {
        this._handleProximityUpdate(objid, prox_msg.t, prox_msg.update[i])
      }
    }
  };
  Kata.SirikataSpaceConnection.prototype._handleProximityUpdate = function(objid, t, update) {
    for(var add = 0;add < update.addition.length;add++) {
      var observed = update.addition[add].object;
      if(observed == objid) {
        continue
      }
      var properties = {};
      properties.loc = Kata.LocationIdentity(0);
      properties.loc.pos = update.addition[add].location.position;
      properties.loc.vel = update.addition[add].location.velocity;
      properties.loc.posTime = this._toLocalTime(update.addition[add].location.t).getTime();
      properties.loc.orient = update.addition[add].orientation.position;
      var orientvel = new Kata.Quaternion(update.addition[add].orientation.velocity);
      var ovel_aa = orientvel.toAngleAxis();
      properties.loc.rotaxis = ovel_aa.axis;
      properties.loc.rotvel = ovel_aa.angle;
      properties.loc.orientTime = this._toLocalTime(update.addition[add].orientation.t).getTime();
      if(update.addition[add].aggregate_bounds) {
        var size = update.addition[add].aggregate_bounds.max_object_size;
        properties.bounds = [0, 0, 0, size ? size : 0];
        if(update.addition[add].aggregate_bounds.center_offset) {
          var cp = update.addition[add].aggregate_bounds.center_offset;
          properties.bounds[0] = cp[0];
          properties.bounds[1] = cp[1];
          properties.bounds[2] = cp[2]
        }
      }
      properties.loc.scale = properties.bounds;
      properties.loc.scaleTime = this._toLocalTime(update.addition[add].location.t).getTime();
      if(update.addition[add].HasField("mesh")) {
        properties.visual = update.addition[add].mesh
      }
      this.mParent.proxEvent(this.mSpaceURL, objid, observed, true, properties)
    }
    for(var rem = 0;rem < update.removal.length;rem++) {
      var observed = update.removal[rem].object;
      if(observed == objid) {
        continue
      }
      this.mParent.proxEvent(this.mSpaceURL, objid, observed, false)
    }
  };
  Kata.SessionManager.registerProtocolHandler("sirikata", Kata.SirikataSpaceConnection)
}, "katajs/oh/plugins/sirikata/SirikataSpaceConnection.js");
Kata.require([["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/TimeSync.pbj.js"]], function() {
  if(typeof Kata.Sirikata == "undefined") {
    Kata.Sirikata = {}
  }
  Kata.Sirikata.SyncClient = function(odp_service, local_endpoint, sync_endpoint, cb) {
    this.mODP = odp_service;
    this.mLocalEndpoint = local_endpoint;
    this.mSyncEndpoint = sync_endpoint;
    this.mCB = cb;
    this.mODP._receiveODPMessage(local_endpoint.object(), local_endpoint.port(), Kata.bind(this.handleMessage, this));
    this.mSeqNo = 0;
    this.mRequestTimes = new Array(256);
    this.poll();
    this.mOffset = null
  };
  Kata.Sirikata.SyncClient.prototype.MaxRTT = 5E3;
  Kata.Sirikata.SyncClient.prototype.valid = function() {
    return this.mOffset == null
  };
  Kata.Sirikata.SyncClient.prototype.offset = function() {
    return this.mOffset
  };
  Kata.Sirikata.SyncClient.prototype.poll = function() {
    var sync_msg = new Sirikata.Protocol.TimeSync;
    var seqno = this.mSeqNo;
    this.mSeqNo = (this.mSeqNo + 1) % 256;
    sync_msg.seqno = seqno;
    this.mRequestTimes[seqno] = Date.now();
    var serialized = new PROTO.ByteArrayStream;
    sync_msg.SerializeToStream(serialized);
    this.mODP.sendODPMessage(this.mLocalEndpoint.object(), this.mLocalEndpoint.port(), this.mSyncEndpoint.object(), this.mSyncEndpoint.port(), serialized);
    setTimeout(Kata.bind(this.poll, this), 5E3)
  };
  Kata.Sirikata.SyncClient.prototype.handleMessage = function(space, src, src_port, dest, dest_port, payload) {
    var sync_msg = new Sirikata.Protocol.TimeSync;
    sync_msg.ParseFromStream(PROTO.CreateArrayStream(payload));
    var local_start_t = this.mRequestTimes[sync_msg.seqno];
    var server_t = sync_msg.t;
    var local_finish_t = Date.now();
    var rtt = local_finish_t - local_start_t;
    if(local_finish_t < local_start_t || rtt > this.MaxRTT) {
      return
    }
    this.mOffset = server_t - (local_start_t + rtt / 2);
    if(this.mCB) {
      this.mCB()
    }
  }
}, "katajs/oh/plugins/sirikata/Sync.js");
Kata.require(["katajs/oh/RemotePresence.js", "katajs/oh/sst/SSTImpl.js"], function() {
  var SUPER = Kata.RemotePresence.prototype;
  Kata.Presence = function(script, space, id, location, vis, physics) {
    SUPER.constructor.call(this, this, space, id, location, vis, physics);
    this.mScript = script;
    this.mQuery = null;
    this.mQueryHander = null;
    this.mRequestedLocation = this.mLocation;
    this.mOrphanLocUpdates = {};
    var sst_ep = this.sstEndpoint(0);
    var bdl = Kata.SST.getBaseDatagramLayer(sst_ep);
    if(!bdl) {
      this.ODPRouter = new this.ObjectMessageRouter(this);
      this.ODPDispatcher = new Kata.SST.ObjectMessageDispatcher;
      this.ODPBaseDatagramLayer = Kata.SST.createBaseDatagramLayer(sst_ep, this.ODPRouter, this.ODPDispatcher)
    }else {
      this.ODPRouter = bdl.mRouter;
      this.ODPDispatcher = bdl.mDispatcher;
      this.ODPBaseDatagramLayer = bdl
    }
  };
  Kata.extend(Kata.Presence, SUPER);
  Kata.Presence.prototype.bindODPPort = function(port) {
    return this.mScript.bindODPPort(this.mSpace, this.mID, port)
  };
  Kata.Presence.prototype.ObjectMessageRouter = function(parent) {
    this.mParent = parent
  };
  Kata.Presence.prototype.ObjectMessageRouter.prototype.route = function(msg) {
    this.mParent._sendPreparedODPMessage(msg)
  };
  Kata.Presence.prototype._sendPreparedODPMessage = function(msg) {
    return this.mScript._sendPreparedODPMessage(this.mSpace, msg)
  };
  Kata.Presence.prototype._sendHostedObjectMessage = function(data) {
    return this.mScript._sendHostedObjectMessage(data)
  };
  Kata.Presence.prototype.disconnect = function() {
    this.mScript._disconnect(this)
  };
  Kata.Presence.prototype.query = function() {
    return this.mQuery
  };
  Kata.Presence.prototype.setQuery = function(sa) {
    this.mQuery = sa;
    this._sendHostedObjectMessage(new Kata.ScriptProtocol.FromScript.Query(this.mSpace, this.mID, sa))
  };
  Kata.Presence.prototype.setQueryHandler = function(cb) {
    this.mQueryHandler = cb
  };
  Kata.Presence.prototype._requestedPosition = function(time) {
    var now_loc = Kata.LocationExtrapolate(this.mRequestedLocation, time);
    return now_loc.pos.concat()
  };
  Kata.Presence.prototype._requestedVelocity = function() {
    return this.mRequestedLocation.vel.concat()
  };
  Kata.Presence.prototype._requestedOrientation = function(time) {
    var now_loc = Kata.LocationExtrapolate(this.mRequestedLocation, time);
    return now_loc.orient.concat()
  };
  Kata.Presence.prototype._requestedAngularSpeed = function() {
    return this.mRequestedLocation.rotvel
  };
  Kata.Presence.prototype._requestedRotationalAxis = function() {
    return this.mRequestedLocation.rotaxis.concat()
  };
  Kata.Presence.prototype._requestedRotationalVelocity = function() {
    return Kata.Quaternion.fromLocationAngularVelocity(this.mRequestedLocation)
  };
  Kata.Presence.prototype._requestedScale = function() {
    return this.mRequestedLocation.scale.concat()
  };
  Kata.Presence.prototype._requestedLocation = function() {
    var retval = {};
    for(var i in this.mRequestedLocation) {
      retval[i] = this.mRequestedLocation[i]
    }
    return retval
  };
  Kata.Presence.prototype.predictedPosition = function(time) {
    return this._requestedPosition(time)
  };
  Kata.Presence.prototype.predictedVelocity = function() {
    return this._requestedVelocity()
  };
  Kata.Presence.prototype.predictedOrientation = function(time) {
    return this._requestedOrientation(time)
  };
  Kata.Presence.prototype.predictedAngularSpeed = function() {
    return this._requestedAngularSpeed()
  };
  Kata.Presence.prototype.predictedRotationalAxis = function() {
    return this._requestesdRotationalAxis()
  };
  Kata.Presence.prototype.predictedRotationalVelocity = function() {
    return this._requestesdRotationalVelocity()
  };
  Kata.Presence.prototype.predictedScale = function() {
    return this._requestedScale()
  };
  Kata.Presence.prototype.predictedLocation = function() {
    return this._requestedLocation()
  };
  Kata.Presence.prototype.setPosition = function(val) {
    var now = Kata.now(this.mSpace);
    var reqpos = this._requestedPosition(now);
    if(reqpos[0] == val[0] && reqpos[1] == val[1] && reqpos[2] == val[2]) {
      return
    }
    var update = {pos:val.concat(), vel:this._requestedVelocity(), time:Kata.now(this.mSpace)};
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, update);
    this.mRequestedLocation = Kata.LocationUpdate(update, this.mRequestedLocation, null, now);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setVelocity = function(val) {
    var now = Kata.now(this.mSpace);
    var reqvel = this._requestedVelocity();
    if(reqvel[0] == val[0] && reqvel[1] == val[1] && reqvel[2] == val[2]) {
      return
    }
    var update = {pos:this._requestedPosition(now), vel:val.concat(), time:now};
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, update);
    this.mRequestedLocation = Kata.LocationUpdate(update, this.mRequestedLocation, null, now);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setOrientation = function(val) {
    var now = Kata.now(this.mSpace);
    var reqpos = this._requestedOrientation(now);
    if(reqpos[0] == val[0] && reqpos[1] == val[1] && reqpos[2] == val[2] && reqpos[3] == val[3]) {
      return
    }
    var update = {orient:val.concat(), rotaxis:this._requestedRotationalAxis(), rotvel:this._requestedAngularSpeed(), time:Kata.now(this.mSpace)};
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, update);
    this.mRequestedLocation = Kata.LocationUpdate(update, this.mRequestedLocation, null, now);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setAngularVelocity = function(ang_vel) {
    if(!"toAngleAxis" in ang_vel) {
      ang_vel = new Kata.Quaternion(ang_vel)
    }
    var aa = ang_vel.toAngleAxis();
    var angvel = aa.angle;
    var axis = aa.axis;
    var now = Kata.now(this.mSpace);
    var reqvel = this._requestedAngularSpeed();
    var reqaxis = this._requestedRotationalAxis();
    if(reqvel == angvel && reqaxis[0] == axis[0] && reqaxis[1] == axis[1] && reqaxis[2] == axis[2]) {
      return
    }
    var update = {orient:this._requestedOrientation(now), rotaxis:axis.concat(), rotvel:angvel, time:now};
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, update);
    this.mRequestedLocation = Kata.LocationUpdate(update, this.mRequestedLocation, null, now);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setLocation = function(location) {
    var now = Kata.now(this.mSpace);
    if(location.time === undefined) {
      location.time = Kata.now(this.mSpace)
    }
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, location);
    this.mRequestedLocation = Kata.LocationUpdate(location, this.mRequestedLocation, null, now);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setBounds = function(val) {
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, {bounds:val.concat(), time:Kata.now(this.mSpace)});
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setScale = function(val) {
    var time = Kata.now(this.mSpace);
    var update = {scale:val.concat(), time:time};
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, {scale:val.concat(), time:time});
    this.mRequestedLocation = Kata.LocationUpdate(update, this.mRequestedLocation, null, time);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setVisual = function(val) {
    var msg = new Kata.ScriptProtocol.FromScript.Location(this.mSpace, this.mID, val);
    msg.visual = val;
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.setPhysics = function(val) {
    var msg = new Kata.ScriptProtocol.FromScript.Physics(this.mSpace, this.mID, val);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Presence.prototype.remotePresence = function(remote, added) {
    if(this.mQueryHandler) {
      this.mQueryHandler(remote, added)
    }
    var presid = remote.presenceID();
    var loc_msgs = this.mOrphanLocUpdates[presid];
    if(added && loc_msgs !== undefined) {
      for(var li = 0;li < loc_msgs.length;li++) {
        remote._updateLoc(loc_msgs[li].loc, loc_msgs[li].visual)
      }
      if(this.mOrphanLocUpdates[presid].timeout) {
        clearTimeout(this.mOrphanLocUpdates[presid].timeout)
      }
      delete this.mOrphanLocUpdates[presid]
    }
  };
  Kata.Presence.prototype.subscribe = function(observed) {
    this.mParent._sendHostedObjectMessage(new Kata.ScriptProtocol.FromScript.Subscription(this.mSpace, this.mID, observed, true))
  };
  Kata.Presence.prototype.unsubscribe = function(observed) {
    this.mParent._sendHostedObjectMessage(new Kata.ScriptProtocol.FromScript.Subscription(this.mSpace, this.mID, observed, false))
  };
  Kata.Presence.prototype.onDisconnected = function(cb) {
    Kata.notImplemented("Presence.onDisconnected")
  };
  Kata.Presence.prototype.handleSpaceEvent = function(data) {
    Kata.notImplemented("Presence.handleSpaceEvent")
  };
  Kata.Presence.prototype._handleDisconnect = function(data) {
    Kata.notImplemented("Presence._handleDisconnect")
  };
  Kata.Presence.prototype._handleLocEvent = function(msg, remotePresences) {
    var now = Kata.now(this.mSpace);
    if(this.id() === msg.observed) {
      this._updateLoc(msg.loc, msg.visual, msg.physics);
      return this
    }else {
      var key = Kata.Script.remotePresenceKey(msg.space, msg.observed);
      var remote = remotePresences[key];
      if(remote) {
        remote._updateLoc(msg.loc, msg.visual, msg.physics)
      }else {
        var presid = new Kata.PresenceID(msg.space, msg.observed);
        if(!this.mOrphanLocUpdates[presid]) {
          this.mOrphanLocUpdates[presid] = []
        }
        this.mOrphanLocUpdates[presid].push(msg);
        if(!this.mOrphanLocUpdates[presid].timeout) {
          this.mOrphanLocUpdates[presid].timeout = setTimeout(Kata.bind(this._clearOrphanLocUpdates, this, presid), 6E4)
        }
      }
      return remote
    }
  };
  Kata.Presence.prototype._clearOrphanLocUpdates = function(presid) {
    delete this.mOrphanLocUpdates[presid]
  };
  Kata.Presence.prototype._handleVisualEvent = function(data) {
    Kata.notImplemented("Presence._handleVisualEvent")
  };
  Kata.Presence.prototype._handleQueryEvent = function(data) {
    Kata.notImplemented("Presence._handleQueryEvent")
  }
}, "katajs/oh/Presence.js");
Kata.require(["externals/protojs/protobuf.js", "katajs/core/Time.js", "katajs/oh/odp/Endpoint.js"], function() {
  Kata.RemotePresence = function(parent, space, id, location, vis, physics) {
    this.mParent = parent;
    this.mSpace = space;
    this.mID = id;
    this.mScaleSeqNo = undefined;
    this.mPosSeqNo = undefined;
    this.mOrientSeqNo = undefined;
    this.mLocation = location;
    if(vis) {
      this.rMesh = vis
    }
    if(physics) {
      this.mPhysics = physics
    }
    this.mTracking = false
  };
  Kata.RemotePresence.prototype.id = function() {
    return this.mID
  };
  Kata.RemotePresence.prototype.object = function() {
    return this.mID
  };
  Kata.RemotePresence.prototype.space = function() {
    return this.mSpace
  };
  Kata.RemotePresence.prototype.presenceID = function() {
    return new Kata.PresenceID(this.mSpace, this.mID)
  };
  Kata.RemotePresence.prototype.endpoint = function(port) {
    return new Kata.ODP.Endpoint(this.mSpace, this.mID, port)
  };
  Kata.RemotePresence.prototype.sstEndpoint = function(port) {
    return new Kata.SST.EndPoint(this.object(), port)
  };
  Kata.RemotePresence.prototype.owner = function() {
    return this.mParent
  };
  Kata.RemotePresence.prototype.track = function() {
    if(this.mTracking) {
      return
    }
    this.mParent.subscribe(this.mID);
    this.mTracking = true
  };
  Kata.RemotePresence.prototype.untrack = function() {
    if(!this.mTracking) {
      return
    }
    this.mParent.unsubscribe(this.mID);
    this.mTracking = false
  };
  Kata.RemotePresence.prototype.position = function(time) {
    if(time === undefined) {
      console.log("inaccurate read of position")
    }
    var now_loc = Kata.LocationExtrapolate(this.mLocation, time);
    return now_loc.pos.concat()
  };
  Kata.RemotePresence.prototype.velocity = function() {
    return this.mLocation.vel.concat()
  };
  Kata.RemotePresence.prototype.orientation = function(time) {
    if(time === undefined) {
      console.log("inaccurate read of orientation")
    }
    var now_loc = Kata.LocationExtrapolate(this.mLocation, time);
    return now_loc.orient.concat()
  };
  Kata.RemotePresence.prototype.angularSpeed = function() {
    return this.mLocation.rotvel
  };
  Kata.RemotePresence.prototype.rotationalAxis = function() {
    return this.mLocation.rotaxis.concat()
  };
  Kata.RemotePresence.prototype.rotationalVelocity = function() {
    return Kata.Quaternion.fromLocationAngularVelocity(this.mLocation)
  };
  Kata.RemotePresence.prototype.scale = function() {
    return this.mLocation.scale.concat()
  };
  Kata.RemotePresence.prototype.location = function() {
    var retval = {};
    for(var i in this.mLocation) {
      retval[i] = this.mLocation[i]
    }
    return retval
  };
  Kata.RemotePresence.prototype.predictedPosition = function(time) {
    return this.position(time)
  };
  Kata.RemotePresence.prototype.predictedVelocity = function() {
    return this.velocity()
  };
  Kata.RemotePresence.prototype.predictedOrientation = function(time) {
    return this.orientation(time)
  };
  Kata.RemotePresence.prototype.predictedAngularSpeed = function() {
    return this.angularSpeed()
  };
  Kata.RemotePresence.prototype.predictedRotationalAxis = function() {
    return this.rotationalAxis()
  };
  Kata.RemotePresence.prototype.predictedRotationalVelocity = function() {
    return this.rotationalVelocity()
  };
  Kata.RemotePresence.prototype.predictedScale = function() {
    return this.scale()
  };
  Kata.RemotePresence.prototype.predictedLocation = function() {
    return this.location()
  };
  Kata.RemotePresence.prototype.bounds = function() {
    return this.mLocation.scale.concat()
  };
  Kata.RemotePresence.prototype.visual = function() {
    return this.rMesh
  };
  Kata.RemotePresence.prototype.physics = function() {
    return this.mPhysics
  };
  Kata.RemotePresence.prototype._updateLoc = function(loc, visual, physics) {
    if(loc) {
      if(loc.seqno) {
        if(this.mScaleSeqNo == undefined || loc.seqno == undefined || !PROTO.I64.prototype.unsigned_less.call(loc.seqno, this.mScaleSeqNo)) {
          if(loc.seqno != undefined) {
            this.mScaleSeqNo = loc.seqno
          }
        }else {
          delete loc.scale
        }
        if(this.mPosSeqNo == undefined || loc.seqno == undefined || !PROTO.I64.prototype.unsigned_less.call(loc.seqno, this.mPosSeqNo)) {
          if(loc.seqno != undefined) {
            this.mPosSeqNo = loc.seqno
          }
        }else {
          delete loc.pos;
          delete loc.vel
        }
        if(this.mOrientSeqNo == undefined || loc.seqno == undefined || !PROTO.I64.prototype.unsigned_less.call(loc.seqno, this.mOrientSeqNo)) {
          if(loc.seqno != undefined) {
            this.mOrientSeqNo = loc.seqno
          }
        }else {
          delete loc.orient;
          delete loc.rotvel;
          delete loc.rotaxis
        }
      }
      this.mLocation = Kata.LocationUpdate(loc, this.mLocation, undefined, Kata.now(this.mSpace))
    }
    if(visual != undefined) {
      this.rMesh = visual
    }
    if(physics != undefined) {
      this.mPhysics = physics
    }
  }
}, "katajs/oh/RemotePresence.js");
Kata.require(["katajs/oh/impl/ScriptProtocol.js", "katajs/oh/Presence.js", "katajs/oh/RemotePresence.js", "katajs/oh/odp/Port.js", "katajs/oh/odp/Service.js"], function() {
  Kata.Script = function(channel, args) {
    Kata.ODP.Service.prototype.constructor.call(this, Kata.bind(this._sendODPMessage, this));
    this.mChannel = channel;
    this.mChannel.registerListener(Kata.bind(this._handleHostedObjectMessage, this));
    this.mPresences = {};
    this.mRemotePresences = {};
    this.mConnectRequests = {};
    var handlers = {};
    var msgTypes = Kata.ScriptProtocol.ToScript.Types;
    handlers[msgTypes.Connected] = Kata.bind(this._handleConnected, this);
    handlers[msgTypes.ConnectionFailed] = Kata.bind(this._handleConnectFailed, this);
    handlers[msgTypes.Disconnected] = Kata.bind(this._handleDisconnect, this);
    handlers[msgTypes.ReceiveODPMessage] = Kata.bind(this._handleReceiveODPMessage, this);
    handlers[msgTypes.QueryEvent] = Kata.bind(this._handleQueryEvent, this);
    handlers[msgTypes.PresenceLocUpdate] = Kata.bind(this._handlePresenceLocUpdate, this);
    this.mMessageDispatcher = new Kata.MessageDispatcher(handlers);
    this.mBehaviors = []
  };
  Kata.extend(Kata.Script, Kata.ODP.Service.prototype);
  Kata.Script.prototype.addBehavior = function(behavior) {
    this.mBehaviors.push(behavior)
  };
  Kata.Script.prototype._sendHostedObjectMessage = function(data) {
    return this.mChannel.sendMessage(data)
  };
  Kata.Script.prototype.connect = function(args, auth, cb, query) {
    var msg = new Kata.ScriptProtocol.FromScript.Connect(args.space, auth, args.loc, args.visual, query);
    this.mConnectRequests[args.space] = cb;
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype._disconnect = function(pres) {
    var msg = new Kata.ScriptProtocol.FromScript.Disconnect(pres.space(), pres.id());
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype._handleConnected = function(channel, msg) {
    var presence = new Kata.Presence(this, Kata.URL(msg.space), msg.id, msg.loc, msg.visual, msg.physics);
    this.mPresences[msg.space] = presence;
    var cb = this.mConnectRequests[presence.space()];
    if(cb) {
      delete this.mConnectRequests[presence.space()];
      cb(presence)
    }
    this.mBehaviors.forEach(function(beh) {
      if(beh.newPresence) {
        beh.newPresence(presence)
      }
    })
  };
  Kata.Script.prototype._handleConnectFailed = function(channel, msg) {
    var cb = this.mConnectRequests[msg.space];
    if(cb) {
      delete this.mConnectRequests[msg.space];
      cb(null, msg.space, msg.reason ? msg.reason : "Disconnected")
    }
  };
  Kata.Script.prototype._handleDisconnect = function(channel, msg) {
    var invalidated = this.mPresences[msg.space];
    if(!invalidated) {
      return
    }
    delete this.mPresences[msg.space];
    this.mBehaviors.forEach(function(beh) {
      if(beh.presenceInvalidated) {
        beh.presenceInvalidated(invalidated)
      }
    })
  };
  Kata.Script.prototype.timer = function(freq, cb, repeat) {
    return null
  };
  Kata.Script.prototype.createObject = function(script, cons, args) {
    var msg = new Kata.ScriptProtocol.FromScript.CreateObject(script, cons, args);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype.queryUpdate = function(space, id, solidAngle) {
    var msg = new Kata.ScriptProtocol.FromScript.QueryUpdate(space, id, solidAngle);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype.queryRemoval = function(space, id) {
    var msg = new Kata.ScriptProtocol.FromScript.QueryRemoval(space, id);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype.Persistence = {};
  Kata.Script.prototype.Persistence.read = function(readset) {
    Kata.notImplemented("Script.read")
  };
  Kata.Script.prototype.Persistence.write = function(writeset) {
    Kata.notImplemented("Script.write")
  };
  Kata.Script.prototype._handleHostedObjectMessage = function(channel, data) {
    data = Kata.ScriptProtocol.ToScript.reconstitute(data);
    this.mMessageDispatcher.dispatch(channel, data)
  };
  Kata.Script.remotePresenceKey = function(space, objectid) {
    return space + objectid
  };
  Kata.Script.prototype.getRemotePresence = function(presenceID) {
    return this.mRemotePresences[Kata.Script.remotePresenceKey(presenceID.space(), presenceID.object())]
  };
  Kata.Script.prototype._handleQueryEvent = function(channel, msg) {
    var presence = this.mPresences[msg.space];
    var remote = null;
    var key = Kata.Script.remotePresenceKey(msg.space, msg.observed);
    if(msg.entered) {
      remote = this.mRemotePresences[key];
      if(remote) {
        if(remote._killTimeout) {
          clearTimeout(remote._killTimeout);
          delete remote._killTimeout
        }
      }else {
        remote = new Kata.RemotePresence(presence, msg.space, msg.observed, msg.loc, msg.visual);
        this.mRemotePresences[key] = remote;
        presence.remotePresence(remote, true);
        this.mBehaviors.forEach(function(beh) {
          if(beh.remotePresence) {
            beh.remotePresence(presence, remote, true)
          }
        });
        this._handleQueryEventDelegate(remote, msg)
      }
    }else {
      remote = this.mRemotePresences[key];
      if(!remote) {
        Kata.warn("Got removal prox event for unknown object.");
        return remote
      }
      if(remote._killTimeout) {
        return remote
      }
      var self = this;
      remote._killTimeout = setTimeout(function() {
        delete self.mRemotePresences[key];
        presence.remotePresence(remote, false);
        self.mBehaviors.forEach(function(beh) {
          if(beh.remotePresence) {
            beh.remotePresence(presence, remote, false)
          }
        });
        self._handleQueryEventDelegate(remote, msg)
      }, 1E4)
    }
    return remote
  };
  Kata.Script.prototype._handleQueryEventDelegate = function(channel, msg) {
  };
  Kata.Script.prototype._sendODPMessage = function(src, dst, payload) {
    if(!Kata.URL.equals(src.space(), dst.space())) {
      throw"Mismatching spaces in ODP message.";
    }
    var msg = new Kata.ScriptProtocol.FromScript.SendODPMessage(src.space(), src.object(), src.port(), dst.object(), dst.port(), payload);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype._sendPreparedODPMessage = function(space, odp_msg) {
    var msg = new Kata.ScriptProtocol.FromScript.SendODPMessage(space, odp_msg.source_object, odp_msg.source_port, odp_msg.dest_object, odp_msg.dest_port, odp_msg.payload);
    this._sendHostedObjectMessage(msg)
  };
  Kata.Script.prototype._handleReceiveODPMessage = function(channel, msg) {
    var presence = this.mPresences[msg.space];
    var delivered_sst = false;
    if(presence && presence.ODPDispatcher.dispatchMessage(msg)) {
      delivered_sst = true
    }
    if(!delivered_sst) {
      this._deliverODPMessage(new Kata.ODP.Endpoint(msg.space, msg.source_object, msg.source_port), new Kata.ODP.Endpoint(msg.space, msg.dest_object, msg.dest_port), msg.payload)
    }
  };
  Kata.Script.prototype._handlePresenceLocUpdate = function(channel, msg) {
    var presence = this.mPresences[msg.space];
    if(presence) {
      return presence._handleLocEvent(msg, this.mRemotePresences)
    }else {
      Kata.warn("Got loc update destined for unknown object.");
      return presence
    }
  };
  Kata.Script.prototype._handleStorageEvent = function(data) {
  }
}, "katajs/oh/Script.js");
Kata.require(["katajs/core/URL.js"], function() {
  Kata.SessionManager = function() {
    this.mSpaceConnections = {};
    this.mObjects = {}
  };
  Kata.SessionManager.registerProtocolHandler = function(protocol, conn_const) {
    if(!this._protocols) {
      this._protocols = {}
    }
    if(this._protocols[protocol]) {
      Kata.warn("Overwriting protocol handler for " + protocol)
    }
    this._protocols[protocol] = conn_const
  };
  Kata.SessionManager._getProtocolHandler = function(protocol) {
    if(!this._protocols) {
      return undefined
    }
    return this._protocols[protocol]
  };
  Kata.SessionManager.prototype.connect = function(ho, req, auth) {
    var spaceURL = req.space;
    var spaceURLProtocol = Kata.URL.protocol(spaceURL);
    var space_conn = this.mSpaceConnections[spaceURL];
    if(!space_conn) {
      var protoClass = Kata.SessionManager._getProtocolHandler(spaceURLProtocol);
      if(!protoClass) {
        Kata.error("Unknown space protocol: " + spaceURLProtocol)
      }
      space_conn = new protoClass(this, spaceURL);
      this.mSpaceConnections[spaceURL] = space_conn
    }
    this.mObjects[ho.getID()] = ho;
    space_conn.connectObject(ho.getID(), auth, req, req.visual, req.query)
  };
  Kata.SessionManager.prototype.aliasIDs = function(id, presence_id) {
    var obj = this.mObjects[id];
    if(!obj) {
      Kata.warn("Got ID aliasing for unknown object: " + id);
      return
    }
    this.mObjects[presence_id.object] = obj
  };
  Kata.SessionManager.prototype.connectionResponse = function(id, success, presence_id, data) {
    var obj = this.mObjects[id];
    if(!obj) {
      Kata.warn("Got connection response for unknown object: " + id);
      return
    }
    if(success) {
      delete this.mObjects[id];
      this.mObjects[presence_id.object] = obj
    }
    obj.connectionResponse(success, presence_id, data)
  };
  Kata.SessionManager.prototype.disconnect = function(ho, req) {
    var spaceURL = Kata.URL(req.space);
    var space_conn = this.mSpaceConnections[spaceURL];
    if(!space_conn) {
      return
    }
    space_conn.disconnectObject(req.id)
  };
  Kata.SessionManager.prototype.disconnected = function(objid, space) {
    var obj = this.mObjects[objid];
    if(!obj) {
      Kata.warn("Got disconnection event for unknown object: " + objid);
      return
    }
    obj.disconnected(space)
  };
  Kata.SessionManager.prototype.spaceConnectionDisconnected = function(space_conn) {
    for(var conn in this.mSpaceConnections) {
      if(space_conn === this.mSpaceConnections[conn]) {
        delete this.mSpaceConnections[conn]
      }
    }
  };
  Kata.SessionManager.prototype.sendODPMessage = function(space, src_obj, src_port, dst_obj, dst_port, payload) {
    var space_conn = this.mSpaceConnections[space];
    space_conn.sendODPMessage(src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.SessionManager.prototype.receiveODPMessage = function(space, src_obj, src_port, dst_obj, dst_port, payload) {
    var obj = this.mObjects[dst_obj];
    obj.receiveODPMessage(space, src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.SessionManager.prototype.registerProxQuery = function(space, id, sa) {
    var space_conn = this.mSpaceConnections[space];
    space_conn.registerProxQuery(id, sa)
  };
  Kata.SessionManager.prototype.proxEvent = function(space, querier, observed, entered, properties) {
    var obj = this.mObjects[querier];
    obj.proxEvent(space, observed, entered, properties)
  };
  Kata.SessionManager.prototype.locUpdateRequest = function(space, id, loc, visual) {
    var space_conn = this.mSpaceConnections[space];
    if(space_conn !== undefined) {
      space_conn.locUpdateRequest(id, loc, visual)
    }
  };
  Kata.SessionManager.prototype.requestQueryRemoval = function(space, id) {
    var space_conn = this.mSpaceConnections[space];
    if(space_conn !== undefined) {
      space_conn.requestQueryRemoval(id)
    }
  };
  Kata.SessionManager.prototype.requestQueryUpdate = function(space, id, newSolidAngle) {
    var space_conn = this.mSpaceConnections[space];
    if(space_conn !== undefined) {
      space_conn.requestQueryUpdate(id, newSolidAngle)
    }
  };
  Kata.SessionManager.prototype.setPhysics = function(space, id, data) {
    var space_conn = this.mSpaceConnections[space];
    if(space_conn !== undefined) {
      space_conn.setPhysics(id, data)
    }
  };
  Kata.SessionManager.prototype.presenceLocUpdate = function(space, from, to, loc, visual, physics) {
    var obj = this.mObjects[to];
    obj.presenceLocUpdate(space, from, loc, visual, physics)
  };
  Kata.SessionManager.prototype.subscribe = function(space, id, observed) {
    var space_conn = this.mSpaceConnections[space];
    space_conn.subscribe(id, observed)
  };
  Kata.SessionManager.prototype.unsubscribe = function(space, id, observed) {
    var space_conn = this.mSpaceConnections[space];
    space_conn.unsubscribe(id, observed)
  }
}, "katajs/oh/SessionManager.js");
if(typeof Kata == "undefined") {
  Kata = {}
}
Kata.require([], function() {
  Kata.Simulation = function(channel) {
    this.mChannel = channel;
    channel.registerListener(Kata.bind(this.receivedMessage, this))
  };
  Kata.Simulation.prototype.receivedMessage = function(channel, data) {
  }
}, "katajs/oh/Simulation.js");
Kata.require(["katajs/oh/ObjectHost.js"], function() {
  Kata.SpaceConnection = function(parent) {
    this.mParent = parent
  };
  Kata.SpaceConnection.prototype.connectObject = function(id, auth, loc, vis) {
    Kata.notImplemented("SpaceConnection.connectObject")
  };
  Kata.SpaceConnection.prototype.disconnectObject = function(id) {
    Kata.notImplemented("SpaceConnection.disconnectObject")
  };
  Kata.SpaceConnection.prototype.sendODPMessage = function(src_obj, src_port, dst_obj, dst_port, payload) {
    Kata.notImplemented("SpaceConnection.sendODPMessage")
  };
  Kata.SpaceConnection.prototype.registerProxQuery = function(id, sa) {
    Kata.notImplemented("SpaceConnection.registerQuery")
  };
  Kata.SpaceConnection.prototype.locUpdateRequest = function(id, loc, visual) {
    Kata.notImplemented("SpaceConnection.locUpdateRequest")
  };
  Kata.SpaceConnection.prototype.requestQueryRemoval = function(id) {
    Kata.notImplemented("SpaceConnection.requestQueryRemoval")
  };
  Kata.SpaceConnection.prototype.requestQueryUpdate = function(id, newSolidAngle) {
    Kata.notImplemented("SpaceConnection.requestQueryUpdate")
  };
  Kata.SpaceConnection.prototype.setPhysics = function(id, data) {
    Kata.notImplemented("SpaceConnection.setPhysics")
  };
  Kata.SpaceConnection.prototype.subscribe = function(id, observed) {
    Kata.notImplemented("SpaceConnection.subscribe")
  };
  Kata.SpaceConnection.prototype.unsubscribe = function(id, observed) {
    Kata.notImplemented("SpaceConnection.unsubscribe")
  }
}, "katajs/oh/SpaceConnection.js");
Kata.require(["katajs/core/Deque.js", ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/SSTHeader.pbj.js"], ["externals/protojs/protobuf.js", "externals/protojs/pbj.js", "katajs/oh/plugins/sirikata/impl/ObjectMessage.pbj.js"]], function() {
  function nopArrayClass() {
  }
  nopArrayClass.prototype.push = function(a) {
  };
  var AAaconnectedACount = new nopArrayClass;
  var AAdisconnectedACount = new nopArrayClass;
  var AAconnectedACount = new nopArrayClass;
  var AAconnectedBCount = new nopArrayClass;
  var AAconnectedDCount = new nopArrayClass;
  var AApendingDisconnectedDCount = new nopArrayClass;
  var AAdisconnectedDCount = new nopArrayClass;
  var AAdisconnectedBCount = new nopArrayClass;
  var AAdisconnectedCCount = new nopArrayClass;
  var AApendingDisconnectedACount = new nopArrayClass;
  var AApendingDisconnectedBCount = new nopArrayClass;
  var AApendingDisconnectedCCount = new nopArrayClass;
  var KataDequePushBack = function(x, y) {
    x.push_back(y)
  };
  var KataDequePushFront = function(x, y) {
    return x.push_front(y)
  };
  var KataDequePopBack = function(x) {
    return x.pop_back()
  };
  var KataDequePopFront = function(x) {
    return x.pop_front()
  };
  var KataDequeBack = function(x) {
    return x.back()
  };
  var KataDequeFront = function(x) {
    return x.front()
  };
  var KataDequeLength = function(x) {
    return x.size()
  };
  var KataDequeEmpty = function(x) {
    return x.empty()
  };
  var KataDequeIndex = function(x, y) {
    return x.index(y)
  };
  var KataDequeClear = function(x) {
    return x.clear()
  };
  var KataDequeErase = function(x, index) {
    return x.erase(index)
  };
  if(typeof Kata.SST == "undefined") {
    Kata.SST = {}
  }
  if(typeof Kata.SST.Impl == "undefined") {
    Kata.SST.Impl = {}
  }
  Kata.SST.ObjectMessageDispatcher = function() {
    this.mObjectMessageRecipients = {}
  };
  Kata.SST.ObjectMessageDispatcher.prototype.registerObjectMessageRecipient = function(port, recipient) {
    this.mObjectMessageRecipients[port] = recipient
  };
  Kata.SST.ObjectMessageDispatcher.prototype.unregisterObjectMessageRecipient = function(port, recipient) {
    var currentRecipient = this.mObjectMessageRecipients[port];
    if(currentRecipient != recipient) {
      Kata.log("Unregistering wrong recipient for port " + port)
    }else {
      delete this.mObjectMessageRecipients[port]
    }
  };
  Kata.SST.ObjectMessageDispatcher.prototype.dispatchMessage = function(msg) {
    if(msg.dest_port in this.mObjectMessageRecipients) {
      var recipient = this.mObjectMessageRecipients[msg.dest_port];
      return recipient.receiveMessage(msg)
    }
    return false
  };
  Kata.SST.EndPoint = function(endPoint, port) {
    this.endPoint = endPoint;
    this.port = port
  };
  Kata.SST.EndPoint.prototype.uid = function() {
    return"" + this.endPoint + ":" + this.port
  };
  Kata.SST.EndPoint.prototype.toString = Kata.SST.EndPoint.prototype.uid;
  Kata.SST.EndPoint.prototype.objectId = function() {
    return this.endPoint
  };
  Kata.SST.Impl.BaseDatagramLayer = function(router, dispatcher, context) {
    this.mRouter = router;
    this.mDispatcher = dispatcher;
    this.mContext = context;
    this.mMinAvailableChannels = 1;
    this.mMinAvailablePorts = 2049;
    this.mAvailableChannels = [];
    this.mAvailablePorts = []
  };
  var sDatagramLayerMap = {};
  var sConnectionReturnCallbackMapSST = {};
  var sListeningConnectionsCallbackMapSST = {};
  var getDatagramLayerSST = function(endPoint) {
    var id = endPoint.objectId();
    if(id in sDatagramLayerMap) {
      return sDatagramLayerMap[id]
    }
    return null
  };
  Kata.SST.createBaseDatagramLayer = function(endPoint, router, dispatcher) {
    var id = endPoint.objectId();
    if(id in sDatagramLayerMap) {
      return sDatagramLayerMap[id]
    }
    return sDatagramLayerMap[id] = new Kata.SST.Impl.BaseDatagramLayer(router, dispatcher)
  };
  Kata.SST.getBaseDatagramLayer = function(endPoint) {
    var id = endPoint.objectId();
    if(id in sDatagramLayerMap) {
      return sDatagramLayerMap[id]
    }
    return undefined
  };
  var listenBaseDatagramLayerSST = function(listeningEndPoint) {
    var id = listeningEndPoint.objectId();
    var baseDatagramLayer = sDatagramLayerMap[id];
    if(baseDatagramLayer) {
      baseDatagramLayer.mDispatcher.registerObjectMessageRecipient(listeningEndPoint.port, baseDatagramLayer);
      return true
    }else {
      return false
    }
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.context = function() {
    return this.mContext
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.send = function(src, dest, data) {
    var objectMessage = new Sirikata.Protocol.Object.ObjectMessage;
    objectMessage.source_object = src.objectId();
    objectMessage.source_port = src.port;
    objectMessage.dest_object = dest.objectId();
    objectMessage.dest_port = dest.port;
    objectMessage.unique = PROTO.I64.fromNumber(0);
    objectMessage.payload = data;
    return this.mRouter.route(objectMessage)
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.receiveMessage = function(msg) {
    return connectionHandleReceiveSST(this, new Kata.SST.EndPoint(msg.source_object, msg.source_port), new Kata.SST.EndPoint(msg.dest_object, msg.dest_port), msg.payload)
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.dispatcher = function() {
    return this.mDispatcher
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.getAvailablePort = function() {
    var len = this.mAvailablePorts.length;
    if(len) {
      var retval = this.mAvailablePorts[len - 1];
      this.mAvailabePorts.length = len - 1
    }
    return this.mMinAvailablePorts++
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.releasePort = function(port) {
    if(port <= 2048) {
      return
    }
    if(port + 1 == this.mMinAvailablePorts) {
      --this.mMinAvailablePorts
    }else {
      this.mAvailablePorts[this.mAvailablePorts.length] = port
    }
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.getAvailableChannel = function() {
    var len = this.mAvailableChannels.length;
    if(len) {
      var retval = this.mAvailableChannels[len - 1];
      this.mAvailabeChannels.length = len - 1
    }
    return this.mMinAvailableChannels++
  };
  Kata.SST.Impl.BaseDatagramLayer.prototype.releaseChannel = function(channel) {
    if(channel + 1 == this.mMinAvailableChannels) {
      --this.mMinAvailableChannels
    }else {
      this.mAvailableChannels[this.mAvailableChannels.length] = channel
    }
  };
  Kata.SST.SUCCESS = 0;
  Kata.SST.FAILURE = -1;
  Kata.SST.Impl.ChannelSegment = function(data, channelSeqNum, ackSequenceNum) {
    this.mBuffer = data;
    this.mChannelSequenceNumber = channelSeqNum;
    this.mAckSequenceNumber = ackSequenceNum;
    this.mTransmitTime = null;
    this.mAckTime = null
  };
  Kata.SST.Impl.ChannelSegment.prototype.setAckTime = function(ackTime) {
    this.mAckTime = ackTime
  };
  Kata.SST.Connection = function(localEndPoint, remoteEndPoint) {
    this.mLocalEndPoint = localEndPoint;
    this.mRemoteEndPoint = remoteEndPoint;
    this.mState = CONNECTION_DISCONNECTED_SST;
    this.mRemoteChannelID = 0;
    this.mLocalChannelID = 1;
    this.mTransmitSequenceNumber = PROTO.I64.ONE;
    this.mLastReceivedSequenceNumber = PROTO.I64.ONE;
    this.mPartialReadDatagrams = {};
    this.mNumStreams = 0;
    this.mCwnd = 1;
    this.mRTOMilliseconds = 5E3;
    this.mFirstRTO = true;
    this.mLastTransmitTime = new Date;
    this.inSendingMode = true;
    this.numSegmentsSent = 0;
    this.mDatagramLayer = getDatagramLayerSST(localEndPoint);
    this.mDatagramLayer.dispatcher().registerObjectMessageRecipient(localEndPoint.port, this);
    this.mOutgoingSubstreamMap = {};
    this.mIncomingSubstreamMap = {};
    this.mListeningStreamsCallbackMap = {};
    this.mReadDatagramCallbacks = {};
    this.mQueuedSegments = new Kata.Deque;
    this.mOutstandingSegments = new Kata.Deque
  };
  Kata.SST.Connection.prototype.localEndPoint = function() {
    return this.mLocalEndPoint
  };
  Kata.SST.Connection.prototype.remoteEndPoint = function() {
    return this.mRemoteEndPoint
  };
  Kata.SST.Connection.prototype.getContext = function() {
    return this.mDatagramLayer.context()
  };
  Kata.SST.Connection.prototype.sendSSTChannelPacket = function(sstMsg) {
    if(this.mState == CONNECTION_DISCONNECTED_SST) {
      return false
    }
    var buffer = sstMsg.SerializeToArray();
    return this.mDatagramLayer.send(this.mLocalEndPoint, this.mRemoteEndPoint, buffer)
  };
  Kata.SST.Connection.prototype.serviceConnection = function() {
    var curTime = new Date;
    if(this.mState == CONNECTION_DISCONNECTED_SST) {
      setTimeout(Kata.bind(this.cleanup, this), 0);
      return false
    }else {
      if(this.mState == CONNECTION_PENDING_DISCONNECT_SST) {
        if(KataDequeEmpty(this.mQueuedSegments)) {
          setTimeout(Kata.bind(this.cleanup, this), 0);
          this.mState = CONNECTION_DISCONNECTED_SST;
          return false
        }else {
          if(!this.inSendingMode) {
            Kata.warn("Empty deque but not in sending mode for disconnected stream")
          }
        }
      }
    }
    if(this.inSendingMode) {
      this.numSegmentsSent = 0;
      for(var i = 0;!KataDequeEmpty(this.mQueuedSegments) && KataDequeLength(this.mOutstandingSegments) <= this.mCwnd;++i) {
        var segment = KataDequeFront(this.mQueuedSegments);
        var sstMsg = new Sirikata.Protocol.SST.SSTChannelHeader;
        sstMsg.channel_id = this.mRemoteChannelID;
        sstMsg.transmit_sequence_number = segment.mChannelSequenceNumber;
        sstMsg.ack_count = 1;
        sstMsg.ack_sequence_number = segment.mAckSequenceNumber;
        sstMsg.payload = segment.mBuffer;
        this.sendSSTChannelPacket(sstMsg);
        segment.mTransmitTime = curTime;
        KataDequePushBack(this.mOutstandingSegments, segment);
        KataDequePopFront(this.mQueuedSegments);
        this.numSegmentsSent++;
        this.mLastTransmitTime = curTime;
        this.inSendingMode = false
      }
      if(!this.inSendingMode) {
        setTimeout(Kata.bind(this.serviceConnection, this), this.mRTOMilliseconds)
      }
    }else {
      if(!KataDequeEmpty(this.mOutstandingSegments)) {
        this.mCwnd /= 2;
        if(this.mCwnd < 1) {
          this.mCwnd = 1
        }
        KataDequeClear(this.mOutstandingSegments)
      }
      this.inSendingMode = true;
      setTimeout(Kata.bind(this.serviceConnection, this), 0)
    }
    return true
  };
  var sConnectionMapSST = {};
  var MAX_DATAGRAM_SIZE_SST = 1E3;
  var MAX_PAYLOAD_SIZE_SST = 1300;
  var MAX_QUEUED_SEGMENTS_SST = 300;
  var CC_ALPHA_SST = 0.8;
  var CONNECTION_DISCONNECTED_SST = 1;
  var CONNECTION_PENDING_CONNECT_SST = 2;
  var CONNECTION_PENDING_RECEIVE_CONNECT_SST = 3;
  var CONNECTION_CONNECTED_SST = 4;
  var CONNECTION_PENDING_DISCONNECT_SST = 5;
  var getConnectionSST = function(endPoint) {
    var endPointUid = endPoint.uid();
    return sConnectionMapSST[endPointUid]
  };
  var createConnectionSST = function(localEndPoint, remoteEndPoint, cb) {
    var endPointUid = localEndPoint.uid();
    if(endPointUid in sConnectionMapSST) {
      Kata.log("mConnectionMap.find failed for " + localEndPoint.uid());
      return false
    }
    var conn = new Kata.SST.Connection(localEndPoint, remoteEndPoint);
    sConnectionMapSST[endPointUid] = conn;
    sConnectionReturnCallbackMapSST[endPointUid] = cb;
    conn.setState(CONNECTION_PENDING_CONNECT_SST);
    var channelid = getDatagramLayerSST(localEndPoint).getAvailableChannel();
    var payload = [channelid >> 24 & 255, channelid >> 16 & 255, channelid >> 8 & 255, channelid & 255];
    conn.setLocalChannelID(channelid);
    conn.sendData(payload, false);
    return true
  };
  var connectionListenSST = function(cb, listeningEndPoint) {
    var retval = listenBaseDatagramLayerSST(listeningEndPoint);
    if(!retval) {
      return false
    }
    var listeningEndPointId = listeningEndPoint.uid();
    if(listeningEndPointId in sListeningConnectionsCallbackMapSST) {
      return false
    }
    sListeningConnectionsCallbackMapSST[listeningEndPointId] = cb;
    return true
  };
  Kata.SST.Connection.prototype.getNewLSID = function() {
    return++this.mNumStreams
  };
  Kata.SST.Connection.prototype.releaseLSID = function(lsid) {
  };
  Kata.SST.Connection.prototype.listenStream = function(port, scb) {
    this.mListeningStreamsCallbackMap[port] = scb
  };
  Kata.SST.Connection.prototype.stream = function(cb, initial_data, local_port, remote_port, parentLSID) {
    if(parentLSID === undefined) {
      parentLSID = 0
    }
    var usid = Math.uuid();
    var lsid = this.getNewLSID();
    var stream = new Kata.SST.Stream(parentLSID, this, local_port, remote_port, usid, lsid, initial_data, false, 0, cb);
    this.mOutgoingSubstreamMap[lsid] = stream;
    return stream
  };
  var streamHeaderTypeIsAckSST = function(data) {
    var stream_msg = new Sirikata.Protocol.SST.SSTStreamHeader;
    var parsed = stream_msg.ParseFromArray(data);
    return stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.ACK
  };
  Kata.SST.Connection.prototype.sendData = function(data, sstStreamHeaderTypeIsAck) {
    if(data.length > MAX_PAYLOAD_SIZE_SST) {
      Kata.log("Data longer than MAX_PAYLOAD_SIZE OF " + MAX_PAYLOAD_SIZE_SST)
    }
    if(sstStreamHeaderTypeIsAck === undefined) {
      Kata.log("sendData not setting whether it is an ack")
    }
    var transmitSequenceNumber = this.mTransmitSequenceNumber;
    var pushedIntoQueue = false;
    if(sstStreamHeaderTypeIsAck) {
      var sstMsg = new Sirikata.Protocol.SST.SSTChannelHeader;
      sstMsg.channel_id = this.mRemoteChannelID;
      sstMsg.transmit_sequence_number = this.mTransmitSequenceNumber;
      sstMsg.ack_count = 1;
      sstMsg.ack_sequence_number = this.mLastReceivedSequenceNumber;
      sstMsg.payload = data;
      this.sendSSTChannelPacket(sstMsg)
    }else {
      if(KataDequeLength(this.mQueuedSegments) < MAX_QUEUED_SEGMENTS_SST) {
        KataDequePushBack(this.mQueuedSegments, new Kata.SST.Impl.ChannelSegment(data, this.mTransmitSequenceNumber, this.mLastReceivedSequenceNumber));
        pushedIntoQueue = true;
        if(this.inSendingMode) {
          setTimeout(Kata.bind(this.serviceConnection, this))
        }
      }
    }
    this.mTransmitSequenceNumber = this.mTransmitSequenceNumber.unsigned_add(PROTO.I64.ONE);
    return transmitSequenceNumber
  };
  Kata.SST.Connection.prototype.setState = function(state) {
    this.mState = state
  };
  Kata.SST.Connection.prototype.setLocalChannelID = function(channelID) {
    this.mLocalChannelID = channelID
  };
  Kata.SST.Connection.prototype.setRemoteChannelID = function(channelID) {
    this.mRemoteChannelID = channelID
  };
  Kata.SST.Connection.prototype.markAcknowledgedPacket = function(receivedAckNum) {
    var len = KataDequeLength(this.mOutstandingSegments);
    for(var i = 0;i < len;i++) {
      var segment = KataDequeIndex(this.mOutstandingSegments, i);
      if(segment.mChannelSequenceNumber.equals(receivedAckNum)) {
        segment.mAckTime = new Date;
        if(this.mFirstRTO) {
          this.mRTOMilliseconds = segment.mAckTime - segment.mTransmitTime;
          this.mFirstRTO = false
        }else {
          this.mRTOMilliseconds = CC_ALPHA_SST * this.mRTOMilliseconds + (1 - CC_ALPHA_SST) * (segment.mAckTime - segment.mTransmitTime)
        }
        this.inSendingMode = true;
        if(Math.random() * this.mCwnd < 1) {
          this.mCwnd += 1
        }
        KataDequeErase(this.mOutstandingSegments, i);
        break
      }
    }
  };
  Kata.SST.Connection.prototype.parsePacket = function(received_channel_msg) {
    var received_stream_msg = new Sirikata.Protocol.SST.SSTStreamHeader;
    var parsed = received_stream_msg.ParseFromArray(received_channel_msg.payload);
    if(received_stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.INIT) {
      this.handleInitPacket(received_stream_msg)
    }else {
      if(received_stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.REPLY) {
        this.handleReplyPacket(received_stream_msg)
      }else {
        if(received_stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.DATA) {
          this.handleDataPacket(received_stream_msg)
        }else {
          if(received_stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.ACK) {
            this.handleAckPacket(received_channel_msg, received_stream_msg)
          }else {
            if(received_stream_msg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.DATAGRAM) {
              this.handleDatagram(received_stream_msg)
            }
          }
        }
      }
    }
  };
  Kata.SST.Connection.prototype.headerToStringDebug = function(received_stream_msg) {
    return this.mLocalEndPoint + "-> " + this.mRemoteEndPoint + " LSID:" + received_stream_msg.lsid
  };
  Kata.SST.Connection.prototype.handleInitPacket = function(received_stream_msg) {
    var incomingLsid = received_stream_msg.lsid;
    if(!(incomingLsid in this.mIncomingSubstreamMap)) {
      var listeningStreamsCallback = this.mListeningStreamsCallbackMap[received_stream_msg.dest_port];
      if(listeningStreamsCallback) {
        var usid = Math.uuid();
        var newLSID = this.getNewLSID();
        var stream = new Kata.SST.Stream(received_stream_msg.psid, this, received_stream_msg.dest_port, received_stream_msg.src_port, usid, newLSID, [], true, incomingLsid, null);
        this.mOutgoingSubstreamMap[newLSID] = stream;
        this.mIncomingSubstreamMap[incomingLsid] = stream;
        listeningStreamsCallback(0, stream);
        stream.receiveData(received_stream_msg, received_stream_msg.payload, received_stream_msg.bsn)
      }else {
        Kata.log("Not listening to streams at: " + this.headerToStringDebug(received_stream_msg))
      }
    }else {
      Kata.log("Init message for connected stream" + this.headerToStringDebug(received_stream_msg));
      this.mIncomingSubstreamMap[incomingLsid].sendReplyPacket(undefined, incomingLsid)
    }
  };
  Kata.SST.Connection.prototype.handleReplyPacket = function(received_stream_msg) {
    var incomingLsid = received_stream_msg.lsid;
    if(!this.mIncomingSubstreamMap[incomingLsid]) {
      var initiatingLSID = received_stream_msg.rsid;
      var outgoingSubstream = this.mOutgoingSubstreamMap[initiatingLSID];
      if(outgoingSubstream) {
        var stream = outgoingSubstream;
        this.mIncomingSubstreamMap[stream.mRemoteLSID = incomingLsid] = stream;
        if(stream.mStreamReturnCallback) {
          stream.mStreamReturnCallback(Kata.SST.SUCCESS, stream);
          stream.receiveData(received_stream_msg, received_stream_msg.payload, received_stream_msg.bsn)
        }
      }else {
        Kata.log("Received reply packet for unknown stream\n" + this.headerToStringDebug(received_stream_msg))
      }
    }else {
      Kata.log("Received reply packet for already connected stream\n" + this.headerToStringDebug(received_stream_msg))
    }
  };
  Kata.SST.Connection.prototype.handleDataPacket = function(received_stream_msg) {
    var incomingLsid = received_stream_msg.lsid;
    var stream_ptr = this.mIncomingSubstreamMap[incomingLsid];
    if(stream_ptr) {
      stream_ptr.receiveData(received_stream_msg, received_stream_msg.payload, received_stream_msg.bsn)
    }
  };
  Kata.SST.Connection.prototype.handleAckPacket = function(received_channel_msg, received_stream_msg) {
    var incomingLsid = received_stream_msg.lsid;
    var stream_ptr = this.mIncomingSubstreamMap[incomingLsid];
    if(stream_ptr) {
      stream_ptr.receiveData(received_stream_msg, received_stream_msg.payload, received_channel_msg.ack_sequence_number)
    }
  };
  Kata.SST.Connection.prototype.handleDatagram = function(received_stream_msg) {
    var msg_flags = received_stream_msg.flags;
    if(msg_flags & Sirikata.Protocol.SST.SSTStreamHeader.CONTINUES) {
      if(!(received_stream_msg.lsid in this.mPartialReadDatagrams)) {
        this.mPartialReadDatagrams[received_stream_msg.lsid] = []
      }
      this.mPartialReadDatagrams[received_stream_msg.lsid].push(received_stream_msg.payload)
    }else {
      var dest_port = received_stream_msg.dest_port;
      var datagramCallbacks = [];
      if(dest_port in this.mReadDatagramCallbacks) {
        datagramCallbacks = this.mReadDatagramCallbacks[dest_port]
      }
      var numDatagramCallbacks = datagramCallbacks.length;
      var it = this.mPartialReadDatagrams[received_stream_msg.lsid];
      if(it) {
        var full_payload = [];
        var itlen = it.length;
        for(var ppi = 0;ppi < itlen;++ppi) {
          full_payload = Array.concat(full_payload, it[ppi])
        }
        full_payload = full_payload + received_stream_msg.payload;
        delete this.mPartialReadDatagrams[it];
        for(var i = 0;i < numDatagramCallbacks;i++) {
          datagramCallbacks[i](full_payload)
        }
      }else {
        for(var i = 0;i < numDatagramCallbacks;i++) {
          datagramCallbacks[i](received_stream_msg.payload)
        }
      }
    }
    var sstMsg = new Sirikata.Protocol.SST.SSTChannelHeader;
    sstMsg.channel_id = this.mRemoteChannelID;
    sstMsg.transmit_sequence_number = this.mTransmitSequenceNumber;
    sstMsg.ack_count = 1;
    sstMsg.ack_sequence_number = this.mLastReceivedSequenceNumber;
    this.sendSSTChannelPacket(sstMsg);
    this.mTransmitSequenceNumber = this.mTransmitSequenceNumber.unsigned_add(PROTO.I64.ONE)
  };
  Kata.SST.Connection.prototype.receiveMessage = function(object_message) {
    var recv_buff = object_message.payload;
    var received_msg = new Sirikata.Protocol.SST.SSTChannelHeader;
    received_msg.ParseFromArray(recv_buff);
    this.mLastReceivedSequenceNumber = received_msg.transmit_sequence_number;
    var receivedAckNum = received_msg.ack_sequence_number;
    this.markAcknowledgedPacket(receivedAckNum);
    if(this.mState == CONNECTION_PENDING_CONNECT_SST) {
      this.mState = CONNECTION_CONNECTED_SST;
      var originalListeningEndPoint = new Kata.SST.EndPoint(this.mRemoteEndPoint.endPoint, this.mRemoteEndPoint.port);
      this.setRemoteChannelID(received_msg.payload[0] * 256 * 65536 + received_msg.payload[1] * 65536 + received_msg.payload[2] * 256 + received_msg.payload[3]);
      this.mRemoteEndPoint.port = received_msg.payload[4] * 256 * 65536 + received_msg.payload[5] * 65536 + received_msg.payload[6] * 256 + received_msg.payload[7];
      this.sendData([], false);
      var localEndPointId = this.mLocalEndPoint.uid();
      var connectionCallback = sConnectionReturnCallbackMapSST[localEndPointId];
      if(connectionCallback) {
        delete sConnectionReturnCallbackMapSST[localEndPointId];
        connectionCallback(Kata.SST.SUCCESS, this)
      }
    }else {
      if(this.mState == CONNECTION_PENDING_RECEIVE_CONNECT_SST) {
        this.mState = CONNECTION_CONNECTED_SST
      }else {
        if(this.mState == CONNECTION_CONNECTED_SST) {
          if(received_msg.payload && received_msg.payload.length > 0) {
            this.parsePacket(received_msg)
          }
        }
      }
    }
    return true
  };
  Kata.SST.Connection.prototype.eraseDisconnectedStream = function(stream) {
    if(!(stream.mLSID in this.mOutgoingSubstreamMap)) {
      Kata.warn("Unable to remove stream from outgoing map " + stream.mRemoteLSID + "/" + stream.mLSID)
    }else {
      delete this.mOutgoingSubstreamMap[stream.mLSID]
    }
    if(!(stream.mRemoteLSID in this.mIncomingSubstreamMap)) {
      Kata.warn("Unable to remove stream from incoming map " + stream.mRemoteLSID + "/" + stream.mLSID)
    }else {
      delete this.mIncomingSubstreamMap[stream.mRemoteLSID]
    }
  };
  Kata.SST.Connection.prototype.finalize = function() {
    this.mDatagramLayer.dispatcher().unregisterObjectMessageRecipient(this.mLocalEndPoint.port, this);
    if(this.mState != CONNECTION_DISCONNECTED_SST) {
      this.mState = CONNECTION_DISCONNECTED_SST;
      this.close(true)
    }
  };
  var closeConnectionsSST = function() {
    sConnectionMapSST = {}
  };
  Kata.SST.Connection.prototype.cleanup = function() {
    var connState = this.mState;
    if(connState == CONNECTION_PENDING_CONNECT_SST || connState == CONNECTION_DISCONNECTED_SST) {
      var cb = null;
      var localEndPoint = this.mLocalEndPoint;
      var localEndPointId = localEndPoint.uid();
      cb = sConnectionReturnCallbackMapSST[localEndPointId];
      var failed_conn = this;
      delete sConnectionReturnCallbackMapSST[localEndPointId];
      delete sConnectionMapSST[localEndPointId];
      if(connState == CONNECTION_PENDING_CONNECT_SST && cb) {
        cb(Kata.SST.FAILURE, failed_conn)
      }
    }
  };
  Kata.SST.Connection.prototype.datagram = function(data, local_port, remote_port, cb) {
    var currOffset = 0;
    if(this.mState == CONNECTION_DISCONNECTED_SST || this.mState == CONNECTION_PENDING_DISCONNECT_SST) {
      if(cb) {
        cb(Kata.SST.FAILURE, data)
      }
      return false
    }
    var lsid = this.getNewLSID();
    var length = data.length;
    while(currOffset < length) {
      var header_buffer = 28;
      while(true) {
        var buffLen;
        var continues = true;
        if(length - currOffset > MAX_PAYLOAD_SIZE_SST - header_buffer) {
          buffLen = MAX_PAYLOAD_SIZE_SST - header_buffer;
          continues = true
        }else {
          buffLen = length - currOffset;
          continues = false
        }
        var sstMsg = new Sirikata.Protocol.SST.SSTStreamHeader;
        sstMsg.lsid = lsid;
        sstMsg.type = Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.DATAGRAM;
        var flags = 0;
        if(continues) {
          flags = flags | Sirikata.Protocol.SST.SSTStreamHeader.CONTINUES
        }
        sstMsg.flags = flags;
        sstMsg.window = 10;
        sstMsg.src_port = local_port;
        sstMsg.dest_port = remote_port;
        sstMsg.payload = data.slice(currOffset, currOffset + buffLen);
        var buffer = sstMsg.SerializeToArray();
        if(buffer.length > MAX_PAYLOAD_SIZE_SST) {
          header_buffer += 10;
          continue
        }
        this.sendData(buffer, false);
        currOffset += buffLen;
        break
      }
    }
    if(cb) {
      cb(Kata.SST.SUCCESS, data)
    }
    return true
  };
  Kata.SST.Connection.prototype.registerReadDatagramCallback = function(port, cb) {
    if(!(port in this.mReadDatagramCallbacks)) {
      this.mReadDatagramCallbacks[port] = []
    }
    this.mReadDatagramCallbacks[port].push(cb);
    return true
  };
  Kata.SST.Connection.prototype.registerReadOrderedDatagramCallback = function(cb) {
    throw"UNIMPLEMENTED";
  };
  Kata.SST.Connection.prototype.close = function(force) {
    if(force && this.mState != CONNECTION_DISCONNECTED_SST) {
      delete sConnectionMapSST[this.mLocalEndPoint.uid()]
    }
    if(force) {
      this.mState = CONNECTION_DISCONNECTED_SST
    }else {
      this.mState = CONNECTION_PENDING_DISCONNECT_SST
    }
  };
  var connectionHandleReceiveSST = function(datagramLayer, remoteEndPoint, localEndPoint, recvBuffer) {
    var localEndPointId = localEndPoint.uid();
    var whichLocalConnection = sConnectionMapSST[localEndPointId];
    var listeningConnection = sListeningConnectionsCallbackMapSST[localEndPointId];
    if(!whichLocalConnection && !listeningConnection) {
      Kata.log("whichLocal and listening are both null for " + localEndPointId);
      return false
    }
    var received_msg = new Sirikata.Protocol.SST.SSTChannelHeader;
    var parsed = received_msg.ParseFromArray(recvBuffer);
    var channelID = received_msg.channel_id;
    if(whichLocalConnection) {
      if(channelID == 0) {
        Kata.log("Someone's already connected at this port on object " + localEndPoint.endPoint.uid());
        return true
      }
      whichLocalConnection.receiveParsedMessage(parsed)
    }else {
      if(channelID == 0) {
        if(listeningConnection) {
          var received_payload = received_msg.payload;
          var availableChannel = datagramLayer.getAvailableChannel();
          var availablePort = datagramLayer.getAvailablePort();
          var newLocalEndPoint = new Kata.SST.EndPoint(localEndPoint.endPoint, availablePort);
          var conn = new Kata.SST.Connection(newLocalEndPoint, remoteEndPoint);
          conn.listenStream(newLocalEndPoint.port, sListeningConnectionsCallbackMapSST[localEndPoint]);
          sConnectionMapSST[newLocalEndPoint.uid()] = conn;
          conn.setLocalChannelID(availableChannel);
          conn.setRemoteChannelID(received_payload[0] * 65536 * 256 + 65536 * received_payload[1] + 256 * received_payload[2] + received_payload[3]);
          conn.setState(CONNECTION_PENDING_RECEIVE_CONNECT_SST);
          conn.sendData([availableChannel >> 24 & 255, availableChannel >> 16 & 255, availableChannel >> 8 & 255, availableChannel & 255, availablePort >> 24 & 255, availablePort >> 16 & 255, availablePort >> 8 & 255, availablePort & 255], false)
        }else {
          Kata.log("Got non-init message on port we're listening on: " + localEndPointId)
        }
      }
    }
    return true
  };
  var StreamBuffer = function(data, offset) {
    this.mTransmitTime = null;
    this.mAckTime = null;
    this.mBuffer = data;
    this.mOffset = offset
  };
  var MAX_PAYLOAD_SIZE_STREAM_SST = 1E3;
  var MAX_QUEUE_LENGTH_STREAM_SST = 4E6;
  var MAX_RECEIVE_WINDOW_STREAM_SST = 1E4;
  var FL_ALPHA_STREAM_SST = 0.8;
  var INV_FL_ALPHA_STREAM_SST = 1 - FL_ALPHA_STREAM_SST;
  var MAX_INIT_RETRANSMISSIONS_STREAM_SST = 5;
  var DISCONNECTED_STREAM_SST = 1;
  var CONNECTED_STREAM_SST = 2;
  var PENDING_DISCONNECT_STREAM_SST = 3;
  var PENDING_CONNECT_STREAM_SST = 4;
  var sStreamReturnCallbackMapSST = {};
  Kata.SST.connectStream = function(localEndPoint, remoteEndPoint, cb) {
    var localEndPointId = localEndPoint.uid();
    if(sStreamReturnCallbackMapSST[localEndPointId]) {
      return false
    }
    sStreamReturnCallbackMapSST[localEndPointId] = cb;
    return createConnectionSST(localEndPoint, remoteEndPoint, connectionCreatedStreamSST)
  };
  Kata.SST.listenStream = function(cb, listeningEndPoint) {
    return connectionListenSST(cb, listeningEndPoint)
  };
  Kata.SST.Stream = function(parentLSID, conn, local_port, remote_port, usid, lsid, initial_data, remotelyInitiated, remoteLSID, cb) {
    this.mState = PENDING_CONNECT_STREAM_SST;
    this.mLocalPort = local_port;
    this.mRemotePort = remote_port;
    this.mParentLSID = parentLSID;
    this.mConnection = conn;
    this.mUSID = usid;
    this.mLSID = lsid;
    this.mRemoteLSID = remoteLSID;
    this.mStreamRTOMilliseconds = 5E3;
    this.mTransmitWindowSize = MAX_RECEIVE_WINDOW_STREAM_SST;
    this.mReceiveWindowSize = MAX_RECEIVE_WINDOW_STREAM_SST;
    this.mNumOutstandingBytes = 0;
    this.mNextByteExpected = PROTO.I64.ZERO;
    this.mLastContiguousByteReceived = PROTO.I64.fromNumber(-1);
    this.mLastSendTime = null;
    this.mStreamReturnCallback = cb;
    this.mConnected = false;
    if(remotelyInitiated) {
      this.mConnected = true;
      this.mState = CONNECTED_STREAM_SST;
      AAconnectedBCount.push(this)
    }
    if(initial_data) {
      if(initial_data.length <= MAX_PAYLOAD_SIZE_STREAM_SST) {
        this.mInitialData = initial_data
      }else {
        this.mInitialData = initial_data.slice(0, MAX_PAYLOAD_SIZE_STREAM_SST)
      }
    }else {
      this.mInitialData = []
    }
    this.mReceiveBuffer = [];
    this.mQueuedBuffers = new Kata.Deque;
    this.mChannelToBufferMap = {};
    this.mChannelToStreamOffsetMap = {};
    this.mCurrentQueueLength = 0;
    if(remotelyInitiated) {
      this.sendReplyPacket(this.mInitialData, remoteLSID)
    }else {
      this.sendInitPacket(this.mInitialData)
    }
    this.mNumInitRetransmissions = 1;
    this.mNumBytesSent = PROTO.I64.fromNumber(this.mInitialDataLength || 0);
    if(initial_data.length > this.mInitialData.length) {
      this.write(initial_data.slice(this.mInitialData.length, initial_data.length))
    }
  };
  Kata.SST.Stream.prototype.finalize = function() {
    this.close(true)
  };
  Kata.SST.Stream.prototype.datagram = function(data, local_port, remote_port, cb) {
    return this.mConnection.datagram(data, local_port, remote_port, cb)
  };
  Kata.SST.Stream.prototype.listenSubstream = function(port, scb) {
    this.mConnection.listenStream(port, scb)
  };
  Kata.SST.Stream.prototype.write = function(data) {
    if(this.mState == DISCONNECTED_STREAM_SST || this.mState == PENDING_DISCONNECT_STREAM_SST) {
      return-1
    }
    var count = 0;
    var len = data.length;
    if(len <= MAX_PAYLOAD_SIZE_STREAM_SST) {
      if(this.mCurrentQueueLength + len > MAX_QUEUE_LENGTH_STREAM_SST) {
        return 0
      }
      KataDequePushBack(this.mQueuedBuffers, new StreamBuffer(data, this.mNumBytesSent));
      this.mCurrentQueueLength += len;
      this.mNumBytesSent = this.mNumBytesSent.unsigned_add(PROTO.I64.fromNumber(len));
      setTimeout(Kata.bind(this.serviceStream, this), 0);
      return len
    }else {
      var currOffset = 0;
      while(currOffset < len) {
        var buffLen = len - currOffset > MAX_PAYLOAD_SIZE_STREAM_SST ? MAX_PAYLOAD_SIZE_STREAM_SST : len - currOffset;
        if(this.mCurrentQueueLength + buffLen > MAX_QUEUE_LENGTH_STREAM_SST) {
          break
        }
        KataDequePushBack(this.mQueuedBuffers.push_back, new StreamBuffer(data.slice(currOffset, currOffset + buffLen), this.mNumBytesSent));
        currOffset += buffLen;
        this.mCurrentQueueLength += buffLen;
        this.mNumBytesSent = this.mNumBytesSent.unsigned_add(PROTO.I64.fromNumber(buffLen));
        count++
      }
      setTimeout(Kata.bind(this.serviceStream, this), 0);
      return currOffset
    }
  };
  Kata.SST.Stream.prototype.registerReadCallback = function(ReadCallback) {
    this.mReadCallback = ReadCallback;
    this.sendToApp(0);
    return true
  };
  Kata.SST.Stream.prototype.close = function(force) {
    if(force) {
      this.mConnected = false;
      if(this.mConnection) {
        this.mConnection.eraseDisconnectedStream(this)
      }
      this.mState = DISCONNECTED_STREAM_SST;
      AAdisconnectedBCount.push(this);
      return true
    }else {
      if(this.mState != DISCONNECTED_STREAM_SST) {
        AApendingDisconnectedBCount.push(this);
        this.mState = PENDING_DISCONNECT_STREAM_SST;
        setTimeout(Kata.bind(this.serviceStream, this), 0);
        return true
      }else {
        return false
      }
    }
  };
  Kata.SST.Stream.prototype.setPriority = function(pri) {
  };
  Kata.SST.Stream.prototype.priority = function() {
    return 0
  };
  Kata.SST.Stream.prototype.connection = function() {
    return this.mConnection
  };
  Kata.SST.Stream.prototype.createChildStream = function(cb, data, local_port, remote_port) {
    this.mConnection.stream(cb, data, local_port, remote_port, this.mParentLSID)
  };
  Kata.SST.Stream.prototype.localEndPoint = function() {
    return new Kata.SST.EndPoint(this.mConnection.localEndPoint().endPoint, this.mLocalPort)
  };
  Kata.SST.Stream.prototype.remoteEndPoint = function() {
    return new Kata.SST.EndPoint(this.mConnection.remoteEndPoint().endPoint, this.mRemotePort)
  };
  var connectionCreatedStreamSST = function(errCode, c) {
    var localEndPoint = c.mLocalEndPoint;
    var localEndPointId = localEndPoint.uid();
    var cb = sStreamReturnCallbackMapSST[localEndPointId];
    delete sStreamReturnCallbackMapSST[localEndPointId];
    if(!cb) {
      Kata.error("Callback not defined for connectionCreatedStreamSST, " + localEndPointId)
    }
    if(errCode != Kata.SST.SUCCESS) {
      cb(Kata.SST.FAILURE, null);
      return
    }
    c.stream(cb, new Array, localEndPoint.port, c.mRemoteEndPoint.port)
  };
  Kata.SST.Stream.prototype.serviceStream = function() {
    function mapEmpty(m) {
      for(var i in m) {
        return false
      }
      return true
    }
    var baseCb = null;
    this.conn = this.mConnection;
    var curTime = new Date;
    if(this.mState != CONNECTED_STREAM_SST && this.mState != PENDING_DISCONNECT_STREAM_SST && this.mState != DISCONNECTED_STREAM_SST) {
      if(!this.mConnected && this.mNumInitRetransmissions < MAX_INIT_RETRANSMISSIONS_STREAM_SST) {
        this.sendInitPacket(this.mInitialData);
        this.mLastSendTime = curTime;
        this.mNumInitRetransmissions++;
        return true
      }
      this.mInitialDataLength = 0;
      if(!this.mConnected) {
        var retVal = true;
        if(this.mParentLSID == 0) {
          var localUid = this.mConnection.mLocalEndPoint.uid();
          baseCb = sStreamReturnCallbackMapSST[localUid];
          delete sStreamReturnCallbackMapSST[localUid];
          this.mConnection.close(true);
          retVal = false
        }
        if(this.mStreamReturnCallback) {
          this.mStreamReturnCallback(Kata.SST.FAILURE, null)
        }
        this.mStreamReturnCallback = null;
        this.mState = DISCONNECTED_STREAM_SST;
        AAdisconnectedCCount.push(this);
        if(baseCb) {
          baseCb(Kata.SST.FAILURE, null)
        }
        if(!retVal) {
          setTimeout(Kata.bind(this.mConnection.cleanup, this.mConnection), 0)
        }
        return false
      }else {
        AAconnectedACount.push(this);
        this.mState = CONNECTED_STREAM_SST
      }
    }else {
      if(this.mState != DISCONNECTED_STREAM_SST) {
        if(this.mLastSendTime && curTime.getTime() - this.mLastSendTime.getTime() > 2 * this.mStreamRTOMilliseconds) {
          this.resendUnackedPackets();
          this.mLastSendTime = curTime
        }
        if(this.mState == PENDING_DISCONNECT_STREAM_SST && KataDequeEmpty(this.mQueuedBuffers) && mapEmpty(this.mChannelToBufferMap)) {
          this.mState = DISCONNECTED_STREAM_SST;
          AAdisconnectedACount.push(this);
          this.mConnection.eraseDisconnectedStream(this);
          return true
        }
        var sentSomething = false;
        while(!KataDequeEmpty(this.mQueuedBuffers)) {
          var buffer = KataDequeFront(this.mQueuedBuffers);
          if(this.mTransmitWindowSize < buffer.mBuffer.length) {
            break
          }
          var channelID = this.sendDataPacket(buffer.mBuffer, buffer.mOffset);
          buffer.mTransmitTime = curTime;
          sentSomething = true;
          var key = channelID.hash();
          if(!this.mChannelToBufferMap[key]) {
            this.mChannelToBufferMap[key] = buffer;
            this.mChannelToStreamOffsetMap[key] = buffer.mOffset
          }
          KataDequePopFront(this.mQueuedBuffers);
          this.mCurrentQueueLength -= buffer.mBuffer.length;
          this.mLastSendTime = curTime;
          if(buffer.mBuffer.length > this.mTransmitWindowSize) {
            Kata.log("Failure: buffer length " + buffer.mBuffer.length + "is greater than trasmitwindow size" + this.mTransmitWindowSize)
          }
          this.mTransmitWindowSize -= buffer.mBuffer.length;
          this.mNumOutstandingBytes += buffer.mBuffer.length
        }
        if(sentSomething) {
          setTimeout(Kata.bind(this.serviceStream, this), this.mStreamRTOMilliseconds * 2)
        }
      }
    }
    return true
  };
  Kata.SST.Stream.prototype.resendUnackedPackets = function() {
    function mapEmpty(m) {
      for(var i in m) {
        return false
      }
      return true
    }
    for(var it in this.mChannelToBufferMap) {
      var buffer = this.mChannelToBufferMap[it];
      var bufferLength = buffer.mBuffer.length;
      KataDequePushFront(this.mQueuedBuffers, buffer);
      this.mCurrentQueueLength += bufferLength;
      if(this.mTransmitWindowSize < bufferLength) {
        if(bufferLength <= 0) {
          Kata.log("Assertion failed: channelbuffer must have size >0")
        }
        this.mTransmitWindowSize = bufferLength
      }
    }
    setTimeout(Kata.bind(this.serviceStream, this), 0);
    var channelToBufferMapEmpty = mapEmpty(this.mChannelToBufferMap);
    if(channelToBufferMapEmpty && !KataDequeEmpty(this.mQueuedBuffers)) {
      var buffer = KataDequeFront(this.mQueuedBuffers);
      var bufferLength = buffer.mBuffer.length;
      if(bufferLength <= 0) {
        Kata.log("Assertion failed: channelbuffer must have size >0")
      }
      if(this.mTransmitWindowSize < bufferLength) {
        this.mTransmitWindowSize = bufferLength
      }
    }
    this.mNumOutstandingBytes = 0;
    if(!channelToBufferMapEmpty) {
      if(this.mStreamRTOMilliseconds < 2E3) {
        this.mStreamRTOMilliseconds *= 2
      }
      this.mChannelToBufferMap = {}
    }
  };
  Kata.SST.Stream.prototype.sendToApp = function(skipLength) {
    var readyBufferSize = skipLength;
    for(var i = skipLength;i < MAX_RECEIVE_WINDOW_STREAM_SST;i++) {
      if(this.mReceiveBuffer[i] !== undefined) {
        readyBufferSize++
      }else {
        break
      }
    }
    if(this.mReadCallback && readyBufferSize > 0) {
      this.mReadCallback(this.mReceiveBuffer.slice(0, readyBufferSize));
      this.mLastContiguousByteReceived = this.mLastContiguousByteReceived.add(PROTO.I64.fromNumber(readyBufferSize));
      this.mNextByteExpected = this.mLastContiguousByteReceived.unsigned_add(PROTO.I64.ONE);
      var len = MAX_RECEIVE_WINDOW_STREAM_SST - readyBufferSize;
      var i;
      for(i = 0;i < len;i++) {
        this.mReceiveBuffer[i] = this.mReceiveBuffer[i + readyBufferSize]
      }
      for(;i < MAX_RECEIVE_WINDOW_STREAM_SST;++i) {
        this.mReceiveBuffer[i] = undefined
      }
      this.mReceiveBuffer.length = len;
      this.mReceiveWindowSize += readyBufferSize
    }
  };
  Kata.SST.Stream.prototype.receiveData = function(streamMsg, buffer, offset) {
    if(streamMsg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.REPLY) {
      this.mConnected = true
    }else {
      if(streamMsg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.DATA || streamMsg.type == Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.INIT) {
        if(Math.pow(2, streamMsg.window) - this.mNumOutstandingBytes < 0.5) {
          Kata.log("Assertion failed: 2^" + streamMsg.window + " <= " + this.mNumOutstandingBytes)
        }
        this.mTransmitWindowSize = Math.round(Math.pow(2, streamMsg.window) - this.mNumOutstandingBytes);
        if(this.mTransmitWindowSize > 0 && !KataDequeEmpty(this.mQueuedBuffers)) {
          setTimeout(Kata.bind(this.serviceStream, this), 0)
        }
        var lastContigByteMSW = this.mLastContiguousByteReceived.msw;
        var offset64 = offset;
        var offsetInBuffer = offset64.sub(this.mLastContiguousByteReceived).lsw - 1;
        if(offset.lsw == this.mNextByteExpected.lsw) {
          if(offsetInBuffer + buffer.length <= MAX_RECEIVE_WINDOW_STREAM_SST) {
            var len = buffer.length;
            this.mReceiveWindowSize -= len;
            for(var i = 0;i < len;++i) {
              var loc = offsetInBuffer + i;
              this.mReceiveBuffer[loc] = buffer[i]
            }
            this.sendToApp(len);
            this.sendAckPacket()
          }else {
            this.sendToApp(0)
          }
        }else {
          var len = buffer.length;
          var lastByteInBuffer = offset.lsw + len - 1;
          var beforeWindow = lastByteInBuffer - this.mLastContiguousByteReceived.lsw;
          if(Math.abs(beforeWindow) > 2147483647) {
            beforeWindow = -beforeWindow
          }
          if(beforeWindow <= 0) {
            this.sendAckPacket()
          }else {
            if(offsetInBuffer + len <= MAX_RECEIVE_WINDOW_STREAM_SST) {
              if(offsetInBuffer + len <= 0) {
                Kata.log("Assertion failed: Offset in Buffer " + offsetInBuffer + "+" + len + "<=0")
              }
              this.mReceiveWindowSize -= len;
              for(var i = 0;i < len;++i) {
                var loc = offsetInBuffer + i;
                this.mReceiveBuffer[loc] = buffer[i]
              }
              this.sendAckPacket()
            }else {
              this.sendToApp(0)
            }
          }
        }
      }
    }
    var offsetHash = offset.hash();
    if(offsetHash in this.mChannelToBufferMap) {
      var buf = this.mChannelToBufferMap[offsetHash];
      var dataOffset = buf.mOffset;
      this.mNumOutstandingBytes -= buf.mBuffer.length;
      buf.mAckTime = new Date;
      this.updateRTO(buf.mTransmitTime, buf.mAckTime);
      if(Math.pow(2, streamMsg.window) - this.mNumOutstandingBytes >= 0.5) {
        this.mTransmitWindowSize = Math.round(Math.pow(2, streamMsg.window) - this.mNumOutstandingBytes);
        if(this.mTransmitWindowSize > 0 && !KataDequeEmpty(this.mQueuedBuffers)) {
          setTimeout(Kata.bind(this.serviceStream, this), 0)
        }
      }else {
        this.mTransmitWindowSize = 0
      }
      delete this.mChannelToBufferMap[offsetHash];
      var channelOffsets = [];
      for(var it in this.mChannelToBufferMap) {
        if(this.mChannelToBufferMap[it].mOffset.equals(dataOffset)) {
          channelOffsets.push(it)
        }
      }
      for(var i = 0;i < channelOffsets.length;i++) {
        delete this.mChannelToBufferMap[channelOffsets[i]]
      }
    }else {
      if(offsetHash in this.mChannelToStreamOffsetMap) {
        var dataOffset = this.mChannelToStreamOffsetMap[offsetHash];
        delete this.mChannelToStreamOffsetMap[offsetHash];
        var channelOffsets = [];
        for(it in this.mChannelToBufferMap) {
          if(this.mChannelToBufferMap[it].mOffset.equals(dataOffset)) {
            channelOffsets.push(it)
          }
        }
        var len = channelOffsets.length;
        for(var i = 0;i < len;i++) {
          delete this.mChannelToBufferMap[channelOffsets[i]]
        }
      }
    }
  };
  Kata.SST.Stream.prototype.updateRTO = function() {
    var firstRTO = true;
    return function(sampleStartTime, sampleEndTime) {
      var sst = sampleStartTime.getTime();
      var set = sampleEndTime.getTime();
      if(sst > set) {
        Kata.log("Bad sample\n");
        return
      }
      if(firstRTO) {
        this.mStreamRTOMilliseconds = set - sst;
        firstRTO = false
      }else {
        this.mStreamRTOMilliseconds = FL_ALPHA_STREAM_SST * this.mStreamRTOMilliseconds + INV_FL_ALPHA_STREAM_SST * (set - sst)
      }
    }
  }();
  Kata.SST.Stream.prototype.sendInitPacket = function(data) {
    var sstMsg = new Sirikata.Protocol.SST.SSTStreamHeader;
    sstMsg.lsid = this.mLSID;
    sstMsg.type = Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.INIT;
    sstMsg.flags = 0;
    sstMsg.window = Math.log(this.mReceiveWindowSize) / Math.log(2);
    sstMsg.src_port = this.mLocalPort;
    sstMsg.dest_port = this.mRemotePort;
    sstMsg.psid = this.mParentLSID;
    sstMsg.bsn = PROTO.I64.fromNumber(0);
    sstMsg.payload = data;
    var buffer = sstMsg.SerializeToArray();
    this.mConnection.sendData(buffer, false);
    setTimeout(Kata.bind(this.serviceStream, this), 2 * this.mStreamRTOMilliseconds)
  };
  Kata.SST.Stream.prototype.sendAckPacket = function() {
    var sstMsg = new Sirikata.Protocol.SST.SSTStreamHeader;
    sstMsg.lsid = this.mLSID;
    sstMsg.type = Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.ACK;
    sstMsg.flags = 0;
    sstMsg.window = Math.log(this.mReceiveWindowSize) / Math.log(2);
    sstMsg.src_port = this.mLocalPort;
    sstMsg.dest_port = this.mRemotePort;
    var buffer = sstMsg.SerializeToArray();
    this.mConnection.sendData(buffer, true)
  };
  Kata.SST.Stream.prototype.sendDataPacket = function(data, offset) {
    var sstMsg = new Sirikata.Protocol.SST.SSTStreamHeader;
    sstMsg.lsid = this.mLSID;
    sstMsg.type = Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.DATA;
    sstMsg.flags = 0;
    sstMsg.window = Math.log(this.mReceiveWindowSize) / Math.log(2);
    sstMsg.src_port = this.mLocalPort;
    sstMsg.dest_port = this.mRemotePort;
    sstMsg.bsn = PROTO.I64.fromNumber(offset);
    sstMsg.payload = data;
    var buffer = sstMsg.SerializeToArray();
    return this.mConnection.sendData(buffer, false)
  };
  Kata.SST.Stream.prototype.sendReplyPacket = function(data, remoteLSID) {
    var sstMsg = new Sirikata.Protocol.SST.SSTStreamHeader;
    sstMsg.lsid = this.mLSID;
    sstMsg.type = Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType.REPLY;
    sstMsg.flags = 0;
    sstMsg.window = Math.log(this.mReceiveWindowSize) / Math.log(2);
    sstMsg.src_port = this.mLocalPort;
    sstMsg.dest_port = this.mRemotePort;
    sstMsg.rsid = remoteLSID;
    sstMsg.bsn = PROTO.I64.fromNumber(0);
    sstMsg.payload = data;
    var buffer = sstMsg.SerializeToArray();
    this.mConnection.sendData(buffer, false)
  }
}, "katajs/oh/sst/SSTImpl.js");
Kata.require([], function() {
  if(typeof Kata.Loopback == "undefined") {
    Kata.Loopback = {}
  }
  Kata.Loopback.EveryoneProx = function(space) {
    this.mSpace = space;
    this.mObjects = {};
    this.mQueriers = {}
  };
  Kata.Loopback.EveryoneProx.prototype.addObject = function(uuid) {
    if(this.mObjects[uuid]) {
      return
    }
    this.mObjects[uuid] = uuid;
    for(var querier in this.mQueriers) {
      if(querier == uuid) {
        continue
      }
      this.mSpace.proxResult(querier, uuid, true)
    }
  };
  Kata.Loopback.EveryoneProx.prototype.removeObject = function(uuid) {
    if(!this.mObjects[uuid]) {
      return
    }
    delete this.mObjects[uuid];
    for(var querier in this.mQueriers) {
      if(querier == uuid) {
        continue
      }
      this.mSpace.proxResult(querier, uuid, false)
    }
  };
  Kata.Loopback.EveryoneProx.prototype.addQuery = function(querier) {
    if(this.mQueriers[querier]) {
      return
    }
    this.mQueriers[querier] = querier;
    for(var seen in this.mObjects) {
      if(querier == seen) {
        continue
      }
      this.mSpace.proxResult(querier, seen, true)
    }
  };
  Kata.Loopback.EveryoneProx.prototype.removeQuery = function(querier) {
    if(this.mQueriers[querier]) {
      delete this.mQueriers[querier]
    }
  }
}, "katajs/space/loop/EveryoneProx.js");
Kata.require([], function() {
  if(typeof Kata.Loopback == "undefined") {
    Kata.Loopback = {}
  }
  Kata.Loopback.Loc = function() {
    this.mObjects = {};
    this.mListeners = []
  };
  Kata.Loopback.Loc.prototype.addListener = function(listener) {
    this.mListeners.append(listener)
  };
  Kata.Loopback.Loc.prototype._notify = function() {
    for(var listener in this.mListeners) {
      listener.apply(undefined, arguments)
    }
  };
  Kata.Loopback.Loc.prototype.add = function(uuid, loc, visual) {
    if(this.mObjects[uuid]) {
      Kata.warn("Loopback.Loc trying to add an existing object." + uuid)
    }
    this.mObjects[uuid] = {loc:loc, visual:visual}
  };
  Kata.Loopback.Loc.prototype._checkExists = function(uuid) {
    if(!this.mObjects[uuid]) {
      return false
    }
    return true
  };
  Kata.Loopback.Loc.prototype.remove = function(uuid) {
    if(!this._checkExists(uuid)) {
      Kata.warn("Loopback.Loc trying to remove unknown object." + uuid);
      return
    }
    delete this.mObjects[uuid]
  };
  Kata.Loopback.Loc.prototype.update = function(uuid, loc, visual) {
    if(!this._checkExists(uuid)) {
      Kata.warn("Trying to update location for non-existant object: " + uuid);
      return
    }
    if(loc) {
      Kata.LocationReset(loc, this.mObjects[uuid].loc)
    }
    if(visual) {
      this.mObjects[uuid].visual = visual
    }
    this._notify(uuid, loc, visual)
  };
  Kata.Loopback.Loc.prototype.updatePosition = function(uuid, pos, time) {
    this.update(uuid, {pos:pos, time:time})
  };
  Kata.Loopback.Loc.prototype.updateVelocity = function(uuid, vel) {
    this.update(uuid, {vel:vel})
  };
  Kata.Loopback.Loc.prototype.updateOrientation = function(uuid, orient, time) {
    this.update(uuid, {orient:orient, time:time})
  };
  Kata.Loopback.Loc.prototype.updateAngularVelocity = function(uuid, angvel, angaxis) {
    this.update(uuid, {angvel:angvel, angaxis:angaxis})
  };
  Kata.Loopback.Loc.prototype.updateBounds = function(uuid, scale, time) {
    this.update(uuid, {scale:scale, time:time})
  };
  Kata.Loopback.Loc.prototype.updateVisual = function(uuid, visual) {
    this.update(uuid, {}, visual)
  };
  Kata.Loopback.Loc.prototype.lookup = function(uuid) {
    return this.mObjects[uuid]
  }
}, "katajs/space/loop/Loc.js");
Kata.require(["katajs/oh/SpaceConnection.js", "katajs/core/Time.js", "katajs/core/Math.uuid.js", "katajs/space/loop/Loc.js", "katajs/space/loop/EveryoneProx.js", "katajs/space/loop/Subscription.js", "katajs/core/Location.js"], function() {
  Kata.LoopbackSpace = function(spaceurl) {
    var spaceurlhost = Kata.URL.host(spaceurl);
    if(Kata.LoopbackSpace.spaces[spaceurlhost]) {
      Kata.warn("Overwriting static LoopbackSpace map entry for " + spaceurl)
    }
    Kata.LoopbackSpace.spaces[spaceurlhost] = this;
    this.mID = spaceurl;
    this.netdelay = 10;
    this.mObjects = {};
    this.mLoc = new Kata.Loopback.Loc;
    this.mProx = new Kata.Loopback.EveryoneProx(this);
    this.mSubscription = new Kata.Loopback.Subscription(this)
  };
  Kata.LoopbackSpace.spaces = {};
  Kata.LoopbackSpace.prototype.connectObject = function(id, cb, loc) {
    var spaceself = this;
    setTimeout(function() {
      spaceself._connectObject(id, cb, loc)
    }, this.netdelay)
  };
  Kata.LoopbackSpace._fakeUUIDs = 100;
  Kata.LoopbackSpace.prototype._connectObject = function(id, cb, loc) {
    var uuid;
    if(Kata.DEBUG_FAKE_UUID) {
      uuid = "fake-uuid-" + Kata.LoopbackSpace._fakeUUIDs++
    }else {
      uuid = Math.uuid()
    }
    var obj = {uuid:uuid};
    var obj_loc = loc;
    this.mLoc.add(uuid, obj_loc, cb.visual);
    this.mProx.addObject(uuid);
    this.mSubscription.addObject(uuid);
    this.mObjects[uuid] = cb;
    cb.connected(id, uuid, obj_loc, cb.visual)
  };
  Kata.LoopbackSpace.prototype.disconnectObject = function(id) {
    var spaceself = this;
    setTimeout(function() {
      spaceself._disconnectObject(id)
    }, this.netdelay)
  };
  Kata.LoopbackSpace.prototype._disconnectObject = function(id, cb) {
    this.mSubscription.removeObject(id);
    this.mProx.removeQuery(id);
    this.mProx.removeObject(id);
    this.mLoc.remove(id);
    delete this.mObjects[id]
  };
  Kata.LoopbackSpace.prototype.sendODPMessage = function(src_obj, src_port, dst_obj, dst_port, payload) {
    var spaceself = this;
    setTimeout(function() {
      spaceself._sendODPMessage(src_obj, src_port, dst_obj, dst_port, payload)
    }, this.netdelay)
  };
  Kata.LoopbackSpace.prototype._sendODPMessage = function(src_obj, src_port, dst_obj, dst_port, payload) {
    var src_cb = this.mObjects[src_obj];
    if(!src_cb) {
      Kata.warn("LoopbackSpace got message from non-existant object: " + src_obj);
      return
    }
    var dst_cb = this.mObjects[dst_obj];
    if(!dst_cb) {
      Kata.warn("LoopbackSpace got message to non-existant object: " + dst_obj);
      return
    }
    dst_cb.message(src_obj, src_port, dst_obj, dst_port, payload)
  };
  Kata.LoopbackSpace.prototype.registerProxQuery = function(id, sa) {
    var spaceself = this;
    setTimeout(function() {
      spaceself._registerProxQuery(id, sa)
    }, this.netdelay)
  };
  Kata.LoopbackSpace.prototype._registerProxQuery = function(id, sa) {
    this.mProx.addQuery(id)
  };
  Kata.LoopbackSpace.prototype.proxResult = function(querier, observed, entered) {
    var querier_cb = this.mObjects[querier];
    if(!querier_cb) {
      Kata.warn("LoopbackSpace got query result for non-existant object: " + querier);
      return
    }
    var observed_obj = this.mLoc.lookup(observed);
    var observed_properties = {loc:observed_obj.loc, visual:observed_obj.visual};
    Kata.LocationCopyUnifyTime(observed_properties.loc, observed_obj.loc);
    querier_cb.prox(querier, observed, entered, observed_properties)
  };
  Kata.LoopbackSpace.prototype.requestQueryRemoval = function(id) {
    Kata.notImplemented("Loopback space does not handle query angles")
  };
  Kata.LoopbackSpace.prototype.requestQueryUpdate = function(id, newAngle) {
    Kata.notImplemented("Loopback space does not handle query angles")
  };
  Kata.LoopbackSpace.prototype.locUpdateRequest = function(id, loc, visual) {
    var spaceself = this;
    spaceself._locUpdateRequest(id, loc, visual)
  };
  Kata.LoopbackSpace.prototype._locUpdateRequest = function(id, loc, visual) {
    this.mLoc.update(id, loc, visual);
    var spaceself = this;
    this.mSubscription.notify(id, function(to) {
      var receiver_cb = spaceself.mObjects[to];
      receiver_cb.presenceLocUpdate(id, to, loc, visual)
    }, true)
  };
  Kata.LoopbackSpace.prototype.subscriptionRequest = function(id, observed, enable) {
    var spaceself = this;
    setTimeout(function() {
      spaceself._subscriptionRequest(id, observed, enable)
    }, this.netdelay)
  };
  Kata.LoopbackSpace.prototype._subscriptionRequest = function(id, observed, enable) {
    if(enable) {
      this.mSubscription.subscribe(id, observed)
    }else {
      this.mSubscription.unsubscribe(id, observed)
    }
  };
  Kata.LoopbackSpace.prototype.sendMessage = function(from, to, payload) {
  }
}, "katajs/space/loop/Space.js");
Kata.require([], function() {
  if(typeof Kata.Loopback == "undefined") {
    Kata.Loopback = {}
  }
  Kata.Loopback.Subscription = function(space) {
    this.mSpace = space;
    this.mSubscribers = {}
  };
  Kata.Loopback.Subscription.prototype.addObject = function(id) {
    this.mSubscribers[id] = {}
  };
  Kata.Loopback.Subscription.prototype.removeObject = function(id) {
    delete this.mSubscribers[id];
    for(var sub in this.mSubscribers) {
      delete this.mSubscribers[sub][id]
    }
  };
  Kata.Loopback.Subscription.prototype.subscribe = function(id, observed) {
    if(this.mSubscribers[observed]) {
      this.mSubscribers[observed][id] = id
    }
  };
  Kata.Loopback.Subscription.prototype.unsubscribe = function(id, observed) {
    if(this.mSubscribers[observed]) {
      delete this.mSubscribers[observed][id]
    }
  };
  Kata.Loopback.Subscription.prototype.notify = function(observed, cb, self) {
    var subscribers = this.mSubscribers[observed];
    for(var subscriber in subscribers) {
      cb(subscriber)
    }
    if(self) {
      cb(observed)
    }
  }
}, "katajs/space/loop/Subscription.js");
(function() {
  for(var i in Kata.closureIncluded) {
    Kata.setIncluded(i)
  }
})();

