class Person {
    #name = 'Peter';
    #age  = 22;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get age(){
        return this.#age;
    }
}


let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';
let obj = JSON.parse(data);
console.log(JSON.stringify(obj));