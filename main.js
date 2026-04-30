const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    icon: __dirname + "/icon.ico"
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
