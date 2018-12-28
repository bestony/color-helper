var mta = require('miniprogram_npm/mta-wechat-analysis/index.js');
App({
  onLaunch: function (options) {
    let systeminfo = wx.getSystemInfoSync();

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
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
