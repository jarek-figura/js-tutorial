// *** Lesson 43 *** //

console.log(document.forms.myForm);

var myForm = document.forms.myForm;
console.log(myForm.name);
console.log(myForm.name.value);
console.log(myForm.colour.value);

myForm.name.onfocus = function() {
	myForm.name.style.border = "4px solid pink";
};
myForm.name.onblur = function() {
	myForm.name.style.border = "none";
};

