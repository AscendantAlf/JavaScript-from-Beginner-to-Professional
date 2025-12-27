class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let Alf = new Person ("Ascendant", "Alf");

let Jake = new Person ("Jacob", "Hastings");

console.log("Hello", Alf.firstName);
console.log("Hello", Jake.firstName);

/* exercise was really simple. make a class and create two objects
using the class and print the first name of each to the log */