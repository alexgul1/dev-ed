"use strict";

const List = require('../list/list_script');

let AList = function (array) {
    List.apply(this);
    this.defArray = array;
    this.array = [];
    this.init();
};
AList.prototype = Object.create(List.prototype);
AList.prototype.constructor = AList;

AList.prototype.init = function () {

  let i = 0;
  while (typeof this.defArray[i] == 'number') {
      this.array[i] = this.defArray[i];
      i++;
  }
};

AList.prototype.size = function () {
    let i = 0;
    while (typeof this.array[i] == 'number') {
        i++;
    }
    return i;
};

AList.prototype.addStart = function (element) {
    for(let i = this.size() - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i]
    }
    this.array[0] = element;

};

AList.prototype.addEnd = function (element) {
    this.array[this.size()] = element;
};

AList.prototype.addPosition = function(index, element) {
    let copyArray = [];
    let j = 0;
    for(let i = 0; i <= this.size(); i++) {
        if(i === index) {
            copyArray[i] = element;
        }
        else {
            copyArray[i] = this.array[j];
            j++;
        }
    }
    this.array = copyArray;
};

AList.prototype.delStart = function () {
    let copyArray = [];
    let removed = this.array[0];
    for(let i = 1; i < this.size(); i++) {
        copyArray[i - 1] = this.array[i];
    }
    this.array = copyArray;
    return removed;
};

AList.prototype.delEnd = function () {
  let copyArray = [];
  let removed = this.array[this.size() - 1];
  for(let i = 0; i < this.size() - 1; i++) {
      copyArray[i] = this.array[i];
  }
  this.array = copyArray;
  return removed;
};

AList.prototype.delPosition = function (index) {
  let copyArray = [];
  let removed = this.array[index];
  let j = 0;
  for(let i = 0; i < this.size(); i++) {
      if(i === index) {
      } else {
          copyArray[j] = this.array[i];
          j++;
      }
  }
  this.array = copyArray;
  return removed;
};

AList.prototype.get = function(index) {
    for(let i = 0; i < this.size(); i++) {
        if(i === index) {
            return this.array[i];
        }
    }
};

AList.prototype.set = function(index, element) {
    this.array[index] = element;
};

AList.prototype.toString = function() {
    let toString = "";
    for(let i = 0; i < this.size(); i++) {
        toString += `${this.array[i]}`;
    }
    return toString;
};

AList.prototype.clear = function () {
    this.array = [];
    let i = 0;
    while (typeof this.defArray[i] == 'number') {
        this.array[i] = this.defArray[i];
        i++;
    }

};

AList.prototype.min = function () {
    let min = this.array[0];
    for (let i = 0; i < this.size(); i++) {
        if(this.array[i] < min) {
            min = this.array[i];
        }
    }
    return min;
};

AList.prototype.max = function () {
    let max = this.array[0];
    for (let i = 0; i < this.size(); i++) {
        if(this.array[i] > max) {
            max = this.array[i];
        }
    }
    return max;
};

AList.prototype.minIndex = function () {
    let min = this.array[0];
    let minIndex = 0;
    for (let i = 0; i < this.size(); i++) {
        if(this.array[i] < min) {
            min = this.array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

AList.prototype.maxIndex = function () {
    let max = this.array[0];
    let maxIndex = 0;
    for (let i = 0; i < this.size(); i++) {
        if(this.array[i] > max) {
            max = this.array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
};

AList.prototype.sort = function () {
    for(let i = 1; i < this.size(); i++) {
        let key = this.array[i];
        let j = i - 1;
        while (j >= 0 && this.array[j] > key) {
            this.array[j + 1] = this.array[j];
            j = j - 1;
        }
        this.array[j + 1] = key;
    }
};

AList.prototype.reverse = function () {
    for(let i = 0; i < Math.floor(this.size() / 2); i++) {
        let temp = this.array[i];
        this.array[i] = this.array[this.size() - i - 1];
        this.array[this.size() - i - 1] = temp;
    }
};

AList.prototype.halfReverse = function () {
    let k = parseInt(this.size() / 4);
    if(this.size() % 4 === 3 || this.size() % 4 === 2) {
        for (let i = 0; i < k; i++) {
            let temp = this.array[i];
            this.array[i] = this.array[k * 2 - i];
            this.array[k * 2 - i] = temp;

            let temp2 = this.array[this.size() - i - 1];
            this.array[this.size() - i - 1] = this.array[this.size() - k * 2 - 1 + i];
            this.array[this.size() - k * 2 - 1 + i] = temp2;
        }
    }
    else {
        for (let i = 0; i < k; i++) {
            let temp = this.array[i];
            this.array[i] = this.array[k * 2 - i - 1];
            this.array[k * 2 - i - 1 ] = temp;

            let temp2 = this.array[this.size() - i - 1];
            this.array[this.size() - i - 1] = this.array[this.size() - k * 2 + i];
            this.array[this.size() - k * 2 + i] = temp2;
        }
    }
};

let aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
//let aList = Object.create()
console.log(aList.size());
console.log(aList.constructor);
aList.addPosition(5, 10);
console.log(aList.array);
