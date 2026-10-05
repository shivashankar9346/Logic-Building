function hollowSqaure(input){
    for( let i =1 ; i<=input; i++){
        let stars =""
        for(let j =1; j<=input;j++){
            if( i ===1 || j===1 || i ===input || j===input){
                stars += "*"
            }else{
                stars +=" "
            }
        }
        console.log(stars);
        
        }
}
hollowSqaure(5)