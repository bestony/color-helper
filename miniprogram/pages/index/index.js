var mta = require('../../miniprogram_npm/mta-wechat-analysis/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adHeight:200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init()
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  onCloseAd:function(){
    this.setData({
      adHeight:0
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "用配色助手，配色再也不是难事！",
      path: "pages/index/index",
      imageUrl: "https://postimg.aliavv.com/201810/xk77q.png"
    }
  }
})