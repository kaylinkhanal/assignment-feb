// Q1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arr1 and arr2 into a new array called combined.
const combined = [...arr1, ...arr2];
console.log(combined);


// Q2
const numbers = [1, 2, 3, 4 ];

// Create a new array called newNumbers.
// Add 5 at the beginning and 40 at the end using spread operator.
const newNumbers = [5,...numbers,40];
console.log(newNumbers);



// Q3
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'grape'];

// Create a new array called allFruits.
// Expected output:
// ['apple', 'banana', 'mango', 'orange', 'grape']
// Add 'mango' in between using spread operator.
const allFruits = [...fruits, 'mango', ...moreFruits];
console.log(allFruits);

// Q4
// Create a function sum that accepts unlimited numbers using rest operator
// Return the total sum
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1,2));



// Q5
//const numbers = [1, 2, 3, 4];

// Use destructuring with rest operator
// Store first number in variable first
// Store remaining numbers in variable restNumbers
const [first, ...restNumbers] = numbers;
console.log(restNumbers);