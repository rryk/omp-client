    var xml3dGraphics = new XML3DGraphics();

    var objects = {};
    var visible = {};

    function handleCreateObject(id, xml3d, isAgentAvatar) {
        if (objects[id] != undefined)
            throw new KIARA.Error(KIARA.API_ERROR, "Object with " + id + " exists already.");

        objects[id] = xml3dGraphics.createSimpleObject(id, xml3d);
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

        objects[id].setLocation(pos, rot, scale);

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
