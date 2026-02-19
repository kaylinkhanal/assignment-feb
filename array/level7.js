const scores = ['ram',6,5,1]

// Q1. use filter loop to remove strings from the scores array, expected output is [6,5,1]

function loop(item){
    if(typeof item == "number"){
            return item
    }
}

console.log(scores.filter(loop))





const userScores = [['ram',60],['shyam',50],['hari',13]]
// Q2. use filter loop to loop over each element and only keep the elements whose score is greater than 20,
//  expected output is [['ram',60],['shyam',50]]
function loop2(item){
    if(item[1]>20)
        {
            return item
    }
}
console.log(userScores.filter(loop2))