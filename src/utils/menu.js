const { app, Menu } = require('electron');

const template = [];

if (process.platform === 'darwin') {
    template.unshift({
        label: 'Paquirri Bot' // app.getName()
    });
}
if (!app.isPackaged) {
    template.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Show/Hide developer tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}

let menu = Menu.buildFromTemplate(template);

if (template.length === 0 || !template || template == '') menu = null;
module.exports = menu;