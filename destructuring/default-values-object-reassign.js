let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name:foo = "myName", friend: bar = "Annie"} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Annie"