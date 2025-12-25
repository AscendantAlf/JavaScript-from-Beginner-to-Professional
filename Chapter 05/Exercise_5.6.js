let myArray = [];

for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
};

for (let number of myArray) {
    console.log(number);
};

/* really simple. this was an exercise to
practice using the for of loop. */