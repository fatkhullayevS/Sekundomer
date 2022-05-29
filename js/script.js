const elMinutes = document.querySelector(".m");
const elSeconds = document.querySelector(".s");
const elMilliSeconds = document.querySelector(".ms");
const [start, pause, reset] = document.querySelector(".btns").children;
let interval;
let [m, s, ms] =[0, 0, 0];

start.addEventListener("click", () => msTimer());
pause.addEventListener("click", () => clearInterval(interval));
reset.addEventListener("click", () =>{
    clearInterval(interval);
    [m, s, ms] =[0, 0, 0];
    timeFormatter();
})

const msTimer = (e) =>{
    clearInterval(interval);
    interval = setInterval( () =>{
        ms++;

        timeFormatter();
    }, 10)
};

const timeFormatter = () =>{
    if(ms > 99){
        ++s;
        ms = 0;
    }
    if(s > 59){
        ++m;
        s = 0;
    }
    elMinutes.textContent = `${m > 9 ? m: "0" + m}`;
    elSeconds.textContent = `${s > 9 ? s: "0" + s}`;
    elMilliSeconds.textContent = `${ms > 9 ? ms: "0" + ms}`;
}