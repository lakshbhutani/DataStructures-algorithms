class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first
    }
    enqueue(value){
      const node = new Node(value);
      if(!this.length) { 
        this.last = node;
        this.first = node;
      }
      else {
        this.last.next = node;
        this.last = node
      }
      this.length ++
      return this;
    }
    dequeue(){
      if(!this.length) {
        return null
      }
    //   const removedNode = this.first;  // We can do this if we want to return the removed node.
      this.first = this.first.next;
      this.length--;
      return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('JOY')
  myQueue.enqueue('Matt')
  myQueue.enqueue('Pavel')
  myQueue.peek();
  myQueue.dequeue()
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  