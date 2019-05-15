// Each of the following will create a new empty object

interface newObject {
  someKey?: string;
}

var newObject: newObject = {};

// or
var newObject: newObject = Object.create(Object.prototype);

// or
var newObject: newObject = new Object();

// 4 ways to assign keys and values to an object

// 1. Dot syntax

// Set properties
newObject.someKey = "Hello Javascript";
var value = newObject.someKey;

// 2. Square bracket syntay
// Set properties
newObject["someKey"] = "Hello Javascript";
var value = newObject["someKey"];

// ECMAScript 5 only compatible approaches

// Object.defineProperty
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behaviour",
  writable: true,
  enumerable: true,
  configurable: true
});

// or, easier to read

var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};

var person = Object.create(Object.prototype);

// populate object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person);
// 4. Object.defineProperties

Object.defineProperties(newObject, {
  someKey: {
    value: "Hello World",
    writable: true
  },
  anotherKey: {
    value: "Foo bar",
    writable: false
  }
});

// these methods can be used for inheritance

// Create a race var driver that inherits from the person object
var driver = Object.create(person);

// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

// ======= Basic constructors =======

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " + this.miles + " miles.";
  };
}

// Usage

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());

console.log(mondeo.toString());

// ======= Constructors with prototypes =======
function NewCar(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function() {
  return this.model + " has done " + this.miles + " miles.";
};

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

// Above, a single instance of toString() will now be shared between all of the Car objects.
