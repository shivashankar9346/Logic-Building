function CalculateElectricityBill(input) {

    let bill = 0;

    if (input <= 100) {
        bill = input * 5;
    }
    else if (input <= 200) {
        bill = (100 * 5) + ((input - 100) * 7);
    }
    else if (input <= 300) {
        bill = (100 * 5) + (100 * 7) + ((input - 200) * 10);
    }
    else {
        bill = (100 * 5) + (100 * 7) + (100 * 10) + ((input - 300) * 13);
    }

    console.log(bill);
}

CalculateElectricityBill(230);