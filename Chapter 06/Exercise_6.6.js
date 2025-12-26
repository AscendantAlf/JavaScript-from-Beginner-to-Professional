//this exercise is to use recursion to get factorials in math

function calculateFactorial (number) {
    console.log(number);
    if (number === 0) {
        return 1;
    }
    else {
        return number * (calculateFactorial(--number));
    }
}

console.log(calculateFactorial(5));


//pretty simple