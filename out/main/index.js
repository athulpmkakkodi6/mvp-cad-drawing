"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const promises = require("fs/promises");
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon: path.join(__dirname, "../../build/icon.png") } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.ipcMain.handle("save-project", async (_, content) => {
  const { canceled, filePath } = await electron.dialog.showSaveDialog({
    filters: [{ name: "MVP CAD Project", extensions: ["json"] }]
  });
  if (canceled || !filePath) return false;
  await promises.writeFile(filePath, content, "utf-8");
  return true;
});
electron.ipcMain.handle("load-project", async () => {
  const { canceled, filePaths } = await electron.dialog.showOpenDialog({
    filters: [{ name: "MVP CAD Project", extensions: ["json"] }],
    properties: ["openFile"]
  });
  if (canceled || filePaths.length === 0) return null;
  const content = await promises.readFile(filePaths[0], "utf-8");
  return content;
});
electron.ipcMain.handle("save-image", async (_, dataUrl) => {
  const { canceled, filePath } = await electron.dialog.showSaveDialog({
    filters: [{ name: "PNG Image", extensions: ["png"] }]
  });
  if (canceled || !filePath) return false;
  const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
  await promises.writeFile(filePath, base64Data, "base64");
  return true;
});
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
