/**
 * Returns the cost of travelling for one point to another in the map
 * @param {String} from 
 * @param {String} to 
 * @param {Obj} routesMap 
 * @private
 */
const _costOfSingleRoute = (from, to, routesMap) =>  routesMap[from][to]; 

/**
 * Returns the total cost of the route provided in the input
 * @param {Obj} routesMap 
 * @param {String} route 
 */
const totalCostOfRoute = (routesMap, route) => {
    let totalCost = 0;

    route.split('').reduce((a, b) => {
      const cost = _costOfSingleRoute(a, b, routesMap);
      totalCost += cost;
      return b;
    })
    
    if (!totalCost) 
        totalCost = 'No Such Route';

    return totalCost;
}

module.exports = totalCostOfRoute;