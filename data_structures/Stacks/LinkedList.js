class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top
    }
    push(value){
      const node = new Node(value)
      if(!this.length) {
        this.top = node;
        this.bottom = node
      }
      else {
        node.next = this.top
        this.top = node;
      }
      this.length ++
      return this
    }
    pop(){
      if(!this.top) {
        return null
      }
      if(this.length == 0) {
        // i.e if we want to remove the only node left
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length --
      console.log(this)
      return this
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push('google')
  myStack.push('Udemy')
  myStack.push('Discord')
  myStack.peek()
  myStack.pop()
  // myStack.pop()
  // myStack.pop()
  
  
  //Discord
  //Udemy
  //google
  