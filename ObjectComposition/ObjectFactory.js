let createObject = (input) => {
    let object = {};
    for (let i = 0; i < input.length; i++) {
        Object.assign(object, input[i]);
    }
    return object;
}

let object = createObject([{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]);
console.log(object);