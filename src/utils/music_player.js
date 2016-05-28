let played = false

export default class MusicPlayer {
  constructor(src) {
    this.src = src
    this.init()
  }

  init() {
    const audio = document.createElement('audio')
    audio.addEventListener('canplaythrough', this.bindEvent.bind(this))
    audio.src = this.src
    audio.loop = true
    audio.load()
    this.audio = audio
  }

  bindEvent() {
    document.body.addEventListener('touchstart', () => {
      if (played) {
        return
      }
      played = true
      this.audio.play()
    })
  }

  pause() {
    this.audio.pause()
  }
}
