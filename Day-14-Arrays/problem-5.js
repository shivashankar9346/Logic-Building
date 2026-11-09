// Move all zeros to the end


function MoveZerosToEnd(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            arr[j] = arr[i]
            j++

        }
    }
    for (i = j; i < arr.length; i++) {
        arr[i] = 0

    }
    return arr;

}
console.log(MoveZerosToEnd([1, 2, 3, 0, 4, 0, 6, 5]));
