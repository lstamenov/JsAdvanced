let printMessage = (speed) => {
    if (speed <= 20){
        console.log('speeding');
    }else if (speed > 20 && speed <= 40){
        console.log('excessive speeding');
    }else {
        console.log('reckless driving');
    }
}

let isSpeeding = (speed, area) => {
    switch (area) {
        case 'motorway':
            if (speed > 130) {
                printMessage(speed - 130);
            }
            break;
        case 'interstate':
            if (speed > 90) {
                printMessage(speed - 90);
            }
            break;
        case 'city':
            if (speed > 50) {
                printMessage(speed - 50);
            }
            break;
        case 'residential':
            if (speed > 20) {
                printMessage(speed - 20);
            }
            break;
    }
}
    isSpeeding(200, 'motorway');