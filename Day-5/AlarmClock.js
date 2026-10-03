const prompt = require("prompt-sync")()

function setAlarm(hour, minute) {

    const now = new Date()
    const alarmDate = new Date();
    alarmDate.setHours(hour);
    alarmDate.setMinutes(minute);

    const difference = alarmDate - now;
    if (difference < 0) {
        console.log("please povide future time");
        return;

    }

    setTimeout(() => {
        console.log("time is up! Alarm Alarm Alarm");

    }, difference)

    console.log(now, alarmDate, difference);

}

let hour = expectInputFromUser("What hour should the alarm go off ? :", 23, "please enter a valid value for hour . Hour should be a positive integer between 0 and 23");


let minute = expectInputFromUser("What minute should the alarm go off ? :", 59, "please enter a valid value for  minute  . Hour should be a positive integer between 0 and 59");


setAlarm(hour, minute)

"What minute should the alarm go off ? :"
"please enter a valid value for  minute  . Hour should be a positive integer between 0 and 59"

function expectInputFromUser(promptMessage, maxvalue, InvalidValuedMessage) {
    let result = null
    while (result === null) {

        result = prompt(promptMessage)
        result = parseInt(result);
        if (!Number.isInteger(result) || result < 0 || result > maxvalue) {
            console.log(InvalidValuedMessage);
            result = null;

        }
    }
    return result
}