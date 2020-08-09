const generateRouteList = (routes = []) => {    
    if (!routes) {
        return '<p>Nor routes yet</p>'
    }

    const routesList = routes.map((value, i) => {
        return `
            <h3>Route ${i + 1}</h3>
            <ul>
                <li>City A: ${value.cityA}</li>
                <li>City B: ${value.cityB}</li>
                <li>Distance: ${value.distance}</li>
            </ul>
            <hr />`;
    }).toString();

    return routesList;
}

module.exports = generateRouteList;
