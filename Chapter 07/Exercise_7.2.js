class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    fullname () {
        return this.firstName + " " + this.lastName;
    }
};

let jeremiah = new Person ("Jeremiah", "Smith");
let Ethan = new Person ("Ethan", "Jackson");

console.log(jeremiah.fullname());
console.log(Ethan.fullname());

/* This exercise was really simple. I had to add a fullname function to the
previous class I made in exercise 7.1 and then use log to print out the result
of that function for two new people */