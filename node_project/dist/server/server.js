var express = require('express');
var Server = (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    Server.init = function (port) {
        return new Server(port);
    };
    return Server;
})();
exports.default = Server;
//# sourceMappingURL=server.js.map