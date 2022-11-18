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
        appendNumber(event.target.textContent);
    })
});

operationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        appendOperator(event.target.textContent);
    })
});

clearButton.addEventListener("click", () => {
    clearScreen();
});

deleteButton.addEventListener("click", () => {
    deleteValue();
});

equalsButton.addEventListener("click", () => {

});


// Add number to screen
function appendNumber(num) {
    currentNum += num;
    currentOutputScreen.textContent = currentNum;
}

// Add operator to screen
function appendOperator(operator) {
    previousNum = currentNum;
    currentNum = "";
    previousOutputScreen.textContent = previousNum + operator;
    currentOutputScreen.textContent = "";
}

// Clears the display when you click the Clear button
function clearScreen() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentOutputScreen.textContent = "";
    previousOutputScreen.textContent = "";
}

// Deletes one value when you click the Delete button
function deleteValue() {
    currentNum = currentNum.slice(0, -1);
    currentOutputScreen.textContent = currentOutputScreen.textContent.slice(0, -1);
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
        case "-": 
            return subtract(firstValue, secondValue);
        case "*": 
            return multiply(firstValue, secondValue);
        case "/": 
            return divide(firstValue, secondValue);
        case "%": 
            return modulo(firstValue, secondValue);
    }
}