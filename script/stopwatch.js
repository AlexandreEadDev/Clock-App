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
function stopwatch() {
  seconds++;

  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds - h * 3600) / 60);
  let s = seconds % 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  secondes.innerHTML = s + "<br><span>Seconds</span>";

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 15}deg)`;
  //360/12 hours = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  //360/60 min&sec = 6
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(stopwatch, 1000);
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
  stopwatch();
}

stopwatch();
