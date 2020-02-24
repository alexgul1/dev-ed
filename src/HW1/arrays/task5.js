"use strict";
function isFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function sumOfUnpair(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(isFiniteNumber)) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (i % 2 === 1) {
                    sum += arr[i]
                }
            }
            return sum;
        }
    }
    return null;
}