const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Q1. Remove the VERY FIRST item from the array.
// Hint: This is the opposite of pop(). Look up the shift() method.
colors.shift()
console.log(colors)


// Q2. Create a new array called "middleColors" that only contains 
// "Green", "Blue", and "Yellow".
// Hint: Use the slice() method. (Note: slice does NOT change the original array).
const middleColors = colors.slice(0, 3)
console.log(middleColors)


// Q3. Use the splice() method to remove "Blue" from the original colors array.
// Hint: splice(index, howManyToRemove)
colors.splice(1, 1)
console.log(colors)


// Q4. Reverse the order of the colors array so it starts with "Purple".
// Hint: look up the reverse() method.
colors.reverse()
console.log(colors)


// Q5. Convert the array into a single String where colors are separated by a comma and a space.
// Expected output: "Purple, Yellow, Green, Red" (or similar depending on your previous steps)
// Hint: use the join(", ") method.
let string = colors.join(",")
console.log(string)