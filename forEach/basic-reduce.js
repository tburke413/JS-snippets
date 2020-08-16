const usd = [29.76, 41.85, 46.5];

// return total sum of values in collection
const total = usd.reduce((total, amount) => total + amount); 
console.log(`total = ${total}`); // 118.11

// return the average
const avg = usd.reduce((total, amount) => total + amount)/usd.length; 
console.log(`avg = ${avg}`); // 39.37

// return the smallest value in collection
const min = usd.reduce((total, amount) => total > amount ? total : amount); 

console.log(`min = ${min}`); // 