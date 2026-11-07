// Find the largest element in an .


function LargestElement(arr){
    let largest =arr[0]
    for( let  i =0 ; i<=arr.length;i++){
        if(arr[i]> largest ){
            largest= arr[i]
        }
    }
    return largest
}
console.log(LargestElement([1,2,3,4,5,3,2,1]));
console.log(LargestElement([1,2,3,3,2,1,4,5,3,6]));
