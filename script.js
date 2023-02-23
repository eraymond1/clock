var noon = 12;
var evening = 18;

var currentTime = function ()
{
    var currentTime = new Date();

    var clock = document.getElementById('clock');

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > noon){
        meridian = "PM";
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
}