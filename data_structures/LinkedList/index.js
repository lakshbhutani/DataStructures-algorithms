class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode;
    }

    size() {
        let count = 1;
        let ptr = this.head;
        if(!ptr) {
            return 0
        }
        while(ptr.next) {
            ptr = ptr.next;
            count++
        }
        return count
    }
    getFirst() {
        return this.head
    }
    getLast() {
        if(!this.head) {
            return null
        }
        let ptr = this.head;
        while(ptr.next) {
            ptr = ptr.next
        }
        return ptr
    }
    clear() {
        this.head = null
    }
    removeFirst() {
        if(!this.head) {
            return null
        }
        this.head = this.head.next

    }
    removeLast() {
        if(!this.head) {
            return
        }
        if(!this.head.next) {
            this.head = null
            return 
        }
        let ptr = this.head;
        while(ptr.next) {
            if(!ptr.next.next)  {
                ptr.next = null
                return
                // break;
                // BOTH RETURN AND BREAK WORK THE SAME.
            }
            ptr = ptr.next
        }
    }
    insertLast(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode
        }
        let ptr = this.head
        while(ptr.next) {
            ptr = ptr.next
        }
        ptr.next = newNode
    }
    getAt(index) {
        let ptr = this.head;
        let count = 0;
        while(ptr) {
            if(index === count) {
                return ptr
            }
            ptr = ptr.next
            count++
        }
        return null
    }
    removeAt(index) {
        if (!this.head) {
            return;
          }
      
          if (index === 0) {
            this.head = this.head.next;
            return;
          }
      
          const previous = this.getAt(index - 1);
          if (!previous || !previous.next) {
            return;
          }
          previous.next = previous.next.next;
    }
    insertAt(index, data) {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        if(index == 0) {
            this.head = new Node(data, this.head)
            return
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}
module.exports = { Node, LinkedList };