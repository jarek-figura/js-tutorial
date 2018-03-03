// *** Lesson 40 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function () {
	if (content.className === "open") {
		// shrink the box
		content.className = "";
		button.innerHTML = "Show More";
	} else {
		// expand the box
		content.className = "open";
		button.innerHTML = "Show Less";
	}
};
