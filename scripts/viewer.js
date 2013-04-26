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
        'xml3d': {
            exports: "XML3D"
        }
    },
    waitSeconds: 60 // wait 1 minute for scripts (maybe slow on mobile network)
});

requirejs(['omp/omp', 'jquery', 'omp/xml3d-gfx'],
function(OMP, $, XML3DGraphics) {
    var xml3dGraphics = new XML3DGraphics();

    var objects = {};
    var visible = {};

    function handleCreateObject(id, xml3d, isAgentAvatar) {
        if (objects[uuid] != undefined)
            throw KIARA.Error(KIARA.API_ERROR, "Object with " + uuid + " exists already.");

        objects[uuid] = xml3dGraphics.createSimpleObject(uuid, xml3d);
        visible[uuid] = false;
    }

    function handleDeleteObject(id) {
        if (objects[uuid] == undefined)
            throw KIARA.Error(KIARA.API_ERROR, "Object with " + uuid + " does not exist.");

        xml3dGraphics.removeSimpleObject(objects[uuid]);

        delete objects[uuid];
        delete visible[uuid];
    }

    function handleLocationUpdate(id, pos, rot, scale) {
        if (objects[uuid] == undefined)
            throw KIARA.Error(KIARA.API_ERROR, "Object with " + uuid + " does not exist.");

        objects[uuid].setLocation(pos, rot, scale);

        if (!visible[uuid]) {
            xml3dGraphics.addSimpleObject(objects[uuid]);
            visible[uuid] = true;
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
});
