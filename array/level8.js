const num = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66, 25];


//Q1. use forEach loop to calculate the sum of all even numbers

let sum = 0
num.forEach((item)=>{
    sum = sum + item
})


//Q2. use Map to multiply each element by 2 and filter out only those which are divisible by
// 22

const newNum = num.map((item)=>{
    return item + 200
}).filter((item)=>{
    return item  % 9 === 1
})

console.log(newNum)