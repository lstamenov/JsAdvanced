let operation = (commands) => {
    let numbers = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add'){
            numbers.push(i + 1);
        }else {
            numbers.pop();
        }
    }
    for (const number of numbers) {
        console.log(number);
    }
}

operation(['add',
    'add',
    'add',
    'add']);