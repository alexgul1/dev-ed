"use strict";
function FlipNum (num)
{
    if (typeof num == "number" && isFinite(num)) {
        let s = num.toString();
        let flip = "";
        if(s[0] === '-') {
            flip += '-';
        }
        for (let i = s.length - 1; i >= 0; i--) {
            flip += s[i];
        }
        return parseInt(flip);
    }
    return null;
}
