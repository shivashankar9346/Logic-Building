
function RightAngleTriangle(input) {

    for (let i = input; i >=1; i--) {
        let stars = "";

        for (let j = i; j >= 1; j--) {
            stars += "*"

        }

        console.log(stars);
    }
}
RightAngleTriangle(5);

