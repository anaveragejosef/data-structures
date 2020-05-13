var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Initialize an object to act as a storage container
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var lastKey = this.size();
  this.storage[lastKey + 1] = value;
};

Queue.prototype.dequeue = function() {
  var deleted = this.storage[1];
  delete this.storage[1];
  for (var key in this.storage) {
    var currentVal = this.storage[key];
    delete this.storage[key];
    this.storage[key - 1] = currentVal;
  }

  return deleted;
};

Queue.prototype.size = function() {
  var length = 0;
  for (var key in this.storage) {
    length++;
  }
  return length;
};