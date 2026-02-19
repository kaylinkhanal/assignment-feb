const numbers = [5, 12, 8, 130, 44, 12, 5, 44];

// Q1. Remove duplicate values WITHOUT using Set.
const uniquenumbers=numbers.filter((value,index)=>{
    return numbers.indexOf(value)===index;
});
console.log(uniquenumbers);

// Q2. Find the second largest number in the array.
const uniqueNumbers = [...new Set(numbers)]; 
uniqueNumbers.sort((a, b) => b - a);
const secondLargest = uniqueNumbers[1];
console.log(secondLargest);
// Q3. Count how many times each number appears.
// Expected output example:
// {5:2, 12:2, 8:1, 130:1, 44:2}
const counts = {}; // empty object to store results

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (counts[num]) {
    counts[num]++; // increment if already exists
  } else {
    counts[num] = 1; // initialize if not
  }
}
console.log(counts);


// Q4. Insert number 999 at index 3 using splice().
numbers.splice(3, 0, 999);

console.log(numbers);
// Q5. Create a new array where each number is multiplied by 3.
const multiplied = numbers.map(num => num * 3);
console.log(multiplied);
