let isLoggedIn = true;
let isAdmin = false;
let userPoints = 120;

// Q1: Create a check to see if the user is allowed to edit a post.
// Condition: The user must be 'isLoggedIn' AND 'isAdmin'.
const edit = isLoggedIn && isAdmin
console.log(edit)


// Q2: Check if the user is a "VIP".
// Condition: A user is a VIP if their 'userPoints' are greater than 100.
const vip = userPoints > 100
console.log(vip)

// Q3: Check if a username is "too short".
// Let const username = "Ram"
// Condition: Check if username.length is less than 5.
const username = "Ram" 
const short = username.length < 5
console.log(short)