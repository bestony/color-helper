var mta = require('../../miniprogram_npm/mta-wechat-analysis/index.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorData: {
      //基础色相，即左侧色盘右上顶点的颜色，由右侧的色相条控制
      hueData: {
        colorStopRed: 255,
        colorStopGreen: 0,
        colorStopBlue: 0,
      },
      //选择点的信息（左侧色盘上的小圆点，即你选择的颜色）
      pickerData: {
        x: 0, //选择点x轴偏移量
        y: 480, //选择点y轴偏移量
        red: 0,
        green: 0,
        blue: 0,
        hex: '#000000'
      },
      //色相控制条的位置
      barY: 0
    },
    rpxRatio: 1 //此值为你的屏幕CSS像素宽度/750，单位rpx实际像素

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          rpxRatio: res.screenWidth / 750
        })
      }
    })
  },
  onShow: function(event) {
    // wx.showToast({
    //   title: '点击界面复制 RGB 值和 Hex 值',
    //   icon: "none"
    // })
  },
  onChangeColor(e) {
    // let rgb = `${e.detail.colorData.pickerData.red},${e.detail.colorData.pickerData.green},${e.detail.colorData.pickerData.blue}`
    // let copyString = `您选择的颜色的 Hex 为 ${rgb}, RGB 值为 ${e.detail.colorData.pickerData.hex}`
    // wx.setClipboardData({
    //   data: copyString,
    //   success: () => {
    //     wx.showToast({
    //       title: '复制成功！',
    //       duration: 1500
    //     });
    //   }
    // })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "用配色助手，手机上也能选出想要的颜色！",
      path: "pages/picker/picker",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  onLoad:function(options){
    mta.Page.init();
  }
})