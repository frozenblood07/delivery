const fs = require('fs');
const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
const routes = data.split(',');
const routesMap = {};
routes.forEach((route) => {
    route = route.replace(/^\s+|\s+$/g, ''); //sanitize the input
    const routeBreakUp = /^(\w)(\w)(\d+)$/g.exec(route);
    if(routeBreakUp) {
        if(!routesMap.hasOwnProperty(routeBreakUp[1]))
            routesMap[routeBreakUp[1]] = {};

        routesMap[routeBreakUp[1]][routeBreakUp[2]] = routeBreakUp[3]; //intented input routes map
    }else 
        console.error(`Invalid route input ${route}`);
})

module.exports = routesMap;
