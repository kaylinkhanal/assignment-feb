const items = ["Apple", "Banana", "Cherry", "Date"];

// Q1. Change "Banana" to "Blueberry" by accessing its index directly.
// Hint: items[1] = ...
items[1] = "Blueberry"
console.log(items)


// Q2. Add "Apricot" to the VERY BEGINNING of the array.
// Hint: look up the unshift() method.
items.unshift("Apricot")
console.log(items)


// Q3. Check if "Cherry" exists in the array and log true or false to the console.
// Hint: use the includes() method.
const cherry = items.includes("Cherry")
console.log(cherry)


// Q4. Find the index number of "Date" and assign it to a variable called dateIndex.
// Hint: use the indexOf() method.
const index = items.indexOf("Date")
console.log(index)