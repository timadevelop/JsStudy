// Prototypal Inheritance (наследование)

// var ObjectProto = {
//   name: 'Bob',
// };
//
// var obj = Object.create(ObjectProto);
//
// console.log(obj.name);

var Person = {// "class"
  constructor: function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this; // for return created obj
  },
  greet: function() {
    return "Hi! My name is " + this.name;
  }
}

var person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("Vlad", 18, "male");
anotherPerson = Object.create(Person).constructor("Timur", 8, "male");
thirdPerson = Object.create(Person).constructor("She", 17, "female");

console.log(person, anotherPerson, thirdPerson);
console.log(thirdPerson.greet());

//Person.isPrototypeOf(person);

var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function (name, age, gender, skills) {
  Person.constructor.apply(this, arguments);
  this.skills = skills || [];
  return this;
}
WebDeveloper.develop = function () {
  return "Working....";
}

var developer = Object.create(WebDeveloper).constructor("Bob", 19, "male", ['js','node', 'ruby', 'cpp']);
console.log('');
console.log(developer);
console.log(developer.develop());
