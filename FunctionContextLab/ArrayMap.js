let input = 'nums,(item)=> item * 2)';
function fun(x) {
    return x * 2;
}
function arrayMap(array, fun) {
    let reduce = array.reduce((a, x) => {
        a.push(fun(x));

        return a;
    }, []);

    return reduce;
}

let arrayMap1 = arrayMap([1, 2 ,3 ,4], (item) => item * 2);
console.log(arrayMap1);
