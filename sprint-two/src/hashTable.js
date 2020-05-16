var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  // Check index's length to see if other arrays are here
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      // If keys match, overwrite
      if (bucket[i][0] === k) {
        //might have to be this._storage[index].set(i, v) because set only takes numbers, not arrays
        //.set stores it like this -> storage[i] = value, for us storge
        bucket[i][1] = v;
        return;
      }
      // If they do not match
      if (i === bucket.length - 1) {
        // We have to push another record into the index
        bucket.push(tuple);
      }
    }
  } else {
    var bucket = [tuple];
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(n)
 * retreive - O(n)
 * remove - O(n)
 */