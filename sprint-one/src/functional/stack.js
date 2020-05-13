var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Will add a new value to the top of the storage obj
    // Find the numeric key of the last item
    var lastIndex = someInstance.size();
    // Add the new value with a key plus one
    storage[lastIndex + 1] = value;
  };

  someInstance.pop = function() {
    // Will remove the value on the top of storage
    // Find the numeric key of the last item
    var lastIndex = someInstance.size();
    // Remove the value from the object
    var removalValue = storage[lastIndex];
    delete storage[lastIndex];
    return removalValue;
  };

  someInstance.size = function() {
    // Return the number of items in storage
    // Create a counter
    var length = 0;
    // Increase count for each item in the obj
    for (var key in storage) {
      length++;
    }
    // Return count
    return length;
  };

  return someInstance;
};
