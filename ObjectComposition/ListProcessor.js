let listProcessor = () => {

    let list = {
        elements: [],
        add: (string) => {
            list.elements.push(string);
        },
        remove: (string) => {
            list.elements = list.elements.filter(e => e !== string);
        },
        print: () => {
            console.log(list.elements.join(','));
        }
    }

    function customList(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === 'print'){
                list.print();
            }else {
                let data = input[i].split(' ');
                let command = data[0];
                let value = data[1];

                if (command === 'add'){
                    list.add(value);
                }else {
                    list.remove(value);
                }
            }
        }
    }

    return customList;
}

let closure = listProcessor();
closure(['add hello', 'add again', 'remove hello', 'add again', 'print']);