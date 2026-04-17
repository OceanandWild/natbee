const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('natBee', {
  platform: 'desktop'
});
