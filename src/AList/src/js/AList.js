const List = require('../../../list/list');

function AList(array) {
  List.apply(this);
  this.defArray = array;
  this.array = [];
  this.init();
}
AList.prototype = Object.create(List.prototype);
AList.prototype.constructor = AList;

module.exports = AList;

AList.prototype.init = function() {
  let i = 0;
  while (typeof this.defArray[i] === 'number') {
    this.array[i] = this.defArray[i];
    i += 1;
  }
};

AList.prototype.size = function() {
  let i = 0;
  while (typeof this.array[i] === 'number') {
    i += 1;
  }
  return i;
};

AList.prototype.addStart = function(element) {
  for (let i = this.size() - 1; i >= 0; i--) {
    this.array[i + 1] = this.array[i];
  }
  this.array[0] = element;
};

AList.prototype.addEnd = function(element) {
  this.array[this.size()] = element;
};

AList.prototype.addPosition = function(index, element) {
  const copyArray = [];
  let j = 0;
  for (let i = 0; i <= this.size(); i++) {
    if (i === index) {
      copyArray[i] = element;
    } else {
      copyArray[i] = this.array[j];
      j += 1;
    }
  }
  this.array = copyArray;
};

AList.prototype.delStart = function() {
  const copyArray = [];
  const removed = this.array[0];
  for (let i = 1; i < this.size(); i++) {
    copyArray[i - 1] = this.array[i];
  }
  this.array = copyArray;
  return removed;
};

AList.prototype.delEnd = function() {
  const copyArray = [];
  const removed = this.array[this.size() - 1];
  for (let i = 0; i < this.size() - 1; i++) {
    copyArray[i] = this.array[i];
  }
  this.array = copyArray;
  return removed;
};

AList.prototype.delPosition = function(index) {
  const copyArray = [];
  const removed = this.array[index];
  let j = 0;
  for (let i = 0; i < this.size(); i++) {
    if (i === index) {
      // empty
    } else {
      copyArray[j] = this.array[i];
      j += 1;
    }
  }
  this.array = copyArray;
  return removed;
};

AList.prototype.get = function(index) {
  for (let i = 0; i < this.size(); i++) {
    if (i === index) {
      return this.array[i];
    }
  }
  return undefined;
};

AList.prototype.set = function(index, element) {
  this.array[index] = element;
};

AList.prototype.toString = function() {
  let toString = '';
  for (let i = 0; i < this.size(); i++) {
    toString += `${this.array[i]}`;
  }
  return toString;
};

AList.prototype.clear = function() {
  this.array = [];
  let i = 0;
  while (typeof this.defArray[i] === 'number') {
    this.array[i] = this.defArray[i];
    i += 1;
  }
};

AList.prototype.min = function() {
  let min = this.array[0];
  for (let i = 0; i < this.size(); i++) {
    if (this.array[i] < min) {
      min = this.array[i];
    }
  }
  return min;
};

AList.prototype.max = function() {
  let max = this.array[0];
  for (let i = 0; i < this.size(); i++) {
    if (this.array[i] > max) {
      max = this.array[i];
    }
  }
  return max;
};

AList.prototype.minIndex = function() {
  let min = this.array[0];
  let minIndex = 0;
  for (let i = 0; i < this.size(); i++) {
    if (this.array[i] < min) {
      min = this.array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

AList.prototype.maxIndex = function() {
  let max = this.array[0];
  let maxIndex = 0;
  for (let i = 0; i < this.size(); i++) {
    if (this.array[i] > max) {
      max = this.array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

AList.prototype.sort = function() {
  for (let i = 1; i < this.size(); i++) {
    const key = this.array[i];
    let j = i - 1;
    while (j >= 0 && this.array[j] > key) {
      this.array[j + 1] = this.array[j];
      j -= 1;
    }
    this.array[j + 1] = key;
  }
};

AList.prototype.reverse = function() {
  for (let i = 0; i < Math.floor(this.size() / 2); i++) {
    const temp = this.array[i];
    this.array[i] = this.array[this.size() - i - 1];
    this.array[this.size() - i - 1] = temp;
  }
};

AList.prototype.halfReverse = function() {
  const k = parseInt(this.size() / 4, 10);
  if (this.size() % 4 === 3 || this.size() % 4 === 2) {
    for (let i = 0; i < k; i++) {
      const temp = this.array[i];
      this.array[i] = this.array[k * 2 - i];
      this.array[k * 2 - i] = temp;

      const temp2 = this.array[this.size() - i - 1];
      this.array[this.size() - i - 1] = this.array[this.size() - k * 2 - 1 + i];
      this.array[this.size() - k * 2 - 1 + i] = temp2;
    }
  } else {
    for (let i = 0; i < k; i++) {
      const temp = this.array[i];
      this.array[i] = this.array[k * 2 - i - 1];
      this.array[k * 2 - i - 1] = temp;

      const temp2 = this.array[this.size() - i - 1];
      this.array[this.size() - i - 1] = this.array[this.size() - k * 2 + i];
      this.array[this.size() - k * 2 + i] = temp2;
    }
  }
};
