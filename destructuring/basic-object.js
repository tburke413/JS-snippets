let person = {
  job: "Developer", 
  country: "Australia",
  name: "Sarah"
};

let {name, country, job} = person;

console.log(name);//"Sarah"
console.log(country);//"Australia"
console.log(job);//Developer"

let {name2, country2, job2} = {
  name2: "Tom", 
  country2: "Thailand", 
  job2: "Retired"
};

console.log(name2);//"Tom"
console.log(country2);//"Thailand"
console.log(job2);//"Retired"