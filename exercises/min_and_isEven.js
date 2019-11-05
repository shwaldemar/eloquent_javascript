function min(a,b) {
  return Math.min(a,b)
}
console.log(min(100, 2))

function isEven(number){
  if (number == 0) {
    return true
  }
  else {
    return (-number % 2 == 0) ? true : false;
  }
  return isEven(number -2)
}
console.log(isEven(75))
