let Date1 = new Date ("September 25, 2024");

console.log(Date1);

let monthArray = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateOfDate1 = Date1.getDate();
let fullYear = Date1.getFullYear();
let monthOfDate1 = Date1.getMonth();

let myDate = `${monthArray[monthOfDate1-1]} ${dateOfDate1} ${fullYear}`;
console.log(myDate);

/* pretty straightforward. Exercise was to practice using the
Date methods. */