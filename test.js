// *** Lesson 29 *** //

console.log(this); // window object

var myCar2 = {
	maxSpeed: 70,
	driver: "Net Ninja",
	drive: function (speed, time) {
		console.log("driving distance: " + speed * time + " miles");
	},
	logDriver: function () {
		console.log("driver name is: " + this.driver);
	}
/*
	test: function () {
		console.log(this);  // myCar2 object
		console.log(myCar2);  // the same myCar2 object
	}
*/
};

// myCar2.test();
myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
