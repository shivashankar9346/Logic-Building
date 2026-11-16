// Convert an array of objects into an object using a specific key.


function ConvertToObject(users,property){
    let newObject={};
    for(let i =0;i<users.length ; i++){
        let key = users[i][property];
        newObject[key]=users[i]
    }
    return newObject

}

let users = [
    { id: 1, name: "Shiva" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Kiran" }
];

console.log(ConvertToObject(users,"id"));
