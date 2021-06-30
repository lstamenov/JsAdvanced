function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listItems = document.getElementById('items');

    let newListItem = document.createElement('li');
    newListItem.innerHTML = inputElement.value;
    listItems.appendChild(newListItem);
    inputElement.value = '';
}