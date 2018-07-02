function Graph() {
    this.vertices = {};
    this.routes = [];
    
    this.add = (name, edges) => {
      edges = edges || null;
      this.vertices[name] = edges;
    };

    this.length = (u, v) => (this.vertices[u][v]);
}

module.exports = Graph;