function solve() {
    let sudokuMatrix = [];
    let inputFields = document.getElementsByTagName('input');
    let fieldsCount = 0;
    for (let i = 0; i < 3; i++) {
        sudokuMatrix[i] = new Array(3);
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(inputFields[fieldsCount++]);
        }
        sudokuMatrix[i] = row;
        console.log(`${sudokuMatrix[i][0].value} ${sudokuMatrix[i][1].value} ${sudokuMatrix[i][2].value}`);
    }
}