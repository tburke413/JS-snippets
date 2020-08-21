// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = function (words){
  let filteredWords = []
  for (let count = 0; count < words.length; count++){
    words[count].length < 5 ? filteredWords.push(words[count]) : null
  }

  return filteredWords
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']