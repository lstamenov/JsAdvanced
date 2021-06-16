let calcArea = (radius) => {
    switch(typeof radius){
        case 'number': 
        let result = (radius ** 2) * Math.PI;
        console.log(result.toFixed(2)); break;
        default : console.log(`Can't calculate area with ${typeof radius}.`);
    }
}

calcArea(5);