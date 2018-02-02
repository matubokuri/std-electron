import { app, BrowserWindow } from 'electron'
import * as Url from 'url'

declare var __dirname: string
let mainWindow: Electron.BrowserWindow

const debug = require('debug')('main')
// const debugError = require('debug')('main:error')

// ログ
debug(`Electron Version ${app.getVersion()}`)
// const fileName = `${__dirname}/index.html`
// ----------------------------------------------
// 準備完了
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })

  mainWindow.on('close', () => app.quit())

  // 開発コンソールを開く
  mainWindow.webContents.openDevTools()

  loadStartPage()
})
// 準備完了
// ----------------------------------------------

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function loadStartPage(): void {
  const fileName = `${__dirname}/index.html`
  mainWindow.loadURL(Url.format({
    pathname: fileName,
    protocol: 'file:',
    slashes: true
  }))
}
