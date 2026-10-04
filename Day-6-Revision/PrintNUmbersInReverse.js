//WITHOUT CHANGING THE LOOP CONDITION


function printNumberInReverse(input){
    for(let i=0; i<=input;i++){
        console.log(input - i);
        
    }
}
printNumberInReverse(10)


// CHANGING THE LOOP


function printNumberInReverse(input){
    for(let i=input; i>=1;i--){
        console.log( i);
        
    }
}
printNumberInReverse(10)