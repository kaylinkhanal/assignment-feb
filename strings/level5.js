const text2 = '  luka modric is a legendary midfielder  ';
const quote = 'Success usually comes to those who are too busy to be looking for it.';

// Q1. Output should be:
// Luka Modric Is A Legendary Midfielder
// 👉 Remove extra spaces and convert to Title Case.
const formattedText = text2
 .trim()
  .replace(/\b\w/g, (l) => l.toUpperCase());
console.log(formattedText);

// Q2. Output should be:
// success usually comes to those who are too busy to be looking for it.
// 👉 Convert entire sentence to lowercase.
console.log(quote.toLowerCase());


// Q3. Output should be:
// 2
// 👉 Count how many times the word "to" appears.
 const count = quote
  .split(" ")
  .filter(word => word === "to").length;
console.log(count);  


// Q4. Output should be:
// relddifim yranegdel a si cirdom akul
// 👉 Reverse the string.
const reversed = text2
  .split("")             // split into characters
  .reverse()             // reverse the array of characters
  .join("");             // join back into a string

console.log(reversed);


// Q5. Output should be:
// true
// 👉 Check if the quote ends with "it.".
const result = quote.endsWith("it.");

console.log(result);
