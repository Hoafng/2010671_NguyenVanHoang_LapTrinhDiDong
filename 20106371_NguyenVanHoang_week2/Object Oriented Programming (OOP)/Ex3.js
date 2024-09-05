// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed; // Speed in km/h
}

// Method to increase speed by 10 km/h
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Method to decrease speed by 5 km/h
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Constructor function for Electric Car (EV)
function EV(make, speed, charge) {
    Car.call(this, make, speed); // Call parent constructor
    this.charge = charge; // Battery charge in %
}

// Inherit from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Method to charge battery
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
};

// Overriding the accelerate method
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    if (this.charge < 0) this.charge = 0; // Prevent negative charge
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Create an electric car object
const myEV = new EV('Tesla', 120, 23);

// Experiment with accelerate, brake, and chargeBattery methods
myEV.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
myEV.accelerate(); // Tesla going at 160 km/h, with a charge of 21%
myEV.brake(); // Tesla is going at 155 km/h, with a charge of 21%
myEV.chargeBattery(90); // Tesla battery charged to 90%
myEV.accelerate(); // Tesla going at 175 km/h, with a charge of 89%
