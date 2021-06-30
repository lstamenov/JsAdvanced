function solve() {
    let containerElement = document.getElementById('container');
    let convertButton = containerElement.lastChild.previousSibling;

    console.log(convertButton);

    convertButton.addEventListener('click', convert);

    function convert() {
        let convertToElement = document.getElementById('selectMenuTo');
        let formatToConvert = convertToElement.value;

        console.log(formatToConvert);

        let inputNumberElement = document.getElementById('input');
        let resultElement = document.getElementById('result');
        resultElement.value = '';

        let numberToConvert = Number(inputNumberElement.value);
        console.log(numberToConvert);

        if (numberToConvert){
            let binaryRepresentation = '';
            if (formatToConvert === 'binary'){
                while (numberToConvert > 0){
                    binaryRepresentation += numberToConvert % 2;
                    numberToConvert = Math.floor(numberToConvert /= 2);
                    console.log(binaryRepresentation);
                }
            }else {
                while (numberToConvert > 0){
                    binaryRepresentation += numberToConvert % 16;
                    numberToConvert = Math.floor(numberToConvert /= 2);
                }
            }
            resultElement.value = binaryRepresentation;
        }
    }

}