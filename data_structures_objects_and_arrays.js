var listOfNumbers = [2,3,5,7,11]
console.log(listOfNumbers[1])
console.log(listOfNumbers[1 - 1])

let doh = "Doh"
console.log(doh.toUpperCase())
console.log(doh.toLowerCase())
console.log(doh.charAt(1).toUpperCase())
console.log(doh.slice(1))
console.log(doh.split("").splice(0,2).join(''));
console.log(typeof doh.toUpperCase())

let mack = []
mack.push("Mack");
mack.push(" the", " knife")
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack.shift());
console.log(mack.splice(0));
console.log(mack);

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"],
  plans: ["work", "surfing", "touched tree"]
}

console.log(day1.events[1]);

for(event of day1.events) {
  console.log(`SIMON this one: ${(event) === "touched tree"}`)
}

console.log(day1.events.filter(event => {
    return event.length > 5
}));

day1.events.forEach(event => {
   console.log(event + " That worked")
})

let mapped = day1.events.map(event => {
  return event + "sorted"
})
  console.log(`This is mapped each element has text added ${mapped}`);

  let place = day1.events.indexOf("touched tree")
  console.log(`touched tree's index in events is ${place}`)
  console.log(`Proof of index: ${day1.events[1]}`);

let total = listOfNumbers.reduce((accum, number)=>{
  return accum + number
},0)
console.log(`This is the total: ${total}`);

let anotherMap = listOfNumbers.map(number => { return number * 10})
console.log(`numbers * 10: ${anotherMap}`);
console.log(`the index of 20 is ${anotherMap.includes(20)} and it is at position ${anotherMap.indexOf(20)} in the array`);

console.log(correlations);

for(let i=0; i < day1.events.length; i++){
  if (day1.events[i] === "work") {
    console.log("Woo Hoo it worked!")
  }
}

for (let i = 0; i < day1.events.length; i++) {
  for (let j = 0; j < day1.plans.length; j++) {
  }
  if(day1.events[i] === day1.plans[2]) {
    day1.squirrel = true
    console.log("Object changed on loop condition!!")
    console.log(day1.squirrel)
    console.log("Nested loopooooo works too!!!!")
  }
}

let anObject = {left: 1, right: 2}
console.log(`This is the left one: ${anObject.left}`);
console.log(`This is the right one: ${anObject.right}`);

delete anObject.left
console.log(anObject);
anObject.left = 24
console.log(anObject);

let anObject1 = {value: 10}
let anObject2 = anObject1
let anObject3 = {value: 10}
console.log(anObject1.value === anObject3.value);
anObject1.value = 15
console.log(anObject2.value);

let journal = []

function addEntry(events, didITurnInToASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnInToASquirrel
  })
}
addEntry(["work", "touched turnip", "zarty fart blast", "gertrude"], false)
console.log(journal);
addEntry(["bruah", "gooonah", "whehey"], true)
console.log(journal);

function phi(table){
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt(
    (table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]))
}
console.log(phi([76,9,4,1]));

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for (let i = 0; i< journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", journal));

var map = {}
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log('pizza' in map);
console.log('touched tree' in map);
console.log(map);

for (event in map) {
  console.log(`The correlation for ${event} is ${map[event]}`);
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry ++){
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i ++) {
      var event = events[i]
      if (!(event in phis))
      phis[event] = phi(tableFor(event, journal))
    }
  }
  return phis;
}

var correlations = gatherCorrelations(journal);
console.log(correlations.bruah);
console.log(journal)
