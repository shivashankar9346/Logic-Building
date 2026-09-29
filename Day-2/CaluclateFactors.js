// function CaluclateFactors(number){

//     for (let i=1; i<=number;i++){
//         if(number % i === 0 ){
//             console.log(i ,"is  a factor");
            
//         }else{
//             console.log(i , "is not a factor");
//         }
        
//     }
// }
// CaluclateFactors(12)




function CalculateFactors(number) {

    let result = [];
    let notFactor = [];

    for (let i = 1; i <= number; i++) {

        if (number % i === 0) {
            result.push(i);
        } else {
            notFactor.push(i);
        }
    }

    return {
        factors: result,
        notFactors: notFactor
    };
}

console.log(CalculateFactors(12));