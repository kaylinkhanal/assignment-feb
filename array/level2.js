const scores = [32,34,50]

// Q1. calculate the total score and assign it to a variable called totalScore
// hint: scores[0]+ scores[1]+ ...
let totalScore= scores[0]+scores[1]+scores[2];
console.log(totalScore);



//Q2. calcuate the percentage of the total score, expected output is 72.22%, total score is out of 150
console.log(((totalScore/150)*100).toFixed(2),"%");


const scoresOptional = [32,34]
// Q3. merge scores and scoresOptional into a new array called allScores, expected output is [32,34,50,32,34]
const allScores=[...scores,...scoresOptional];
console.log(allScores);