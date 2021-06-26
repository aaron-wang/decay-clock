console.log(Date());

var sound = new Audio('alarm.mp3');
setInterval(run, 500);

function run(){
    //set alarm time here
    var alarmTime = "12:09:20";
    var curDate = new Date();
    var curTime = format(curDate.getHours()) + ":" + format(curDate.getMinutes()) +":" + format(curDate.getSeconds());

    //document.getElementById("date").innerHTML = curTime;
    //document.getElementById("set").innerHTML = alarmTime;
    console.log(curTime + " " + alarmTime);
    if(curTime === alarmTime){
        playSound();
    }
}

function format(t){
    
    if(t < 10)
        return "0" + t;
    else 
        return t;

}

function playSound(){
    sound.play();
}