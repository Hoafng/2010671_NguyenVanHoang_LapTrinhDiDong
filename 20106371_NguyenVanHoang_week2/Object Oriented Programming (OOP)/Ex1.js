// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// Method to increase speed by 10
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Method to decrease speed by 5
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Create two Car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Experiment with accelerate and brake methods
car1.accelerate(); // BMW is going at 130 km/h
car1.accelerate(); // BMW is going at 140 km/h
car1.brake(); // BMW is going at 135 km/h

car2.brake(); // Mercedes is going at 90 km/h
car2.accelerate(); // Mercedes is going at 100 km/h
car2.accelerate(); // Mercedes is going at 110 km/h
