// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {node: 'edge'};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate through object
  for (let key in this.graph) {
    //compare key to node value
    if (key === node.toString()) {
      //if found, return true
      return true;
    }
  }
  //return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete (this.graph[node]);
  // iterate through current nodes
  for (let key in this.graph) {
    // Check if each node's edge object has the node
    delete this.graph[key][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Check if graph contains the key fromNode
  if (this.graph[fromNode][toNode]) {
    // return true
    return true;
  }
  // return false if not found
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check if fromNode and toNode exists in graph
  if (this.graph[fromNode] && this.graph[toNode]) {
    // Push toNode into fromNode array
    this.graph[fromNode][toNode] = 'edge';
    // Push fromNode into toNode array
    this.graph[toNode][fromNode] = 'edge';
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode][toNode];
  delete this.graph[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.graph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - Constant O(1)
 contains - Linear O(n)
 removeNode - Linear O(n)
 addEdge - Constant O(1)
 removeEdge - Constant O(1)
 hasEdge - Constant O(1)
 forEachNode - Linear O(n)
 overall - constant O(1)
 */