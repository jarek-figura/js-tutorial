// *** Lesson 39 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

// alert("hey");

var title = document.getElementById("page-title");      console.log(title);
title.onclick = function () {
	alert("you clicked me");
};
title.onmouseover = function () {
	alert("you hovered your mouse over me");
};
