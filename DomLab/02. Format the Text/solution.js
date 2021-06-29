function solve() {
    let inputStr = document.getElementById('input').innerText;
    let output = document.getElementById('output');

    let input = inputStr.split('.').filter((p) => p.length > 0);

    for (let i = 0; i < input.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (input[i + y]) {
                arr.push(input[i + y]);
            }
        }
        let paragraph = document.createElement("p");
        paragraph.innerHTML = arr.join('. ') + '.';
        output.appendChild(paragraph);
    }
}