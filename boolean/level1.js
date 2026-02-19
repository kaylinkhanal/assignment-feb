let a =10
let b = 20

// Q1. check if a is greater than b
if (a>b)
{console.log("a is greater than b");}
else{console.log("a is not greater than b");}


/// Q2. check if  10 * a and check if it is greater or euqals than b
if(10*a>=b)
{console.log("10*a is greater or equate to b");}
else{console.log("10*a is less than b");}

// Q3. check if b is divisible by a
const isdivisible=(a,b)=>b%a===0;
console.log(isdivisible(a,b));