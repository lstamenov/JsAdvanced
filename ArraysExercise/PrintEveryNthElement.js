let printEvery = (array) => {
    let n = array.pop();
    for (let i = 0; i < array.length; i++) {
        if (i % n === 0){
            console.log(array[i]);
        }
    }
}

printEvery(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);