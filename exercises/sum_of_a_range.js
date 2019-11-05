function range(start, end) {
  let difference = end - start
  let rangeArray = []

  for(let i = 0; i <= difference; i++) {
    rangeArray.push(start + i)
  }
  return rangeArray
}

test_array = [10,12,14,15]

function sum(array){
  total = 0
  for(let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}
// console.log(sum(test_array))

// console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(1+2+3+4+5+6+7+8+9+10);
