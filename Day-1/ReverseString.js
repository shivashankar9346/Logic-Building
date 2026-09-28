
// OUTPUT

// a
// v
// i
// h
// S


// function ReverseString(string){


//     for(i=string.length-1 ;i>=0; i--){
//         console.log(string[i]);
        
//     }
// }

// ReverseString("Shiva");



// OUTPUT
// avihS

// function ReverseString(string){

//     let reversedString =''

//     for(i=string.length-1 ;i>=0; i--){

//         reversedString += string[i]

//     }
//     console.log(reversedString);
    
// }

// ReverseString("Shiva");



function ReverseString(string){

    let splitString = string.split(' ')

    let reversedString = splitString.map((word)=>{
        return word.split('').reverse().join('')
    })
    console.log(reversedString.join(' '));
}

ReverseString("shiva shankar");
