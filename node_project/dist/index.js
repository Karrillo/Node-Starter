var server_1 = require('./server/server');
var router_1 = require('./router/router');
var server = server_1.default.init(3000);
server.app.use(router_1.default);
server.start(function () {
    console.log("Server Started on port 3000");
});
//# sourceMappingURL=index.js.map