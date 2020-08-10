const file = require('../utils/fileWork');
const fs = require('fs');
const path = require('path');

const fullPath = path.join(
  path.dirname(process.mainModule.filename), 
  'data',
  'routes.json'
);

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
        const routes = file.getRoutesFromFile();
        return JSON.parse(routes);
    }
}

module.exports = Route;