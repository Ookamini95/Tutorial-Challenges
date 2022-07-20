`use strict`;

// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    // get speedUS() {
    //     return this.speed / 1.6;
    // }
    // set speedUS(mult = 1.6) {
    //     this.speed /= mult;
    // }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 10;
        return this;
    }
}

class ECar extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge
    }

    accelerate() {
        this.speed += 10;
        return this
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    seeCharge() {
        return this.#charge;
    }
}

const Tesla = new ECar(`Testla`, 120, 22);
Tesla.accelerate().accelerate().accelerate().chargeBattery(50).brake();
console.log(Tesla.speed);
console.log(Tesla.seeCharge());
// console.log(Tesla.#charge);

