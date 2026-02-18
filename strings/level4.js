const sentence = 'Erling Haaland is a powerful striker.';
const email = 'haaland9@manchester.com';

// Q1. Output should be:
// Haaland
// 👉 Extract the last name.
const lastName = sentence.split(' ')[1];
console.log(lastName);

// Q2. Output should be:
// haaland9
// 👉 Extract username from email.
const username = email.split('@')[0];
console.log(username);

// Q3. Output should be:
// true
// 👉 Check if sentence includes the word "powerful".
console.log(sentence.includes("powerful")); 

// Q4. Output should be:
// Erling Haaland is a strong striker.
// 👉 Replace "powerful" with "strong".
let updatedsentence = sentence.replace("powerful", "strong");
console.log(updatedsentence);
