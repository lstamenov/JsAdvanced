let getSmallestNumbers = (array) => {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    array.forEach(n => {
        if (first > n){
            second = first;
            first = n;
        }else {
            if (second > n){
                second = n;
            }
        }
    })
    console.log(first + ' ' + second);
}

getSmallestNumbers([30, 15, 50, 5]);