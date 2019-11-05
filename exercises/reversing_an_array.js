strings_and_numbers_test_array = ['simon', 10, 2, "davos", "bertrand"]
numbers_test_array = [1,2,3,4,5,6,7,8,9,10]

function reverseArray(array){
  let result = array.reverse()
  console.log(result)
}
console.log(numbers_test_array);
reverseArray(numbers_test_array);
console.log(strings_and_numbers_test_array);
reverseArray(strings_and_numbers_test_array)

reverseArrayWithoutBuiltInReverseMethod = (array) => {
  let reversed = []
  for (let i = array.length; i > 0; i--) {
    reversed.push(array[i])
  }
  console.log(array)
}

reverseArrayWithoutBuiltInReverseMethod(numbers_test_array)
reverseArrayWithoutBuiltInReverseMethod(strings_and_numbers_test_array)


function reverseArrayInPlace(array) {

  for (let i = 0; i < Math.floor(array.length/2); i++) {
    console.log(i, array.length-i-1, array[i], array[array.length-i-1], array);
    let swap = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = swap;
  }
  return array;
}
reverseArrayInPlace(numbers_test_array)
