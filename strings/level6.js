const arr = ["apple", "banana", "grape", "orange", "kiwi"]


// Q1 . expected output is "apple, banana, grape, orange, kiwi"
const result1 = arr.join(", ");
console.log(result1);

// Q2. expected output is "APPLE"
const result2 = arr[0].toUpperCase();
console.log(result2);


const scores  = "32,42,53"
// Q3. Expected output is [32,42,53]
const result3 = scores.split(",").map(Number);
console.log(result3);