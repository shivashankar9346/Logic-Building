function GreaterNumber(arr) {

    let greater = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > greater) {
            greater = arr[i];
        }
    }

    console.log(greater);
}

GreaterNumber([3, 5, 2, 8, 6]);