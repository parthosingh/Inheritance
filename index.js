function Vehicle(brand, model, speed, fuelType) {
this.brand= brand;
this.model= model;
this.speed= speed;
this.fuelType= fuelType;
}

Vehicle.prototype.accelerate = function() {
    this.speed += 10;
    console.log("Our vehicle speed is", this.speed)
};

Vehicle.prototype.brake = function() {
    this.speed -= 5;
};

Vehicle.prototype.refuel = function() {
    console.log("Refuelling")
};

function Car(brand, model, speed, fuelType, noOfWheel) {
     Vehicle.call(this,brand, model, speed, fuelType)
     this.noOfWheel= noOfWheel
};

Car.prototype.honk = function() {
    console.log("honking sound");
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype)

function Airplane(brand, model, speed, fuelType, noOfengine, hasLandingGear) {
Vehicle.call(this, brand, model, speed, fuelType)
this.noOfengine= noOfengine;
this.hasLandingGear= hasLandingGear;
};

Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype)

Airplane.prototype.takeOff = function() {
    console.log(this.brand,'taking off')
};


let car1 = new Car('tata', 2020, 0, 'petrol', 4);
let air = new Airplane('Indigo', 2020, 0, 'petrol', 6);

air.takeOff()
car1.accelerate()
car1.brake()
console.log(car1)
air.accelerate()
console.log(air)