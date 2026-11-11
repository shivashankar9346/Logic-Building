// Convert an object into an array

function ConvertIntoArray(obj){
    let arr=[];
    for(let key in obj){
        arr.push([key,obj[key]])
    }
    return arr 
}
let obj = {
    name: "Rahul",
    marks: 85,
    course: "MERN"
};
console.log(ConvertIntoArray(obj));
