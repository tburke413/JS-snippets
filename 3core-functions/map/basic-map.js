// What you have
let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// What you need
[20, 24, 56, 88]

//----insert code here----

// let ids = [];

// officers.map((data) => {
//   ids.push(data.id);
// });

// var officersIds = officers.map(function (officer) {
//   return officer.id
// });

// -----------------

// Excellent Example 2

let ranks = [];

// const officersIds = officers.map(officer => officer.name.split(' ')[0]);
const officersIds = officers.map(officer => ranks.push(officer.name.split(' ')[0]));

// console.log(officersIds);
console.log(ranks);