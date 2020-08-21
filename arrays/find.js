// find returns the first object that matches the condition

var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: true },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

const firstPilot = operatives.find(operative => !operative.pilot);

console.log(JSON.stringify(firstPilot));