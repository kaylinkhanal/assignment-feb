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
console.log(`${user.address.primaryAddress.street }, ${user.address.primaryAddress.city }, ${user.address.primaryAddress.country}`)




//Q2. output should be 2 (total number of values in address object )
// hint: get the values of address object and find the length of it excluding null
const totalvalues = Object.values(user.address).filter((item) => (item!= null))
console.log(totalvalues.length)