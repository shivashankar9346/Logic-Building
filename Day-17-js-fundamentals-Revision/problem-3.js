// Implement a function that can only be executed once (One-time function).

function Once() {
    let executed = false;
    return function innerFunction(){
        if(executed === true){
    
            return "Already executed"
        }
        executed = true;
        return executed;
    }
}
let result = Once();
console.log(result()); 
console.log(result()); 
console.log(result());
