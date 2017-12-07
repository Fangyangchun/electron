const {app, BrowserWindow} = require('electron');  // 控制应用生命周期的模块
  // 创建原生浏览器窗口的模块

// 保持一个对于window对象的全局引用，不然，当jsvascript被GC，
// window会被自动关闭
var mainWindow = null;

// 当所有窗口被关闭了，退出
app.on('window-all-closed', function() {
    // 在OS X 上，通常用户在明确地按下Cmd + Q 之前
    // 应用会保持活动状态
    if (process.platform != 'darwin') {
        app.quit;
    }
});

// 当Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', function() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // 加载应用的index.html
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // 打开开发工具
    // mainWindow.openDevTools();

    // 当window被关闭，这个事件会被发出
    mainWindow.on('closed', function() {
        // 取消引用window对象，如果你的应用支持多个窗口的话，
        // 通常会把多个window对象存放在一个数组里面
        // 但这次不是
        mainWindow = null;
    });

});