let side_a = window.prompt("What is the length of the first side of your right-angled triangle (number only)?");
let side_b = window.prompt("What is the length of the second side of your right-angled triangle (number only)?");
a = Number(side_a);
b = Number(side_b);
let hypotenuseValue = ((a * a) + (b * b))**0.5;

console.log(`the first side is ${a}`);
console.log(`the second side is ${b}`);
console.log(`the Pythagorean theorem states that a squared + b squared is equal to c squared. C being the hypotenuse`);
console.log(`therefore ${a} squared is ${a * a} and ${b} squared is ${b * b}`)
console.log(`meaning c squared is ${(a * a) + (b * b)} and that`);
console.log(`the length of the hypotenuse side of your right-angled triangle given your inputs is ${hypotenuseValue}`);

/*they already wrote out the formula, so I
just added the string to the log for clarity */