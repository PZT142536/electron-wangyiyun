/*
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-11 18:04:12
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 17:47:29
 * @FilePath: \my-project\src\main\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { app, BrowserWindow, Menu, ipcMain } from 'electron'
import '../renderer/store'

const path = require('path')
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null) // null值取消顶部菜单栏
  mainWindow = new BrowserWindow({
    width: 1022,
    height: 670,
    frame: false,
    transparent: true,
    useContentSize: true,
    icon: path.join(__dirname, "../renderer/assets/img/wangyiyun.png"),//头像
    hasShadow: true, //设置边框是否有阴影
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false

    }
  })

  mainWindow.loadURL(winURL)
  // mainWindow.setIgnoreMouseEvents(true)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  // ipcMain.on('move-application', (event, res) => {
  //   // mainWindow 初始的BrowserWindow窗口
  //   mainWindow && mainWindow.setPosition(res.appX, res.appY)
  // })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
// 退出程序
ipcMain.on('window-close', function () {
  app.quit()
})
// 最小化
ipcMain.on('window-minimize', function () {
  mainWindow.minimize()
})
// 全屏
ipcMain.on('window-maximize', function () {
  mainWindow.setFullScreen(true)
})
// 退出全屏
ipcMain.on('window-unmaximize', function () {
  mainWindow.setFullScreen(false)
})

//热更新
try {
  require('electron-reloader')(module);
} catch (_) { }
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
