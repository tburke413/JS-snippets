// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

// input string
// check each character against vowel characters, if it matches, replace with *, otherwise ignore

function bleepVowels(str1){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let singleChar = ''
  let newWord = ""

  for (let count = 0; count < str1.length; count++){
    singleChar = str1[count]

    vowels.indexOf(singleChar) > -1 ? singleChar = '*' : null
    newWord += singleChar
  }

  return newWord
}


console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'