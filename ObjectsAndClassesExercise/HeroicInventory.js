class Hero {

    name;
    level;
    items;

    constructor(name, level, items) {
        this.name = name;
        this.level = level;
        this.items = items;
    }

    toString(){
        return `"name":${this.name}, "level":${this.level}, "items":${this.items}`;
    }
}


let input = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'];

let getHeroes = (input) => {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let rawObject = input[i].split(" / ");
        heroes.push(new Hero(rawObject[0], rawObject[1], rawObject[2].split(", ")));
    }
    return heroes;
}
let heroes  = getHeroes(input);
console.log(heroes);