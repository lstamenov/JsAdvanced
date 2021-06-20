let getSequence = (array) => {
    let biggestNumber = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggestNumber){
            biggestNumber = array[i];
            console.log(biggestNumber);
        }
    }
}

getSequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);