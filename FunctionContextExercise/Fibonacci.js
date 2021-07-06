function Counter() {
    let lastNumber = 1;
    let currentNumber = 1;

    function IncreaseCounter() {
        let newNumber = lastNumber + currentNumber;
        lastNumber = currentNumber;
        currentNumber = newNumber;
        return newNumber;
    }

    return IncreaseCounter;
}

let f = Counter();
console.log(f());
console.log(f());
console.log(f());