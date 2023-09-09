const numbers = [2, 4, 2, 44, 53, 55, 65, 9, 77, 80];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 ===0);

// console.log(fives);
// console.log(fivesAll);


const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 30000},
    {id: 4, name: 'Tablet', price: 25000},
];

const cheap = products.find(product => product.price > 40000);
// console.log(cheap)