const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const menu = electron.Menu;

var win = null;

// Main App
app.on('ready', function () {
    win = new BrowserWindow({ width: 1920, height: 1080, fullscreen: true, resizable: true });
    const template = [
        {
            label: 'Navigation',
            submenu: [
                {
                    label: 'Accueil',
                    click: function () {
                        win.loadURL(`file://${__dirname}/views/index.html`);
                    }
                }
            ]
        }
    ]
    const Menu = menu.buildFromTemplate(template);
    menu.setApplicationMenu(Menu)
    win.loadFile('views/index.html');
});

