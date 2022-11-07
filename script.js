const doubleBtn = document.getElementById("double-btn");
const zeroBtn = document.getElementById("zero-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const dotBtn = document.getElementById("dot-btn");
const clearBtn = document.getElementById("clear-btn");
const moduloBtn = document.getElementById("modulo-btn");
const deleteBtn = document.getElementById("delete-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const subtractBtn = document.getElementById("subtract-btn");
const addBtn = document.getElementById("add-btn");
const equalBtn = document.getElementById("equal-btn");
const displayBox = document.getElementById("display");

let firstValue;
let secondValue;
let operator;


// When a button is clicked, the value is displayed in the displayBox
doubleBtn.addEventListener("click", (event) => {
    displayBox.value = "00";
});

zeroBtn.addEventListener("click", (event) => {
    displayBox.value = "0";
});

oneBtn.addEventListener("click", (event) => {
    displayBox.value = "1";
});

twoBtn.addEventListener("click", (event) => {
    displayBox.value = "2";
});

threeBtn.addEventListener("click", (event) => {
    displayBox.value = "3";
});

fourBtn.addEventListener("click", (event) => {
    displayBox.value = "4";
});

fiveBtn.addEventListener("click", (event) => {
    displayBox.value = "5";
});

sixBtn.addEventListener("click", (event) => {
    displayBox.value = "6";
});

sevenBtn.addEventListener("click", (event) => {
    displayBox.value = "7";
});

eightBtn.addEventListener("click", (event) => {
    displayBox.value = "8";
});

nineBtn.addEventListener("click", (event) => {
    displayBox.value = "9";
});

dotBtn.addEventListener("click", (event) => {
    displayBox.value = ".";
});

moduloBtn.addEventListener("click", (event) => {
    displayBox.value = "%";
});

divideBtn.addEventListener("click", (event) => {
    displayBox.value = "/";
});

multiplyBtn.addEventListener("click", (event) => {
    displayBox.value = "x";
});

subtractBtn.addEventListener("click", (event) => {
    displayBox.value = "-";
});

addBtn.addEventListener("click", (event) => {
    displayBox.value = "+";
});


// Create functions for basic math operators
// Create a new function that takes an operator and 2 numbers and calls one of the above functions
function operate(firstValue, secondValue, operator) {
    switch(operator) {
        case "+": {
            let add = firstValue + secondValue;
            add();
            break;
        }
        case "-": {
            let subtract = firstValue - secondValue;
            subtract();
            break;
        }
        case "*": {
            let multiply = firstValue * secondValue;
            multiply();
            break;
        }
        case "/": {
            let divide = firstValue / secondValue;
            divide();
            break;
        }
        case "%": {
            let modulo = firstValue % secondValue;
            modulo();
            break;
        }
    }
}



// Create the functions that populate the display when you click the number buttons. 
// You should be storing the 'display value' in a variable somewhere for use in the next step.
function display() {
    
}


// Calculates the answer when you click the Equal button
function solve() {

}


// Clears the display when you click the Clear button
function clearDisplay() {

}


// Deletes one value when you click the Delete button
function deleteValue() {

}