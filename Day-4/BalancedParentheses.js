const parentheses = {
    "{": "}",
    "(": ")",
    "[": "]"
};

function BalancedParentheses(inputString) {

    const parenthesesArray = [];

    for (let char of inputString) {

        // Opening bracket
        if (parentheses[char]) {
            parenthesesArray.push(char);
        }

        // Closing bracket
        else if (char === "}" || char === ")" || char === "]") {

            // No opening bracket available
            if (parenthesesArray.length === 0) {
                return false;
            }

            let lastOpeningParentheses = parenthesesArray.pop();

            // Check whether opening and closing brackets match
            if (parentheses[lastOpeningParentheses] !== char) {
                return false;
            }
        }
    }

    // Stack must be empty at the end
    return parenthesesArray.length === 0;
}

console.log(BalancedParentheses("{({[]})}")); // true
console.log(BalancedParentheses("{({[})}"));  // false
console.log(BalancedParentheses("({[]})"));   // true
console.log(BalancedParentheses("([)]"));      // false