// Remove duplicate characters

function RemoveDuplicate(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {

        let j;

        for (j = 0; j < result.length; j++) {

            if (str[i] === result[j]) {
                break
            }

        }

        if (j === result.length) {
            result += str[i]
        }
        
    }
    return result
}
console.log(RemoveDuplicate("shhiiva"));
