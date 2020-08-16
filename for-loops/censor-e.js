// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

function censorE(str1) {
  let newStr = ""
  let singleChar = ""

  for(let count=0;count<str1.length;count++){
    singleChar = str1[count]
    singleChar === 'e' ? newStr += '*' : newStr += singleChar
  }

  return newStr
}

console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'