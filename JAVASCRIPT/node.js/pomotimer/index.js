const notifier = require('node-notifier');
const moment = require('moment');

const argTime = process.argv.slice(2);


const pomodoroTime = argTime[0];
const breakTime = argTime[1];

let isWork = true;  
let remainingTime = 0;

function formatTime(totalSeconds){
    const duration = moment.duration(totalSeconds, 'seconds');
    const hours = duration.hours().toString().padStart(2, '0');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const seconds = duration.seconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function startTimer(duration){
    isWork = !isWork;
    remainingTime = duration * 60;

    const timer = setInterval(() => {
        remainingTime--;

        const formattedTime = formatTime(remainingTime);    
        
        console.log(`${isWork ? 'Work' : 'Break'}: ${formattedTime}`);

        if(remainingTime <= 0){
            clearInterval(timer);

            notifier.notify({
                title: isWork ? 'Working Time' : 'Break Time',
                message: isWork ? 'Time to break' : 'Time to work',
                sound: true,
                wait: true,
            });

            startTimer(isWork ? breakTime : pomodoroTime);
        }
    },1000)
}

startTimer(pomodoroTime);