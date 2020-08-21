// map returns an array based on forEach logic
let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// Goal output of ids:
// [20, 24, 56, 88]

//----------------------------------------------------------------------------//
let ids = [];
officers.map(data => ids.push(data.id));

console.log(`ids: `, ids)
//----------------------------------------------------------------------------//

var officersIds = officers.map(officer => officer.id);
console.log(`officersIds: `, officersIds)

//----------------------------------------------------------------------------//

let ranks = [];
officers.map(officer => ranks.push(officer.name.split(' ')[0]));
console.log(`ranks:`, ranks);