////constructor functionssss

const Vehicle = function(model, color, transimission, engine) {
  this.model = model;
  this.color = color;
  this.transimission = transimission;
  this.engine= engine;

  this.isRunning = true;
  this.ignition = function() {
    this.isRunning = !this.isRunning;
    return this.isRunning ? `Ingnition is On..` : `Ingnition is Off ...!!!`
  };

  this.accelerate = function () {
    return this.isRunning  ? `${model} is accelerating` : `${model} is not in an accelerating mode.`
  };

  this.deaccelerate = function () {
    return this.isRunning ? `${model} is de-accelerated..`: `${model} is not in an de-accelerating mode.`
  };
};
//subClass
const Sedan = function(model, color, transimission, engine) {
    this.wheel = 4;
    Vehicle.call(this, model, color, transimission, engine);
}

Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor =Sedan

const suv = new Sedan("Honda Suv 500", "White", "Amt", "100hp");
console.log(suv.wheel);
console.log(suv.model);
console.log(suv.color);
console.log(suv.transimission);
console.log(suv.engine);
console.log(suv.ignition());
console.log(suv.ignition());
console.log(suv.accelerate());
console.log(Object.getPrototypeOf(suv));