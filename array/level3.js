const arr = [7, 3, 15, 7, 22, 3, 9, 30];

// Q1. Remove all duplicate values from the array.
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// Q2. Create a new array that contains only numbers greater than 10.
const greaterThanTen = arr.filter(number => number > 10);
console.log(greaterThanTen);

// Q3. Find the total sum of all numbers in the array.
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Q4. Add the number 100 at index position 4 without removing any elements.
arr.splice(4, 0, 100);
console.log(arr);

