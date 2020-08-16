// Write a function `maximum` that accepts an array of numbers as an argument. The function should 
// return the largest number of the array. If the array is empty, then the function should return null.

let maximum = (array) => {
  let maxVal = -1;

  for (let i = 0; i < array.length; i++){
    array[i] > maxVal ? maxVal = array[i] : null;
  }

  let isEmpty = array.length === 0 ? true : false;

  if (isEmpty) return null;
  
  return maxVal;

}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null