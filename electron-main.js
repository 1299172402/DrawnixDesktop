const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Drawnix',
    webPreferences: {
      preload: path.join(__dirname, 'electron-preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'apps/web/public/favicon.ico')
  });

  mainWindow.setMenuBarVisibility(false);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:7200');
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist/apps/web/index.html'));
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// 设置应用名称和 WM_CLASS（Linux 任务栏图标识别）
if (process.platform === 'linux') {
  app.setName('Drawnix');
  app.setDesktopName('drawnix.desktop');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
