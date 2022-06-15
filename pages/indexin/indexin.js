// pages/indexin/indexin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 授权登录
  gologin:function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  // 评论
  goComments:function(){
    wx.navigateTo({
      url: '/pages/comments/comments',
    })
  },

  // 点餐
  goStore:function(){
    wx.navigateTo({
      url: '/pages/store/store',
    })
  },

  // 关于使用
  goUse:function(){
    wx.navigateTo({
      url: '/pages/use/use',
    })
  },

  // 菜品信息
  goAddress:function(){
    wx.navigateTo({
      url: '/pages/information/information',
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})