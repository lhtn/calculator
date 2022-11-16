let currentNum = "";
let previousNum = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");
const previousOutputScreen = document.querySelector(".previous-output");
const currentOutputScreen = document.querySelector(".current-output");


numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        handleNumber(event.target.textContent);
    })
});


function handleNumber(number) {
    currentNum += number;
    currentOutputScreen.textContent = currentNum;
}


operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Operation button clicked");
    })
});

clearButton.addEventListener("click", () => {
    clearScreen();
});

deleteButton.addEventListener("click", () => {
    deleteValue();
});

equalsButton.addEventListener("click", () => {
    compute();
    updateScreen();
});



// Clears the display when you click the Clear button
function clearScreen() {
    
}


// Deletes one value when you click the Delete button
function deleteValue() {

}


// Append numbers on output screen
function appendNumber(number) {

}


// Show operation on output screen
function chooseOperation(operation) {

}


// Create the functions that populate the display when you click the number buttons. 
function updateScreen() {

}


// Create functions for basic math operators
function add(firstValue, secondValue) {
    return (firstValue + secondValue);
}

function subtract(firstValue, secondValue) {
    return (firstValue - secondValue);
}

function multiply(firstValue, secondValue) {
    return (firstValue * secondValue);
}

function divide(firstValue, secondValue) {
    return (firstValue / secondValue);
}

function modulo (firstValue, secondValue) {
    return (firstValue % secondValue);
}


// Calculates the answer when you click the Equal button
function compute(firstValue, secondValue, operator) {
    switch(operator) {
        case "+": 
            return add(firstValue, secondValue);
            break;
        case "-": 
            return subtract(firstValue, secondValue);
            break;
        case "*": 
            return multiply(firstValue, secondValue);
            break;
        case "/": 
            return divide(firstValue, secondValue);
            break;
        case "%": 
            return modulo(firstValue, secondValue);
            break;
    }
}