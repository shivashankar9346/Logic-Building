
function PalindromicSubstrings(string) {

    let result = [];

    for (let i = 0; i < string.length; i++) {

        for (let j = i; j < string.length; j++) {

            let substring = "";

            // Create substring
            for (let k = i; k <= j; k++) {
                substring = substring + string[k];
            }

            // Check palindrome
            let isPalindrome = true;

            for (let left = 0, right = substring.length - 1;
                 left < right;
                 left++, right--) {

                if (substring[left] !== substring[right]) {
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome && substring.length > 1) {
                result.push(substring);
            }
        }
    }

    return result;
}

console.log(PalindromicSubstrings("aba"));
console.log(PalindromicSubstrings("abcderadarfdgi"));
console.log(PalindromicSubstrings("mom"));
