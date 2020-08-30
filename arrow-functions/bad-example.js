//The object to the right of the arrow should be placed in 
// parentheses because otherwise, the JavaScript interpreter 
// parses the curly braces as a function body, not an object:

let wrongExtract = ({ fruit }) => { fruit } //undefined
console.log(wrongExtract({fruit: "apple"})); //undefined