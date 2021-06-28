class Stringer {
    #initialString;
    #string;
    #length;

    constructor(string, length) {
        this.#initialString = string;
        this.#string = string;
        this.#length = Number(length);
    }

    increase(length){
        this.#string = this.#string.replaceAll('.', '');
        for (let i = this.#length - 1; i < this.#length + length; i++) {
            this.#string += this.#initialString.charAt(i);
        }
        if (this.#string.length < this.#initialString.length){
            for (let i = this.#string.length; i < this.#initialString.length; i++) {
                this.#string += '.';
            }
        }
        this.#length += length;
    }

    decrease(length){
        if (length > this.#length){
            this.#string = '';
            for (let i = 0; i < this.#length; i++) {
                this.#string += '.';
            }
            this.#length = 0;
        }else {
            this.#string = this.#string.slice(0, this.#length - length);
            for (let i = this.#length - length; i < this.#length; i++) {
                this.#string += '.';
            }
            this.#length = this.#length - length;
        }
    }

    toString(){
        return this.#string;
    }
}

let str = new Stringer('Test', 5);
str.decrease(3);
console.log(str.toString());
str.increase(4);
console.log(str.toString());
