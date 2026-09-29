function LeapYear(year){
    if(year%4===0){
        return(`${year} is leap Year `)
    }else{
         return(`${year} is not leap Year `)
    }
}

console.log(LeapYear(2000));
console.log(LeapYear(2010));
console.log(LeapYear(2015));
