let sumNumbers = (first, second) => {
    let sum = 0;
    for(let i = first; i <= second; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNumbers(1, 5));