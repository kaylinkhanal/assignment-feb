const numbers = [12, 25, 8, 40, 17, 30, 5];
// Using a for...of loop:

// Print all numbers greater than 20.
for (let item of numbers){
    if (item >20){
        console.log(item)
    }
}
console.log(" ")

// Calculate the sum of all odd numbers.
let sum = 0
for (let item of numbers){
    if (item %2 !==0){
        sum = sum + item
    }
}
console.log(sum)
console.log(" ")

// Count how many numbers are divisible by 5.
let total = 0
for (let item of numbers){
    if (item % 5 === 0){
        total = total + 1
    }
}
console.log(total)
console.log(" ")

const marks = [85, 42, 90, 67, 30, 78, 49];
// Using for...of loop:

// Print only passing marks (>= 50).
for (let item of marks){
    if (item >=50){
        console.log(item)
    }
}
console.log(" ")

// Count how many students failed.
let failed = 0
for (let item of marks){
    if (item < 50){
        failed = failed + 1
    }
}
console.log(failed)
console.log(" ")

// Find the highest mark.
let highest = 0
for (let item of marks){
    if (item > highest){    
        highest = item
    }
}
console.log(highest)