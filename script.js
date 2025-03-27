let timeP = document.querySelector(".time-para");

function displayTime() {
    let now = new Date();
    let timeString = now.toTimeString().split(" ")[0]; // Get HH:MM:SS format
    let dateString = now.toDateString();
    console.log(dateString);
    timeP.innerText = timeString;
}

setInterval(displayTime, 1000);

let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark-theme')) {
        html.classList.remove('dark-theme')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark-theme')
        e.target.innerHTML = 'Light mode'
    }
})