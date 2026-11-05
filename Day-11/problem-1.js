// Count the frequency of each character

function CountFrequency(str){
    let char = {}

    for ( let i =0 ; i< str.length ; i++){
        let num = str[i]
        if( char[num]){
            char[num]++
        }else {
            char[num] = 1
        }
    }
    console.log(char);
    
}
CountFrequency("shiva")