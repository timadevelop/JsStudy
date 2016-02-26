// ==================== closures (замыкания)
/*
var func = function (){
	var i = 10;
	return function () {
		return i;
	};
};

var secondFunc = function () {
	var i = 20;
	console.log(func()());	
};

secondFunc(); // 10 .. func()() returns i from scope in that func was definated
*/


// ===== counter ==================
// ================================
//  === throw closures
// var counter = (function () {
// 	var count = 0; // 'private ' variable
// 	return function (num) {
// 		count = num != undefined ? num : count;
// 		return count++;
// 	}
// }());

//  === or:
var counter = function (num) {
	counter.count = num != undefined ? num : counter.count;
	return counter.count++;
};

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter()); 