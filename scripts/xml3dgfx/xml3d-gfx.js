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
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.XML3DGraphics = factory());
        });
    } else {
        // Browser globals
        root.XML3DGraphics = factory();
    }
} (this, function () {
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
    XML3DObject = function() {
        this.id = this.nextID++;
    }
    XML3DObject.nextID = 0;

    // Returns an object ID.
    XML3DObject.prototype.id = function() {
        return this.id;
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
    XML3DGraphics = function() {}

    // Initializes XML3D scene in the |container|.
    XML3DGraphics.prototype.initScene = /*void*/ function(/*Element*/ container) {
        // TODO
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createMeshObject = /*XML3DMeshObject*/ function(/*Int32Array*/ index, /*Float32Array*/ pos) {
        return new XML3DMeshObject(index, pos);
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createMatteShader = /*XML3DMatteShader*/ function() {
        return new XML3DMatteShader();
    }

    // Constructs a new MeshObject constructed from |index| and |pos| arrays.
    XML3DGraphics.prototype.createPhongShader = /*XML3DPhongShader*/ function() {
        return new XML3DPhongShader();
    }

    // Adds an object to the scene.
    XML3DGraphics.prototype.addMeshObject = /*void*/ function(/*XML3DMeshObject*/ object) {
        // TODO
    }

    return XML3DGraphics;
}));