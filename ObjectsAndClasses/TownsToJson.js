let input = ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |' ,
    '| Beijing | 39.913818 | 116.363625 |'];

let toJson = (input) => {
    let data = input.
    map(row => row.split('|').filter(x => x !== '').map(x => x.trim()));
    let keys = data.shift();

    let towns = [];

    data.forEach(row => {
        let town = {};

        for (let i = 0; i < keys.length; i++) {
            if (Number(row[i])){
                town[keys[i]] = Number(Number(row[i]).toFixed(2));
            }else {
                town[keys[i]] = row[i];
            }
        }
        towns.push(town);
    })

    console.log(towns);
}

toJson(input);