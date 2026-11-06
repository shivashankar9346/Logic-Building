// Find the longest word in a sentence

function LongestWord(str){
    let words = str.split(" ");
    let longest = " ";

    for( let i = 0 ; i< words.length; i++){
        if( words[i].length>longest.length){
            longest = words[i]
        }
    }
    return longest
}
console.log(LongestWord("I am learning Javascript programming"));
