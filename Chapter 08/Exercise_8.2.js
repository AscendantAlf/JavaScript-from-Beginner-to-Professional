let nameArray = ["Ascendant", "Alf", "Jacob", "John", "Ed", "Fred", "Sarah", "Mike", "Ed", "Alf"];

let filteredArray = nameArray.filter((function (value, index, array) {
    console.log(value, index, array.indexOf(value));
    return array.indexOf(value) === index;
}
));

console.log(filteredArray);

/* using filter */