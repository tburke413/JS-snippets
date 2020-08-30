let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

let {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]