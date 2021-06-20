let getSequence = (length, numberOfElements) => {
    let resultArray = [];
    for (let i = 0; i < length; i++) {
        if (i === 0){
            resultArray.push(1);
        }else {
            resultArray.push(getSum(i - 1, resultArray, numberOfElements));
        }
    }

    console.log(resultArray.join(' '));
}

let getSum = (index, array, numberOfElements) => {
    let sum = 0;
    if (numberOfElements > index + 1){
        for (let i = index; i >= 0 ; i--) {
            sum += array[i];
        }
    }else {
        for (let i = index; i >= index + 1 - numberOfElements; i--) {
            sum += array[i];
        }
    }
    return sum;
}

getSequence(6, 3);