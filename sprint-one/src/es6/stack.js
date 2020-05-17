class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var lastIndex = this.size();
    this.storage[lastIndex + 1] = value;
  }

  pop() {
    var lastIndex = this.size();
    var deletedItem = this.storage[lastIndex];
    delete this.storage[lastIndex];
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