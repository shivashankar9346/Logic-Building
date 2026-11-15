// Implement a function that supports unlimited arguments and returns their sum.

function Arguments() {
    return function innerFunction(...args) {
        let sumOfArgs = 0
        for (let i = 0; i <args.length; i++) {
            sumOfArgs += args[i]
        }
        return sumOfArgs;
        
    }
}
let argument = Arguments()

console.log(argument(10,20));
console.log(argument(10,20,30));
console.log(argument(10,20,30,40));
