let jsonAsString = '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]';
let html = '<table>';
let json = JSON.parse(jsonAsString);

html += `<tr><th></th><th>Price</th></tr>`;
for (const jsonElement of json) {
    html += `<tr><td>${jsonElement.Name}</td><td>${jsonElement.Price}</td></tr>`;
}
html += '</table>';
console.log(html);