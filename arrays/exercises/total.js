// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

function total(array){
  let total = 0
  for(let count=0; count < array.length; count++){
    // console.log(array[count])
    total += array[count]
  }

  return total
}

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0