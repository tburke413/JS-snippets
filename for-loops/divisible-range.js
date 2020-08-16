// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
// function should print all numbers between `min` and `max` (exclusive) that are also divisible by
// num.

divisibleRange(num1, num2, max){
  newCount = num1 + 1;
  for(let count=newCount;count<max;count++){
    console.log(count)
  }
}

divisibleRange(17, 40, 9);
// prints
//  18
//  27
//  36

console.log();

divisibleRange(10, 24, 4);
// prints
//  12
//  16
//  20