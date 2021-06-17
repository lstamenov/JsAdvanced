let getLength = (first, second, third) => {
    let sum = first.length + second.length + third.length;
    console.log(sum);
    console.log(Math.round(sum / 3));
}

getLength('pasta', '5', '22.3');