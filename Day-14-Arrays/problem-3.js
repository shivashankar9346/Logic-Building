// Find duplicate elements

function FindDuplicate(arr){
    let duplicate = [];

    for( let i =0; i<arr.length;i++){

        for(let j =i+1; j<arr.length ; j++){
            if(arr[i] === arr[j] && i !== j ){
                duplicate.push(arr[i])

            }
        }

    }
    return duplicate;
}
console.log(FindDuplicate([1,2,3,4,5,2,3]));
