//Variables
const start_button = document.getElementById("start"),
  stop_button = document.getElementById("stop"),
  reset_button = document.getElementById("reset");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let secondes = document.getElementById("secondes");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let seconds = -1;
let interval = null;

//listeners

start_button.addEventListener("click", start);
stop_button.addEventListener("click", stop);
reset_button.addEventListener("click", reset);

//update time
function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  hours.innerHTML = hrs + "<br><span>Hours</span>";
  minutes.innerHTML = mins + "<br><span>Minutes</span>";
  secondes.innerHTML = secs + "<br><span>Seconds</span>";

  hh.style.strokeDashoffset = 440 - (440 * hrs) / 12;
  mm.style.strokeDashoffset = 440 - (440 * mins) / 60;
  ss.style.strokeDashoffset = 440 - (440 * secs) / 60;

  hr_dot.style.transform = `rotate(${hrs * 15}deg)`;
  //360/12 hours = 30
  min_dot.style.transform = `rotate(${mins * 6}deg)`;
  sec_dot.style.transform = `rotate(${secs * 6}deg)`;
  //360/60 min&sec = 6
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = -1;
  hours.innerHTML = "00" + "<br><span>Hours</span>";
  minutes.innerHTML = "00" + "<br><span>Minutes</span>";
  secondes.innerHTML = "00" + "<br><span>Seconds</span>";
}

timer();
