let adder = (number) => {
    let num = Number(number);

    return function (numAdder) {
        return num + numAdder;
    }
}

let add5 = adder(5);
console.log(add5(2));
console.log(add5(3));