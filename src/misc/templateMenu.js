const { Menu } = require('electron');

const exampleTemplateMenu = [
    {
        label: 'Options',
        submenu: [
            {
                label: 'New Product',
                accelerator: process.platform === 'darwin' ? 'command+N' : 'Ctrl+N',
                click(item, focusedWindow) {
                    console.log('New Product')
                }
            }
        ]
    },
];

const exampleMenu = Menu.buildFromTemplate(exampleTemplateMenu);

module.exports = exampleMenu;