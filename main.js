const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const menu = electron.Menu;
const MenuItem = electron.MenuItem;
const { ipcMain } = require('electron');

var win = null;

// Main App
app.on('ready', function () {
    win = new BrowserWindow({
        width: 1920, height: 1080, frame: true, resizable: true, fullscreen: true, webPreferences: {
            nodeIntegration: true
        }
    });

    ipcMain.on('asynchronous-message', (event, arg) => {
        if (arg == "") {
            arg = 'Guest'
        }
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
                ]
            }
        ]

        const Menu = menu.buildFromTemplate(template);

        Menu.append(new MenuItem({
            label: 'Login : ' + arg
        }))

        Menu.append(new MenuItem({
            label: 'Exit',
            accelerator: 'esc',
            click: () => { win.setProgressBar(1), app.quit() }
        }));

        menu.setApplicationMenu(Menu)
    });

    const template = [
        {
            label: 'Navigation',
            submenu: [
                {
                    label: 'Accueil',
                    click: function () {
                        win.loadURL(`file://${__dirname}/views/home.html`);
                    }
                },
            ]
        }
    ]

    const Menu = menu.buildFromTemplate(template);
    menu.setApplicationMenu(Menu)

    win.loadFile('views/home.html');
});

// Option App
app.setUserTasks([
    {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'Nouvelle fenêtre',
        description: 'Créer une nouvelle fenêtre'
    },
])

// App Quit
app.on('quit', function () {
    console.log('App Down');
})



