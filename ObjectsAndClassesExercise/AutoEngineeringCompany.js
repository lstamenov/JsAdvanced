class Model {
    #model;
    #producedCars;

    constructor(model, producedCars) {
        this.#model = model;
        this.#producedCars = producedCars;
    }

    getModel(){
        return this.#model;
    }

    getCars(){
        return this.#producedCars;
    }

    toString(){
        return `###${this.#model} -> ${this.#producedCars}`;
    }

    addCars(cars){
        this.#producedCars += cars;
    }
}

class Car {
    #brand;
    #models;

    constructor(brand, model, cars) {
        this.#brand = brand;
        this.#models = [];
        this.#models.push(new Model(model, cars));
    }

    getModel(){
        return this.#models;
    }

    getBrand(){
        return this.#brand;
    }

    addCars(model, cars){
        for (let i = 0; i < this.#models.length; i++) {
            if (this.#models[i].getModel() === model){
                this.#models[i].addCars(cars);
            }
        }
    }

    addModel(model, cars){
        this.#models.push(new Model(model, cars));
    }

    toString(){
        return `${this.#brand}
        ${this.#models.toString()};`
    }

    static isSuchModel(cars, model){
        for (let i = 0; i < cars.length; i++) {
            for (let j = 0; j < cars[i].getModel().length; j++) {
                if (cars[i].getModel()[j].getModel() === model){
                    return true;
                }
            }
        }
        return false;
    }

    static isSuchBrand(cars, brand){
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].getBrand() === brand){
                return i;
            }
        }
        return -1;
    }
}

let input = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'];

let getCars = (input) => {
    let cars = [];
    for (let i = 0; i < input.length; i++) {
        let car = input[i].split(" | ");
        if (Car.isSuchBrand(cars, car[0]) !== -1){
            if (Car.isSuchModel(cars, car[1])){
                cars[Car.isSuchBrand(cars, car[0])].addCars(car[1], car[2]);
            }else {
                cars[Car.isSuchBrand(cars, car[0])].addModel(car[1], car[2]);
            }
        }else {
            cars.push(new Car(car[0], car[1], car[2]));
        }
    }

    return cars;
}

let cars = getCars(input);

let printCars = (cars) => {
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i].getBrand());
        for (let j = 0; j < cars[i].getModel().length; j++) {
            console.log(cars[i].getModel()[j].toString());
        }
    }
}

printCars(cars);