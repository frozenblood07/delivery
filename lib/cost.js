const costOfSingleRoute = (from, to, routesMap) =>  routesMap[from][to]; 

const totalCostOfRoute = (routesMap, route) => {
    let totalCost = 0;
    
    route.split('').reduce((a, b) => {
      const cost = costOfSingleRoute(a, b, routesMap);
      totalCost += cost;
      return b;
    })
    
    if (!totalCost) 
        totalCost = 'No Such Route';

    return totalCost;
}

module.exports = totalCostOfRoute;