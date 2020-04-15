// 1. Write a JavaScript program to display the current day and time in the following format.Go to the editor
// Sample Output: Today is: Tuesday.
// Current time is: 10 PM: 30 : 38

function currentTime() {
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let day = daylist[date.getDay()]; //?
  let hours = date.getHours();
  let amPM = hours >= 12 ? "PM" : "AM";
  let min = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours >= 12 ? hours % 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;

  min = min < 10 ? "0" + min : min;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(`Today is: ${day}`);
  console.log(`Current time is: ${hours} ${amPM} : ${min} : ${seconds}`);
}

currentTime();
