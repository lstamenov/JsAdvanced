let robot = () => {
    let nutrients = {
        carbs: 0,
        protein: 0,
        fat: 0,
        flavour: 0,
    };

    let manager = (arguments) => {
        let details = arguments.split(' ');

        function isEnoughNutrients(cook1) {
            let cookArguments = cook1.arguments;
            let values = [...cookArguments].map(Number);
            return (values[0] <= nutrients["carbs"] &&
                values[1] <= nutrients["protein"] && values[2] <= nutrients["fat"]
                && values[3] <= nutrients["flavour"]);
        }

        function prepareMeal(meal) {
            let cook = (carbs, protein, fat, flavour) => {
                if (isEnoughNutrients(cook)){
                    nutrients.carbs -= carbs;
                    nutrients.protein -= protein;
                    nutrients.fat -= fat;
                    nutrients.flavour -= flavour;
                    return 'Successful';
                }else {
                    return  'Fail';
                }
            }
            switch (meal){
                case 'apple':
                    cook(1, 0, 0, 2);
                    break;
                case 'lemonade':
                    cook(10, 0, 0, 20);
                    break;
                case 'burger':
                    cook(5, 0, 7, 3);
                    break;
                case 'eggs':
                    cook(0, 5, 1, 1);
                    break;
                case 'turkey':
                    cook(10, 10, 10, 10);
                    break;
            }
        }

        function restockNutrient(detail, number) {
            nutrients[detail] += number;
            return  'Success';
        }

        switch (details[0]){
            case 'prepare':
                let meal = details[1];
                return prepareMeal(meal);
            case 'restock':
                return  restockNutrient(details[1], Number(details[2]));
            case 'report':
                return console.log(`protein=${nutrients["protein"]} carbohydrate=${nutrients["carbs"]} fat=${nutrients["fat"]} flavour=${nutrients["flavour"]}`);
                ;
        }
    }

    return manager;
}

let managerRobot = robot();
managerRobot('restock carbs 10');
managerRobot('restock carbs 10');
