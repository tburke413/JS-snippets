let person = {
  name: "Sarah",
  place: {
      country: "Nigeria", 
      city: "Lagos" }, 
  friends : ["Annie", "Becky"]
};

let {name:foo,
      place: {
        country : bar,
        city : x}
  } = person;

console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"