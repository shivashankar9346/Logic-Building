// Find GCD of two numbers

function FindGCD( a , b){
     while(  b !== 0){
        let temp = b;
        b = a%b ;
        a = temp
     }
      console.log(a);
      
}
FindGCD(12, 28)