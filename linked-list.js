/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("Can't pop from empty list");
    }
    let val = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      this.tail = curr;
      this.tail.next = null;
      this.length -= 1;
    }
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("Can't shift from empty list");
    }
    let val = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length -= 1;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length) {
      throw new Error("Invalid index");
    }
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) {
      throw new Error("Invalid index");
    }
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error("Invalid index");
    }
    const newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) {
      throw new Error("Invalid index");
    }
    let val;
    if (idx === 0) {
      val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
    } else if (idx === this.length - 1) {
      val = this.tail.val;
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      this.tail = curr;
      this.tail.next = null;
      this.length -= 1;
    } else {
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }
      val = curr.next.val;
      curr.next = curr.next.next;
      this.length -= 1;
    }
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let total = 0;
    let curr = this.head;
    while (curr !== null) {
      total += curr.val;
      curr = curr.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
