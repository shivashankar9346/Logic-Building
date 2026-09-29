function CountVowelandConsonents(string){

    let vowelCount = 0;
    let consonentsCount=0;
    let vowel = ["a","e","i","o","u"]

     string = string.toLowerCase();

    splittedString = string.split("")

    for ( let i =0; i<splittedString.length; i++){
        if(vowel.includes(splittedString[i])){
            vowelCount++
        }else{
            consonentsCount++
        }
    }
    console.log(vowelCount);
console.log(consonentsCount);
}

CountVowelandConsonents("Shiva")



