"use strict";
function YourMark(mark) {
    if(typeof mark == "number" && isFinite(mark)) {
        if (mark >= 0 && mark <= 19) {
            return "F";
        } else if (mark >= 20 && mark <= 39) {
            return "E";
        } else if (mark >= 40 && mark <= 59) {
            return "D";
        } else if (mark >= 60 && mark <= 74) {
            return "C";
        } else if (mark >= 75 && mark <= 89) {
            return "B";
        } else if (mark >= 90 && mark <= 100) {
            return "A";
        }
    }
    return null;
}