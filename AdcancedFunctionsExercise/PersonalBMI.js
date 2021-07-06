let input = ['Peter', '29', '75', '182'];

let getBMI = (input) => {
    let name = input[0];

    let age = Number(input[1]);
    let weight = Number(input[2]);
    let height = Number(input[3]);

    let bmi = () => weight / height ** 2;

    let personInfo = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: bmi(weight, height),
    };

    let getStatus = (bmi) => {
        if (bmi(weight, height) < 25 && bmi(weight, height) > 18.5){
            personInfo.status = 'normal';
        }else {
            personInfo.status = 'obese';
            personInfo.recomendation = 'admission required';
        }
    }

    return personInfo;
}

let person = getBMI(input);
console.log(person);