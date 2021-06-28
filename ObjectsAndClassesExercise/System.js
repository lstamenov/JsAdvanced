class Component {
    #component;
    #subcomponents;

    constructor(component, subcomponents) {
        this.#component = component;
        this.#subcomponents = [];
        this.addSubcomponent(subcomponents);
    }

    getComponent(){
        return this.#component;
    }

    getSubcomponents(){
        return this.#subcomponents;
    }

    addSubcomponent(subcomponent){
        this.#subcomponents.push(subcomponent);
    }

    toString(){
        let string = `|||${this.#component}`;
        for (let i = 0; i < this.#subcomponents.length; i++) {
            string += `\n||||${this.#subcomponents[i]}`;
        }
        return string;
    }
}

class System {
    #system;
    #components;

    constructor(system, component, subcomponent) {
        this.#system = system;
        this.#components = [];
        this.addComponent(component, subcomponent);
    }

    getSystem(){
        return this.#system;
    }

    getComponent(){
        return this.#components;
    }

    addComponent(component, subcomponent){
        if (this.#isSuchComponent(component) !== -1){
            this.#components[this.#isSuchComponent(component)].addSubcomponent(subcomponent);
        }else {
            this.#components.push(new Component(component, subcomponent));
        }
    }

    #isSuchComponent = (component) => {
        for (let i = 0; i < this.#components.length; i++) {
            if (this.#components[i].getComponent() === component){
                return i;
            }
        }
        return -1;
    }

    toString(){
        let string = `${this.#system}\n`;
        this.#components.sort(function (a, b) {
            if (a.getSubcomponents().length > b.getSubcomponents().length){
                return a;
            }else {
                return b;
            }
        });
        for (let i = 0; i < this.#components.length; i++) {
            string += `${this.#components[i].toString()}\n`;
        }
        return string;
    }

    static isSuchSystem(system, systems){
        for (let i = 0; i < systems.length; i++) {
            if (systems[i].getSystem() === system){
                return i;
            }
        }
        return -1;
    }
}

let input = ['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'];

let getSystems = (input) => {
    let systems = [];
    for (let i = 0; i < input.length; i++) {
        let system = input[i].split(" | ");
        if (System.isSuchSystem(system[0], systems) !== -1){
            systems[System.isSuchSystem(system[0], systems)].addComponent(system[1], system[2]);
        }else {
            systems.push(new System(system[0], system[1], system[2]));
        }
    }

    return systems;
}

let systems = getSystems(input);
systems.sort(function (a, b) {
    if (a.getComponent().length > b.getComponent().length){
        return -1;
    }else if (a.getComponent().length < b.getComponent().length){
        return 1;
    }else {
        if (a.getSystem() > b.getSystem()){
            return 1;
        }else {
            return -1;
        }
    }
});

for (let i = 0; i < systems.length; i++) {
    console.log(systems[i].toString());
}