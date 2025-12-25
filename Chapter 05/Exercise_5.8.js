let output = "";
let skippedNumber = 4;

for (let i = 1; i <= 10; i++) {
  if (i === skippedNumber) {
    continue;
  }
  output += i;
  console.log(output);
}

//this exercise it to practice using continue (above)

for (let i = 1; i <= 10; i++) {
  if (i === skippedNumber) {
    break;
  }
  output += i;
  console.log(output);
}

/*and to practice using break (above) and to notice the
difference. You'll see this loop already include the result
at the end of the first loop before running because output
is carried over since it wasn't an instruction to reset it*/