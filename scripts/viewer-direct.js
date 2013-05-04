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
            //console.log(pos);
            //console.log(rot);
            //xml3dGraphics.setCameraLocation(pos, rot); // FIXME: do this only once ?
        }

        if (!visible[id]) {
            objects[id].setVisible(true);
            visible[id] = true;
        }
    }

    function handleCameraMovement(client, position, rotation) {
        client.setViewerState(position, rotation,
            {x: 0, y:1, z:0}, // camera up
            {x: 0, y:-1, z:0}, // camera left
            {x: 0, y: 0, z:1}, // camera at
            null
        );
        console.log("VIEWER POS XYZ ", position.x, position.y, position.z);
        console.log("VIEWER ROT XYZW ", rotation.x, rotation.y, rotation.z, rotation.w);
    }

    $("#loginBtn").click(function() {
        var client = new OMP.OpenSIMViewerClient(handleCreateObject, handleDeleteObject, handleLocationUpdate);
        client.login($("#firstname").val(), $("#lastname").val(), $("#pass").val(), function() {
            client.connect(function() {
                $("#loginForm").hide();
                $("#viewerInterface").show();
                xml3dGraphics.initScene($("#viewerInterface")[0]);
                xml3dGraphics.setCameraListener(handleCameraMovement.bind(window, client));
            });
        });
    });
    $("#loginBtn").removeAttr("disabled");
