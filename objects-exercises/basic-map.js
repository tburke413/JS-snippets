let contacts = new Map()
contacts.set('Taya', {phone: "213-555-1234", address: "123 N 1st Ave"});
contacts.set('Tom', {phone: "637-815-1654", address: "456 E 2nd Ave"});
console.log(contacts);

console.log(contacts.has('Taya')) // true

console.log(contacts.get('Tom'));

console.log(`contacts is size: ${contacts.size}`);

contacts.delete('Tom');

console.log(contacts);

console.log(`contacts is size: ${contacts.size}`);
