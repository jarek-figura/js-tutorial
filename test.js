// *** Lesson 37 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var newLi = document.createElement("li");   console.log(newLi);
var newA  = document.createElement("a");    console.log(newA);
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]; console.log(menu);
menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "Blog";

menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);