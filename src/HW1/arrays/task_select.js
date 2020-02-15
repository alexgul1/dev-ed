"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function SelectSort(arr) {
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
            for (let i = 0; i < arr.length; i++) {
                let min = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                }
                let temp = arr[min];
                arr[min] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }
    }
    return null;
}