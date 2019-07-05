// The prototype Pattern
// prototypal inheritance avoids using classes altogheter

// Easy to implement and pffer a performance boost, when defining a function in an object, they're all created by reference (so all child objects point to the same function) instead of creating their own individual copies.

var myCar = {
  name: "Ford Escort",
  drive: function() {
    console.log("Weee. I'am driving!");
  },
  panic: function() {
    console.log("Wait. How do you stop this thing?");
  }
};

var yourCar = Object.create(myCar);

console.log(yourCar.name);

var vehicle = {
  getModel: function() {
    console.log("The model of the vehicle is ..." + this.model);
  }
};

var car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(),
    enumerable: true
  },
  model: {
    value: "Ford",
    enumerable: true
  }
});

// alternative

var vehiclePrototype = {
  init: function(carModel) {
    this.model = carModel;
  },
  getModel: function() {
    console.log("The model of this vehicle is..." + this.model);
  }
};

function vehicle(model) {
  function F() {}
  F.prototype = vehiclePrototype;

  var f = new F();

  f.init(model);
  return f;
}

var car = vehicle("Ford Escort");

car.getModel();

// final alternative

var beget = function() {
  function F() {}

  return function(proto) {
    F.prototype = proto;
    return new F();
  };
};

// the vehicle funciton is emulating a contructor since the prototype ipattern does not include any notion of initialization beyond linking an object ot a prototype:
