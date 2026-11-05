// Find the first non-repeating character

function NonRepatingCharacter(str) {
    let counter = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (counter[char]) {
            counter[char]++
        } else {
            counter[char] = 1
        }
    }
    // console.log(counter);

    for (let i = 0; i < str.length; i++) {
        if (counter[str[i]] === 1) {
           return(str[i]);

        }
    }
    return -1

}
console.log(NonRepatingCharacter("abscs"));
