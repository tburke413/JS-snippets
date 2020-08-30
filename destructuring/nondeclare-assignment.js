let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;

// () required around this (but before semicolon) since
//   it evaluates to a block instead of an object literal
({name, country, job} = person);

console.log(name);//"Sarah"
console.log(job);//"Developer"