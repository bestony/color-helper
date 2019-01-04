var mta = require('../../miniprogram_npm/mta-wechat-analysis/index.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      "#FFB900", '#E74856', '#0078D7', '#0099BC', '#7A7574','#767676',
      '#FF8C00', '#E81123', '#0063B1', '#2D7D9A', '#5D5A58','#4C4A48',
      '#F7630C', '#EA005E', '#8E8CD8', '#00B7C3', '#68768A','#69797E',
      '#CA5010', '#C30052', '#6B69D6', '#038387', '#515C6B','#4A5459',
      '#DA3B01', '#E3008C', '#8764B8', '#00B294', '#567C73','#647C64',
      '#EF6950', '#BF0077', '#744DA9', '#018574', '#486860','#525E54',
      '#D13438', '#C239B3', '#B146C2', '#00CC6A', '#498205','#847545',
      '#FF4343', '#9A0089', '#881798', '#10893E', '#107C10','#7E735F'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showToast({
      title: '点击色块复制颜色代码',
      icon: 'none'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "用配色助手，看 FluentUI 精选色",
      path: "pages/fluentui/fluentui",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  getColor: function (event) {
    let data = event.currentTarget.dataset;
    let copyString = `您选中的色值为 ${data.hex}`;
    wx.setClipboardData({
      data: copyString,
      success: () => {
        wx.showToast({
          title: '复制成功！',
          duration: 1500
        });
      }
    })
  }
})