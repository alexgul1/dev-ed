"use strict";

let AList = function (array) {
    this.defArray = array;
    this.array = [];
    this.init();
    //this.length = this.array.size()
};

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
    return this.array;
};

AList.prototype.addEnd = function (element) {
    this.array[this.size()] = element;
    return this.array;
};

AList.prototype.delStart = function () {
    let copyArray = [];
    for(let i = 1; i < this.size(); i++) {
        copyArray[i - 1] = this.array[i];
    }
    this.array = copyArray;
    return this.array;
};

AList.prototype.delEnd = function () {
  let copyArray = [];
  for(let i = 0; i < this.size() - 1; i++) {
      copyArray[i] = this.array[i];
  }
  this.array = copyArray;
  return this.array;
};

AList.prototype.delPosition = function (index) {
  let copyArray = [];
  let j = 0;
  for(let i = 0; i < this.size(); i++) {
      if(i === index) {
      } else {
          copyArray[j] = this.array[i];
          j++;
      }
  }
  this.array = copyArray;
  return this.array;
};

AList.prototype.get = function(index) {
    for(let i = 0; i < this.size(); i++) {
        if(i === index) {
            return this.array[i];
        }
    }
};

AList.prototype.set = function(index, element) {
  let copyArray = [];
  let j = 0;
  for(let i = 0; i < this.size() + 1; i++) {
      if(i === index) {
          copyArray[i] = element;
      }
      else {
          copyArray[i] = this.array[j];
          j++;
      }
  }
  this.array = copyArray;
  return this.array;
};

AList.prototype.toString = function() {
    let toString = "";
    for(let i = 0; i < this.size(); i++) {
        if(i === 0) {
            toString += this.array[i];
        }
        else {
            toString += ` ${this.array[i]}`;
        }
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
    return this.array;
};

AList.prototype.reverse = function () {
    for(let i = 0; i < Math.floor(this.size() / 2); i++) {
        let temp = this.array[i];
        this.array[i] = this.array[this.size() - i - 1];
        this.array[this.size() - i - 1] = temp;
    }
    return this.array;
};

AList.prototype.halfReverse = function () {

   return this.array;
};

let aList = new AList([-1, 1, 2, -12, 5, 0, 3, 6, 56, 12, 89]);

console.log(aList.array);
console.log(aList.size());

/*
console.log(aList.addStart(4));
console.log(aList.addStart(4));
console.log(aList.size());

console.log(aList.addEnd(6));
console.log(aList.size());

console.log(aList.delStart());
console.log(aList.size());

console.log(aList.delEnd());
console.log(aList.size());

console.log(aList.delPosition(2));
console.log(aList.size());

console.log(aList.get(2));

console.log(aList.set(2, 20));
*/

//console.log(aList.toString());

//aList.clear();
/*console.log(aList.array);

console.log(aList.min());

console.log(aList.max());

console.log(aList.minIndex());

console.log(aList.maxIndex());*/

//console.log(aList.sort());

console.log(aList.halfReverse());