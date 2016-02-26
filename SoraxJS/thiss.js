var greeting = function (g) {
  console.log( g+ '! my name is ' + this.name);
};
var person = {
  name: "Vlad",
  greet: greeting,
};
var anotherPerson = {
  name: "Bob",
  greet: greeting,
};

person.greet();
anotherPerson.greet();

anotherPerson.greet.call(person, 'Bonjure'); // this -Object person
anotherPerson.greet.apply(person, ['Bonjure']); // this -Object person

var bound = greeting.bind(anotherPerson);
bound("hiiii");
