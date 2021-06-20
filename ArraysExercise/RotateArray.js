let rotate = (array) => {
    let n = array.pop();
    for (let i = 0; i < n; i++) {
        let val = String(array.pop());
        array.unshift(val);
    }
    console.log(array.join(' '));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']);