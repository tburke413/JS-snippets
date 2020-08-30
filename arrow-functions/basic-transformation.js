let extract = ({ fruit, color = "blue", calories }) => ({ fruit, color })

console.log(extract({ fruit: "apple", "color": "red" }));
console.log(extract({ fruit: "apple", "calories": 90 }));