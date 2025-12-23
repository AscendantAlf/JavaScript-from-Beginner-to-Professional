const theList = ["Ascendant", "Alf", true, 27, null, undefined, {test: "two", score: 85}, ["one", "two"]];

let second = theList.slice(1, 2)

second.unshift("FIRST");

second.splice(2, 0, "MIDDLE", "hello World", "LAST");

console.log(second);

/* the objective was to take the first array
and use a variety of methods to get it an end result that say
["FIRST", "Alf", "MIDDLE", "hello World", "LAST"] */

//I used slice at start just to extract the one I had to carry over