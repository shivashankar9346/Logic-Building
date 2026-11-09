// Separate even and odd numbers

function  SeperateEvenAndOdd(arr){
    let odd = [];
    let even = [];

    for( let i =0 ; i< arr.length ; i++){
        if( arr[i] % 2 === 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    return {odd , even}
}
console.log(SeperateEvenAndOdd([2,3,4,5,6]));
