let generator = require('../../colors/random.js')
let app = getApp();
let transformer = require('../../utils/transformer.js')
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
  onLoad: function(options) {
    mta.Page.init()
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

  onSubmit:function(event){

    console.log(event.detail.formId)
    let colors = this.data.color;
    let colors_rgb = this.data.color_rgb;
    wx.cloud.callFunction({
      name:"sendRandomNotify",
      data:{
        formId: event.detail.formId,
        color1: `#${colors.color1}|rgb(${colors_rgb.color1})`,
        color2: `#${colors.color2}|rgb(${colors_rgb.color2})`,
        color3: `#${colors.color3}|rgb(${colors_rgb.color3})`,
        color4: `#${colors.color4}|rgb(${colors_rgb.color4})`
      }
    }).then(res => {
      console.log(res);
      wx.showToast({
        title: '发送成功!',
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "用配色助手，只需1秒，就可以生成配色方案",
      path: "pages/random/random",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  }
})