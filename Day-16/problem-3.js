// Find duplicate values in an object


function FindDuplicates(obj){

    let frequency = {};

    for (let Key in obj) {
        let count = obj[Key];
        if (frequency[count]) {
            frequency[count]++
        } else {
            frequency[count] = 1
        }
    }
    let array =[]
    for(let Key in frequency){
        let count =frequency[Key]
        if(count >1){{
            array.push(Key)

        }

        }
    }
return array
}
let obj = {
    a: 10,
    b: 20,
    c: 10,
    d: 30,
    e: 20,
    f: 40,
    g: 50,
    h: 50
};
console.log(FindDuplicates(obj));

