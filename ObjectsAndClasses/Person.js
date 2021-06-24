class Person{
    #firstName
    #lastName
    #age
    #email

    constructor(firstName, lastName, age, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#email = email;
    }

    toString(){
        return `${this.#firstName} ${this.#lastName} (age: ${this.#age}, email: ${this.#email})`;
    }

     static getPersons() {
        let people = [];
        people.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"));
        people.push(new Person("Softuni"));
        people.push(new Person("John", "Simpson", 26));
        people.push(new Person("Peter", "Jackson", 52, "peter@yahoo.com"));

        return people;
    }
}

let persons = Person.getPersons();
for (const person of persons) {
    console.log(person.toString());
}
