let squareSize = 4;
let input = ['P---' ,'Mark', '-l-y' ,'--e-'];

let fillShape = (input, size) => {
    let matrix = new Array(size);
    for (let i = 0; i < size; i++) {
        matrix[i] = input[i].split('');
    }
    return matrix;
}
let shape = fillShape(input, squareSize);

let directions = ['right', 'right', 'right','end'];
let directionsIndex = 0;

let initialString = 'Hello';
let wormString = initialString;

function getWormPosition(shape) {
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape.length; j++) {
            if (shape[i][j] === 'P'){
                return [i, j];
            }
        }
    }
}

let moveWorm = (rowModifier, colModifier, wormRow, wormCol, shape) => {
    shape[wormRow][wormCol] = '-';
    let element = shape[wormRow + rowModifier][wormCol + colModifier];
    if (element !== '-'){
        shape[wormRow + rowModifier][wormCol + colModifier] = 'P';
        return element;
    }else {
        shape[wormRow + rowModifier][wormCol + colModifier] = 'P';
        return '';
    }
}

while (directionsIndex < directions.length){
    let direction = directions[directionsIndex++];

    let wormRow = getWormPosition(shape)[0];
    let wormCol = getWormPosition(shape)[1];


    switch (direction){
        case 'up':
            if (wormRow > 0){
                wormString += moveWorm(-1, 0,wormRow, wormCol, shape);
            }else {
                wormString = wormString.slice(0, wormString.length - 1);
            }
            break;
        case 'down':
            if (wormRow < shape.length - 1){
                wormString += moveWorm(1, 0,wormRow, wormCol, shape);
            }else {
                wormString = wormString.slice(0, wormString.length - 1);
            }
            break;
        case 'right':
            if (wormCol < shape.length - 1){
                wormString += moveWorm(0, 1,wormRow, wormCol, shape);
            }else {
                wormString = wormString.slice(0, wormString.length - 1);
            }
            break;
        case 'left':
            if (wormCol > 0){
                wormString += moveWorm(0, -1, wormRow, wormCol, shape);
            }else {
                wormString = wormString.slice(0, wormString.length - 1);
            }
            break;
    }
}

console.log(wormString);
