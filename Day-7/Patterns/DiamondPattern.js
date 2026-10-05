function DiamondPattern(input) {

    for (let i = 1; i <= input; i++) {

        let stars = "";

        for (let j = 1; j <= 2 * input - 1; j++) {

            if (j >= input - i + 1 && j <= input + i - 1) {
                stars += "*"
            } else {
                stars += ' '
            }

        }

        console.log (stars);

    }

    for (let i = input - 1; i >= 1; i--) {

        let stars = "";

        for (let j = 1; j <= 2 * input - 1; j++) {
            if (j >= input - i + 1 && j <= input + i - 1) {
                stars += "*"
            } else {
                stars += ' '
            }
            
        }

        console.log(stars);
    }
}

DiamondPattern(5);