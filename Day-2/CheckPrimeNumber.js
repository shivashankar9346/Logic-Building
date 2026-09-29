function IsPrimeOrNot(number){
    if(number % 2 !== 0 && number % 3 !== 0){
        console.log(number , "is  a prime");
        
    }else{
          console.log(number , "is not a prime");
    }
}
IsPrimeOrNot(5)
IsPrimeOrNot(8)
IsPrimeOrNot(11)
IsPrimeOrNot(17)
