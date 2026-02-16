// ==========================
// LEVEL 3 (Arrays - Beginner+)
// ==========================

const numbers = [10, 20, 30, 40, 50];

// Q1. Remove the first element of the array and print the updated array.
numbers.shift();
console.log(numbers);

// Q2. Add the value 5 to the beginning of the array and print the updated array.
numbers.unshift(5);
console.log(numbers);


// Q3. Replace the value 30 with 300 and print the updated array.
numbers[2]=300;
console.log(numbers);

// Q4. Find the index of the value 40 and print it.
console.log(numbers.indexOf(40));


// Q5. Extract the first three elements into a new array called firstThree and print it.
const firstThree=numbers.slice(0,3)
console.log(firstThree);

// Q6. Convert the array into a string separated by "-" and print the result.
console.log(numbers.join('-'));

// ==========================
// LEVEL 4 (Arrays - Slightly Advanced Beginner)
// ==========================

