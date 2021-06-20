let calculateMoney = (fruit, grams, price) => {
    let calcedPrice = (grams / 1000) * price;
    console.log(`I need ${calcedPrice} to buy ${grams/1000} kilograms ${fruit}.`);
}

calculateMoney('orange', 2500, 1.80);