let getGreatestDivisor = (firstNum, secondNum) => {
    for (let i = Math.min(firstNum, secondNum); i > Number.MIN_VALUE; i--) {
        if (firstNum % i === 0 && secondNum % i === 0){
            console.log(i);
            break;
        }
    }
}

getGreatestDivisor(15, 5);