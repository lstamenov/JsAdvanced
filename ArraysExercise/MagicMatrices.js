function getRowSum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

let areRowsEqual = (matrix) => {
    let sum = getRowSum(matrix[0]);
    for (let i = 1; i < matrix.length; i++) {
        if (getRowSum(matrix[i]) !== sum){
            return false;
        }
    }
    return true;
}

console.log(areRowsEqual([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));