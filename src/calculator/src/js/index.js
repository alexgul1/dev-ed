"use strict";

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

let cropDisplay = function () {
    if( display.length >= 11) {
        display = display.substr(0,11)
    }
};

let numberClick = function (event) {

    if (waiting) {
        display = "";
        winDisplay.value = display;
    }
    display += event.target.value;
    console.log(event.target);
    cropDisplay();
    winDisplay.value = display;
    waiting = false;

};

let operationClick = function (event) {
    if (firstNum === undefined) {
        firstNum = parseFloat(display);
        console.log('first', firstNum)
    } else {
        secondNum = parseFloat(display);
    }
    if (isFinite(secondNum)) {
        firstNum = operationFunct(firstNum, secondNum, operation);
    }
    operation = event.target.value;
    waiting = true;
    winDisplay.value = firstNum;
};

let clearClick = function () {
    firstNum = undefined;
    secondNum = undefined;
    operation = '';
    display = '';
    waiting = false;
    winDisplay.value = display;
};

let operationFunct = function (firstNum,secondNum,operation) {
    if (!!operation && isFinite(firstNum) && isFinite(secondNum)) {
        switch (operation) {
            case "+":
                return firstNum + secondNum;
            case "-":
                return firstNum - secondNum;
            case "/":
                return firstNum / secondNum;
            case "*":
                return firstNum * secondNum;
            case "=":
                return firstNum;
        }
    }

};

let pointClick = function (event) {
    if(!display.includes(event.target.value)) {
        display += event.target.value;
        winDisplay.value = display;
    }
};


for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",numberClick)
}

for (let i = 0; i < actions.length; i++) {
    actions[i].addEventListener('click', operationClick);
}
clear.addEventListener('click',clearClick);

point.addEventListener('click', pointClick);