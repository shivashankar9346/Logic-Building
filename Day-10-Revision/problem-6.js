	// Check whether a string is palindrome

    function palindrome(string){
        let reverse = "";

        for ( let i = string.length-1;i>=0;i--){
            reverse += string[i]

        }
            if( string === reverse){
                console.log("palindrome");
                
            }else{
                console.log("Not palindrome");
                
            }
    }
    palindrome("shiva")
    palindrome("mam")