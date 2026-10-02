function calculateTipAmount (baseAmount , tipPercentage){
    // console.log(baseAmount , tipPercentage);

    let result =[];

    for(let i=0;i<tipPercentage.length;i++){
        // console.log(tipPercentage[i]);
        const tipAmount = baseAmount * (tipPercentage[i]/100)
        result.push(tipAmount)
    }
    return result
}
console.log(calculateTipAmount(1000,[5,10,15]));
