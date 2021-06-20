let cook = (number, operation1, operation2, operation3, operation4, operation5) => {
    number = operate(number, operation1);
    console.log(number);
    number = operate(number, operation2);
    console.log(number);
    number = operate(number, operation3);
    console.log(number);
    number = operate(number, operation4);
    console.log(number);
    number = operate(number, operation5);
    console.log(number);
}

let operate = (number, operation) => {
    switch (operation){
        case 'chop':
            return number / 2;
        case 'dice':
            return Math.sqrt(number);
        case 'spice':
            return number + 1;
        case 'bake':
            return number * 3;
        case 'fillet':
            return number * 0.8;
    }
}

cook(32, 'chop', 'chop', 'chop', 'chop', 'chop');