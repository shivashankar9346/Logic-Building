// Merge two objects

function MergeTwoObjects(obj1, obj2){
    let newObj = {}
    for( let key in obj1 ){
        newObj[key] = obj1[key]

    }
    for(let key in obj2){
        newObj[key] = obj2[key]
    }

    return newObj;
    
   
}
let obj1 = {
    name: "Shiva",
    age: 22
};

let obj2 = {
    city: "Hyderabad",
    course: "AIML"
};
console.log(MergeTwoObjects(obj1, obj2));