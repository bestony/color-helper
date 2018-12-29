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
    mta.Page.init();
    wx.setClipboardData({
      data: 'ixiqin_com',
      success:()=>{
        wx.showToast({
          title: '微信号已复制！',
        })
      }
    })
  },


})