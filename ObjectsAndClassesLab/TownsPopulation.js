let input = ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'];

function getTownIndex(towns, inputElement) {
    return towns.findIndex(town => town.name === inputElement);
}

let getTownsPopulation = (input) => {
    let data = input.map(row => row.split(' <-> '));
    let towns = [];
    for (let i = 0; i < data.length; i++) {
        let index = getTownIndex(towns, data[i][0]);
        if (index !== -1){
            towns[index].population += Number(data[i][1]);
        }else {
            towns.push({
                'name': data[i][0],
                'population': Number(data[i][1])
            });
        }
    }
    return towns;
}

console.log(getTownsPopulation(input));
