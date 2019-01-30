'use strict';

const {BrowserWindow, app} = require('electron');
require('electron-reload')(__dirname);
let win;

let boot = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    frame: false

  });
  win.loadURL(`file://${__dirname}/index.html`);
  //win.webContents.openDevTools();
};
app.on('ready', boot);



