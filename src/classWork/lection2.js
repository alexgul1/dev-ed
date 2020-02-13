"use strict";

//примитивные/простые  типы

let myNumber = 12345;
let myString = "some string";
let myBool = true;
let muNull = null;
let mySymbol = Symbol();
let myUndef = undefined;

//Number
///////////////////////////
console.log(0xfffcc);
console.log(0o345);
console.log(1.24e4);

console.log(`Деление бесконечности на бесконечность`, Infinity/Infinity);
console.log(Math.sqrt(-10));

console.log(`Деление -1 на 0`, -1 / 0);

let number = 4000;
console.log(typeof number);

let newNumber = new Number(4000);
console.log(typeof newNumber);

//toFixed
console.log(newNumber.toFixed(2));
console.log(number.toFixed(2));

//Унарные операторы
let  count = 10;
console.log(`Префиксный инкремент`, ++count);
console.log(`Значение`, count);
console.log(`Постфиксный инкремент`, count++);
console.log(`Значение`,count);

//Бинарные операторы
let variable = 100;
console.log(variable += 20);
let anotherVariable = 25;
console.log(anotherVariable *= 4);

//Операторы отношение
console.log(`5 < 10`,5 < 10);
console.log(`5 > 10`,5 > 10);
console.log(`10 >= 10`,10 >= 10);
console.log(`8 <= 10`,8 <= 10);
console.log(`10 === 10`, 10 === 10);
console.log(`10 !== 10`, 10 !== 10);
console.log(`10 === "10"`, 10 === "10");

console.log(`Ошибки округления(не баг, а фича): 0.2 + 0.1 =`, 0.2 + 0.1);

//String
///////////////////////////
console.log("string");
console.log('newString');
console.log(`anotherString`);
console.log("this is my \"string\"");

//Строка как массив
let myString2 = "new string";
console.log(`Вместо charAt`,myString2[2]);

//Boolean
///////////////////////////
console.log(`5 === 6`, 5 === 6);
console.log(`5 === 5`, 5 === 5);
console.log(`Оператор !! (!!5)`,!!5);
console.log(`!!undefined`, !!undefined);

// && и ||
let number2 = 5;
console.log(number2 && 10 + number2);
let prevString = "my String";
let newString = prevString || "default";
console.log(newString);

// Null & Undefined
let temp;
console.log(`temp`,temp);
let  obj  = {};
console.log(`obj.property`,obj.property);
let ar = [1, 2 , 3];
console.log(ar[3]);

console.log(`typeof null`,typeof null);
console.log(`typeof undefined`,typeof undefined);
console.log(`null == undefined`,null == undefined);
console.log(`null === undefined`,null === undefined);

//Symbol
///////////////////////////
let symbol = Symbol("name");
console.log(symbol);
console.log(`typeof symbol`,typeof symbol);
let anotherSymbol = Symbol("name");
console.log(anotherSymbol);
console.log(`symbol === anotherSymbol`, symbol === anotherSymbol);

//создание символа с помощью for
let symbol2 = Symbol.for("name");
console.log(symbol2);
let anotherSymbol2 = Symbol.for("name");
console.log(`symbol2 === anotherSymbol2`, symbol2 === anotherSymbol2);

//keyFor
let name = Symbol.keyFor(symbol2);
console.log(name);

//Использование символов в объектах
let user = {
    userName: "Vasya",
    [Symbol('password')]: "asdf"
}
console.log(`Password`,user.password);
console.log(`Object keys`, Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(`Символы объекта`,Object.getOwnPropertySymbols(user));

//Objects
///////////////////////////
let newObject = Object.create({x: 20, y: 30});
console.log(newObject.hasOwnProperty('x'));
newObject.x = 40;
console.log(newObject.hasOwnProperty('x'));

//delete
console.log(`До удаления`,newObject);
delete newObject.x;
console.log(`После`,newObject);

//in
console.log('x' in newObject);
console.log(newObject.z);
console.log('z' in newObject);
newObject.z = undefined;
console.log(newObject.z);
console.log('z' in newObject);

//Cycles
///////////////////////////
console.log('Cycle for 1 :');
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('Cycle for 2 :');
for(let i = 10; i--;) {
    console.log(i);
}
console.log('Cycle while :')
let i = 10;
while (i--) {
    console.log(i)
}

let array = [1, 2, "string", {name: 'ds', key: 2}, ['sd',5]];
console.log('For in:')
for (let key in array) {
    console.log(key);
}
console.log('For of:')
for (let key of array) {
    console.log(key);
}
//Functions
///////////////////////////

//Function declaration
function myFunc(name) {
    return "Hello" + name;
}

//Function expression
let myFunc1 = function (name) {
    return "Hello" + name;
}

//new Function
let sum = new Function('a,b','return a + b;');
let result = sum(1, 2);
console.log(`Sum:`,result);

console.log(typeof myFunc)
console.log(typeof myFunc())

let anonFunct = () => console.log('launch anonymous function');
anonFunct();

let callBackFunct = function () {
    console.log('This is callback function');
}

let functionCall = function () {
    setTimeout(callBackFunct, 2000);
}
functionCall();

let argFunct = function () {
    console.log(arguments)
}

argFunct(1, [1, {}, '231'], {}, {name: "Sasha"}, 'string');

let argFunctES6 = function (...args) {
    console.log(args);
}

argFunctES6(1, [1, {}, '231'], {}, {name: "Sasha"}, 'string');