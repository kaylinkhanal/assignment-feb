const num = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66, 25];


//Q1. use forEach loop to calculate the sum of all even numbers

let sum = 0
num.forEach((item)=>{
    if(item%2==0){
    sum = sum + item
    }
})
console.log(sum)


//Q2. use Map to multiply each element by 2 and filter out only those which are divisible by
// 22

const newNum = num.map((item)=>{
    return item*2
}).filter((item)=>{
    return item  % 22 === 0
})

console.log(newNum)

// Q3. Use filter to create a new array containing only numbers greater than 20,
//  then use forEach to log each of those numbers to the console.

const  greaterthan20 = num.filter((items)=>{
        return items >20
    
})
        greaterthan20.forEach(items=>console.log(items))

//  Use map to create a new array where each number is replaced by the string
//  "Even" if it's even, or "Odd" if it's odd.       

const evenodd = num.map((number)=>{
    if(number%2==0){
        return "even"
    }
    else{
        return "odd"
    }
})
console.log(evenodd)


// Q5. Use filter to find all numbers that are multiples of both 2 and 4, then use reduce to find their total sum.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipliesboth = numbers.filter((numb)=>{
    return numb%2===0 && numb%4===0
})
console.log(multipliesboth)
const totalsum =multipliesboth.reduce((prev, cuurent)=>{
    return prev + cuurent
})
console.log(totalsum)

// Q6. Use map to square every number in the array, then use filter to keep only the results that are less than 20.
const squarenumber =numbers.map((square)=>{
    return square**2
})
console.log(squarenumber)
const result =squarenumber.filter((greatthan20)=>{
    return greatthan20>20
})
console.log(result)

