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
    }

    // Method to decrease speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Getter for speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter for speed in mi/h
    set speedUS(speedInMi) {
        this.speed = speedInMi * 1.6;
    }
}

// Create a new car
const car1 = new CarCl('Ford', 120);

// Experiment with accelerate and brake methods
car1.accelerate(); // Ford is going at 130 km/h
car1.brake(); // Ford is going at 125 km/h

// Experiment with getter and setter for speed in mi/h
console.log(`Speed in mi/h: ${car1.speedUS}`); // Speed in mi/h: 77.5
car1.speedUS = 100; // Set speed to 100 mi/h
console.log(`New speed in km/h: ${car1.speed}`); // New speed in km/h: 160
