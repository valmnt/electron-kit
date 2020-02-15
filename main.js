const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const menu = electron.Menu;
const Notification = electron.Notification;

var win = null;

// Main App
app.on('ready', function () {
    win = new BrowserWindow({ width: 1920, height: 1080, frame: true, resizable: true, fullscreen: true, icon: __dirname + 'views/assets/icon.png' });

    const template = [
        {
            label: 'Navigation',
            submenu: [
                {
                    label: 'Accueil',
                    click: function () {
                        win.loadURL(`file://${__dirname}/views/index.html`);
                    }
                },
                {
                    label: 'Exit',
                    click: function () {
                        app.quit();
                    }
                }
            ]
        }
    ]
    const Menu = menu.buildFromTemplate(template);
    menu.setApplicationMenu(Menu)
    win.loadFile('views/index.html');
});

