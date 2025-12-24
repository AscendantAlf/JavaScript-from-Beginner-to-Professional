let friendname = prompt("Enter A Name");
let output;

switch (friendname) {
    case "John":
    case "Jacob":
    case "Victor":
    case "Jorge":
        output = `I know ${friendname}. He's my friend too`;
        break;
    default:
        output = "I don't know that person";
        break;
}

console.log(output);

/* really straightforward. Project was to make
a friend checker game that asked the user for
a name and compared it to a list/cases of my
friends' name to see if they matched */