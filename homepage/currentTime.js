// Display date and time in browser
// source: https://iq.opengenus.org/display-live-time-and-date-in-html/

"use strict";

let date = new Date();
console.log(time);

document.getElementById("time").textContent = time;

function refreshTime()
{
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);