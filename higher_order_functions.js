var total = 0, count = 1;
while (count <=10) {
  total += count;
  count += 1;
}
console.log(total);

var array = [1,2,3];
for(var i = 0; i < array.length; i++) {
  var current = array[i]
  console.log(current)
}

const logEach = (array) => {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logEach(array)

const forEach = (array, action) => {
  for (var i = 0; i < array.length; i++) {
    action(array[i])
  }
}
forEach(array, console.log)

var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
})

console.log(sum)

forEach(["Wampeter", "Foma", "Granfalloon"], console.log)

// const gatherCorrelations = (journal) => {
//   var phis = {}
//   for (var entry = 0; entry < journal.length; entry ++) {
//     var events = journal[entry].events;
//     for (var i = 0; i < events.length; i++){
//       var event = events[i]
//       if (!((event) in phis))
//       phis[event] = phi(tableFor(event, journal))
//     }
//   }
//   return phis
// }

const gatherCorrelations = (journal) => {
  var phis = {}
  journal.forEach(function(event) {
    if (!(event in phis))
    phis[event] = phi(tableFor(event, journal))
  })
  return phis
}

const greaterThan = (n) => {
  return function(m) {
    return m > n;
  }
}
var greaterThan10 = greaterThan(10)
console.log(greaterThan10(11));

function noisy(f){
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg)
    console.log("called with", arg, "- got", val);
    return val
  }
}
noisy(Boolean)(-1);

function unless(test, then){
  if(!test) then()
}
function repeat(times, body){
  for(var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, " is even");
  })
})

function noisy(f){
  return function(arg){
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "-got", val);
  }
}

function transparentWrapping(f) {
  return function(){
    return f.apply(null, arguments)
  }
}

people = [
  {"name": "Emma de Milano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus De Millano", "mother": "Sophia van Damme"}, {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}
]
console.log(people[0].name);
console.log(people[1].name);
people[0].name = "Dave Davidson"
console.log(people[0].name);

for(person of people){
  console.log(person.name + " You did it")
}

var string = JSON.stringify({name: "Simon Hall", born: 1972})
console.log(string);
console.log(JSON.parse(string).born);

// var ancestry = JSON.parse(ancestry_object);
// console.log(ancestry.length);
