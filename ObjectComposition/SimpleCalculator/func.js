let calculator = {
    firstNumber: document.getElementById('num1'),
    secondNumber: document.getElementById('num2'),
    result: document.getElementById('result'),
    add: () => {
        calculator.result.value = Number(calculator.firstNumber.value) + Number(calculator.secondNumber.value);
    },
    subtract: () => {
        calculator.result.value = Number(calculator.firstNumber.value) - Number(calculator.secondNumber.value);
    }
}
let sumButtonElement = document.getElementById('sumButton');
let subtractButtonElement = document.getElementById('subtractButton');

sumButtonElement.addEventListener('click', calculator.add);
subtractButtonElement.addEventListener('click', calculator.subtract);