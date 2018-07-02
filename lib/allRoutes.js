function Graph() {
  this.vertices = {};
  this.routes = [];
  
  this.add = (name, edges) => {
    edges = edges || null;
    this.vertices[name] = edges;
  };

  this.printAllRoutesUtil = (s, d, visited, routes, limit, sameSD) => {
    visited[s] = true;
    routes.push(s);

    if (s === d && routes.length < limit + 2 && routes.length > 1) {
      this.routes.push(routes.join(''));
      this.routes = Array.from(new Set(this.routes));
    } else {
      const keys = Object.keys(this.vertices[s])

      for (let i = 0; i < keys.length; i++) {
        const pathTemp1 = routes;
        const pathTemp2 = [s, keys[i]];
               
        if (sameSD ) {
          visited[s] = false
        }
        if (visited[keys[i]] === false || pathTemp1.sort().join('') === pathTemp2.sort().join('')) {
          this.printAllRoutesUtil(keys[i], d, visited, routes, limit);
        }
      }
    }

    routes.pop()
    visited[s] = false
  }
  
  /**
  * Loops over all the vertices between source and destination to provide distinct paths with conditions applied 
  * @param {String} source(Node)
  * @param {String} destination(Node)
  * @param {int} maxStops
  */
  this.printAllRoutes = (source, destination, maxStops) => {
    let visited = {};
    let sameSD = source === destination ? true : false; //same source and destination

    Object.keys(this.vertices).map((vertex, key) => {
      visited[vertex] = false;
    })

    let routes = [];
    this.printAllRoutesUtil(source, destination, visited, routes, maxStops, sameSD);
  }
}

const allRoutes = (routesMap,route) => {
  const [source,destination,maxStops] = route.split('');
  let G = new Graph();

  Object.keys(routesMap).map((route) => {
    G.add(route, routesMap[route])
  })

  const mStops = parseInt(maxStops) === 0 ? Infinity : parseInt(maxStops);

  G.printAllRoutes(source, destination, mStops);
  return G.routes.length;
}


module.exports = allRoutes;