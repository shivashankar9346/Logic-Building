function FizzBuzz(num) {


    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Buzz&Fizz");


    } else if (num % 3 === 0) {
        console.log("Buzz");

    } else if (num % 5 === 0) {
        console.log("Fizz");

    }
}

FizzBuzz(12)
FizzBuzz(15)
FizzBuzz(20)
