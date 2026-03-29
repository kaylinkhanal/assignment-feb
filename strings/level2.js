const sentence = 'Ronaldo is the best football player in the world. He has won many awards and is loved by fans all over the world.';

const newsentence =sentence.replace('Ronaldo','messi')
console.log(newsentence)
// 1. replace the first word Ronaldo  with Messi
// hint : use the replace() method

const uppercaset= sentence.toUpperCase()
console.log(uppercaset)
//2. Convert the entire sentence to uppercase letters


const sentencethe =sentence.replace("the",'d')
console.log(sentencethe)
//3. replace all the word the with 'd'
//expected output is 'Ronaldo is d best football player in d world. He has won many awards and is loved by fans all over d world.' 