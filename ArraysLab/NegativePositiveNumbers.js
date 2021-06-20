let printNegativesFirst = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0){
            result.unshift(array[i]);
        }else {
            result.push(array[i]);
        }
    }
    return result;
}

let print = (array) => {
    array.forEach(x => console.log(x));
}

print(printNegativesFirst([3, -2, 0, -1]));