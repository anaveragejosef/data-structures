class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // create the storage object within the contstructor
    this.storage = {};
  }

  // create all methods within the Queue class directly
  enqueue(value) {
    var lastKey = this.size();
    this.storage[lastKey + 1] = value;
  }

  dequeue() {
    var deletedItem = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      var currentValue = this.storage[key];
      delete this.storage[key];
      this.storage[key - 1] = currentValue;
    }
    return deletedItem;
  }

  size() {
    var length = 0;
    for (var key in this.storage) {
      length++;
    }
    return length;
  }

}
