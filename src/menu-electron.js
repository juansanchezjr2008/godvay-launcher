// menu.js
const { Menu, MenuItem } = require('electron');
const path = require('path');

// Crear el menú principal de la aplicación
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
            console.log('Guardando itinerario...'); // Funcionalidad vacía por ahora
          }
        },
        {
          label: 'Explorar Carpeta de Letras',
          click() {
            const letrasPath = path.join(__dirname, 'godvay-launcher', 'LETRAS');
            shell.openPath(letrasPath); // Abre la carpeta LETRAS
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
            console.log('Cerrando sesión...'); // Acción de ejemplo
          }
        },
        {
          label: 'Cerrar Aplicación',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit(); // Cierra la aplicación
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

// Crear el menú contextual (clic derecho)
function createContextMenu(mainWindow) {
  const contextMenu = new Menu();
  contextMenu.append(new MenuItem({ label: 'Copiar', role: 'copy' }));
  contextMenu.append(new MenuItem({ label: 'Pegar', role: 'paste' }));
  contextMenu.append(new MenuItem({ label: 'Elemento Personalizado', click() { console.log('Opción personalizada'); } }));

  mainWindow.webContents.on('context-menu', (event, params) => {
    contextMenu.popup({ window: mainWindow });
  });
}

// Exportar las funciones
module.exports = { createMainMenu, createContextMenu };
