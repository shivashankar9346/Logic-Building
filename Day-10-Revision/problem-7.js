function  countVowelsAndConsonats(String){
    let vowel = 0 ;
    let consonant = 0;

    let vowels = [ 'a', 'e', 'i', 'o','u']

    for( let i = 0 ;i<String.length;i++){

        let char = String.toLowerCase()[i];
        if(vowels.includes(char)){
            vowel++
        }else{
            consonant++
        }
    }
    console.log(vowel);
    console.log(consonant);
    
    
}
countVowelsAndConsonats("Shiva")