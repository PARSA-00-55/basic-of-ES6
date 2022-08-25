const numbers = [12, 56, 87, 44];
const half = numbers.map( n => n/2 );

//we can use map on string
//makeing an array with the first latter 
const friends = [`Tom Hanks`, `Tom Cruise`, `Tom Brady`, `Tom Solaiman`];
const firstLetters = friends.map(friend => friend[0]);

//search the length
const nameLengths = friends.map(friend => friend.length);

//object
const products = [
    {id: 1, name: `laptop`, price:`45000`},
    {id: 1, name: `mobile`, price:`80000`},
    {id: 1, name: `watch`, price:`35000`},
    {id: 1, name: `tablet`, price:`23000`},
]
const items = products.map(product => product);
const itemsName = products.map(product => product.name);

console.log(itemsName);
// console.log(nameLengths);