const Node = require('../../../node/node');
const List = require('../../../list/list');

function LList(array) {
  List.apply(this);
  this.defArray = array;
  this.root = null;
  this.init(array);
}

module.exports = LList;

LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

LList.prototype.init = function(array) {
  if (array.length >= 1) {
    this.root = new Node(array[array.length - 1]);
    for (let i = array.length - 2; i >= 0; i--) {
      this.addStart(array[i]);
    }
  }
};

LList.prototype.size = function() {
  if (this.root) {
    let current = this.root;
    let size = 1;
    while (current.next) {
      current = current.next;
      size += 1;
    }
    return size;
  }
  return undefined;
};

LList.prototype.addStart = function(element) {
  const node = new Node(element);
  node.next = this.root;
  this.root = node;
};

LList.prototype.addEnd = function(element) {
  const node = new Node(element);
  let current = this.root;
  while (current.next) {
    current = current.next;
  }
  current.next = node;
};

LList.prototype.addPosition = function(element, index) {
  if (this.root) {
    let i = 0;
    let current = this.root;
    if (index === 0) {
      this.addStart(element);
    } else if (index < this.size() && index >= 0) {
      while (index - i > 1) {
        current = current.next;
        i += 1;
      }
      const node = new Node(element);
      node.next = current.next;
      current.next = node;
    }
  }
  return undefined;
};

LList.prototype.get = function(index) {
  if (this.root) {
    let i = 0;
    let current = this.root;
    if (index < this.size() && index >= 0) {
      while (i !== index) {
        current = current.next;
        i += 1;
      }
      return current.val;
    }
  }
  return undefined;
};

LList.prototype.set = function(value, index) {
  if (this.root) {
    let i = 0;
    let current = this.root;
    if (index < this.size() && index >= 0) {
      while (i !== index) {
        current = current.next;
        i += 1;
      }
      current.val = value;
    }
  }
  return undefined;
};

LList.prototype.min = function() {
  if (this.root) {
    let current = this.root;
    let minNode = current;
    while (current.next) {
      current = current.next;
      if (current.val < minNode.val) {
        minNode = current;
      }
    }
    return minNode.val;
  }
  return undefined;
};

LList.prototype.max = function() {
  if (this.root) {
    let current = this.root;
    let maxNode = current;
    while (current.next) {
      current = current.next;
      if (current.val > maxNode.val) {
        maxNode = current;
      }
    }
    return maxNode.val;
  }
  return undefined;
};

LList.prototype.minIndex = function() {
  if (this.root) {
    let current = this.root;
    let minNode = current;
    let minIndex = 0;
    let i = 0;
    while (current.next) {
      current = current.next;
      i += 1;
      if (current.val < minNode.val) {
        minNode = current;
        minIndex = i;
      }
    }
    return minIndex;
  }
  return undefined;
};

LList.prototype.maxIndex = function() {
  if (this.root) {
    let current = this.root;
    let maxNode = current;
    let maxIndex = 0;
    let i = 0;
    while (current.next) {
      current = current.next;
      i += 1;
      if (current.val > maxNode.val) {
        maxNode = current;
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  return undefined;
};

LList.prototype.delStart = function() {
  const { val } = this.root;
  this.root = this.root.next;
  return val;
};

LList.prototype.delEnd = function() {
  let current = this.root;
  while (current.next.next) {
    current = current.next;
  }
  const { val } = current.next;
  current.next = null;
  return val;
};

LList.prototype.delPosition = function(index) {
  if (this.root) {
    let val;
    if (index === 0) {
      val = this.root.val;
      this.delStart();
    } else if (index < this.size() && index >= 0) {
      let i = 0;
      let current = this.root;
      while (index - 1 > i) {
        current = current.next;
        i += 1;
      }
      val = current.next.val;
      current.next = current.next.next;
    }
    return val;
  }
  return undefined;
};

LList.prototype.sort = function() {
  const newRoot = new Node(this.get(this.minIndex()));
  this.delPosition(this.minIndex());
  let node = newRoot.next;
  while (this.root) {
    node = new Node(this.get(this.minIndex()));
    this.delPosition(this.minIndex());
    let nodeSorting = newRoot;
    while (nodeSorting.next) {
      nodeSorting = nodeSorting.next;
    }
    nodeSorting.next = new Node(node.val);
  }
  this.root = newRoot;
};

LList.prototype.reverse = function() {
  let prev = null;
  let current = this.root;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.root = prev;
};

LList.prototype.halfReverse = function() {
  const length = this.size();
  let prev = null;
  let current = this.root;
  let next = null;

  let count = 0;
  while (count < Math.floor(length / 2) && current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count += 1;
  }
  this.root = prev;
  prev = null;
  next = null;
  if (length % 2 === 1) {
    this.addEnd(current.val);
    current = current.next;
  }
  while (count < length && current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count += 1;
  }
  while (prev) {
    this.addEnd(prev.val);
    prev = prev.next;
  }
};

LList.prototype.toArray = function() {
  const array = [];
  let current = this.root;
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  return array;
};

LList.prototype.toString = function() {
  let strList = '';
  let current = this.root;
  while (current) {
    strList += `${current.val} `;
    current = current.next;
  }
  return strList;
};

LList.prototype.clear = function() {
  this.init(this.defArray);
};
