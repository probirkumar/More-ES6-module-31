const numbers = [2, 4, 6, 3, 5];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }

// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubledItOld(number);
        output.push(doubled);
    }
    return output;
};

function doubledItOld(number) {
    return number * 2;
};

const result = getDoubles(numbers);
// console.log(result);


const doubledIt = num => num * 2;

const makeDouble = numbers.map(doubledIt);
console.log(makeDouble);

const makeDoubleDiract = numbers.map(num => num * 3);
const makeDoubleDiract2 = numbers.map(x => x * 2);
// console.log(makeDoubleDiract);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);
/*
Purpose
 1. get an array
 2. for every elements of the array do something
 3. store the result is an array
 4. return the result of an array
*/



