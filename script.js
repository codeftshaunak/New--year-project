const newYear = "1 Jan 2022";

let day = document.getElementById("days");
let hour = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function countDown() {
        const newdateYear = new Date(newYear);
        const currentDate = new Date();
        const totalSecound = (newdateYear - currentDate) / 1000;

        const days = Math.floor(totalSecound / 86400);
        const hours = Math.floor(totalSecound / 3600) % 24;
        const minutes = Math.floor(totalSecound / 60) % 60;
        const secound = Math.floor(totalSecound) % 60;

        day.innerHTML = formetTime(days);
        hour.innerHTML = formetTime(hours);
        min.innerHTML = formetTime(minutes);
        sec.innerHTML = formetTime(secound);

}

function formetTime(time) {
        return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval("countDown()", 1000);