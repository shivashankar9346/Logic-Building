const prompt = require("prompt-sync")();

function rollDice(sidesInDice) {
    return Math.floor(Math.random() * sidesInDice) + 1;
}

function rollMultipleDices(numberOfDice, sidesInDice) {

    let result = [];
    let counter = 0;

    while (counter < numberOfDice) {

        const rollADiceResult = rollDice(sidesInDice);

        result.push(rollADiceResult);

        counter++;
    }

    return result;
}

const numberOfDices = Number(
    prompt("Please tell number of dice: ")
);

const sidesInDice = Number(
    prompt("Please tell number of sides: ")
);

console.log(rollMultipleDices(numberOfDices, sidesInDice));