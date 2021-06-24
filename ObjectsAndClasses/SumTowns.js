let input = ['Sofia','20','Varna','3','Sofia','5','Varna','4'];

function isSuchTown(townName, towns) {
     let town = towns.find(town => town.name === townName);
     if (town){
         return towns.indexOf(town);
     }else {
         return undefined;
     }
}

let getTownsIncome = (input) => {
    let towns = [];
    for (let i = 0; i < input.length - 1; i++) {
        let townIndex = isSuchTown(input[i], towns);
        if (towns[townIndex]){
            towns[townIndex]['income'] += Number(input[i + 1]);
        }else {
            let town = {
                'name' : input[i],
                'income' : Number(input[i + 1])
            };
            towns.push(town);
        }
        i++;
    }
    return towns;
}

console.log(getTownsIncome(input));