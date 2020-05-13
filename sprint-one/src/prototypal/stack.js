var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use obj create to create a new instance
  var newStack = Object.create(stackMethods);
  // Add storage object
  newStack.storage = {};
  // Return the new instance
  return newStack;
};

var stackMethods = {};

// Create methods and add them into stackMethods

stackMethods.push = function(value) {
  var lastIndex = this.size();
  this.storage[lastIndex + 1] = value;
};

stackMethods.pop = function() {
  var lastIndex = this.size();
  var removedItem = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return removedItem;
};

stackMethods.size = function() {
  var length = 0;
  for (var key in this.storage) {
    length++;
  }
  return length;
};


