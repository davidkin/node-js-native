const Route = require('../models/Route');
const { parse } = require('querystring');
const views = require('../views');

const routeController = (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(url);

    if (url === '/favicon.ico') {
        return res.end();
    }

    if (url === '/') {
        views.homePage(res);

        return res.end();
    }

    if (url === '/routes?' && method === 'GET') {
        const routes = Route.fecthAllRoutes();
        views.listPage(routes, res);

        return res.end();
    }

    if (url === '/route' && method === 'POST' || method === "PUT") {
        const data = [];

        req.on('data', chunk => {
            data.push(chunk);
        });

        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const body = parse(parsedData);
            const route = new Route(body);
            route.saveRoute();

            res.statusCode = 302;
            res.setHeader('Location', '/');

            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Type', 'image/x-icon');
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end();
}

module.exports = routeController;
