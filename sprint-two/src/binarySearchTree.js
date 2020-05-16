var BinarySearchTree = function(value) {
  // Object.create()
  var newTree = Object.create(binaryMethods);
  // Create our properties
  // left, right, value
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;
  // Return the object
  return newTree;
};

// Create binaryMethods = {}
var binaryMethods = {};

// Create properties tied to binaryMethods
binaryMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  //if (value > this.value)
  if (value > this.value) {
    var direction = 'right';
  } else {
    var direction = 'left';
  }
  //if (direction) exists
  if (this[direction]) {
    //call the function again on direction.insert(value)
    this[direction].insert(value);
  } else {
    //else put this value in direction
    this[direction] = newNode;
  }
};

binaryMethods.contains = function(value) {
  // Returns boolean

};

binaryMethods.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */