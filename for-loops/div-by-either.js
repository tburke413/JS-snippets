// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments. 
// The function should print out all positive numbers less than max that are divisible by num1 or num2. 
// The function doesn't need to return any value. It should just print to the terminal.

function divByEither(num1, num2, max){
  for(let count=1;count<max;count++){
    count % num1 === 0 ? console.log(count) : count % num2 === 0 ? console.log(count) : false
  }
}

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

console.log();

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15