class Juice {
    #name;
    #quantity;
    #bottles;

    constructor(name, quantity) {
        this.#name = name;
        this.#bottles = 0;
        this.setQuantity(quantity);
    }

    getName(){
        return this.#name;
    }

    getBottles(){
        return this.#bottles;
    }

    setQuantity(quantity){
        if (Number(quantity) >= 1000){
            while (quantity >= 1000){
                quantity -= 1000;
                this.#bottles++;
            }
        }
        this.#quantity = Number(quantity);
    }

    addQuantity(quantity){
        this.#quantity += Number(quantity);

        while (this.#quantity > 1000){
            this.#quantity -= 1000;
            this.#bottles++;
        }
    }

    static isSuchJuice(juiceName, juiceRepo){
        for (let i = 0; i < juiceRepo.length; i++) {
            if (juiceRepo[i].getName() === juiceName){
                return i;
            }
        }
        return undefined;
    }
}

let input = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'];

let getJuices = (input) => {
    let juiceRepo = [];

    for (let i = 0; i < input.length; i++) {
        let juiceData = input[i].split(" => ");
        if (Juice.isSuchJuice(juiceData[0], juiceRepo)){
            juiceRepo[Juice.isSuchJuice(juiceData[0], juiceRepo)].addQuantity(juiceData[1]);
        } else {
            juiceRepo.push(new Juice(juiceData[0], juiceData[1]));
        }
    }

    return juiceRepo;
}

let repo = getJuices(input);
for (let i = 0; i < repo.length; i++) {
    let juice = repo[i];
    if (juice.getBottles() > 0){
        console.log(`${juice.getName()} => ${juice.getBottles()}`);
    }
}