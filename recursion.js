greet = (who) => {
  console.log("Hello " + who)
}

greet("Simon")
console.log("Bye")

console.log("Hello", "Good evening", "How do you do?")

function wrapValue(n) {
  let localVariable = n
  return function() {return localVariable}
}
let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
console.log(wrap1())
console.log(wrap2())

function power(base, exponent) {
  if (exponent == 0)
  return 1;
  else {
    return base * power(base, exponent - 1)
  }
}
console.log(power(2,3))

function findSolution(target){
  function find(start, history){
    if (start == target)
    return history;
    else if (start > target)
    return null;
    else
    return find(start + 5, "(" + history + " + 5)") ||
           find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}
console.log(findSolution(24))

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  let chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens")
}
printFarmInventory(7,11)

function printZeroPaddedWithLabel(number,label) {
  let numberString = String(number);
  while (numberString.length < 3)
  numberString = "0" + numberString;
  console.log(numberString + " " + label)
}
printZeroPaddedWithLabel(2, "Simon")

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs")
}

printFarmInventory(7,11,3)

function zeroPad(number, width){
  let string = String(number)
  while (string.length < width)
  string = "0" + string
  return string
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + "Cows");
  console.log(zeroPad(chickens, 3) + "Chickens");
  console.log(zeroPad(pigs, 3) + "Pigs");
}

printFarmInventory(7,16,3)
