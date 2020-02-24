"use strict";
function isFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function swap(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(isFiniteNumber)) {
            for (let i = 0; i < arr.length / 2; i++) {
                let _temp = arr[i];
                arr[i] = arr[arr.length / 2 + i];
                arr[arr.length / 2 + i] = _temp;
            }
            return arr;
        }
    }
    return null;
}