// Remove duplicate objects from an array based on their id.

function RemoveDuplicate(users) {
    let result = [];

    for (let i = 0; i < users.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            if (users[i].id === users[j].id) {
                isDuplicate = true;
                break;
            }
        }
        // if (isDuplicate === true) {
        //     result.push(users[i]);
        // }
         if (!isDuplicate) {
            result.push(users[i]);
        }
    }

    return result;
}
let users = [
    { id: 1, name: "Shiva" },
    { id: 2, name: "Ravi" },
    { id: 1, name: "Shankar" },
    { id: 3, name: "Kiran" },
    { id: 2, name: "Rahul" }
];
console.log(RemoveDuplicate(users));
