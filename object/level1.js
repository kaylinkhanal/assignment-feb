const scores = {
    math: 12,
    science: 42,
    computer: 32
}



//Q1. calculate the percentage of total marks obtained by the student, expected output is 62.67%
// total of each sub is 50


const totalsum =scores.math + scores.computer + scores.science
console.log(totalsum)
const percentage = (totalsum / 150) * 100;
console.log(percentage)

const formattedPercentage = percentage.toFixed(2) + "%";
console.log(formattedPercentage);





//Q2. convert object to array: left hand side
//expected output is ['math', 'science', 'computer']
const result= Object.keys(scores)
console.log(result)


//Q3. convert object to array: right hand side
//expected output is [12, 42, 32]
const marks=Object.values(scores)
console.log(marks)

//Q4. convert entire object to array
//expected output is [['math', 12], ['science', 42], ['computer', 32]]

const fulldata= Object.entries(scores)
console.log(fulldata)