const arr = ["apple", "banana", "grape", "orange", "kiwi"]


// Q1 . expected output is "apple, banana, grape, orange, kiwi"
console.log(arr.join(", "))

// Q2. expected output is "APPLE"

console.log(arr[0].toUpperCase())


const scores  = "32,42,53"
// Q3. Expected output is [32,42,53]
const Arr = scores.split(",").map(Number)
console.log(Arr)