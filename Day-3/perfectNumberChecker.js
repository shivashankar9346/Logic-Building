function perfectNumber(inputNumber) {

    let allFactorials = []

    for (let i = 1; i < inputNumber; i++) {

        if (inputNumber % i === 0) {

            allFactorials.push(i)

        }
    }

    let sum = 0;

    for (let j = 0; j < allFactorials.length; j++) {
        sum += allFactorials[j]
    }

    if (sum === inputNumber) {
        return "It is a perfect Number"
    }

    return ("It is not a perfect number")

}
console.log(perfectNumber(25));
console.log(perfectNumber(6));
console.log(perfectNumber(28));


