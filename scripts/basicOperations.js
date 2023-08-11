function add(number1, number2) {
    return number1 + number2;
}
  
function subtract(number1, number2) {
    return number1 - number2;
}
  
function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 !== 0) {
        return number1 / number2;
    } else {
        return "ERROR";
    }
}

export function operate(operator, number1, number2) {
    let result;
    switch (operator) {
        case "+":
        result = add(number1, number2);
        break;
        case "-":
        result = subtract(number1, number2);
        break;
        case "*":
        result = multiply(number1, number2);
        break;
        case "/":
        result = divide(number1, number2);
    }
    return result
}
