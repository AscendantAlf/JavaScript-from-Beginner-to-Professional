let age = prompt("What is your age?");
Number(age);
let message;

if (age >= 21) {
    message = "You are allowed into the venue and can buy alcohol"
}
    else if (age > 19) {
    message = "You are allowed in, but can't buy alcohol"
}
    else {
    message = "You are not allowed in"
};

console.log(message);

/* really simple. exercise was to use if and
else if */