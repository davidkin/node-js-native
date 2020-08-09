const Route = require('../models/Route');
const generateRouteForm = require('../view/generateRouteForm');
const generateRouteList = require('../view/generateRouteList');
const file = require('../utils/fileWork');

const fs = require('fs');
const path = require('path');

const fullPath = path.join(
  path.dirname(process.mainModule.filename), 
  'data',
  'routes.json'
);

const mainRoute = (req, res) => {

    const url = req.url;
    const method = req.method;
    let routes = [];

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Page</title></head>');
        res.write('<body>');
        res.write('<h1>Add new route:</h1>');
        
        res.write(generateRouteForm('/route', 'POST'));

        // res.write('<p>Get all routes: </p>');
        // res.write(generateRouteForm('/routes', 'GET'));

        res.write('</body>')
        res.write('</html>');

        return res.end();
    }

    if (url === '/routes' && method === 'GET') {
        return req.on('end', () => {
        
            console.log('work');

            res.statusCode = 302;
            res.setHeader('Location', '/');
    
            return res.end();
        })
    }

    if (url === '/route' && method === 'POST') {
        const data = [];

        req.on('data', chunk => {
            data.push(chunk);
        });

        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const body = parsedData.split('&').reduce((acc, value) => {
                value = value.split('=');
                acc[value[0]] = value[1];
                
                return acc;
            }, {});

            const route = new Route(body);
            route.saveRoute(route);

            res.statusCode = 302;
            res.setHeader('Location', '/');
    
            return res.end();
        })
    }

    res.setHeader('Content-Type', 'text/html');

    res.end();
}

module.exports = mainRoute;