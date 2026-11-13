// Find the key with the highest value

function HighestValue(scores){
    let highestValue = 0;
    let key ;

    for(let Key in scores){
        if( scores[Key]>highestValue){
            highestValue=scores[Key]
            key= Key
        }
    }
    return key
    
}
let scores = {
    JavaScript: 80,
    React: 95,
    Node: 85,
    MongoDB: 90
};
console.log(HighestValue(scores));
