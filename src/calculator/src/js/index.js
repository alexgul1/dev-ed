let firstNum;
let secondNum;
let operation = '';
let display = '';
let waiting = false;
const winDisplay = document.querySelector('.viewbox');
const numbers = document.getElementsByClassName('number');
const actions = document.getElementsByClassName('actions');
const clear = document.querySelector('.clear');
const point = document.querySelector('.point');

const operationFunct = function(firstNum, secondNum, operation) {
  if (!!operation && Number.isFinite(firstNum) && Number.isFinite(secondNum)) {
    switch (operation) {
      case '+':
        return firstNum + secondNum;
      case '-':
        return firstNum - secondNum;
      case '/':
        return firstNum / secondNum;
      case '*':
        return firstNum * secondNum;
      case '=':
        return firstNum;
    }
  }
  return undefined;
};

const cropDisplay = function() {
  if (display.length >= 11) {
    display = display.substr(0, 11);
  }
};

const numberClick = function(event) {
  if (waiting) {
    display = '';
    winDisplay.value = display;
  }
  display += event.target.value;
  cropDisplay();
  winDisplay.value = display;
  waiting = false;
};

const operationClick = function(event) {
  if (firstNum === undefined) {
    firstNum = parseFloat(display);
  } else {
    secondNum = parseFloat(display);
  }
  if (Number.isFinite(secondNum)) {
    firstNum = operationFunct(firstNum, secondNum, operation);
  }
  operation = event.target.value;
  waiting = true;
  winDisplay.value = firstNum;
};

const clearClick = function() {
  firstNum = undefined;
  secondNum = undefined;
  operation = '';
  display = '';
  waiting = false;
  winDisplay.value = display;
};

const pointClick = function(event) {
  if (!display.includes(event.target.value)) {
    display += event.target.value;
    winDisplay.value = display;
  }
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', numberClick);
}

for (let i = 0; i < actions.length; i++) {
  actions[i].addEventListener('click', operationClick);
}
clear.addEventListener('click', clearClick);

point.addEventListener('click', pointClick);
