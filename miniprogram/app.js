var mta = require('miniprogram_npm/mta-wechat-analysis/index.js');
App({
  onLaunch: function (options) {
    /**
     * 获取系统信息，用于后续处理 Block 高度
     */
    let systeminfo = wx.getSystemInfoSync();

    /**
     * 初始化云开发
     */
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    /**
     * 初始化 MTA
     */
    mta.App.init({
      "appID": "500664522",
      "eventID": "500664523",
      "lauchOpts": options,
      "statPullDownFresh": true,
      "statShareApp": true,
      "statReachBottom": true
    });
    this.globalData = {
      height: systeminfo.windowHeight
    }
  }
})
