console.log(JSON.stringify([1,2,3].map(function(x) { return x + 2; })) === '[3,4,5]');

const data = [
  {
    "show": "tucker carlson",
    "network": "fox",
    "headline": "BLM ORGANIZER: LOOTING IS ACTUALLY REPARATIONS",
    "time": "9:01pm",
    "date": "8/12/2020",
  },
];

console.log(data);

console.log(JSON.stringify(data));

const abc = [1,2,3];
const lmn = [{"x":"1","y":"2"}];

console.log(abc);

console.log(lmn.map(function(q) { return q.x; }));

const timesTwo = (data) => {
  return data += 2;
}

let b = abc.map(function(q) { return q*2; });

console.log(`b = ${b}`);

const xyz = "hello world!";

console.log(JSON.stringify(xyz));