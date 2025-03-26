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



































// clearTimeout(setID);

// let setID2 = setInterval(() => {
//     let setID=setTimeout(() => {
//         console.log("Hello after 2 seconds");
//     }, 1000);
// }, 2000);


// let count = 0;
// let intervalId = setInterval(() => {
//     count++;
//     console.log("Repeated every 1 second, count:", count);
//     if (count === 5) {
//         clearInterval(intervalId); // Stops after 5 times
//     }
// }, 1000);


// let count = 10;
// let intervalId = setInterval(() => {
//     // count--;
//     console.log(count--);

//     if (count === 0){
//         clearInterval(intervalId);
//     }
// }, 1000);

// let now = new Date();
// console.log(now);
// let hours =now.getHours();
// console.log(hours);
// let hours = now.getHours;
// let minutes = now.getMinutes();
// console.log(minutes)
// let seconds = now.getSeconds();
// console.log(seconds)
// console.log(`${hours}:${minutes}:${seconds}`)