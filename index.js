const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url'); // url native package from node. Electron suggests that you use this package so it's more safe

// Menu
const menu = require('./src/utils/menu');

if (!app.isPackaged) {
    require('electron-reload')(__dirname); // You can say here if you not only want to watch windows, and you want, like, processes
}


let mainWindow;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Paquirri Bot'
    }); // This creates a new window

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/src', 'index.html'),   // what file to show, using his path
        protocol: 'file',
        slashes: true   // Loading like address of navegator
    }));

    mainWindow.setMenu(menu); // Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
    });
});