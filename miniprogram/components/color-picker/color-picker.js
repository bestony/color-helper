Component({
  properties: {
    //单位rpx实际像素
    rpxRatio: {
      type: Number,
      value: 1
    },
    colorData: {
      type: Object,
      value: {}
    }
  },
  data: {
    //基础色相(色盘右上顶点的颜色)
    hueData: {
      colorStopRed: 255,
      colorStopGreen: 0,
      colorStopBlue: 0,
    },
    //选择点的颜色
    pickerData: {
      x: 0,
      y: 480,
      red: 0,
      green: 0,
      blue: 0,
      hex: '#000000'
    },
    //色相控制条位置
    barY: 0,
    top: 0, //组件的位置
    left: 0
  },
  lifetimes: {
    attached() {
      this.setData({
        hueData: this.data.colorData.hueData,
        pickerData: this.data.colorData.pickerData,
        barY: this.data.colorData.barY
      })
    },
    ready() {
      const _this = this
      const query = wx.createSelectorQuery().in(this)
      query.select('#wrapper').boundingClientRect(rect => {
        console.log(rect.top)
        _this.setData({
          top: rect.top,
          left: rect.left
        })
      }).exec()
    }
  },
  methods: {
    //选中颜色
    _chooseColor(e) {
      let x = (e.changedTouches[0].pageX - this.data.left) / this.data.rpxRatio
      let y = (e.changedTouches[0].pageY - this.data.top) / this.data.rpxRatio
      x = x > 480 ? 480 : x
      y = y > 480 ? 480 : y
      x = x < 0 ? 0 : x
      y = y < 0 ? 0 : y
      this.setData({
        ['pickerData.x']: x,
        ['pickerData.y']: y
      })
      this._changeColor(x, y)
    },
    //拖动色相bar
    _changeBar(e) {
      let y = (e.changedTouches[0].pageY - this.data.top) / this.data.rpxRatio
      y = y > 490 ? 490 : y
      y = y < 0 ? 0 : y
      this.setData({
        barY: y
      })
      this._changeHue(y)
    },
    //改变颜色
    _changeColor(x, y) {
      //色相
      const sRed = this.data.hueData.colorStopRed
      const sGreen = this.data.hueData.colorStopGreen
      const sBlue = this.data.hueData.colorStopBlue
      //选择的颜色
      let [pRed, pGreen, pBlue] = [this.data.pickerData.red, this.data.pickerData.green, this.data.pickerData.blue]
      //首先计算X轴
      if (sRed === 255) {
        //移动1单位需要减少多少颜色值
        const greenRatioX = (255 - sGreen) / 480
        const blueRatioX = (255 - sBlue) / 480
        const greenValueX = 255 - x * greenRatioX
        const blueValueX = 255 - x * blueRatioX
        pRed = 255
        pGreen = Math.round(greenValueX > sGreen ? greenValueX : sGreen)
        pBlue = Math.round(blueValueX > sBlue ? blueValueX : sBlue)
      }
      if (sGreen === 255) {
        const redRatioX = (255 - sRed) / 480
        const blueRatioX = (255 - sBlue) / 480
        const redValueX = 255 - x * redRatioX
        const blueValueX = 255 - x * blueRatioX
        pRed = Math.round(redValueX > sRed ? redValueX : sRed)
        pGreen = 255
        pBlue = Math.round(blueValueX > sBlue ? blueValueX : sBlue)
      }
      if (sBlue === 255) {
        const redRatioX = (255 - sRed) / 480
        const greenRatioX = (255 - sGreen) / 480
        const redValueX = 255 - x * redRatioX
        const greenValueX = 255 - x * greenRatioX
        pRed = Math.round(redValueX > sRed ? redValueX : sRed)
        pGreen = Math.round(greenValueX > sGreen ? greenValueX : sGreen)
        pBlue = 255
      }

      //计算完X轴的值再根据这个值去计算Y轴
      const redRatioY = pRed / 480
      const greenRatioY = pGreen / 480
      const blueRatioY = pBlue / 480

      const redValueY = y * redRatioY
      const greenValueY = y * greenRatioY
      const blueValueY = y * blueRatioY
      const hex = this._rgbToHex(pRed - redValueY, pGreen - greenValueY, pBlue - blueValueY)
      this.setData({
        ['pickerData.red']: Math.round(pRed - redValueY),
        ['pickerData.green']: Math.round(pGreen - greenValueY),
        ['pickerData.blue']: Math.round(pBlue - blueValueY),
        ['pickerData.hex']: hex
      })
      this.triggerEvent('changecolor', {
        colorData: this.data
      })
    },
    //改变色相
    _changeHue(y) {
      //根据色相bar的长度(490)计算出每拖动bar 0.32就改变一次色相
      //色相的变化一共分为六个阶段,每次拖动81.67就完成一个阶段
      if (y < 81.67) {
        const value = y / .32 > 255 ? 255 : y / .32
        this.setData({
          ['hueData.colorStopRed']: 255,
          ['hueData.colorStopGreen']: Math.round(value),
          ['hueData.colorStopBlue']: 0
        })
      }
      if (y >= 81.67 && y < 163.34) {
        const value = (y - 81.67) / .32 > 255 ? 255 : (y - 81.67) / .32
        this.setData({
          ['hueData.colorStopRed']: 255 - Math.round(value),
          ['hueData.colorStopGreen']: 255,
          ['hueData.colorStopBlue']: 0
        })
      }
      if (y >= 163.34 && y < 245.01) {
        const value = (y - 163.34) / .32 > 255 ? 255 : (y - 163.34) / .32
        this.setData({
          ['hueData.colorStopRed']: 0,
          ['hueData.colorStopGreen']: 255,
          ['hueData.colorStopBlue']: Math.round(value)
        })
      }
      if (y >= 245.01 && y < 326.68) {
        const value = (y - 245.01) / .32 > 255 ? 255 : (y - 245.01) / .32
        this.setData({
          ['hueData.colorStopRed']: 0,
          ['hueData.colorStopGreen']: 255 - Math.round(value),
          ['hueData.colorStopBlue']: 255
        })
      }
      if (y >= 326.68 && y < 408.35) {
        const value = (y - 326.68) / .32 > 255 ? 255 : (y - 326.68) / .32
        this.setData({
          ['hueData.colorStopRed']: Math.round(value),
          ['hueData.colorStopGreen']: 0,
          ['hueData.colorStopBlue']: 255
        })
      }
      if (y >= 408.35) {
        const value = (y - 408.35) / .32 > 255 ? 255 : (y - 408.35) / .32
        this.setData({
          ['hueData.colorStopRed']: 255,
          ['hueData.colorStopGreen']: 0,
          ['hueData.colorStopBlue']: 255 - Math.round(value)
        })
      }
      //改变完色相需要再次改变选择的颜色
      this._changeColor(this.data.pickerData.x, this.data.pickerData.y)
    },
    _rgbToHex(r, g, b) {
      let hex = ((r << 16) | (g << 8) | b).toString(16)
      if (hex.length < 6) {
        hex = `${'0'.repeat(6-hex.length)}${hex}`
      }
      if (hex == '0') {
        hex = '000000'
      }
      return `#${hex}`
    }
  }
})