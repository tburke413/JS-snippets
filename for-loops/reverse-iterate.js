// Write a function `reverseIterate` that accepts a string as an argument. The function should print
// the characters of the string one by one, in reverse order. The function doesn't need to return any
// value. It should just print to the terminal.

function reverseIterate(str1){
  for(let count=str1.length-1;count >= 0;count--){
    console.log(str1[count])
  }
}

reverseIterate("carrot");
// prints
//  t
//  o
//  r
//  r
//  a
//  c

console.log();

reverseIterate("box");
// prints
//  x
//  o
//  b