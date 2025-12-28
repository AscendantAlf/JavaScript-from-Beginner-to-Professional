let string = "I love Javascript"

let lowcasestring = string.toLowerCase();

let vowelArray = ["a", "e", "i", "o", "u"];

vowelArray.forEach((letter, index) => {
    console.log(letter);
    string = string.replaceAll(letter,index);
});

console.log(string);

/* exercise was to use replaceAll method to replace
the vowels in a given string to numbers (in this case,
their indices work) */