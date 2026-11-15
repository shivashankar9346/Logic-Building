// Write a function to implement a counter using closures.

function Counter() {
    let count = 0;
    return function innerCount() {
        return ++count
    }
}
const counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
