"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function InsertSort(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
            return arr;
        }
    }
    return null;
}