// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

function stringRepeater(str1, num1){
  let newStr = ""
  for (let count=0;count<num1;count++){
    newStr += str1
  }  
  return newStr
}

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'