const message = "JavaScript is Fun";
const word1 = "Hello";
const word2 = "World";

// Q1: Check if the 'message' string contains the word "Fun".
// Expected output: true
// Hint: Use the .includes() method.
const fun = message.includes("Fun")
console.log(fun)


// Q2: Convert the 'message' string to all lowercase letters.
// Expected output: "javascript is fun"
// Hint: Use the .toLowerCase() method.
const low = message.toLowerCase()
console.log(low)

// Q3: Use a Template Literal to join 'word1' and 'word2' with a space in between.
// Expected output: "Hello World"
// Hint: Use ` ${} ${} `
const joining = `${word1} ${word2}`
console.log(joining)


// Q4: Find the position (index) of the letter "J" in the 'message' string.
// Expected output: 0
// Hint: Use the .indexOf() method.
const index = message.indexOf("J")
console.log(index)