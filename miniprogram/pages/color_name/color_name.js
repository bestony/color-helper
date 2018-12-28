let colorname = require('../../colors/color_name.js');
let transformer = require('../../utils/transformer.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onLoad: function (options) {
    this.setData({
      colors: colorname.data
    })
  },
  onShow:function(){
    wx.showToast({
      title: '点击条目，复制颜色的名称及颜色值',
      icon:'none',
      duration:3000
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getColor:function(event){
    let color = event.currentTarget.dataset.color;
    let name = event.currentTarget.dataset.name;
    let color_rgb = transformer.hex2rgb(String("#" + color));
    let copyString = `颜色名: ${name} , 16进制色值: #${color}, RGB 色值为 ${color_rgb}`
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