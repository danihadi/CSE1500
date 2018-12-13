var timeBegan = null

$(document).ready ( function(){
    timeBegan = new Date();
    started = setInterval(clockRunning, 10);	
 });​

 function clockRunning(){
    var currentTime = new Date(), 
    timeElapsed = new Date(currentTime - timeBegan - stoppedDuration), 
    hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("time").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};