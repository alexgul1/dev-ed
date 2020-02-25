"use strict";

function multiplyOrSum(a, b, c) {
    if(typeof a == "number" && typeof b == "number" && typeof c == "number" && isFinite(a) && isFinite(b) && isFinite(c)) {
        if (a * b * c > a + b + c) {
            return a * b * c + 3;
        }
        return a + b + c + 3;
    }
    return null;
}
