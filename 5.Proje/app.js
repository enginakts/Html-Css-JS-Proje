const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const newYearTie = new Date("Jan 1, 2026 00:00:00").getTime();

const updateCountdown = () =>{
    const now = new Date().getTime()
    const gap = newYearTie - now;

    const second = 1000;
    const minute = second *60 ;
    const hour = minute * 60;
   const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day ) / hour);
    const m = Math.floor((gap % hour ) / minute);
    const s = Math.floor((gap % minute ) / second);
    
  
    dayEl.innerText = `${d}`;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown,1000);

}
updateCountdown();
