// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.

function stayPositive(array){
  posArray = []

  for (let count=0; count < array.length; count++){
    array[count] > 0 ? posArray.push(array[count]) : null
  }
  return posArray
}

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []