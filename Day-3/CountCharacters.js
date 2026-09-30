function CountCharacters(string){

    let result={};
    string = string.toLowerCase();

    for(let i=0;i<string.length;i++){
        if(!result[string[i]]){
            result[string[i]]=0
        }
        result[string[i]]=result[string[i]]+1
    }
    return result;
}
console.log(CountCharacters("Shiva shankar"));

