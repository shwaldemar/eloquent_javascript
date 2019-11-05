const deepEqual = (object1, object2) => {
  return JSON.stringify(object1) === JSON.stringify(object2) ? true : false;
}

var obj = {here: {is: "an"}, object: 2}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
