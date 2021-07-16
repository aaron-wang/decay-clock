const {ipcRenderer} = require("electron")

let subpage = document.getElementById("subpage");
subpage.addEventListener('click', () => {
    ipcRenderer.send('subpage-task', 'page-two');
}, false);

