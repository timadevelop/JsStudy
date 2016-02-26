// свойства аксессоры
var person = {
  name: 'Bob',
  _age: 20,
  get age(){
    return this._age;
  },
  set age(value){
    this._age = value < 0 ? 0 : value > 122 ? 122 : value;
  }
};

console.log(person.age); // BAAAAAAAAAAAAAD
person.age = 34565456;
console.log(person.age);

// attributes : writeable, enumerable, configurable;

// Дискриптор св-ва name обьекта person
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
  value: "male",
  writeable: false,
  enumerable: true, // переяисляемое
  configurable: false // configurable properties or no
});
console.log(person.gender);
person.gender = "female";
console.log(person.gender);
console.log('');
for (property in person){
  console.log(property);
}
console.log(Object.keys(person));

// another method to define Object

var o = {};
Object.defineProperties(o, {
  x: {
    value: 10,
    writeable: false
  },
  y: {
    value: 20,
    writeable: false
  },
  r: {
    get: function () {
      return this.x * this.y;
    }
  }
})

o.x = 23456;
console.log(o.r);

// Extensible Objects (расширяемые)
var obj = {};
console.log(Object.isExtensible(obj)); // true;
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false;
obj.x = 10;
console.log(obj.x); // undefined

Object.seal(obj); // preventExtensions + all configurable = false in this Object
console.log(Object.isSealed(obj));

Object.freeze(obj); // seal + writeable = false
Object.isFrozen(obj);

// 20 lesson
var a = {x: 20}, b = {x: 30};
a = b; // *a = &b (just save a link)
b.x = 33;
console.log(a.x);
