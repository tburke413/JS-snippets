// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.


function removeCapitals(str1){
  let newStr = ""
  let singleChar = ""

  for(let count=0;count<str1.length;count++){
    singleChar = str1[count]
    singleChar === ' ' ? newStr += singleChar : singleChar === singleChar.toUpperCase() ? null : newStr += singleChar
  }

  return newStr
}

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'