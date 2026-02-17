/*Q1: The "Secret" Masker
const cardNumber = "123456789";
Use .slice() to take the last 3 digits of the card number and combine them with stars to look like this: "******789".*/
const cardNumber = "123456789";
let output = cardNumber.toString().slice(6 ,9);
console.log(output)



/*Q2: The Sentence Counter
const bio = "I love coding. Coding is life.";
Use the .split() method to find out how many words are in the bio string.
Hint: Split by spaces and then check the .length.*/

const bio = "I love coding. Coding is life."
const words = bio.split(/\s+/) 
const wordCount = words.length

console.log(wordCount)



/*Q3: Search & Rescue
const data = "Error: System failure at 5pm";
Write a check to see if the string starts with the word "Error".
Hint: Use the .startsWith() method.*/

const data = "Error: System failure at 5pm"
const startsWithError = data.startsWith("Error")

console.log(startsWithError)