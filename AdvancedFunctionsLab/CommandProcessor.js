let solution = () => {
    let string = '';

    let modifier = () => {
        return {
            append: function append(str) {
                string += str;
            },
            removeStart: function removeStart(count) {
                string = string.substring(count);
            },
            removeEnd: function (count) {
                string = string.substring(0, string.length - count);
            },
            print: function (){
                console.log(string);
            }
        };
    }
    return modifier;
}

let mod = solution();
mod().append('hello');
mod().append(' world');