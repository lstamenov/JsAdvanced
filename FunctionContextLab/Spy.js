function spy(obj, method) {
    let func = obj[method];
    obj['count'] = 0;

    obj[method] = function () {
        obj.count++;
        return func.call(this, arguments);
    }
}

spy(console, 'log');
console.log(console.count);
console.log(console.count);
console.log(console.count);
console.log(console.count);