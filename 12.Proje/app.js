const timerEl = document.querySelector("#timer");
const startButtonEl = document.querySelector("#start");
const stoptButtonEl = document.querySelector("#stop");
const resetButtonEl = document.querySelector("#reset");

let starTime = 0;
let elamsedTim = 0;
let timerInterval;


function startTimer() {
    starTime = Date.now()-elamsedTim;
    timerInterval = setInterval(() =>{
        elamsedTim = Date.now()-starTime;
        timerEl.textContent =formatTime( elamsedTim);
    },10);

    startButtonEl.disabled = true;
    stoptButtonEl.disabled = false;
    resetButtonEl.disabled = false;
}


function formatTime(elamsedTim){
    const milliseconds = Math.floor((elamsedTim % 1000) /10);
   const seconds = Math.floor((elamsedTim % (1000*60 ))/1000);
   const minutes = Math.floor((elamsedTim % (1000 *60 *60 ))/(1000 * 60));
   const hours = Math.floor(elamsedTim/ (1000*60*60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) :"00")
        + ":" +

        (minutes ? (minutes > 9 ? minutes : "0" + minutes) :"00")
        + ":" +

        (seconds ? (seconds > 9 ? seconds : "0" + seconds) :"00")
        + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds));
}

function stopTimer() {
    clearInterval(timerInterval);

    startButtonEl.disabled = false;
    stoptButtonEl.disabled = true;
    resetButtonEl.disabled = false;
}
function resetTimer() {
    clearInterval(timerInterval);

    elamsedTim = 0;
    timerEl.textContent = "00:00:00";

    startButtonEl.disabled = false;
    stoptButtonEl.disabled = false;
    resetButtonEl.disabled = true;
}


startButtonEl.addEventListener("click",startTimer)
stoptButtonEl.addEventListener("click",stopTimer)
resetButtonEl.addEventListener("click",resetTimer)