// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

let wordCount = (sentence, targetWords) => {
  let foundCount = 0;
  let splitSentence = sentence.split(' ');

  for (let i = 0; i < splitSentence.length; i++){
    targetWords.indexOf(splitSentence[i]) > -1 ? foundCount++ : null
  }

  return foundCount;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3