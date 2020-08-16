// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

let reverseArray = (array) => {
  let newArray = [];
  for(let i = (array.length-1); i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]