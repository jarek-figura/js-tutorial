// *** Lesson 45 *** //

// LIBRARIES
// - general purpose
// - animation
// - form enhancement
// - video
// - ...

// JS
// var myPara = document.getElementById("content").getElementsByTagName("p")[5];

// jQuery
var myPara2 = $("#content p:last-child");

myPara2.addClass("test");
myPara2.removeClass("test");
myPara2.fadeOut();
myPara2.fadeIn();
myPara2.css({position: "relative", color: "red"});
myPara2.animate({left: "50px"});