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



// Q3. convert values to arrray, output is : [50, '123 Main St', 'Anytown', 'USA']