let arguments = [2, 3, '**'];
let calc = (arguments) => {
    let firstNumber = arguments[0];
    let secondNumber = arguments[1];
    let mathSign = arguments[2];

    switch(mathSign){
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '*': return firstNumber * secondNumber;
        case '/': return firstNumber / secondNumber;
        case '%': return firstNumber % secondNumber;
        case '**': return firstNumber ** secondNumber;
    }
}

console.log(calc(arguments));