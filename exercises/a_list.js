arrayToList = (arr) => {
  let list=null;
  for(let i=arr.length-1; i>=0; i--){
    list = {
      value:arr[i],
      rest:list
    }
  }
  return list;
}
console.log(arrayToList([10, 20, 30]));

listToArray = (list) => {
  let arr= [];
  for(const prop in list) {
   const value = list[prop];
    typeof value === 'object'? arr.push(listToArray(value)) : arr.push(value);
  }
  arr=[].concat.apply([], arr);
  return arr;
}
console.log(listToArray(arrayToList([10, 20, 30,40,50,60,70])));
// → [10, 20, 30]

prepend = (value, rest) => {
  let list = {
   value:value,
    rest:rest,
  }
  return list;
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

nth = (list,num) => {
  let answer;
  return num===0 ? (list.value) : (nth(list.rest, num-1));
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
