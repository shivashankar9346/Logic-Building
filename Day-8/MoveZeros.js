// 1. Move all zeroes to the end while maintaining the relative order of non-zero elements.
// Input:[0, 21, 15, 0, 24, 0, 7]
// Expected:[21, 15, 24, 7, 0, 0, 0]
// Also explain the time and space complexity.


function moveZerosToEnd(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j++
        }
    }
    for (let k = j; k < arr.length; k++) {
        arr[k] = 0;

    }
    return arr;
}
console.log(moveZerosToEnd([1, 0, 4, 2, 0, 6, 7]));
