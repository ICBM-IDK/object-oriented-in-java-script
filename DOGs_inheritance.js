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
function Dog(name, breed, weight) {
    this.name =name;
    this.breed=breed;
    this.weight =weight;
}

var Private_fluffers = new Dog("Fluffers","poodle",30)
var Sergeant_spot = new Dog("Spot","chihuahua",10)
var Commander_fido = new Dog("Fido","mixed",38)
var army = [Private_fluffers,Sergeant_spot,Commander_fido]

Private_fluffers.bark()
Sergeant_spot.run()
Commander_fido.wag()