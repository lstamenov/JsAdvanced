function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.text = inputText.value;
    newOption.value = inputValue.value;

    let selectionElement = document.getElementById('menu');
    selectionElement.appendChild(newOption);

    inputText.value = '';
    inputValue.value = '';
}