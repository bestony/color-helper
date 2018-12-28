// pages/social/social.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      {
        name: "Turquoise",
        hex: "#1abc9c"
      }, {
        name: "Emerland",
        hex: "#2ecc71"
      }, {
        name: "Peterriver",
        hex: "#3498db"
      }, {
        name: "Amethyst",
        hex: "#9b59b6"
      }, {
        name: "Wetasphalt",
        hex: "#34495e"
      }, {
        name: "Greensea",
        hex: "#16a085"
      }, {
        name: "Nephritis",
        hex: "#27ae60"
      }, {
        name: "Belizehole",
        hex: "#2980b9"
      }, {
        name: "Wisteria",
        hex: "#8e44ad"
      }, {
        name: "MidnightBlue",
        hex: "#2c3e50"
      }, {
        name: "Sunflower",
        hex: "#f1c40f"
      }, {
        name: "Carrot",
        hex: "#e67e22"
      }, {
        name: "Alizarin",
        hex: "#e74c3c"
      }, {
        name: "clouds",
        hex: "#ecf0f1"
      }, {
        name: "Concrete",
        hex: "#95a5a6"
      }, {
        name: "Orange",
        hex: "#f39c12"
      }, {
        name: "Pumpkin",
        hex: "#d35400"
      }, {
        name: "Pomegranate",
        hex: "#c0392b"
      }, {
        name: "Silver",
        hex: "#bdc3c7"
      }, {
        name: "Asbestos",
        hex: "#7f8c8d"
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
      title: "用配色助手，看 FlatUI 精选色",
      path: "pages/flatui/flatui",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  getColor: function (event) {
    let data = event.currentTarget.dataset;
    let copyString = `${data.name} 的HEX为 ${data.hex}`;
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