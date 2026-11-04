	// Reverse a string without using reverse()

    function Reverse(string){
        let reverse = '';
        
        for(let i =string.length-1 ; i>=0;i--){
            reverse += string[i]
        }

        console.log(reverse);
        
    }
    Reverse("shiva")