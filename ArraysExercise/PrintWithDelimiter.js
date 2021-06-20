let printWithDelimiter = (array) => {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}

printWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);