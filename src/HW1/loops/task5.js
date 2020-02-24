"use strict";
function sumOfDigits (num) {
    if(typeof num == "number" && isFinite(num)) {
        let sum = 0;
        let n = num.toString();
        for (let i = 0; i < n.length; i++) {
            if (n[i] === "-") {
                continue;
            } else {
                sum += parseInt(n[i]);
            }
        }
        return sum;
    }
    return  null;
}