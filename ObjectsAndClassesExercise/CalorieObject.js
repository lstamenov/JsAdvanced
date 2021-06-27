let input = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

let getCalories = (input) => {
    let calories = {

    };

    for (let i = 0; i < input.length - 1; i++) {
        calories[input[i]] = Number(input[i + 1]);
        i++;
    }

    return calories;
}

console.log(JSON.stringify(getCalories(input)));