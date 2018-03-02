// *** Lesson 24 *** //

var myStr = 'I\'m a "fun ninja" string';

if (myStr.indexOf("ninja") === -1) {
	console.log("the word 'ninja' is not in the string");
} else {
	console.log("the word 'ninja' starts at position " + myStr.indexOf("ninja"));
}

var str1 = "abc";
var str2 = "bcd";
var str3 = "abc";
var str4 = "ABC";

console.log(str1 === str2);
console.log(str1 === str3);
console.log(str1 === str4);
console.log(str1.toLowerCase() === str4.toLowerCase());
console.log(str1 < str2);
console.log(str1 < str4);