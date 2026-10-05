function InvertedHollowPyramid(input) {
    for (let i = input; i >= 1; i--) {
        // console.log(i);
        let stars = "";
        for (let j = 1; j <= 2 * input - 1; j++) {
            if (j >= input - i + 1 && j <= input + i - 1) {
                if (i === input|| j === input - i + 1 || j == input + i - 1) {
                    stars += "*"
                } else {
                    stars += " "
                }

            } else {
                stars += " "
            }
        }
        console.log(stars);
        
    }
}
InvertedHollowPyramid(5)