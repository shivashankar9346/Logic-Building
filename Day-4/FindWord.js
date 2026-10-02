const bigString = "This is a big string that contains many words. we will use this string to find specific words within it. The goal is to identify the presence of certain keywords and return their positions in the string."
const wordTofind = "string"

// console.log(bigString.indexOf("string"));


function findAllOccurences(big,word){

    const result =[]

    let index = big.indexOf(word);

    while (index !== -1){
        result.push(index)
        console.log();
        index = big.indexOf(word,index+1);
        
    }
    // console.log(index);
    return (result)
}
console.log(findAllOccurences(bigString,wordTofind));
console.log(findAllOccurences(bigString,"shiva"));
console.log(findAllOccurences("shiva","shiva"));

