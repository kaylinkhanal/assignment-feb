/**Q1: The Tax Calculator Function Create a function called calculateTotal that takes a price and a taxRate. 
  It should return the total price rounded to 2 decimal places. Example: calculateTotal(100, 0.15) should return 115.00.*/
  
  function calculateTotal(amount, percentage)
  {
    return amount + (amount * percentage);
  }
  const result = calculateTotal(100, 0.15);
  console.log(result)
  console.log(result.toFixed(2))



/*Q2: The "Even" Filter Create an array of numbers: [1, 2, 3, 4, 5, 6]. 
  Use a loop or an array method to create a new array that only contains the even numbers.*/
const numbers = [1, 2, 3, 4, 5, 6]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)




