const operationFunct = function(firstNum, secondNum, operation) {
  if (!!operation && Number.isFinite(firstNum) && Number.isFinite(secondNum)) {
    switch (operation) {
      case '+':
        return firstNum + secondNum;
      case '-':
        return firstNum - secondNum;
      case '/':
        return firstNum / secondNum;
      case '*':
        return firstNum * secondNum;
      case '=':
        return firstNum;
    }
  }
  return undefined;
};
module.exports = operationFunct;
