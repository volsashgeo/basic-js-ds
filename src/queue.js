const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.arr = [],
    this.obj = {
      value: null,
      next: {},
    }
  }

  getUnderlyingList() {
    for(let i = 0; i < this.arr.length; i++) {
      if (this.arr.length === 0) this.obj = {};
      if (this.arr.length === 1) {
        this.obj.value = this.arr[0];
        this.obj.next = null;
      }
      if (this.arr.length > 1) {
        this.obj.value = this.arr[0];
        this.arr.splice(0, 1);
        this.obj.next = this.arr;
        // return getUnderlyingList();
      }

    }
    return this.obj
  }

  enqueue(value) {
  this.arr.push(value);
  }

  dequeue() {
  return this.arr.shift()
  }
}


module.exports = {
  Queue
};
