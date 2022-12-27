const start_button = document.getElementById("start"),
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

let h = 0;
let m = 0;
let s = 0;

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
