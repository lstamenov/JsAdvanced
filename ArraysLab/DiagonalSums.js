let getDiagonalSums = (matrix) => {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        rightDiagonalSum += matrix[matrix.length - 1 - i][i];
    }

    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}
getDiagonalSums([[20, 40],
    [10, 60]]);