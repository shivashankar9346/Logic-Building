
function RightAngleTriangle(input) {

    for (let i = 0; i <= input; i++) {
        let stars = "";
        let gap = "";

        for (let j = 1; j <= i; j++) {
            gap += " "
            stars +=  gap +   "*"

        }

        console.log(stars);
    }
}
RightAngleTriangle(5);

