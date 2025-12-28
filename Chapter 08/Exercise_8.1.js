let string1 = "How's%20it%20going%3F";
let string2 = "How's it going?"

let decoded = decodeURIComponent(string1);
let encoded = encodeURIComponent(string2);

console.log(decoded);
console.log(encoded);

let webURI = "http://www.basescripts.com?=Hello World";
let encodedwebURI = encodeURI(webURI);
console.log(encodedwebURI);

/*fairly straightforward. Exercise was to use the encode and decode
methods and compare and contrast encodeURIcomponent and encodeURI (
encodeURIComponent can handle special symbols) */