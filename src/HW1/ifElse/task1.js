"use strict";

function SumOrMulti(a, b) {
  if(typeof a == "number" && typeof b == "number" && isFinite(a) && isFinite(b)) {
    if (a % 2 === 0) {
      return a * b;
    }
    return a + b;
  }
  return null;
}
