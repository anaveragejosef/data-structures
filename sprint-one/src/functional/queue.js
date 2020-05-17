var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var currentLastKey = someInstance.size();
    storage[currentLastKey + 1] = value;
  };

  someInstance.dequeue = function() {
    var deletedValue = storage[1];
    delete storage[1];
    for (var key in storage) {
      currentValue = storage[key];
      delete storage[key];
      storage[key - 1] = currentValue;
    }
    return deletedValue;
  };

  someInstance.size = function() {
    // create counter
    var length = 0;
    for (var key in storage) {
      length++;
    }
    return length;
  };

  return someInstance;
};
