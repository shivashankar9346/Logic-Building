// Implement function currying for a function that adds three numbers.

function multiply(a){
    return function secondFunction(b){
        return function thirdFunction(c){
            return a*b*c
        }
    }
}
console.log(multiply(2)(3)(4));
