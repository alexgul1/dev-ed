"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function FindMin(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i]
                }
            }
            return min;
        }
    }
    return null;
}