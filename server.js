const http = require('http');
const routeController = require('./controller/routeController');

const server = http.createServer(routeController);

server.listen(3000);