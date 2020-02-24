"use strict";
function factorial(size) {
    if(typeof size == "number" && isFinite(size) && size > 0) {
        let factor = 1;
        for (let i = 1; i <= size; i++) {
            factor *= i;
        }
        return factor;
    }
    return null;
}