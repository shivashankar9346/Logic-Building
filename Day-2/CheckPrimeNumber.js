function IsPrimeOrNot(number) {

    if (number < 2) {
        console.log(number, "is not a prime");
        return;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            console.log(number, "is not a prime");
            return;
        }
    }

    console.log(number, "is a prime");
}

IsPrimeOrNot(5);
IsPrimeOrNot(8);
IsPrimeOrNot(11);
IsPrimeOrNot(17);
IsPrimeOrNot(25);