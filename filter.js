const numbers = [2, 4, 2, 44, 53, 55, 65, 9, 77, 80];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(num => num % 2 === 0);

// console.log(bigNumbers);
// console.log(tiny);
// console.log(even);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 30000},
    {id: 4, name: 'Tablet', price: 25000},
];
// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 40000);
console.log(expensive)