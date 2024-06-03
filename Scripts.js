let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = false;
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (secondOperand) {
        displayValue = number.toString();
        secondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number.toString() : displayValue + number.toString();
    }
    updateDisplay();
}

function setOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator && secondOperand)  {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(firstOperand, inputValue, operator);
        displayValue = String(result);
        firstOperand = result;
    }

    secondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function performCalculation(first, second, operator) {
    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second;
    } else if (operator === '/') {
        return first / second;
    }
    return second;
}

function calculate() {
    const inputValue = parseFloat(displayValue);

    if (operator && secondOperand) {
        secondOperand = false;
        return;
    }

    if (firstOperand === null || operator === null) {
        return;
    }

    const result = performCalculation(firstOperand, inputValue, operator);
    displayValue = String(result);
    firstOperand = null;
    operator = null;
    updateDisplay();
}
