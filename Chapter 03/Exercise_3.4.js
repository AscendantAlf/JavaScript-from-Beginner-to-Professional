const myCar = {
    year: 2023,
    manuf: "Nissan",
    model: "Altima",
    trim: "SV",
    mileage: 50000,
    value: 20000,
    color: "Black",
    forSale: false
};

let accentColor = "Grey";
myCar.accentColor = accentColor;
console.log(`${myCar.manuf} is the manufacturer and ${myCar.model} is the model.`);
console.log(`${myCar.accentColor}`);
console.log(myCar);

/* the whole point of this exercise was to
specify a variable outside of the object and
add it as an property to the object. I did this
by making a variable outside (accentColor) and
setting it to a value, then by appending the
property to the object with objname.newproperty =
value. */