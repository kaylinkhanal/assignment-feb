const fullName = 'Kylian Mbappe';
const text = 'Coding is fun and coding is creative.';

// Q1. Output should be:
// Hello KYLIAN!
// 👉 Convert only the first name to uppercase and print the message.
const firstName = fullName.split(' ')[0];
console.log('Hello ${firstName.toUpperCase()}!');

// Q2. Output should be:
// Mbappe Kylian
// 👉 Swap first name and last name.
let nameParts = fullName.split(' ');
let swappedName = nameParts[1] + ' ' + nameParts[0];
console.log(swappedName);

// Q3. Output should be:
// Coding is exciting and coding is creative.
// 👉 Replace only the first word "fun" with "exciting".
let updatedText = text.replace("fun", "exciting");
console.log(updatedText);

// Q4. Output should be:
// Coding is fun & coding is creative.
// 👉 Replace "and" with "&".
let newText = text.replace("and", "&");
console.log(newText);

