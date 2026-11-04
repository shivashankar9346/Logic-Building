// Check whether a number is palindrome

function palindrome(n){
    let reverse = ''

while (n >0){

    let digit = n % 10 ;
    reverse = reverse+digit;
     n = Math.floor(n/10)
}


// console.log(reverse);

if( n === reverse){
    console.log("Palindrome");
    
}else{
    console.log("Not Palindrome");
    
}


}
palindrome(1234)