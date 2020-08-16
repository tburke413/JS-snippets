// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

function fiveMultiplesOf(num1){
  for (let count=1; count<=5; count++){
    console.log(count * num1)
  }
}

fiveMultiplesOf(7);
// prints
//  7
//  14
//  21
//  28
//  35

console.log();

fiveMultiplesOf(3);
// prints
//  3
//  6
//  9
//  12
//  15