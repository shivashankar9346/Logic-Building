// Find the average of all elements in an array without using built-in methods.

function AverageOfElements(arr){
    let sum = 0
    let average = 0;

    for( let i =0 ; i<arr.length;i++){

        sum+=arr[i]
    }
    average = sum / arr.length

    return average
}
console.log(AverageOfElements([1,2,3,4,5]));
