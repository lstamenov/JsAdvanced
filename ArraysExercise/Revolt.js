let fillGround = (rows, cols, symbols) => {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        let row = new Array(cols);
        let word = symbols[i];
        for (let j = 0; j < word.length; j++) {
            row[j] = word.charAt(j);
        }
        matrix[i] = row;
    }
    return matrix;
}

let getPlayerPosition = (ground) => {
    for (let i = 0; i < ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if (ground[i][j] === 'f'){
                return [i, j];
            }
        }
    }
}

let getFinalPosition = (ground) => {
    for (let i = 0; i < ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if (ground[i][j] === 'F'){
                return [i, j];
            }
        }
    }
}

let movePlayer = (pRow, pCol, rowMod, colMod, ground) => {
    ground[pRow][pCol] = '-';
    pRow += rowMod;
    pCol += colMod;

    if (ground[pRow][pCol] === 'B'){
        pRow += rowMod;
        pCol += colMod;
        if (pRow < ground.length && pRow >= 0
        && pCol < ground[pRow - rowMod].length && pCol >= 0){
            ground[pRow][pCol] = 'f';
        }
    }else {
        if (ground[pRow][pCol] === 'T'){
            ground[pRow - rowMod][pCol - colMod] = 'f';
        }else {
            ground[pRow][pCol] = 'f';
        }
    }
}
let rows = 4;
let cols = 3;

let symbols = ['----', '-f-B', '--T-', '---F'];

let ground = fillGround(rows, cols, symbols);

let directions = ['up', 'up','left'];

let index = 0;
let isInside = true;
let isInFinalPosition = false;

let finalRow = getFinalPosition(ground)[0];
let finalCol = getFinalPosition(ground)[1];

let willPlayerBeInside = (playerRow, playerCol, direction, ground) => {
    switch (direction){
        case "up":
            return playerRow - 1 >= 0;
        case "down":
            return playerRow + 1 < ground.length;
        case "right":
            return playerCol + 1 < ground[playerRow].length;
        case "left":
            return playerCol - 1 >= 0;
    }
}

while (index < directions.length && isInside && !isInFinalPosition){
    let direction = directions[index++];

    let playerPosition = getPlayerPosition(ground);

    let playerRow = playerPosition[0];
    let playerCol = playerPosition[1];

    if (willPlayerBeInside(playerRow, playerCol, direction, ground)){
        switch (direction){
            case 'up':
                movePlayer(playerRow, playerCol, -1, 0, ground);
                break;
            case 'down':
                movePlayer(playerRow, playerCol, 1, 0, ground);
                break;
            case 'right':
                movePlayer(playerRow, playerCol, 0, 1, ground);
                break;
            case 'left':
                movePlayer(playerRow, playerCol, 0, -1, ground);
                break;
        }
    }else {
        ground[playerRow][playerCol] = '-';
    }

    playerPosition = getPlayerPosition(ground);
    if (playerPosition === undefined){
        isInside = false;
    }else {
        if (playerPosition[0] === finalRow && playerPosition[1] === finalCol){
            isInFinalPosition = true;
        }
    }
}
let result = isInFinalPosition ? 'Player won!' : 'Player lost!';
console.log(result);

let printGround = (ground) => {
    for (const row of ground) {
        console.log(row);
    }
}

printGround(ground);








