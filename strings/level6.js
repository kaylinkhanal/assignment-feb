const arr = ["apple", "banana", "grape", "orange", "kiwi"]


// Q1 . expected output is "apple, banana, grape, orange, kiwi"
const output = arr.join(", ")
console.log(output)

// Q2. expected output is "APPLE"
const capital = arr.map(arr => arr.toUpperCase());
console.log(capital);


const scores  = "32,42,53"

// Q3. Expected output is [32,42,53]
const output1 = scores.split(',').map(Number);
console.log(output1)