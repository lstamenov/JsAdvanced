let printObject = (array) => {
    let arr = array;
    for (let i = 0; i < array.length - 1; i++) {
        console.log(`${arr[i]}: ${arr[i + 1]}`);
        i++;
    }
}

printObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);