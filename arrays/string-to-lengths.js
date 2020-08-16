// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

let stringsToLengths = (words) => {
  let newArray = [];

  for(let count = 0; count < words.length; count++){
    newArray.push(words[count].length)
  }
  return newArray;
}


console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]