"use strict";
function isFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function findMaxIndex(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(isFiniteNumber)) {
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i]
                }
            }
            return arr.indexOf(max);
        }
    }
    return null;
}