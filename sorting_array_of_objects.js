//console.log(['bjork', 'Bjork', 'Björk'].sort())
// [ 'Bjork', 'Björk', 'bjork' ]

//console.log(['bjork', 'Bjork', 'Björk'].sort((a, b) => a.localeCompare(b)));
//  [ 'bjork', 'Bjork', 'Björk' ]



// const singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
// ];
//
// // console.log(singers.sort(compareValues('born', 'desc')))
// console.log(singers.sort(compareValues('band')))
// function compareValues(key, order = 'asc'){
//   return function innerSort(a,b) {
//     if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
//       //property doesn't exist in either
//       return 0
//     }
//     const varA = (typeof a[key] === 'string')
//       ? a[key].toUpperCase() : a[key];
//     const varB = (typeof b[key] === 'string')
//       ? b[key].toUpperCase() : b[key];
//
//     let comparison = 0
//
//     if (varA > varB){
//       comparison = 1;
//     }
//     else if (varB > varA){
//       comparison = -1;
//     }
//     return (
//       (order === 'desc') ? (comparison * -1) : comparison
//     )
//   }
// }
// function compare(a,b){
//   const bandA=a.born
//   const bandB=b.born
//   let comparison = 0
//   if (bandA > bandB){
//     comparison = 1
//   }
//   else if (bandB > bandA){
//     comparison = -1
//   }
//   return comparison // * -1 to reverse order
// }
// console.log(singers.sort(compare))


// const nums = [79, 55, 12, 4, 10000,4,3, -50000000];

// function compare(a, b) {
//   if (a > b) return 1;
//   if (b > a) return -1;
//
//   return 0;
// }
// const compare = (a,b)=> a-b
//
// console.log(nums.sort())
// console.log(nums.sort(compare));
// => 4, 12, 48, 79




// const bar = [5, 18, 32, new Set, { user: 'Eleanor Roosevelt' }];
// console.log(bar);
// bar.sort(); // returns [ 18, 32, 5, { user: 'Eleanor Roosevelt' }, Set {} ]
// console.log(bar);
// newSortedBar = [...bar].sort()
// console.log("new Bar", newSortedBar)
// const baz = ['My cat ate my homework', 37, 9, 5, 17]
// console.log(baz); // ['My cat ate my homework', 37, 9, 5, 17];
// sortedBaz = [...baz].sort()
// console.log(sortedBaz); // [ 17, 37, 5, 9, 'My cat ate my homework' ]
//
//
// const foo = [9, 1, 4, 'zebroid', 'afterdeck'];
// console.log(foo);
// foo.sort(); // returns [ 1, 4, 9, 'afterdeck', 'zebroid' ]
// console.log(foo);
