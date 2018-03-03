// *** Lesson 31 *** //

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);

var birthday  = new Date(1962, 0, 8, 8, 20, 0);
var birthday2 = new Date(1962, 0, 8, 8, 20, 0);

console.log(birthday.getFullYear());  // full year (YYYY)
console.log(birthday.getMonth());     // month (0-11)
console.log(birthday.getDate());      // day of month (1-31)
console.log(birthday.getDay());       // day of week (0-6)
console.log(birthday.getHours());     // hour (0-23)
console.log(birthday.getTime());      // milliseconds since 01.01.1970

// two different objects
if (birthday === birthday2) {
	console.log("birthdays are equal");
} else {
	console.log("birthdays are not equal");
}

// two the same amount of milliseconds
if (birthday.getTime() === birthday2.getTime()) {
	console.log("birthdays are equal");
} else {
	console.log("birthdays are not equal");
}
