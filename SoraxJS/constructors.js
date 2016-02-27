var Person, person, anotherPerson;

// constructor
Person = function (name) {
  this.name = name;
}
// Objects dont have .prototype !
Person.prototype.greet = function () {
  console.log("Hi, my name is " + this.name);
}

person = new Person("Vlad");
console.log(person.name);
person.greet();

// console.log(person.constructor);
// console.log(Person.prototype.constructor);

anotherPerson = new Person("John");
console.log(anotherPerson.name);
anotherPerson.greet();

 // anotherPerson is from class Persons
console.log(anotherPerson instanceof Person);
console.log(Person.prototype.isPrototypeOf(anotherPerson));

//console.log(anotherPerson.__proto__);

// inherit class
var Developer = function (name, skills) {
  Person.apply(this, arguments);
  this.skills = skills || [];
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

var developer = new Developer("Bob", ["c++", "ruby", "js"]);
console.log(developer);
developer.greet();
