// Clone this object:

const user = { name: "John", age: 25 };
const clone = { ...user }
console.log(clone)

// Add a new property country: "USA" using spread.
const addcountry = { ...user, country: "USA" }
console.log(addcountry)

// Update only the age property without mutating the original object.
const updateage = { ...user, age: 30 }
console.log(updateage)

// Merge two objects:

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b }
console.log(merged)