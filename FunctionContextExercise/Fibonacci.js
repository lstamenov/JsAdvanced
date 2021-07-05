function getFibonator (){
    let lastTwoNumbers = [0, 1];
    let count = 0;

    function fibonacci() {
        if (count < 2) {
            console.log(lastTwoNumbers[count]);
            return lastTwoNumbers[this.count++];
        } else {
            let newNumber = lastTwoNumbers[0] + lastTwoNumbers[1];
            lastTwoNumbers[0] = lastTwoNumbers[1];
            lastTwoNumbers[1] = newNumber;
            count++;
            return newNumber;
        }
    }

    return fibonacci;
}

let fib = getFibonator;
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
