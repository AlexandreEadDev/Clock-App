setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let timeZones = h >= 12 ? "PM" : "AM";

  //convert 24 to 12 hours
  if (h > 12) {
    h = h - 12;
  }

  //add 0 to single numbre
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  ampm.innerHTML = timeZones;
});
