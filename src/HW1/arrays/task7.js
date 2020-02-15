"use strict";
function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}

function CountUnpairNumbers(arr)
{
    if(Array.isArray(arr) && arr.length !== 0) {
        if (arr.every(IsFiniteNumber)) {
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