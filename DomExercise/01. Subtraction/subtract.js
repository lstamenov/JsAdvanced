function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    console.log(firstNumber);
    let secondNumber = document.getElementById('secondNumber');
    console.log(secondNumber);
    let res = Number(firstNumber.value)
        - Number(secondNumber.value);
    let result = document.getElementById('result');
    result.innerHTML = String(res);
}