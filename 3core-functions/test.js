const filter = (obj = {}, filter = []) =>
  Object.keys(obj).reduce((a, c) => {
    return filter.includes(c) ? { ...a, [c]: obj[c] } : a;
  }, {});

filter({ x: 1, y: 2, z: 3 }, ["y", "z"]);

let data = [
  { x: 1, y: 2, z: 3 },
  { x: 4, y: 5, z: 6 },
  { x: 7, y: 8, z: 9 },
  { x: 10, y: 11},
]

// const xAndZ = data.filter(obj => ({x:obj.x || null, z: obj.z || null}));
// .map(obj => return ob));
  
let xAndZ = data.map((obj) => ({ z: obj.z || null, x: obj.x || null }));
console.log(xAndZ);

// Mike's filter function
  // filter = (obj = {}, filter = []) => Object.keys(obj).reduce((a, c) => {
  //   return filter.includes(c) && obj[c] ? { ...a, [c]: obj[c] } : a;
  // }, null);
  
  // console.log(data.map((d) => filter(d, ["z"])).filter((o) => o));



  // Lost Officers example data
// let ranks = [];

// const officersIds = officers.map(officer => officer.name.split(' ')[0]);
// const officersIds = officers.map(officer => ranks.push(officer.name.split(' ')[0]));

// console.log(`newArr = ${JSON.stringify(newArr)}`);

// const highestLessThan500ThousandDeaths = data.reduce((target,record) => (record.deaths < 500000 && record.deaths > target.deaths) ? record : target, {deaths:0});
