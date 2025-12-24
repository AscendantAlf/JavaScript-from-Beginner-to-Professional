let prize = prompt("Select a numeric value from 0 to 10");
let Prize = Number(prize);
let output = "My Selection:"

switch (Prize) {
    case 0:
    case 1:
    case 2:
       userPrize = `Cotton Candy`; 
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        userPrize = `Giant Stuffed Animal`;
    default:
        userPrize = `Park-Themed Beverage Container`;
        break;
}

AwardMessage = output.concat(` ${userPrize}`);
console.log(AwardMessage);

/* fairly simple. Had to use a switch statement where
multiple cases had the same output. This was to
simulate a user getting a prize from their input. */