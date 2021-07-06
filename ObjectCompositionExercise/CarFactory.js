let requirements = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelSize: 14 };

let getCar = (requirements) => {
    let {model, power, color, carriage, wheelSize} = requirements;


    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    let carriages = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: {type: 'coupe', color: '' }
    };

    let newCar = {
        model: model,
        engine : {},
        carriage: {},
        wheels: [],
    };

    let engine = {};

    if (power <= 90){
        engine = engines['smallEngine'];
    }else if (power > 90 && power < 200){
        engine = engine['normalEngine'];
    }else {
        engine = engine['monsterEngine'];
    }

    newCar.engine = engine;
    let newCarriage = carriages[carriage];
    newCarriage.color = color;
    newCar.carriage = newCarriage;
    if (wheelSize % 2 === 0){
        newCar.wheels = [wheelSize-1, wheelSize-1, wheelSize-1, wheelSize-1];
    }else {
        newCar.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    }

    return newCar;
}

console.log(getCar(requirements));