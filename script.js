var noon = 12;
var evening = 18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > noon){
        meridian = "PM";
    }

    // if (hours > noon){
    //     hours = hours - 12;
    // }

    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
};

var updateClock = function()
{
    var time = new Date().getHours();

    showCurrentTime();

};
updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

setInterval(() => {    

    d = new Date();

    hr = d.getHours();
    min = d.getMinutes()
    sec = d.getSeconds();

    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);

   


