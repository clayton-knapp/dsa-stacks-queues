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
// const stack = new Stack();
// stack.push('fox');
// stack.push('goose');
// stack.push('lizard');
// console.log(stack.pop()); // 'lizard'
// console.log(stack.peek()); // 'goose'
// console.log(stack.pop()); // 'goose'
// stack.push('llama');
// console.log(stack.pop()); // 'llama'
// console.log(stack.peek()); // 'fox'
// console.log(stack.pop()); // 'fox'
// console.log(stack.pop()); // null




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



// const queue = new Queue();
// queue.enqueue('fox');
// queue.enqueue('goose');
// queue.enqueue('lizard');
// console.log('queue', queue);
// console.log(queue.dequeue()); // 'fox'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'goose'
// queue.enqueue('llama');
// console.log(queue.dequeue()); // 'lizard'
// console.log(queue.hasNext()); // true
// console.log(queue.dequeue()); // 'llama'
// console.log(queue.hasNext()); // false
// console.log(queue.dequeue()); // null




// Dan's Queue

// class Queue2 {
//   #list = [];

//   enqueue(item) {
//     this.#list.push(item);
//   }

//   dequeue() {
//     return this.#list.length ? this.#list.shift() : null;
//   }

//   hasNext() {
//     return !!this.#list.length; //!! returns booleanized value
//   }
// }


// const queue2 = new Queue2();
// queue2.enqueue('fox');
// queue2.enqueue('goose');
// queue2.enqueue('lizard');
// console.log('queue', queue2);
// console.log(queue2.dequeue()); // 'fox'
// console.log(queue2.hasNext()); // true
// console.log(queue2.dequeue()); // 'goose'
// queue2.enqueue('llama');
// console.log(queue2.dequeue()); // 'lizard'
// console.log(queue2.hasNext()); // true
// console.log(queue2.dequeue()); // 'llama'
// console.log(queue2.hasNext()); // false
// console.log(queue2.dequeue()); // null



class LinkedListNode {
  // eslint-disable-next-line 
  #data = '';
  #next = null;

  constructor(data)
  {
    this.#data = data;
    this.#next = null; //another instance of LinkedListNode initialized as null
  }

  add(node) {
    // check to see if there is already a next property
    if (!this.next) {
      //if not, this passed node can be our next in the LinkedList
      this.next = node;
    }
    else {
      //if there is already a node, run add method recursively on this.next and pass in initial node
      this.next.add(node);
    }
  }

  getList() {
    // check to see if there is already a next property
    if (!this.next) {
    // Just returns the data value
      return this.#data;
    // If there is a this.next return the data value
    } else {
    // Returning this.data for this instance and recursively calling getlist on this.next
      return this.#data + ' ' + this.next.getList();
    }
  }

}

// const root = new LinkedListNode('A');
// const nodeB = new LinkedListNode('B');
// root.add(nodeB);
// console.log('root', root);
// console.log(root.getList()); // 'A B'
// const nodeC = new LinkedListNode('C');
// const nodeD = new LinkedListNode('D');
// const nodeE = new LinkedListNode('E');
// root.add(nodeC);
// root.add(nodeD);
// root.add(nodeE);
// console.log('nodeD', nodeD);
// console.log(root.getList()); // 'A B C D E'






class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if(node.value === this.value) {
      //edge case if duplicate value just return cuz already in tree
      return;
    }
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);
    }
    else {
      if(!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}


const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);




// BINARY NODE FIND PERSON

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // implemented as in previous challenge
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);
    }
    else {
      if(!this.right) this.right = node;
      else this.right.add(node);
    }
  }

  findPerson(name) {
    // Implement me!
    if(name === this.value) return this.value;

    if(name < this.value) {
      if(name === this.left) return this.left;
      else this.left.findPerson(name);
    }

    else {
      if(name === this.right) return this.right;
      else this.right.findPerson(name);
    }

    }
}


const Blake = new PersonTreeNode({ name: 'Blake' });
const Amy = new PersonTreeNode({ name: 'Amy' });
const Cliff = new PersonTreeNode({ name: 'Cliff', cool: 'dude' });
const Dave = new PersonTreeNode({ name: 'Dave' });

// B will be the root of the tree:
Blake.add(Amy);
Blake.add(Dave);
Blake.add(Cliff);

// console.log('Blake', Blake);


console.log(Blake.findPerson('Cliff'));