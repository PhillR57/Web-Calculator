import { operate } from "./basicOperations.js";

const display_value = document.getElementById("result-value"); //display result

const operationNumbers = {
    first : null,
    second : "",
    currentOperation : null,
    currentResult : null,
    reset : function () {
        this.first = null,
        this.second = "",
        this.currentOperation = null,
        this.currentResult = null
    }
}

export function display(val) {
  display_value.value = val;
}

export function clear() {
    operationNumbers.reset();
    display("");
    document.getElementById("float").removeAttribute("disabled")    
}

export function eraseNumber() {
    let string = operationNumbers.second
    if (string !== "") {
        if (string.charAt(string.length - 1) === ".") {
            document.getElementById("float").removeAttribute("disabled")
        }
        operationNumbers.second = string.slice(0, -1);
        display(operationNumbers.second);
    }
}

export function typeNumber(number) {
    operationNumbers.second += number;
    //always sets the number input to the second number in the object
    display(operationNumbers.second);
}

export function typeDecimal() { 
    if (!operationNumbers.second.includes(".")) {
        document.getElementById("float").setAttribute("disabled","");
        operationNumbers.second == "" ? operationNumbers.second = "0"+"." : operationNumbers.second = operationNumbers.second.toString()+"."
        display(operationNumbers.second);
    }
}

export function getResult() {
    display("");
    document.getElementById("float").removeAttribute("disabled")
   
    if(operationNumbers.first !== null && operationNumbers.currentOperation !== null && operationNumbers.second !== ""){
        let a = operationNumbers.first;
        let b = Number(operationNumbers.second);
        let result = operate(operationNumbers.currentOperation,a,b);
        if (result === "ERROR") {
            display("ERROR");
            operationNumbers.reset();
        } else {
            operationNumbers.first = null;
            operationNumbers.second="";
            operationNumbers.currentOperation = null;
            operationNumbers.currentResult = result;
            display(result);
        }
    }
}

export function handleOperationButton(operator) {
    getResult();
    switch (operator) {
        case "+":
            operationNumbers.currentOperation = "+";
            break
        case "-":
            operationNumbers.currentOperation = "-";
            break
        case "*":
            operationNumbers.currentOperation = "*";
            break
        case "/":
            operationNumbers.currentOperation = "/";
            break
    }
    if (operationNumbers.first === null) {
        if(operationNumbers.second === "") {
            if (operationNumbers.currentResult === null) {
                operationNumbers.first = 0;
                display(operationNumbers.first);    
            } else {
                operationNumbers.first = operationNumbers.currentResult;
                display(operationNumbers.first)
                operationNumbers.currentResult = null;
            }            
        } else {
            operationNumbers.first = Number(operationNumbers.second);
            operationNumbers.second = "";
        }        
    }
}

export function handleEqual() {
    if(operationNumbers.first === null && operationNumbers.currentOperation === null && operationNumbers.second != "") operationNumbers.second = "";
    if(operationNumbers.first === null && operationNumbers.second === "" && operationNumbers.currentOperation === null && operationNumbers.currentResult !== null) operationNumbers.currentResult = null;
    getResult();
}