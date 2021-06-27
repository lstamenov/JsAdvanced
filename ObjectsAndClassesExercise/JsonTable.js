let input = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'];

let getEmployees = (input) => {
    let employees = [];
    for (let i = 0; i < input.length; i++) {
        employees.push(JSON.parse(input[i]));
    }
    return employees;
}
let employees = getEmployees(input);

let getHTMLTable = (employees) => {
    let html = '<table>';
    for (let i = 0; i < employees.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += [employees[i].name];
        html += '</td>>';
        html += '<td>';
        html += [employees[i].position];
        html += '</td>>';
        html += '<td>';
        html += [employees[i].salary];
        html += '</td>>';
        html += '</tr>';
    }
    html += '</table>';

    return html;
}

console.log(getHTMLTable(employees));