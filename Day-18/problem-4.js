// Sort an array of objects based on age without using built-in sorting.

function SortingArray(users) {

    for (let i = 0; i < users.length; i++) {
        for (let j = i+1; j < users.length; j++) {

            if( users[i].age >users[j].age){
                let temp = users[i];
                users[i]=users[j];
                users[j]=temp
            }

        }
    }
    return users

}
let users = [
    { name: "Shiva", age: 24 },
    { name: "Ravi", age: 20 },
    { name: "Kiran", age: 22 },
    { name: "Rahul", age: 18 }
];

console.log(SortingArray(users));