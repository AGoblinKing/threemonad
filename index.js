var argv = require("optimist")
        .default("src", "http://threejs.org/docs/api/")
        .argv,
    phantom = require("phantom"),
    fs  = require("fs");


phantom.create(function(ph) {
    var loader = function(path) {
        var dst = argv.src + path;
        ph.createPage(function(page) {
            page.open(dst, function(status) {
                
                
            });
        });
    };
    loader("core/Object3D.html");
});
