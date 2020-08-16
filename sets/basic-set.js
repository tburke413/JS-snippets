let mySet = new Set()

mySet.add(10)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
console.log(mySet);

let o = {a: 1, b: 2}
mySet.add(o)
console.log(mySet);
console.log();

o.a = 7;
mySet.add(o)
console.log(mySet);
console.log();

o.a = 10;
mySet.add(o)
console.log(mySet);

o.b = 9;
mySet.add(o)
console.log(mySet);
console.log();

let a = {a: 10, b: 9}
mySet.add(a)
console.log(mySet);
console.log();

mySet.add({a: 10, b: 9})   // o is referencing a different object, so this is okay
console.log(mySet);
console.log();

console.log(mySet.has(10));              // true
console.log(mySet.has(3));              // false, since 3 has not been added to the set
console.log(mySet.has(5));              // true
console.log(mySet.has(Math.sqrt(25)));  // true
console.log(mySet.has('Some Text'.toLowerCase())); // true
console.log(mySet.has(o));       // true

console.log(mySet.size);         // 6

mySet.delete(5)    // removes 5 from the set
console.log(mySet);