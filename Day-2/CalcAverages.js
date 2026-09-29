function CaluclateAverage(arr){

 let sum = 0
 let average =0;

    for(let i =0 ; i<arr.length; i++){
        sum += arr[i];
        
    }
    console.log(sum);
    
   average =sum / arr.length
    console.log(average);
    
    

}
CaluclateAverage([1,2,3,4,5]);
