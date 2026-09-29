function CaluclateIntrest(Amount ,Intrest ,DurationInYear){

    let Total = Amount*Intrest*DurationInYear

    let simpleIntrest = Total/100

    return simpleIntrest;
}
console.log(CaluclateIntrest(10000,2,1));
