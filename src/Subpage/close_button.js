const electron = require('electron')
const remote = electron.remote

let btn = document.getElementById("close-pg");
btn.addEventListener('click', () => {
    var window = remote.getCurrentWindow();
    window.close();
})