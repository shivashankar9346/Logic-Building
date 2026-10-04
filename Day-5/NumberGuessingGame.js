const prompt = require("prompt-sync")()

const randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber);

let userInput = prompt("please guess the number, its between 1 and 100 : ")

userInput = parseInt(userInput)

while (userInput !== randomNumber) {
    if (userInput > randomNumber) {
        console.log("Your number is too high !");

    } else {
        console.log("Your number is too low !");
    }

   userInput = parseInt(prompt("please guess the number : "))

}
console.log("Congrats ! You have found it ", randomNumber);


console.log(userInput);

