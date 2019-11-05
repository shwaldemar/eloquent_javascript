var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current)
}, []));

let oneTwo = arrays[0].concat(arrays[1])
console.log(oneTwo);
let oneTwoThree = oneTwo.concat(arrays[2])
console.log(oneTwoThree);
