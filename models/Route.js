const file = require('../utils/fileWork');

class Route {
    constructor({ id, cityA, cityB, distance }) {
        this.id = id;
        this.cityA = cityA;
        this.cityB = cityB;
        this.distance = distance;
    }

    saveRoute() {
        file.getRoutesFromFile(routes => {
            if (this.id) {
                const existingRouteIndex = routes.findIndex(route => this.id === route.id);                
                const updatedRoutes = [...routes];
    
                updatedRoutes[existingRouteIndex] = this;
                file.saveRoutesToFile(updatedRoutes);
            } else {
                this.id = Math.random().toString();
                routes.push(this);
                file.saveRoutesToFile(routes);
            }
        });
    }

    static fecthAllRoutes() {
        const routes = file.getRoutesFromFileSync();
        return JSON.parse(routes);
    }
}

module.exports = Route;
