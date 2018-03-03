// *** Lesson 36 *** //

// DOM (Document Object Model)
// Document is a representation of HTML
// Object is a HTML tag (e.g. <head></head>)
// Model is a tree representation of Objects
// Node is everything we can change in the Document (Element, Text, HTML attributes)

var title = document.getElementById("page-title");       console.log(title);

title.setAttribute("style", "position: relative;");
title.setAttribute("style", "left: 10px;");           // overriding previous style
title.setAttribute("style", "position: relative; left: 10px;");
title.style.left = "20px";                            // updating a property
title.style.color = "red";                            // adding a property
title.style.backgroundColor = "blue";                 // don't use hyphen '-'
