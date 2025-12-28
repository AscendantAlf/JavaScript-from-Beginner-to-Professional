const myArray = [7, 10, 12, 13, 14, 19, 20];

const newArray = myArray.map(function(x) {
    return x * 2
});

const newArray2 = myArray.map((x) => x * 2);
console.log(newArray2);

/*Exercise was to practice with .map() method */