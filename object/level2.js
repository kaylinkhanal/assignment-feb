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
const adressss= user.address.primaryAddress.street + user.address.primaryAddress.city + user.address.primaryAddress.country
console.log(adressss)

//Q2. output should be 2 (total number of values in address object )
// hint: get the values of address object and find the length of it excluding null
const addressValues = Object.values(user.address).filter(value => value !== null);
console.log(addressValues.length);


// Q3. Output the name and age of the user in a single string.
// Expected output: "John is 30 years old"

const nameage=user.name +" is a "+ user.age+" year old. "
console.log(nameage)




// for in loop

const developer = {
    name :"Dikpal",
    nation: "Nepal",
    village:"saptry"

}
for(const value in developer){
    console.log(value , ":" ,developer[value])
}

// for of loop 
const fruits =["Apple","mango", "graps"]
for (const fruit of fruits ){
    console.log(fruit)
}

const char = "developer"
for (const chart of char){
    console.log(chart)
}