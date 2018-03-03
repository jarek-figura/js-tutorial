// *** Lesson 33 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

// Traversing the DOM

var myContentDivs = document.getElementsByClassName("content");   console.log(myContentDivs);

var myH2 = myContentDivs[1].getElementsByTagName("h2");           console.log(myH2);
myH2[0].innerHTML = "YO NINJAS";

var myIDs = document.getElementById("page-title");                console.log(myIDs);