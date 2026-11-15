// Create a function that remembers its previous function call arguments.

function PreviousArgs() {
    let previousArgs = [];

    return function innerFuntion(...args){
        previousArgs.push(...args)

        return previousArgs
    }
}
let reminder = PreviousArgs()
console.log(reminder(10, 20));
console.log(reminder(30, 40));
console.log(reminder(50, 60));
