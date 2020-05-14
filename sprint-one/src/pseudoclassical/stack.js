var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create the storage object for each instance
  this.storage = {};
};

// Create methods for this object and connect them to the prototype

Stack.prototype.push = function(value) {
  var lastIndex = this.size();
  this.storage[lastIndex + 1] = value;
};

Stack.prototype.pop = function() {
  var lastIndex = this.size();
  var deletedIndex = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return deletedIndex;
};

Stack.prototype.size = function() {
  var length = 0;
  for (var key in this.storage) {
    length++;
  }
  return length;
};