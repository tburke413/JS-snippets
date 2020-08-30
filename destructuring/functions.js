//Object Destructuring can be used to assign parameters to functions:
// function person({name: x, job: y} = {}) {
//   console.log(x);
// }

// person({name: "Michelle"});//"Michelle"
// person();//undefined
// person(friend);//Error : friend is not defined


function person({name: x = "Sarah", job: y = "Developer"} = {}) {
  console.log(x);
}
person({job: 2});//"Sarah"