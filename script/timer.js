//Variables

const start_button = document.getElementById("start"),
  reset_button = document.getElementById("reset"),
  input_time = document.getElementById("input-time"),
  input_time_wrapper = document.querySelector(".input-time-wrapper");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let secondes = document.getElementById("secondes");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let interval = null;
let remainingSeconds = 0;
let ringtone = new Audio("../icons&ringtones/alarm.mp3");

//listeners

start_button.addEventListener("click", () => {
  if (input_time.value > 1440) {
    alert("Ask for an hours under 24h");
    location.reload();
  } else if (interval === null && input_time.value < 1441) {
    remainingSeconds = input_time.value * 60;
    start();
    input_time_wrapper.classList.add("active");
  } else {
    input_time.value = remainingSeconds / 60;
    stop();
  }
});
reset_button.addEventListener("click", () => {
  location.reload();
});

//Function
function timer() {
  let h = Math.floor(remainingSeconds / 3600);
  let m = Math.floor((remainingSeconds - h * 3600) / 60);
  let s = remainingSeconds % 60;

  //add 0 to single numbre
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  secondes.innerHTML = s + "<br><span>Seconds</span>";

  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 15}deg)`;
  //360/24 hours = 15
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  //360/60 min&sec = 6
}

timer();

function start() {
  if (remainingSeconds === 0) return;

  interval = setInterval(() => {
    remainingSeconds--;
    timer();

    if (remainingSeconds === 0) {
      stop();
      ringtone.play();
      ringtone.loop = true;
    }
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if (x >= 48 && x <= 57) {
    return true;
  } else {
    return false;
  }
}

function changeIcon(x) {
  x.classList.toggle("fa-stop");
}
