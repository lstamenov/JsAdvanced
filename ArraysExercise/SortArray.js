function compare(a, b) {
    return a.length - b.length;
}

let sort = (array) => {
    array.sort(compare);
}

let array = ['alpha',
    'beta',
    'gamma'];
sort(array);

console.log(array);