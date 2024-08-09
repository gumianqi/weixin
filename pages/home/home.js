// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '',
    active: 0,
    posts:[
      {id:1 , img:"/images/user-no.png",text:"文本如果超过一行会省略"},
      {id:2 , img:"/images/search.png",text:"描述文本"},
      {id:3 , img:"/images/消息-置灰.png",text:"描述文本"},
      {id:4 , img:"/images/关闭.png",text:"描述文本"},
      {id:5 , img:"/images/更多.png",text:"描述文本"},
      {id:6 , img:"/images/user-yes.png",text:"描述文本"},
      {id:7 , img:"/images/home-yes.png",text:"描述文本"},
      {id:8 , img:"/images/home-no.png",text:"描述文本"},
      {id:9 , img:"/images/更多.png",text:"描述文本"},
      {id:10 , img:"/images/更多.png",text:"描述文本"},
      {id:11 , img:"/images/更多.png",text:"描述文本"},
      {id:12 , img:"/images/home-no.png",text:"描述文本"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                scrollHeight: res.windowHeight*2
            })
        }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})