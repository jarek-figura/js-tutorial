// *** Lesson 38 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0]; console.log(parent);
var child = parent.getElementsByTagName("li")[0];                               console.log(child);
var removed = parent.removeChild(child);

parent.appendChild(removed);