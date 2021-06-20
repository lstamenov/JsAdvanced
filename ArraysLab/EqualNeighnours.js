let getEqualNeighboursCount = (matrix) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i < matrix.length - 1){
                if (matrix[i][j] === matrix[i + 1][j]){
                    count++;
                }
            }
            if (j < matrix.length - 1){
                if (matrix[i][j] === matrix[i][j + 1]){
                    count++;
                }
            }
        }
    }
    console.log(count);
}

getEqualNeighboursCount([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);