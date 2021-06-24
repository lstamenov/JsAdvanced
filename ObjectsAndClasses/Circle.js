class Circle{
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    get diameter(){
        return this.#radius * 2;
    }

    set diameter(diameter){
        this.#radius = diameter / 2;
    }

    getArea(){
        return  Math.PI * (Math.pow(this.#radius, 2));
    }
}

let circle = new Circle(1);
console.log(circle.getArea());