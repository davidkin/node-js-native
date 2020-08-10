const routeAddForm = require('./routeAddForm');
const routeGetAll = require('./routeGetAllForm');

const routeHomePage = (res) => {    
    res.write('<html>');
    res.write('<head><title>Enter Page</title></head>');
    res.write('<body>');

    res.write('<h1>Add new route:</h1>');
    res.write(routeAddForm('/route', 'POST'));

    res.write('<p>Get All Routes:</p>');
    res.write(routeGetAll('/routes', 'GET'));

    res.write('</body>')
    res.write('</html>');

    res.end();
}

module.exports = routeHomePage;
