const numbers = [34, 45, 56, 77, 84];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(t => t / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
const nameLengths = friends.map(friend => friend.length);
// console.log(firstLetters);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 30000},
    {id: 4, name: 'Tablet', price: 25000},
];
// const items = products.map(product => console.log(product));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items)
// console.log(prices)