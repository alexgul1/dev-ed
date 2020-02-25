"use strict";
function isFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function countUnpairNumbers(arr)
{
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(isFiniteNumber)) {
            let count = 0;
            for (let i of arr) {
                if (Math.abs(i) % 2 === 1) {
                    count++;
                }
            }
            return count;
        }
    }
    return null;
}