// reduce returns accumulator value into each evaluation of the function forEach item
//    2nd parameter after callback function is default/starting value
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

// var totalYears = pilots.reduce(function (accumulator, pilot) {
//   return accumulator + pilot.years;
// }, 0);

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log(totalYears);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
console.log(mostExpPilot);