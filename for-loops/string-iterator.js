// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

function stringIterate(str1){
  for (let count=0;count<str1.length;count++)
  console.log(str1[count])
}

stringIterate("celery");
// prints
//  c
//  e
//  l
//  e
//  r
//  y

console.log()

stringIterate("hat");
// prints
//  h
//  a
//  t