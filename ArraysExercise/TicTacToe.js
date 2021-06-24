function fillBoard() {
    let matrix = new Array(3);
    for (let i = 0; i < 3; i++) {
        matrix[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = 'false';
        }
    }
    return matrix;
}

let board = fillBoard();

let index = 1;
let places = ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"];
let isAWinner = false;

function chekForWinner(board) {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] !== 'false') {
        return true;
    }
    if (board[1][0] === board[1][1] && board[0][1] === board[1][2] && board[1][2] !== 'false') {
        return true;
    }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] !== 'false') {
        return true;
    }

    if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] !== 'false') {
        return true;
    }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] !== 'false') {
        return true;
    }
    if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] !== 'false') {
        return true;
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== 'false'){
        return true;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== 'false'){
        return true;
    }
}

for (let i = 0; i < places.length; i++) {
    let row = Number(places[i].charAt(0));
    let col = Number(places[i].charAt(2));

    if (board[row][col] === 'false'){
        board[row][col] = index++ % 2 === 0 ? '0' : 'X';
    }else {
        console.log("This place is already taken. Please choose another!");
        let count = 1;
        let isPlaceTaken = false;
        while (!isPlaceTaken){
            row = Number(places[i + count++].charAt(0));
            col = Number(places[i  + count++].charAt(2));

            if (board[row][col] === 'false'){
                board[row][col] = index % 2 === 0 ? 'X' : '0';
                isPlaceTaken = true;
            }
        }
    }
    if (chekForWinner(board)){
        isAWinner = true;
    }
    if (isAWinner){
        break;
    }
}

for (let i = 0; i < 3; i++) {
    console.log(board[i][0] + " " + board[i][1] + " " + board[i][2]);
}
