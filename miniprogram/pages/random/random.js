let generator = require('../../colors/random.js')
let app = getApp();
let transformer = require('../../utils/transformer.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let color = generator.generateColor();
    delete color['id']
    let color_rgb = {
      color1: null,
      color2: null,
      color3: null,
      color4: null,
    };
    Object.keys(color).forEach(function(key) {
      color_rgb[key] = transformer.hex2rgb(String("#" + color[key]))
    });
    let item_height = app.globalData.height / 4;
    this.setData({
      color,
      item_height,
      color_rgb
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.showToast({
      title: '点击界面复制配色方案,下拉刷新生成新的配色方案',
      icon: "none"
    })
  },
  getColor: function(event) {
    let colors = this.data.color;
    let colors_rgb = this.data.color_rgb;
    let copyString = `您的配色方案如下\nColor1: #${colors.color1}|rgb(${colors_rgb.color1})\nColor2: #${colors.color2}|rgb(${colors_rgb.color2})\nColor3: #${colors.color3}|rgb(${colors_rgb.color3})\nColor4: #${colors.color4}|rgb(${colors_rgb.color4})`
    wx.setClipboardData({
      data: copyString,
      success: () => {
        wx.showToast({
          title: '复制成功！',
          duration: 1500
        });
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    let color = generator.generateColor();
    delete color['id']
    this.setData({
      color
    }, res => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})