    logger.activate(false);
    var xml3dGraphics = new XML3DGraphics();



    var objects = {};
    var visible = {};
    var avatarObject = null;

    function handleCreateObject(id, xml3d, isAgentAvatar) {
        if (objects[id] != undefined)
            throw new KIARA.Error(KIARA.API_ERROR, "Object with " + id + " exists already.");

        var object = xml3dGraphics.createSimpleObject(id, xml3d);
        xml3dGraphics.addSimpleObject(object);

        objects[id] = object;
        if (isAgentAvatar)
            avatarObject = object;
        visible[id] = false;
    }

    function handleDeleteObject(id) {
        if (objects[id] == undefined)
            throw new KIARA.Error(KIARA.API_ERROR, "Object with " + id + " does not exist.");

        xml3dGraphics.removeSimpleObject(objects[id]);

        delete objects[id];
        delete visible[id];
    }

    function handleLocationUpdate(id, pos, rot, scale) {
        if (objects[id] == undefined)
            throw new KIARA.Error(KIARA.API_ERROR, "Object with " + id + " does not exist.");

        var object = objects[id];
        // passed scale is of the bounding box
        object.setBBoxLocation(pos, rot, scale);

        if (avatarObject === object) {
            xml3dGraphics.setCameraLocation(pos, rot);

            // FIXME: following just setup camera offset, so that we see avatar. Should we do this only once ?
            xml3dGraphics.setCameraOffset({x: -5, y: 0, z: +2});

            //console.log("GET AVATAR POS XYZ ", pos.x, pos.y, pos.z);
            //console.log("GET AVATAR ROT XYZW ", rot.x, rot.y, rot.z, rot.w);
        }

        if (!visible[id]) {
            objects[id].setVisible(true);
            visible[id] = true;
        }
    }

    var CONTROL_AT_POS_INDEX = 0;
    var CONTROL_AT_NEG_INDEX = 1;
    var CONTROL_LEFT_POS_INDEX = 2;
    var CONTROL_LEFT_NEG_INDEX = 3;
    var CONTROL_UP_POS_INDEX = 4;
    var CONTROL_UP_NEG_INDEX = 5;
    var CONTROL_PITCH_POS_INDEX = 6;
    var CONTROL_PITCH_NEG_INDEX = 7;
    var CONTROL_YAW_POS_INDEX = 8;
    var CONTROL_YAW_NEG_INDEX = 9;
    var CONTROL_FAST_AT_INDEX = 10;
    var CONTROL_FAST_LEFT_INDEX = 11;
    var CONTROL_FAST_UP_INDEX = 12;
    var CONTROL_FLY_INDEX = 13;
    var CONTROL_STOP_INDEX = 14;
    var CONTROL_FINISH_ANIM_INDEX = 15;
    var CONTROL_STAND_UP_INDEX = 16;
    var CONTROL_SIT_ON_GROUND_INDEX = 17;
    var CONTROL_MOUSELOOK_INDEX = 18;
    var CONTROL_NUDGE_AT_POS_INDEX = 19;
    var CONTROL_NUDGE_AT_NEG_INDEX = 20;
    var CONTROL_NUDGE_LEFT_POS_INDEX = 21;
    var CONTROL_NUDGE_LEFT_NEG_INDEX = 22;
    var CONTROL_NUDGE_UP_POS_INDEX = 23;
    var CONTROL_NUDGE_UP_NEG_INDEX = 24;
    var CONTROL_TURN_LEFT_INDEX = 25;
    var CONTROL_TURN_RIGHT_INDEX = 26;
    var CONTROL_AWAY_INDEX = 27;
    var CONTROL_LBUTTON_DOWN_INDEX = 28;
    var CONTROL_LBUTTON_UP_INDEX = 29;
    var CONTROL_ML_LBUTTON_DOWN_INDEX = 30;
    var CONTROL_ML_LBUTTON_UP_INDEX = 31;
    var TOTAL_CONTROLS = 32;


    /// <summary>Empty flag</summary>
    var NONE = 0;
    /// <summary>Move Forward (SL Keybinding: W/Up Arrow)</summary>
    var AGENT_CONTROL_AT_POS = 0x1 << CONTROL_AT_POS_INDEX;
    /// <summary>Move Backward (SL Keybinding: S/Down Arrow)</summary>
    var AGENT_CONTROL_AT_NEG = 0x1 << CONTROL_AT_NEG_INDEX;
    /// <summary>Move Left (SL Keybinding: Shift-(A/Left Arrow))</summary>
    var AGENT_CONTROL_LEFT_POS = 0x1 << CONTROL_LEFT_POS_INDEX;
    /// <summary>Move Right (SL Keybinding: Shift-(D/Right Arrow))</summary>
    var AGENT_CONTROL_LEFT_NEG = 0x1 << CONTROL_LEFT_NEG_INDEX;
    /// <summary>Not Flying: Jump/Flying: Move Up (SL Keybinding: E)</summary>
    var AGENT_CONTROL_UP_POS = 0x1 << CONTROL_UP_POS_INDEX;
    /// <summary>Not Flying: Croutch/Flying: Move Down (SL Keybinding: C)</summary>
    var AGENT_CONTROL_UP_NEG = 0x1 << CONTROL_UP_NEG_INDEX;
    /// <summary>Unused</summary>
    var AGENT_CONTROL_PITCH_POS = 0x1 << CONTROL_PITCH_POS_INDEX;
    /// <summary>Unused</summary>
    var AGENT_CONTROL_PITCH_NEG = 0x1 << CONTROL_PITCH_NEG_INDEX;
    /// <summary>Unused</summary>
    var AGENT_CONTROL_YAW_POS = 0x1 << CONTROL_YAW_POS_INDEX;
    /// <summary>Unused</summary>
    var AGENT_CONTROL_YAW_NEG = 0x1 << CONTROL_YAW_NEG_INDEX;
    /// <summary>ORed with AGENT_CONTROL_AT_* if the keyboard is being used</summary>
    var AGENT_CONTROL_FAST_AT = 0x1 << CONTROL_FAST_AT_INDEX;
    /// <summary>ORed with AGENT_CONTROL_LEFT_* if the keyboard is being used</summary>
    var AGENT_CONTROL_FAST_LEFT = 0x1 << CONTROL_FAST_LEFT_INDEX;
    /// <summary>ORed with AGENT_CONTROL_UP_* if the keyboard is being used</summary>
    var AGENT_CONTROL_FAST_UP = 0x1 << CONTROL_FAST_UP_INDEX;
    /// <summary>Fly</summary>
    var AGENT_CONTROL_FLY = 0x1 << CONTROL_FLY_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_STOP = 0x1 << CONTROL_STOP_INDEX;
    /// <summary>Finish our current animation</summary>
    var AGENT_CONTROL_FINISH_ANIM = 0x1 << CONTROL_FINISH_ANIM_INDEX;
    /// <summary>Stand up from the ground or a prim seat</summary>
    var AGENT_CONTROL_STAND_UP = 0x1 << CONTROL_STAND_UP_INDEX;
    /// <summary>Sit on the ground at our current location</summary>
    var AGENT_CONTROL_SIT_ON_GROUND = 0x1 << CONTROL_SIT_ON_GROUND_INDEX;
    /// <summary>Whether mouselook is currently enabled</summary>
    var AGENT_CONTROL_MOUSELOOK = 0x1 << CONTROL_MOUSELOOK_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_AT_POS = 0x1 << CONTROL_NUDGE_AT_POS_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_AT_NEG = 0x1 << CONTROL_NUDGE_AT_NEG_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_LEFT_POS = 0x1 << CONTROL_NUDGE_LEFT_POS_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_LEFT_NEG = 0x1 << CONTROL_NUDGE_LEFT_NEG_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_UP_POS = 0x1 << CONTROL_NUDGE_UP_POS_INDEX;
    /// <summary>Legacy, used if a key was pressed for less than a certain amount of time</summary>
    var AGENT_CONTROL_NUDGE_UP_NEG = 0x1 << CONTROL_NUDGE_UP_NEG_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_TURN_LEFT = 0x1 << CONTROL_TURN_LEFT_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_TURN_RIGHT = 0x1 << CONTROL_TURN_RIGHT_INDEX;
    /// <summary>Set when the avatar is idled or set to away. Note that the away animation is
    /// activated separately from setting this flag</summary>
    var AGENT_CONTROL_AWAY = 0x1 << CONTROL_AWAY_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_LBUTTON_DOWN = 0x1 << CONTROL_LBUTTON_DOWN_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_LBUTTON_UP = 0x1 << CONTROL_LBUTTON_UP_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_ML_LBUTTON_DOWN = 0x1 << CONTROL_ML_LBUTTON_DOWN_INDEX;
    /// <summary></summary>
    var AGENT_CONTROL_ML_LBUTTON_UP = 0x1 << CONTROL_ML_LBUTTON_UP_INDEX;

    function handleCameraMovement(client, position, rotation) {
        client.setViewerState(position, rotation,
            {x: 0, y:1, z:0}, // camera up
            {x: 0, y:-1, z:0}, // camera left
            {x: 0, y: 0, z:1}, // camera at
            AGENT_CONTROL_AT_POS // controls
        );
        console.log("VIEWER POS XYZ ", position.x, position.y, position.z);
        console.log("VIEWER ROT XYZW ", rotation.x, rotation.y, rotation.z, rotation.w);
    }


    var registeredCameraController = null;

    function animate() {
        if (registeredCameraController) {
            window.requestAnimFrame(animate, undefined);
            registeredCameraController.update();
        }
    }

    function CameraController(xml3dElementId, client) {
        this.currentlyPressedKeys = {};
        this.xml3dElement = document.getElementById(xml3dElementId);
        this.client = client;
        /**
         * Old mouse position
         * @private
         * @type {{x: number, y: number}}
         */
        this.oldMousePosition = {x:0,y:0};
        /**
         * flag: mouse button currently down
         * @private
         * @type {boolean}
         */
        this.mouseButtonIsDown = false;

        /**
         * factor to slow or speed movement
         * @private
         * @type {number}
         */
        this.slowthis = 1;
        /**
         * Sensivity for movement of gamepad
         * @private
         * @type {number}
         */
        this.moveSensivityPad = 0.04 * this.slowthis;
        /**
         * Sensivity for rotation of gamepad
         * @private
         * @type {number}
         */
        this.rotationSensivityPad = 0.01 * this.slowthis;
        /**
         * Sensivity for movement of keyboard
         * @private
         * @type {number}
         */
        this.moveSensivityKeyboard = 0.75 * this.slowthis;
        /**
         * Sensivity for rotation of mouse and keyboard
         * @private
         * @type {number}
         */
        this.rotationSensivityMouse = 0.005 * this.slowthis;
        if (!registeredCameraController) {
            registeredCameraController = this;
            animate();
        }

        this.ompControls = 0;
    }
    var cc = CameraController.prototype;

    /**
     * Update movement
     * @public
     */
    cc.update = function() {
        this.updateKeyMovement();
    };

    cc.updateKeyMovement = function(){
        for (var kc in this.currentlyPressedKeys) {
            this.moveWithKey(kc+0); //+0 -> to make its a number now
        }
    };

    // ---------- event handler ----------

    /**
     * Init Events
     */
    cc.activate = function() {
        this.toggleHandlers(true);
    };

    /**
     * Deregister from all events
     */
    cc.deactivate = function(){
        this.toggleHandlers(false);
    };

    /**
     * (de-)registers event handlers for the controller.
     * @private
     */
    cc.toggleHandlers = function(switchOn) {
        var cb = XMOT.util.wrapCallback;

        // select the callbacks
        var winListener = window.addEventListener;
        var xml3dListener = this.xml3dElement.addEventListener;

        if (switchOn === false) {
            winListener = window.removeEventListener;
            xml3dListener = this.xml3dElement.removeEventListener;
        }

        //registered on window, since registring on div did not work, events never triggered
        winListener.call(window, "keydown", cb(this, this.keyDownEventHandler), false);
        winListener.call(window, "keyup", cb(this, this.keyUpEventHandler), false);
        winListener.call(window, "mousemove", cb(this, this.mouseMovementHandler), false);
        winListener.call(window, "mouseup", cb(this, this.mouseUpHandler), false);
        xml3dListener.call(this.xml3dElement, "mousedown", cb(this, this.mouseDownHandler), false);
    };

    /**
     * Handles key events
     * @private
     * @param {Event} e event
     */
    cc.keyDownEventHandler = function(e) {
        e = window.event || e;
        var kc = e.keyCode;
        if (! this.currentlyPressedKeys[kc]) {
            var flag = this.keyPressed(kc);
            if (flag) {
                this.currentlyPressedKeys[kc] = true;
            }
            if (flag)
                this.stopDefaultEventAction(e);
        }
    };

    /**
     * Removes key from the list of currently pressed keys
     * @param {Event} e
     */
    cc.keyUpEventHandler = function(e) {
        e = window.event || e;
        var kc = e.keyCode;
        if (this.currentlyPressedKeys[kc]) {
            this.keyReleased(kc);
            delete this.currentlyPressedKeys[kc];
        }
    };

    cc.moveWithKey = function(kc) {
        switch (kc) {
            case XMOT.KEY_A :
                xml3dGraphics.rotateCameraLeftAndRight(10 * Math.PI/180);
                break;
            case XMOT.KEY_D :
                console.log("press D");
                xml3dGraphics.rotateCameraLeftAndRight(-10 * Math.PI/180);
                break;
        }

        console.log("SEND PRESS "+this.ompControls);
        this.client.setViewerState(
            xml3dGraphics.getCameraPosition(),
            xml3dGraphics.getCameraRotation(),
            {x: 0, y: 1, z:0}, // camera up
            {x: 0, y:-1, z:0}, // camera left
            {x: 0, y: 0, z:1}, // camera at
            this.ompControls // controls
        );
    }

    cc.keyPressed = function(kc) {
        var changed = true;
        switch (kc) {
            case XMOT.KEY_W :
                console.log("press W");
                this.ompControls |= AGENT_CONTROL_AT_POS;
                break;
            case XMOT.KEY_S :
                console.log("press S");
                this.ompControls |= AGENT_CONTROL_AT_NEG;
                break;
            case XMOT.KEY_A :
                console.log("press A");
                xml3dGraphics.rotateCameraLeftAndRight(10 * Math.PI/180);
                this.ompControls |= AGENT_CONTROL_YAW_POS;
                break;
            case XMOT.KEY_D :
                console.log("press D");
                xml3dGraphics.rotateCameraLeftAndRight(-10 * Math.PI/180);
                this.ompControls |= AGENT_CONTROL_YAW_NEG;
                break;
            default:
                changed = false;
        }

        if (changed) {
            console.log("SEND PRESS "+this.ompControls);
            this.client.setViewerState(
                xml3dGraphics.getCameraPosition(),
                xml3dGraphics.getCameraRotation(),
                {x: 0, y:1, z:0}, // camera up
                {x: 0, y:-1, z:0}, // camera left
                {x: 0, y: 0, z:1}, // camera at
                this.ompControls, // controls
                {reliable: true}
            );
        }
        return changed;
    }

    cc.keyReleased = function(kc) {
        var changed = true;
        switch (kc) {
            case XMOT.KEY_W :
                console.log("release W");
                this.ompControls &= ~AGENT_CONTROL_AT_POS;
                break;
            case XMOT.KEY_A :
                console.log("release A");
                this.ompControls &= ~AGENT_CONTROL_YAW_POS;
                break;
            case XMOT.KEY_S :
                console.log("release S");
                this.ompControls &= ~AGENT_CONTROL_AT_NEG;
                break;
            case XMOT.KEY_D :
                console.log("release D");
                this.ompControls &= ~AGENT_CONTROL_YAW_NEG;
                break;
            default:
                changed = false;
        }

        if (changed) {
            console.log("SEND RELEASE "+this.ompControls);
            this.client.setViewerState(
                xml3dGraphics.getCameraPosition(),
                xml3dGraphics.getCameraRotation(),
                {x: 0, y:1, z:0}, // camera up
                {x: 0, y:-1, z:0}, // camera left
                {x: 0, y: 0, z:1}, // camera at
                this.ompControls, // controls
                {reliable: true}
            );
        }
        return true;
    }

    /**
     * Handles mousemovement events
     * @private
     * @param {Event} e event
     */
    cc.mouseMovementHandler = function(e) {
        if (!this.mouseButtonIsDown)
            return;
        var currentX = e.pageX;
        var currentY = e.pageY;
        var x = currentX - this.oldMousePosition.x;
        var y = currentY - this.oldMousePosition.y;
        this.oldMousePosition.x = currentX;
        this.oldMousePosition.y = currentY;
//        if (x != 0)
//            this.rotateLeftAndRight(-this.rotationSensivityMouse*x);
//        if (y != 0)
//            this.rotateUpAndDown(-this.rotationSensivityMouse*y);
    };

    /**
     * Handles mousebutton up event
     * @private
     * @param {Event} e event
     */
    cc.mouseUpHandler = function(e){
        if(e.button == this.mouseButton){
            this.stopDefaultEventAction(e);
            this.mouseButtonIsDown = false;
        }
    };

    /**
     * Handles mousebutton down events
     * @private
     * @param {Event} e event
     */
    cc.mouseDownHandler = function(e){
        if (e.button == this.mouseButton) {
            this.stopDefaultEventAction(e);
            this.mouseButtonIsDown = true;
            this.oldMousePosition.x = e.pageX;
            this.oldMousePosition.y = e.pageY;
        }
    };

    /**
     * Stops HTML Default action of events
     * Note: in some Browsers the context menu still apears, but there is a workaround:
     * <body ... oncontextmenu="return false;">
     * @param {Object} e event
     */
    cc.stopDefaultEventAction = function(e){
        if (e && e.preventDefault) {
            e.preventDefault();
        } else if (window.event && window.event.returnValue){
            window.eventReturnValue = false;
        }
    };

    var moveCtl = null;

    $("#loginBtn").click(function() {
        var client = new OMP.OpenSIMViewerClient(handleCreateObject, handleDeleteObject, handleLocationUpdate);
        client.login($("#firstname").val(), $("#lastname").val(), $("#pass").val(), function() {
            client.connect(function() {
                $("#loginForm").hide();
                $("#viewerInterface").show();
                xml3dGraphics.initScene($("#viewerInterface")[0]);
                //xml3dGraphics.setCameraListener(handleCameraMovement.bind(window, client));
                moveCtl = new CameraController(xml3dGraphics.getXml3dId(), client);
                moveCtl.activate();
            });
        });
    });
    $("#loginBtn").removeAttr("disabled");
