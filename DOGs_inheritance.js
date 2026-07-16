Dog.prototype.species = "Canine";

Dog.prototype.bark = function(){
    if (this.weight > 25) {
        alert(this.name + " says woof! ");
    }
    else{
        alert(this.name + " says Yip! ");
    }
};

Dog.prototype.run = function (){
    console.log("Run!");
};

Dog.prototype.wag = function (){
    console.log("wag")
}

Dog.prototype.sit = function (){
    if (this.sitting){
        console.log(this.name + " is already sitting")
    }
    else{
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
}

Dog.prototype.sitting = false;

function Dog(name, breed, weight) {
    this.name =name;
    this.breed=breed;
    this.weight =weight;
}

var Private_fluffers = new Dog("Fluffers","poodle",30)
var Sergeant_spot = new Dog("Spot","chihuahua",10)
var Commander_fido = new Dog("Fido","mixed",38)
var Brigadier_Barnaby = new Dog("Barnaby", "Basset Hound",55)
var army = [Private_fluffers,Sergeant_spot,Commander_fido]

Sergeant_spot.bark = function (){
    alert(this.name + " says exterminate")
};

//Private_fluffers.bark()
//Sergeant_spot.run()
//Commander_fido.wag()
//Sergeant_spot.bark()
//Brigadier_Barnaby.sit()
//console.log(Sergeant_spot.hasOwnProperty("species"))
//console.log(Sergeant_spot.hasOwnProperty("sitting"))
//Sergeant_spot.sitting = true
//console.log(Sergeant_spot.hasOwnProperty("sitting"))

