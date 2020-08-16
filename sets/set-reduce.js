const mySet = new Set([1,2,3,4]);

let newSet = [...mySet,5,6,7,8,9];

// console.log(newSet);

//casting set as an array to run reduce
let newSet2 = [...mySet].reduce((a,c) => a + c,0);

console.log(newSet2);