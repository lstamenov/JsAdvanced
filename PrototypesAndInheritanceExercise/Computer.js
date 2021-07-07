class Manufacturer {
    manufacturer;

    constructor(manufacturer) {
        this.manufacturer = manufacturer;
    }
}

class Keyboard extends Manufacturer{
    responseTime;

    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Monitor extends Manufacturer{
    width;
    height;

    constructor(manufacturer, width, height) {
        super(manufacturer);
        this.width = width;
        this.height = height;
    }
}

class Battery extends Manufacturer {
    expectedLife;

    constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = expectedLife;
    }
}

class Computer extends Manufacturer{
    processorSpeed;
    ram;
    hardDiskSpace;


    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer){
            throw new Error('Cannot instantiate abstract class');
        }
        super(manufacturer);
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer {
    weight;
    color;
    battery;


    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.setBattery(battery);
    }

    get battery(){
        return this.battery;
    }

    setBattery(battery){
        if (battery instanceof Battery){
            this.battery = battery;
        }
    }
}

class Desktop extends Computer{
    keyboard;
    monitor;


    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.setKeyboard(keyboard);
        this.setMonitor(monitor);
    }

    setKeyboard(keyboard){
        if (keyboard instanceof Keyboard){
            this.keyboard = keyboard;
        }
    }

    setMonitor(monitor){
        if (monitor instanceof Monitor){
            this.monitor = monitor;
        }
    }
}