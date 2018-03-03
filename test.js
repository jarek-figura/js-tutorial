// *** Lesson 30 *** //

/* object
 *
var myCar = {
	maxSpeed: 70,
	driver: "Net Ninja",
	drive: function (speed, time) {
		console.log("driving distance: " + speed * time + " miles");
	},
	logDriver: function () {
		console.log("driver name is: " + this.driver);
	}
};
 */

/* standard constructor functions
 *
var myArray = new Array();
var myStr = new String();
*/

/* constructor function of a new object
 */
var Car = function (maxSpeed, driver) {
	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function (speed, time) {
		console.log("driving distance: " + speed * time + " miles");
	};
	this.logDriver = function () {
		console.log("driver is: " + this.driver);
	};
};

var myCar = new Car(70, "Net Ninja");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();
