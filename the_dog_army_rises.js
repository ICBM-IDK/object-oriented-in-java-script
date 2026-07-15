function Dog(name, breed, weight) {
    this.name =name;
    this.breed=breed;
    this.weight =weight;
    this.bark = function(){
        if (this.weight > 25) {
            alert(this.name + " says woof! ");
        }
        else{
            alert(this.name + " says Yip! ");
        }
    };
}
var Private_fluffers = new Dog("Fluffers","poodle",30)
var Sergeant_spot = new Dog("Spot","chihuahua",10)
var Commander_fido = new Dog("Fido","mixed",38)
var army = [Private_fluffers,Sergeant_spot,Commander_fido]

for (var index = 0 ; index < army.length; index++){
    var size = "small";
    if (army[index].weight > 10){
        size = "large"
    }
    console.log("Army personnel: " + army[index].name
    + ", combat size: " + size + ", platoon: " + army[index].breed)
}

for (var index2 = 0 ; index2 < army.length ; index2++){
    army[index2].bark();
}