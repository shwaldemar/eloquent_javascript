let toDoList = []
function rememberTo(task){
  toDoList.push(task);
}
function whatIsNext() {
  return toDoList.shift();
}
function urgentlyRememberTo(task) {
  toDoList.unshift(task);
}

rememberTo("eat")
console.log(whatIsNext());
urgentlyRememberTo("eat")
console.log(toDoList);

console.log([1,2,3,4,5,6,7,2].indexOf(2))
console.log([1,2,3,4,5,6,7,2].lastIndexOf(2))

console.log([0,1,2,3,4].slice(0,3))
console.log([0,1,2,3,4].slice(2))

array1 = [10,12,14, 16]
array2 = ["Simon", "Coding", "stuff"]

array3 = array1.concat(array2)
console.log(array3);

function remove(array, index){
  return array.slice(0, index)
    .concat(array.slice(index + 1))
}
console.log(remove(["a", "b", "c", "d", "e"], 2))

var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);

console.log("coconuts".slice(4,7));
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ree"))

console.log("    okay\n ".trim())
console.log("    okay\n")

var string = "abc"
console.log(string.charAt(1) + ", " + string);
console.log(string[1]);

function noArguments(){}
  noArguments(1,2,3);

function threeArguments(a,b,c){
  return "Simon"
}
threeArguments()
console.log(threeArguments())

journal = []
function addEntry(events, didITurnInToASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnInToASquirrel
  })
}

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.")
}
argumentCounter("Straw Man", "Tautology", "Ad hominem")

addEntry(["work", "touched tree", "pizza", "running", "television"], false);

function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel}
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry)
}
addEntry(true, "work", "touched tree", "pizza", "running", "television");

function randomPointOnCirle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  }
}
console.log(randomPointOnCirle(2));

console.log(Math.random())
console.log(Math.floor(Math.random()*10));

window = {
myVar: 10
}

console.log("myVar" in window)
console.log(window.myVar);
