const Node = require('../../../node/node_script');
const List = require('../../../list/list_script');

function LList (array) {
    List.apply(this, arguments);
    this.defArray = array;
    this.root = null;
    this.init(array);
}

module.exports = LList;

LList.prototype = Object.create(List.prototype);
LList.prototype.constructor = LList;

LList.prototype.init = function (array) {
    if (array.length >= 1) {
        this.root = new Node(array[array.length - 1]);
        for (let i = array.length - 2; i >= 0; i--) {
            this.addStart(array[i])
        }
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

LList.prototype.addPosition = function (element, index) {
    if(this.root) {
        let i = 0;
        let current = this.root;
        if(index === 0) {
            this.addStart(element);
        }
        else if(index < this.size() && index >= 0) {
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

LList.prototype.get = function(index) {
    if (this.root) {
        let i = 0;
        let current = this.root;
        if(index < this.size() && index >= 0) {
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
        if(index < this.size() && index >= 0) {
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

LList.prototype.delStart = function () {
    let val = this.root.val;
    this.root = this.root.next;
    return val;
};

LList.prototype.delEnd = function () {
    let current = this.root;
    let val;
    while (current.next.next) {
        current = current.next;
    }
    val = current.next.val;
    current.next = null;
    return val;
};

LList.prototype.delPosition = function(index) {
    if(this.root) {
        let val;
        if (index === 0) {
            val = this.root.val;
            this.delStart();
        } else if(index < this.size() && index >= 0){
            let i = 0;
            let current = this.root;
            while (index - 1 > i) {
                current = current.next;
                i++
            }
            val = current.next.val;
            current.next = current.next.next;
        }
        return val;
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

LList.prototype.reverse = function () {
    let array = this.toArray();
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    this.init(array);
};

LList.prototype.halfReverse = function () {
    let array = this.toArray();
    let k = parseInt(array.length / 4);
    if(array.length % 4 === 3 || array.length % 4 === 2) {
        for (let i = 0; i < k; i++) {
            let temp = array[i];
            array[i] = array[k * 2 - i];
            array[k * 2 - i] = temp;

            let temp2 = array[array.length - i - 1];
            array[array.length - i - 1] = array[array.length - k * 2 - 1 + i];
            array[array.length - k * 2 - 1 + i] = temp2
        }
    }
    else {
        for (let i = 0; i < k; i++) {
            let temp = array[i];
            array[i] = array[k * 2 - i - 1];
            array[k * 2 - i - 1] = temp;

            let temp2 = array[array.length - i - 1];
            array[array.length - i - 1] = array[array.length - k * 2 + i];
            array[array.length - k * 2 + i] = temp2;
        }
        console.log(array);
    }
    this.init(array);
};

LList.prototype.toArray = function () {
    let array = [];
    let current = this.root;
    while (current) {
        array.push(current.val);
        current = current.next;
    }
    return array;
};

LList.prototype.toString = function () {
    let strList = '';
    let current = this.root;
    while (current) {
        strList += `${current.val} `;
        current = current.next;
    }
    return strList;
};

LList.prototype.clear = function () {
    this.init(this.defArray);
};
