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

    // append(data) {
    //     console.log(data)
    // }
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
    // getAt
    // removeAt
    // insertAt
}
// const checkLinkedList = new LinkedList()
// checkLinkedList.append(5);
module.exports = { Node, LinkedList };