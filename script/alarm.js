const selectMenu = document.querySelectorAll("select"),
  content = document.querySelectorAll(
    ".alarm-wrapper, .clock-a-wrapper, .validate-wrapper"
  ),
  alarmValidateBtn = document.querySelector(".validate");

let alarmTime;

for (let i = 24; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option id="h-alarm" value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 60; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option id="h-alarm" value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
  let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
  alarmTime = time;
  for (const contents of content) {
    contents.classList.add("active");
  }
}

alarmValidateBtn.addEventListener("click", setAlarm);

function changeIcon(x) {
  x.classList.toggle("fa-xmark");
}

setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let secondes = document.getElementById("secondes");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

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
  //360/24 hours = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  //360/60 min&sec = 6

  if (alarmTime == `${h}:${m}`) {
    console.log("ding dong");
  }
});
