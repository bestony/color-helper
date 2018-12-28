var mta = require('../../miniprogram_npm/mta-wechat-analysis/index.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showToast({
      title: '下拉查看所有 Color Palettes!',
      icon:'none'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "用配色助手在手机上就能查 Material Design Color Palettes!",
      path: "pages/mdcolor/mdcolor",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  }
})