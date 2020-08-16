// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

const numOdds = (array) => {
  let oddCounter = 0;
  for(let count=0;count<array.length;count++){
    array[count] % 2 === 0 ? null : oddCounter++;
  }
  return oddCounter;
}

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0