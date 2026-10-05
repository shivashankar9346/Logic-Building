function AlternatingBinaryTriangle(input) {
    for (let i = 1; i <= input; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars = stars + (i % 2 === 1 ? j % 2 : (j + 1) % 2)
        }
        console.log(stars);

    }
}
AlternatingBinaryTriangle(5)