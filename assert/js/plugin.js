class JinVideo {
  constructor(config) {
    this.video = document.querySelector(config.dom + ' video') //
    this.element = this.video.parentNode
    this.playBtn = document.querySelector(config.dom + ' .JV-play i')
    this.pauseBtn = document.querySelector(config.dom + ' .JV-pause i')
    this.totalTime = document.querySelector(config.dom + ' .totalTime')
    this.currentTime = document.querySelector(config.dom + ' .currentTime')
  }
  init() {
    let _this = this
    let videoReady = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (_this.video.readyState) {
          resolve(); //代码正常执行！
        }
      }, 500);
    }).then(function (result) {
      _this.bindEvent()
      _this.totalTime.innerHTML = _this.timeFormat(_this.video.readyState)
    }).catch(function (reason) {
      console.log(reason)
    })
  }

  bindEvent() {    //控制组件事件绑定
    let _this = this
    this.playBtn.addEventListener("click", function () {
      _this.playControl()
    })
  }

  timeFormat(s) {   //时间格式化
    let t;
    if (s > -1) {
      let hour = Math.floor(s / 3600);
      let min = Math.floor(s / 60) % 60;
      let sec = s % 60;
      if (hour < 10) {
        t = '0' + hour + ":";
      } else {
        t = hour + ":";
      }

      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec.toFixed();
    }
    return t;
  }

  playControl() {
    if (this.video.paused) {
      this.video.play()
      this.playBtn.setAttribute("class", "iconfont icon-weibiaoti519")
    } else {
      this.video.pause()
      this.playBtn.setAttribute("class", "iconfont icon-bofang")
    }
  }


}


// 通过 CommonJS 规范导出 show 函数
module.exports = JinVideo;