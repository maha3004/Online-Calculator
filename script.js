// Get the display element
const display = document.getElementById('display');

// Get the button elements
const buttons = document.querySelectorAll('.buttons button');

// Define the calculator functions
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    modulo: (a, b) => a % b,
    square: (a) => a * a,
};

// Define the event listeners for the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'AC':
                display.value = '';
                break;
            case '=':
                const expression = display.value;
                const result = eval(expression);
                display.value = result;
                break;
            case '^2':
                const number = parseFloat(display.value);
                const squared = calculator.square(number);
                display.value = squared;
                break;
            default:
                display.value += value;
                break;
        }
    });
});