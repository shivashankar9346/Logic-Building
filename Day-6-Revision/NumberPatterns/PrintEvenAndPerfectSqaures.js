function PrintEvenAndPerfectSquares(input) {

    for (let i = 0; i <= input; i++) {

        if (i % 2 === 0 && Math.sqrt(i) % 1 === 0) {
            console.log(i);
        }
    }
}

PrintEvenAndPerfectSquares(20);