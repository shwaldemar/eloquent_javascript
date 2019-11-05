
console.log(`Math.max(2,4)`, Math.max(2,4));
console.log(`Math.min(2,4)`, Math.min(2,4));

var theNumber = 1010
if(!isNaN(theNumber)) {
    console.log(`CONTROL FLOW: It's a number: ${theNumber}`);
} else {
console.log(`CONTROL FLOW: So why no number ${theNumber}`);}

if (theNumber < 10) {
  console.log(`CONTROL FLOW: small number ${theNumber}`)
} else if (theNumber < 100) {
  console.log(`CONTROL FLOW: medium number ${theNumber}`)
} else {
  console.log(`CONTROL FLOW: large number ${theNumber}`)
}

var number = 0
while (number < 10) {
  console.log(`DO WHILE number < 10: ${number}`)
  number = number + 2
}

var num = 10
while (num !== 0) {
  console.log(`DO WHILE number !==0: ${num}`)
  num = num -2
}

var result = 1
var count = 0
while (count < 10) {
  result = result *2
  console.log(`WHILE count < 10 print result * 2: ${result}`)
  count = count +1
}

var thing = 0
for (let i = 0; i < 10; i ++) {
  thing = thing + 1
  console.log(`FOR LOOP i < 10: ${thing}`)
}

for (var current = 20; ;current ++) {
  if (current % 7 === 0) {
    break
  } else {
    console.log(`FOR LOOP USING BREAK f (current % 7 === 0) ${current}`)
  }
}


let counter = 1
counter = counter +=1
console.log(counter);

for (var number = 0; number <=12; number +=2){
  console.log(number);
}

var square = function(x) {
  return x * x
}

console.log(`calls the square function with 10: ${square(10)}`);

var make_noise = function(){
  return "Boing!"
}
console.log(`calls the make noise function: ${make_noise()}`);

var power = function(base, exponent) {
  var result = 1;

  for (var count = 0; count < exponent; count ++) {
    result *= base
  }
  return result
}
console.log(`calls power function: ${power(2,10)}`);


var x = "outside"
var f1 = function () {
  var x = "inside"
  return x
}

console.log(`Print x variable outside function: ${x}`);
console.log(`Print x variable inside function: ${f1()}`)

var f2 = function() {
  x = "inside f2 function"
  return x
}
console.log(`Print x variable inside another function: ${f2()}`);
