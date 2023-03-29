try {
  (() => {
    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;
    var h = new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
      "drink"
    );
    //   我是CV大师
    //   cvs！ @SunRyK曉K 20221029 v1.000
    ("use strict");
    //非渲染，数据储存部分
    const NumDate = [];
    const NumTime = [];
    const NumM = [];
    const NumS = [];
    const NumDark = [];
    const NumBattery = [];
    const Battery = [];
    const WeekEN = [];
    const WeekCN = [];

    for (let i = 1; i < 12; i++) {
      Battery.push("images/Battery/" + i + ".png");
    };
    for (let i = 0; i < 10; i++) {
      NumDate.push("images/Num_Date/" + i + ".png");
      NumTime.push("images/Num_Time/" + i + ".png");
      NumM.push("images/Num_M/" + i + ".png");
      NumS.push("images/Num_S/" + i + ".png");
      NumDark.push("images/Num_Dark/" + i + ".png");
      NumBattery.push("images/Num_Battery/" + i + ".png");
    };
    for (let i = 1; i < 8; i++) {
      WeekEN.push("images/Week_EN/" + i + ".png");
      WeekCN.push("images/Week_CN/" + i + ".png");
    };
    const LightBg = {
      x: 0,
      y: 0,
      src: "images/lightbg.png",
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightTime = {
      hour_zero: true,
      hour_startX: 6,
      hour_startY: 328,
      hour_array: NumTime,
      hour_align: hmUI.align.LEFT,
      hour_space: 0,
      minute_zero: true,
      minute_startX: 99,
      minute_startY: 282,
      minute_array: NumTime,
      minute_align: hmUI.align.LEFT,
      minute_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightDate = {
      month_startX: 10,
      month_startY: 395,
      month_align: hmUI.align.LEFT,
      month_en_array: NumDate,
      month_sc_array: NumDate,
      month_tc_array: NumDate,
      month_zero: 1,
      month_space: -1,
      day_startX: 59,
      day_startY: 395,
      day_align: hmUI.align.LEFT,
      day_en_array: NumDate,
      day_sc_array: NumDate,
      day_tc_array: NumDate,
      day_zero: 1,
      day_space: -1,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightWeek = {
      x: 98,
      y: 349,
      week_en: WeekEN,
      week_tc: WeekCN,
      week_sc: WeekCN,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightBattery = {
      x: 60,
      y: 20,
      w: 33,
      h_space: -2,
      type: hmUI.data_type.BATTERY,
      font_array: NumBattery,
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightBatteryP = {
      x: [27, 32, 36, 42, 49, 54, 62, 67, 70, 77, 82],
      y: [33, 28, 23, 19, 14, 11, 8, 5, 4, 4, 4],
      image_array: Battery,
      image_length: 11,
      type: hmUI.data_type.BATTERY,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightHeart = {
      x: 134,
      y: 400,
      w: 48,
      h: 23,
      h_space: -2,
      type: hmUI.data_type.HEART,
      font_array: NumM,
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightStep = {
      x: 70,
      y: 440,
      w: 86,
      h: 23,
      h_space: 1,
      type: hmUI.data_type.STEP,
      font_array: NumM,
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const Lightdisconnect = {
      x: 107,
      y: 22,
      type: hmUI.system_status.DISCONNECT,
      src: "images/disconect.png",
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightLock = {
      x: 134,
      y: 33,
      type: hmUI.system_status.LOCK,
      src: "images/lock.png",
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const LightDisturb = {
      x: 154,
      y: 56,
      type: hmUI.system_status.DISTURB,
      src: "images/sleep.png",
      align_h: hmUI.align.CENTER_H,
      show_level: hmUI.show_level.ONLY_NORMAL,
    };
    const DarkBg = {
      x: 0,
      y: 0,
      src: "images/darkbg.png",
      show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
    };
    const DarkTime = {
      hour_zero: true,
      hour_startX: 6,
      hour_startY: 257,
      hour_array: NumDark,
      hour_align: hmUI.align.LEFT,
      hour_space: -3,
      minute_zero: true,
      minute_startX: 95,
      minute_startY: 225,
      minute_array: NumDark,
      minute_align: hmUI.align.LEFT,
      minute_space: -3,
      show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
    }; 
    const AodBg = {
      x: 0,
      y: 0,
      src: "images/darkbg.png",
      show_level: hmUI.show_level.ONAL_AOD,
    };
    const AodTime = {
      hour_zero: true,
      hour_startX: 6,
      hour_startY: 257,
      hour_array: NumDark,
      hour_align: hmUI.align.LEFT,
      hour_space: -3,
      minute_zero: true,
      minute_startX: 95,
      minute_startY: 225,
      minute_array: NumDark,
      minute_align: hmUI.align.LEFT,
      minute_space: -3,
      show_level: hmUI.show_level.ONAL_AOD,
    };
    const editSetting = {
      edit_id: 101,
      x: 0,
      y: 0,//84
      w: 192,
      h: 490,
      select_image: 'edit/mask.png',
      un_select_image: 'edit/mask.png',
      default_type: 0x186a1,
      optional_types: [
        {
          type: 0x186a1,
          preview: 'edit/light.png',
          title_sc: '浅色模式-长按以应用',
          title_tc: '淺色模式-長按以應用',
          title_en: 'Light Mode - Long press to apply'
        },
        {
          type: 0x186a2,
          preview: 'edit/dark.png',
          title_sc: '深色模式-长按以应用',
          title_tc: '深色模式-長按以應用',
          title_en: 'Dark Mode - Long press to apply'
        }],
      count: 2,
      tips_BG: 'edit/tip.png',
      tips_x: 35,
      tips_y: 410,
      tips_width: 121,
      tips_margin: 8
    };
    const logger = DeviceRuntimeCore.HmLogger.getLogger("klee");
    __$$module$$__.module = DeviceRuntimeCore.Page({
      init_view() {
        //开始渲染
        select = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, editSetting)
        var modetype = select.getProperty(hmUI.prop.CURRENT_TYPE)
        switch (modetype) {
          case 0x186a1:
            hmUI.createWidget(hmUI.widget.IMG, LightBg);
            var anim = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
              x: 0,
              y: 87,
              anim_path: "images/Animation",
              anim_prefix: "Nahida",
              anim_ext: "png",
              anim_fps: 20,
              anim_size: 42,
              repeat_count: 0,
              anim_repeat: true,
              anim_status: 1
            });
            hmUI.createWidget(hmUI.widget.TEXT_IMG, LightBattery);
            hmUI.createWidget(hmUI.widget.TEXT_IMG, LightHeart);
            hmUI.createWidget(hmUI.widget.TEXT_IMG, LightStep);
            hmUI.createWidget(hmUI.widget.IMG_STATUS, Lightdisconnect);
            hmUI.createWidget(hmUI.widget.IMG_STATUS, LightLock);
            hmUI.createWidget(hmUI.widget.IMG_STATUS, LightDisturb);
            hmUI.createWidget(hmUI.widget.IMG_PROGRESS, LightBatteryP);
            hmUI.createWidget(hmUI.widget.IMG_WEEK, LightWeek);
            hmUI.createWidget(hmUI.widget.IMG_DATE, LightDate);
            hmUI.createWidget(hmUI.widget.IMG_TIME, LightTime);
            hmUI.createWidget(hmUI.widget.IMG, AodBg);
            hmUI.createWidget(hmUI.widget.IMG_TIME, AodTime);
            //创建全局遮罩
            const mask = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });
            //创建摁下事件监听-动画暂停
            mask.addEventListener(hmUI.event.CLICK_DOWN, function () {
              anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.PAUSE)
              const timer1 = timer.createTimer(
                1200,
                800,
                function () {
                  //操作反悔，动画恢复
                  const isPause = anim.getProperty(hmUI.prop.ANIM_IS_PAUSE)
                  if (isPause) {
                    anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME)
                    timer.stopTimer(timer1)
                  }
                },
                {}
              )
            });
            //创建抬起事件监听-动画恢复
            mask.addEventListener(hmUI.event.CLICK_UP, function () {
              timer.stopTimer(timer1)
              anim.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME)
            });
            //亮度条跳转
            const lightmask0 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 1,
              y: 1,
              w: 80,
              h: 80,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });
            //创建抬起事件监听-跳转调整亮度界面
            lightmask0.addEventListener(hmUI.event.CLICK_UP, function () {
              hmApp.startApp({ url: 'Settings_lightAdjustScreen', native: true })
            })
            break;
          case 0x186a2:
            hmUI.createWidget(hmUI.widget.IMG, DarkBg);
            hmUI.createWidget(hmUI.widget.IMG_TIME, DarkTime);
            //亮度条跳转
            const lightmask1 = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 1,
              y: 1,
              w: 80,
              h: 80,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });
            //创建抬起事件监听-跳转调整亮度界面
            lightmask1.addEventListener(hmUI.event.CLICK_UP, function () {
              hmApp.startApp({ url: 'Settings_lightAdjustScreen', native: true })
            })
            break;
        }

      },
      onInit() {
        console.log("index page.js on init invoke");
        this.init_view();
      },

      onReady() {
        console.log("index page.js on ready invoke");
      },

      onShow() {
        console.log("index page.js on show invoke");
      },

      onHide() {
        console.log("index page.js on hide invoke");
      },

      onDestory() {
        console.log("index page.js on destory invoke");
      },
    });
  })();
} catch (e) {
  console.log(e);
}