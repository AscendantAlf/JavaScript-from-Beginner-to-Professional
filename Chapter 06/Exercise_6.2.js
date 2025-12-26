const myArray = ["Bellicose", "Exuberant", "Lackadaisical", "Ascendant"];

function userName (){
    let name = prompt("Enter a name");
    let description = Math.floor((Math.random()) * 4);
    description = myArray[description];
    console.log(name, description);
} 

userName();

/* really straightforward. This exercise was to create an array
of descriptive values and use a function that prompts the user
for a name and then returns a log of the name and a randomly selected
value from the array (via Math.floor.......). * 4 was needed to
have the math.random select a value from 0 to 3 (not 4 since zero index
means index 3 is the last item) */