// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = (sentence) => {
  sentence = sentence.split(' ');
  // console.log(sentence);
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++){
    sentence[i].length < 4 ? null : newSentence += `${sentence[i]} `;
  }

  return newSentence;
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'