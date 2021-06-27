// example: add_timer(2 , 0)      new deadline at 2:00 AM
function add_timer(hour , minute){
    var today = new Date();
    var cur_hour = today.getHours();
    var cur_min = today.getMinutes();
    var tot = (hour - cur_hour)*60 + (minute - cur_min);
    var tot2 = tot;
    while(tot > 1){
        tot = Math.floor(tot / 2);
        var how_long = tot2 - tot;
        let timer_hour = cur_hour + Math.floor(how_long/60);
        let timer_min = cur_min + Math.floor(how_long%60);
        if(timer_min > 60){
            timer_min -= 60;
            timer_hour += 1;
        }
        console.log(timer_hour +' : '+timer_min);
        // add a sub-timer
    }
    return tot;
}
