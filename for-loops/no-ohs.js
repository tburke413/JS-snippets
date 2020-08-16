// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

function noOhs(str1){
  for(let count=0;count<str1.length;count++){
    if (str1[count] !== 'o'){
      console.log(str1[count]);
    }
  }
}

noOhs("code");
// prints
//  c
//  d
//  e

console.log();

noOhs("school");
// prints
//  s
//  c
//  h
//  l