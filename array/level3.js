const scores = [32, 34, 50];

// Q1. Check if the number 50 exists in your array. This returns a simple true or false.
const availablenum =  scores.includes(50)
console.log(availablenum)


 // Q2. Remove the first score and save it to a variable
  const firstremove = scores.shift()
  console.log(firstremove)
  console.log(scores)

  //Q3. Convert the array to a single string
  const scorestring =scores.toString()
  console.log(scorestring)
  console.log(scores)

