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
        }
    }
});

requirejs(['omp/omp'],
function(OMP) {
    var client = new OMP.Client();
    client.login('Test', 'User', '123', function() {
        client.connect();
    })
});
