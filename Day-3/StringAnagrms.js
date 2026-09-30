function StringAnagram(inputString1, inputString2) {

    let result1 = {}
    let result2 = {}

    for (let i = 0; i < inputString1.length; i++) {
        if (!result1[inputString1[i]]) {
            result1[inputString1[i]] = 0
        }
        result1[inputString1[i]] = result1[inputString1[i]] + 1
    }
    console.log(result1);
    

    for (let j = 0; j < inputString2.length; j++) {
        if (!result2[inputString2[j]]) {
            result2[inputString2[j]] = 0
        }
        result2[inputString2[j]] = result2[inputString2[j]] + 1
    }
    console.log(result2);
    
    for (let key in result1) {

        if (result1[key] !== result2[key]) {
            return false;
        }
    }
    return true
}
console.log(StringAnagram("cat", "act"));
console.log(StringAnagram("cat", "dog"));
console.log(StringAnagram("spool", "pools"));
