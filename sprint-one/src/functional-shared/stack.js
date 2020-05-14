var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Create a new instance of Stack
  var newStack = {};
  // Add storage to stack
  newStack.storage = {};
  // Use extend to provide methods to the instance
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

// Add stack methods push, pop, and size to stackMethods
stackMethods.push = function (value) {
  // Find the last index in object
  var lastIndex = this.size();
  // Add the value to the index plus 1
  this.storage[lastIndex + 1] = value;
};

stackMethods.pop = function () {
  // Find the last index in the object
  var lastIndex = this.size();
  // Delete the value
  var deletedItem = this.storage[lastIndex];
  delete this.storage[lastIndex];
  // Return the deleted item
  return deletedItem;
};

stackMethods.size = function () {
  // Create a counter variable
  var length = 0;
  // Iterate through the storage object
  for (var key in this.storage) {
    // Increment the counter
    length++;
  }
  return length;
};