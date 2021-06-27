class Rabbit {
    #name;
    #species;
    #isAvailable;

    constructor(name, species, isAvailable) {
        this.#name = name;
        this.#species = species;
        this.setIsAvailable(isAvailable);
    }

    setIsAvailable(isAvailable) {
        if (isAvailable !== undefined){
            this.#isAvailable = isAvailable;
        }else {
            this.#isAvailable = true;
        }
    }

    get name(){
        return this.#name;
    }

    get species(){
        return this.#species;
    }

    get isAvailable(){
        return this.#isAvailable;
    }
    
    toString(){
        return `Rabbit (${this.#species}): ${this.#name}`;
    }
}

class Cage {
    #name;
    #capacity;
    #data;

    constructor(name, capacity) {
        this.#name = name;
        this.#capacity = capacity;
        this.#data = [];
    }

// • getName()
    get name(){
        return this.#name;
    }
// • getCapacity()
    get capacity(){
        return this.#capacity;
    }
// • add(Rabbit rabbit) method - adds an entity to the data if there is room for it
    add(rabbit){
        if (this.#data.length < this.#capacity){
            this.#data.push(rabbit);
        }
    }
// • removeRabbit(String name) method - removes a rabbit by given name, if such exists, and returns boolean
    remove(name){
        for (let i = 0; i < this.#data.length; i++) {
            if (this.#data[i].name === name){
                this.#data.splice(i, 1);
                return true;
            }
        }
        return false;
    }
// • removeSpecies(String species) method - removes all rabbits by given species
    removeSpecies(species){
        for (let i = 0; i < this.#data.length; i++) {
            if (this.#data[i].species === species){
                this.#data.splice(i, 1);
                i--;
            }
        }
    }
// • sellRabbit(String name) method - sell (set its available property to false without removing it from the collection) the first rabbit with the given name, also return the rabbit
    sellRabbit(name){
        for (let i = 0; i < this.#data.length; i++) {
            if (this.#data[i].name === name){
                this.#data[i].setIsAvailable(false);
                return this.#data[i];
            }
        }
        return undefined;
    }
// • sellRabbitBySpecies(String species) method - sells and returns all rabbits from that species as a List
    sellRabbitBySpecies(species){
        let rabbits = [];
        for (let i = 0; i < this.#data.length; i++) {
            if (this.#data[i].species === species){
                this.#data[i].setIsAvailable(false);
                rabbits.push(this.#data[i]);
            }
        }
        return rabbits;
    }
// • count() - returns the number of rabbits
    count(){
        return this.#data.length;
    }
// • report() - returns a String in the following format, including only not sold rabbits:
    report(){
        console.log(`Rabbits available at ${this.#name}`)
        for (let i = 0; i < this.#data.length; i++) {
            console.log(this.#data[i].toString());
        }
    }

}

let rabbit1 = new Rabbit("Bun", "bunny", true);
let rabbit2 = new Rabbit("Bunny", "bunny", true);
let rabbit3 = new Rabbit("Bounce", "bunny", true);
console.log(rabbit1.name);
let cage = new Cage("Pets", 10);
cage.add(rabbit1);
cage.add(rabbit2);
cage.add(rabbit3);
cage.report();
console.log(cage.sellRabbit('Bun').isAvailable);