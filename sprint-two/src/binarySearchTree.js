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
    var newNode = BinarySearchTree(value);
    //else put this value in direction
    this[direction] = newNode;
  }
};

binaryMethods.contains = function(value) {
  // Check if current tree contains value
  if (this.value === value) {
    return true;
  }
  if (this.left && this.left.contains(value)) {
    return true;
  }
  if (this.right && this.right.contains(value)) {
    return true;
  }
  // Returns boolean
  return false;
};

binaryMethods.depthFirstLog = function(cb) {
  //put current node value as input in cb function
  var result = cb(this.value);
  //iterate through left
  if (this.left) {
    //recursive call
    this.left.depthFirstLog(cb);
  }
  //iterate through right
  if (this.right) {
    //recursive call
    this.right.depthFirstLog(cb);
  }
  //return result;
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * All linear - O(n);
 */