// ===== self-invoking anonymous func
// var greeting = (function (name) {
// 	return 'hello, ' + name;
// }('Vlad'));
// console.log(greeting);


// double 
// var func = function () {
// 	return function () {
// 		console.log('Hello');
// 	};
// };
// func()();


// callbacks
// var func = function (callback) {
// 	var name = 'Vlad';
// 	callback(name);
// };


// func(function (n) {
// 	console.log('hello, ' + n);
// });


// =========== functions
// var greet = function (name) {
// 	console.log(arguments);
// 	return 'Hello ' + name;
// };


// console.log(greet('vlad', 29, 'df').toUpperCase());
// ===========


// var fn = prompt('Print your name: ') || 'name secondName';
// var fns = fn.split(' ').reverse();
// for(var i = 0; i <= fns.length-1; i++){
// 	fns[i]=fns[i][0].toUpperCase()+fns[i].substr(1,fns[i].length-1);
// 	console.log(fns[i][0].toUpperCase())
// }
// var fn = fns.join(' ');
// alert(fn);


// {
// 	var isTR = false, a = 0;
// 	isTR && (a = 5);
// 	var x = a || 8;
// 	console.log(a + ' ' + x);
// }


// console.log(Boolean(5) == !!5);
// console.log(typeof(+"4453")); // Number("4453")
// console.log(typeof(345 + "")); // String(345) || 345.toString(n); n - система исчесления
// console.log(parseInt("8798 jojo 789", 10)); // -> 8798 ... 10-чная сист исч.
// console.log(parseFloat("23.23 ijnommko"));