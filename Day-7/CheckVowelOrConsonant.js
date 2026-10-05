 function CheckVowelOrConsonant(input){

    let vowels = [ 'a', 'e', 'i', 'o' ,'u']

      if (!/^[a-zA-Z]$/.test(input)) {
        return "Invalid input";
    }

    input = input.toLowerCase();
     
   for( i = 0 ;i < vowels.length;i++){
     if(input === vowels[i]){
        
        return(input + " " + "is a vowel");
        
    }
    
    
}
return(input + " " + "is a consonant");
 }
console.log( CheckVowelOrConsonant("e"));
console.log( CheckVowelOrConsonant("p"));
console.log( CheckVowelOrConsonant("1"));
console.log(CheckVowelOrConsonant("5"));   // Invalid input
console.log(CheckVowelOrConsonant("@"));   // Invalid input
console.log(CheckVowelOrConsonant("ab"));  // Invalid input
