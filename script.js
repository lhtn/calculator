const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");
const previousOutputScreen = document.querySelector(".previous-output");
const tempOutputScreen = document.querySelector(".temp-output");
const currentOutputScreen = document.querySelector(".current-output");

let previousNum = "";
let currentNum = "";
let operator = "";
let result = "";


// Add number to screen
numberButtons.forEach(number => {
    number.addEventListener("click", (e) => {
        if (currentNum.length <= 18) {
            currentNum += e.target.textContent;
            currentOutputScreen.textContent = currentNum;
        }
    });
});


// Add operator to screen
operationButtons.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if (previousNum === "" && currentNum === "") return;
        if (previousNum && currentNum && operator) {
            compute();
        } else {
            result = Number(currentNum);
        }
        handleNumAndOp(e.target.textContent);
        operator = e.target.textContent;
    });
});


function handleNumAndOp(value = "") {
    previousNum += currentNum + " " + value + " ";
    previousOutputScreen.textContent = previousNum;
    currentNum = "";
    currentOutputScreen.textContent = "";
    tempOutputScreen.textContent = result;
}


equalsButton.addEventListener("click", () => {
    if (previousNum === "" || currentNum === "") return;
    compute();
    handleNumAndOp();
    previousNum = "";
    currentNum = result;
    currentOutputScreen.textContent = result;
    tempOutputScreen.textContent = "";
});


// Clears the display when you click the Clear button
clearButton.addEventListener("click", () => {
    previousNum = "";
    currentNum = "";
    operator = "";
    result = "";
    previousOutputScreen.textContent = "";
    currentOutputScreen.textContent = "";
    tempOutputScreen.textContent = "";
});


// Deletes one value when you click the Delete button
deleteButton.addEventListener("click", () => {
    currentNum = currentNum.slice(0, -1);
    currentOutputScreen.textContent = currentOutputScreen.textContent.slice(0, -1);
});


// Calculates the answer when you click the Equals button
function compute() {
    result = Number(result);
    currentNum = Number(currentNum);
    try {
        switch(operator) {
            case "+":
                result = result + currentNum;
                break;
            case "-": 
                result = result - currentNum;
                break;
            case "X": 
                result = result * currentNum;
                break;
            case "/": 
                result = result / currentNum;
                break;
            case "%": 
                result = result - (Math.floor(result / currentNum) * currentNum);
                break;
        }
    }
    catch {
        currentOutputScreen.textContent = ("There's an error: ");
    };
}
