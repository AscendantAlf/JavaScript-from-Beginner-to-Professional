const max = 10;
const randomNumber = Math.floor(Math.random() * max) + 1;

console.log(randomNumber);

let answerCorrect = false;

while (!answerCorrect) {
  let userAnswer = prompt("Enter a number between 1 and 10");
  userAnswer = Number(userAnswer);
  if (userAnswer === randomNumber) {
    answerCorrect = true;
    console.log(`Congratulations. You guessed the right number, which was ${randomNumber}`);
  }
  else if (userAnswer > randomNumber) {
    console.log("Your answer is higher than the number");
  }
  else if (userAnswer < randomNumber) {
    console.log("Your answer is lower than the number");
  }
}

/* fairly straightforward. Had to make a 
number guessing game where you have to guess
the right number that was randomly selected
as the number and be told if you were higher
or lower */