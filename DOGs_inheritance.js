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

function Show_Dog(name, breed, weight, handler){
    this.name =name;
    this.breed=breed;
    this.weight =weight;
    this.handler=handler;
}
Show_Dog.prototype = new Dog();

Show_Dog.prototype.league = "Webville";

Show_Dog.prototype.stack = function() {
    console.log("stack");
}
Show_Dog.prototype.bait = function () {
    console.log("Bait");
}
Show_Dog.prototype.gait = function (kind) {
    console.log(kind + "ing")
}
Show_Dog.prototype.groom = function () {
    console.log("groom")
}

var Scotty = new Show_Dog("Scotty","Scottish Terrier",15,"Stalin")
Scotty.stack();
Scotty.bark();
Scotty.bait();
console.log(Scotty.league);
console.log(Scotty.species);
