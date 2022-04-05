//STACK

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    console.log(this.stack.length);
    return this.stack[this.stack.length - 1];
  }
}
const stack = new Stack;
// stack.push('hello');
// stack.push('bye');
// stack.push('see ya');
// stack.push('howdy');
// console.log(stack);

// stack.pop();
// console.log(stack);

// stack.peek();

// console.log('peek', stack.peek());




// QUEUE

class Queue {

  constructor() 
  {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  hasNext() {
    // (this.queue.length !== 0) ? true : false;
    if (this.queue.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}



const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log('queue', queue);
console.log(queue.dequeue()); // 'fox'
console.log('hasNext?', queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
