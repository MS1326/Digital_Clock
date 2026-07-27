let digital = document.getElementById("digital");
let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");
let time = document.getElementById("p-1");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let sec = document.getElementById("second");
let sun = document.getElementById("sun");
let mon = document.getElementById("mon");
let tues = document.getElementById("tues");
let wed = document.getElementById("wed");
let thurs = document.getElementById("thurs");
let fri = document.getElementById("fri");
let satur = document.getElementById("satur");
let am = document.getElementById("p-2");
let pm = document.getElementById("p-3");
let p1 = document.getElementById("p-1");

let x = new Date();
year.innerHTML = x.getFullYear();
date.innerHTML = x.getDate();
mon = [
  "JAN",
  "FEB",
  "MARCH",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
month.innerHTML = mon[x.getMonth()];
// hour.innerHTML=x.getHours()
// minute.innerHTML=x.getMinutes()
// sec.innerHTML=x.getSeconds()
let t = setInterval(function () {
  let date = new Date();
  let x = date.toLocaleTimeString();
  p1.innerHTML = x;
}, 1000);
console.log(x.toLocaleTimeString());
days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let day = days[x.getDay()];
console.log(day);
if (day == "saturday") {
  satur.style.color = "red";
} else if (day == "sunday") {
  sun.style.color = "red";
} else if (day == "monday") {
  mon.style.color = "red";
} else if (day == "tuesday") {
  tues.style.color = "red";
} else if (day == "wednesday") {
  wed.style.color = "red";
} else if (day == "thursday") {
  thurs.style.color = "red";
} else if (day == "friday") {
  fri.style.color = "red";
}

h = x.getHours();
if (h < 12) {
  am.style.color = "red";
} else {
  pm.style.color = "red";
}
