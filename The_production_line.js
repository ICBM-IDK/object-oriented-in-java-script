function Vroom(parameters){
    this.make=parameters.make
    this.model=parameters.model
    this.year=parameters.year
    this.colour=parameters.colour
    this.passengers=parameters.passengers
    this.convertable=parameters.convertable
    this.mileage=parameters.mileage
    this.started=parameters.started
    this.start = function(){
        if (this.started === false){
            console.log("you turn the key in the " + this.make + "," + this.model + ". the car roars to life")
            this.started = true
    }
        else{
            console.log("car already on")
        }
    }
    this.drive = function (){
        if (this.started === true){
            console.log(this.make + "," + this.model + " goes VROOOOOOOM")
    }
        else{
            console.log("you need to start the car")
        }
    }
    this.stop = function(){
        if (this.started === true){
            console.log("you turn the key in the " + this.make + "," + this.model + ". the car dies")
            this.started = false
    }
        else{
            console.log("car already off")
        }
    }

}

function Dog(Dog_stats) {
    this.name = Dog_stats.name;
    this.breed= Dog_stats.breed;
    this.weight = Dog_stats.weight;
    this.bark = function(){
        if (this.weight > 25) {
            alert(this.name + " says woof! ");
        }
        else{
            alert(this.name + " says Yip! ");
        }
    };
}
var Private_fluffers = {
                            name: "Fluffers",
                            breed: "poodle",
                            weight: 30
}
var Sergeant_spot ={
                            name: "Spot",
                            breed: "chihuahua",
                            weight: 10
}
var Commander_fido = {
                            name: "Fido",
                            breed: "mixed",
                            weight: 38
}
Private_fluffers = new Dog(Private_fluffers)
Sergeant_spot = new Dog(Sergeant_spot)
Commander_fido = new Dog(Commander_fido)
var army = [Private_fluffers,Sergeant_spot,Commander_fido]


const Chevy = {make : "Chevy",
                  model: "bel Air",
                  year: 1957,
                  colour: "red",
                  passengers: 2,
                  convertable: false,
                  mileage: 1021,
                  started: false
}
const Fiat = {make : "Fiat",
                model: "500",
                year: 1957,
                colour: "medium Blue",
                passengers: 2,
                convertable: false,
                mileage: 88000,
                started: false
}
const Cadi = {make : "GM",
                model: "Cadillac",
                year: 1955,
                colour: "tan",
                passengers: 5,
                convertable: false,
                mileage: 12892,
                started: false
}

const New_Chevy = new Vroom(Chevy)
const New_Fiat = new Vroom(Fiat)
const New_Cadi = new Vroom(Cadi)

var cars = [New_Chevy,New_Fiat,New_Cadi]

for (index=0; index < cars.length; index ++){
    cars[index].start()
    cars[index].drive()
    cars[index].drive()
    cars[index].stop()
}

if (Cadi instanceof Vroom){
    console.log("Congratulations ", Cadi.make + "," + Cadi.model + " is a car!!!!!!!")
}