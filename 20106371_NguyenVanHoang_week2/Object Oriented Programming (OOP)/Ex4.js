// ES6 class for Car
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // Speed in km/h
    }

    // Method to increase speed by 10 km/h
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // Enable method chaining
    }

    // Method to decrease speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // Enable method chaining
    }
}

// ES6 class for Electric Car (EV) extending Car
class EVCl extends CarCl {
    #charge; // Private property for battery charge

    constructor(make, speed, charge) {
        super(make, speed); // Call parent constructor
        this.#charge = charge; // Initialize private charge property
    }

    // Method to charge battery
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}%`);
        return this; // Enable method chaining
    }

    // Overriding the accelerate method
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        if (this.#charge < 0) this.#charge = 0; // Prevent negative charge
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this; // Enable method chaining
    }
}

// Create an electric car object
const myEV = new EVCl('Rivian', 120, 23);

// Experiment with chaining methods
myEV.accelerate().brake().chargeBattery(90).accelerate();
