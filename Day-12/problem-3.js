// Check whether two strings are anagrams

function CheckAnagramsOrNot(str1,str2){

    if(str1.length !== str2.length){
        return false
    }


    let str1Char = {}
    for( let i =0 ; i<str1.length; i++ ){
        let num = str1[i]
        if(str1Char[num]){
            str1Char[num]++
        }else{
            str1Char[num]=1
        }
    }
    let str2Char = {}
     for( let i =0 ; i<str2.length; i++ ){
        let num = str2[i]
        if(str2Char[num]){
            str2Char[num]++
        }else{
            str2Char[num]=1
        }
    }

    console.log(str1Char);
    console.log(str2Char);

    for ( let char in str1Char){

        if( str1Char[char] !== str2Char[char]){
            return false
        }
    }
    return true

    

    
}
console.log(CheckAnagramsOrNot("shiva", "hivsa"));
console.log(CheckAnagramsOrNot("sgiva", "hivsa"));
console.log(CheckAnagramsOrNot("shiva", "hivwa"));
