// Reverse each word in a sentence

function ReverseEachWord(str) {
    let words = str.split(" ");
    let result = []
    for( let i =0 ; i<words.length; i++){
        let reverse = "";
        for( let j = words[i].length-1; j>=0 ; j--){
            reverse +=words[i][j]
        }
        result.push(reverse)
    }
   return  result.join(" ")
}
console.log(ReverseEachWord("I love JavaScript"));
