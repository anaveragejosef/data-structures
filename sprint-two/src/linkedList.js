var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new Node with Node function and pass in input value
    let newNode = Node(value);
    //point tail to node
    if (list.tail) {
      //create variable to remember the previous Node
      let previousNode = list.tail;
      //the previous's node's next to new node
      previousNode.next = newNode;
    } else {
    //point head to node
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    // Create temp variable that stores where .head is pointed
    var deletedHead = list.head;
    // Point head to current list.head's next node
    list.head = deletedHead.next;
    // Return temp variable value
    return deletedHead.value;
  };

  list.contains = function(target, node) {
    //set node = node, if node is not passed in, set it to list.head
    node = node || list.head;
    //if target matches node.value
    if (target === node.value) {
      //return true
      return true;
    }
    //if node.next is equal to list.tail
    if (node === list.tail) {
      //return false;
      return false;
    }
    //recursively run containst
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*n
 * Complexity: What is the time complexity of the above functions?
 * list.removeHead - O(1)
 * list.addToTail - O(1)
 * list.contains - O(n)
 */
// Specification - IOCE
// Justification - What is the purpose of this function
// Explanation - Relationship btwn input and output
// Visualization - Whiteboard/Draw a plan for solving the problem
// Approximation - Psuedocode
// Verification - Walk through psuedocode with data
// Implementation - Write code