// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = (sentence) => {
  let newSentence = sentence.split(' ')
  let altSentence = [];
  
  for (let i = 0; i < newSentence.length; i++){
    i % 2 === 0 ? altSentence.push(newSentence[i].toLowerCase()) : altSentence.push(newSentence[i].toUpperCase())
  }

  return altSentence.join(' ');
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'