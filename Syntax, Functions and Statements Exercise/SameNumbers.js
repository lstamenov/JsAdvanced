let solve = (number) => {
    let isSame = true;
    let sameNumber = '';
    for (let i = 0; i < String(number).length; i++) {
        if (i === 0){
            sameNumber = String(number).charAt(i);
        }else {
            if (String(number).charAt(i) !== sameNumber){
                isSame = false;
                break;
            }
        }
    }
    isSame ? console.log('true') : console.log('false');
}

let getNumberDigitsSum = (number) => {
    let sum = 0;
    while (number > 0){
        sum += Math.floor(number % 10);
        number /= 10;
        number = Math.floor(number);
    }
    return sum;
}

solve(1234);
console.log(getNumberDigitsSum(1234));