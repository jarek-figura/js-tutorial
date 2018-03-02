// *** Lesson 28 *** //

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";
console.log(myArray);

var myCar = new Object();         console.log(myCar);
myCar.maxSpeed = 50;
myCar.driver = "Shaun";           console.log(myCar);
console.log(myCar.driver);

myCar.drive = function () { console.log("now driving"); };
myCar.drive();

// short-hand notation
var myCar2 = {
	maxSpeed: 70,
	driver: "Net Ninja",
	drive: function (speed, time) {
		console.log("driving distance: " + speed * time + " miles");
	}
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
