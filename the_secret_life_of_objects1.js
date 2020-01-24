// //Methods
// var rabbit = {}
// rabbit.speak = function(line){
//   console.log("The rabit says '" + line + "'");
// }
// rabbit.speak("I'm alive.")
//
// function speak(line){
//   console.log("The " + this.type + " rabbit says '" + line + "'");
// }
//
// let whiteRabbit = {type: "white", speak: speak};
// let fatRabbit = {type: "fat", speak: speak};
//
// whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// fatRabbit.speak("I could sure use a carrot right now.");
//
// speak.apply(fatRabbit, ["Burp!"])
// speak.call({type: "old"}, "Oh my.")

//Protypes
//var empty = {}
//console.log(empty.toString);
//function to string
//console.log(empty.toString());
//object object
//
//console.log(Object.getPrototypeOf({}) == Object.prototype);
//true
//console.log(Object.getPrototypeOf(Object.prototype));
//null
//console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// //true
//console.log(Object.getPrototypeOf([]) == Array.prototype);
// //true
//
// var protoRabbit = {
//   speak: function(line){
//     console.log("The " + this.type + " rabbit says '" + line + "'");
//   }
// };
//
// var killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak = "SKREEEE!"

//Constructors
function Rabbit(type){
  this.type = type;
}

var killerRabbit = new Rabbit("killer")
var blackRabbit = new Rabbit("black")

console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line){
  console.log("The " + this.type + " rabbit says '" + line + "'");
}

blackRabbit.speak("Dooom!!!")

//Overriding derived properties
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody!"
console.log(killerRabbit.teeth);
//
// console.log([1,2].toString());
// console.log(Object.prototype.toString.call([1,2]));
//
// //Prototype Interference
//
// Rabbit.prototype.dance = function(){
//   console.log("The " + this.type + " rabbit dances a jig.");
// };
//
// killerRabbit.dance()
//
// let map = {}
// function storePhi(event, phi){
//   map[event] = phi
// }
//
// storePhi("pizza", 0.069)
// storePhi("touched tree", -0.081)
//
// Object.prototype.nonsense = "Hi!";
// for (var name in map)
// console.log("this is ", name);
// console.log("nonsense" in map);
// console.log("toString" in map);
// delete Object.prototype.nonsense;
//
// for (var name in map)
// console.log("this is ", name);
//
// console.log(map.hasOwnProperty("toString"));
//
// for(let name in map) {
//   if(map.hasOwnProperty(name)){
//     console.log(name, "This is own property");
//   }
// }
