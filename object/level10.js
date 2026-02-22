const student = {
    name: "Ram",
    age: 21,
    grade: "A",
    math: 85,
    science: 90,
    english: 78
}
//Using a for...in loop:
//Print only the subject marks (math, science, english).
for(let item in student){
    if (typeof student[item] === 'number' && item !== 'age'){
        console.log(item + ": " + student[item])
    }
}
console.log(" ")

//Calculate the total marks.
let totalmarks = 0
for (let item in student){
    if (typeof student[item] === "number" && item !== "age"){
        totalmarks = totalmarks + student[item]
    }
}
console.log(totalmarks)
console.log(" ")

//Calculate the average marks.
let avg = 0
for (let item in student){
    if (typeof student[item] === "number" && item !== "age"){
        avg = avg + student[item]
    }
}
avg = avg / 3
console.log(avg.toFixed(2))
console.log(" ")

const productPrices = {
    apple: 120,
    banana: 60,
    mango: 150,
    orange: 80,
    grapes: 200
}

//Using for...in loop:
// Print all products that cost more than 100.
for (let item in productPrices){
    if(productPrices[item] > 100){ 
        console.log(item + ": " + productPrices[item])
    }
}
console.log(" ")

// Calculate the total cost of all products.
let totalcost = 0
for (let item in productPrices){
    totalcost = totalcost + productPrices[item]
}   
console.log(totalcost)
console.log(" ")

// Count how many products cost less than 100.
let total = 0
for (let item in productPrices){
    if (productPrices[item] < 100){
        total = total + 1
    }   
}
console.log(total)
console.log(" ")

const employee = {
    id: 101,
    name: "Sita",
    department: "IT",
    salary: 50000,
    bonus: 10000,
    overtime: 5000
}
// Using for...in loop:

// Calculate total earnings (salary + bonus + overtime).
let earning = 0
for (let item in employee){
    if (typeof employee[item] === "number" && item !== "id"){
        earning = earning + employee[item]
    }
}
console.log(earning)
console.log(" ")

// Print only numeric values from the object.
for (let item in employee){
    if (typeof employee[item] === "number"){
        console.log(employee[item])
    }
}
console.log(" ")

// Create a new object that contains only earnings-related properties.
const earningonly = {}
for (let item in employee){
    if (typeof employee[item] === "number" && item !== "id"){
        earningonly[item] = employee[item]
    }
}
console.log(earningonly)
console.log(" ")