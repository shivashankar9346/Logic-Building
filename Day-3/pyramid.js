function Pyramid(num) {

    for (let i = 0; i <=num; i++) {

        let spaceContent = " ";


        for (let space = 1; space <= num - i; space++) {

            spaceContent = spaceContent + " "

        }

        for (let count = 1; count <= i; count++) {
            spaceContent = spaceContent + count
        }

        for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
            spaceContent = spaceContent + reverseCount;
        }

        console.log(spaceContent);
    }

}
Pyramid(5);
