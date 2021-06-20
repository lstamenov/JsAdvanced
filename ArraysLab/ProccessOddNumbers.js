let getOddPositionsNumbers = (array) => {
    let oddIndexesNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0){
            oddIndexesNumbers.unshift(array[i] * 2);
        }
    }
    console.log(oddIndexesNumbers.join(' '));
}

getOddPositionsNumbers([10, 15, 20, 25]);