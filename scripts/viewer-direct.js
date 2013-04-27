    logger.activate(false);
    var xml3dGraphics = new XML3DGraphics();



    var objects = {};
    var visible = {};
    var avatarObject = null;

    function handleCameraMovement(position, rotation) {
        console.log(position);
        console.log(rotation);
    }
    xml3dGraphics.setCameraListener(handleCameraMovement);

    function handleCreateObject(id, xml3d, isAgentAvatar) {
        if (objects[id] != undefined)
            throw new KIARA.Error(KIARA.API_ERROR, "Object with " + id + " exists already.");

        var object = xml3dGraphics.createSimpleObject(id, xml3d);
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
        object.setLocation(pos, rot, scale);

        if (avatarObject === object) {
            console.log(pos);
            console.log(rot);
            //xml3dGraphics.setCameraLocation(pos, rot); // FIXME: do this only once ?
        }

        if (!visible[id]) {
            xml3dGraphics.addSimpleObject(objects[id]);
            visible[id] = true;
        }
    }

    $("#loginBtn").click(function() {
        var client = new OMP.ViewerClient(handleCreateObject, handleDeleteObject, handleLocationUpdate);
        client.login($("#firstname").val(), $("#lastname").val(), $("#pass").val(), function() {
            client.connect(function() {
                $("#loginForm").hide();
                $("#viewerInterface").show();
                xml3dGraphics.initScene($("#viewerInterface")[0]);
            });
        });
    });
    $("#loginBtn").removeAttr("disabled");
