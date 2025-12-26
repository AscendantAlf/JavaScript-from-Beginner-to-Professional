/*this exercise is to use the code from exercise 6.3 and
have it be used with a loop and an array */

let myArray = [];


for (let i = 0; i< 10; i++) {
  let result1 = i * 5;
  let result2 = i * i;
  let calculationresult = conjoin(result1, result2, "+");
  myArray.push(calculationresult);
}

console.log(myArray);

function loopCounterAdder(result1, result2) {
  console.log(result1, result2);
  return result1 + result2;
}

function conjoin(value1, value2, op) {
    if (op == "+") {
    return value1 + value2;
    }
    else {return value1 - value2};
}