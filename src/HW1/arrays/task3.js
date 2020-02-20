"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function FindMinIndex(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i]
                }
            }
            return arr.indexOf(min);
        }
    }
    return null;
}