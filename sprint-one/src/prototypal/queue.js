var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

queueMethods = {};

// create methods for the queueMethods obj
// enqueue
// declare the enqueue is part of queue methods
queueMethods.enqueue = function(value) {
  // find last key in storage obj
  var lastItem = this.size();
  // set value to this key in storage
  this.storage[lastItem + 1] = value;
};

// dequeue
// tie dequeue to queueMethods
queueMethods.dequeue = function() {
  // identify value to be removed
  var firstItem = this.storage[1];
  // delete value
  delete this.storage[1];
  // iterate through the object
  for (var key in this.storage) {
    // set current value to a variable
    var currentValue = this.storage[key];
    // delete old key
    delete this.storage[key];
    // recreate with new key
    this.storage[key - 1] = currentValue;
  }
  // return deleted value
  return firstItem;
};

// size
// declare that size is a property of queueMethods
queueMethods.size = function() {
  // create a variable to hold length
  var length = 0;
  // iterate through the storage object
  for (var key in this.storage) {
    // increase length each time
    length++;
  }
  // return the length
  return length;
};