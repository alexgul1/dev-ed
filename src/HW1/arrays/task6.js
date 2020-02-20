"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function Reverse (arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            let reversearr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reversearr.push(arr[i])
            }
            return reversearr;
        }
    }
    return null;
}