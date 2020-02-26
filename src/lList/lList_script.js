const Node = require('../node/node_script');
const List = require('../list/list_script');

let LList = function (array) {
    //apl
    this.root = null;
    this.init(array);
};

LList.prototype = Object.create(List.prototype);
//LList.prototype = Object.create(Node.prototype);
LList.prototype.constructor = LList;

LList.prototype.init = function (array) {
    this.root = new Node(array[array.length - 1]);
    for(let i = array.length - 2; i >= 0; i--)
    {
        this.addStart(array[i])
    }
};


LList.prototype.size = function () {
    if(this.root) {
        let current = this.root;
        let size = 1;
        while (current.next) {
            current = current.next;
            size++
        }
        return size;
    }
    return 0;
};

LList.prototype.addStart = function (element) {
    const node = new Node(element);
    node.next = this.root;
    this.root = node;
};

LList.prototype.addEnd = function(element) {
    let node = new Node(element);
    let current = this.root;
    while (current.next) {
        current = current.next;
    }
    current.next = node;
};

LList.prototype.get = function(index) {
    if (this.root) {
        let i = 0;
        let current = this.root;
        if(index < lList.size() && index >= 0) {
            while (i !== index) {
                current = current.next;
                i++;
            }
            return current.val;
        }
     }
};

LList.prototype.set = function(value, index) {
    if(this.root) {
        let i = 0;
        let current = this.root;
        if(index < lList.size() && index >= 0) {
            while (i !== index) {
                current = current.next;
                i++;
            }
            current.val = value;
        }
    }
};

LList.prototype.min = function() {
    if(this.root) {
        let current = this.root;
        let minNode = current;
        while (current.next) {
            current = current.next;
            if(current.val < minNode.val) {
                minNode = current;
            }
        }
        return minNode.val;
    }
};

LList.prototype.max = function() {
    if(this.root) {
        let current = this.root;
        let maxNode = current;
        while (current.next) {
            current = current.next;
            if(current.val > maxNode.val) {
                maxNode = current;
            }
        }
        return maxNode.val;
    }
};

LList.prototype.minIndex = function () {
    if(this.root) {
        let current = this.root;
        let minNode = current;
        let minIndex = 0;
        let i = 0;
        while (current.next) {
            current = current.next;
            i++;
            if(current.val < minNode.val) {
                minNode = current;
                minIndex = i;
            }
        }
        return minIndex;
    }
};

LList.prototype.maxIndex = function () {
    if(this.root) {
        let current = this.root;
        let maxNode = current;
        let maxIndex = 0;
        let i = 0;
        while (current.next) {
            current = current.next;
            i++;
            if(current.val > maxNode.val) {
                maxNode = current;
                maxIndex = i;
            }
        }
        return maxIndex;
    }
};

LList.prototype.addPosition = function (element, index) {
    if(this.root) {
        let i = 0;
        let current = this.root;
        if(index === 0) {
            this.addStart(element);
        }
        else if(index < lList.size() && index >= 0) {
            while ((index - i) > 1)  {
                current = current.next;
                i++
            }
            const node = new Node(element);
            node.next = current.next;
            current.next = node;
        }
    }
};

LList.prototype.delStart = function () {
    let val = this.root.val;
  this.root = this.root.next;
  return val;
};

LList.prototype.delEnd = function () {
    let current = this.root;
    while (current.next.next) {
        current = current.next;
    }
    let val = current.val;
    current.next = null;
    return val;
};

LList.prototype.delPosition = function(index) {
    if(this.root) {
        if (index === 0) {
            this.delStart();
        } else if(index < this.size() && index >= 0){
            let i = 0;
            let current = this.root;
            while (index - 1 > i) {
                current = current.next;
                i++
            }
            const val = current.val;
            current.next = current.next.next;
        }
    }
};

LList.prototype.sort = function () {
    let newRoot = new Node(this.get(this.minIndex()));
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

let lList = new LList([1, 2, -15, 0, 3]);
console.log(lList);


lList.sort();


let a = 1;
