let findEvenIndexes = (array) => {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0){
            result = result.concat(array[i] + ' ');
        }
    }
    return result;
}

console.log(findEvenIndexes(['20', '30', '40', '21', '33', '44']));