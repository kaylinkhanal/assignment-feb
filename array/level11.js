//Create a new array by copying:

const arr = [1, 2, 3];
const arr2 = [...arr]
console.log(arr2);

//Merge two arrays:

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]
console.log(merged)

//Add 0 at the beginning and 5 at the end of:

const numbers = [1, 2, 3, 4]
const newnumbers = [0, ...numbers, 5]
console.log(newnumbers)

// Clone an array and modify one value without affecting the original.

// Remove the first element using spread.

// Insert 99 at index 2 of:

const arr1 = [1, 2, 3, 4];

const arr3 = [...arr1]
console.log(arr3)

const [first, ...rest] =  arr1
console.log(rest)

const arr4 = [...arr1.slice(0, 2), 99, ...arr1.slice(2)]
console.log(arr4)

// Merge multiple arrays into one:

const d = [1];
const e = [2];
const c = [3];
const merged2 = [...d, ...e, ...c]
console.log(merged2)