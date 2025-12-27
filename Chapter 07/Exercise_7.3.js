class Animal {
    constructor(name, sound, size) {
        this.name = name;
        this.sound = sound;
        this.size = size;
    }
    soundsLike () {
    console.log(this.name, this.sound) 
}
}

let Elephant = new Animal ("Indian Elephant", "crass", "giant");
let Snake = new Animal ("Black Mamba", "hiss", "small");



Animal.prototype.attackHumans = function () {
    return this.name + " can attack humans";
};

console.log(Elephant);


Snake.soundsLike();

console.log(Elephant.attackHumans());
console.log(Snake);

/* mostly simple. had to make an animal class and create a few animals using the class
and create a function to print the animal's sound and then use prototype to add a new
function to the class. then make a few logs */