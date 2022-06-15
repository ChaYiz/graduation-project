// pages/store/store.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    viewTo: "",
    viewToLeft: "",
    listHeight: 300,
    activeIndex: 0,
    tabIndex: 0,
    showModal: false,
    showCart: false,
    heigthArr: [],
    cart: [],
    totalMoney: 0,
    activesInfo: {
      1: {
        class: "manjian",
        text: "减"
      },
      2: {
        class: "xindian",
        text: "新"
      },
      3: {
        class: "zhekou",
        text: "折"
      },
      4: {
        class: "daijinquan",
        text: "券"
      },
      5: {
        class: "xinyonghu",
        text: "新"
      },
      6: {
        class: "peisong",
        text: "配"
      },
      7: {
        class: "lingdaijin",
        text: "领"
      },
      8: {
        class: "zengsong",
        text: "赠"
      }
    },
    storeInfo: {
      //服务端获取信息
      storeId: 1,
      storeName: "酒池肉林",
      storeImgUrl: "/image/NTF.jpg",
      score: 4.4, 
      saleMonth: 835, 
      minDelPrice: 20,  // 起送
      delPrice: 5,    // 配送费
      averagePrice: 15,
      delTime: 30,    // 分钟
      distance: 3.2,   // km
      service: ["支持自取"],
      actives: [{
          activeId: 1,
          acticeText: "满20减10；满200减20；满1000减50；满1000减50；满1000减50"
        },
        {
          activeId: 2,
          acticeText: "本店新用户立减5元"
        },
        {
          activeId: 3,
          acticeText: "折扣商品9折起"
        }
      ],
      publicMsg: "以酒为池，悬肉为林，以肉为林,长夜歌舞作乐"
    },
    food: [{
        titleId: "title1",
        title: "热销",
        foodCount: 0,
        items: [{
            foodId: 1,
            name: "安格斯鲜蔬堡",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/e4ba8bdc49a6985ee87ae3eb81d6b8f2458bcb0392f5a-KaJGBQ_fw658/format/webp",
            classify: []
          },
          {
            foodId: 2,
            name: "咖喱牛肉盖浇饭",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/652d26135d6deb12150dbfb9a5a08c3d894a665c9e194-joJ44J_fw658/format/webp",
            classify: []
          },
          {
            foodId: 3,
            name: "肉酿茄子",
            price: 23,
            monthNum: 34,
            note: "味道很好,欢迎品尝",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/308f3e4d1b644af5be032882543cdc1bdfe51083ae4a0-7g3HO6_fw658/format/webp",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title2",
        title: "大菜",
        foodCount: 0,
        items: [{
            foodId: 4,
            name: "三丝炒饭",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/4842fd7fa7a1ce99b716d8fac25c5ec060c1dff9a0178-ArUIPG_fw658/format/webp",
            classify: []
          },
          {
            foodId: 5,
            name: "番茄披萨",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/10f2b52a249856708b786eb5b50a90a827b600f59ba33-EOpKEH_fw658/format/webp",
            classify: []
          },
          {
            foodId: 6,
            name: "纳豆",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/ac636fa531d5767773626f971e7be5fa24b8f65ea4840-2H77JX_fw658/format/webp",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title3",
        title: "小菜",
        foodCount: 0,
        items: [{
            foodId: 7,
            name: "葱花鸡蛋羹",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/4af00c65df8d6bdc3fc10bf6d69e1ab29d841cbfa87bd-OVvPQc_fw658/format/webp",
            classify: []
          },
          {
            foodId: 8,
            name: "青瓜牛肉",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/03bea9a344d96949a43a72e6d1521d3293f7ddce95976-1qHcIr_fw658/format/webp",
            classify: []
          },
          {
            foodId: 9,
            name: "葱花虾滑",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://hbimg.huabanimg.com/3753d19e0ae0d706e4ba12ca29ddaa28cf9172528064a-lbLTSk_fw658/format/webp",
            classify: []
          }
        ]
      },
      {
        titleId: "title4",
        title: "饮料",
        foodCount: 0,
        items: [{
            foodId: 10,
            name: "百事可乐",
            price: 3,
            monthNum: 34,
            note: "",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.c2582192d1ceb2b022298fb88d538240?rik=PuM32kRmmBikIg&riu=http%3a%2f%2fwx4.sinaimg.cn%2flarge%2f974c6be6gy1gc5g1mawbpg20dw0dwao3.gif&ehk=KbD1Rc3oDdS885Zx82Ylpw4%2bDlZ%2fMAvDU%2bJqs1R5rq0%3d&risl=&pid=ImgRaw&r=0",
            classify: []
          },
          {
            foodId: 11,
            name: "雪碧",
            price: 3,
            monthNum: 34,
            note: "",
            zan: 34,
            count: 0,
            srcUrl:"https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d62a6059252dd42a97b5b2850e3b5bb5c9eab864.jpg",
            classify: []
          },
          {
            foodId: 12,
            name: "啤酒",
            price: 3,
            monthNum: 34,
            note: "",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.1d546b7e508baca0a74cd1aa0893620d?rik=PTEn0XqFiaivwg&riu=http%3a%2f%2fwww.tlandworld.cn%2fupload%2fimage%2f2015%2f07%2f1438234856-2312.jpg&ehk=D%2fD7V3DQpw%2b9Zwq%2fVGfD9%2foGWq8PdTr%2fXd%2blF%2b24sRI%3d&risl=&pid=ImgRaw&r=0",
            classify: []
          }
        ]
      },
      {
        titleId: "title5",
        title: "主食",
        foodCount: 0,
        items: [{
            foodId: 13,
            name: "馒头",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/OIP-C.BzATr3LpRBov0rYPEAg_CAHaEb?pid=ImgDet&rs=1",
            classify: []
          },
          {
            foodId: 14,
            name: "米饭",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://img95.699pic.com/xsj/1h/qt/yd.jpg!/fh/300",
            classify: []
          },
          {
            foodId: 15,
            name: "煎饼",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse3-mm.cn.bing.net/th/id/OIP-C.tgsu6lhrbhacLwXCgKgE8gHaE7?pid=ImgDet&rs=1",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title6",
        title: "凉菜",
        foodCount: 0,
        items: [{
            foodId: 16,
            name: "凉拌木耳",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://img.ixintu.com/download/jpg/202001/a1132a40c6e6a5beab97a40305ab3593.jpg!con",
            classify: []
          },
          {
            foodId: 17,
            name: "凉拌黄瓜",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.0ad40a6cc9b171f23f99383bc57248e4?rik=k9Zw3tPvpmNiAA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50080%2f1068.jpg_wh860.jpg&ehk=0%2foTph79fWDn%2fm4HDZuGk0WHU%2bkcMPRvbcAj7YSptzI%3d&risl=&pid=ImgRaw&r=0",
            classify: []
          },
          {
            foodId: 18,
            name: "凉皮",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.18f1ddf03115b9f6b420839d995bbef9?rik=OZzfCmYt2Vk9Fw&riu=http%3a%2f%2fi1.sinaimg.cn%2ftravel%2f96%2f2009%2f0624%2fU3328P704T96D1112F4063DT20090624152841.jpg&ehk=8SeZen8Go0pXk88z%2bt%2fGgFHvNq41ez77eboa8HxDSZY%3d&risl=&pid=ImgRaw&r=0",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      // {
      //   titleId: "title7",
      //   title: "凉拌菜",
      //   foodCount: 0,
      //   items: [{
      //       foodId: 19,
      //       name: "馒头",
      //       price: 23,
      //       monthNum: 34,
      //       note: "很辣",
      //       zan: 34,
      //       count: 0,
      //       classify: []
      //     },
      //     {
      //       foodId: 20,
      //       name: "米饭",
      //       price: 23,
      //       monthNum: 34,
      //       note: "很辣",
      //       zan: 34,
      //       count: 0,
      //       classify: []
      //     },
      //     {
      //       foodId: 21,
      //       name: "煎饼",
      //       price: 23,
      //       monthNum: 34,
      //       note: "很辣",
      //       zan: 34,
      //       count: 0,
      //       classify: [{
      //           describe: "大份",
      //           price: 30
      //         },
      //         {
      //           describe: "中份",
      //           price: 23
      //         },
      //         {
      //           describe: "小份",
      //           price: 15
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        titleId: "title8",
        title: "黄焖鸡",
        foodCount: 0,
        items: [{
            foodId: 22,
            name: "黄焖鸡",
            price: 23,
            monthNum: 34,
            note: "原味",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.096009f515a714fb546331fc7e9945f3?rik=5hu%2fR1LNlRKS3g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181220%2f3848eb62acd947fda4c5f054269a9453.jpeg&ehk=dpyjgZQmOmyPQiRl1SDjIOL%2ftR1iOUB59w9hOXboR9s%3d&risl=&pid=ImgRaw&r=0",
            classify: []
          },
          {
            foodId: 23,
            name: "米饭",
            price: 23,
            monthNum: 34,
            note: "辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.096009f515a714fb546331fc7e9945f3?rik=5hu%2fR1LNlRKS3g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181220%2f3848eb62acd947fda4c5f054269a9453.jpeg&ehk=dpyjgZQmOmyPQiRl1SDjIOL%2ftR1iOUB59w9hOXboR9s%3d&risl=&pid=ImgRaw&r=0",
            classify: []
          },
          {
            foodId: 24,
            name: "煎饼",
            price: 23,
            monthNum: 34,
            note: "劲辣",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.096009f515a714fb546331fc7e9945f3?rik=5hu%2fR1LNlRKS3g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181220%2f3848eb62acd947fda4c5f054269a9453.jpeg&ehk=dpyjgZQmOmyPQiRl1SDjIOL%2ftR1iOUB59w9hOXboR9s%3d&risl=&pid=ImgRaw&r=0",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title9",
        title: "糕点",
        foodCount: 0,
        items: [{
            foodId: 25,
            name: "树莓小蛋糕",
            price: 23,
            monthNum: 34,
            note: "甜，不腻",
            zan: 34,
            count: 0,
            srcUrl:"https://photoos.macsc.com/2019/05/29/JPG-190529_94/TmDsiHspjS_small.jpg",
            classify: []
          },
          {
            foodId: 26,
            name: "草莓蛋糕",
            price: 23,
            monthNum: 34,
            note: "甜，不腻",
            zan: 34,
            count: 0,
            srcUrl:"https://tse1-mm.cn.bing.net/th/id/OIP-C.O6OlgWy9-FMQ4jsyH9DjjgHaHa?pid=ImgDet&rs=1",
            classify: []
          },
          {
            foodId: 27,
            name: "樱桃奶油蛋糕",
            price: 23,
            monthNum: 34,
            note: "甜，不腻",
            zan: 34,
            count: 0,
            srcUrl:"https://tse4-mm.cn.bing.net/th/id/OIP-C.Jk2HhnGS3BNZJh6okBYIYgHaHa?pid=ImgDet&rs=1",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title10",
        title: "雪糕",
        foodCount: 0,
        items: [{
            foodId: 28,
            name: "三色雪糕",
            price: 23,
            monthNum: 34,
            note: "甜，不腻",
            zan: 34,
            count: 0,
            srcUrl:"https://pic.52112.com/180713/JPG-180713_637/2PVlbFKo0t_small.jpg",
            classify: []
          },
          {
            foodId: 29,
            name: "巧克力雪糕",
            price: 23,
            monthNum: 34,
            note: "甜，不腻",
            zan: 34,
            count: 0,
            srcUrl:"https://photoos.macsc.com/180416/180416_175/0TLF87xGFO_small.jpg",
            classify: []
          },
          {
            foodId: 30,
            name: "五色冰棍",
            price: 23,
            monthNum: 34,
            note: "冰，甜",
            zan: 34,
            count: 0,
            srcUrl:"https://photoos.macsc.com/180416/180416_175/hTqKksnqzD_small.jpg",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      },
      {
        titleId: "title11",
        title: "其他",
        foodCount: 0,
        items: [{
            foodId: 31,
            name: "打包盒",
            price: 23,
            monthNum: 34,
            note: "节约粮食，人人有责",
            zan: 34,
            count: 0,
            srcUrl:"https://img14.360buyimg.com/n7/jfs/t23383/275/502568275/52060/9cc838b4/5b31efe1Nac09ad35.jpg",
            classify: []
          },
          {
            foodId: 32,
            name: "大蒜",
            price: 23,
            monthNum: 34,
            note: "吃饭来亿颗，香味杠杠的",
            zan: 34,
            count: 0,
            srcUrl:"https://photoos.macsc.com/180828/EPS-180828_70/StkxGw4LCh_small.jpg",
            classify: []
          },
          {
            foodId: 33,
            name: "辣椒面",
            price: 23,
            monthNum: 34,
            note: "很辣",
            zan: 34,
            count: 0,
            srcUrl:"https://cbu01.alicdn.com/img/ibank/2018/362/547/9438745263_102523312.jpg",
            classify: [{
                describe: "大份",
                price: 30
              },
              {
                describe: "中份",
                price: 23
              },
              {
                describe: "小份",
                price: 15
              }
            ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.storeInfo.storeName
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let height1, height2;
    let res = wx.getSystemInfoSync();
    let winHeight = res.windowHeight;
    let query = wx.createSelectorQuery();
    query.select(".head").boundingClientRect();
    query.exec(res => {
      height1 = res[0].height;
      let query1 = wx.createSelectorQuery();
      query1.select(".tab").boundingClientRect();
      query1.exec(res => {
        height2 = res[0].height;
        this.setData({
          listHeight: winHeight - height1 - height2
        });
        this.calculateHeight();
      });
    });
  },

  // jieSuang:function(){
  //   wx.redirectTo({
  //     url: '/pages/indexin/indexin',
  //   }),
  //   wx.showToast({
  //     showToast:"",
  //     title: '支付成功',
  //   })
  // },

  jieSuang:function(e){
    var totalMoney = this.data.totalMoney;
    if (totalMoney!=0) {
      wx.redirectTo({
        url: '/pages/indexin/indexin',
      }),
      wx.showToast({
        title: '支付成功',
      })
    } else {
      wx.showToast({
        title: '支付失败',
        icon:'error',
      })
    }

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  selectFood(e) {
    this.setData({
      activeIndex: e.target.dataset.index,
      viewTo: e.target.dataset.titleid
    });
  },
  calculateHeight() {
    let heigthArr = [];
    let height = 0;
    heigthArr.push(height);
    var query = wx.createSelectorQuery();
    query.selectAll(".title-group").boundingClientRect();
    query.exec(res => {
      for (let i = 0; i < res[0].length; i++) {
        console.log(res[0][i])
        height += parseInt(res[0][i].height);
        heigthArr.push(height);
      }
      this.setData({
        heigthArr: heigthArr
      });
    });
  },
  // 手机端有延迟 节流函数效果不好 用防抖函数凑合
  scroll(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let srollTop = e.detail.scrollTop;
      for (let i = 0; i < this.data.heigthArr.length; i++) {
        if (
          srollTop >= this.data.heigthArr[i] &&
          srollTop < this.data.heigthArr[i + 1] &&
          this.data.activeIndex != i
        ) {
          this.setData({
            activeIndex: i
          });
          if (i < 3) {
            this.setData({
              viewToLeft: 'title1left'
            })
          } else {
            this.setData({
              viewToLeft: 'title' + (i - 2) + 'left'
            })
          }
          return;
        }
      }
    }, 100)
  },
  add(e) {
    let groupindex = e.target.dataset.groupindex;
    let index = e.target.dataset.index;
    let countMsg =
      "food[" +
      groupindex +
      "].items[" +
      index +
      "].count";
    let count = this.data.food[groupindex].items[
      index
    ].count;
    let foodCountMsg = "food[" + groupindex + "].foodCount";
    let foodCount = this.data.food[groupindex].foodCount;
    let foodId = this.data.food[groupindex].items[
      index
    ].foodId;
    count += 1;
    foodCount += 1;
    this.setData({
      [countMsg]: count, //数据的局部更新
      [foodCountMsg]: foodCount
    });
    let cart = this.data.cart;
    let hasCart = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].foodId == foodId) {
        hasCart = true;
        break;
      }
    }
    if (hasCart) {
      cart[i].count++;
    } else {
      cart.push({ ...this.data.food[groupindex].items[index],
        groupindex
      });
    }
    let totalMoney = this.data.totalMoney;
    totalMoney += this.data.food[groupindex].items[
      index
    ].price;
    this.setData({
      cart: cart,
      totalMoney: totalMoney
    });
  },
  reduce(e) {
    let groupindex = e.target.dataset.groupindex;
    let index = e.target.dataset.index;
    let countMsg =
      "food[" +
      groupindex +
      "].items[" +
      index +
      "].count";
    let count = this.data.food[groupindex].items[
      index
    ].count;
    let foodCountMsg = "food[" + groupindex + "].foodCount";
    let foodCount = this.data.food[groupindex].foodCount;
    let foodId = this.data.food[groupindex].items[
      index
    ].foodId;
    count -= 1;
    foodCount -= 1;
    this.setData({
      [countMsg]: count,
      [foodCountMsg]: foodCount
    });
    let cart = this.data.cart;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].foodId == foodId) {
        if (cart[i].count == 1) {
          cart.splice(i, 1);
        } else {
          cart[i].count--;
        }
        break;
      }
    }
    let totalMoney = this.data.totalMoney;
    totalMoney -= this.data.food[groupindex].items[
      index
    ].price;
    this.setData({
      cart: cart,
      totalMoney: totalMoney
    });
  },
  listCart() {
    if (this.data.cart.length > 0) {
      this.setData({
        showCart: !this.data.showCart
      })
    }
  },
  selectTabItem(e) {
    if (e.target.dataset.index) {
      this.setData({
        tabIndex: e.target.dataset.index
      });
    }
  },
  preventScrollSwiper() {
    return false;
  },
  showStoreDetail() {
    this.setData({
      showModal: true
    });
  },
  closeModal(e) {
    this.setData({
      showModal: false
    });
  }
});