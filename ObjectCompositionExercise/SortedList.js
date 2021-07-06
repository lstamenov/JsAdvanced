let sortedList = () => {
    let elements = [];
    let compare = (a, b) => {
        if (a > b){
            return 1;
        }else {
            return -1;
        }
    };

    let isValidIndex = (index) => {
        return index >= 0 && index < elements.length;
    }

    return {
        add: (number) => {
            elements.push(number);
            elements.sort(compare);
        },
        remove: (index) => {
            if (isValidIndex(index)) {
                elements.splice(index, 1);
            } else {
                console.error('index out of bounds');
            }
        },
        get: (index) => {
            if (isValidIndex(index)) {
                return elements[index];
            } else {
                console.error('index out of bounds');
            }
        },

        size: () => {
            return elements.length;
        },

        toString: () => {
            return elements;
        }
    };
}

let customList = sortedList();
customList.add(2);
customList.add(29);
customList.add(0);
console.log(customList.toString());

customList.remove(0);
console.log(customList.toString());

console.log(customList.size());