Page({
  data: {
    qrcode: false,
    name: '曹茂辉',
    list: [
      {
        id: 'baseInfo',
        name: '基本信息',
        open: false,
        items: [
          '---------------------------------------',
          '姓名:曹茂辉',
          '性别:男',
          '出生年月:1990/10',
          '电话:18392187492',
          '邮箱:caocmh@qq.com',
          '学校:西安建筑科技大学',
          '专业:电子信息科学与技术',
          '学历:本科',
          '单位:英业达集团无敌科技（西安）有限公司',
          '住址:雁塔区科技四路鸿基新城沁园小区',
          '---------------------------------------'
        ]
      },
      {
        id: 'education',
        name: '教育经历',
        open: false,
        items: [
          '---------------------------------------',
          '本科',
          '2011/9--2015/7',
          '西安建筑科技大学',
          '电子信息科学与技术',
          '---------------------------------------'
        ]
      }, {
        id: 'experence',
        name: '工作经验',
        open: false,
        items: [
          '---------------------------------------',
          '软件工程师',
          '2015/10-至今',
          '所属公司:英业达集团无敌科技(西安)有限公司',
          '主要工作内容:',
          '1.主要负责指纹识别应用方面的开发与调试.',
          '2.指纹sensor成像质量的检测软件开发。',
          '3.图像识别算法，模式识别算法的验证移植与开发。',
          '4.Android 应用开发。',
          '---------------------------------------'
        ]
      }, {
        id: 'media',
        name: '项目经验',
        open: false,
        items: [
          '---------------------------------------',
          'RobotSetting App:',
          '2017/4-至今',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:安卓平台App 设置robot 参数，写入robot ，robot 按照参数定义执行动作。',
          '主要负责:',
          '安卓app 开发。',
          '---------------------------------------',
          '指纹箱包锁',
          '2016/12-至今',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:旅行箱添加指纹解锁功能。',
          '主要负责:',
          '1.指纹锁功能测试软件的开发。软件自动检测指纹锁按键，LED 以及指纹图像等是否达标。自动调节sensor 参数以达到最佳成像质量作为默认出厂参数。',
          '2.指纹sensor 质量检测软件开发。主要从指纹sensor 成像质量，特征点数，图像方差以及有无坏点等方面检测sensor 质量。',
          '---------------------------------------',
          '图像识别算法移植',
          '2016/3-2016/5',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:sift图像识别算法移植到BXC 平台。',
          '主要负责:独立开发，自行测试。',
          '---------------------------------------',
          'CameraTestTool',
          '2016/3-2016/5',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:采集图像评估CMOS 成像质量。使用directShow 采集图像，opencv 显示图像，zbar解析二维码 。MFC框架做界面。',
          '具体功能:',
          '1.采集并显示图像。',
          '2.色彩评估。',
          '3.解析度评估，使用qrcode 解码测试。',
          '4.坏点(白点黑点)评估。',
          '主要负责:独立开发，自行测试。',
          '---------------------------------------',
          'U蜜',
          '2016/2-2016/12',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:U盘加入指纹识别和记住密码功能。',
          '1.U盘分出私密区，需要使用注册的指纹进行解锁才会显示，可存储私密资料。',
          '2.使用注册过的指纹，并按下U 盘按键，会自动键入对应的密码。',
          '主控velosti,指纹控制stm32f401.管理工具，MFC 框架。',
          '主要负责:主要负责二次开发和项目维护，bug 修改，与后面根据客户需求修改功能。',
          '---------------------------------------',
          'BestaFingerUtility',
          '2015/10-至今',
          '所属公司:英业达集团无敌科技（西安）有限公司',
          '项目描述:上位机程序，搭配公司设计的公版指纹工具，对公版的功能进行检测验证。',
          '主要功能:',
          '1.注册指纹，可定义用户名和需要录入的指纹数。',
          '2.清除指纹，清除已经录入的所有指纹，删除所有用户。',
          '3.删除用户，删除选中所有用户和对应指纹。',
          '4.指纹比对，显示比对信息。比对成功显示匹配的用户信息。',
          '5.指纹图像以及sensor参数的抓去和设置，调整sensor参数使得获取的图像质量更好。',
          '使用MFC框架，串口通信。',
          '主要负责:独立开发测试，相继开发了简化版，工厂使用版等只具有某一部分功能的特定用途版本，目前维护阶段。软件正常稳定使用减少了sensor检测的人力物力。',
          '---------------------------------------'
        ]

      },
      {
        id: 'skill',
        name: '掌握技能',
        open: false,
        items: [
          '---------------------------------------',
          'C语言:熟练',
          'C++:熟练',
          '图像处理:一般',
          'java:了解',
          'Android:了解',
          'js:了解',
          'Linux:了解',
          '数据库:了解',
          '---------------------------------------'
        ]
      },
      {
        id: 'map',
        name: '爱好特长',
        items: [
          '喜欢看书，看电影，散步。']
      }
    ]
  },
  baseInfoBtn: function (e) {
    this.data.qrcode = false;
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
        if (id == 'baseInfo' && list[i].open){
          this.data.qrcode = true
        }
      } else {
        list[i].open = false
      }
    }
    console.log(this.data.qrcode)
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function () {
    return {
      title: 'Resume',
      desc: 'Tristan\'s Resume',
      path: '/page/user?id=123'
    }
  }
})