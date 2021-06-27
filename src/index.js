const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    icon:"icon.png"
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  mainWindow.maximize();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('subpage-task', (event, filename) => {
  let win = new BrowserWindow({
    width:880, 
    height:770,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  frame:false,
  resizable: false
});
  win.loadURL(__dirname + "/Subpage/" + "index.html");
})

ipcMain.on('add-task', (event, filename) => {
  let win = new BrowserWindow({
    width: 1000,
    height:350,
    webPreferences: {
      preload: "add.js",
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  frame:false,
  resizable: false
  });
  win.loadURL(__dirname + "/SubPage" + "/add_task.html");
})


// ipcMain.on('receive-task', (event, data) => {
//   const hour = data[0];
//   const min = data[1];
//   const grid = document.getElementById('task-grid');
//   const new_div = document.createElement("div");
//   const time = document.createElement("h1");
//   const task_obj = document.createElement("p");
//   const white = document.createElement("div");
//   const pink = document.createElement("div");
  
//   grid.appendChild(new_div);
//   new_div.id = "task-object";

//   time.innerHTML = hour + "<br>" + min;
//   new_div.appendChild(time);

//   task_obj.innerHTML = data[2];
//   new_div.appendChild(task_obj);

//   white.id = "static";
//   pink.id = "pink-load";
//   new_div.appendChild(white);
//   new_div.appendChild(pink);
// })


