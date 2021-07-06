let data = [{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }];

let criteria = 'gender-Female';

let getFilteredEmployees = (data , criteria) => {
    let criteriaArray = criteria.split('-');

    let filter = (employee) => employee[criteriaArray[0]] === criteriaArray[1];

    return data.filter(filter);
}

let printEmployees = (employees) => {
    for (let i = 0; i < employees.length; i++) {
        console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
    }
}

printEmployees(getFilteredEmployees(data, criteria));
