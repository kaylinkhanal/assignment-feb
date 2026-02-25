const obj = {
    "name": "level3",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
    },
}


// Q1. delete "name": "level3"
// expected output: 
// {
//     "age": 30,
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "country": "USA"
//     },
// }
delete obj.name
console.log(obj)

// change age to 50
// expected output:
// {
//     "age": 50,
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "country": "USA"
//     },
// }
obj.age = 50
console.log(obj)



// Q3. convert values to arrray, output is : [50, '123 Main St', 'Anytown', 'USA']
const objvalus = Object.values(obj)
const addressvalue = Object.values(obj.address)
const arr = [objvalus[0], ...addressvalue]

console.log(arr)