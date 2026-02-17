/*Q1: The File Extractor
const fileName = "report.pdf";
Use the .slice() method to extract only the extension ("pdf") and save it to a variable.*/

const fileName = "report.pdf"
let output = fileName.toString().slice(7 ,10);
console.log(output)


/*Q2: The Word Replacer
const mood = "I am sad";
Replace the word "sad" with "happy" and print the result.*/

const mood = "I am sad"
let output1 = mood.replace('sad','happy')
console.log(output1)


/*Q3: The Domain Checker
const email = "user@gmail.com";
Write an if/else statement: If the email ends with ".com", print "Valid Email." Otherwise, print "Invalid Domain."
Hint: Use the .endsWith() method.*/

const email = "user@gmail.com"
if (email.endsWith(".com")) {
    console.log("Valid Email");
} else {
    console.log("Invalid Domain");
}