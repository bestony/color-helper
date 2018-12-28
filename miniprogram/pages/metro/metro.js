// pages/social/social.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      {
        name: "Lime",
        hex: "#a4c400"
      }, {
        name: "Green",
        hex: "#60a917"
      }, {
        name: "Emerald",
        hex: "#008a00"
      }, {
        name: "Teal",
        hex: "#00aba9"
      }, {
        name: "Cyan",
        hex: "#1ba1e2"
      }, {
        name: "Cobalt",
        hex: "#0050ef"
      }, {
        name: "Indigo",
        hex: "#6a00ff"
      }, {
        name: "Violet",
        hex: "#aa00ff"
      }, {
        name: "Pink",
        hex: "#f472d0"
      }, {
        name: "Magenta",
        hex: "#d80073"
      }, {
        name: "Crimson",
        hex: "#a20025"
      }, {
        name: "Red",
        hex: "#e51400"
      }, {
        name: "Orange",
        hex: "#fa6800"
      }, {
        name: "Amber",
        hex: "#f0a30a"
      }, {
        name: "Yellow",
        hex: "#e3c800"
      }, {
        name: "Brown",
        hex: "#825a2c"
      }, {
        name: "Olive",
        hex: "#6d8764"
      }, {
        name: "Steel",
        hex: "#647687"
      }, {
        name: "Mauve",
        hex: "#76608a"
      }, {
        name: "Sienna",
        hex: "#a0522d"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      title: "用配色助手，看 MetroUI 精选色",
      path: "pages/metro/metro",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  getColor: function (event) {
    let data = event.currentTarget.dataset;
    let copyString = `${data.name} 的 Hex 为 ${data.hex}`;
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