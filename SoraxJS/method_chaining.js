var Vec2 = function (x, y) {
  this.x = x;
  this.y = y;
}
Vec2.prototype.add = function(vec) {
  this.x += vec.x;
  this.y += vec.y;
  return this;
};


var Thing = function (type) {
  this.type = type;
}
Thing.prototype.update = function () {
  // update thing state
  this.position
    .add(this.speed)
    .add(world.gravity);
};


var world = {
  gravity: new Vec2(0,1),
};

var car1 = new Thing("obj");
car1.position = new Vec2(10, 20),
car1.speed = new Vec2(1,3);

console.log(car1.position);
car1.update();
console.log(car1.position);





// simple example with strings
/*
var string, newString;

string = "Some awesome text for js";

newString = string
  .replace("text", "txt")
  .concat(" language")
  .toUpperCase()
  .slice(4);

console.log(newString);
*/
