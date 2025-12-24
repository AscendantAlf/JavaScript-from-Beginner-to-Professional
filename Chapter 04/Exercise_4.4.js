const randomNumber = Math.floor(Math.random() * 6)

let userQuestion = String(prompt("Ask me a question"));
let answer;

switch (randomNumber) {
    case 0:
        answer = "It is certain";
        break;
    case 1:
        answer = "I better not tell you now...";
    break;
    case 2:
        answer = "8 ball cloudy... ask again";
    break;
    case 3:
        answer = "Very likely";
    break;
    case 4:
        answer = "Don't count on it";
    break;
    case 5:
        answer = "Let it happen";
    break;
    default:
        break;
}

let output = `You asked me "${userQuestion}" and 8 ball thinks "${answer}"`;
console.log(output);

/*pretty simple. exercise was to simulate a
magic 8 ball by grabbing a user question and
using a switch statement to simulate it mulling
over a response*/