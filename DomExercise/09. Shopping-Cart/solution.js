function solve() {
    let buttonElement = document.querySelector('.shopping-cart');
    let textAreaElement = document.getElementsByTagName('textarea')[0];

    let totalPrice = 0;
    let uniqueProducts = [];

    buttonElement.addEventListener('click', function (e) {
        let parent = e.target.parentElement;
        let prevParent = parent.previousElementSibling;
        let product = prevParent.firstChild.nextSibling.textContent;

        console.log(e.target.innerHTML);
        if (e.target.innerHTML.includes('Add')) {
            if (textAreaElement.innerHTML === '') {
                textAreaElement.innerHTML = product;
            } else {
                textAreaElement.innerHTML += `, ${product}`;
            }
            let priceParent = e.target.parentElement.nextElementSibling;
            totalPrice += Number(priceParent.firstChild.textContent);
            if (!uniqueProducts.includes(product)){
                uniqueProducts.push(product);
            }
        }
    });

    let checkoutButton = document.getElementsByClassName('checkout')[0];
    checkoutButton.addEventListener('click', function () {
        textAreaElement.innerHTML = `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
    });
}