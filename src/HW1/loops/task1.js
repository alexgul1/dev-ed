"use strict";

function HundredPairNumbers() {
    let sum = 0;
    let count = 0;
    for (let i = 2; i<=99; i+=2) {
        sum += i;
        count++;
    }
        return  "Сумма " + sum + " Количество " + count;

}
