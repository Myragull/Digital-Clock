let timeContsiner= document.querySelector(".container");
let timePara= document.querySelector(".time-para");
let now = new Date();
let hours =now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function displayTime(){
    if (hours<10 ){
        hours = '0'+ hours;
    }
    if (minutes<10 ){
        minutes = '0'+ minutes;
    }
    if (seconds<10 ){
        seconds = '0'+ seconds;
    }
    let intervalId = setInterval(() => {
        // console.log(seconds++);
        timePara.innerHTML= `${hours}   :   ${minutes}   :     ${seconds++}   `;
        if (seconds === 61){
                    clearInterval(intervalId);
                }
    }, 1000);
}

displayTime();
