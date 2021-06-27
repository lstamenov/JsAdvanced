let input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];

function getProductIndex(cheapestProducts, product) {
    return  cheapestProducts.findIndex(p => p.product === product);
}

let getLowestPrices = (input) => {
    let townsAndProducts = input.map(row => row.split(" | ")).map(row => {
        return {
            'town': row[0],
            'product': row[1],
            'price': Number(row[2])
        }
    });

    let cheapestProducts = [];
    for (let i = 0; i < townsAndProducts.length; i++) {
        let productIndex = getProductIndex(cheapestProducts, townsAndProducts[i].product);
        if (productIndex !== -1){
            if (cheapestProducts[productIndex].price > townsAndProducts[i]){
                cheapestProducts[productIndex] = townsAndProducts[i];
            }
        }else {
            cheapestProducts.push(townsAndProducts[i]);
        }
    }

    console.log(cheapestProducts);
}

getLowestPrices(input);