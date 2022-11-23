let currentNum = "";
let previousNum = "";
let operator = "";
// let clearOnNextNum = false;
let result;

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");
const previousOutputScreen = document.querySelector(".previous-output");
const currentOutputScreen = document.querySelector(".current-output");


// Create functions for basic math operators
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}

function subtract(firstValue, secondValue) {
    return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
    return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
    return firstValue / secondValue;
}

function modulo (firstValue, secondValue) {
    return firstValue - (Math.floor(firstValue / secondValue) * secondValue);
}


// Calculates the answer when you click the Equals button
function compute(previousNum, currentNum, operator) {
    const firstValue = Number(previousNum);
    const secondValue = Number(currentNum);
    try {
        switch(operator) {
            case "+":
                result = add(firstValue, secondValue);
                break;
            case "-": 
                result = subtract(firstValue, secondValue);
                break;
            case "*": 
                result = multiply(firstValue, secondValue);
                break;
            case "/": 
                result = divide(firstValue, secondValue);
                break;
            case "%": 
                result = modulo(firstValue, secondValue);
                break;
        }
    }
    catch(e) {
        currentOutputScreen.textContent = ("There's an error: ", e);
    };
    updateScreen();
}


function updateScreen() {
    currentNum = result;
    currentOutputScreen.textContent = result;
    // clearOnNextNum = true;
}


numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        appendNumber(e.target.textContent);
    });
});


// Add operator to screen
operationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        appendOperator(e.target.textContent);
    });
});


equalsButton.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        compute(previousNum, currentNum, operator);
    }
});


clearButton.addEventListener("click", clearScreen);


deleteButton.addEventListener("click", deleteValue);


// Add number to screen
function appendNumber(num) {
    // if (clearOnNextNum) {
    //     clearOnNextNum = false;
    //     clearScreen();
    // }
    if (currentNum.length <= 18) {
        currentNum += num;
        currentOutputScreen.textContent = currentNum;
    }
}


// Add operator to screen
function appendOperator(op) {
    // clearOnNextNum = false;
    if (currentNum != "") {
        if (previousNum === "") {
            operator = op;
            previousNum = currentNum;
            currentNum = "";
            previousOutputScreen.textContent = previousNum + " " + operator;
            currentOutputScreen.textContent = "";
        } else if (previousNum != "") {
            operator = op;
            previousNum = previousNum + operator + currentNum;
            currentNum = "";
            previousOutputScreen.textContent = previousNum + " " + operator + " " + currentNum;
        }
    }
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

