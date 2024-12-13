const { app, BrowserWindow } = require('electron')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  // Cargar la URL de Svelte en desarrollo
  win.loadURL('http://localhost:5000')  // Cambia esta URL si usas un puerto diferente
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
