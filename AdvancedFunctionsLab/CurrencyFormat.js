let formatter = (value) => {
     let separator = ',';
     let symbol = '$';
     let symbolFirst = true;

    function currencyFormatter(value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2,2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }

    return currencyFormatter(value);
    ;
}

let format = formatter;
console.log(format(5345));
console.log(format(10));