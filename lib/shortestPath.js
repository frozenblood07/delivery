/**
 * Just a utility method to update the vertexMap for a specific vertex 
 * @param {Array of Obj} vertexMap 
 * @param {int} index 
 * @param {int} distance 
 * @param {String} previous
 * @private
 */
const _updateVertex = (vertexMap, index, distance, previous) => {
    return Object.assign({}, vertexMap[index], { distance, previous })
}

function Graph () {
    this.vertices = {};

    this.add = (name, edges) => {
        edges = edges || null;
        this.vertices[name] = edges;
    };

    this.length = (u, v) => (this.vertices[u][v]);

    this.shortestPath = (source) => {
        // create vertex set
        let vertexMap = [];
        let visited = [];
        let unvisited = [];
        let vertex = source;
        let visiting = this.vertices[vertex];

        /**
         * for each vertex v in Graph:             // Initialization
         * create a array of objects containing the vertex,distance,previous node
         */
        Object.keys(this.vertices).map((vertex) => {
            unvisited.push(vertex);
            const vertexData = {
              vertex: vertex,
              distance: Infinity,
              previous: null
            }
            vertexMap.push(vertexData);
        })
      
        let distance = 0;
        let previous = null;
        /**
         * Loop for the unvisited vertices and update the distance as well as previous node for the vertices
         */
        while (unvisited.length) {
          const vertexIndex = vertexMap.findIndex(a => a.vertex === vertex);  

          if (vertex === source) {
            vertexMap[vertexIndex] = _updateVertex(vertexMap, vertexIndex, distance, previous);
          }
      
          Object.keys(visiting).map((to) => {
            distance = visiting[to] + vertexMap[vertexIndex].distance;
            previous = vertex;
            const nextVertexIndex = vertexMap.findIndex(a => a.vertex === to);
      
            if (distance < vertexMap[nextVertexIndex].distance) {
              vertexMap[nextVertexIndex] = _updateVertex(vertexMap, nextVertexIndex, distance, previous);
            }
          })
          
    
          /**
           * update unvisited and visited arrays
           * If current vertex is found in unvisited get the next vertex from its connected vertices
           * else get vertex from unvisited array based on distance 
           */
          const index = unvisited.indexOf(vertex);
          if (index > -1) {
            unvisited.splice(index, 1);
            visited.push(vertex);
            vertex = Object.keys(visiting).reduce((a, b) => visiting[a] < visiting[b] ? a : b);
            visiting = this.vertices[vertex];
          } else {
            let arr = [];
            unvisited.map((vertex) => {
              const index = vertexMap.findIndex(a => a.vertex === vertex);
              if (vertexMap[index].previous) {
                arr.push(vertexMap[index]);
              }
            })
          
            vertex = arr.reduce((a, b) => a.distance < b.distance ? a : b).vertex;
            visiting = this.vertices[vertex];
          }
        }
      
        return vertexMap
      }
};


let G = new Graph();

const shortestPath = (routesMap,route) => {
    const [source, destination] = route.split('');

    Object.keys(routesMap).map((route) => {
        G.add(route, routesMap[route])
    })

    const vertexMap = G.shortestPath(source);
    for (vertex in vertexMap) {
        if (vertexMap[vertex].vertex === destination) {
            return vertexMap[vertex].distance
        }
    }
};

module.exports = shortestPath;