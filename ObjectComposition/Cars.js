let carsFactory = () => {
    let cars = {};

    return (input) => {
        let data = input.map(x => x.split(' '));
        for (let i = 0; i < data.length; i++) {
            let command = data[i][0];
            let carName = data[i][1];
            switch (command) {
                case 'create':
                    if (data[i].length === 2) {
                        cars[carName] = {};
                    } else {
                        cars[carName] = Object.assign(cars[data[i][3]]);
                    }
                    break;
                case 'set':
                    console.log(cars[carName])
                    console.log(data[i][2]);
                    console.log(data[i][3]);
                    cars[carName][data[i][2]] = data[i][3];
                    break;
                case 'print':
                    console.log(cars[carName]);
                    break;
            }
        }
    };
}

let cars = carsFactory();
let input = ['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'];
cars(input);