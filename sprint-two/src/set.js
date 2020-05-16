var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //add item to storage
  this._storage[item] = 'set';
};

setPrototype.contains = function(item) {
  // Check if item exists in storage
  if (this._storage[item]) {
    // Return true
    return true;
  }
  // Else, does not exist
  return false;
};

setPrototype.remove = function(item) {
  //delete the obj at key item
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add - Linear
 contains - Linear
 remove - Linear
 */