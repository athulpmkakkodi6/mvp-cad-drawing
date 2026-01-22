"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  saveProject: (content) => electron.ipcRenderer.invoke("save-project", content),
  loadProject: () => electron.ipcRenderer.invoke("load-project"),
  saveImage: (dataUrl) => electron.ipcRenderer.invoke("save-image", dataUrl)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
