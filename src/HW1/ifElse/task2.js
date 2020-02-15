"use strict";

function QuarterOfPoint(x, y) {
    if(typeof x == "number" && typeof y == "number" && isFinite(x) && isFinite(y)) {
        if (x === 0 && y === 0) {
            return "Точка лежит в центре координат";
        } else if (x === 0) {
            return "Точка лежит на оси Y";
        } else if (y === 0) {
            return "Точка лежит на оси X";
        } else if (x > 0) {
            if (y > 0) {
                return "Точка лежит в I четверти";
            } else {
                return "Точка лежит в IV четверти";
            }
        }
        if (y > 0) {
            return "Точка лежит в II четверти";
        } else {
            return "Точка лежит в III четверти";
        }
    }
    return null;
}
