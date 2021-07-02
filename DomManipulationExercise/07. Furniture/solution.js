function solve() {
    let buttons = document.getElementsByTagName('button');
    let generateButton = buttons[0];
    let buyButton = buttons[1];
    let tableElement = document.getElementsByTagName('tbody')[0];

    let generateItems = () => {
        let inputJSON = document.getElementsByTagName('textarea')[0];
        let jsonObject = inputJSON.value;
        let product = JSON.parse(jsonObject);
        let tableRow = document.createElement('tr');

        let imageData = document.createElement('td');
        let image = document.createElement('img');
        image.src = product.img;
        imageData.appendChild(image);

        let nameData = document.createElement('td');
        let name = document.createElement('p');
        name.innerHTML = product.name;
        nameData.appendChild(name);

        let priceData = document.createElement('td');
        let price = document.createElement('p');
        price.innerHTML = product.price;
        priceData.appendChild(price);

        let decorationFactorData = document.createElement('td');
        let decorationFactor = document.createElement('p');
        decorationFactor.innerHTML = product.decFactor;
        decorationFactorData.appendChild(decorationFactor);

        tableRow.appendChild(imageData);
        tableRow.appendChild(nameData);
        tableRow.appendChild(priceData);
        tableRow.appendChild(decorationFactorData);

        let markBoxData = document.createElement('td');
        let markBox = document.createElement('input');
        markBox.setAttribute('type', 'checkbox');
        markBox.addEventListener('click', addToCart);
        markBoxData.appendChild(markBox);
        tableRow.appendChild(markBoxData);


        tableElement.appendChild(tableRow);
        inputJSON.value = '';
    }

    generateButton.addEventListener('click', generateItems)

    let cart = [];
    let addToCart = (e) => {
        let tableRow = e.target.parentElement.parentElement;
        let tableDataProduct = tableRow.children[1];

        if (e.target.checked){
            cart.push(tableDataProduct.firstChild.textContent);
        }else {
            cart.forEach(p => {
                if (p === tableDataProduct.firstChild.textContent){
                    cart.splice(cart.indexOf(p), 1);
                }
            })
        }
        let textAreaElement = document.getElementsByTagName('textarea')[1];
        textAreaElement.value = cart.join(', ');
    }
}