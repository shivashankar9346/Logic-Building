// Count frequency of array elements

function CountFrequency(arr){
    let frequencey = {};

    for(let i =0 ; i<arr.length;i++){

        let arrays = arr[i];
        if(frequencey[arrays]){
            frequencey[arrays]++
        }else{
            frequencey[arrays]=1
        }
    }
    return frequencey
}
console.log(CountFrequency([1,2,3,4,3,2,5,1,6]));
