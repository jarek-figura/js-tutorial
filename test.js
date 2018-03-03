// *** Lesson 35 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var link = document.getElementById("test");       console.log(link);
console.log(link.getAttribute("href"));
console.log(link.getAttribute("class"));

link.setAttribute("class", "pie");
link.setAttribute("alt", "hello");

link.className = "ninja";
console.log(link.href);
console.log(link.style);