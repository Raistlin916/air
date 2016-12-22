import React from 'react'
import ReactDom from 'react-dom'
import 'normalize.css'
import './global.scss'

import App from './App.js'

//import './utils/wx'
// import MusicPlayer from './utils/music_player'
// setTimeout(() => {
//   new MusicPlayer('http://img.yzcdn.cn/wind_blow.wav')
// }, 1000)

const audio = new Audio()
audio.src = 'http://img.yzcdn.cn/air_music_2.mp3'
audio.autoplay = true

function playMusic() {
  if (audio.duration > 0 && !audio.paused) {
    return
  }
  audio.play()
}
document.body.addEventListener('touchstart', playMusic)
audio.addEventListener('canplay', playMusic)
document.addEventListener('WeixinJSBridgeReady', playMusic, false)

ReactDom.render(<App />, document.getElementById('container'))

