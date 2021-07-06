let add = (a) => {
    return  (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

let curry = add;

console.log(curry(1));