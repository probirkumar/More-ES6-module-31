// 1.
const numbers = [1, 3, 5, 7, 9];
const evenNumber = numbers.map(x => x + 1);
// console.log(evenNumber);

// 2.
const arrayNumbers = [33, 50, 79, 78, 90, 101, 30];
const divisible10 = arrayNumbers.filter(x => x % 10 === 0);
const divisible = arrayNumbers.find(x => x % 10 === 0);
// console.log(divisible);

// 3.
const reduceNum = [1, 9, 17, 22];
const total = reduceNum.reduce((previous, current) => previous + current, 0);
// console.log(total);

// 4. 
const students = {
    name: 'Fredie',
    age: 26
}
const age = students.age;
// console.log(age);

// 5.
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.88, 58,67',
            city: 'Hyderbad',
            country: 'India'
        }
    ]
}
const city = data.location[0].city;
// console.log(city)

// empty array using
let array = [ 1, 3, 4, 5, 6];
array = []
// console.log(array)
