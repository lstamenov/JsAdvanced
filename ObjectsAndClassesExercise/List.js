class List {
    elements;
    size;

    constructor() {
        this.elements = [];
        this.size = this.elements.length;
    }

    add(number){
        this.elements.push(number);
        this.sort(this.elements);
        this.size++;
    }

    remove(index){
        if (index >= this.elements.length || index < 0){
            throw new Error('index out of bounds');
        }else {
            this.elements.splice(index, 1);
            this.sort(this.elements);
            this.size--;
        }
    }

    get(index){
        if (index >= this.elements.length || index < 0){
            throw new Error('index out of bounds');
        }else {
            return this.elements[index];
        }
    }

    sort(elements){
        elements.sort(function (a, b) {
           if (a < b){
               return -1;
           }else {
               return 1;
           }
        });
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list);
console.log(list.get(1));