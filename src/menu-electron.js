const { Menu, MenuItem } = require('electron');
const path = require('path');

function createMainMenu() {
  const menuTemplate = [
    {
      label: 'Archivo',
      submenu: [
        {
          label: 'Explorar App Directorio',
          accelerator: 'CmdOrCtrl+Shift+E',
          click() {
            const appDir = path.join(__dirname, 'godvay-launcher');
            shell.openPath(appDir); // Abre el explorador de archivos en la raíz
          }
        },
        {
          label: 'Guardar Itinerario',
          click() {
            console.log('Guardando itinerario...');
          }
        },
        {
          label: 'Explorar Carpeta de Letras',
          click() {
            const letrasPath = path.join(__dirname, 'godvay-launcher', 'LETRAS');
            shell.openPath(letrasPath);
          }
        },
        {
          label: 'Explorar Carpeta de Biblias',
          click() {
            const bibliasPath = path.join(__dirname, 'godvay-launcher', 'BIBLIAS');
            shell.openPath(bibliasPath); // Abre la carpeta BIBLIAS
          }
        },
        { type: 'separator' },
        {
          label: 'Cerrar Sesión',
          click() {
            console.log('Cerrando sesión...');
          }
        },
        {
          label: 'Cerrar Aplicación',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

function createContextMenu(mainWindow) {
  const contextMenu = new Menu();
  contextMenu.append(new MenuItem({ label: 'Copiar', role: 'copy' }));
  contextMenu.append(new MenuItem({ label: 'Pegar', role: 'paste' }));
  contextMenu.append(new MenuItem({ label: 'Elemento Personalizado', click() { console.log('Opción personalizada'); } }));

  mainWindow.webContents.on('context-menu', (event, params) => {
    contextMenu.popup({ window: mainWindow });
  });
}

module.exports = { createMainMenu, createContextMenu };
