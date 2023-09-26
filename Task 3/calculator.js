let displayValue = '0';
let inputExpression = ''; // Track the input expression

function updateDisplay() {
    document.getElementById('input-expression').innerText = inputExpression;
    document.getElementById('output-value').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        inputExpression = displayValue; // Store the input expression
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        inputExpression = ''; // Clear the input expression on error
        updateDisplay();
    }
}
