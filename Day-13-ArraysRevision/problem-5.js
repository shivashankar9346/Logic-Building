// Remove duplicate elements

// Remove duplicate elements

function RemoveDuplicate(arr) {
    let Original = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (!Original.includes(num)) {
            Original.push(num);
        }
    }

    return Original;
}

console.log(RemoveDuplicate([1, 2, 3, 4, 3, 1, 5]));
