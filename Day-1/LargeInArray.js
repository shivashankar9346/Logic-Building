function LargeNumberInArray(arr){
    let result = arr[0]

    for (let i=1; i<= arr.length ; i++){

        if ( arr[i]>result){
            result = arr[i]
        }
    }

    console.log(result);
    

}

let arr = [2,6,3,8,,5]

LargeNumberInArray(arr)