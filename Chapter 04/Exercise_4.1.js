let booleanValue = true;

console.log(booleanValue);

let ifChecker = function(booleanValue) {
    if (booleanValue) {
    console.log(`${booleanValue} evaluated to be true`)
}

if (!booleanValue) {
    console.log(`This statement appears when ! (not) ${booleanValue} evaluated to be true`)
}
}

console.log(`The original boolean value was ${booleanValue}`);

booleanValue = false

console.log(`We changed the original boolean value to ${booleanValue}`);

ifChecker(booleanValue);

/* really simple. Just practicing if statements
as part of the exercise */