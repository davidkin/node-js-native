const file = require('../utils/fileWork');

class Route {
    constructor({ cityA, cityB, distance }) {
        this.cityA = cityA;
        this.cityB = cityB;
        this.disctance = distance;
    }

    saveRoute() {
        file.getRoutesFromFile(routes => {
            this.id = Math.random().toString();
            routes.push(this);
            file.saveRoutesToFile(routes);
        });
    }

    static updateRoute() {
        console.log('Api (updateRoute):', 1);
    }

    static fecthAllRoutes() {
        file.getRoutesFromFile(Route._getAllRoutes);
        console.log('work');
    }

    static _getAllRoutes(routes) {
        return routes;
    }
}

module.exports = Route;