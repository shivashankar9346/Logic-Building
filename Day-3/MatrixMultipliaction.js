function matrixMultiplication(array1, array2) {
    // console.log(array1,array2);
    const rowsInResult = array1.length;
    const columsInResult = array2.length;

    const rowsInSecondArray = array2.length;
    const result = []

    for (let i = 0; i < rowsInResult; i++) {
        for (let j = 0; j < columsInResult; j++) {
            let cellValue = 0;
            for (let n = 0; n < rowsInSecondArray; n++) {
                cellValue = cellValue + array1[i][n] * array2[n][j];
            }

            if (!result[i]) {
                result[i] = []
            }
            result[i][j] = cellValue
        }
    }

    return result;

}

const firstarray = [[1, 2],
[3, 4]]

const secondarray = [[5, 6],
[7, 8]]
console.log(matrixMultiplication(firstarray, secondarray));
