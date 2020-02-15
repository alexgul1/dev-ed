"use strict";
function SquareRoot(root) {
    if(typeof root == "number" && isFinite(root) && root > 0) {
        for (let i = 1; ; i++) {
            if (root === i * i) {
                return i;
            }
            if (root < i * i) {
                return i;
            }
        }
    }
    return null;
}

function SquareRootBinary(root) {
    if(typeof root == "number" && isFinite(root) && root > 0) {
        let left = 1;
        let right = root;
        let mid = 0;
        let prev = 0;
        for (; ;) {
            mid = Math.ceil((left + right) / 2);
            if (prev === mid) {
                break;
            }
            let key = Math.abs(mid * mid);

            if (root === key) {
                return mid;
            }
            if (key > root) {
                right = mid;
            } else {
                left = mid;
            }
            prev = mid;
        }
        if (root !== mid * mid) {
            return mid;
        }
    }
    return  null;
}
