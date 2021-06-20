let getBiggestNumber = (array) => {
    let biggestElement = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (biggestElement < array[i][j]){
                biggestElement = array[i][j];
            }
        }
    }
    console.log(biggestElement);
}

getBiggestNumber([[20, 50, 10],
    [8, 33, 145]]);