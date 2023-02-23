var noon = 12;
var evening = 18;

var currentTime = function ()
{
    var currentTime = new Date();

    var clock = document.getElementById('clock');

    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    var meridian = "AM";

    if (hours > noon){
        meridian = "PM";
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
}