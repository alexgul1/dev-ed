"use strict";

function sumOfPositive(a, b, c){
    if(typeof a == "number" && typeof b == "number" && typeof c == "number" && isFinite(a) && isFinite(b) && isFinite(c)) {
        let sum = 0;
        if (a > 0) {
            sum += a;
        }
        if (b > 0) {
            sum += b;
        }
        if (c > 0) {
            sum += c;
        }
        return sum;
    }
    return  null;
}
