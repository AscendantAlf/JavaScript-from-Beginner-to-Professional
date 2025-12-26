let value = "1000";

(function () {
    let value = 2000;
    console.log(value);
})();

//exercise is to work with IIFE (immediately invoked function expressions)
//the function above gets executed immediately and overwrites value to 2000

let result = (() => {
    let value = 500;
    return value;
})();

//the function above gets executed and we can see from the log of result and value below
//that result is 500 (local scope) and value is 1000 (global scope)

console.log(result)
console.log(value);

(function (value) {
    console.log("I'm experimenting with", value);
})(500);

//function above was to use a value from another same-named variable above to be passed in as argument.
//returns I'm experimenting with 500

//this entire exercise is just working with variable scope