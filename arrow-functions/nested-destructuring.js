let extractFruit = ({ container: { box: { fruit } } }) => ({ fruit })
console.log(extractFruit({ container: { box: { fruit: "apple" } } })); // { fruit: "apple" }