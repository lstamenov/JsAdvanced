let input = ['Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'];

let getProducts = (input) => {
    let products = [];
    for (let i = 0; i < input.length; i++) {
        let obj = input[i].split(" : ");
        products.push({
            "product" : obj[0],
            "price" : obj[1]
        });
    }
    return products;
}

let sortProducts = (products) => {
    return products.sort(function (a, b) {
        if (a.product > b.product){
            return 1;
        }else {
            return -1;
        }
    });
}

let products = getProducts(input);
sortProducts(products);

let printProductsAlphabetical = (products) => {
    let currentLetter = products[0].product.charAt(0);
    console.log(currentLetter);
    for (let i = 0; i < products.length; i++) {
        if (currentLetter !== products[i].product.charAt(0)){
            currentLetter = products[i].product.charAt(0);
            console.log(currentLetter);
        }
        console.log(`  ${products[i].product}: ${products[i].price}`);
    }
}

printProductsAlphabetical(products);