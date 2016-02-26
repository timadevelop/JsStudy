var person = {
	name: 'Vlad',
	age: 18,
	sayHi: function () {
		return 'Hello!';
	}
}

console.log(person.name);
delete person.age;
console.log('age' in person);
console.log(person.age);

console.log(person.sayHi());

var obj = Object.create({x:10, y:20});
console.log(obj.x);
console.log(obj);
console.log(obj.hasOwnProperty('x')); // false( не учитывает поля унаследованные от прототипа)

console.log('\n');

console.log(obj.z);
console.log('z' in obj); // ему побарабану наследовано ли это поле иди нет

obj.z = undefined;
console.log(obj.z);
console.log('z' in obj);
















// ---------------------------------------
