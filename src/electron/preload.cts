import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

//expose API to the renderer process
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel: string, ...args: any[]) => {
      ipcRenderer.send(channel, ...args);
    },

    on: (channel: string, callback: (...args: any[]) => void) => {
      ipcRenderer.on(channel, (_event: IpcRendererEvent, ...args: any[]) => {
        callback(...args);
      });
    },
  },
});
