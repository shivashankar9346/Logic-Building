function SumOfEven(input){
    let sumOfEven = 0;

    for( let i =0 ;i<=input ; i++){
        if(i %2 === 0 ){
            sumOfEven += i
        }
    }
    console.log(sumOfEven);
    
}
SumOfEven(10)