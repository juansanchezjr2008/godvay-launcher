const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { createMainMenu } = require('./src/menu-electron');

let win;

// Función para crear la ventana de la aplicación
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
      contextIsolation: true,
      backgroundThrottling: false
    }
  });

  win.loadFile(path.join(__dirname, 'godvay-launcher', 'index.html')); 

  createMainMenu();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
