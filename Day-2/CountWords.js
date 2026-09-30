function CountWords (sentence){
    let splittedSentence = sentence.split(' ')

    let words = 0;

    for (i=0;i<splittedSentence.length;i++){
        words++
    }
    
    console.log(words);
    
}

CountWords("I am a Boy")