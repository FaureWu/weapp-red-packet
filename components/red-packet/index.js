const audio = wx.createInnerAudioContext()
audio.src = 'https://gxm-ecommerce.oss-cn-shenzhen.aliyuncs.com/user_upload/rc-upload-1547213682422-20.mp3'

Component({
  data: {
    open: false,
  },
  methods: {
    handleOpen() {
      audio.play()
      this.setData({ open: true })
    },
  }
})