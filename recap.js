//  1. var, let, const
// break up with var
 const numbers = [34, 65, 77, 84];
 let salary = 5000;
 salary = 5500;

//  2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
};

// 3. template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0 , 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`;

// 4. Arrow Function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [12, 14, 12, 16, 18];
const newAges = [...ages, 22, 21, 24];

// destructuring
const {a, b, ...n} = { a: 50, b: 60, c: 45, name: 'Probir', address: 'NAtore'};
// console.log(a, b, n)
const [x, y, ...r] = [34, 65, 12, 88, 45, 77];