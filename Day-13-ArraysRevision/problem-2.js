// Find the smallest element in an array

function SmallestElement(arr){
    let smallest = arr[0]

    for( let i =0 ; i<arr.length;i++){
        if(arr[i]<smallest){
            smallest= arr[i]
        }
    }
    return smallest
}
console.log(SmallestElement([3,5,4,7,6,2,5,4,3]));
