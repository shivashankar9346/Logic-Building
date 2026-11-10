// Convert an array into an object

function ArraytoObject(arr){
    let obj = {};

    for( let i =0; i<arr.length;i+=2){
        let key = arr[i];
        let  value = arr[i+1];

        obj[key]= value;
    }
    return obj
}
console.log(ArraytoObject(["name", "Shiva", "age", 22, "city", "Hyderabad"]));
