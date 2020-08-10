const saveForm = require('./saveForm');

const routeListPage = (routes, res) => {    
    const routesList = routes.map((value, i) => {
        return `
            <h3>Route ${i + 1}</h3>
            <ul>
                <li>City A: ${value.cityA}</li>
                <li>City B: ${value.cityB}</li>
                <li>Distance: ${value.distance}</li>

            </ul>
            <span>Edit:</span>
            ${saveForm('route', 'PUT', value)}
            <hr />`;
        }).toString().replace(/,/g, ' ');

    res.write('<html>');
    res.write('<head><title>All Routes</title></head>');
    res.write('<body>');
    res.write('<a href="/"><- Back</a>');
    res.write('<h2>All Routes:</h2>');
    res.write(routesList);
    res.write('</body>');
    res.write('</html>');

    res.end();
}

module.exports = routeListPage;
