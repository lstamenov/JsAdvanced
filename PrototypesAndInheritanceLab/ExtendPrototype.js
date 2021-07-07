function extendPrototype(inputClass) {
    inputClass.prototype.species = 'assd';
    inputClass.prototype.toSpeciesString = function () {
        return `I am ${this.species}. ${this.toString()}`;
    }
}

extendPrototype(String);

let str = 'asdaa';
let species = str.species;
let toStr = str.toSpeciesString();
console.log(str)
console.log(species)
console.log(toStr);