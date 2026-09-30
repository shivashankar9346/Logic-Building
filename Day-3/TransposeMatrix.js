function TransposeMatrix(inputArray) {

    // console.log(inputArray);
    const numberOfRows = inputArray.length;
    const numberOfColums = inputArray[0].length

    const result = []

    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfColums; j++) {
            // console.log(inputArray[i][j]);

            if(!result[j]){
                result[j]=[]
            }
            result[j][i] = inputArray[i][j]

        }
        // console.log(inputArray[i][j]);

    }

    // console.log(numberOfRows);
    // console.log(numberOfColums);


    return result

}
const inputMatrix = [[3, 4, 8],
[5, 6, 9]]
console.log(TransposeMatrix(inputMatrix));
