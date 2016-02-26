// исключения

// throw 'hello';
// 10 = 'string';


// var myError = new Error('My error message');

// console.log(myError.name);
// console.log(myError.message);
// throw myError;	



var calc = function(n) {
	if(n > 10) throw new Error('n must be less than 10!'); // search try/catch
	return n+10
};

//calc(17);

try{
	calc(20)
} catch(e){
	console.log('Can`t execute calculate: ' + e.message);
} finally{
	console.log('succes?');
}