// *** Lesson 34 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var myBody = document.getElementsByTagName("body");   console.log(myBody);
// console.log(myBody[0].innerHTML);

// myBody[0].innerHTML = "<p>I am a paragraph tag</p>";

var myTitle = document.getElementById("page-title");  console.log(myTitle);
console.log(myTitle.textContent);
myTitle.textContent = "Yo Ninjas, get ready to learn!";
