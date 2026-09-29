// function SumOfDigits(digit){

//     let result = 0;

//     let splitDigit = digit.toString().split('')

//     for (let i=0;i<splitDigit.length; i++){
//         result +=Number(splitDigit[i])
//     }
//     console.log(result);
    
// }
// SumOfDigits(123)
// SumOfDigits(-123)
// SumOfDigits(423)
// SumOfDigits(016) it gives  otput 5


// function SumOfDigits(digit){

//     let result =0;

//     while( digit>0){
//         let remainder = digit%10;

//         result +=remainder;

//         digit= Math.floor(digit/10)

//     }
//     console.log(result);
    

// }
// SumOfDigits(123)