"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function FindMax(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i]
                }
            }
            return max;
        }
    }
    return null;
}