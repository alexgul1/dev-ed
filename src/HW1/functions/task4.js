"use strict";

function IsFiniteNumber(num) {
    return typeof num == "number" && isFinite(num);
}
function Distance(...args) {
    if(Array.isArray(args) && args.length >= 4) {
        if (args.every(IsFiniteNumber)) {
            let distance = Math.sqrt(Math.pow(args[0] - args[2], 2) + Math.pow(args[1] - args[3], 2));
            return distance;
        }
    }
    return null;
}