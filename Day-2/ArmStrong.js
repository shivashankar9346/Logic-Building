function ArmStrong(num){
    let ConvertToString = num.toString()
    let splitNums = ConvertToString.split('')

    let sum = 0;

    let numberOfDigits = splitNums.length

 for(let i=0;i<splitNums.length;i++){
    
    sum +=Number(splitNums[i]) ** numberOfDigits 
 }

 
 if( num === sum){
     console.log(num , "is  a Armstronng");
     
    }else{
        console.log(num , "is not a Armstronng");
        
    }
    return sum
 

}
console.log(ArmStrong(55));
console.log(ArmStrong(153));
