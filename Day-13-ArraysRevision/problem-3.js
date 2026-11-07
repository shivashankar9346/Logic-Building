// Find the second-largest element

function SecondLargest(arr) {
    let largest = -1
    let secondlargest = -1

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest
            largest = arr[i]
        } else if(arr[i] !== largest && arr[i] > secondlargest){
            secondlargest = arr[i]
        }
    }


    return secondlargest
}
console.log(SecondLargest([1, 2, 3, 2, 4, 5, 7, 8, 5, 4, 3, 3, 7]));
