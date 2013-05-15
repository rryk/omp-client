/**
 * Created with JetBrains WebStorm.
 * User: rryk
 * Date: 4/19/13
 * Time: 12:34 PM
 * To change this template use File | Settings | File Templates.
 */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('xml3d'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['xml3d'], function (XML3D) {
            return (root.XML3DGraphics = factory(XML3D));
        });
    } else {
        // Browser globals
        root.XML3DGraphics = factory(root.XML3D);
    }
} (this, function (XML3D) {
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

    // ====================== XML3DObject ========================

    // Abstract class to be used as a base for all object types.
    XML3DObject = function(id) {
        this._id = (id != undefined) ? id : XML3DObject.generateID();
    }

    // Returns an object ID.
    XML3DObject.prototype.id = function() {
        return this._id;
    }

    // Returns a unique ID.
    XML3DObject._nextID = 0;
    XML3DObject.generateID = function() {
        return XML3DObject._nextID++;
    }

    // ====================== XML3DSimpleObject ========================
    XML3DSimpleObject = function(id, xml3dRepresentation) {
        XML3DObject.call(this, id);
        this._group = XML3D.createElement("group");
        this._group.setAttribute("id", this.id());

        this._modelGroup = XML3D.createElement("group");
        var modelTransformID = "transform" + XML3DObject.generateID();
        this._modelTransform = XML3D.createElement("transform");
        this._modelTransform.setAttribute("id", modelTransformID);
        this._modelGroup.setAttribute("transform", "#"+modelTransformID);

        if (typeof(xml3dRepresentation) == "string") {
            var parsedXML3DDocument = (new DOMParser()).parseFromString(
                xml3dRepresentation, "application/xml");

            this._model = parsedXML3DDocument.documentElement;
            this._modelGroup.appendChild(this._model);
        }

        var transformID = "transform" + XML3DObject.generateID();
        this._transform = XML3D.createElement("transform");
        this._transform.setAttribute("id", transformID);
        this._group.setAttribute("transform", "#" + transformID);
        this._group.setAttribute("visible", "false");
        this._group.appendChild(this._modelGroup);
    }
    util.inherits(XML3DSimpleObject, XML3DObject);

    XML3DSimpleObject.prototype.isVisible = function() {
        return this._group.parentElement && this._group.visible;
    }

    XML3DSimpleObject.prototype._bboxNotEmpty = function() {
        this._setModelBBoxTransform(this._bboxPosition, this._bboxRotation, this._bboxScale);
        this._bboxPosition = null;
        this._bboxRotation = null;
        this._bboxScale = null;
    }

    XML3DSimpleObject.prototype.setVisible = function(flag) {
        this._group.setAttribute("visible", flag ? "true" : "false");
    }

    XML3DSimpleObject.prototype.addToScene = function(scene) {
        if (this._group.parentElement)
            return;
        var defs = scene.getElementsByTagName("defs");
        if (defs.length == 0) {
            defs = XML3D.createElement("defs");
            scene.appendChild(defs);
        } else {
            defs = defs[0];
        }

        defs.appendChild(this._modelTransform);
        defs.appendChild(this._transform);
        scene.appendChild(this._group);
        if (this._bboxCB) {
            XMOT.util.cancelFireWhenBBoxNotEmpty(this._group, this._bboxCB);
        }
        this._bboxCB = this._bboxNotEmpty.bind(this);
        XMOT.util.fireWhenBBoxNotEmpty(this._group, this._bboxCB);
    }

    XML3DSimpleObject.prototype.removeFromScene = function(scene) {
        if (this._bboxCB) {
            XMOT.util.cancelFireWhenBBoxNotEmpty(this._group, this._bboxCB);
            this._bboxCB = null;
        }
        this._group.parentNode.removeChild(this._group);
        this._transform.parentNode.removeChild(this._transform);
    }

    XML3DSimpleObject.prototype.setLocation = function(position, rotation, scale) {
        this._transform.translation.x = position.x;
        this._transform.translation.y = position.y;
        this._transform.translation.z = position.z;

        if (rotation.constructor === window.XML3DRotation)
            this._transform.rotation.set(rotation);
        else
            this._transform.rotation.setQuaternion(new XML3DVec3(rotation.x, rotation.y, rotation.z), rotation.w);

        this._transform.scale.x = scale.x;
        this._transform.scale.y = scale.y;
        this._transform.scale.z = scale.z;
    }

    XML3DSimpleObject.prototype.setBBoxLocation = function(bboxPosition, bboxRotation, bboxScale) {
        this._setModelBBoxTransform(bboxPosition, bboxRotation, bboxScale);
    }

    XML3DSimpleObject.prototype._setModelBBoxTransform = function(bboxPosition, bboxRotation, bboxScale) {
        if (this.getModelBoundingBox().isEmpty()) {
            // bbox is empty, do it when bbox is available
            this._bboxPosition = bboxPosition;
            this._bboxRotation = bboxRotation;
            this._bboxScale = bboxScale;
        } else {
            var bbox = this.getModelBoundingBox();
            var bboxSize = bbox.size();

            xyzToString = function xyzToString(xyz) {
                return "[" + xyz.x + "," + xyz.y + "," + xyz.z + "]";
            }

            arrayToString = function arrayToString(xyz) {
                return "[" + xyz[0] + "," + xyz[1] + "," + xyz[2] + "]";
            }

            boxToString = function boxToString(box) {
                return "Box(min=" + xyzToString(box.min) + ", max=" + xyzToString(box.max) + ")";
            }

            //console.log("MODEL BBOX "+boxToString(bbox));

            //console.log(
            //    "ID "+this._id+" GET POS.Z "+bboxPosition.z+" DIFF TO GROUND "+(bboxPosition.z-22)+"\n"+
            //    " APPROX OMP MODEL HEIGHT "+((bboxPosition.z-22)/bboxScale.z)+"\n"+
            //    "SCALE Z "+bboxScale.z+" SCALE Z/2 "+(bboxScale.z/2)+" MODEL BBOX SIZE Z "+bboxSize.z+"\n"+
            //    " MODEL BBOX MIN Z "+bbox.min.z+" MODEL BBOX MAX Z "+bbox.max.z);

            // FIXME: Hack for the avatar. Ignores the scale provided by the server and corrects rotation.
            if (bboxScale.x > 0.73 && bboxScale.x < 0.75) {
              bboxScale = bboxSize.scale(0.1);
              this._modelTransform.rotation.setAxisAngle(new XML3DVec3(0, 0, 1), -1);
            }

            this._modelTransform.scale.x = 1 / bboxSize.x;
            this._modelTransform.scale.y = 1 / bboxSize.y;
            this._modelTransform.scale.z = 1 / bboxSize.z;
            this._modelTransform.center.x = bbox.min.x;
            this._modelTransform.center.y = bbox.min.y;
            this._modelTransform.center.z = bbox.min.z;
            this._modelTransform.translation.x = -bbox.min.x-0.5;
            this._modelTransform.translation.y = -bbox.min.y-0.5;
            this._modelTransform.translation.z = -bbox.min.z-0.5;

            if (bboxPosition) {
                this._transform.translation.x = bboxPosition.x;
                this._transform.translation.y = bboxPosition.y;
                this._transform.translation.z = bboxPosition.z;
            }
            if (bboxRotation) {
                if (bboxRotation.constructor === window.XML3DRotation)
                    this._transform.rotation.set(bboxRotation);
                else
                    this._transform.rotation.setQuaternion(
                        new XML3DVec3(bboxRotation.x, bboxRotation.y, bboxRotation.z), bboxRotation.w);
            }

            if (bboxScale) {
                this._transform.scale.x = bboxScale.x;
                this._transform.scale.y = bboxScale.y;
                this._transform.scale.z = bboxScale.z;
                //console.log("NEW SCALE "+this._transform.scale.x+" "+this._transform.scale.y+" "+this._transform.scale.z);
            }
        }
    }

    XML3DSimpleObject.prototype.getBoundingBox = function() {
        return this._group.getBoundingBox();
    }

    XML3DSimpleObject.prototype.getModelBoundingBox = function() {
        return this._model.getBoundingBox();
    }

    // ====================== XML3DMeshObject ========================

    XML3DMeshObject = function(/*Int32Array*/ index, /*Float32Array*/ pos) {
        XML3DObject.call(this);
        // TODO
    }
    util.inherits(XML3DMeshObject, XML3DObject);

    // Adds an |array| of |type| to the object mesh. Supported types: 'normal', 'texcoord'.
    XML3DMeshObject.prototype.addArray = /*void*/ function (/*string*/ type, /*TypedArray*/ array) {
        // TODO
    }

    XML3DMeshObject.prototype.setShader = /*void*/ function (/*XML3DShader*/ shader) {
        // TODO
    }

    // ====================== XML3DShader ========================

    // Abstract class for all other shader types.
    XML3DShader = function() {
        XML3DObject.call(this);
        // TODO
    }
    util.inherits(XML3DShader, XML3DObject);

    // ====================== XML3DMatteShader ========================

    // Class representing a matter shader.
    XML3DMatteShader = function() {
        XML3DShader.call(this);
        // TODO
    }
    util.inherits(XML3DMatteShader, XML3DShader);

    // ====================== XML3DPhongShader ========================

    // Class representing a phong shader.
    XML3DPhongShader = function() {
        XML3DShader.call(this);
        // TODO
    }
    util.inherits(XML3DPhongShader, XML3DShader);

    // The following setters modify phong shader properties. Documentation of these properties can be found at
    // http://www.xml3d.org/xml3d/specification/current/shader.html#phong.

    XML3DPhongShader.prototype.setEmissionColor = /*void*/ function(/*float*/r, /*float*/g, /*float*/b) {
        // TODO
    }

    XML3DPhongShader.prototype.setAmbientColor = /*void*/ function(/*float*/r, /*float*/g, /*float*/b) {
        // TODO
    }

    XML3DPhongShader.prototype.setDiffuseColor = /*void*/ function(/*float*/r, /*float*/g, /*float*/b) {
        // TODO
    }

    XML3DPhongShader.prototype.setDiffuseTexture = /*void*/ function(/*string*/ textureURI) {
        // TODO
    }

    XML3DPhongShader.prototype.setSpecularColor = /*void*/ function(/*float*/r, /*float*/g, /*float*/b) {
        // TODO
    }

    XML3DPhongShader.prototype.setShininess = /*void*/ function(/*float*/ shininess) {
        // TODO
    }

    XML3DPhongShader.prototype.setReflectionColor = /*void*/ function(/*float*/r, /*float*/g, /*float*/b) {
        // TODO
    }

    XML3DPhongShader.prototype.setTransparency = /*void*/ function(/*float*/ transparency) {
        // TODO
    }

    XML3DPhongShader.prototype.setCastShadow = /*void*/ function(/*bool*/ enable) {
        // TODO
    }

    // ====================== XML3DGraphics ========================

    // Provides an API to construct and modify an XML3D-based virtual world scene.
    XML3DGraphics = function() {
        this._cameraListener = null;
    }

    // Initializes XML3D scene in the |container|.
    XML3DGraphics.prototype.initScene = /*void*/ function(/*Element*/ container, options) {
//        if (container.namespaceURI == XML3D.xml3dNS && container.nodeName.toLowerCase() == "xml3d") {
//            this._scene = container;
//            return;
//        }

        options = options || {};

        this._scene = XML3D.createElement("xml3d");
        this._scene.setAttribute("id", "sceneRoot");
        this._scene.setAttribute("width", "800");
        this._scene.setAttribute("height", "600");

        this._defs = XML3D.createElement("defs");
        this._scene.appendChild(this._defs);

        this._cameraXfm = XML3D.createElement("transform");
        this._cameraXfm.setAttribute("id", "cameraXfm");

        this._cameraOffsetXfm = XML3D.createElement("transform");
        this._cameraOffsetXfm.setAttribute("id", "cameraOffsetXfm");

        //this._cameraXfm.setAttribute("translation", "139.3983917236328 180.59353637695312 39.621944427490234");
        //this._cameraXfm.setAttribute("rotation", "-0.05949794501066208 -0.6299545168876648 -0.7743496298789978 3.4618804122460576");

        this._defs.appendChild(this._cameraXfm);
        this._defs.appendChild(this._cameraOffsetXfm);

        this._view = XML3D.createElement("view");
        this._view.setAttribute("id", "view");

        this._viewOffsetGroup = XML3D.createElement("group");
        this._viewOffsetGroup.setAttribute("id", "viewOffsetGroup");
        this._viewOffsetGroup.setAttribute("transform", "#cameraOffsetXfm");
        this._viewOffsetGroup.appendChild(this._view);

        this._viewGroup = XML3D.createElement("group");
        this._viewGroup.setAttribute("id", "viewGroup");
        this._viewGroup.setAttribute("transform", "#cameraXfm");
        this._viewGroup.appendChild(this._viewOffsetGroup);

        this._scene.appendChild(this._viewGroup);

        // setup OpenSIM coordinate system for camera
        var X = new XML3DRotation(new XML3DVec3(1,0,0), Math.PI/180*90);
        var Y = new XML3DRotation(new XML3DVec3(0,1,0), -Math.PI/180*90);
        this._view.orientation.set(X.multiply(Y));
        this._view.setAttribute("position", "0 0 0");

        // FIXME: this should be done on response to LayerData message, but we just hardcode flat
        // terrain at height 22.
        this._terrain = (new DOMParser()).parseFromString(
          "<group id='terrain' shader='xml3d/terrain/terrain.xml#terrainShader'" +
          "                    transform='xml3d/terrain/terrain.xml#terrainTransform'>" +
          "  <mesh src='xml3d/terrain/terrain.xml#terrainData' />" +
          "</group>", "application/xml").documentElement;
        this._scene.appendChild(this._terrain);

        container.appendChild(this._scene);

        // create camera controller
        //this._sceneController = new XML3D.Xml3dSceneController(this._scene, {mode: "walk", view: this._cameraXfm});

//        var controller = new XMOT.ExamineController(this._viewGroup);
//        this._scene.addEventListener("mousedown", function(e) {
//            controller.start({x: e.clientX, y: e.clientY}, e.button == 2 ? XMOT.ExamineController.DOLLY : XMOT.ExamineController.ROTATE);
//        }, false);
//        window.addEventListener("mouseup", function() {
//            controller.stop();
//        }, false);
//        window.addEventListener("mousemove", function(e) {
//            controller.doAction({x: e.clientX, y: e.clientY});
//        }, false);

        if (options.enableCameraController) {
            var controller = new XMOT.CameraController("viewGroup", "sceneRoot", null, false);
            controller.activate();
        }

        var that = this;
        this._cameraXfm.addEventListener("DOMAttrModified", function (ev) {
            if (that._cameraListener) {
                that._cameraListener(that.getCameraPosition(), that.getCameraRotation());
            }
        }, false);

//        this._scene.addEventListener("mousedown", function(e) {
//            controller.start({x: e.clientX, y: e.clientY}, e.button == 2 ? XMOT.ExamineController.DOLLY : XMOT.ExamineController.ROTATE);
//        }, false);
//        window.addEventListener("mouseup", function() {
//            controller.stop();
//        }, false);
//        window.addEventListener("mousemove", function(e) {
//            controller.doAction({x: e.clientX, y: e.clientY});
//        }, false);
    }

    function rotate(dest, orientation) {
        var destination = new XML3DRotation(dest, undefined, undefined);
        destination = destination.multiply( orientation );
        dest.set(destination);
    }

    XML3DGraphics.prototype.rotateCameraLeftAndRight = function(angle) {
        //rotate up/down befor rotating sidewards, this prevends from rolling
        var angleUp = 0;
        //rotate( this._cameraXfm.rotation, new XML3DRotation(new XML3DVec3(1, 0, 0), -angleUp) );
        rotate( this._cameraXfm.rotation, new XML3DRotation(new XML3DVec3(0, 0, 1), angle) );
        //and rotate up/down again
        //rotate( this._cameraXfm.rotation, new XML3DRotation(new XML3DVec3(1, 0, 0), angleUp) );
    }

    XML3DGraphics.prototype.getXml3dId = function() {
        return this._scene.getAttribute("id");
    }

    XML3DGraphics.prototype.setCameraListener = function(listener) {
        this._cameraListener = listener;
    }

    XML3DGraphics.prototype.getCameraPosition = function() {
        return {x: this._cameraXfm.translation.x,
                y: this._cameraXfm.translation.y,
                z: this._cameraXfm.translation.z};
    }

    XML3DGraphics.prototype.getCameraRotation = function() {
        var quat = this._cameraXfm.rotation.getQuaternion();
        return {x: quat[0], y: quat[1], z:quat[2], w:quat[3]};
    }

    XML3DGraphics.prototype.setCameraLocation = function(position, rotation) {
        if (position) {
            this._cameraXfm.translation.x = position.x;
            this._cameraXfm.translation.y = position.y;
            this._cameraXfm.translation.z = position.z;
        }
        if (rotation) {
            if (rotation.constructor === window.XML3DRotation)
                this._cameraXfm.rotation.set(rotation);
            else
                this._cameraXfm.rotation.setQuaternion(new XML3DVec3(rotation.x, rotation.y, rotation.z), rotation.w);
        }
    }

    XML3DGraphics.prototype.setCameraOffset = function(position, rotation) {
        if (position) {
            this._cameraOffsetXfm.translation.x = position.x;
            this._cameraOffsetXfm.translation.y = position.y;
            this._cameraOffsetXfm.translation.z = position.z;
        }
        if (rotation) {
            if (rotation.constructor === window.XML3DRotation)
                this._cameraOffsetXfm.rotation.set(rotation);
            else
                this._cameraOffsetXfm.rotation.setQuaternion(new XML3DVec3(rotation.x, rotation.y, rotation.z), rotation.w);
        }
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createMeshObject = /*XML3DMeshObject*/ function(/*Int32Array*/ index, /*Float32Array*/ pos) {
        return new XML3DMeshObject(index, pos);
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createSimpleObject = /*XML3DSimpleObject*/ function(id, xml3d) {
        return new XML3DSimpleObject(id, xml3d);
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createMatteShader = /*XML3DMatteShader*/ function() {
        return new XML3DMatteShader();
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createPhongShader = /*XML3DPhongShader*/ function() {
        return new XML3DPhongShader();
    }

    // Adds a mesh to the scene.
    XML3DGraphics.prototype.addMeshObject = /*void*/ function(/*XML3DMeshObject*/ object) {
        // TODO
    }

    // Adds a simple object to the scene.
    XML3DGraphics.prototype.addSimpleObject = /*void*/ function(/*XML3DSimpleObject*/ object) {
        object.addToScene(this._scene);
    }

    // Removes a simple object from the scene.
    XML3DGraphics.prototype.removeSimpleObject = /*void*/ function(/*XML3DSimpleObject*/ object) {
        object.removeFromScene(this._scene);
    }

    return XML3DGraphics;
}));
