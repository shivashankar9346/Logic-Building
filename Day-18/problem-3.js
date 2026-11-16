// Group an array of objects based on a specific property

function GroupArray(employees,property){
    let newObject ={};
    for(let i =0;i<employees.length;i++){
         let key = employees[i][property];

         if(newObject[key]){
            newObject[key].push(employees[i])
         }else{
             newObject[key] = [];
            newObject[key].push(employees[i]);
         }

    }
    return newObject
}
let employees = [
    { name: "Shiva", department: "IT" },
    { name: "Ravi", department: "HR" },
    { name: "Kiran", department: "IT" },
    { name: "Rahul", department: "Finance" },
    { name: "Arun", department: "HR" }
];
console.log(GroupArray(employees,"department"));
