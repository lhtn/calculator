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