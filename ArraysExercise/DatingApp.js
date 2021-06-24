let males = [3, 0, 3, 6, 9, 0, 12];
let females = [12, 9, 6, 1, 2, 3, 15, 13, 4];

let countMatches = 0;

while (males.length > 0 && females.length > 0){
    let female = females[0];
    let male = males[males.length - 1];

    if (male % 25 === 0 && male !== 0){
        males.pop();
        males.pop();
    }else if (female % 25 === 0 && female !== 0){
        females.shift();
        females.shift();
    }

    if (female <= 0){
        females.shift();
    }else if (male <= 0){
        males.pop();
    }

    if (male % 25 !== 0 && male >= 0
    && female % 25 !== 0 && female >= 0){
        if (male === female){
            countMatches++;
            males.pop();
        }else {
            males[males.length - 1] -= 2;
        }
        females.shift();
    }
}

console.log(`Matches: ${countMatches}`);
console.log(males.length > 0 ? males : 'none');
console.log(females.length > 0 ? females : 'none');
