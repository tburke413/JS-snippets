let introduction = ["Hello", "I" , "am", "Sarah"];
let [salutation, pronoun] = introduction;

console.log(salutation);//"Hello"
console.log(pronoun);//"I"

let [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(pronoun);//"I"
console.log(name);//"Sarah"