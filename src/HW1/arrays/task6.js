"use strict";
function isFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function reverse (arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(isFiniteNumber)) {
            let reversearr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reversearr.push(arr[i])
            }
            return reversearr;
        }
    }
    return null;
}