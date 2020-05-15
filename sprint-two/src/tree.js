var Tree = function(value) {
  var newTree = {};
  //code seems confusing
  newTree.value = value;

  newTree.children = [];

  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target, node) {
  // Create doesContain variable
  let doesContain = false;
  // Set node value
  node = node || this;
  // Iterate through node's children
  for (let i = 0; i < node.children.length; i++) {
    // Check if child is equal to target
    // If the child has children
    if (node.children[i].value === target) {
      let isFound = true;
      // returns value back to the previous recursive call -> doesContain = isFound's value
      return isFound;
    }
    if (node.children[i].children.length > 0) {
      // Recursively call contains
      doesContain = treeMethods.contains(target, node.children[i]);
      // Escape loop if the target is found in a recursive call
      if (doesContain) {
        return true;
      }
    }
  }
  // Return boolean doesContains
  return doesContain;
};

tree = Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7) === (true));
console.log(tree.contains(8) === (true));
console.log(tree.contains(10) === (false));

/*
 * Complexity: What is the time complexity of the above functions?
 * treeMethods.addChild - constant
 * treeMethods.contains - linear
 */