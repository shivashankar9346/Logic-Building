function InvertedPyramid(input){

    for( let i = input ; i >= 1 ; i--){
        let stars = '';
        // console.log(i);
        
        for( let j =1 ; j<=2 * input - 1 ; j++){
            if(j >= input - i + 1 && j <= input + i - 1){
                stars +="*"
            }else{
                stars+=" "
            }
        }
        console.log(stars);
        
    }
}
InvertedPyramid(5)