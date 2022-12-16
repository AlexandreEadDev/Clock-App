setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let secondes = document.getElementById("secondes");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  //convert 24 to 12 hours

  //add 0 to single numbre
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  secondes.innerHTML = s + "<br><span>Seconds</span>";

  if (alarmTime == `${h}:${m}`) {
    console.log("ding dong");
  }
});

const selectMenu = document.querySelectorAll("select"),
  content = document.querySelectorAll(
    ".alarm-wrapper, .clock-a-wrapper, .validate-wrapper"
  ),
  alarmValidateBtn = document.querySelector("button");

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
