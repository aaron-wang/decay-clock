const btn = document.getElementById("add");
const {ipcRenderer} = require('electron');

btn.addEventListener('click', SendInfo)

// function AddTask(end_hour, end_minute, task) {
function SendInfo() {
    //take directly from input fields
    var end_hour = document.getElementById("time-input-hour").value;
    var end_minute = document.getElementById("time-input-minute").value;
    var task = document.getElementById("task-input").value;

    var data = {end_hour, end_minute, task}


    // USE THIS IF YOU WANT TO CLEAR INPUTS AFTER CLICKING "ADD TASK"
    document.getElementById("time-input-hour").value = "";
    document.getElementById("time-input-minute").value = "";
    document.getElementById("task-input").value = "";
    var window = remote.getCurrentWindow();
    window.close();
    
    addTask(data)
}


function addTask(data) {
    const hour = data[0];
    const min = data[1];
    const grid = document.getElementById('task-grid');
    const new_div = document.createElement("div");
    const time = document.createElement("h1");
    const task_obj = document.createElement("p");
    const white = document.createElement("div");
    const pink = document.createElement("div");
    
    grid.appendChild(new_div);
    new_div.id = "task-object";

    time.innerHTML = hour + "<br>" + min;
    new_div.appendChild(time);

    task_obj.innerHTML = data[2];
    new_div.appendChild(task_obj);

    white.id = "static";
    pink.id = "pink-load";
    new_div.appendChild(white);
    new_div.appendChild(pink);
}
        