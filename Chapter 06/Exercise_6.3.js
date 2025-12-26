let value1 = 10;
let value2 = 20;

let operator = "+";

function conjoin(value1, value2, op) {
    if (op == "+") {
    console.log(value1 + value2);
    }
    else {console.log(value1 - value2)};
}


conjoin(value1, value2, operator);

/* simple enough. Make a function that adds or subtracts
value1 and value2 depending on the operator sign */