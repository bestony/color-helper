// pages/social/social.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      {
        name: "Facebook",
        hex: "#3b5999"
      }, {
        name: "Messager",
        hex: "#0084ff"
      }, {
        name: "Twitter",
        hex: "#55acee"
      }, {
        name: "LinkedIn",
        hex: "#0077B5"
      }, {
        name: "Skype",
        hex: "#00AFF0"
      }, {
        name: "Dropbox",
        hex: "#007ee5"
      }, {
        name: "WordPress",
        hex: "#21759b"
      }, {
        name: "Vimeo",
        hex: "#1ab7ea"
      }, {
        name: "SlideShare",
        hex: "#0077b5"
      }, {
        name: "VK",
        hex: "#4c75a3"
      }, {
        name: "Tumblr",
        hex: "#34465d"
      }, {
        name: "Yahoo",
        hex: "#410093"
      }, {
        name: "Google Plus",
        hex: "#dd4b39"
      }, {
        name: "Pinterest",
        hex: "#bd081c"
      }, {
        name: "Youtube",
        hex: "#cd201f"
      }, {
        name: "StumbleUpon",
        hex: "#eb4924"
      }, {
        name: "Reddit",
        hex: "#ff5700"
      }, {
        name: "Quora",
        hex: "#b92b27"
      }, {
        name: "Yelp",
        hex: "#af0606"
      }, {
        name: "Weibo",
        hex: "#df2029"
      }, {
        name: "ProductHunt",
        hex: "#da552f"
      }, {
        name: "HackNews",
        hex: "#ff6600"
      }, {
        name: "SoundCloud",
        hex: "#ff3300"
      }, {
        name: "Blogger",
        hex: "#f57d00"
      }, {
        name: "Whatsapp",
        hex: "#25D366"
      }, {
        name: "WeChat",
        hex: "#09b83e"
      }, {
        name: "Line",
        hex: "#00c300"
      }, {
        name: "Medium",
        hex: "#02b875"
      }, {
        name: "Vine",
        hex: "#00b489"
      }, {
        name: "Slack",
        hex: "#3aaf85"
      }, {
        name: "Instagram",
        hex: "#e4405f"
      }, {
        name: "Dribbble",
        hex: "#ea4c89"
      }, {
        name: "Flickr",
        hex: "#ff0084"
      }, {
        name: "FourSquare",
        hex: "#f94877"
      }, {
        name: "Behance",
        hex: "#131418"
      }, {
        name: "SnapChat",
        hex: "#FFFC00"
      },
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
      title: "用配色助手，看社交品牌色",
      path: "pages/social/social",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  },
  getColor: function (event) {
    let data = event.currentTarget.dataset;
    let copyString = `${data.name} 的品牌色为 ${data.hex}`;
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