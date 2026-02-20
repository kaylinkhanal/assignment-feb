const user = {
    name: 'John',
    age: 30,
    address: {
        primaryAddress: {
            street: '123 Main St',
            city: 'Anytown',
            country: 'USA'
        },
        secondaryAddress: {
            street: '456 Elm St',
            city: 'Othertown',
            country: 'China'
        },
        thirdAddress: null
    }
}

// Q1. output should be '123 Main St, Anytown, USA'

console.log((Object.values(user.address.primaryAddress)).toLocaleString());

//Q2. output should be 2 (total number of values in address object )
// hint: get the values of address object and find the length of it excluding null

console.log((Object.values(user.address)).filter((item)=>{
    if(item!== null){
        return item
    }
}).length)