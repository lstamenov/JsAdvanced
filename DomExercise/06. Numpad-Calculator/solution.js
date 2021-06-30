function solve() {
    let keysElement = document.getElementsByClassName('keys')[0];
    let clearButton = document.getElementsByClassName('clear')[0];

    clearButton.addEventListener('click', clear);

    function clear() {
        let outputExpression = document.getElementById('expressionOutput');
        let outputResult = document.getElementById('resultOutput');
        outputExpression.innerHTML = '';
        outputResult.innerHTML = '';
    }

    keysElement.addEventListener('click', function (e) {
        let outputExpression = document.getElementById('expressionOutput');
        let outputResult = document.getElementById('resultOutput');

        let buttonClicked = e.target.value;

        if (buttonClicked === '='){
            let expression = outputExpression.innerHTML.split(' ');
            let leftOperand = Number(expression[0]);
            let operator = expression[1];
            let rightOperand = Number(expression[2]);

            switch (operator){
                case '/':
                    outputResult.innerHTML = String(leftOperand / rightOperand);
                    break;
                case '*':
                    outputResult.innerHTML = String(leftOperand * rightOperand);
                    break;
                case '-':
                    outputResult.innerHTML = String(leftOperand - rightOperand);
                    break;
                case '+':
                    outputResult.innerHTML = String(leftOperand + rightOperand);
                    break;
            }
        }else {
            switch (buttonClicked){
                case '/':
                case '*':
                case '-':
                case '+':
                   outputExpression.innerHTML += ` ${buttonClicked} `;
                   break;
                default:
                    outputExpression.innerHTML += `${buttonClicked}`;

            }
       }
    });
}