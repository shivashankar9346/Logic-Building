// Find the most repeated character

function MostrepeatedChar(str) {
    let char = {}

    for (let i = 0; i < str.length; i++) {
        let num = str[i]

        if (char[num]) {
            char[num]++
        } else {
            char[num] = 1
        }
    }

  let maxCount = 0;
let highestrepeatedChar = [];

for (let Char in char) {
    if (char[Char] > maxCount) {
        maxCount = char[Char];
        highestrepeatedChar = [Char];
    } 
    else if (char[Char] === maxCount) {
        highestrepeatedChar.push(Char);
    }
}

return highestrepeatedChar;


}
console.log(MostrepeatedChar("shivaavs"));
