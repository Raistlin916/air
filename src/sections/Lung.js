import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import BubbleEffect from '../components/BubbleCanvas'
import AnmElement from '../components/AnmElement'
import './styles/lung.scss'

export default class Lung extends Component {

  componentDidMount() {
    const canvas = findDOMNode(this).querySelector('canvas')
    const coverImg = new Image()
    coverImg.src = 'http://img.yzcdn.cn/public_files/2016/05/26/d45bddcf2c2463c7c7aa324042705856.png'
    const bubbleEffect = new BubbleEffect(canvas, coverImg)
    bubbleEffect.init()
  }

  render() {
    return (
      <AnmElement className="lung-bg">
        <canvas width={320} height={514} />
        <AnmElement className="circle-btn" />
      </AnmElement>
    )
  }
}
