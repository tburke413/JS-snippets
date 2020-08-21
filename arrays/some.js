// some returns boolean on if one or more of its values 
//  correspond to something you’re looking for

var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

// bad way of doing it
// var listHasPilots = false;operatives.forEach(function (operative) {
//   if (operative.pilot) {
//     listHasPilots = true;
//   }
// });

// good way of doing it
var listHasPilots = operatives.some(operative => { return operative.pilot; });

console.log(`listHasPilots? = ${listHasPilots}`);