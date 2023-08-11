import {typeNumber, typeDecimal, handleOperationButton, eraseNumber, clear, handleEqual } from "./calculatorLogic.js";

//adding the function to the number buttons
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener('click' , () =>{typeNumber(number.innerText)});
});

//add the function to . button
document.getElementById("float").addEventListener("click", () => {typeDecimal()})

//add the operators function
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", () =>{handleOperationButton(operator.innerText)})
})

//add backspace function
document.getElementById("backspace").addEventListener("click", () => {eraseNumber()})

//add equal function
document.getElementById("equal").addEventListener("click" , ()=>{handleEqual()})

//add clear function
document.getElementById("clear").addEventListener("click" , () =>{
    clear();
})

//adding the keys
window.addEventListener("keydown", (e) => {
    if(e.defaultPrevented) return;
    const num = ["0","1","2","3","4","5","6","7","8","9"];
    const oper = ["+","-","*","/"];
    if (num.includes(e.key)) typeNumber(e.key);
    if (oper.includes(e.key)) handleOperationButton(e.key);
    if (e.key === ".") typeDecimal();
    if (e.key === "Enter") handleEqual();
    if (e.key === "Backspace") eraseNumber();
    if (e.key === "Escape"){clear()}
    e.preventDefault();
})
