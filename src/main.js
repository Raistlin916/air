import React from 'react'
import ReactDom from 'react-dom'
import 'normalize.css'
import './global.scss'

import App from './App.js'

//import './utils/wx'
import MusicPlayer from './utils/music_player'
setTimeout(() => {
  new MusicPlayer('http://img.yzcdn.cn/air_music.mp3')
}, 1000)

ReactDom.render(<App />, document.getElementById('container'))
