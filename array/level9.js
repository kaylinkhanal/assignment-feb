const userCarts = [
    {orderid: 1, product: 'laptop', price: 50000, quantity: 1},
    {orderid: 2, product: 'mobile', price: 20000, quantity: 2},
    {orderid: 3, product: 'tablet', price: 15000, quantity: 1},
    {orderid: 4, product: 'headphones', price: 3000, quantity: 3},
]

const spendings=userCarts.map((item)=>{
    return item.price*item.quantity
})
console.log(spendings);
const totalSpending=spendings.reduce((acc,current)=>{
return acc+current
},0)
console.log(totalSpending);
//Q1. use reduce loop to calculate the total amount spent by the user