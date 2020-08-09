const http = require('http');
const routes = require('./routes/route');

const server = http.createServer(routes);

server.listen(3000);