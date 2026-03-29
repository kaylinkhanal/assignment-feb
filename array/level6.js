let scores = [6,5,1,3,4,2]



//Q1. Use the map() method to create a new array that contains only the even numbers from the scores array. Expected output is [6,4,2]

function loop(item){
    if(item%2==0){
            return item
    }
}

console.log(scores.map(loop))


//Q2. use filter to remove all the numbers whose value is less than 4. Expected output is [6,5,4]
function loop2(items2){

    if(items2>=4){
        return items2
    }
}
console.log(scores.filter(loop2))


//Q3. use map to create a new array that can add 10 to each item if they are greater thatn 4, 
// otherwise keep the same value. Expected output is [16,15,1,3,14,2]

function loop3(items3){

    if(items3>4){
        return items3 + 10
    }
    else{
        return items3
    }
}
console.log(scores.map(loop3))

