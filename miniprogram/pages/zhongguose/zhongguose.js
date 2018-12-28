let colors = require('../../colors/zhongguose.js')
Page({


  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      colors: colors.colors
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.showToast({
      title: '向下滑动查看所有中国传统色，点击即可复制对应色值。',
      icon: 'none'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "用配色助手，选中国传统色",
      path: "pages/zhongguose/zhongguose",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  getColor: function(event) {
    let data = event.currentTarget.dataset;
    let copyString = `${data.name}的色值如下\nHEX: ${data.hex}\nRGB: ${data.rgb}\nCMYK: ${data.cmyk}`
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