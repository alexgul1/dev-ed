let operationFunct = function (firstNum,secondNum,operation) {
    if (!!operation && isFinite(firstNum) && isFinite(secondNum)) {
        switch (operation) {
            case "+":
                return firstNum + secondNum;
            case "-":
                return firstNum - secondNum;
            case "/":
                return firstNum / secondNum;
            case "*":
                return firstNum * secondNum;
            case "=":
                return firstNum;
        }
    }
};
module.exports =operationFunct;