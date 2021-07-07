class Figure {
    units;
    defaultUnit;

    constructor() {
        this.units = ['m', 'cm', 'mm'];
        this.defaultUnit = this.units[1];
    }

    changeUnits(unit){
        this.defaultUnit = unit;
    }
}

class Rectangle extends Figure{
    width;
    height;

    constructor(width, height) {
        super();
        this.height = height;
        this.width = width;
    }

    get area(){
        let areaInCm = this.width * this.height;
        switch (this.defaultUnit){
            case 'cm':
                return areaInCm;
            case 'm':
                return areaInCm/100;
            case 'mm':
                return areaInCm * 10;
        }
    }
}

class Circle extends Figure{
    radius;

    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        switch (this.defaultUnit){
            case 'cm':
                return Math.PI * (this.radius ** 2);
            case 'm':
                return Math.PI * ((this.radius / 100) ** 2);
            case 'mm':
                return Math.PI * ((this.radius * 10) ** 2);
        }
    }
}
let rect = new Circle(5);
console.log(rect.area);
rect.changeUnits('m');
console.log(rect.area);
rect.changeUnits('mm');
console.log(rect.area);