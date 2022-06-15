// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow1:function(){
    wx.showModal({
     title:'安格斯鲜蔬堡',
     content:"一块重150克的安格斯牛肉饼，佐以生菜、洋葱、芝士、培根，淋上烟熏安格斯酱汁，搭配光泽饱满的小圆面包，撒上罂粟籽和芝麻籽，风味十足。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow2:function(){
    wx.showModal({
     title:'咖喱牛肉盖浇饭',
     content:"咖喱牛肉盖浇饭，是一道常见菜肴。什锦汁(八方汁)是在超市买的日本进口的，是一种万能汁，可以做盖饭、煮物、面、烤肉的调料，非常方便，如果没有，可用酱油、米酒、味淋、胡椒盐、糖调成汁。牛肉一定买切得很薄的片的那种不喜欢黄油，也可以不放。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow3:function(){
    wx.showModal({
     title:'肉酿茄子',
     content:"肉酿茄子是一款菜品，制作原料主要有茄子、肉末、生姜、大蒜、小葱、酱油、食盐、白糖、辣椒油、生粉（干淀粉）、冷水、食用油等。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow4:function(){
    wx.showModal({
     title:'三丝炒饭',
     content:"三丝炒饭是常见的一种食物，它是用煮好的米饭、一些菜肴、鸡蛋爆炒而成，炒饭分为多种品类，如扬州炒饭、香肠炒饭、西红柿炒饭、咖喱炒饭、培根炒饭等，在各地都有独特款式，一般大众把炒饭当做早饭或者是晚饭，因为炒饭制作方便，耗时较少，营养丰富，很受大众追捧。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow5:function(){
    wx.showModal({
     title:'番茄披萨',
     content:"番茄披萨，菜品名，主料为小麦富强粉、番茄。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow6:function(){
    wx.showModal({
     title:'纳豆',
     content:"纳豆，起源于中国古代，自秦汉（公元前221年-公元220年）以来开始制作，由黄豆通过纳豆菌（枯草杆菌）发酵制成豆制品，具有黏性，气味较臭，味道微甜，不仅保有黄豆的营养价值、富含维生素K2、提高蛋白质的消化吸收率，更重要的是发酵过程产生了多种生理活性物质，具有溶解体内纤维蛋白及其他调节生理机能的保健作用。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户已阅读");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow7:function(){
    wx.showModal({
     title:'虾仁炒粿条',
     content:"炒粿条，作为粿条一种煮食方法，通常特指干炒，常见于广东潮汕地区，福建闽南，和广东话中的“干炒河”基本相同，又写作“炒贵刁（潮汕话）”，也是流行于马来西亚和新加坡等东南亚国家的华人美食，在马新两地的美食中心都可以找到其踪迹。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow8:function(){
    wx.showModal({
     title:'葱花鸡蛋羹',
     content:"葱花鸡蛋羹是用鸡蛋制作的一道家常菜，细腻滑嫩。鸡蛋含有丰富的蛋白质、脂肪、维生素和铁、钙、钾等人体所需要的矿物质，蛋白质为优质蛋白，对肝脏组织损伤有修复作用。葱花鸡蛋羹具有健脑益智、保护肝脏、防治动脉硬化、预防癌症、延缓衰老、美容护肤的作用。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow9:function(){
    wx.showModal({
     title:'青瓜牛肉',
     content:"青瓜炒牛肉是一道由牛肉、青瓜等做成的美食。",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
    })
  },
  onShow10:function(){
    wx.showModal({
     title:'葱花虾滑',
     content:"虾滑是一种虾泥制品，主要材料有虾，辅料有肉、鱼类等。虾滑的做法是把虾去壳，通过上千次的摔打，使肉具有粘性，让其保持原有的营养成分，又具有了爽脆的口感",
     confirmText:"已阅读",
     showCancel:false,
      success(res){
        if(res.confirm){
          console.log("用户点击确认");
        } else if (res.cancel){
          console.log("用户点击取消");
        }
      }
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