String.prototype.ensureStart = function(str){
    if (!this.startsWith(str)){
        return str + this;
    }else {
        return this.toString();
    }
};

String.prototype.ensureEnd = function(str){
    if (!this.endsWith(str)){
        return this + str;
    }else {
        return this.toString();
    }
};

String.prototype.isEmpty = function () {
    return this === '';
}

String.prototype.truncate = function (n) {
    if (n > this.length) {
        return this;
    } else if (n < this.length) {
        let lastIndexOfWhiteSpace = this.lastIndexOf(' ');
        if (lastIndexOfWhiteSpace && lastIndexOfWhiteSpace !== -1) {
            let newString = this.substring(0, lastIndexOfWhiteSpace);
            if (newString.length + 3 > n) {
                let elipses = '';
                for (let i = lastIndexOfWhiteSpace; i < n; i++) {
                    elipses += '.';
                }
                return this + elipses;
            } else {
                return newString + '...';
            }
        } else {
            if (n > str) {
                let elipses = '';
                for (let i = 0; i < n; i++) {
                    elipses += '.';
                }
                return elipses;
            } else {
                let s = this.substring(0, (this.length - n) - 3);
                for (let i = s.length; i < n; i++) {
                    s += '.';
                }
                return s;
            }
        }
    }
}

Object.defineProperty(String, 'key', 'static');

let str = 'hello my string';
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
