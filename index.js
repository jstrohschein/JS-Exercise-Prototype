/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/







/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/






function Person(name, age) {

  this.name = name;

  this.age = age;

  this.stomach = [];


};


Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    return this.stomach.push(someFood);
  }

  else {
   return console.log ('Stomach is full');
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};


const me = new Person('Jared', 30);


//eat test
// console.log(me);
// me.eat ('sushi');
// console.log(me.stomach);


//poop test
// for (let i = 0; i < 11; i++) {
// me.eat ('sushi');
// };
// console.log(me.stomach);
// me.poop();
// console.log(me.stomach);


//toString test
//console.log(me.toString());









/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/






function Car(model, milesPerGallon) {

  this.model = model;

  this.milesPerGallon = milesPerGallon;

  this.tank = 0;

  this.odometer = 0;

  

};



Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {

  let fuel = this.tank - distance / this.milesPerGallon;

  if (fuel > 0){
  this.odometer += distance;
  this.tank = fuel;
  }

  else {
    this.odometer += this.milesPerGallon * this.tank;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
  
};

// car constructor test 
// const whip = new Car('Mustang', 10);
// console.log(whip);

// fill test
// whip.fill(25);
// console.log(whip);

// drive test w/o running out of fuel
// whip.drive(10);
// console.log(whip);

// drive test running out of fuel
// console.log(whip.drive(400));








/*
  TASK 3
    - Write a 'Baby' constructor, subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/




//step 1, bind 'this' to Person with '.call'
function Baby(name, age, favoriteToy) {

  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;
};

//step 2 copy the parent (Person) prototype to the child (Baby) prototype
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

const appa = new Baby('Appa', 1, 'ball');

//constructor test
//console.log(appa);

//play test
//console.log(appa.play());




/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Can be bound to the window (i.e., the global object) and then when referenced will reference the global object.

  2. Can be implicitly bound. That is, when it is used within an object
  to define a method, it is a reference to the object it's in. 

  3. Can be new-bound. When 'this' is used in a constructor function, it references each unique instance of the object created from the constructor.

  4. Can be explcitly bound. Uses 2 methods: 'call' and 'apply'. These 2 methods can be called on other methods or the object at large (i.e., object.method.call(...) or object.call). Used to run a method on all the properties of a specific object.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
