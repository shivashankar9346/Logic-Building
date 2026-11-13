// Find common properties between objects

function CommonProperties( obj1, obj2){
    let common = [];

    for(let Key in obj1){
       if( Key in obj2){
        common.push(Key)
       }
    }
    return common
}
let obj1 = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

let obj2 = {
    b: 50,
    c: 60,
    d: 70,
    e: 80
};
console.log(CommonProperties(obj1,obj2));
