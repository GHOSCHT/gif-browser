// @flow
import { Menu, BrowserWindow } from "electron";

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    Menu.setApplicationMenu(null);
  }
}
