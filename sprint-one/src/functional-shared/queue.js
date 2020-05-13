var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

// Create an object that holds the methods that will be shared by all instances of the class
var queueMethods = {};
// Use the keyword this in your methods
// Will contain enqueue
queueMethods.enqueue = function(value) {
  // set the last current key to the length
  var lastKey = this.size();
  this.storage[lastKey + 1] = value;
};
// Will contain dequeue
queueMethods.dequeue = function() {
  // remove the first item in storage
  var deletedValue = this.storage[1];
  delete this.storage[1];
  // update keys by iterating through object
  for (var key in this.storage) {
    // set current value
    var currentValue = this.storage[key];
    // delete current value
    delete this.storage[key];
    // set as new key minus 1
    this.storage[key - 1] = currentValue;
  }
  // return deleted value
  return deletedValue;
};
// Will contain size
queueMethods.size = function() {
  // set length counter
  var length = 0;
  // iterate through storage container
  for (var key in this.storage) {
    // increase length
    length++;
  }
  // return total size
  return length;
};


