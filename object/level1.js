const scores = {
    math: 12,
    science: 42,
    computer: 32
}



//Q1. calculate the percentage of total marks obtained by the student, expected output is 62.67%
// total of each sub is 50
const percentage = (scores.math +scores.computer +scores.science)/150 * 100
console.log(percentage)



//Q2. convert object to array: left hand side
//expected output is ['math', 'science', 'computer']

const arr = Object.keys(scores)
console.log(arr)

//Q3. convert object to array: right hand side
//expected output is [12, 42, 32]

const arr1 = Object.values(scores)
console.log(arr1)

//Q4. convert entire object to array
//expected output is [['math', 12], ['science', 42], ['computer', 32]]

const arr2 = Object.entries(scores)
console.log(arr2)
