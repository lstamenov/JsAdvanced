class Person {
    firstName;
    lastName;
    fullName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = `${firstName} ${lastName}`;
    }

    set firstName(name){
        this.firstName = name;
        let newFullName = this.fullName.split(' ');
        newFullName[0] = name;
        this.fullName = newFullName.join(' ');
    }

    set lastName(name){
        this.lastName = name;
        let newFullName = this.fullName.split(' ');
        newFullName[1] = name;
        this.fullName = newFullName.join(' ');
    }

    set fullName(fullName){
        this.fullName = fullName;
        let newNames = fullName.split(' ');
        this.firstName = newNames[0];
        this.lastName = newNames[1];
    }

    get firstName(){
        return this.firstName;
    }

    get lastName(){
        return this.lastName;
    }

    get fullName() {
        return this.fullName;
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
