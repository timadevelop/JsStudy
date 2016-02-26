// Only function scope
var i = 1;

var func = function () {
	var i = 10;
	console.log(i); //10
	var innerFunc = function () {
		// ===== hoisting
		console.log(i); // undefined 
		var i = 19;
		// == analogy:
		// var i;
		// console.log(i);
		// i = 10;
	};
	innerFunc();
};

func();








