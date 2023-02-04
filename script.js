function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  let time = `${hh} : ${mm} : ${ss}`;
  document.querySelector(".time").innerHTML = time;

  let t = setTimeout(() => {
    currentTime();
  }, 1000);
}
currentTime();

function cuurentDate() {
  let date = new Date();
  let dd = date.getDay();
  let ddStr = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();

  if (dd == 0) {
    dd = "Sun";
  } else if (dd == 1) {
    dd = "Mon";
  } else if (dd == 2) {
    dd = "Tue";
  } else if (dd == 3) {
    dd = "Wed";
  } else if (dd == 4) {
    dd = "Thu";
  } else if (dd == 5) {
    dd = "Fri";
  } else if (dd == 6) {
    dd = "Sat";
  }

  if (mm == 1) {
    mm = "Jan";
  } else if (mm == 2) {
    mm = "Feb";
  } else if (mm == 3) {
    mm = "Mar";
  } else if (mm == 4) {
    mm = "Apr";
  } else if (mm == 5) {
    mm = "May";
  } else if (mm == 6) {
    mm = "Jun";
  } else if (mm == 7) {
    mm = "Jul";
  } else if (mm == 8) {
    mm = "Aug";
  } else if (mm == 9) {
    mm = "Sept";
  } else if (mm == 10) {
    mm = "Oct";
  } else if (mm == 11) {
    mm = "Nov";
  } else if (mm == 12) {
    mm = "Dec";
  }

  let time = `${dd} ${ddStr} ${mm}  ${yy}`;
  document.querySelector(".date").innerHTML = time;
}
cuurentDate();
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.classList.toggle("orange-mode");
});
