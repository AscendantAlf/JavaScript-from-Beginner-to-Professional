let outputFunction = ()=> console.log("one")
let outputFunction2 = () => console.log("two")

function outputFunction3 () {
    console.log("three");
    outputFunction();
    outputFunction2();
}

function outputFunction4 () {
    console.log("four");
    setTimeout(outputFunction, 0);
    outputFunction3();
}

outputFunction4();

/* can you guess it...? Straightforward. Lol. Going by the directions,
the goal was to get the order of the log print to be 
four, three, one, two, one */