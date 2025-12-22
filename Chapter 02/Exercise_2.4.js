let a = 5;
let b = 10;
let c = 20;
a += b;
a /= c;
c %= b;
console.log(a, b, c);


/* they wrote out the formulas originally
in the longer default format (a = a + b)
and I shortened them with the corect assignment
operators */

/* notice how a comes out to 0.75 and not 15
then 0.25. It had two operations done on it
and console.log() printed out its value 
after all operations were done. */