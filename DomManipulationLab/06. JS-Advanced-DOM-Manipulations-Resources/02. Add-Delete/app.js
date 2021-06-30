function addItem() {
    let inputElement = document.getElementById('newText');
    let itemsElement = document.getElementById('items');

    let newItem = document.createElement('li');
    newItem.innerHTML += `${inputElement.value} <a>[DELETE]</a>`;
    console.log(newItem.firstElementChild);
    newItem.addEventListener('click', function (e) {
        let deleteButton = e.target;
        if (deleteButton.innerHTML === '[DELETE]'){
            newItem.remove();
        }
    })
    itemsElement.appendChild(newItem);
}