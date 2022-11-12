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



// Create a new function that takes an operator and 2 numbers and calls one of the above functions
function operate(firstValue, secondValue, operator) {
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