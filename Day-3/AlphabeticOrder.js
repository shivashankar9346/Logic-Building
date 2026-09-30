function AlphabeticOrder(inputString){
    for(let i=0;i<inputString.length-1;i++){
        if(inputString[i]>inputString[i+1]){
            return false
        }
        // console.log(inputString[i],inputString[i+1]);
        
    }
    return true
}
console.log(AlphabeticOrder("abcd"));
console.log(AlphabeticOrder("abgfd"));
