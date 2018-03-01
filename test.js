// *** Lesson 11 *** //

var iLikeMeet = true; console.log(iLikeMeet); // true
iLikeMeet = "true";   console.log(iLikeMeet); // "true"
iLikeMeet = false;    console.log(iLikeMeet); // false

console.log(7 > 5);   // true
console.log(7 < 5);   // true
// console.log(7 = 5);
console.log(7 == 5);  // false
console.log(7 == 7);  // true

// Truthy
var myVar;

myVar = Boolean(7 > 5);   console.log(myVar); // true
myVar = Boolean(6);       console.log(myVar); // true
myVar = Boolean(-5);      console.log(myVar); // true
myVar = Boolean("hello"); console.log(myVar); // true

// Falsy
myVar = Boolean(0);       console.log(myVar); // false
myVar = Boolean("");      console.log(myVar); // false
