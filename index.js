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



//----------------------------------------------------------------------------------//////////////////////////////////////--------------------
// function Automobile(make, model, year) {
// this.make= make;
// this.model= model;
// this.year= year;
// };

// function Fourwheeler(make, model, year, fuelType,color, numDoors) {
//   Automobile.call(this, make,model, year)
//   this.fuelType=fuelType;
//   this.color=color;
//   this.numDoors=numDoors;
// };

// let car1 = new Fourwheeler(2020,"Tata",2021,"Diesel","Red",4);
// console.log(car1);


// let Automobile= {
//     make: 2020,
//     model: "Mahindra",
//     year:2012,
//     };
   
//     let Fourwheeler = Object.create(Automobile);
//     Fourwheeler.fuelType= "Diesel";
//     Fourwheeler.color= "Red";
   
   
//     console.log(Fourwheeler);