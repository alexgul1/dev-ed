"use strict";

function IsPrimeNumber(num) {
    if(typeof num == "number" && isFinite(num) && num > 0) {
        let test = false;
        for (let i = 2; i <= num; i++) {
            if (num % i === 0 && i !== num) {
                test = false;
                break;
            } else {
                test = true;
            }
        }
        if (test) {
            return "Число простое";
        } else {
            return "Число не простое";
        }
    }
    return null;
}
