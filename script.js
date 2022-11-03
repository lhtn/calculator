// function add(a, b) {
//     console.log(a + b);
// }

// function subtract(a, b) {
//     console.log(a - b);
// }

// function multiply(a, b) {
//     console.log(a * b);
// }

// function divide(a, b) {
//     console.log(a / b);
// }

// function modulo (a, b) {
//     console.log(a % b);
// }

// Create a new function operate that takes an operator and 2 numbers and 
// then calls one of the above functions on the numbers.
function operate(a, b, c) {
    switch(c) {
        case "+": {
            let add = a + b;
            console.log(add);
            break;
        }
        case "-": {
            let subtract = a - b;
            console.log(subtract);
            break;
        }
        case "*": {
            multiply = a * b;
            console.log(multiply);
            break;
        }
        case "/": {
            let divide = a / b;
            console.log(divide);
            break;
        }
        case "%": {
            let modulo = a % b;
            console.log(modulo);
            break;
        }
    }
}

let doubleBtn = document.getElementById("double-btn");
let zeroBtn = document.getElementById("zero-btn");
let oneBtn = document.getElementById("one-btn");
let twoBtn = document.getElementById("two-btn");
let threeBtn = document.getElementById("three-btn");
let fourBtn = document.getElementById("four-btn");
let fiveBtn = document.getElementById("five-btn");
let sixBtn = document.getElementById("six-btn");
let sevenBtn = document.getElementById("seven-btn");
let eightBtn = document.getElementById("eight-btn");
let nineBtn = document.getElementById("nine-btn");
let dotBtn = document.getElementById("dot-btn");
let clearBtn = document.getElementById("clear-btn");
let moduloBtn = document.getElementById("modulo-btn");
let deleteBtn = document.getElementById("delete-btn");
let divideBtn = document.getElementById("divide-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let subtractBtn = document.getElementById("subtract-btn");
let addBtn = document.getElementById("add-btn");
let equalBtn = document.getElementById("equal-btn");
let display = document.getElementById("submit-section");


dotBtn.addEventListener("click", (event) => {
    display.textContent = ".";
});

doubleBtn.addEventListener("click", (event) => {
    display.textContent = "00";
});

zeroBtn.addEventListener("click", (event) => {
    display.textContent = "0";
});

oneBtn.addEventListener("click", (event) => {
    display.textContent = "1";
});

twoBtn.addEventListener("click", (event) => {
    display.textContent = "2";
});

threeBtn.addEventListener("click", (event) => {
    display.textContent = "3";
});

fourBtn.addEventListener("click", (event) => {
    display.textContent = "4";
});

fiveBtn.addEventListener("click", (event) => {
    display.textContent = "5";
});

sixBtn.addEventListener("click", (event) => {
    display.textContent = "6";
});

sevenBtn.addEventListener("click", (event) => {
    display.textContent = "7";
});

eightBtn.addEventListener("click", (event) => {
    display.textContent = "8";
});

nineBtn.addEventListener("click", (event) => {
    display.textContent = "9";
});
