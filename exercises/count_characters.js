function countBs(string) {
  count = 0
  for (let i = 0; i < string.length; i++) {
    if(string.charAt(i) === "B") {
      count ++
    }
  }
  return count
}
console.log(countBs("BSimon"))

function countChar(string, character){
  count = 0
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count ++
    }
  }
  return count + ": " + character
}

console.log(countChar("Simon", "S"))
